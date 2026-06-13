import { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { vi } from "date-fns/locale/vi";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { fetchBookings } from "@/lib/api";

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

  useEffect(() => {
    async function load() {
      try {
        const bookings = await fetchBookings();
        const formattedEvents = bookings.map((b: any) => ({
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h1 className="font-heading text-2xl font-bold text-navy">Lịch Trống</h1>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm h-[600px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          culture="vi"
          style={{ height: "100%" }}
          views={["month", "agenda"]}
          eventPropGetter={(event) => {
            let backgroundColor = "#C5A572"; // Gold
            if (event.resource.status === "CONFIRMED") backgroundColor = "#10B981"; // Emerald
            if (event.resource.status === "CANCELLED") backgroundColor = "#EF4444"; // Rose
            if (event.resource.status === "PENDING") backgroundColor = "#F59E0B"; // Amber
            return { style: { backgroundColor, borderRadius: "8px", border: "none" } };
          }}
        />
      </div>
    </div>
  );
}
