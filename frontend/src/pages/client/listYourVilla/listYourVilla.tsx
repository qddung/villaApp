import { useState } from "react";
import {
  TrendingUp,
  Camera,
  Headphones,
  ClipboardCheck,
  CheckCircle2,
  Send,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Tăng thu nhập",
    description: "Tối ưu công suất cho thuê và giá villa của bạn với đội ngũ marketing chuyên nghiệp.",
  },
  {
    icon: Camera,
    title: "Chụp ảnh miễn phí",
    description: "Nhiếp ảnh gia chuyên nghiệp chụp ảnh villa, tạo listing hấp dẫn trên nền tảng.",
  },
  {
    icon: Headphones,
    title: "Quản lý toàn diện",
    description: "Chúng tôi xử lý mọi thứ: đặt phòng, check-in, dọn dẹp và hỗ trợ khách.",
  },
  {
    icon: ClipboardCheck,
    title: "Báo cáo minh bạch",
    description: "Theo dõi thu nhập, lịch đặt phòng và đánh giá khách hàng qua dashboard riêng.",
  },
];

export default function ListYourVillaPage() {
  const [form, setForm] = useState({
    ownerName: "",
    phone: "",
    email: "",
    villaName: "",
    address: "",
    bedrooms: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="relative bg-primary py-20 lg:py-28">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/5" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/5" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Dành cho chủ villa
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Đăng Ký Villa Của Bạn
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Hợp tác cùng VillaVungTau để biến villa của bạn thành nguồn thu nhập
            ổn định. Chúng tôi lo liệu mọi thứ, bạn chỉ việc nhận thu nhập.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Tại Sao Hợp Tác Với Chúng Tôi?
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-gray-100 p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sand">
                  <b.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-primary">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration form */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-12">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
                <h3 className="mt-6 font-heading text-2xl font-bold text-primary">
                  Đăng ký thành công!
                </h3>
                <p className="mt-3 text-gray-500">
                  Cảm ơn bạn đã quan tâm. Đội ngũ của chúng tôi sẽ liên hệ trong
                  vòng 48 giờ để trao đổi chi tiết.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center">
                  <h2 className="font-heading text-2xl font-bold text-primary">
                    Đăng Ký Ngay
                  </h2>
                  <p className="mt-2 text-gray-500">
                    Điền thông tin bên dưới, chúng tôi sẽ liên hệ bạn sớm nhất
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Họ tên chủ villa *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.ownerName}
                        onChange={(e) => setForm({ ...form, ownerName: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Tên villa
                    </label>
                    <input
                      type="text"
                      value={form.villaName}
                      onChange={(e) => setForm({ ...form, villaName: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      placeholder="VD: Villa Biển Xanh"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Địa chỉ villa *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      placeholder="VD: 12 Thùy Vân, Thắng Tam, Vũng Tàu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Số phòng ngủ
                    </label>
                    <select
                      value={form.bedrooms}
                      onChange={(e) => setForm({ ...form, bedrooms: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    >
                      <option value="">Chọn</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} phòng ngủ
                        </option>
                      ))}
                      <option value="9+">9+ phòng ngủ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Mô tả thêm
                    </label>
                    <textarea
                      rows={4}
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      placeholder="Tiện nghi nổi bật, diện tích, tình trạng cho thuê hiện tại..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 font-semibold text-primary transition-colors hover:bg-gold-light"
                  >
                    <Send className="h-4 w-4" />
                    Gửi đăng ký
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

