import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchFamousAreas } from "@/lib/api";
import { useVillaStore } from "@/store/useVillaStore";

const companyLinks = [
  { href: "/about", label: "Về chúng tôi" },
  { href: "/list-your-villa", label: "Đăng ký villa" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Footer() {
  const [famousAreas, setFamousAreas] = useState<any[]>([]);
  const getFeaturedVillas = useVillaStore(state => state.getFeaturedVillas);
  const featuredVillas = getFeaturedVillas().slice(0, 5);

  useEffect(() => {
    fetchFamousAreas().then(data => {
      if (Array.isArray(data)) {
        setFamousAreas(data);
      }
    }).catch(err => {
      console.error("Failed to fetch famous areas for footer", err);
    });
  }, []);

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-heading text-2xl font-bold text-white">
                Villa<span className="text-gold">VungTau</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-sand/80">
              Nền tảng cho thuê villa cao cấp hàng đầu tại Vũng Tàu.
              Trải nghiệm kỳ nghỉ đẳng cấp với dịch vụ concierge chuyên nghiệp.
            </p>
          </div>

          {/* Khám phá */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Khám phá
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link to="/villas" className="text-sm text-sand/80 transition-colors hover:text-gold">
                  Tất cả Villa
                </Link>
              </li>
              {famousAreas.map((area) => (
                <li key={area.slug}>
                  <Link to={`/villas?area=${area.slug}`} className="text-sm text-sand/80 transition-colors hover:text-gold">
                    Villa {area.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Villa Nổi Bật
            </h3>
            <ul className="space-y-3">
              {featuredVillas.map((villa) => (
                <li key={villa.id}>
                  <Link to={`/villas/${villa.slug}`} className="text-sm text-sand/80 transition-colors hover:text-gold line-clamp-1">
                    {villa.name}
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
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-sand/80 transition-colors hover:text-gold"
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
                  href="tel:+84326151111"
                  className="flex items-center gap-3 text-sm text-sand/80 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  0326 151 111
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@villavungtau.vn"
                  className="flex items-center gap-3 text-sm text-sand/80 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  hello@villavungtau.vn
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-sand/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  12 Đường Thùy Vân, Phường Thắng Tam, TP. Vũng Tàu
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-sand/60">
            &copy; {new Date().getFullYear()} VillaVungTau. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6">
            <Link
              to="#"
              className="text-xs text-sand/60 transition-colors hover:text-gold"
            >
              Điều khoản sử dụng
            </Link>
            <Link
              to="#"
              className="text-xs text-sand/60 transition-colors hover:text-gold"
            >
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

