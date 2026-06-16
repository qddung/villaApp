import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { MapPin, Bed, Users, Star, ArrowRight } from "lucide-react";
import { useVillaStore } from "@/store/useVillaStore";
import { formatPrice } from "@/lib/utils";
import { getVillaMainImageUrl } from "@/lib/api";

export default function FeaturedVillas() {
  const getFeaturedVillas = useVillaStore((state) => state.getFeaturedVillas);
  const featured = getFeaturedVillas().slice(0, 6);

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Được yêu thích nhất
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
              Villa Nổi Bật
            </h2>
          </div>
          <Link
            to="/villas"
            className="group flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold"
          >
            Xem tất cả
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((villa, index) => (
            <motion.div
              key={villa.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/villas/${villa.slug}`}
                className="block group overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/5 transition-all duration-300 hover:shadow-xl hover:shadow-navy/10"
              >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={getVillaMainImageUrl(villa)}
                  alt={villa.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  {villa.rating}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {villa.area}
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-navy group-hover:text-gold">
                  {villa.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                  {villa.tagline}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Bed className="h-3.5 w-3.5" />
                    {villa.bedrooms} PN
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {villa.maxGuests} khách
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-1 border-t border-gray-50 pt-4">
                  <span className="text-lg font-bold text-navy">
                    Liên hệ
                  </span>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
