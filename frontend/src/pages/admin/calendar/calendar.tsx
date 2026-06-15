import { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { vi } from "date-fns/locale/vi";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { fetchBookings } from "@/lib/api";
import { formatPrice } from "@/lib/utils";
import { X } from "lucide-react";

const locales = {
  "vi": vi,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  useEffect(() => {
    async function load() {
      try {
        const bookings = await fetchBookings();
        // Only show CONFIRMED bookings on the calendar
        const confirmed = bookings.filter((b: any) => b.status === "CONFIRMED");
        const formattedEvents = confirmed.map((b: any) => ({
          title: `${b.villa?.name || "Villa"} - ${b.name}`,
          start: new Date(b.checkIn),
          end: new Date(b.checkOut),
          allDay: true,
          resource: b,
        }));
        setEvents(formattedEvents);
      } catch (e) {
        console.error("Failed to load bookings for calendar", e);
      }
    }
    load();
  }, []);

  function handleSelectEvent(event: any) {
    setSelectedBooking(event.resource);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-4 transition-colors">
        <h1 className="font-heading text-2xl font-bold text-navy dark:text-white">Lịch Đặt Phòng</h1>
        <span className="rounded-lg bg-green-100 dark:bg-green-900/30 px-3 py-1.5 text-xs font-semibold text-green-700 dark:text-green-400">
          Chỉ hiển thị đã xác nhận
        </span>
      </div>

      <div className="rounded-2xl bg-white dark:bg-slate-950 p-6 shadow-sm border border-transparent dark:border-slate-800 transition-colors h-[600px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          culture="vi"
          style={{ height: "100%" }}
          views={["month", "agenda"]}
          onSelectEvent={handleSelectEvent}
          eventPropGetter={() => ({
            style: {
              backgroundColor: "#10B981",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            },
          })}
        />
      </div>

      {/* Detail Modal — same style as bookings page */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelectedBooking(null)}>
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-4">
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white">Chi tiết đặt phòng</h2>
              <button onClick={() => setSelectedBooking(null)} className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              {/* Status Badge */}
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-green-100 dark:bg-green-900/30 px-3 py-1.5 text-xs font-bold text-green-700 dark:text-green-400">
                  ✓ CONFIRMED
                </span>
                <span className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${selectedBooking.bookingType === 'ZALO' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-gold/10 text-gold'}`}>
                  {selectedBooking.bookingType || 'APP'}
                </span>
              </div>

              {/* Customer Info */}
              <div>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-1">Thông tin khách hàng</p>
                <div className="space-y-1.5 rounded-xl bg-gray-50 dark:bg-slate-800 p-4 text-sm">
                  <p className="flex items-center justify-between"><span className="text-gray-500 dark:text-slate-400">Tên:</span> <span className="font-medium text-navy dark:text-white">{selectedBooking.name}</span></p>
                  <p className="flex items-center justify-between"><span className="text-gray-500 dark:text-slate-400">Số điện thoại:</span> <span className="font-medium text-navy dark:text-white">{selectedBooking.phone}</span></p>
                  <p className="flex items-center justify-between"><span className="text-gray-500 dark:text-slate-400">Email:</span> <span className="font-medium text-navy dark:text-white">{selectedBooking.email}</span></p>
                </div>
              </div>

              {/* Booking Details */}
              {selectedBooking.bookingType !== 'CONTACT' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-slate-400">Check-in</p>
                      <p className="font-medium text-navy dark:text-white">{selectedBooking.checkIn?.replace('T', ' ')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-slate-400">Check-out</p>
                      <p className="font-medium text-navy dark:text-white">{selectedBooking.checkOut?.replace('T', ' ')}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-slate-400">Số khách</p>
                      <p className="font-medium text-navy dark:text-white">{selectedBooking.guests} người</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-slate-400">Villa</p>
                      <p className="font-medium text-navy dark:text-white">{selectedBooking.villa?.name}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-slate-400">Giá lúc đặt</p>
                      <p className="font-medium text-navy dark:text-white">{selectedBooking.priceAtBooking ? formatPrice(selectedBooking.priceAtBooking) : 'N/A'}/ngày</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-slate-400">Tổng tiền</p>
                      <p className="font-medium text-navy dark:text-white">{formatPrice(selectedBooking.total)}</p>
                    </div>
                  </div>
                </>
              )}
              {selectedBooking.bookingType === 'CONTACT' && (
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-400">Thời gian gửi</p>
                  <p className="font-medium text-navy dark:text-white">{new Date(selectedBooking.createdAt).toLocaleString('vi-VN')}</p>
                </div>
              )}

              {/* Note */}
              {selectedBooking.note && (
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-400">Ghi chú / Lời nhắn</p>
                  <div className="mt-1 rounded-xl bg-gray-50 dark:bg-slate-800 p-4 text-sm text-gray-700 dark:text-slate-300 whitespace-pre-wrap">
                    {selectedBooking.note}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedBooking(null)}
                className="rounded-xl bg-navy px-6 py-2.5 font-semibold text-white hover:bg-navy-light transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .dark .rbc-calendar { color: #f1f5f9; }
        .dark .rbc-header { border-bottom-color: #1e293b; border-left-color: #1e293b; }
        .dark .rbc-month-view { border-color: #1e293b; }
        .dark .rbc-month-row { border-top-color: #1e293b; }
        .dark .rbc-day-bg { border-left-color: #1e293b; }
        .dark .rbc-off-range-bg { background-color: #0f172a; }
        .dark .rbc-today { background-color: rgba(59, 130, 246, 0.1); }
        .dark .rbc-btn-group button { color: #f1f5f9; border-color: #1e293b; }
        .dark .rbc-btn-group button:hover { background-color: #1e293b; }
        .dark .rbc-btn-group button.rbc-active { background-color: #334155; color: white; }
        .rbc-event { cursor: pointer; }
        .rbc-event:hover { opacity: 0.85; }
      `}</style>
    </div>
  );
}
