import { useState, useEffect } from "react";
import { Plus, Edit2 } from "lucide-react";
import { toast } from "sonner";
import { fetchAllAreas, createArea, updateArea, getFullImageUrl } from "@/lib/api";
import { slugify } from "@/lib/utils";

export default function AreasPage() {
  const [areas, setAreas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    isFamous: false,
    imageFile: null as File | null
  });

  const loadAreas = async () => {
    setLoading(true);
    try {
      const data = await fetchAllAreas();
      setAreas(data);
    } catch (e) {
      toast.error("Lỗi khi tải danh sách khu vực");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAreas();
  }, []);

  const openAddModal = () => {
    setEditingId(null);
    setPreviewUrl(null);
    setFormData({ name: "", slug: "", description: "", isFamous: false, imageFile: null });
    setIsModalOpen(true);
  };

  const openEditModal = (area: any) => {
    setEditingId(area.id);
    setPreviewUrl(area.imageUrl ? getFullImageUrl(area.imageUrl) : null);
    setFormData({
      name: area.name,
      slug: area.slug,
      description: area.description || "",
      isFamous: area.isFamous,
      imageFile: null
    });
    setIsModalOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, imageFile: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("slug", formData.slug);
      if (formData.description) submitData.append("description", formData.description);
      submitData.append("isFamous", String(formData.isFamous));
      if (formData.imageFile) {
        submitData.append("image", formData.imageFile);
      }

      if (editingId) {
        await updateArea(editingId, submitData);
        toast.success("Cập nhật khu vực thành công!");
      } else {
        await createArea(submitData);
        toast.success("Thêm khu vực thành công!");
      }
      setIsModalOpen(false);
      loadAreas();
    } catch (err: any) {
      toast.error(err.message || "Đã có lỗi xảy ra");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-4">
        <h1 className="font-heading text-2xl font-bold text-primary dark:text-white">Quản lý Khu vực</h1>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 rounded-xl bg-gold px-4 py-2 text-sm font-semibold text-primary hover:bg-gold-light transition-colors"
        >
          <Plus className="h-4 w-4" />
          Thêm mới
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-950 shadow-sm border border-transparent dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-slate-400">
            <thead className="bg-gray-50/50 dark:bg-slate-900/50 text-xs uppercase text-gray-700 dark:text-slate-300">
              <tr>
                <th className="px-6 py-4 font-semibold">Hình ảnh</th>
                <th className="px-6 py-4 font-semibold">Tên khu vực</th>
                <th className="px-6 py-4 font-semibold">Mã (Slug)</th>
                <th className="px-6 py-4 font-semibold">Số Villa</th>
                <th className="px-6 py-4 font-semibold">Nổi bật</th>
                <th className="px-6 py-4 font-semibold text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">Đang tải dữ liệu...</td>
                </tr>
              ) : areas.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">Chưa có khu vực nào</td>
                </tr>
              ) : (
                areas.map((area) => (
                  <tr key={area.id} className="hover:bg-gray-50/50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="px-6 py-4">
                      {area.imageUrl ? (
                        <img src={getFullImageUrl(area.imageUrl) || ""} alt={area.name} className="h-10 w-16 object-cover rounded shadow-sm" />
                      ) : (
                        <div className="h-10 w-16 bg-gray-200 dark:bg-slate-800 rounded flex items-center justify-center text-xs text-gray-400">N/A</div>
                      )}
                    </td>
                    <td className="px-6 py-4 font-medium text-primary dark:text-white">{area.name}</td>
                    <td className="px-6 py-4"><code>{area.slug}</code></td>
                    <td className="px-6 py-4">{area._count?.villas || 0}</td>
                    <td className="px-6 py-4">
                      {area.isFamous ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">Có</span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-slate-800 dark:text-slate-300">Không</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => openEditModal(area)}
                        className="p-2 text-gray-400 hover:text-gold transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                        title="Sửa"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-xl border border-gray-100 dark:border-slate-800 max-h-[90vh] overflow-y-auto">
            <h3 className="mb-4 font-heading text-lg font-bold text-primary dark:text-white">
              {editingId ? "Sửa khu vực" : "Thêm khu vực mới"}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-slate-300">Tên khu vực (*)</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent px-4 py-2 outline-none focus:border-gold dark:text-white"
                  value={formData.name}
                  onChange={e => {
                    const newName = e.target.value;
                    setFormData({
                      ...formData, 
                      name: newName, 
                      slug: slugify(newName)
                    });
                  }}
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-slate-300">Mã Slug (*)</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent px-4 py-2 outline-none focus:border-gold dark:text-white"
                  value={formData.slug}
                  onChange={e => setFormData({...formData, slug: e.target.value})}
                  placeholder="bai-sau, bai-dau..."
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-slate-300">Hình ảnh đại diện</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent px-4 py-2 outline-none focus:border-gold dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gold/10 file:text-gold hover:file:bg-gold/20"
                  onChange={handleImageChange}
                />
                {previewUrl && (
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-1">Xem trước ảnh:</p>
                    <img src={previewUrl} alt="Preview" className="h-32 object-cover rounded-xl shadow-sm border border-gray-200 dark:border-slate-700" />
                  </div>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-slate-300">Mô tả ngắn</label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent px-4 py-2 outline-none focus:border-gold dark:text-white resize-none"
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="isFamous"
                  className="h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold"
                  checked={formData.isFamous}
                  onChange={e => setFormData({...formData, isFamous: e.target.checked})}
                />
                <label htmlFor="isFamous" className="text-sm font-medium text-gray-700 dark:text-slate-300">
                  Hiển thị ra trang chủ (Khu vực nổi bật)
                </label>
              </div>

              <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-gold px-6 py-2 text-sm font-semibold text-primary hover:bg-gold-light transition-colors"
                >
                  {editingId ? "Lưu thay đổi" : "Tạo mới"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

