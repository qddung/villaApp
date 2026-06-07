
import { X } from "lucide-react";
import { areas } from "@/data/areas";
import { amenities } from "@/data/amenities";
import { SearchFilters } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  filters: SearchFilters;
  onChange: (filters: SearchFilters) => void;
  open: boolean;
  onClose: () => void;
}

const priceRanges = [
  { label: "Dưới 5 triệu", min: 0, max: 5000000 },
  { label: "5 - 8 triệu", min: 5000000, max: 8000000 },
  { label: "8 - 12 triệu", min: 8000000, max: 12000000 },
  { label: "Trên 12 triệu", min: 12000000, max: 999999999 },
];

const bedroomOptions = [1, 2, 3, 4, 5];

const topAmenities = ["pool", "ocean-view", "bbq", "karaoke", "billiards", "jacuzzi", "beach-access"];

export default function FilterSidebar({
  filters,
  onChange,
  open,
  onClose,
}: FilterSidebarProps) {
  const updateFilter = (key: keyof SearchFilters, value: unknown) => {
    onChange({ ...filters, [key]: value });
  };

  const toggleAmenity = (id: string) => {
    const current = filters.amenities || [];
    const updated = current.includes(id)
      ? current.filter((a) => a !== id)
      : [...current, id];
    updateFilter("amenities", updated);
  };

  const clearAll = () => {
    onChange({ sortBy: filters.sortBy });
  };

  const hasFilters =
    filters.area || filters.minPrice || filters.bedrooms || (filters.amenities?.length ?? 0) > 0;

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-80 overflow-y-auto bg-white p-6 shadow-2xl transition-transform lg:static lg:z-auto lg:block lg:h-auto lg:w-auto lg:shadow-none lg:transition-none",
          open ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between lg:hidden">
          <h3 className="font-heading text-lg font-semibold text-navy">Bộ lọc</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {hasFilters && (
          <button
            onClick={clearAll}
            className="mb-6 text-sm font-medium text-gold hover:text-gold-dark"
          >
            Xóa tất cả bộ lọc
          </button>
        )}

        {/* Area */}
        <div className="mb-8">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Khu vực
          </h4>
          <div className="space-y-2">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="area"
                checked={!filters.area}
                onChange={() => updateFilter("area", undefined)}
                className="accent-gold"
              />
              <span className="text-sm text-gray-700">Tất cả</span>
            </label>
            {areas.map((area) => (
              <label key={area.slug} className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="area"
                  checked={filters.area === area.slug}
                  onChange={() => updateFilter("area", area.slug)}
                  className="accent-gold"
                />
                <span className="text-sm text-gray-700">
                  {area.name}{" "}
                  <span className="text-gray-400">({area.villaCount})</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-8">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Khoảng giá / đêm
          </h4>
          <div className="space-y-2">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="price"
                checked={!filters.minPrice && !filters.maxPrice}
                onChange={() => {
                  onChange({ ...filters, minPrice: undefined, maxPrice: undefined });
                }}
                className="accent-gold"
              />
              <span className="text-sm text-gray-700">Tất cả</span>
            </label>
            {priceRanges.map((range) => (
              <label key={range.label} className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  checked={filters.minPrice === range.min && filters.maxPrice === range.max}
                  onChange={() => {
                    onChange({ ...filters, minPrice: range.min, maxPrice: range.max });
                  }}
                  className="accent-gold"
                />
                <span className="text-sm text-gray-700">{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Bedrooms */}
        <div className="mb-8">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Phòng ngủ
          </h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => updateFilter("bedrooms", undefined)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                !filters.bedrooms
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-gray-200 text-gray-600 hover:border-gray-300"
              )}
            >
              Tất cả
            </button>
            {bedroomOptions.map((n) => (
              <button
                key={n}
                onClick={() => updateFilter("bedrooms", n)}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                  filters.bedrooms === n
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                )}
              >
                {n}+
              </button>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-8">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Tiện nghi
          </h4>
          <div className="space-y-2">
            {topAmenities.map((id) => {
              const amenity = amenities.find((a) => a.id === id);
              if (!amenity) return null;
              return (
                <label key={id} className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.amenities?.includes(id) || false}
                    onChange={() => toggleAmenity(id)}
                    className="accent-gold"
                  />
                  <span className="text-sm text-gray-700">{amenity.name}</span>
                </label>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
