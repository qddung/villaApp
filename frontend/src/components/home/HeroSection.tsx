import SearchForm from "@/components/shared/SearchForm";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[110vh] items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=80')",
        }}
      />
      <div className="hero-gradient absolute inset-0" />
      {/* Warm gold tint overlay */}
      <div className="absolute inset-0 bg-amber-800/10 mix-blend-multiply" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 md:pt-0 text-center sm:px-6 lg:px-8"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-light">
          Trải nghiệm nghỉ dưỡng đẳng cấp
        </p>
        <h1 className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Villa Căn Hộ Cao Cấp
          <br />
          <span className="text-gold">Tại Vũng Tàu</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl font-light">
          Khám phá bộ sưu tập villa được chọn lọc kỹ lưỡng với hồ bơi riêng,
          view biển tuyệt đẹp và dịch vụ  24/7
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <SearchForm />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "50+", label: "Villa cao cấp" },
            { value: "1000+", label: "Khách hài lòng" },
            { value: "6", label: "Khu vực" },
            { value: "24/7", label: "Hỗ trợ" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
