import { X } from "lucide-react";
import { useVillaStore } from "@/store/useVillaStore";
import { SearchFilters } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  filters: SearchFilters;
  onChange: (filters: SearchFilters) => void;
  open: boolean;
  onClose: () => void;
}

export default function FilterSidebar({
  filters,
  onChange,
  open,
  onClose,
}: FilterSidebarProps) {
  const filterOptions = useVillaStore((state) => state.filterOptions);

  // Fallback if not loaded for some reason
  const availableAreas = filterOptions?.areas || [];
  const availableAmenities = filterOptions?.amenities || [];

  const bedroomOptions = filterOptions?.bedroomOptions || [];

  const updateFilter = (key: keyof SearchFilters, value: unknown) => {
    onChange({ ...filters, [key]: value });
  };

  const toggleAmenity = (name: string) => {
    const current = filters.amenities || [];
    const updated = current.includes(name)
      ? current.filter((a) => a !== name)
      : [...current, name];
    updateFilter("amenities", updated);
  };

  const clearAll = () => {
    onChange({ sortBy: filters.sortBy });
  };

  const hasFilters =
    filters.area || filters.bedrooms || (filters.amenities?.length ?? 0) > 0;

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
            {availableAreas.map((area) => (
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
            {availableAmenities.map((amenity) => (
              <label key={amenity} className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.amenities?.includes(amenity) || false}
                  onChange={() => toggleAmenity(amenity)}
                  className="accent-gold"
                />
                <span className="text-sm text-gray-700">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
