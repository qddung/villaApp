import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    import("@/lib/api").then(({ fetchSettings }) => {
      fetchSettings().then((data) => {
        if (data) setSettings(data);
      });
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { createBooking } = await import("@/lib/api");
      const { toast } = await import("sonner");
      
      const now = new Date().toISOString();
      await createBooking({
        name: form.name,
        email: form.email,
        phone: form.phone || "N/A",
        note: `[Liên hệ - ${form.subject || 'Khác'}] ${form.message}`,
        checkIn: now,
        checkOut: now,
        guests: 1,
        total: 0,
        bookingType: "CONTACT"
      });
      setSubmitted(true);
      toast.success("Đã gửi tin nhắn thành công!");
    } catch (error) {
      const { toast } = await import("sonner");
      toast.error("Lỗi khi gửi tin nhắn, vui lòng thử lại sau.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Header */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Liên Hệ
          </h1>
          <p className="mt-3 text-lg text-white/60">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-primary">
                Thông tin liên hệ
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Liên hệ với chúng tôi qua bất kỳ kênh nào bên dưới
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Điện thoại / Zalo",
                  value: settings?.contactPhone || "0909 123 456",
                  href: `tel:${settings?.contactPhone ? settings.contactPhone.replace(/\s+/g, '') : '+84909123456'}`,
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: settings?.contactEmail || "hello@villavungtau.vn",
                  href: `mailto:${settings?.contactEmail || 'hello@villavungtau.vn'}`,
                },
                {
                  icon: MapPin,
                  title: "Văn phòng",
                  value: "12 Đường Thùy Vân, Phường Thắng Tam, TP. Vũng Tàu",
                  href: "#",
                },
                {
                  icon: Clock,
                  title: "Giờ làm việc",
                  value: "8:00 - 21:00, Thứ 2 - Chủ Nhật",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 transition-colors hover:border-gold/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sand">
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{item.title}</p>
                    <p className="mt-0.5 text-sm text-gray-500">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              {submitted ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
                  <h3 className="mt-6 font-heading text-2xl font-bold text-primary">
                    Đã gửi thành công!
                  </h3>
                  <p className="mt-3 text-gray-500">
                    Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="mt-6 text-sm font-semibold text-gold hover:text-gold-dark"
                  >
                    Gửi tin nhắn khác
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-xl font-semibold text-primary">
                    Gửi tin nhắn
                  </h2>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Họ và tên *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Số điện thoại
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Chủ đề
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      >
                        <option value="">Chọn chủ đề</option>
                        <option value="booking">Đặt phòng</option>
                        <option value="info">Hỏi thông tin villa</option>
                        <option value="partner">Hợp tác / Đăng ký villa</option>
                        <option value="feedback">Góp ý / Phản hồi</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nội dung *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                        placeholder="Nội dung tin nhắn của bạn..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-light"
                    >
                      <Send className="h-4 w-4" />
                      Gửi tin nhắn
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

