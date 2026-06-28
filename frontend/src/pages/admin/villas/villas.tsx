import { useState, useRef, useEffect } from "react";
import { Villa, VillaImageInfo } from "@/lib/types";
import { slugify } from "@/lib/utils";
import { useVillaStore } from "@/store/useVillaStore";
import { fetchAllAreas, fetchAllAmenities, saveVilla, deleteVilla, uploadVillaImage, deleteVillaImage, getFullImageUrl } from "@/lib/api";
import {
  Plus, Save, Trash2, X,
  Bed, MapPin, ImageIcon, Upload
} from "lucide-react";
import { toast } from "sonner";

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
  const [selectedFilterArea, setSelectedFilterArea] = useState<string>("all");

  const filteredVillas = selectedFilterArea === "all" ? villasList : villasList.filter(v => v.areaSlug === selectedFilterArea || v.area === selectedFilterArea);

  const [dragOver, setDragOver] = useState(false);
  const [uploadingDetails, setUploadingDetails] = useState(false);
  const detailInputRef = useRef<HTMLInputElement>(null);

  const [areas, setAreas] = useState<any[]>([]);
  const [allAmenities, setAllAmenities] = useState<any[]>([]);

  useEffect(() => {
    fetchAllAreas().then(setAreas).catch(console.error);
    fetchAllAmenities().then(setAllAmenities).catch(console.error);
  }, []);

  // ─── Image helpers ─────────────────────────────────
  /** Visible images (not tagged for deletion) */
  const visibleImages = (editing?.images || []).filter((img) => img.tag !== 'delete');
  const mainImage = visibleImages.find((img) => img.isMain) || null;
  const detailImages = visibleImages.filter((img) => !img.isMain);

  /** Upload a file, add it to editing.images with tag='new' */
  async function handleUpload(file: File, isMain: boolean) {
    if (!editing) return;
    try {
      const imageInfo = await uploadVillaImage(file, isMain);
      setEditing({
        ...editing,
        images: [...editing.images, imageInfo],
      });
      toast.success("Tải ảnh lên thành công!");
    } catch {
      toast.error("Lỗi upload ảnh.");
      setMessage("Lỗi upload ảnh.");
    }
  }

  /** Upload multiple detail files */
  async function handleUploadMultiple(files: File[]) {
    if (!editing) return;
    setUploadingDetails(true);
    const newImages: VillaImageInfo[] = [];
    for (const file of files) {
      try {
        const imageInfo = await uploadVillaImage(file, false);
        newImages.push(imageInfo);
      } catch {
        toast.error("Lỗi upload một số ảnh.");
        setMessage("Lỗi upload một số ảnh.");
      }
    }
    if (newImages.length > 0) {
      toast.success(`Đã tải lên ${newImages.length} ảnh!`);
    }
    setEditing((prev) => prev ? {
      ...prev,
      images: [...prev.images, ...newImages],
    } : prev);
    setUploadingDetails(false);
  }

  /** Mark an image for deletion (tag='delete') */
  function handleRemoveImage(imageId: string) {
    if (!editing) return;
    setEditing({
      ...editing,
      images: editing.images.map((img) =>
        img.id === imageId ? { ...img, tag: 'delete' as const } : img
      ),
    });
  }

  // ─── Villa CRUD ────────────────────────────────────
  function startNew() {
    setEditing({ ...emptyVilla, id: "" }); // new villa should have empty id to trigger POST
    setMessage("");
  }

  const fetchVillaDetails = useVillaStore((state) => state.fetchVillaDetails);
  const [loadingEdit, setLoadingEdit] = useState<string | null>(null);

  async function startEdit(villaBasic: any) {
    setMessage("");
    setLoadingEdit(villaBasic.id);
    try {
      const data = await fetchVillaDetails(villaBasic.slug, true);
      setLoadingEdit(null);
      if (data) {
        setEditing(data);
      }
    } catch {
      toast.error("Không thể tải chi tiết villa.");
      setMessage("Không thể tải chi tiết villa.");
      setLoadingEdit(null);
    }
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
      toast.error("Vui lòng điền tên villa và địa chỉ.");
      setMessage("Vui lòng điền tên villa và địa chỉ.");
      return;
    }
    if (!editing.slug) {
      editing.slug = slugify(editing.name);
    }
    setSaving(true);

    const cleanedVilla = {
      ...editing,
      highlights: editing.highlights?.map((s: string) => s.trim()).filter(Boolean) || [],
      rules: {
        ...editing.rules,
        policies: editing.rules?.policies?.map(s => s.trim()).filter(Boolean) || []
      }
    };

    try {
      await saveVilla(cleanedVilla);
      await loadVillas();
      toast.success("Lưu thông tin Villa thành công!");
      setMessage("Đã lưu thành công!");
      setEditing(null);
    } catch {
      toast.error("Lỗi khi lưu Villa. Vui lòng thử lại.");
      setMessage("Lỗi khi lưu. Vui lòng thử lại.");
    }
    setSaving(false);
  }

  async function handleCancel() {
    if (!editing) return;
    // Clean up orphaned uploads (new images that weren't saved to a villa)
    const orphanedImages = editing.images.filter((img) => img.tag === 'new');
    for (const img of orphanedImages) {
      try { await deleteVillaImage(img.id); } catch { /* ignore */ }
    }
    setEditing(null);
  }

  async function handleDelete(id: string) {
    if (!confirm("Bạn có chắc muốn xóa villa này?")) return;
    try {
      await deleteVilla(id);
      await loadVillas();
      if (editing?.id === id) setEditing(null);
      toast.success("Đã xóa Villa thành công!");
      setMessage("Đã xóa villa.");
    } catch {
      toast.error("Lỗi khi xóa Villa. Vui lòng thử lại.");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-4 transition-colors">
        <h1 className="font-heading text-2xl font-bold text-primary dark:text-white">Quản Lý Villa</h1>
        {!editing && (
          <button onClick={startNew} className="flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-primary hover:bg-gold-light">
            <Plus className="h-4 w-4" /> Thêm Villa Mới
          </button>
        )}
      </div>

      {message && <div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">{message}</div>}

      {!editing ? (
        <div className="space-y-6">
          {/* Area Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedFilterArea("all")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                selectedFilterArea === "all"
                  ? "bg-gold text-primary shadow-sm"
                  : "bg-white dark:bg-slate-950 text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800"
              }`}
            >
              Tất cả ({villasList.length})
            </button>
            {areas.map((a) => {
              const count = villasList.filter((v) => v.areaSlug === a.slug || v.area === a.name).length;
              return (
                <button
                  key={a.slug || a.id}
                  onClick={() => setSelectedFilterArea(a.slug)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                    selectedFilterArea === a.slug
                      ? "bg-gold text-primary shadow-sm"
                      : "bg-white dark:bg-slate-950 text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800"
                  }`}
                >
                  {a.name} ({count})
                </button>
              );
            })}
          </div>

          <div className="space-y-4">
            {filteredVillas.map((villa) => (
              <div key={villa.id} className="flex items-center justify-between rounded-2xl bg-white dark:bg-slate-950 p-5 shadow-sm border border-transparent dark:border-slate-800 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand dark:bg-gold/10">
                    <Bed className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary dark:text-white">{villa.name}</h3>
                    <div className="mt-0.5 flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{villa.area}</span>
                      <span>{villa.bedrooms} PN &middot; {villa.maxGuests} khách</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => startEdit(villa)} disabled={loadingEdit === villa.id} className="rounded-lg border dark:border-slate-700 px-4 py-2 text-sm text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50">
                    {loadingEdit === villa.id ? "Đang tải..." : "Sửa"}
                  </button>
                  <button onClick={() => handleDelete(villa.id)} className="rounded-lg border border-red-200 dark:border-red-900 px-3 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            ))}
            {filteredVillas.length === 0 && (
              <div className="py-12 text-center text-gray-500 dark:text-slate-400 bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-transparent dark:border-slate-800">
                {selectedFilterArea === "all" ? "Chưa có villa nào." : "Không có villa nào trong khu vực này."}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-semibold text-primary dark:text-white">{editing.id ? "Sửa Villa" : "Thêm Mới"}</h2>
            <button onClick={handleCancel} className="flex items-center gap-1 text-sm text-gray-400 hover:text-primary dark:hover:text-white"><X className="h-4 w-4" />Hủy</button>
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

              <div className="sm:col-span-2">
                <Field label="Mô tả"><textarea value={editing.description} onChange={e => updateField("description", e.target.value)} className="input" rows={3} /></Field>
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-center gap-3 cursor-pointer p-4 border dark:border-slate-800 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors">
                  <div className="relative flex items-center">
                    <input type="checkbox" checked={editing.featured} onChange={e => updateField("featured", e.target.checked)} className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 dark:border-slate-700 checked:border-gold checked:bg-gold transition-all" />
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 text-primary opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary dark:text-white">Villa Nổi Bật</div>
                    <div className="text-xs text-gray-500">Hiển thị ở trang chủ và chân trang (footer).</div>
                  </div>
                </label>
              </div>
            </div>
          </Section>

          <Section title="Chi tiết & Giá cả">
            <div className="grid gap-4 sm:grid-cols-4">
              <Field label="Số phòng ngủ"><input type="number" value={editing.bedrooms} onChange={e => updateField("bedrooms", Number(e.target.value))} className="input" /></Field>
              <Field label="Số phòng tắm"><input type="number" value={editing.bathrooms} onChange={e => updateField("bathrooms", Number(e.target.value))} className="input" /></Field>
              <Field label="Số khách tối đa"><input type="number" value={editing.maxGuests} onChange={e => updateField("maxGuests", Number(e.target.value))} className="input" /></Field>
              <Field label="Diện tích (m2)"><input type="number" value={editing.size} onChange={e => updateField("size", Number(e.target.value))} className="input" /></Field>

              <Field label="Giá ngày thường"><input type="number" value={editing.pricePerNight} onChange={e => updateField("pricePerNight", Number(e.target.value))} className="input" /></Field>
              <Field label="Giá cuối tuần"><input type="number" value={editing.priceWeekend} onChange={e => updateField("priceWeekend", Number(e.target.value))} className="input" /></Field>
              <Field label="Giá ngày lễ"><input type="number" value={editing.priceHoliday} onChange={e => updateField("priceHoliday", Number(e.target.value))} className="input" /></Field>
            </div>
          </Section>

          <Section title="Đặc điểm & Tiện nghi">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Tiện nghi">
                <div className="flex flex-wrap items-center gap-2 rounded-xl border border-gray-200 bg-white p-2 min-h-[52px]">
                  {editing.amenities?.map((a: any) => {
                    const rawId = typeof a === 'object' && a !== null ? a.id : a;
                    const amenityObj = typeof a === 'object' && a !== null && a.name ? a : allAmenities.find(am => String(am.id) === String(rawId));
                    const name = amenityObj?.name || a?.name || `Tiện nghi #${rawId}`;
                    const id = amenityObj?.id || rawId;
                    return (
                      <span key={id} className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                        {name}
                        <button
                          type="button"
                          onClick={() => {
                            const newAmenities = editing.amenities?.filter((item: any) => {
                              const itemId = typeof item === 'object' && item !== null ? item.id : item;
                              return String(itemId) !== String(id);
                            });
                            updateField("amenities", newAmenities);
                          }}
                          className="text-primary/60 hover:text-primary"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </span>
                    );
                  })}
                  <select
                    className="flex-1 bg-transparent text-sm font-medium text-gray-500 outline-none min-w-[180px] cursor-pointer"
                    value=""
                    onChange={(e) => {
                      const selectedId = e.target.value;
                      if (!selectedId) return;
                      const amenityObj = allAmenities.find(a => String(a.id) === String(selectedId));
                      if (!amenityObj) return;
                      const current = editing.amenities || [];
                      if (!current.some((sel: any) => String(typeof sel === 'object' && sel !== null ? sel.id : sel) === String(selectedId))) {
                        updateField("amenities", [...current, amenityObj]);
                      }
                    }}
                  >
                    <option value="">+ Chọn thêm tiện nghi...</option>
                    {allAmenities
                      .filter(a => !(editing.amenities || []).some((sel: any) => String(typeof sel === 'object' && sel !== null ? sel.id : sel) === String(a.id)))
                      .map((a) => (
                        <option key={a.id} value={a.id}>{a.name}</option>
                      ))}
                  </select>
                </div>
              </Field>
              <Field label="Điểm nổi bật (mỗi dòng 1 điểm)">
                <textarea
                  value={editing.highlights?.join("\n") || ""}
                  onChange={e => updateField("highlights", e.target.value.split("\n"))}
                  className="input" rows={4}
                  placeholder="View biển tuyệt đẹp&#10;Thiết kế hiện đại..."
                />
              </Field>
            </div>
          </Section>

          <Section title="Quy tắc nhà">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field label="Chính sách khác (mỗi dòng 1 chính sách)">
                  <textarea
                    value={editing.rules?.policies?.join("\n") || ""}
                    onChange={e => updateField("rules", { ...editing.rules, policies: e.target.value.split("\n") })}
                    className="input" rows={4}
                    placeholder="Không hút thuốc trong phòng&#10;Không mang theo thú cưng..."
                  />
                </Field>
              </div>
            </div>
          </Section>

          <Section title="Hình ảnh">
            {/* Main Image */}
            <div className="mb-6">
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-slate-300">Ảnh chính (main)</p>
              <div className="flex items-start gap-4">
                {mainImage ? (
                  <div className="group relative">
                    <img src={getFullImageUrl(mainImage.url) || ""} className="h-40 w-60 rounded-xl object-cover border dark:border-slate-800" alt="Main" />
                    <button onClick={() => handleRemoveImage(mainImage.id)} className="absolute -right-2 -top-2 hidden rounded-full bg-red-500 p-1 text-white group-hover:block"><X className="h-3 w-3" /></button>
                  </div>
                ) : <div className="flex h-40 w-60 items-center justify-center border-2 border-dashed border-gray-300 dark:border-slate-700 text-gray-400 dark:text-slate-500 rounded-xl"><ImageIcon className="h-10 w-10" /></div>}
                <label className="cursor-pointer rounded-lg border dark:border-slate-700 text-gray-700 dark:text-slate-300 px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                  <input type="file" className="hidden" accept="image/*" onChange={e => e.target.files && handleUpload(e.target.files[0], true)} />
                  Upload ảnh chính
                </label>
              </div>
            </div>

            {/* Detail Images — Drag & Drop */}
            <div>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-slate-300">Ảnh chi tiết (detail)</p>

              {/* Drop Zone */}
              <div
                className={`relative rounded-xl border-2 border-dashed p-6 text-center transition-colors cursor-pointer ${dragOver ? 'border-gold bg-gold/5 dark:bg-gold/10' : 'border-gray-300 dark:border-slate-700 hover:border-gold/50'}`}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={async (e) => {
                  e.preventDefault();
                  setDragOver(false);
                  const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
                  if (files.length > 0) await handleUploadMultiple(files);
                }}
                onClick={() => detailInputRef.current?.click()}
              >
                <input
                  ref={detailInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={async (e) => {
                    const files = Array.from(e.target.files || []);
                    if (files.length > 0) await handleUploadMultiple(files);
                    e.target.value = '';
                  }}
                />
                {uploadingDetails ? (
                  <div className="flex flex-col items-center gap-2 py-4">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
                    <p className="text-sm text-gold font-medium">Đang tải ảnh lên...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 py-4">
                    <Upload className="h-10 w-10 text-gray-400 dark:text-slate-500" />
                    <p className="text-sm text-gray-500 dark:text-slate-400">
                      <span className="font-semibold text-gold">Bấm để chọn</span> hoặc kéo thả nhiều ảnh vào đây
                    </p>
                    <p className="text-xs text-gray-400 dark:text-slate-500">JPG, PNG, WebP — Không giới hạn số lượng</p>
                  </div>
                )}
              </div>

              {/* Detail Images Grid */}
              {detailImages.length > 0 && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {detailImages.map((img, idx) => (
                    <div key={img.id} className="group relative aspect-[4/3] overflow-hidden rounded-xl border dark:border-slate-800">
                      <img src={getFullImageUrl(img.url) || ""} className="h-full w-full object-cover" alt={`Detail ${idx + 1}`} />
                      <button
                        onClick={() => handleRemoveImage(img.id)}
                        className="absolute right-1.5 top-1.5 hidden rounded-full bg-red-500/90 p-1.5 text-white shadow-sm group-hover:flex items-center justify-center hover:bg-red-600 transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs text-white font-medium">Ảnh {idx + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Section>

          <div className="flex items-center gap-4 pt-4">
            <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 rounded-xl bg-gold px-8 py-3 font-semibold text-primary hover:bg-gold-light transition-colors"><Save className="h-4 w-4" />{saving ? "Đang lưu..." : "Lưu Villa"}</button>
          </div>
        </div>
      )}

      <style>{`
        .input { width: 100%; border-radius: 0.75rem; border: 1px solid #e5e7eb; padding: 0.625rem 1rem; font-size: 0.875rem; background-color: transparent; }
        .dark .input { border-color: #334155; color: #f1f5f9; background-color: rgba(15, 23, 42, 0.3); }
        .input:focus { border-color: #C5A572; box-shadow: 0 0 0 1px #C5A572; outline: none; }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="rounded-2xl bg-white dark:bg-slate-950 p-6 shadow-sm border border-transparent dark:border-slate-800 transition-colors"><h3 className="mb-4 font-heading text-lg font-semibold text-primary dark:text-white">{title}</h3>{children}</div>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><label className="mb-1 block text-sm font-medium text-gray-700 dark:text-slate-300">{label}</label>{children}</div>;
}

