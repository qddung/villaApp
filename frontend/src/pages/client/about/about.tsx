import { CheckCircle2, Award, Users, Home, Heart } from "lucide-react";

const stats = [
  { value: "50+", label: "Villa cao cấp", icon: Home },
  { value: "1,000+", label: "Khách hàng hài lòng", icon: Heart },
  { value: "4.8", label: "Đánh giá trung bình", icon: Award },
  { value: "5+", label: "Năm kinh nghiệm", icon: Users },
];

const process = [
  {
    step: "01",
    title: "Khảo sát & Đánh giá",
    description: "Đội ngũ trực tiếp đến thăm, kiểm tra chất lượng, tiện nghi và vị trí của mỗi villa.",
  },
  {
    step: "02",
    title: "Chụp ảnh chuyên nghiệp",
    description: "Nhiếp ảnh gia chuyên nghiệp chụp ảnh villa, đảm bảo hình ảnh đẹp và chân thực.",
  },
  {
    step: "03",
    title: "Thiết lập tiêu chuẩn",
    description: "Hỗ trợ chủ villa nâng cấp tiện nghi, trang bị theo tiêu chuẩn cao cấp.",
  },
  {
    step: "04",
    title: "Đưa lên nền tảng",
    description: "Villa được đăng tải với thông tin đầy đủ, sẵn sàng đón khách.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="relative bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Về chúng tôi
              </p>
              <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Mang đến trải nghiệm nghỉ dưỡng đẳng cấp tại Vũng Tàu
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                VillaVungTau được thành lập với sứ mệnh kết nối du khách với những
                villa đẹp nhất tại Vũng Tàu. Chúng tôi tin rằng mỗi kỳ nghỉ đều
                xứng đáng có một không gian riêng tư, sang trọng và đáng nhớ.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                Với đội ngũ giàu kinh nghiệm trong lĩnh vực du lịch và bất động sản,
                chúng tôi chọn lọc kỹ lưỡng từng villa, đảm bảo chất lượng từ tiện
                nghi đến dịch vụ, để bạn yên tâm tận hưởng kỳ nghỉ hoàn hảo.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Villa đẹp tại Vũng Tàu"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sand">
                  <stat.icon className="h-6 w-6 text-gold" />
                </div>
                <div className="mt-4 font-heading text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection process */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Quy trình
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary sm:text-4xl">
              Quy Trình Chọn Lọc Villa
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Mỗi villa trên nền tảng đều trải qua quy trình đánh giá nghiêm ngặt
              để đảm bảo chất lượng tốt nhất cho khách hàng
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="font-heading text-5xl font-bold text-gold/20">
                  {item.step}
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Giá Trị Cốt Lõi
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Chất lượng",
                desc: "Chỉ những villa đạt tiêu chuẩn cao nhất mới được chọn. Chúng tôi không thỏa hiệp về chất lượng.",
              },
              {
                title: "Minh bạch",
                desc: "Giá cả rõ ràng, thông tin chính xác. Những gì bạn thấy là những gì bạn nhận được.",
              },
              {
                title: "Tận tâm",
                desc: "Đội ngũ hỗ trợ 24/7, sẵn sàng giúp bạn mọi lúc trước, trong và sau kỳ nghỉ.",
              },
            ].map((value) => (
              <div key={value.title} className="rounded-2xl bg-sand p-8 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
                <h3 className="mt-4 font-heading text-xl font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

