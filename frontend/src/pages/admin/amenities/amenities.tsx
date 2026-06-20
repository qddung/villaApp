import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X, Save } from "lucide-react";
import { fetchAllAmenities, fetchAmenityCategories, createAmenity, updateAmenity, deleteAmenity } from "@/lib/api";
import { Amenity, AmenityCategoryOption } from "@/lib/types";
import { useNotification } from "@/contexts/NotificationContext";

export function generateSlug(text: string) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-gray-800">{title}</h2>
      {children}
    </div>
  );
}

export default function AmenitiesPage() {
  const [amenities, setAmenities] = useState<Amenity[]>([]);
      const [categories, setCategories] = useState<AmenityCategoryOption[]>([]);
      const [loading, setLoading] = useState(true);
      const {showToast} = useNotification();

      // Modal states
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [editing, setEditing] = useState<Partial<Amenity> | null>(null);
      const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
        loadData();
  }, []);

  const loadData = async () => {
    try {
        setLoading(true);
      const [amenitiesData, categoriesData] = await Promise.all([
      fetchAllAmenities(),
      fetchAmenityCategories()
      ]);
      setAmenities(amenitiesData);
      setCategories(categoriesData);
    } catch (error: any) {
        showToast("Lỗi khi tải dữ liệu", "error");
    } finally {
        setLoading(false);
    }
  };

  const getCategoryName = (id: number) => {
    const cat = categories.find((c) => c.id === id);
      return cat ? cat.name : "Khác";
  };

  const handleOpenModal = (amenity?: Amenity) => {
    if (amenity) {
        setEditing(amenity);
    } else {
        setEditing({ id: 0, slug: "", name: "", icon: "Check", category: 6 });
    }
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
        setIsModalOpen(false);
      setEditing(null);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Bạn có chắc muốn xóa tiện nghi này?")) return;
      try {
        await deleteAmenity(id);
      showToast("Xóa tiện nghi thành công", "success");
        loadData();
    } catch (error: any) {
        showToast("Lỗi khi xóa tiện nghi", "error");
    }
  };

  const handleSave = async () => {
    if (!editing?.name || !editing.icon || !editing.category) {
        showToast("Vui lòng điền đầy đủ thông tin", "error");
      return;
    }
      setIsSubmitting(true);
      try {
        const isUpdate = amenities.some((a) => a.id === editing.id) && editing.id !== 0;
      if (isUpdate) {
        await updateAmenity(editing.id!, editing);
      showToast("Cập nhật thành công", "success");
      } else {
        await createAmenity(editing);
      showToast("Thêm mới thành công", "success");
      }
      handleCloseModal();
      loadData();
    } catch (error: any) {
        showToast("Lỗi khi lưu tiện nghi", "error");
    } finally {
        setIsSubmitting(false);
    }
  };

      if (loading) {
    return <div className="p-8">Đang tải...</div>;
  }

      return (
      <div className="p-4 md:p-8 animate-in fade-in duration-300">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Quản lý Tiện Nghi</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Quản lý các danh mục tiện ích của toàn bộ hệ thống Villa
            </p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
          >
            <Plus className="h-5 w-5" />
            Thêm tiện nghi
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">ID</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">Tên hiển thị</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">Danh mục</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">Icon</th>
                  <th className="px-6 py-4 text-right font-semibold text-slate-600 dark:text-slate-300">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {amenities.map((amenity) => (
                  <tr key={amenity.id} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 group">
                    <td className="px-6 py-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                      {amenity.id}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                      {amenity.name}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                        {getCategoryName(Number(amenity.category))}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 font-mono text-xs">
                      {amenity.icon}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleOpenModal(amenity)}
                          className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-colors"
                          title="Sửa"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(amenity.id)}
                          className="rounded-lg p-2 text-slate-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                          title="Xóa"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isModalOpen && editing && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 dark:bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 p-6 md:p-8 shadow-2xl dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-800 animate-in zoom-in-95 duration-200">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {amenities.some((a) => a.id === editing.id) ? "Sửa tiện nghi" : "Thêm tiện nghi mới"}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Slug (Tự động tạo từ tên)
                  </label>
                  <input
                    type="text"
                    value={editing.slug}
                    disabled={true}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-3 text-sm text-slate-900 dark:text-white transition-all placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:bg-slate-50 dark:disabled:bg-slate-800/50 disabled:text-slate-500"
                    placeholder="Slug sẽ tự động tạo từ tên hiển thị..."
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tên hiển thị</label>
                  <input
                    type="text"
                    value={editing.name}
                    onChange={(e) => {
                      const newName = e.target.value;
                      const isExisting = amenities.some((a) => a.id === editing.id) && editing.id !== 0;
                      if (isExisting) {
                        setEditing({ ...editing, name: newName });
                      } else {
                        setEditing({ ...editing, name: newName, slug: generateSlug(newName) });
                      }
                    }}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-3 text-sm text-slate-900 dark:text-white transition-all placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="VD: WiFi tốc độ cao"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Danh mục</label>
                    <select
                      value={editing.category}
                      onChange={(e) => setEditing({ ...editing, category: Number(e.target.value) })}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-3 text-sm text-slate-900 dark:text-white transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id} className="dark:bg-slate-800">
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tên Lucide Icon</label>
                    <input
                      type="text"
                      value={editing.icon}
                      onChange={(e) => setEditing({ ...editing, icon: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-4 py-3 text-sm text-slate-900 dark:text-white transition-all placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="VD: Wifi, Bath, Star..."
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Lưu ý: Tên Icon phải khớp với bộ icon của <a href="https://lucide.dev/icons" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">Lucide React</a> (VD: Wifi, Tv, Bath).
                </p>
              </div>

              <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={handleCloseModal}
                  className="rounded-xl px-5 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  onClick={handleSave}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95 disabled:opacity-50 disabled:active:scale-100"
                >
                  <Save className="h-4 w-4" />
                  {isSubmitting ? "Đang xử lý..." : "Lưu thay đổi"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      );
}
