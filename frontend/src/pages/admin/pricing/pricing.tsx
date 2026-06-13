import { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useVillaStore } from "@/store/useVillaStore";
import { fetchPricing, deletePricing } from "@/lib/api";

export default function PricingPage() {
  const villas = useVillaStore((state) => state.villas);
  const [selectedVilla, setSelectedVilla] = useState<string>("");
  const [prices, setPrices] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      if (!selectedVilla) {
        setPrices([]);
        return;
      }
      try {
        const data = await fetchPricing(selectedVilla);
        setPrices(data);
      } catch (e) {
        console.error("Failed to fetch pricing", e);
      }
    }
    load();
  }, [selectedVilla]);

  const handleDelete = async (id: string) => {
    if (!selectedVilla) return;
    if (confirm("Bạn có chắc chắn muốn xoá giá này?")) {
      try {
        await deletePricing(selectedVilla, id);
        setPrices(prices.filter(p => p.id !== id));
      } catch (e) {
        alert("Lỗi khi xoá");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h1 className="font-heading text-2xl font-bold text-navy">Cài đặt giá theo thời điểm</h1>
        <button className="flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold-light">
          <Plus className="h-4 w-4" /> Thêm giá mới
        </button>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex gap-4 items-center">
          <label className="text-sm font-medium text-gray-700">Lọc theo Villa:</label>
          <select 
            value={selectedVilla} 
            onChange={(e) => setSelectedVilla(e.target.value)}
            className="rounded-lg border px-3 py-2 text-sm outline-none border-gray-200"
          >
            <option value="">Tất cả Villas</option>
            {villas.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
          </select>
        </div>

        <div className="space-y-4">
          {prices.filter(p => selectedVilla ? p.villaId === selectedVilla : true).map(price => (
            <div key={price.id} className="flex items-center justify-between p-4 border rounded-xl border-gray-100 hover:border-gold/30 transition-colors">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-navy">
                    {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price.price)} / đêm
                  </span>
                  <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                    price.type === 'holiday' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {price.type === 'holiday' ? 'Lễ Tết' : 'Mùa cao điểm'}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Từ {price.startDate} đến {price.endDate} &middot; {villas.find(v => v.id === price.villaId)?.name || 'Villa'}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sửa</button>
                <button onClick={() => handleDelete(price.id)} className="rounded-lg border border-red-200 px-3 py-2 text-red-500 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
          {prices.length === 0 && (
            <div className="py-8 text-center text-gray-500">Chưa có cài đặt giá nào.</div>
          )}
        </div>
      </div>
    </div>
  );
}
