import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 sm:px-16 sm:py-20">
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/10" />
          <div className="absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-gold/5" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                Bạn Sở Hữu Villa Tại Vũng Tàu?
              </h2>
              <p className="mt-4 max-w-lg text-lg text-white/70">
                Hợp tác cùng chúng tôi để tối ưu thu nhập cho thuê villa của bạn.
                Chúng tôi lo liệu mọi thứ từ marketing, đặt phòng đến dọn dẹp.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:gap-8">
                <span>&#10003; Marketing chuyên nghiệp</span>
                <span>&#10003; Quản lý đặt phòng</span>
                <span>&#10003; Dịch vụ vệ sinh</span>
              </div>
            </div>
            <div className="flex lg:justify-end">
              <Link
                href="/list-your-villa"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg"
              >
                Đăng ký villa của bạn
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
