import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { areas } from "@/data/areas";

export default function AreaHighlights() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Khám phá
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
            Khu Vực Nổi Bật
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Từ bãi biển sôi động đến vùng biển hoang sơ, Vũng Tàu có mọi thứ
            bạn cần cho một kỳ nghỉ hoàn hảo
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.id}
              href={`/villas?area=${area.slug}`}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5]">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white">
                  {area.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/70">
                  {area.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm font-medium text-gold-light">
                  {area.villaCount} villa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
