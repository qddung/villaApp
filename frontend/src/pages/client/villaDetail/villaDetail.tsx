import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin, Bed, Bath, Users, Maximize2, Star, Clock, ShieldCheck } from "lucide-react";
import { useVillaStore } from "@/store/useVillaStore";
import VillaGallery from "@/components/villas/VillaGallery";
import AmenityGrid from "@/components/villas/AmenityGrid";
import BookingWidget from "@/components/villas/BookingWidget";
import VillaCard from "@/components/villas/VillaCard";
import { getVillaImageUrls } from "@/lib/api";
import { Villa } from "@/lib/types";

export default function VillaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [villa, setVilla] = useState<Villa | null>(null);
  const [loading, setLoading] = useState(true);
  const fetchVillaDetails = useVillaStore((state) => state.fetchVillaDetails);
  const villas = useVillaStore((state) => state.villas);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetchVillaDetails(slug).then((data) => {
        setVilla(data || null);
        setLoading(false);
      });
    }
  }, [slug, fetchVillaDetails]);

  if (loading) return <div className="pt-24 text-center">Đang tải...</div>;
  if (!villa) return <div className="pt-24 text-center">Không tìm thấy villa.</div>;

  const similar = villas
    .filter((v) => v.id !== villa.id && (v.areaSlug === villa.areaSlug || v.bedrooms === villa.bedrooms))
    .slice(0, 3);

  const displayImages = getVillaImageUrls(villa);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Gallery */}
        <VillaGallery images={displayImages.length > 0 ? displayImages : []} name={villa.name} />
        {/* Content grid */}
        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4" />
                  {villa.area} &middot; {villa.address}
                </div>
                <h1 className="mt-2 font-heading text-3xl font-bold text-primary sm:text-4xl">
                  {villa.name}
                </h1>
                <p className="mt-2 text-lg text-gray-500">{villa.tagline}</p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="mt-6 flex flex-wrap gap-6 rounded-2xl bg-sand p-6">
              {[
                { icon: Bed, label: "Phòng ngủ", value: villa.bedrooms },
                { icon: Bath, label: "Phòng tắm", value: villa.bathrooms },
                { icon: Users, label: "Khách tối đa", value: villa.maxGuests },
                { icon: Maximize2, label: "Diện tích", value: `${villa.size} m²` },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <stat.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                    <div className="font-semibold text-primary">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            {villa.highlights.length > 0 && (
              <div className="mt-8">
                <h2 className="font-heading text-xl font-semibold text-primary">
                  Điểm nổi bật
                </h2>
                <div className="mt-4 space-y-3">
                  {villa.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-gold" />
                      <span className="text-gray-700">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mt-8">
              <h2 className="font-heading text-xl font-semibold text-primary">
                Giới thiệu
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                {villa.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mt-8">
              <h2 className="font-heading text-xl font-semibold text-primary">
                Tiện nghi
              </h2>
              <div className="mt-4">
                <AmenityGrid amenityIds={villa.amenities} />
              </div>
            </div>



            {/* Rules */}
            <div className="mt-8 mb-2">
              <h2 className="font-heading text-xl font-semibold text-primary">
                Quy tắc nhà
              </h2>
              <div className="mt-4 space-y-4">

                <div className="space-y-2">
                  {villa.rules.policies.map((policy) => (
                    <div key={policy} className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{policy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews */}
            {/* <div className="mt-8">
              <div className="flex items-center gap-3">
                <h2 className="font-heading text-xl font-semibold text-primary">
                  Đánh giá
                </h2>
                <div className="flex items-center gap-1 rounded-full bg-sand px-3 py-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{villa.rating}</span>
                  <span className="text-sm text-gray-400">
                    ({villa.reviewCount})
                  </span>
                </div>
              </div>
              <div className="mt-6 space-y-6">
                {villa.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">
                          {review.author}
                        </p>
                        <p className="text-xs text-gray-400">{review.date}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3.5 w-3.5 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Booking sidebar */}
          <div className="lg:col-span-1">
            <BookingWidget villa={villa} />
          </div>
        </div>

        {/* Similar villas */}
        {similar.length > 0 && (
          <div className="mt-16 border-t border-gray-100 py-16">
            <h2 className="font-heading text-2xl font-bold text-primary">
              Villa Tương Tự
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((v) => (
                <VillaCard key={v.id} villa={v} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

