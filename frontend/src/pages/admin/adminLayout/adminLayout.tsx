import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Home, CalendarCheck, Calendar as CalendarIcon, Settings, LogOut, Sun, Moon, Map } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect } from "react";

export default function AdminLayout() {
  const location = useLocation();
  const { logout } = useAuth();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("adminDarkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("adminDarkMode", isDarkMode.toString());
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  function handleLogout() {
    logout();
  }

  const navItems = [
    { name: "Tổng quan", path: "/admin", icon: LayoutDashboard },
    { name: "Quản lý Villas", path: "/admin/villas", icon: Home },
    { name: "Khu vực", path: "/admin/areas", icon: Map },
    { name: "Yêu cầu tư vấn", path: "/admin/bookings", icon: CalendarCheck },
    { name: "Lịch trống", path: "/admin/calendar", icon: CalendarIcon },
    { name: "Cài đặt", path: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300 relative">
        <div className="flex h-16 items-center px-6 border-b border-gray-100 dark:border-slate-800">
          <span className="font-heading text-xl font-bold text-primary dark:text-white">
            Villa<span className="text-gold">VungTau</span>
          </span>
        </div>
        <div className="p-4 flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (item.path !== "/admin" && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${isActive ? "bg-primary dark:bg-slate-800 text-white" : "text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-white"
                  }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="absolute bottom-4 w-full px-4 flex flex-col gap-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-600 dark:text-slate-400 transition-colors hover:bg-gray-50 dark:hover:bg-slate-800"
          >
            <div className="flex items-center gap-3">
              {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              {isDarkMode ? "Chế độ tối" : "Chế độ sáng"}
            </div>
            <div className={`w-8 h-4 rounded-full transition-colors flex items-center ${isDarkMode ? 'bg-primary' : 'bg-gray-300'}`}>
              <div className={`w-3 h-3 rounded-full bg-white transform transition-transform ${isDarkMode ? 'translate-x-4' : 'translate-x-1'}`} />
            </div>
          </button>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400 transition-colors hover:bg-red-50 dark:hover:bg-red-950/30"
          >
            <LogOut className="h-4 w-4" />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 text-gray-900 dark:text-slate-100">
        <Outlet />
      </main>
    </div>
  );
}

