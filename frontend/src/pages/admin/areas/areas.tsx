import { useState, useEffect } from "react";
import { Plus, Edit2 } from "lucide-react";
import { toast } from "sonner";
import { fetchAllAreas, createArea, updateArea } from "@/lib/api";
import { slugify } from "@/lib/utils";

export default function AreasPage() {
  const [areas, setAreas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    imageUrl: "",
    isFamous: false
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
    setFormData({ name: "", slug: "", description: "", imageUrl: "", isFamous: false });
    setIsModalOpen(true);
  };

  const openEditModal = (area: any) => {
    setEditingId(area.id);
    setFormData({
      name: area.name,
      slug: area.slug,
      description: area.description || "",
      imageUrl: area.imageUrl || "",
      isFamous: area.isFamous
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateArea(editingId, formData);
        toast.success("Cập nhật khu vực thành công!");
      } else {
        await createArea(formData);
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
        <h1 className="font-heading text-2xl font-bold text-navy dark:text-white">Quản lý Khu vực</h1>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 rounded-xl bg-gold px-4 py-2 text-sm font-semibold text-navy hover:bg-gold-light transition-colors"
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
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">Đang tải dữ liệu...</td>
                </tr>
              ) : areas.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">Chưa có khu vực nào</td>
                </tr>
              ) : (
                areas.map((area) => (
                  <tr key={area.id} className="hover:bg-gray-50/50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-navy dark:text-white">{area.name}</td>
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
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-xl border border-gray-100 dark:border-slate-800">
            <h3 className="mb-4 font-heading text-lg font-bold text-navy dark:text-white">
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
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-slate-300">Hình ảnh đại diện (Link/URL)</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent px-4 py-2 outline-none focus:border-gold dark:text-white"
                  value={formData.imageUrl}
                  onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                  placeholder="https://..."
                />
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
                  className="rounded-xl bg-gold px-6 py-2 text-sm font-semibold text-navy hover:bg-gold-light transition-colors"
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
