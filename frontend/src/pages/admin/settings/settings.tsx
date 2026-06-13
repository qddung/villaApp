import { useState, useEffect } from "react";
import { Save } from "lucide-react";
import { fetchSettings, updateSettings } from "@/lib/api";

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    contactEmail: "",
    contactPhone: "",
    bookingConfirmationTemplate: ""
  });

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchSettings();
        if (data) setSettings(data);
      } catch (e) {
        console.error("Failed to load settings", e);
      }
    }
    load();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateSettings(settings);
      alert("Đã lưu cài đặt!");
    } catch (e) {
      alert("Lỗi khi lưu cài đặt.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h1 className="font-heading text-2xl font-bold text-navy">Cài đặt chung</h1>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm space-y-6 max-w-2xl">
        <div className="space-y-4">
          <h3 className="font-heading text-lg font-semibold text-navy">Thông tin liên hệ</h3>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email hỗ trợ khách hàng</label>
            <input 
              type="email" 
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:border-gold"
              value={settings.contactEmail}
              onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Số điện thoại hotline</label>
            <input 
              type="text" 
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:border-gold"
              value={settings.contactPhone}
              onChange={(e) => setSettings({...settings, contactPhone: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-4 pt-6 border-t border-gray-100">
          <h3 className="font-heading text-lg font-semibold text-navy">Mẫu tin nhắn xác nhận (Zalo/SMS)</h3>
          <p className="text-sm text-gray-500">Sử dụng các biến sau để hệ thống tự động điền: <code className="bg-gray-100 px-1 py-0.5 rounded">{`{CustomerName}`}</code>, <code className="bg-gray-100 px-1 py-0.5 rounded">{`{VillaName}`}</code>, <code className="bg-gray-100 px-1 py-0.5 rounded">{`{CheckIn}`}</code>, <code className="bg-gray-100 px-1 py-0.5 rounded">{`{CheckOut}`}</code></p>
          <div>
            <textarea 
              rows={6}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 outline-none focus:border-gold resize-none"
              value={settings.bookingConfirmationTemplate}
              onChange={(e) => setSettings({...settings, bookingConfirmationTemplate: e.target.value})}
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button 
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 rounded-xl bg-gold px-8 py-3 font-semibold text-navy hover:bg-gold-light transition-colors"
          >
            <Save className="h-4 w-4" />
            {saving ? "Đang lưu..." : "Lưu cài đặt"}
          </button>
        </div>
      </div>
    </div>
  );
}
