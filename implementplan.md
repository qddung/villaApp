# Kế hoạch triển khai: Chuyển đổi lưu trữ Cloudinary sang Google Drive + Weserv CDN

Tài liệu này hướng dẫn chi tiết các bước chuyển đổi dịch vụ lưu trữ hình ảnh của dự án Rentify từ Cloudinary sang **Google Drive API** kết hợp **Weserv CDN (`wsrv.nl`)** để tối ưu hóa hiệu năng hiển thị và tiết kiệm chi phí.

---

## 1. Yêu cầu chuẩn bị từ phía người dùng (User Review Required)

Để kết nối với Google Drive API, bạn cần chuẩn bị các thông tin cấu hình và khai báo trong file cấu hình môi trường `.env`.

> [!IMPORTANT]
> **Các thông tin cấu hình bắt buộc:**
> 1. **Google Service Account**: Tạo một Service Account trong Google Cloud Console, tạo và tải về file Key dạng JSON.
> 2. **Google Drive API**: Kích hoạt (Enable) dịch vụ Google Drive API trên Google Cloud Console cho dự án.
> 3. **Thư mục lưu trữ**: Tạo một thư mục trống trên Google Drive cá nhân của bạn, lấy **Folder ID** (chuỗi ký tự ở cuối đường dẫn thư mục trên trình duyệt) và **chia sẻ quyền "Editor"** cho địa chỉ email của Google Service Account vừa tạo.
> 4. **Cập nhật file `.env`**: Khai báo các thông tin kết nối mới (chi tiết ở phần Proposed Changes).

---

## 2. Câu hỏi mở (Open Questions)

> [!NOTE]
> **Khả năng tương thích ngược cho dữ liệu cũ:**
> - Chúng tôi đề xuất **giữ lại logic tối ưu ảnh của Cloudinary** trong hàm `getOptimizedImageUrl` để đảm bảo các homestay/villa đã tạo trước đây vẫn hiển thị bình thường.
> - Tất cả các ảnh tải lên mới sẽ áp dụng luồng Google Drive + Weserv CDN.

---

## 3. Các thay đổi đề xuất (Proposed Changes)

### Phân hệ Cấu hình & Thư viện

#### [MODIFY] [package.json](file:///c:/DEV/rentify-pure-sql/package.json)
- Cài đặt thư viện Google API client:
  ```json
  "dependencies": {
    "googleapis": "^140.0.0"
  }
  ```

#### [MODIFY] [.env](file:///c:/DEV/rentify-pure-sql/.env)
- Loại bỏ/Đánh dấu ngưng sử dụng các biến Cloudinary.
- Thêm cấu hình kết nối Google Drive:
  ```env
  # Google Drive Storage Config
  GOOGLE_PROJECT_ID=tên-dự-án-google-cloud
  GOOGLE_CLIENT_EMAIL=email-service-account@iam.gserviceaccount.com
  GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMã-khóa-private-key-của-bạn\n-----END PRIVATE KEY-----"
  GOOGLE_DRIVE_FOLDER_ID=id-thư-mục-google-drive-đã-chia-sẻ
  ```

---

### Phân hệ Backend API & Client Helpers

#### [MODIFY] [route.ts](file:///c:/DEV/rentify-pure-sql/src/app/api/upload/route.ts)
*   **Thư viện sử dụng**: Thay thế `cloudinary` bằng `googleapis` và `stream`.
*   **Luồng xử lý**:
    1. Tiếp nhận file tải lên từ formData.
    2. Khởi tạo đối tượng xác thực Google Auth và kết nối Google Drive.
    3. Upload file dưới dạng luồng dữ liệu Buffer Stream vào thư mục `GOOGLE_DRIVE_FOLDER_ID`.
    4. Cập nhật quyền của file vừa tải lên thành công thành **công khai** (`reader` cho `anyone`) bằng API `drive.permissions.create`.
    5. Trả về URL ảnh trực tiếp dạng: `https://drive.google.com/uc?export=download&id=FILE_ID`.

#### [MODIFY] [utils.ts](file:///c:/DEV/rentify-pure-sql/src/lib/utils.ts)
*   **Hàm sử dụng**: Cập nhật hàm tối ưu hóa URL ảnh `getOptimizedImageUrl`.
*   **Cơ chế tối ưu hóa**:
    1. Giữ nguyên logic tối ưu hóa cho ảnh Cloudinary cũ (`cloudinary.com`).
    2. Nhận biết các đường dẫn ảnh lưu trữ trên Google Drive (`drive.google.com`).
    3. Chuyển đổi định dạng URL và định tuyến qua Weserv CDN để tự động nén, đổi đuôi thành WebP chất lượng cao và thay đổi kích thước theo yêu cầu:
       `https://wsrv.nl/?url=drive.google.com/uc?export=download%26id%3DFILE_ID&w=WIDTH&output=webp&q=85&il`
    4. Các URL nội bộ hoặc ảnh khác sử dụng Weserv làm fallback như cũ.

---

## 4. Kế hoạch xác minh & kiểm thử (Verification Plan)

### Automated Tests
- Khởi chạy tiến trình cài đặt thư viện:
  ```bash
  npm install googleapis
  ```
- Kiểm tra lỗi biên dịch TypeScript để đảm bảo không phát sinh lỗi kiểu dữ liệu:
  ```bash
  npm run build
  ```

### Kiểm thử thủ công (Manual Verification)
1. **Kiểm tra kết nối**: Cấu hình các biến môi trường Google Drive chính xác trong file `.env`.
2. **Kiểm tra tải lên**:
   - Truy cập vào trang Admin chỉnh sửa hoặc tạo mới Villa.
   - Thêm một bức ảnh mới và nhấn lưu.
   - Xác nhận API `/api/upload` trả về mã trạng thái 200 kèm URL ảnh Google Drive dạng `https://drive.google.com/uc?export=download&id=...`
3. **Kiểm tra lưu trữ**:
   - Truy cập vào thư mục Google Drive cá nhân của bạn, kiểm tra xem file ảnh mới đã xuất hiện trong thư mục chưa.
4. **Kiểm tra hiển thị & Tốc độ**:
   - Xem trang danh sách Villa và trang chi tiết Villa vừa tạo.
   - Sử dụng Developer Tools (F12) trên trình duyệt -> Tab **Network** -> Kiểm tra xem các ảnh hiển thị có đường dẫn bắt đầu bằng `https://wsrv.nl/?url=drive.google.com...` và có định dạng hiển thị thực tế là **image/webp** với dung lượng siêu nhẹ (chỉ khoảng vài chục đến hơn trăm KB) hay không.
