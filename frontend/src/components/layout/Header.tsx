
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/villas", label: "Villa" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/list-your-villa", label: "Đăng ký villa" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Header() {
  const pathname = useLocation().pathname;
  const isHomepage = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHomepage);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHomepage) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomepage]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span
                className={cn(
                  "font-heading text-2xl font-bold tracking-tight transition-colors",
                  scrolled ? "text-navy" : "text-white"
                )}
              >
                Villa<span className="text-gold">VungTau</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors hover:text-gold",
                    scrolled ? "text-navy" : "text-white/90"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+84909123456"
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                  scrolled
                    ? "bg-navy text-white hover:bg-navy-light"
                    : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                )}
              >
                <Phone className="h-4 w-4" />
                0326 151 111
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "rounded-lg p-2 md:hidden",
                scrolled ? "text-navy" : "text-white"
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
