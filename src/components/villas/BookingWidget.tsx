"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Users, Star } from "lucide-react";
import { Villa } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface BookingWidgetProps {
  villa: Villa;
}

export default function BookingWidget({ villa }: BookingWidgetProps) {
  const router = useRouter();
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

  const subtotal = nights * villa.pricePerNight;
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;

  const handleBook = () => {
    const params = new URLSearchParams({
      villa: villa.slug,
      checkIn,
      checkOut,
      guests: guests.toString(),
    });
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <div className="sticky top-28 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-navy">
          {formatPrice(villa.pricePerNight)}
        </span>
        <span className="text-gray-400">/ đêm</span>
      </div>

      <div className="mt-1 flex items-center gap-1 text-sm">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="font-medium">{villa.rating}</span>
        <span className="text-gray-400">
          &middot; {villa.reviewCount} đánh giá
        </span>
      </div>

      {/* Inputs */}
      <div className="mt-6 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-gray-200 p-3">
            <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Ngày đến
            </label>
            <div className="mt-1 flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gray-400" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full text-sm font-medium outline-none"
              />
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-3">
            <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Ngày đi
            </label>
            <div className="mt-1 flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gray-400" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full text-sm font-medium outline-none"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 p-3">
          <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            Số khách
          </label>
          <div className="mt-1 flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-400" />
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

      {/* Price breakdown */}
      {nights > 0 && (
        <div className="mt-6 space-y-2 border-t border-gray-100 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">
              {formatPrice(villa.pricePerNight)} &times; {nights} đêm
            </span>
            <span className="font-medium">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Phí dịch vụ</span>
            <span className="font-medium">{formatPrice(serviceFee)}</span>
          </div>
          <div className="flex justify-between border-t border-gray-100 pt-2 text-base font-bold">
            <span>Tổng cộng</span>
            <span className="text-navy">{formatPrice(total)}</span>
          </div>
        </div>
      )}

      {/* Book button */}
      <button
        onClick={handleBook}
        disabled={!checkIn || !checkOut}
        className="mt-6 w-full rounded-xl bg-gold py-3.5 text-center font-semibold text-navy transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-50"
      >
        {nights > 0 ? "Đặt ngay" : "Chọn ngày để xem giá"}
      </button>

      <p className="mt-3 text-center text-xs text-gray-400">
        Bạn chưa bị trừ tiền. Xác nhận sau khi chủ villa đồng ý.
      </p>
    </div>
  );
}
