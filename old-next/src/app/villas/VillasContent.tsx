"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import VillaCard from "@/components/villas/VillaCard";
import FilterSidebar from "@/components/villas/FilterSidebar";
import { villas } from "@/data/villas";
import { SearchFilters } from "@/lib/types";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

const sortOptions = [
  { value: "newest", label: "Mới nhất" },
  { value: "price-asc", label: "Giá thấp → cao" },
  { value: "price-desc", label: "Giá cao → thấp" },
  { value: "rating", label: "Đánh giá cao nhất" },
] as const;

export default function VillasContent() {
  const searchParams = useSearchParams();
  const initialArea = searchParams.get("area") || undefined;

  const [filters, setFilters] = useState<SearchFilters>({
    area: initialArea,
    sortBy: "newest",
  });
  const [filterOpen, setFilterOpen] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...villas];

    if (filters.area) {
      result = result.filter((v) => v.areaSlug === filters.area);
    }
    if (filters.minPrice !== undefined) {
      result = result.filter((v) => v.pricePerNight >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      result = result.filter((v) => v.pricePerNight <= filters.maxPrice!);
    }
    if (filters.bedrooms) {
      result = result.filter((v) => v.bedrooms >= filters.bedrooms!);
    }
    if (filters.amenities && filters.amenities.length > 0) {
      result = result.filter((v) =>
        filters.amenities!.every((a) => v.amenities.includes(a))
      );
    }
    if (filters.guests) {
      result = result.filter((v) => v.maxGuests >= filters.guests!);
    }

    switch (filters.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.pricePerNight - b.pricePerNight);
        break;
      case "price-desc":
        result.sort((a, b) => b.pricePerNight - a.pricePerNight);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filters]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="bg-navy py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Villa Tại Vũng Tàu
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
                        ? "bg-navy text-white"
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
