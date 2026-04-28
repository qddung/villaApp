import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  explore: [
    { href: "/villas", label: "Tất cả Villa" },
    { href: "/villas?area=bai-sau", label: "Villa Bãi Sau" },
    { href: "/villas?area=ho-tram", label: "Villa Hồ Tràm" },
    { href: "/villas?area=long-hai", label: "Villa Long Hải" },
  ],
  company: [
    { href: "/about", label: "Về chúng tôi" },
    { href: "/list-your-villa", label: "Đăng ký villa" },
    { href: "/contact", label: "Liên hệ" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold">
                Villa<span className="text-gold">VungTau</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Nền tảng cho thuê villa cao cấp hàng đầu tại Vũng Tàu.
              Trải nghiệm kỳ nghỉ đẳng cấp với dịch vụ concierge chuyên nghiệp.
            </p>
          </div>

          {/* Khám phá */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Khám phá
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Công ty */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Công ty
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Liên hệ
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+84909123456"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  0909 123 456
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@villavungtau.vn"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  hello@villavungtau.vn
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  12 Đường Thùy Vân, Phường Thắng Tam, TP. Vũng Tàu
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} VillaVungTau. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-white/80"
            >
              Điều khoản sử dụng
            </Link>
            <Link
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-white/80"
            >
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
