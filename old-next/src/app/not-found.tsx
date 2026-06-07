import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="text-center">
        <p className="font-heading text-8xl font-bold text-gold/30">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-navy">
          Không tìm thấy trang
        </h1>
        <p className="mt-2 text-gray-500">
          Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
        >
          Về trang chủ
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
