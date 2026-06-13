import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useVillaStore } from '@/store/useVillaStore';

// Providers
import { NotificationProvider } from '@/contexts/NotificationContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { AdminProvider } from '@/contexts/AdminContext';

// Layouts
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AdminLayout from '@/pages/admin/adminLayout/adminLayout';

// Client Pages
import HomePage from '@/pages/client/home/home';
import VillasPage from '@/pages/client/villas/villas';
import VillaDetailPage from '@/pages/client/villaDetail/villaDetail';
import AboutPage from '@/pages/client/about/about';
import ContactPage from '@/pages/client/contact/contact';
import ListYourVillaPage from '@/pages/client/listYourVilla/listYourVilla';
import BookingPage from '@/pages/client/booking/booking';
import BookingConfirmationPage from '@/pages/client/bookingConfirmation/bookingConfirmation';

// Admin & Auth Pages
import DashboardPage from '@/pages/admin/dashboard/dashboard';
import AdminPage from '@/pages/admin/villas/villas';
import BookingsPage from '@/pages/admin/bookings/bookings';
import CalendarPage from '@/pages/admin/calendar/calendar';
import PricingPage from '@/pages/admin/pricing/pricing';
import SettingsPage from '@/pages/admin/settings/settings';
import LoginPage from '@/pages/auth/login/login';

// Wrapper for Client routes to include Header and Footer
function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}

function AppRoutes() {
  const { token } = useAuth();

  return (
    <Routes>
      {/* Client Routes */}
      <Route path="/*" element={
        <ClientLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/villas" element={<VillasPage />} />
            <Route path="/villas/:slug" element={<VillaDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/list-your-villa" element={<ListYourVillaPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking/confirmation" element={<BookingConfirmationPage />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </ClientLayout>
      } />

      {/* Auth Route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Admin Routes */}
      <Route path="/admin" element={
        <AdminProvider>
          <AdminLayout />
        </AdminProvider>
      }>
        <Route index element={<DashboardPage />} />
        <Route path="villas" element={<AdminPage />} />
        <Route path="bookings" element={<BookingsPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default function AppRouter() {
  const loadVillas = useVillaStore((state) => state.loadVillas);
  const loading = useVillaStore((state) => state.loading);
  const loadFilterOptions = useVillaStore((state) => state.loadFilterOptions);
  const loadingFilters = useVillaStore((state) => state.loadingFilters);

  useEffect(() => {
    loadVillas();
    loadFilterOptions();
  }, [loadVillas, loadFilterOptions]);

  if (loading || loadingFilters) {
    return <div className="flex min-h-screen items-center justify-center">Đang tải...</div>;
  }

  return (
    <BrowserRouter>
      <NotificationProvider>
        <ThemeProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </ThemeProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}
