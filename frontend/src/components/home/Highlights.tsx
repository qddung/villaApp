import { Home, Headphones, MapPin, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Home,
    title: "Villa Được Chọn Lọc",
    description:
      "Mỗi villa đều được đội ngũ kiểm tra kỹ lưỡng về chất lượng, tiện nghi và vệ sinh trước khi đưa lên nền tảng.",
  },
  {
    icon: Headphones,
    title: "Concierge 24/7",
    description:
      "Đội ngũ hỗ trợ luôn sẵn sàng giúp bạn mọi lúc, từ đặt phòng đến sắp xếp dịch vụ trong kỳ nghỉ.",
  },
  {
    icon: MapPin,
    title: "Vị Trí Đắc Địa",
    description:
      "Các villa tọa lạc tại những vị trí tuyệt vời nhất Vũng Tàu - gần biển, view đẹp và tiện di chuyển.",
  },
  {
    icon: Sparkles,
    title: "Trải Nghiệm Cá Nhân Hóa",
    description:
      "Dịch vụ chef riêng, xe đưa đón, tour khám phá - mọi thứ được chuẩn bị theo yêu cầu của bạn.",
  },
];

export default function Highlights() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Tại sao chọn chúng tôi
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary sm:text-4xl">
            Nghỉ dưỡng đẳng cấp, dịch vụ hoàn hảo
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-gray-100 bg-white p-8 text-center transition-all hover:border-gold/30 hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sand transition-colors group-hover:bg-gold/10">
                <item.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

