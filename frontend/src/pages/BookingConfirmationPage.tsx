import { Link, useSearchParams } from "react-router-dom";
import { Suspense } from "react";
import { CheckCircle2, Phone, Mail, ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";

function ConfirmationContent() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "Quý khách";
  const villaSlug = searchParams.get("villa") || "";
  const total = Number(searchParams.get("total")) || 0;
  const nights = Number(searchParams.get("nights")) || 1;

  return (
    <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
        <CheckCircle2 className="h-10 w-10 text-green-500" />
      </div>

      <h1 className="mt-6 font-heading text-2xl font-bold text-navy sm:text-3xl">
        Đặt Phòng Thành Công!
      </h1>
      <p className="mt-3 text-gray-500">
        Cảm ơn <strong>{name}</strong>, yêu cầu đặt phòng của bạn đã được ghi
        nhận. Đội ngũ của chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút.
      </p>

      <div className="mt-8 rounded-xl bg-sand p-6 text-left">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Số đêm</span>
            <span className="font-medium">{nights} đêm</span>
          </div>
          <div className="flex justify-between border-t border-sand-dark pt-3">
            <span className="font-semibold text-navy">Tổng cộng</span>
            <span className="text-lg font-bold text-navy">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-sm text-gray-500">
        <p className="font-medium text-gray-700">Cần hỗ trợ?</p>
        <a
          href="tel:+84909123456"
          className="flex items-center justify-center gap-2 hover:text-navy"
        >
          <Phone className="h-4 w-4" />
          0909 123 456
        </a>
        <a
          href="mailto:hello@villavungtau.vn"
          className="flex items-center justify-center gap-2 hover:text-navy"
        >
          <Mail className="h-4 w-4" />
          hello@villavungtau.vn
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
