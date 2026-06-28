
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search, CalendarDays, Users, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useVillaStore } from "@/store/useVillaStore";

interface SearchFormProps {
  variant?: "hero" | "compact";
  className?: string;
}

export default function SearchForm({ variant = "hero", className }: SearchFormProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filterOptions = useVillaStore((state) => state.filterOptions);
  const loadFilterOptions = useVillaStore((state) => state.loadFilterOptions);

  const [area, setArea] = useState(() => searchParams.get("area") || "");
  const [checkIn, setCheckIn] = useState(() => searchParams.get("checkIn") || "");
  const [checkOut, setCheckOut] = useState(() => searchParams.get("checkOut") || "");
  const [guests, setGuests] = useState(() => searchParams.get("guests") || "");

  useEffect(() => {
    if (!filterOptions) {
      loadFilterOptions();
    }
  }, [filterOptions, loadFilterOptions]);

  useEffect(() => {
    setArea(searchParams.get("area") || "");
    setCheckIn(searchParams.get("checkIn") || "");
    setCheckOut(searchParams.get("checkOut") || "");
    setGuests(searchParams.get("guests") || "");
  }, [searchParams]);

  const areas = filterOptions?.areas || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (area) params.set("area", area);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);
    navigate(`/villas?${params.toString()}`);
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={cn("flex items-center gap-2", className)}>
        <div className="flex flex-1 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm villa..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
            onFocus={() => navigate("/villas")}
          />
        </div>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "w-full max-w-5xl rounded-2xl bg-white/95 p-3 shadow-2xl backdrop-blur-md",
        className
      )}
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
        <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
          <MapPin className="h-5 w-5 text-gold" />
          <div className="flex-1 text-left">
            <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Khu vực
            </label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none"
            >
              <option value="">Tất cả Vũng Tàu</option>
              {areas.map((a) => (
                <option key={a.slug} value={a.slug}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
          <CalendarDays className="h-5 w-5 text-gold" />
          <div className="flex-1 text-left">
            <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Ngày đến
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
          <CalendarDays className="h-5 w-5 text-gold" />
          <div className="flex-1 text-left">
            <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Ngày đi
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
          <Users className="h-5 w-5 text-gold" />
          <div className="flex-1 text-left">
            <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Số khách
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none"
            >
              <option value="">Chọn</option>
              {[2, 4, 6, 8, 10, 12, 14].map((n) => (
                <option key={n} value={n}>
                  {n} khách
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary-light"
        >
          <Search className="h-5 w-5" />
          <span>Tìm villa</span>
        </button>
      </div>
    </form>
  );
}

