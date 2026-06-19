import { LayoutDashboard, Home, CalendarCheck, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";
import { authFetch } from "@/contexts/AuthContext";

export default function DashboardPage() {
  const [statsData, setStatsData] = useState({
    totalVillas: 0,
    totalBookings: 0,
    revenue: 0,
    newBookings: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await authFetch('/api/dashboard/stats');
        if (res.ok) {
          const data = await res.json();
          setStatsData(data);
        }
      } catch (err) {
        console.error("Failed to fetch stats", err);
      }
    };
    fetchStats();
  }, []);

  const stats = [
    { name: "Tổng số Villa", value: statsData.totalVillas.toString(), icon: Home, trend: "", trendUp: true },
    { name: "Tổng yêu cầu tư vấn", value: statsData.totalBookings.toString(), icon: CalendarCheck, trend: "", trendUp: true },
    { name: "Yêu cầu booking mới", value: statsData.newBookings.toString(), icon: LayoutDashboard, trend: "", trendUp: true },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-4 transition-colors">
        <h1 className="font-heading text-2xl font-bold text-primary dark:text-white">Tổng quan</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="rounded-2xl bg-white dark:bg-slate-950 p-6 shadow-sm border border-transparent dark:border-slate-800 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand/30 dark:bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                {stat.trend && (
                  <span className={`text-sm font-semibold ${stat.trendUp ? "text-green-600" : "text-red-600"}`}>
                    {stat.trend}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-slate-400">{stat.name}</h3>
                <p className="mt-1 font-heading text-2xl font-bold text-primary dark:text-white">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Placeholder for future charts */}
      <div className="rounded-2xl bg-white dark:bg-slate-950 p-6 shadow-sm min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-100 dark:border-slate-800 transition-colors">
        <p className="text-gray-400 dark:text-slate-500 font-medium">Khu vực biểu đồ thống kê (Sắp ra mắt)</p>
      </div>
    </div>
  );
}

