import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CalendarDays, Users, MapPin, Check, Car, UtensilsCrossed, Compass } from "lucide-react";
import { useVillaStore } from "@/store/useVillaStore";
import { formatPrice } from "@/lib/utils";
import { createBooking, fetchSettings, getVillaMainImageUrl } from "@/lib/api";
import { toast } from "sonner";

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const villaSlug = searchParams.get("villa") || "";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guestsParam = searchParams.get("guests") || "2";
  const bookingType = searchParams.get("type") === "zalo" ? "ZALO" : "APP";
  const isZalo = bookingType === "ZALO";

  const getVillaBySlug = useVillaStore((state) => state.getVillaBySlug);
  const villa = getVillaBySlug(villaSlug);

  const formatDateTime = (dt: string) => {
    if (!dt) return "";
    return dt.replace("T", " ");
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  if (!villa) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-24">
        <p className="text-gray-500">Không tìm thấy villa. Vui lòng quay lại chọn villa.</p>
      </div>
    );
  }

  const nights = Math.max(
    1,
    Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );

  const total = nights * villa.pricePerNight;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await createBooking({
        villaId: villa.id,
        name: form.name,
        email: form.email,
        phone: form.phone,
        note: form.note,
        checkIn: checkIn,
        checkOut: checkOut,
        guests: parseInt(guestsParam, 10),
        total: total,
        priceAtBooking: villa.pricePerNight,
        bookingType: bookingType,
      });
      if (isZalo) {
        const settings = await fetchSettings();
        const zaloPhone = settings?.contactPhone ? settings.contactPhone.replace(/\s+/g, '') : '0326151111';
        window.open(`https://zalo.me/${zaloPhone}`, '_blank');
      }
      navigate(
        `/booking/confirmation?villa=${villa.slug}&name=${encodeURIComponent(form.name)}&total=${total}&nights=${nights}&type=${bookingType}`
      );
    } catch (error) {
      toast.error("Đã có lỗi xảy ra khi đặt phòng. Vui lòng thử lại.");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-primary">
          {isZalo ? "Liên hệ Zalo đặt phòng" : "Xác nhận đặt phòng"}
        </h1>
        <p className="mt-2 text-gray-500">
          {isZalo ? "Vui lòng để lại thông tin để nhận chiết khấu trước khi mở Zalo" : "Hoàn tất thông tin để giữ phòng cho chuyến đi của bạn"}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-5">
          {/* Form section */}
          <div className="space-y-8 lg:col-span-3">
            {/* Booking details */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="font-heading text-lg font-semibold text-primary">
                Chi tiết yêu cầu tư vấn
              </h2>

              <div className="mt-4 flex gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={getVillaMainImageUrl(villa)}
                    alt={villa.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{villa.name}</h3>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-400">
                    <MapPin className="h-3 w-3" />
                    {villa.area}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-4 rounded-xl bg-sand p-4">
                <div className="flex items-center gap-2 text-sm">
                  <CalendarDays className="h-4 w-4 text-gold" />
                  <div>
                    <div className="text-xs text-gray-400">Ngày đến</div>
                    <div className="font-medium">{formatDateTime(checkIn)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CalendarDays className="h-4 w-4 text-gold" />
                  <div>
                    <div className="text-xs text-gray-400">Ngày đi</div>
                    <div className="font-medium">{formatDateTime(checkOut)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-gold" />
                  <div>
                    <div className="text-xs text-gray-400">Số khách</div>
                    <div className="font-medium">{guestsParam}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{formatPrice(villa.pricePerNight)} x {nights} ngày</span>
                  <span className="font-medium text-primary">{formatPrice(total)}</span>
                </div>
                <div className="mt-4 flex justify-between font-heading text-lg font-bold">
                  <span className="text-primary">Tổng tiền</span>
                  <span className="text-gold">{formatPrice(total)}</span>
                </div>
                {isZalo && (
                  <p className="mt-2 text-right text-xs italic text-blue-500">
                    * Giá trên chưa bao gồm chiết khấu Zalo
                  </p>
                )}
              </div>
            </div>

            {/* Guest info */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="font-heading text-lg font-semibold text-primary">
                Thông tin liên hệ
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    placeholder="0326 xxx xxx"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Ghi chú
                  </label>
                  <textarea
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    rows={3}
                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    placeholder="Yêu cầu đặc biệt, giờ check-in dự kiến..."
                  />
                </div>
              </div>
            </div>


          </div>

          {/* Submit section */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="font-heading text-lg font-semibold text-primary">
                {isZalo ? "Chuyển sang Zalo" : "Xác nhận"}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                {isZalo ? "Hệ thống sẽ ghi nhận thông tin và tự động mở Zalo để bạn chat trực tiếp với chủ trọ." : "Hãy kiểm tra lại thông tin và nhấn xác nhận để giữ phòng."}
              </p>              <button
                type="submit"
                disabled={submitting}
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-semibold transition-colors disabled:opacity-60 ${
                  isZalo ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gold text-primary hover:bg-gold-light"
                }`}
              >
                {submitting ? (
                  "Đang xử lý..."
                ) : (
                  <>
                    <Check className="h-5 w-5" />
                    {isZalo ? "Gửi yêu cầu & Mở Zalo" : "Xác nhận đặt phòng"}
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                {isZalo ? "Vui lòng không chặn popup trên trình duyệt" : "Đội ngũ sẽ liên hệ xác nhận trong vòng 30 phút"}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

