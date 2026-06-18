# Hướng dẫn Deploy dự án Villa lên VPS (Ubuntu) kiểu mới (Dùng Docker + PostgreSQL)

Kiến trúc mới của chúng ta sử dụng **PostgreSQL** chạy trong **Docker** giúp việc quản lý database nhàn hơn rất nhiều, an toàn và dễ backup hơn.

Dưới đây là từng bước chi tiết để thiết lập VPS Ubuntu (22.04 hoặc 24.04).

## 1. Cài đặt các phần mềm cơ bản & Docker

Đăng nhập vào VPS của bạn qua SSH và chạy các lệnh sau:

```bash
# 1. Cập nhật hệ thống
sudo apt update && sudo apt upgrade -y

# 2. Cài đặt Git, Nginx, Curl (Bỏ cài mysql-server)
sudo apt install -y git nginx curl

# 3. Cài đặt Docker & Docker Compose (Để chạy PostgreSQL)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Cho phép user hiện tại dùng docker mà không cần gõ sudo
sudo usermod -aG docker $USER

# 4. Cài đặt Node.js (Bản 20 LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 5. Cài đặt PM2 (Quản lý tiến trình Node.js)
sudo npm install -g pm2
```

## 2. Khởi chạy Database PostgreSQL bằng Docker

Chỉ cần chạy 1 dòng lệnh này, Docker sẽ tự tải PostgreSQL về và chạy ngầm (thay `mat_khau_cua_ban_123` bằng mật khẩu bạn muốn):

```bash
sudo docker run --name villa_postgres --restart unless-stopped -e POSTGRES_PASSWORD=mat_khau_cua_ban_123 -e POSTGRES_DB=villa_db -p 5432:5432 -d postgres
```
*(Cờ `--restart unless-stopped` giúp database tự động chạy lại nếu VPS bị khởi động lại).*

## 3. Clone source code và Cài đặt

```bash
cd /var/www

# Clone code của bạn từ GitHub
git clone https://github.com/your-username/villa-app.git villa
cd villa
```

## 4. Cài đặt Database (Prisma) và Backend

```bash
# Đầu tiên, vào thư mục database để cài đặt và chạy Prisma
cd /var/www/villa/database
npm install

# Tạo file .env cho database
nano .env
```
Dán nội dung `.env` vào file (đảm bảo đúng mật khẩu cấu hình ở Docker):
```env
DATABASE_URL="postgresql://postgres:mat_khau_cua_ban_123@localhost:5432/villa_db?schema=public"
```
Lưu và thoát (Ctrl+O, Enter, Ctrl+X).

Chạy các lệnh Prisma (Phải chạy trong thư mục `database` này):
```bash
# Đẩy schema lên database PostgreSQL
npx prisma db push

# Generate client (nó sẽ tự động đẩy code sang thư mục backend)
npx prisma generate
```

Sau khi xong phần database, di chuyển sang thư mục backend để cài đặt và build:
```bash
cd /var/www/villa/backend
npm install

# Tạo file .env cho backend
nano .env
```
Dán nội dung tương tự vào file `.env` của backend:
```env
DATABASE_URL="postgresql://postgres:mat_khau_cua_ban_123@localhost:5432/villa_db?schema=public"

# Google Drive Storage Config
GOOGLE_PROJECT_ID="apiplace-400104"
GOOGLE_CLIENT_EMAIL="..."
GOOGLE_PRIVATE_KEY="..."
GOOGLE_DRIVE_FOLDER_ID="..."
```
Lưu và thoát (Ctrl+O, Enter, Ctrl+X).

Tiếp tục build Backend:
```bash
# Build ứng dụng NestJS
npm run build
```

## 5. Khởi chạy Backend bằng PM2

```bash
pm2 start dist/main.js --name "villa-backend"
pm2 save
pm2 startup
```
*(Chạy dòng lệnh mà `pm2 startup` in ra để hoàn tất).*

## 6. Build Frontend

```bash
cd /var/www/villa/frontend
npm install
npm run build
```

## 7. Cấu hình Nginx (Tên miền và SSL)

Tạo file cấu hình:
```bash
sudo nano /etc/nginx/sites-available/villa
```

Dán nội dung sau vào (Thay `yourdomain.com`):
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        root /var/www/villa/frontend/dist;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:3001; # Đảm bảo đúng port backend (3001)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Kích hoạt và chạy Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/villa /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 8. Cài đặt SSL (HTTPS) miễn phí

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```
