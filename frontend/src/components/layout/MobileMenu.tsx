
import { Link } from "react-router-dom";
import { X, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    import("@/lib/api").then(({ fetchSettings }) => {
      fetchSettings().then((data) => {
        if (data) setSettings(data);
      });
    });
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
        <div className="flex items-center justify-between p-6">
          <span className="font-heading text-xl font-bold text-navy">
            Villa<span className="text-gold">VungTau</span>
          </span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-sand hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t border-gray-100 px-8 pt-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-gray-400">
            Liên hệ
          </p>
          <a
            href={`tel:${settings?.contactPhone ? settings.contactPhone.replace(/\s+/g, '') : '+84909123456'}`}
            className="mb-3 flex items-center gap-3 text-sm text-gray-600 hover:text-navy"
          >
            <Phone className="h-4 w-4" />
            {settings?.contactPhone || "0909 123 456"}
          </a>
          <a
            href={`mailto:${settings?.contactEmail || 'hello@villavungtau.vn'}`}
            className="flex items-center gap-3 text-sm text-gray-600 hover:text-navy"
          >
            <Mail className="h-4 w-4" />
            {settings?.contactEmail || "hello@villavungtau.vn"}
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <a
            href={`tel:${settings?.contactPhone ? settings.contactPhone.replace(/\s+/g, '') : '+84909123456'}`}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-navy py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
          >
            <Phone className="h-4 w-4" />
            Gọi ngay
          </a>
        </div>
      </div>
    </div>
  );
}
