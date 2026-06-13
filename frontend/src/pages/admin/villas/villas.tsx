import { useState } from "react";
import { Villa } from "@/lib/types";
import { areas } from "@/data/areas";
import { slugify } from "@/lib/utils";
import { useVillaStore } from "@/store/useVillaStore";
import { saveVilla, deleteVilla, getVillaImages, deleteVillaImage, uploadVillaImage, getFullImageUrl } from "@/lib/api";
import {
  Plus, Save, Trash2, X,
  Bed, MapPin, ImageIcon
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

export default function VillasPage() {
  const villasList = useVillaStore((state) => state.villas);
  const loadVillas = useVillaStore((state) => state.loadVillas);
  const [editing, setEditing] = useState<Villa | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [mainImage, setMainImage] = useState<string | null>(null);
  const [, setDetailImages] = useState<string[]>([]);
  const [, setUploading] = useState(false);

  async function fetchImages(slug: string) {
    if (!slug) {
      setMainImage(null);
      setDetailImages([]);
      return;
    }
    const res = await getVillaImages(slug);
    setMainImage(res.main);
    setDetailImages(res.details);
  }

  async function uploadImage(file: File, type: "main" | "detail") {
    if (!editing) return;
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
    try {
      await uploadVillaImage(slug, type, file);
      await fetchImages(slug);
    } catch {
      setMessage("Lỗi upload ảnh.");
    }
    setUploading(false);
  }

  async function handleDeleteImage(imageUrl: string) {
    if (!editing?.slug) return;
    await deleteVillaImage(editing.slug, imageUrl);
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
      await saveVilla(editing);
      await loadVillas();
      setMessage("Đã lưu thành công!");
      setEditing(null);
    } catch {
      setMessage("Lỗi khi lưu. Vui lòng thử lại.");
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Bạn có chắc muốn xóa villa này?")) return;
    await deleteVilla(id);
    await loadVillas();
    if (editing?.id === id) setEditing(null);
    setMessage("Đã xóa villa.");
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h1 className="font-heading text-2xl font-bold text-navy">Quản Lý Villa</h1>
        {!editing && (
          <button onClick={startNew} className="flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold-light">
            <Plus className="h-4 w-4" /> Thêm Villa Mới
          </button>
        )}
      </div>

      {message && <div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">{message}</div>}

      {!editing ? (
        <div className="space-y-4">
          {villasList.map((villa) => (
            <div key={villa.id} className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand">
                  <Bed className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy">{villa.name}</h3>
                  <div className="mt-0.5 flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{villa.area}</span>
                    <span>{villa.bedrooms} PN &middot; {villa.maxGuests} khách</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => startEdit(villa)} className="rounded-lg border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sửa</button>
                <button onClick={() => handleDelete(villa.id)} className="rounded-lg border border-red-200 px-3 py-2 text-red-500 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
          {villasList.length === 0 && (
            <div className="py-12 text-center text-gray-500 bg-white rounded-2xl shadow-sm">Chưa có villa nào.</div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-semibold text-navy">{editing.id ? "Sửa Villa" : "Thêm Mới"}</h2>
            <button onClick={() => setEditing(null)} className="flex items-center gap-1 text-sm text-gray-400 hover:text-navy"><X className="h-4 w-4" />Hủy</button>
          </div>
          
          <Section title="Thông tin cơ bản">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Tên villa *"><input type="text" value={editing.name} onChange={e => updateField("name", e.target.value)} className="input" /></Field>
              <Field label="Slug (URL)"><input type="text" value={editing.slug} onChange={e => updateField("slug", e.target.value)} className="input" /></Field>
              <Field label="Khu vực">
                <select value={editing.areaSlug} onChange={e => selectArea(e.target.value)} className="input">
                  <option value="">Chọn khu vực</option>
                  {areas.map((a) => <option key={a.slug} value={a.slug}>{a.name}</option>)}
                </select>
              </Field>
              <Field label="Địa chỉ *"><input type="text" value={editing.address} onChange={e => updateField("address", e.target.value)} className="input" /></Field>
            </div>
          </Section>

          <Section title="Hình ảnh">
            <div className="mb-6">
              <p className="mb-2 text-sm font-medium text-gray-700">Ảnh chính (main)</p>
              <div className="flex items-start gap-4">
                {mainImage ? (
                  <div className="group relative">
                    <img src={getFullImageUrl(mainImage) || ""} className="h-40 w-60 rounded-xl object-cover" alt="Main" />
                    <button onClick={() => handleDeleteImage(mainImage)} className="absolute -right-2 -top-2 hidden rounded-full bg-red-500 p-1 text-white group-hover:block"><X className="h-3 w-3" /></button>
                  </div>
                ) : <div className="flex h-40 w-60 items-center justify-center border-2 border-dashed text-gray-300 rounded-xl"><ImageIcon className="h-10 w-10" /></div>}
                <label className="cursor-pointer rounded-lg border px-4 py-2 hover:bg-gray-50"><input type="file" className="hidden" onChange={e => e.target.files && uploadImage(e.target.files[0], "main")} />Upload ảnh chính</label>
              </div>
            </div>
          </Section>

          <div className="flex items-center gap-4 pt-4">
            <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 rounded-xl bg-gold px-8 py-3 font-semibold text-navy hover:bg-gold-light transition-colors"><Save className="h-4 w-4" />{saving ? "Đang lưu..." : "Lưu Villa"}</button>
          </div>
        </div>
      )}

      <style>{`
        .input { width: 100%; border-radius: 0.75rem; border: 1px solid #e5e7eb; padding: 0.625rem 1rem; font-size: 0.875rem; }
        .input:focus { border-color: #C5A572; box-shadow: 0 0 0 1px #C5A572; outline: none; }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="mb-4 font-heading text-lg font-semibold text-navy">{title}</h3>{children}</div>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>{children}</div>;
}
