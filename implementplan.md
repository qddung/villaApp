# Kế hoạch triển khai: Chuyển đổi lưu trữ Local sang Google Drive + Weserv CDN

Tài liệu này hướng dẫn chi tiết các bước chuyển đổi dịch vụ lưu trữ hình ảnh của dự án Villa (NestJS backend) từ Local File System sang **Google Drive API** kết hợp **Weserv CDN (`wsrv.nl`)** để tối ưu hóa hiệu năng hiển thị và giảm tải cho server.

---

## 1. Yêu cầu chuẩn bị từ phía người dùng (User Review Required)

Để kết nối với Google Drive API, tôi cần các thông tin cấu hình để thêm vào file `.env` của backend.

> [!IMPORTANT]
> **Các khóa (keys) tôi cần bạn cung cấp để tiếp tục:**
> 1. `GOOGLE_PROJECT_ID`: ID của dự án trên Google Cloud.
> 2. `GOOGLE_CLIENT_EMAIL`: Email của Service Account.
> 3. `GOOGLE_PRIVATE_KEY`: Khóa Private Key của Service Account (bao gồm `-----BEGIN PRIVATE KEY-----...`).
> 4. `GOOGLE_DRIVE_FOLDER_ID`: ID của thư mục trên Google Drive mà bạn đã cấp quyền "Editor" cho Service Account trên.

Bạn có thể cung cấp trực tiếp cho tôi ở ô chat này, hoặc tự dán vào file `c:\DEV\villa\backend\.env`.

---

## 2. Câu hỏi mở (Open Questions)

> [!NOTE]
> **Khả năng tương thích ngược cho dữ liệu cũ:**
> Hệ thống hiện tại đọc file trực tiếp từ thư mục `public/img/villa_data`. Nếu chuyển sang Google Drive, bạn có muốn tôi viết một script nhỏ để **upload tự động toàn bộ ảnh cũ từ thư mục local lên Google Drive** để đồng bộ hóa hoàn toàn không? Hay chúng ta chỉ áp dụng Google Drive cho các ảnh upload mới từ giờ trở đi và dữ liệu cũ vẫn load từ thư mục public của server?

---

## 3. Các thay đổi đề xuất (Proposed Changes)

### Phân hệ Backend (`c:\DEV\villa\backend`)

#### [MODIFY] [backend/package.json](file:///c:/DEV/villa/backend/package.json)
- Thêm thư viện `googleapis` (Đã chạy npm install).

#### [MODIFY] [backend/.env](file:///c:/DEV/villa/backend/.env)
- Thêm các biến môi trường kết nối Google Drive như yêu cầu ở phần 1.

#### [MODIFY] [backend/src/images/images.service.ts](file:///c:/DEV/villa/backend/src/images/images.service.ts)
- **Upload Image (`uploadImage`)**:
  - Khởi tạo `google.auth.GoogleAuth` và `google.drive`.
  - Thay vì lưu bằng `fs.writeFileSync`, hệ thống sẽ chuyển `file.buffer` thành luồng (stream) và gọi `drive.files.create`.
  - Cập nhật quyền của file tải lên thành `anyone` (public reader) để mọi người có thể xem.
  - URL trả về sẽ là định dạng Weserv CDN: `https://wsrv.nl/?url=drive.google.com/uc?export=download%26id%3DFILE_ID&output=webp`.
- **Delete Image (`deleteImage`)**:
  - Nhận URL có chứa File ID, tiến hành gọi API Google Drive để xóa file (di chuyển vào thùng rác).
- **Get Images (`getImagesForVilla`)**:
  - Vì ảnh lưu lên Drive không thể query nhanh chóng theo thư mục con giống local, ta sẽ đồng bộ các URL này vào cơ sở dữ liệu Postgres (bảng `VillaImage` hiện có). Khi cần lấy ảnh cho Villa, hệ thống sẽ truy vấn từ DB thay vì đọc file hệ thống.

---

### Phân hệ Frontend (`c:\DEV\villa\frontend`)

#### [MODIFY] [frontend/src/lib/api.ts](file:///c:/DEV/villa/frontend/src/lib/api.ts)
- Hàm `getFullImageUrl` hiện tại đã xử lý việc URL bắt đầu bằng `http` thì giữ nguyên. Điều này hoàn toàn tương thích với các URL CDN mới (sẽ là `https://wsrv.nl/...`). Không cần thay đổi lớn ở Frontend.

---

## 4. Kế hoạch xác minh & kiểm thử (Verification Plan)

### Automated Tests
- Đảm bảo NestJS biên dịch không lỗi `npm run build`.

### Kiểm thử thủ công (Manual Verification)
1. **Kiểm tra kết nối**: Đảm bảo service account kết nối thành công tới folder Google Drive.
2. **Kiểm tra tải lên**: Mở trang Admin sửa Villa, tải ảnh mới lên và kiểm tra xem ảnh có xuất hiện trên Google Drive hay không.
3. **Kiểm tra hiển thị**: Truy cập trang chủ, inspect ảnh xem đã được format qua CDN WebP hay chưa.
4. **Kiểm tra xóa**: Xóa ảnh từ trang admin và kiểm tra file tương ứng đã bị xóa khỏi thư mục Google Drive chưa.
