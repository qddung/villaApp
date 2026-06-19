
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, Users, Star } from "lucide-react";
import { Villa } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface BookingWidgetProps {
  villa: Villa;
}

export default function BookingWidget({ villa }: BookingWidgetProps) {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const nights =
    checkIn && checkOut
      ? Math.max(
          1,
          Math.ceil(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;


  const handleBook = (type: 'app' | 'zalo') => {
    const params = new URLSearchParams({
      villa: villa.slug,
      checkIn,
      checkOut,
      guests: guests.toString(),
      type: type
    });
    navigate(`/booking?${params.toString()}`);
  };

  return (
    <div className="sticky top-28 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-black/5">
      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-primary">
          {formatPrice(villa.pricePerNight)}
        </span>
        <span className="text-sm text-gray-500">/ ngày</span>
      </div>

      {/* <div className="mt-1 flex items-center gap-1 text-sm">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="font-medium">{villa.rating}</span>
        <span className="text-gray-400">
          &middot; {villa.reviewCount} đánh giá
        </span>
      </div> */}

      {/* Inputs */}
      <div className="mt-6 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-gray-200 p-3 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold transition-colors">
            <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Ngày & Giờ đến
            </label>
            <div className="mt-1">
              <input
                type="datetime-local"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full text-[13px] font-medium outline-none"
              />
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-3 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold transition-colors">
            <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Ngày & Giờ đi
            </label>
            <div className="mt-1">
              <input
                type="datetime-local"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full text-[13px] font-medium outline-none"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 p-3 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold transition-colors">
          <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            Số khách
          </label>
          <div className="mt-1">
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full text-sm font-medium outline-none"
            >
              {Array.from({ length: villa.maxGuests }, (_, i) => i + 1).map(
                (n) => (
                  <option key={n} value={n}>
                    {n} khách
                  </option>
                )
              )}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <button
          onClick={() => handleBook("app")}
          disabled={!checkIn || !checkOut}
          className="w-full rounded-xl bg-gold py-3.5 text-center font-semibold text-primary transition-all duration-300 hover:bg-gold-light hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
        >
          Đặt ngay
        </button>

        <button
          onClick={() => handleBook("zalo")}
          disabled={!checkIn || !checkOut}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-50 py-3.5 text-center font-semibold text-blue-600 transition-colors hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Liên hệ Zalo để nhận chiết khấu
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-gray-400">
        Để lại thông tin để được tư vấn và nhận báo giá tốt nhất.
      </p>
    </div>
  );
}

