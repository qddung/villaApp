"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { CalendarDays, Users, MapPin, Check, Car, UtensilsCrossed, Compass } from "lucide-react";
import { getVillaBySlug } from "@/data/villas";
import { formatPrice } from "@/lib/utils";

const extras = [
  { id: "transfer", name: "Xe đưa đón sân bay", price: 800000, icon: Car },
  { id: "chef", name: "Chef riêng (1 bữa tối)", price: 2000000, icon: UtensilsCrossed },
  { id: "tour", name: "Tour khám phá Vũng Tàu", price: 1500000, icon: Compass },
];

export default function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const villaSlug = searchParams.get("villa") || "";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guestsParam = searchParams.get("guests") || "2";

  const villa = getVillaBySlug(villaSlug);

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

  const subtotal = nights * villa.pricePerNight;
  const extrasTotal = extras
    .filter((e) => selectedExtras.includes(e.id))
    .reduce((sum, e) => sum + e.price, 0);
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + extrasTotal + serviceFee;

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      router.push(
        `/booking/confirmation?villa=${villa.slug}&name=${encodeURIComponent(form.name)}&total=${total}&nights=${nights}`
      );
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-navy">Đặt Phòng</h1>
        <p className="mt-2 text-gray-500">Hoàn tất thông tin để đặt villa</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-5">
          {/* Form section */}
          <div className="space-y-8 lg:col-span-3">
            {/* Guest info */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="font-heading text-lg font-semibold text-navy">
                Thông tin khách
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
                    placeholder="0909 xxx xxx"
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

            {/* Extra services */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="font-heading text-lg font-semibold text-navy">
                Dịch vụ thêm
              </h2>
              <div className="mt-4 space-y-3">
                {extras.map((extra) => (
                  <label
                    key={extra.id}
                    className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200 p-4 transition-colors hover:border-gold/50"
                  >
                    <input
                      type="checkbox"
                      checked={selectedExtras.includes(extra.id)}
                      onChange={() => toggleExtra(extra.id)}
                      className="accent-gold"
                    />
                    <extra.icon className="h-5 w-5 text-gold" />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-800">
                        {extra.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-navy">
                      {formatPrice(extra.price)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Payment placeholder */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="font-heading text-lg font-semibold text-navy">
                Thanh toán
              </h2>
              <div className="mt-4 rounded-xl border-2 border-dashed border-gray-200 p-8 text-center">
                <p className="text-sm text-gray-400">
                  Tích hợp VNPay / Momo sẽ được thêm sau.
                  <br />
                  Hiện tại đặt phòng sẽ được xác nhận qua điện thoại.
                </p>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="font-heading text-lg font-semibold text-navy">
                Tóm tắt đơn đặt
              </h2>

              <div className="mt-4 flex gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={villa.images[0]}
                    alt={villa.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{villa.name}</h3>
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
                    <div className="font-medium">{checkIn}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CalendarDays className="h-4 w-4 text-gold" />
                  <div>
                    <div className="text-xs text-gray-400">Ngày đi</div>
                    <div className="font-medium">{checkOut}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-gold" />
                  <div>
                    <div className="text-xs text-gray-400">Khách</div>
                    <div className="font-medium">{guestsParam}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2 border-t border-gray-100 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    {formatPrice(villa.pricePerNight)} &times; {nights} đêm
                  </span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                {selectedExtras.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Dịch vụ thêm</span>
                    <span className="font-medium">
                      {formatPrice(extrasTotal)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Phí dịch vụ</span>
                  <span className="font-medium">{formatPrice(serviceFee)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-2 text-lg font-bold">
                  <span>Tổng cộng</span>
                  <span className="text-navy">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 font-semibold text-navy transition-colors hover:bg-gold-light disabled:opacity-60"
              >
                {submitting ? (
                  "Đang xử lý..."
                ) : (
                  <>
                    <Check className="h-5 w-5" />
                    Xác nhận đặt phòng
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                Đội ngũ sẽ liên hệ xác nhận trong vòng 30 phút
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
