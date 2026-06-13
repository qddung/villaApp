import { useEffect, useState } from "react";
import { fetchBookings, updateBookingStatus } from "@/lib/api";
import { Calendar, Copy } from "lucide-react";

export default function BookingsPage() {
  const [bookingsList, setBookingsList] = useState<any[]>([]);

  async function loadBookings() {
    try {
      const data = await fetchBookings();
      setBookingsList(data);
    } catch {
      console.error("Failed to load bookings");
    }
  }

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h1 className="font-heading text-2xl font-bold text-navy">Đơn Đặt Phòng</h1>
      </div>

      <div className="space-y-4">
        {bookingsList.map((booking) => (
          <div key={booking.id} className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sand">
                <Calendar className="h-5 w-5 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {booking.name} <span className="text-sm font-normal text-gray-500">({booking.phone})</span>
                </h3>
                <div className="mt-0.5 flex items-center gap-3 text-xs text-gray-500">
                  <span className="font-medium text-navy">{booking.villa?.name}</span>
                  <span>&middot;</span>
                  <span>{booking.checkIn} đến {booking.checkOut}</span>
                  <span>&middot;</span>
                  <span>{booking.guests} khách</span>
                </div>
                {booking.note && <p className="mt-1 text-xs italic text-gray-400">Ghi chú: {booking.note}</p>}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-bold text-navy">
                  {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(booking.total)}
                </div>
                <div className={`text-xs font-semibold ${booking.status === "PENDING" ? "text-orange-500" : booking.status === "CONFIRMED" ? "text-green-500" : "text-red-500"}`}>
                  {booking.status}
                </div>
              </div>
              <select
                className="rounded-lg border px-3 py-2 text-sm outline-none"
                value={booking.status}
                onChange={async (e) => {
                  await updateBookingStatus(booking.id, e.target.value);
                  loadBookings();
                }}
              >
                <option value="PENDING">PENDING</option>
                <option value="CONFIRMED">CONFIRMED</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>
              <button 
                onClick={() => {
                  const template = `Xin chào ${booking.name},\n\nChúng tôi xin xác nhận đơn đặt phòng của bạn tại ${booking.villa?.name} từ ngày ${booking.checkIn} đến ${booking.checkOut} đã được xác nhận.\n\nCảm ơn bạn đã tin tưởng dịch vụ của chúng tôi!`;
                  navigator.clipboard.writeText(template);
                  alert("Đã sao chép mẫu xác nhận!");
                }}
                className="flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <Copy className="h-4 w-4" /> Sao chép
              </button>
            </div>
          </div>
        ))}
        {bookingsList.length === 0 && (
          <div className="py-12 text-center text-gray-500 bg-white rounded-2xl shadow-sm">Chưa có đơn đặt phòng nào.</div>
        )}
      </div>
    </div>
  );
}
