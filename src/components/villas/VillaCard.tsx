import Link from "next/link";
import Image from "next/image";
import { MapPin, Bed, Bath, Users, Star } from "lucide-react";
import { Villa } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface VillaCardProps {
  villa: Villa;
}

export default function VillaCard({ villa }: VillaCardProps) {
  return (
    <Link
      href={`/villas/${villa.slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={villa.images[0]}
          alt={villa.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          {villa.rating}
          <span className="text-gray-400">({villa.reviewCount})</span>
        </div>
        {villa.featured && (
          <div className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
            Nổi bật
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <MapPin className="h-3.5 w-3.5" />
          {villa.area} &middot; {villa.address.split(",").slice(-2).join(",")}
        </div>
        <h3 className="mt-2 font-heading text-lg font-semibold text-navy transition-colors group-hover:text-gold">
          {villa.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-gray-500">{villa.tagline}</p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Bed className="h-3.5 w-3.5" />
            {villa.bedrooms} PN
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-3.5 w-3.5" />
            {villa.bathrooms} PT
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {villa.maxGuests} khách
          </span>
          <span>{villa.size} m²</span>
        </div>

        <div className="mt-4 flex items-baseline gap-1 border-t border-gray-50 pt-4">
          <span className="text-lg font-bold text-navy">
            {formatPrice(villa.pricePerNight)}
          </span>
          <span className="text-sm text-gray-400">/ đêm</span>
        </div>
      </div>
    </Link>
  );
}
