# 🏖️ VillaVungTau

Nền tảng cho thuê villa cao cấp tại Vũng Tàu — được xây dựng bằng **Next.js 16**, **React 19**, **Tailwind CSS 4** và **TypeScript**.

> Khám phá và đặt thuê villa cao cấp tại Vũng Tàu. Hồ bơi riêng, view biển, dịch vụ  24/7.

---

## ✨ Tính Năng

| Tính năng | Mô tả |
|---|---|
| **Trang chủ** | Hero full-screen, thống kê, villa nổi bật, khu vực, dịch vụ, đánh giá khách hàng, CTA |
| **Danh sách Villa** | Lọc theo khu vực, khoảng giá, số phòng ngủ, tiện nghi; sắp xếp; phân trang |
| **Chi tiết Villa** | Gallery ảnh (lightbox), thông tin chi tiết, bảng giá, tiện nghi, đánh giá, villa tương tự |
| **Đặt phòng** | Chọn ngày, số khách, dịch vụ thêm (chef riêng, xe đưa đón, tour); tính giá tự động |
| **Xác nhận đặt phòng** | Trang xác nhận sau khi đặt thành công |
| **Trang Giới thiệu** | Câu chuyện công ty, thống kê, quy trình chọn lọc villa, giá trị cốt lõi |
| **Đăng ký Villa** | Form cho chủ villa đăng ký hợp tác |
| **Liên hệ** | Form liên hệ, thông tin điện thoại/email/địa chỉ |
| **Admin Panel** | Quản lý villa (CRUD), upload ảnh, xác thực đăng nhập |
| **Đa ngôn ngữ** | Hỗ trợ Tiếng Việt 🇻🇳 và English 🇬🇧 (i18n) |
| **Responsive** | Mobile menu, layout tối ưu cho mọi kích thước màn hình |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) + PostCSS
- **Fonts:** Google Fonts — [Inter](https://fonts.google.com/specimen/Inter) (body) + [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (headings)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **State:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Utilities:** clsx, tailwind-merge, class-variance-authority

---

## 📁 Cấu Trúc Dự Án

```
VillaVungTau/
├── public/                         # Static assets
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── layout.tsx              # Root layout (fonts, Header, Footer)
│   │   ├── page.tsx                # Trang chủ
│   │   ├── globals.css             # Design tokens & global styles
│   │   ├── not-found.tsx           # Custom 404
│   │   ├── about/page.tsx          # Giới thiệu
│   │   ├── contact/page.tsx        # Liên hệ
│   │   ├── list-your-villa/page.tsx # Đăng ký villa
│   │   ├── villas/
│   │   │   ├── page.tsx            # Danh sách villa (Suspense wrapper)
│   │   │   ├── VillasContent.tsx   # Logic lọc, sắp xếp, phân trang
│   │   │   └── [slug]/page.tsx     # Chi tiết villa (SSG)
│   │   ├── booking/
│   │   │   ├── page.tsx            # Đặt phòng (Suspense wrapper)
│   │   │   ├── BookingContent.tsx   # Form đặt phòng & tóm tắt đơn
│   │   │   └── confirmation/page.tsx # Xác nhận đặt phòng
│   │   ├── admin/page.tsx          # Admin panel (CRUD villa + upload ảnh)
│   │   └── api/
│   │       ├── villas/route.ts     # REST API: GET/POST/DELETE villas.json
│   │       ├── villa-images/route.ts # API: GET/POST/DELETE ảnh villa
│   │       └── villa-image/[...path]/route.ts # Serve ảnh tĩnh từ filesystem
│   ├── components/
│   │   ├── home/                   # Sections trang chủ
│   │   │   ├── HeroSection.tsx     # Hero banner + search form
│   │   │   ├── Highlights.tsx      # Tại sao chọn chúng tôi
│   │   │   ├── FeaturedVillas.tsx  # Villa nổi bật
│   │   │   ├── AreaHighlights.tsx  # Khu vực nổi bật
│   │   │   ├── ExperienceSection.tsx # Dịch vụ đi kèm
│   │   │   ├── Testimonials.tsx    # Đánh giá khách hàng (paginated)
│   │   │   └── CTASection.tsx      # Call-to-action cho chủ villa
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navigation (scroll-aware, transparent → solid)
│   │   │   ├── Footer.tsx          # Footer links & contact info
│   │   │   └── MobileMenu.tsx      # Slide-over mobile menu
│   │   ├── shared/
│   │   │   ├── AnimateIn.tsx       # Framer Motion scroll animation wrapper
│   │   │   ├── LanguageSwitcher.tsx # Toggle VI / EN
│   │   │   └── SearchForm.tsx      # Search form (hero & compact variants)
│   │   ├── villas/
│   │   │   ├── VillaCard.tsx       # Card hiển thị villa
│   │   │   ├── VillaGallery.tsx    # Gallery ảnh + lightbox
│   │   │   ├── BookingWidget.tsx   # Sidebar đặt phòng (sticky)
│   │   │   ├── FilterSidebar.tsx   # Bộ lọc villa (responsive)
│   │   │   └── AmenityGrid.tsx     # Grid tiện nghi với icon
│   │   └── providers/
│   │       └── LocaleProvider.tsx  # Context provider cho i18n
│   ├── data/                       # Static data
│   │   ├── villas.json             # Dữ liệu villa (JSON)
│   │   ├── villas.ts               # Helper functions: getBySlug, getFeatured, getByArea
│   │   ├── areas.ts                # Danh sách khu vực
│   │   ├── amenities.ts            # Danh sách tiện nghi + icon mapping
│   │   └── testimonials.ts         # Đánh giá khách hàng
│   ├── i18n/                       # Internationalization
│   │   ├── index.ts                # useTranslations hook + LocaleContext
│   │   ├── vi.json                 # Bản dịch Tiếng Việt
│   │   └── en.json                 # Bản dịch Tiếng Anh
│   ├── image/
│   │   └── villa_data/             # Ảnh villa (local filesystem)
│   │       └── {slug}/
│   │           ├── main.{jpg|png}  # Ảnh chính
│   │           └── details/        # Ảnh chi tiết (gallery)
│   └── lib/                        # Shared utilities
│       ├── types.ts                # TypeScript interfaces (Villa, Booking, etc.)
│       ├── utils.ts                # cn(), formatPrice(), slugify()
│       ├── villa-images.ts         # Read local villa images
│       ├── get-villa-main-image.ts # Get main image (local → fallback)
│       └── resolve-villa-images.ts # Resolve all images for a villa
├── next.config.ts                  # Next.js config (remote image patterns)
├── tsconfig.json                   # TypeScript config
├── package.json                    # Dependencies & scripts
└── plan.md                         # Business plan (Vietnamese)
```

---

## 🎨 Design System

### Bảng Màu

| Token | Hex | Mô tả |
|---|---|---|
| `navy` | `#1B365D` | Primary — tiêu đề, nút chính |
| `navy-light` | `#2A4A7F` | Hover state |
| `navy-dark` | `#0F2340` | Dark variant |
| `gold` | `#C5A572` | Accent — icon, CTA, highlight |
| `gold-light` | `#D4BC93` | Hover accent |
| `gold-dark` | `#A8894E` | Dark accent |
| `sand` | `#F5F0E8` | Background nhẹ |
| `cream` | `#FDFBF7` | Background section |

### Typography

- **Heading:** Playfair Display (serif) — elegant, luxury feel
- **Body:** Inter (sans-serif) — clean, readable

---

## 🚀 Bắt Đầu

### Yêu Cầu

- Node.js 18+
- npm / yarn / pnpm / bun

### Cài Đặt

```bash
# Clone repository
git clone <repo-url>
cd VillaVungTau

# Cài đặt dependencies
npm install
```

### Chạy Development Server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Build Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## 📝 API Routes

| Method | Endpoint | Mô tả |
|---|---|---|
| `GET` | `/api/villas` | Lấy danh sách tất cả villa |
| `POST` | `/api/villas` | Thêm / cập nhật villa |
| `DELETE` | `/api/villas` | Xóa villa theo `id` |
| `GET` | `/api/villa-images?slug=...` | Lấy danh sách ảnh của villa |
| `POST` | `/api/villa-images` | Upload ảnh (FormData: slug, type, file) |
| `DELETE` | `/api/villa-images` | Xóa ảnh theo `slug` + `imageUrl` |
| `GET` | `/api/villa-image/[...path]` | Serve ảnh tĩnh từ `src/image/villa_data/` |

---

## 🖼️ Quản Lý Ảnh Villa

Ảnh villa được lưu tại `src/image/villa_data/{slug}/`:

```
src/image/villa_data/
└── villa-felix/
    ├── main.jpg          # Ảnh chính (cover)
    └── details/
        ├── 1.jpg         # Ảnh chi tiết
        ├── 2.jpg
        └── ...
```

- Nếu có ảnh local → ưu tiên hiển thị ảnh local
- Nếu không có → fallback về URL trong `villas.json` (Unsplash)
- Upload/xóa ảnh qua Admin Panel tại `/admin`

---

## 🔐 Admin Panel

Truy cập tại [/admin](http://localhost:3000/admin):

- **Đăng nhập:** `admin` / `123`
- **Chức năng:**
  - Xem danh sách villa
  - Thêm villa mới
  - Sửa thông tin villa (tên, mô tả, giá, tiện nghi, highlights, quy tắc...)
  - Upload / xóa ảnh chính và ảnh chi tiết
  - Xóa villa
  - Toggle trạng thái "Nổi bật" (hiển thị trên trang chủ)

---

## 🌐 Đa Ngôn Ngữ (i18n)

- Hỗ trợ **Tiếng Việt** (mặc định) và **Tiếng Anh**
- Sử dụng React Context + custom `useTranslations()` hook
- File ngôn ngữ: `src/i18n/vi.json`, `src/i18n/en.json`
- Chuyển đổi ngôn ngữ qua `LanguageSwitcher` component

---

## 📱 Responsive Design

- **Desktop:** Full navigation, sidebar filter, grid 3 cột
- **Tablet:** Grid 2 cột, layout linh hoạt
- **Mobile:** Hamburger menu (slide-over), filter drawer, layout 1 cột

---

## 📄 License

Private project. All rights reserved.
