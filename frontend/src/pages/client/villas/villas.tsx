import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import VillaCard from "@/components/villas/VillaCard";
import FilterSidebar from "@/components/villas/FilterSidebar";
import { useVillaStore } from "@/store/useVillaStore";
import { SearchFilters } from "@/lib/types";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

const sortOptions = [
  { value: "newest", label: "Mới nhất" },
  { value: "rating", label: "Đánh giá cao nhất" },
] as const;

export default function VillasPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const areaParam = searchParams.get("area") || undefined;
  const guestsParam = searchParams.get("guests") ? Number(searchParams.get("guests")) : undefined;
  
  const villas = useVillaStore((state) => state.villas);

  const [filters, setFilters] = useState<SearchFilters>({
    area: areaParam,
    guests: guestsParam,
    sortBy: "newest",
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      area: areaParam,
      guests: guestsParam,
    }));
  }, [areaParam, guestsParam]);

  const filterOptions = useVillaStore((state) => state.filterOptions);
  const selectedArea = filterOptions?.areas?.find((a) => a.slug === filters.area);
  const areaName = selectedArea ? selectedArea.name : "Vũng Tàu";
  const [filterOpen, setFilterOpen] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...villas];

    if (filters.area) {
      result = result.filter((v) => v.areaSlug === filters.area);
    }

    if (filters.bedrooms) {
      result = result.filter((v) => v.bedrooms >= filters.bedrooms!);
    }
    if (filters.amenities && filters.amenities.length > 0) {
      result = result.filter((v) =>
        filters.amenities!.every((a) => v.amenities.some(am => am.name === a))
      );
    }
    if (filters.guests) {
      result = result.filter((v) => v.maxGuests >= filters.guests!);
    }

    switch (filters.sortBy) {

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filters, villas]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    setPage(1);
    const params = new URLSearchParams(searchParams);
    if (newFilters.area) {
      params.set("area", newFilters.area);
    } else {
      params.delete("area");
    }
    if (newFilters.guests) {
      params.set("guests", String(newFilters.guests));
    } else {
      params.delete("guests");
    }
    setSearchParams(params, { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Villa Tại {areaName}
          </h1>
          <p className="mt-2 text-white/60">
            Tìm thấy {filtered.length} villa phù hợp
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <div className="hidden w-64 shrink-0 lg:block">
            <FilterSidebar
              filters={filters}
              onChange={handleFilterChange}
              open={filterOpen}
              onClose={() => setFilterOpen(false)}
            />
          </div>

          <div className="flex-1">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setFilterOpen(true)}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Bộ lọc
              </button>

              <div className="flex items-center gap-3">
                <label className="text-sm text-gray-500">Sắp xếp:</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    handleFilterChange({
                      ...filters,
                      sortBy: e.target.value as SearchFilters["sortBy"],
                    })
                  }
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile filter sidebar */}
            <div className="lg:hidden">
              <FilterSidebar
                filters={filters}
                onChange={handleFilterChange}
                open={filterOpen}
                onClose={() => setFilterOpen(false)}
              />
            </div>

            {paged.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2">
                {paged.map((villa) => (
                  <VillaCard key={villa.id} villa={villa} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl bg-white py-20 text-center">
                <p className="text-lg font-semibold text-gray-400">
                  Không tìm thấy villa phù hợp
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Hãy thử thay đổi bộ lọc để tìm kết quả khác
                </p>
                <button
                  onClick={() => handleFilterChange({ sortBy: "newest" })}
                  className="mt-4 text-sm font-semibold text-gold hover:text-gold-dark"
                >
                  Xóa tất cả bộ lọc
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors",
                      page === i + 1
                        ? "bg-primary text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

