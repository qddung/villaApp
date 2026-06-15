import { useState, useEffect } from "react";
import { Save } from "lucide-react";
import { toast } from "sonner";
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
      toast.success("Đã lưu cài đặt!");
    } catch (e) {
      toast.error("Lỗi khi lưu cài đặt.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-4 transition-colors">
        <h1 className="font-heading text-2xl font-bold text-navy dark:text-white">Cài đặt chung</h1>
      </div>

      <div className="rounded-2xl bg-white dark:bg-slate-950 p-6 shadow-sm space-y-6 max-w-2xl border border-transparent dark:border-slate-800 transition-colors">
        <div className="space-y-4">
          <h3 className="font-heading text-lg font-semibold text-navy dark:text-white">Thông tin liên hệ</h3>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-slate-300">Email hỗ trợ khách hàng</label>
            <input 
              type="email" 
              className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent dark:bg-slate-900 px-4 py-2.5 outline-none focus:border-gold dark:text-white transition-colors"
              value={settings.contactEmail}
              onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-slate-300">Số điện thoại hotline</label>
            <input 
              type="text" 
              className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent dark:bg-slate-900 px-4 py-2.5 outline-none focus:border-gold dark:text-white transition-colors"
              value={settings.contactPhone}
              onChange={(e) => setSettings({...settings, contactPhone: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-slate-800 transition-colors">
          <h3 className="font-heading text-lg font-semibold text-navy dark:text-white">Mẫu tin nhắn xác nhận (Zalo/SMS)</h3>
          <p className="text-sm text-gray-500 dark:text-slate-400">Sử dụng các biến sau để hệ thống tự động điền: <code className="bg-gray-100 dark:bg-slate-800 px-1 py-0.5 rounded transition-colors">{`{CustomerName}`}</code>, <code className="bg-gray-100 dark:bg-slate-800 px-1 py-0.5 rounded transition-colors">{`{VillaName}`}</code>, <code className="bg-gray-100 dark:bg-slate-800 px-1 py-0.5 rounded transition-colors">{`{CheckIn}`}</code>, <code className="bg-gray-100 dark:bg-slate-800 px-1 py-0.5 rounded transition-colors">{`{CheckOut}`}</code></p>
          <div>
            <textarea 
              rows={6}
              className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent dark:bg-slate-900 px-4 py-2.5 outline-none focus:border-gold resize-none dark:text-white transition-colors"
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
