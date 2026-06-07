"use client";

import { useEffect, useState } from "react";
import { Villa } from "@/lib/types";
import { amenities } from "@/data/amenities";
import { areas } from "@/data/areas";
import { slugify, formatPrice } from "@/lib/utils";
import {
  Plus, Save, Trash2, ChevronDown, ChevronUp, X, GripVertical,
  Bed, Bath, Users, Maximize2, Star, MapPin, Upload, ImageIcon,
} from "lucide-react";

const emptyVilla: Villa = {
  id: "",
  slug: "",
  name: "",
  tagline: "",
  description: "",
  area: "",
  areaSlug: "",
  address: "",
  images: [],
  bedrooms: 3,
  bathrooms: 2,
  maxGuests: 8,
  size: 200,
  pricePerNight: 5000000,
  priceWeekend: 7000000,
  priceHoliday: 10000000,
  amenities: [],
  highlights: [],
  rating: 5.0,
  reviewCount: 0,
  reviews: [],
  rules: { checkIn: "14:00", checkOut: "12:00", policies: [] },
  coordinates: { lat: 10.35, lng: 107.08 },
  featured: true,
};

const ADMIN_USER = "admin";
const ADMIN_PASS = "123";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginError, setLoginError] = useState("");

  const [villasList, setVillasList] = useState<Villa[]>([]);
  const [editing, setEditing] = useState<Villa | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [newHighlight, setNewHighlight] = useState("");
  const [newPolicy, setNewPolicy] = useState("");
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [detailImages, setDetailImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("admin_authed") === "1") {
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (authed) fetchVillas();
  }, [authed]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (loginUser === ADMIN_USER && loginPass === ADMIN_PASS) {
      setAuthed(true);
      sessionStorage.setItem("admin_authed", "1");
      setLoginError("");
    } else {
      setLoginError("Sai tên đăng nhập hoặc mật khẩu.");
    }
  }

  function handleLogout() {
    setAuthed(false);
    sessionStorage.removeItem("admin_authed");
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm">
          <div className="text-center">
            <span className="font-heading text-2xl font-bold text-navy">
              Villa<span className="text-gold">VungTau</span>
            </span>
            <p className="mt-2 text-sm text-gray-500">Đăng nhập quản trị</p>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Tên đăng nhập
              </label>
              <input
                type="text"
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                placeholder="admin"
                autoFocus
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                placeholder="••••"
              />
            </div>
            {loginError && (
              <p className="text-sm font-medium text-red-500">{loginError}</p>
            )}
            <button
              type="submit"
              className="w-full rounded-xl bg-navy py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    );
  }

  async function fetchVillas() {
    const res = await fetch("/api/villas");
    const data = await res.json();
    setVillasList(data);
  }

  async function fetchImages(slug: string) {
    if (!slug) {
      setMainImage(null);
      setDetailImages([]);
      return;
    }
    try {
      const res = await fetch(`/api/villa-images?slug=${slug}`);
      const data = await res.json();
      setMainImage(data.main);
      setDetailImages(data.details || []);
    } catch {
      setMainImage(null);
      setDetailImages([]);
    }
  }

  async function uploadImage(file: File, type: "main" | "detail") {
    if (!editing) return;

    // Auto-generate slug from name if not set yet
    let slug = editing.slug;
    if (!slug && editing.name) {
      slug = slugify(editing.name);
      setEditing({ ...editing, slug });
    }

    if (!slug) {
      setMessage("Vui lòng điền tên villa trước khi upload ảnh.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("slug", slug);
    formData.append("type", type);
    formData.append("file", file);
    try {
      await fetch("/api/villa-images", { method: "POST", body: formData });
      await fetchImages(slug);
    } catch {
      setMessage("Lỗi upload ảnh.");
    }
    setUploading(false);
  }

  async function deleteImage(imageUrl: string) {
    if (!editing?.slug) return;
    await fetch("/api/villa-images", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: editing.slug, imageUrl }),
    });
    await fetchImages(editing.slug);
  }

  function startNew() {
    setEditing({ ...emptyVilla, id: crypto.randomUUID().slice(0, 8) });
    setMainImage(null);
    setDetailImages([]);
    setMessage("");
  }

  function startEdit(villa: Villa) {
    setEditing({ ...villa });
    fetchImages(villa.slug);
    setMessage("");
  }

  function updateField<K extends keyof Villa>(key: K, value: Villa[K]) {
    if (!editing) return;
    const updated = { ...editing, [key]: value };
    if (key === "name") {
      updated.slug = slugify(value as string);
    }
    setEditing(updated);
  }

  function selectArea(areaSlug: string) {
    const area = areas.find((a) => a.slug === areaSlug);
    if (!editing || !area) return;
    setEditing({ ...editing, area: area.name, areaSlug: area.slug });
  }

  function toggleAmenity(id: string) {
    if (!editing) return;
    const current = editing.amenities;
    const updated = current.includes(id)
      ? current.filter((a) => a !== id)
      : [...current, id];
    setEditing({ ...editing, amenities: updated });
  }

  function addHighlight() {
    if (!editing || !newHighlight.trim()) return;
    setEditing({ ...editing, highlights: [...editing.highlights, newHighlight.trim()] });
    setNewHighlight("");
  }

  function removeHighlight(index: number) {
    if (!editing) return;
    setEditing({ ...editing, highlights: editing.highlights.filter((_, i) => i !== index) });
  }

  function addPolicy() {
    if (!editing || !newPolicy.trim()) return;
    setEditing({
      ...editing,
      rules: { ...editing.rules, policies: [...editing.rules.policies, newPolicy.trim()] },
    });
    setNewPolicy("");
  }

  function removePolicy(index: number) {
    if (!editing) return;
    setEditing({
      ...editing,
      rules: { ...editing.rules, policies: editing.rules.policies.filter((_, i) => i !== index) },
    });
  }

  async function handleSave() {
    if (!editing) return;
    if (!editing.name || !editing.address) {
      setMessage("Vui lòng điền tên villa và địa chỉ.");
      return;
    }
    if (!editing.slug) {
      editing.slug = slugify(editing.name);
    }
    setSaving(true);
    try {
      await fetch("/api/villas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editing),
      });
      await fetchVillas();
      setMessage("Đã lưu thành công!");
      setEditing(null);
    } catch {
      setMessage("Lỗi khi lưu. Vui lòng thử lại.");
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Bạn có chắc muốn xóa villa này?")) return;
    await fetch("/api/villas", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await fetchVillas();
    if (editing?.id === id) setEditing(null);
    setMessage("Đã xóa villa.");
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
        <div>
            <h1 className="font-heading text-3xl font-bold text-navy">Quản Lý Villa</h1>
            <p className="mt-1 text-sm text-gray-500">Thêm, sửa, xóa thông tin villa trên site</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={startNew}
              className="flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
          >
              <Plus className="h-4 w-4" />
              Thêm Villa Mới
            </button>
            <button
              onClick={handleLogout}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50"
            >
              Đăng xuất
            </button>
          </div>
        </div>

        {message && (
          <div className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            {message}
          </div>
        )}

        {/* Villa list */}
        {!editing && (
          <div className="mt-8 space-y-4">
            {villasList.length === 0 && (
              <div className="rounded-2xl bg-white py-16 text-center text-gray-400">
                Chưa có villa nào. Bấm &ldquo;Thêm Villa Mới&rdquo; để bắt đầu.
              </div>
            )}
            {villasList.map((villa) => (
              <div
                key={villa.id}
                className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand">
                    <Bed className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-navy">{villa.name}</h3>
                    <div className="mt-0.5 flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {villa.area}
                      </span>
                      <span>{villa.bedrooms} PN &middot; {villa.maxGuests} khách</span>
                      <span>{formatPrice(villa.pricePerNight)}/đêm</span>
                      {villa.featured && (
                        <span className="rounded bg-gold/10 px-2 py-0.5 text-gold-dark">Nổi bật</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => startEdit(villa)}
                    className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(villa.id)}
                    className="rounded-lg border border-red-200 px-3 py-2 text-red-500 transition-colors hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Editor form */}
        {editing && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-semibold text-navy">
                {villasList.find((v) => v.id === editing.id) ? "Sửa Villa" : "Thêm Villa Mới"}
              </h2>
              <button
                onClick={() => setEditing(null)}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
                Hủy
              </button>
            </div>

            {/* Basic info */}
            <Section title="Thông tin cơ bản">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Tên villa *">
                  <input
                    type="text"
                    value={editing.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="input"
                    placeholder="VD: Villa Felix"
                  />
                </Field>
                <Field label="Slug (URL)">
                  <input
                    type="text"
                    value={editing.slug}
                    onChange={(e) => updateField("slug", e.target.value)}
                    className="input"
                    placeholder="Tự tạo từ tên"
                  />
                </Field>
                <Field label="Tagline / Slogan">
                  <input
                    type="text"
                    value={editing.tagline}
                    onChange={(e) => updateField("tagline", e.target.value)}
                    className="input"
                    placeholder="Một câu mô tả ngắn gọn"
                  />
                </Field>
                <Field label="Khu vực">
                  <select
                    value={editing.areaSlug}
                    onChange={(e) => selectArea(e.target.value)}
                    className="input"
                  >
                    <option value="">Chọn khu vực</option>
                    {areas.map((a) => (
                      <option key={a.slug} value={a.slug}>{a.name}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Địa chỉ *" full>
                  <input
                    type="text"
                    value={editing.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    className="input"
                    placeholder="86/1 Trần Phú, P.5, TP. Vũng Tàu"
                  />
                </Field>
                <Field label="Mô tả chi tiết" full>
                  <textarea
                    value={editing.description}
                    onChange={(e) => updateField("description", e.target.value)}
                    rows={4}
                    className="input"
                    placeholder="Mô tả đầy đủ về villa..."
                  />
                </Field>
              </div>
            </Section>

            {/* Images */}
            <Section title="Hình ảnh">
              <p className="mb-4 text-xs text-gray-400">
                Ảnh được lưu tại <code className="rounded bg-gray-100 px-1">src/image/villa_data/{editing.slug || "..."}/</code>.
                {!editing.slug && !editing.name && " Hãy điền tên villa trước để upload ảnh."}
              </p>

              {/* Main image */}
              <div className="mb-6">
                <p className="mb-2 text-sm font-medium text-gray-700">Ảnh chính (main)</p>
                <div className="flex items-start gap-4">
                  {mainImage ? (
                    <div className="group relative">
                      <img
                        src={mainImage}
                        alt="Main"
                        className="h-40 w-60 rounded-xl border border-gray-200 object-cover"
                      />
                      <button
                        onClick={() => deleteImage(mainImage)}
                        className="absolute -right-2 -top-2 hidden rounded-full bg-red-500 p-1 text-white shadow group-hover:block"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex h-40 w-60 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 text-gray-300">
                      <ImageIcon className="h-10 w-10" />
                    </div>
                  )}
                  <label className={`flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50 ${!editing.slug && !editing.name ? "pointer-events-none opacity-40" : "text-gray-700"}`}>
                    <Upload className="h-4 w-4" />
                    {mainImage ? "Đổi ảnh chính" : "Upload ảnh chính"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) uploadImage(f, "main");
                        e.target.value = "";
                      }}
                      disabled={!editing.slug && !editing.name}
                    />
                  </label>
                </div>
              </div>

              {/* Detail images */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">
                    Ảnh chi tiết ({detailImages.length} ảnh)
                  </p>
                  <label className={`flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 ${!editing.slug && !editing.name ? "pointer-events-none opacity-40" : "text-gray-700"}`}>
                    <Upload className="h-4 w-4" />
                    Thêm ảnh
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                          Array.from(files).forEach((f) => uploadImage(f, "detail"));
                        }
                        e.target.value = "";
                      }}
                      disabled={!editing.slug && !editing.name}
                    />
                  </label>
                </div>

                {uploading && (
                  <p className="mb-2 text-xs text-gold">Đang upload...</p>
                )}

                {detailImages.length > 0 ? (
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
                    {detailImages.map((url) => (
                      <div key={url} className="group relative">
                        <img
                          src={url}
                          alt="Detail"
                          className="aspect-square w-full rounded-lg border border-gray-200 object-cover"
                        />
                        <button
                          onClick={() => deleteImage(url)}
                          className="absolute -right-1.5 -top-1.5 hidden rounded-full bg-red-500 p-1 text-white shadow group-hover:block"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border-2 border-dashed border-gray-200 py-8 text-center text-sm text-gray-400">
                    Chưa có ảnh chi tiết. Upload ảnh để hiển thị gallery trên trang villa.
                  </div>
                )}
              </div>
            </Section>

            {/* Capacity */}
            <Section title="Quy mô & Không gian">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <Field label="Phòng ngủ">
                  <input
                    type="number"
                    value={editing.bedrooms}
                    onChange={(e) => updateField("bedrooms", Number(e.target.value))}
                    className="input"
                    min={1}
                  />
                </Field>
                <Field label="Phòng tắm">
                  <input
                    type="number"
                    value={editing.bathrooms}
                    onChange={(e) => updateField("bathrooms", Number(e.target.value))}
                    className="input"
                    min={1}
                  />
                </Field>
                <Field label="Khách tối đa">
                  <input
                    type="number"
                    value={editing.maxGuests}
                    onChange={(e) => updateField("maxGuests", Number(e.target.value))}
                    className="input"
                    min={1}
                  />
                </Field>
                <Field label="Diện tích (m²)">
                  <input
                    type="number"
                    value={editing.size}
                    onChange={(e) => updateField("size", Number(e.target.value))}
                    className="input"
                    min={1}
                  />
                </Field>
              </div>
            </Section>

            {/* Pricing */}
            <Section title="Bảng giá (VNĐ / đêm)">
              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Ngày thường">
                  <input
                    type="number"
                    value={editing.pricePerNight}
                    onChange={(e) => updateField("pricePerNight", Number(e.target.value))}
                    className="input"
                    step={500000}
                  />
                </Field>
                <Field label="Cuối tuần (T6-CN)">
                  <input
                    type="number"
                    value={editing.priceWeekend}
                    onChange={(e) => updateField("priceWeekend", Number(e.target.value))}
                    className="input"
                    step={500000}
                  />
                </Field>
                <Field label="Lễ / Tết">
                  <input
                    type="number"
                    value={editing.priceHoliday}
                    onChange={(e) => updateField("priceHoliday", Number(e.target.value))}
                    className="input"
                    step={500000}
                  />
                </Field>
              </div>
            </Section>

            {/* Amenities */}
            <Section title="Tiện nghi">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {amenities.map((a) => (
                  <label
                    key={a.id}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                      editing.amenities.includes(a.id)
                        ? "border-gold bg-gold/10 text-navy font-medium"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={editing.amenities.includes(a.id)}
                      onChange={() => toggleAmenity(a.id)}
                      className="accent-gold"
                    />
                    {a.name}
                  </label>
                ))}
              </div>
            </Section>

            {/* Highlights */}
            <Section title="Điểm nổi bật">
              <div className="space-y-2">
                {editing.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Star className="h-4 w-4 shrink-0 text-gold" />
                    <span className="flex-1 text-sm text-gray-700">{h}</span>
                    <button
                      onClick={() => removeHighlight(i)}
                      className="text-gray-300 hover:text-red-400"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newHighlight}
                    onChange={(e) => setNewHighlight(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addHighlight())}
                    className="input flex-1"
                    placeholder="VD: Hồ bơi thác nước + Jacuzzi"
                  />
                  <button
                    onClick={addHighlight}
                    className="rounded-lg bg-sand px-4 py-2 text-sm font-medium text-navy hover:bg-sand-dark"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Section>

            {/* Rules */}
            <Section title="Quy tắc nhà">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Giờ Check-in">
                  <input
                    type="time"
                    value={editing.rules.checkIn}
                    onChange={(e) =>
                      setEditing({ ...editing, rules: { ...editing.rules, checkIn: e.target.value } })
                    }
                    className="input"
                  />
                </Field>
                <Field label="Giờ Check-out">
                  <input
                    type="time"
                    value={editing.rules.checkOut}
                    onChange={(e) =>
                      setEditing({ ...editing, rules: { ...editing.rules, checkOut: e.target.value } })
                    }
                    className="input"
                  />
                </Field>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-gray-700">Quy định</p>
                {editing.rules.policies.map((p, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="flex-1 text-sm text-gray-600">&bull; {p}</span>
                    <button
                      onClick={() => removePolicy(i)}
                      className="text-gray-300 hover:text-red-400"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newPolicy}
                    onChange={(e) => setNewPolicy(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addPolicy())}
                    className="input flex-1"
                    placeholder="VD: Không hút thuốc trong nhà"
                  />
                  <button
                    onClick={addPolicy}
                    className="rounded-lg bg-sand px-4 py-2 text-sm font-medium text-navy hover:bg-sand-dark"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Section>

            {/* Settings */}
            <Section title="Cài đặt">
              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Đánh giá (0-5)">
                  <input
                    type="number"
                    value={editing.rating}
                    onChange={(e) => updateField("rating", Number(e.target.value))}
                    className="input"
                    min={0}
                    max={5}
                    step={0.1}
                  />
                </Field>
                <Field label="Số đánh giá">
                  <input
                    type="number"
                    value={editing.reviewCount}
                    onChange={(e) => updateField("reviewCount", Number(e.target.value))}
                    className="input"
                    min={0}
                  />
                </Field>
                <Field label="Nổi bật">
                  <label className="flex cursor-pointer items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      checked={editing.featured}
                      onChange={(e) => updateField("featured", e.target.checked)}
                      className="accent-gold"
                    />
                    <span className="text-sm text-gray-700">Hiển thị trên trang chủ</span>
                  </label>
                </Field>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Tọa độ (Latitude)">
                  <input
                    type="number"
                    value={editing.coordinates.lat}
                    onChange={(e) =>
                      setEditing({
                        ...editing,
                        coordinates: { ...editing.coordinates, lat: Number(e.target.value) },
                      })
                    }
                    className="input"
                    step={0.0001}
                  />
                </Field>
                <Field label="Tọa độ (Longitude)">
                  <input
                    type="number"
                    value={editing.coordinates.lng}
                    onChange={(e) =>
                      setEditing({
                        ...editing,
                        coordinates: { ...editing.coordinates, lng: Number(e.target.value) },
                      })
                    }
                    className="input"
                    step={0.0001}
                  />
                </Field>
              </div>
            </Section>

            {/* Save / Cancel */}
            <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 rounded-xl bg-gold px-8 py-3 font-semibold text-navy transition-colors hover:bg-gold-light disabled:opacity-60"
              >
                <Save className="h-4 w-4" />
                {saving ? "Đang lưu..." : "Lưu Villa"}
              </button>
              <button
                onClick={() => setEditing(null)}
                className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
              >
                Hủy
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          padding: 0.625rem 1rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.15s;
        }
        .input:focus {
          border-color: #C5A572;
          box-shadow: 0 0 0 1px #C5A572;
        }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="mb-4 font-heading text-lg font-semibold text-navy">{title}</h3>
      {children}
    </div>
  );
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );
}
