import { useEffect, useState } from "react";
import { fetchBookings, updateBookingStatus, updateBooking, deleteBooking, fetchVillas } from "@/lib/api";
import { Calendar, Copy, X, Save, AlertTriangle, Trash2 } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

export default function BookingsPage() {
  const [bookingsList, setBookingsList] = useState<any[]>([]);
  const [filterType, setFilterType] = useState<string>("ALL");
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [editForm, setEditForm] = useState<any>({});
  const [villasList, setVillasList] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);

  async function loadBookings() {
    try {
      const data = await fetchBookings();
      setBookingsList(data);
    } catch {
      console.error("Failed to load bookings");
    }
  }

  async function loadVillas() {
    try {
      const data = await fetchVillas();
      setVillasList(data);
    } catch {
      console.error("Failed to load villas");
    }
  }

  useEffect(() => {
    loadBookings();
    loadVillas();
  }, []);

  function openDetail(booking: any) {
    setSelectedBooking(booking);
    setEditForm({
      name: booking.name || "",
      phone: booking.phone || "",
      email: booking.email || "",
      checkIn: booking.checkIn || "",
      checkOut: booking.checkOut || "",
      guests: booking.guests || 1,
      villaId: booking.villaId || "",
      note: booking.note || "",
    });
  }

  function canConfirm(booking: any) {
    const data = {
      name: booking.name,
      phone: booking.phone,
      checkIn: booking.checkIn,
      villaId: booking.villaId,
    };
    return !!(data.name?.trim() && data.phone?.trim() && data.checkIn?.trim() && data.villaId?.trim());
  }

  async function handleSaveEdit() {
    if (!selectedBooking) return;
    setSaving(true);
    try {
      const updated = await updateBooking(selectedBooking.id, editForm);
      toast.success("Đã cập nhật thông tin yêu cầu!");
      setSelectedBooking(updated);
      setEditForm({
        name: updated.name || "",
        phone: updated.phone || "",
        email: updated.email || "",
        checkIn: updated.checkIn || "",
        checkOut: updated.checkOut || "",
        guests: updated.guests || 1,
        villaId: updated.villaId || "",
        note: updated.note || "",
      });
      loadBookings();
    } catch {
      toast.error("Không thể cập nhật. Vui lòng thử lại.");
    } finally {
      setSaving(false);
    }
  }

  async function handleStatusChange(bookingId: string, newStatus: string, booking: any) {
    if (newStatus === "CONFIRMED" && !canConfirm(booking)) {
      toast.error("Cần có đầy đủ: Tên, SĐT, ngày check-in và Villa trước khi xác nhận!", { duration: 4000 });
      return;
    }
    try {
      await updateBookingStatus(bookingId, newStatus);
      loadBookings();
      if (selectedBooking?.id === bookingId) {
        setSelectedBooking({ ...selectedBooking, status: newStatus });
      }
      toast.success("Cập nhật trạng thái thành công!");
    } catch {
      toast.error("Không thể cập nhật trạng thái.");
    }
  }

  // Compute missing fields for the currently open modal
  const missingFields: string[] = [];
  if (selectedBooking) {
    if (!editForm.name?.trim()) missingFields.push("Tên khách");
    if (!editForm.phone?.trim()) missingFields.push("Số điện thoại");
    if (!editForm.checkIn?.trim()) missingFields.push("Ngày check-in");
    if (!editForm.villaId?.trim()) missingFields.push("Villa");
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-4 transition-colors">
        <h1 className="font-heading text-2xl font-bold text-primary dark:text-white">Yêu Cầu Tư Vấn</h1>
        <select
          className="rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none dark:text-white shadow-sm focus:border-gold transition-colors"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="ALL">Tất cả</option>
          <option value="APP">App</option>
          <option value="ZALO">Zalo</option>
          <option value="CONTACT">Liên hệ (Contact)</option>
        </select>
      </div>

      <div className="space-y-4">
        {bookingsList.filter(b => filterType === "ALL" || (b.bookingType || "APP") === filterType).map((booking) => {
          const isBookingExpired = booking.status === "PENDING" && booking.bookingType !== "CONTACT" && new Date() > new Date(booking.checkIn);
          const isContactExpired = booking.status === "PENDING" && booking.bookingType === "CONTACT" && (new Date().getTime() - new Date(booking.createdAt).getTime()) > 3 * 24 * 60 * 60 * 1000;
          return (
            <div key={booking.id} onClick={() => openDetail(booking)} className="flex flex-col gap-4 rounded-2xl bg-white dark:bg-slate-950 p-5 shadow-sm border border-transparent dark:border-slate-800 transition-colors sm:flex-row sm:items-center sm:justify-between cursor-pointer hover:border-gold/50 dark:hover:border-gold/50">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sand dark:bg-gold/10">
                  <Calendar className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-primary dark:text-white">
                    {booking.name} <span className="text-sm font-normal text-gray-500 dark:text-slate-400">({booking.phone})</span>
                  </h3>
                  <div className="mt-0.5 flex items-center gap-3 text-xs text-gray-500 dark:text-slate-400">
                    <span className="font-medium text-primary dark:text-slate-300">{booking.villa?.name || "Tư vấn chung"}</span>
                    <span>&middot;</span>
                    <span>{booking.bookingType === 'CONTACT' ? `Gửi lúc: ${new Date(booking.createdAt).toLocaleString('vi-VN')}` : `${booking.checkIn?.replace('T', ' ')} đến ${booking.checkOut?.replace('T', ' ')}`}</span>
                    <span>&middot;</span>
                    <span>{booking.bookingType === 'CONTACT' ? '-' : `${booking.guests} khách`}</span>
                    <span>&middot;</span>
                    <span className={`font-semibold ${booking.bookingType === 'ZALO' ? 'text-blue-500' : 'text-gold'}`}>{booking.bookingType || 'APP'}</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-slate-400">
                    {booking.bookingType === "CONTACT" ? (
                      <span>Yêu cầu liên hệ</span>
                    ) : (
                      <>Giá lúc đặt: <span className="font-medium text-primary dark:text-slate-300">{booking.priceAtBooking ? formatPrice(booking.priceAtBooking) : 'N/A'}</span>/ngày &middot; Tổng: <span className="font-medium text-primary dark:text-slate-300">{formatPrice(booking.total)}</span></>
                    )}
                  </p>
                  {booking.note && <p className="mt-1 text-xs italic text-gray-400 dark:text-slate-500 line-clamp-1">Ghi chú: {booking.note}</p>}
                </div>
              </div>
              <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
                <div className="text-right flex items-center gap-2">
                  {isBookingExpired && (
                    <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      EXPIRED
                    </span>
                  )}
                  {isContactExpired && (
                    <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      QUÁ 3 NGÀY
                    </span>
                  )}
                  <div className={`text-xs font-semibold ${booking.status === "PENDING" ? "text-orange-500" : booking.status === "CONFIRMED" ? "text-green-500" : "text-red-500"}`}>
                    {booking.status}
                  </div>
                </div>
                <select
                  className="rounded-lg border dark:border-slate-700 bg-transparent dark:bg-slate-900 px-3 py-2 text-sm outline-none dark:text-white"
                  value={booking.status}
                  onChange={(e) => handleStatusChange(booking.id, e.target.value, booking)}
                >
                  <option value="PENDING">PENDING</option>
                  <option value="CONFIRMED">CONFIRMED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
                <button
                  onClick={() => {
                    const template = booking.bookingType === "CONTACT"
                      ? `Xin chào ${booking.name},\n\nCảm ơn bạn đã để lại thông tin liên hệ. Chúng tôi đã nhận được yêu cầu của bạn và sẽ phản hồi sớm nhất có thể.`
                      : `Xin chào ${booking.name},\n\nCảm ơn bạn đã để lại yêu cầu tư vấn cho ${booking.villa?.name} từ ngày ${booking.checkIn} đến ${booking.checkOut}.\n\nChúng tôi sẽ báo giá chi tiết cho bạn sớm nhất có thể.`;
                    navigator.clipboard.writeText(template);
                    toast.success("Đã sao chép mẫu xác nhận tư vấn!");
                  }}
                  className="flex items-center gap-1 rounded-lg bg-gray-100 dark:bg-slate-800 px-3 py-2 text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Copy className="h-4 w-4" /> Sao chép
                </button>
              </div>
            </div>
          );
        })}
        {bookingsList.filter(b => filterType === "ALL" || (b.bookingType || "APP") === filterType).length === 0 && (
          <div className="py-12 text-center text-gray-500 dark:text-slate-400 bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-transparent dark:border-slate-800 transition-colors">Chưa có yêu cầu nào phù hợp.</div>
        )}
      </div>

      {/* Detail Modal — Always Editable */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelectedBooking(null)}>
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-4">
              <h2 className="font-heading text-xl font-bold text-primary dark:text-white">Chi tiết yêu cầu</h2>
              <button onClick={() => setSelectedBooking(null)} className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Warning if missing fields for confirmation */}
            {selectedBooking.status === "PENDING" && missingFields.length > 0 && (
              <div className="mt-4 flex items-start gap-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 p-4">
                <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-amber-800 dark:text-amber-300">Chưa đủ thông tin để xác nhận</p>
                  <p className="text-amber-700 dark:text-amber-400 mt-1">Thiếu: {missingFields.join(", ")}</p>
                </div>
              </div>
            )}

            <div className="mt-4 space-y-4">
              {/* Status & Type Badges */}
              <div className="flex items-center gap-2">
                <span className={`rounded-lg px-3 py-1.5 text-xs font-bold ${selectedBooking.status === "CONFIRMED" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" : selectedBooking.status === "CANCELLED" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400" : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"}`}>
                  {selectedBooking.status}
                </span>
                <span className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${selectedBooking.bookingType === 'ZALO' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-gold/10 text-gold'}`}>
                  {selectedBooking.bookingType || 'APP'}
                </span>
              </div>

              {/* Customer Info — always editable */}
              <div>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">Thông tin khách hàng</p>
                <div className="space-y-3 rounded-xl bg-gray-50 dark:bg-slate-800 p-4">
                  <div>
                    <label className="text-xs text-gray-500 dark:text-slate-400">Tên <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="mt-1 w-full rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none dark:text-white focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 dark:text-slate-400">Số điện thoại <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      value={editForm.phone}
                      onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                      className="mt-1 w-full rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none dark:text-white focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 dark:text-slate-400">Email</label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                      className="mt-1 w-full rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none dark:text-white focus:border-gold transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Check-in/out, guests, villa — always editable */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-500 dark:text-slate-400">Check-in <span className="text-red-500">*</span></label>
                  <input
                    type="datetime-local"
                    value={editForm.checkIn}
                    onChange={(e) => setEditForm({ ...editForm, checkIn: e.target.value })}
                    className="mt-1 w-full rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none dark:text-white focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 dark:text-slate-400">Check-out</label>
                  <input
                    type="datetime-local"
                    value={editForm.checkOut}
                    onChange={(e) => setEditForm({ ...editForm, checkOut: e.target.value })}
                    className="mt-1 w-full rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none dark:text-white focus:border-gold transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-500 dark:text-slate-400">Số khách</label>
                  <input
                    type="number"
                    min={1}
                    value={editForm.guests}
                    onChange={(e) => setEditForm({ ...editForm, guests: parseInt(e.target.value) || 1 })}
                    className="mt-1 w-full rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none dark:text-white focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 dark:text-slate-400">Villa <span className="text-red-500">*</span></label>
                  <select
                    value={editForm.villaId}
                    onChange={(e) => setEditForm({ ...editForm, villaId: e.target.value })}
                    className="mt-1 w-full rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none dark:text-white focus:border-gold transition-colors"
                  >
                    <option value="">-- Chọn Villa --</option>
                    {villasList.map((v) => (
                      <option key={v.id} value={v.id}>{v.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="text-sm text-gray-500 dark:text-slate-400">Ghi chú</label>
                <textarea
                  value={editForm.note}
                  onChange={(e) => setEditForm({ ...editForm, note: e.target.value })}
                  rows={3}
                  className="mt-1 w-full rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none dark:text-white focus:border-gold transition-colors resize-none"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={async () => {
                  if (!confirm("Bạn có chắc muốn xóa yêu cầu này?")) return;
                  try {
                    await deleteBooking(selectedBooking.id);
                    toast.success("Đã xóa yêu cầu!");
                    setSelectedBooking(null);
                    loadBookings();
                  } catch {
                    toast.error("Không thể xóa. Vui lòng thử lại.");
                  }
                }}
                className="flex items-center gap-2 rounded-xl border border-red-200 dark:border-red-800/40 px-4 py-2.5 text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <Trash2 className="h-4 w-4" /> Xóa
              </button>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="rounded-xl border border-gray-200 dark:border-slate-700 px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Đóng
                </button>
                <button
                  onClick={handleSaveEdit}
                  disabled={saving}
                  className="flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold-dark transition-colors disabled:opacity-50"
                >
                  <Save className="h-4 w-4" /> {saving ? "Đang lưu..." : "Lưu thay đổi"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

