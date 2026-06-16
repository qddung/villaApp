import { Link, useSearchParams } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import { CheckCircle2, Phone, Mail, ArrowRight, X } from "lucide-react";


function ConfirmationContent() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "Quý khách";
  const villaSlug = searchParams.get("villa") || "";
  const [showPopup, setShowPopup] = useState(true);
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    import("@/lib/api").then(({ fetchSettings }) => {
      fetchSettings().then((data) => {
        if (data) setSettings(data);
      });
    });
  }, []);

  return (
    <>
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
        <CheckCircle2 className="h-10 w-10 text-green-500" />
      </div>

      <h1 className="mt-6 font-heading text-2xl font-bold text-navy sm:text-3xl">
        Gửi Yêu Cầu Thành Công!
      </h1>
      <p className="mt-3 text-gray-500">
        Cảm ơn <strong>{name}</strong>, yêu cầu tư vấn của bạn đã được ghi
        nhận. Đội ngũ của chúng tôi sẽ liên hệ lại sớm nhất để tư vấn và báo giá cho bạn.
      </p>



      <div className="mt-6 space-y-2 text-sm text-gray-500">
        <p className="font-medium text-gray-700">Cần hỗ trợ?</p>
        <a
          href={`tel:${settings?.contactPhone ? settings.contactPhone.replace(/\s+/g, '') : '+84909123456'}`}
          className="flex items-center justify-center gap-2 hover:text-navy"
        >
          <Phone className="h-4 w-4" />
          {settings?.contactPhone || "0909 123 456"}
        </a>
        <a
          href={`mailto:${settings?.contactEmail || 'hello@villavungtau.vn'}`}
          className="flex items-center justify-center gap-2 hover:text-navy"
        >
          <Mail className="h-4 w-4" />
          {settings?.contactEmail || "hello@villavungtau.vn"}
        </a>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to={villaSlug ? `/villas/${villaSlug}` : "/villas"}
          className="flex-1 rounded-xl border border-gray-200 py-3 text-center text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          Xem lại villa
        </Link>
        <Link
          to="/"
          className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
        >
          Về trang chủ
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>

    {showPopup && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl animate-in fade-in zoom-in duration-300">
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
            <Phone className="h-6 w-6 text-gold" />
          </div>
          <h3 className="mt-4 text-center font-heading text-xl font-bold text-navy">
            Thông báo quan trọng
          </h3>
          <p className="mt-2 text-center text-sm leading-relaxed text-gray-600">
            Yêu cầu của bạn đã được ghi nhận!<br/><br/>
            Sẽ có một số điện thoại từ đội ngũ chăm sóc khách hàng liên hệ lại với <strong>{name}</strong> trong thời gian sớm nhất để xác nhận lịch và báo giá nhé.
          </p>
          <button
            onClick={() => setShowPopup(false)}
            className="mt-6 w-full rounded-xl bg-navy py-2.5 font-semibold text-white transition-colors hover:bg-navy-light"
          >
            Tôi đã hiểu
          </button>
        </div>
      </div>
    )}
  </>
  );
}

export default function BookingConfirmationPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 pt-24">
      <Suspense
        fallback={
          <div className="text-center text-gray-400">Đang tải...</div>
        }
      >
        <ConfirmationContent />
      </Suspense>
    </div>
  );
}
