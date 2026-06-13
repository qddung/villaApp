import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Home, CalendarCheck, Calendar as CalendarIcon, DollarSign, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminLayout() {
  const location = useLocation();
  const { logout } = useAuth();

  function handleLogout() {
    logout();
  }

  const navItems = [
    { name: "Tổng quan", path: "/admin", icon: LayoutDashboard },
    { name: "Quản lý Villas", path: "/admin/villas", icon: Home },
    { name: "Đơn đặt phòng", path: "/admin/bookings", icon: CalendarCheck },
    { name: "Lịch trống", path: "/admin/calendar", icon: CalendarIcon },
    { name: "Cài đặt giá", path: "/admin/pricing", icon: DollarSign },
    { name: "Cài đặt", path: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white">
        <div className="flex h-16 items-center px-6 border-b border-gray-100">
          <span className="font-heading text-xl font-bold text-navy">
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
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive ? "bg-navy text-white" : "text-gray-600 hover:bg-gray-50 hover:text-navy"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="absolute bottom-4 w-64 px-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
