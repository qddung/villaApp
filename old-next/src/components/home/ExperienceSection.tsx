import { UtensilsCrossed, Car, Compass, Camera, Waves as WavesIcon, Wine } from "lucide-react";

const experiences = [
  {
    icon: UtensilsCrossed,
    title: "Chef Riêng",
    description: "Thưởng thức ẩm thực đẳng cấp ngay tại villa với đầu bếp chuyên nghiệp",
  },
  {
    icon: Car,
    title: "Xe Đưa Đón",
    description: "Dịch vụ xe riêng đưa đón sân bay và di chuyển trong thành phố",
  },
  {
    icon: Compass,
    title: "Tour Khám Phá",
    description: "Khám phá Vũng Tàu với các tour được thiết kế riêng cho bạn",
  },
  {
    icon: Camera,
    title: "Chụp Ảnh Chuyên Nghiệp",
    description: "Lưu giữ khoảnh khắc đẹp trong kỳ nghỉ với nhiếp ảnh gia",
  },
  {
    icon: WavesIcon,
    title: "Hoạt Động Biển",
    description: "Lướt sóng, chèo SUP, câu cá và nhiều hoạt động ngoài trời thú vị",
  },
  {
    icon: Wine,
    title: "Tiệc & Sự Kiện",
    description: "Tổ chức tiệc sinh nhật, kỷ niệm hoặc team building tại villa",
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Dịch vụ đi kèm
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Trải Nghiệm Hoàn Hảo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Ngoài villa tuyệt vời, chúng tôi còn cung cấp nhiều dịch vụ cao cấp
            để kỳ nghỉ của bạn thêm trọn vẹn
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-gold/30 hover:bg-white/10"
            >
              <exp.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                {exp.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
