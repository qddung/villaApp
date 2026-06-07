import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useVillaStore } from './store/useVillaStore';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import VillasPage from './pages/VillasPage';
import VillaDetailPage from './pages/VillaDetailPage';
import AdminPage from './pages/AdminPage';

function App() {
  const loadVillas = useVillaStore((state) => state.loadVillas);
  const loading = useVillaStore((state) => state.loading);

  useEffect(() => {
    loadVillas();
  }, [loadVillas]);

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Đang tải...</div>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/villas" element={<VillasPage />} />
          <Route path="/villas/:slug" element={<VillaDetailPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
