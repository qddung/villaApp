import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserProfile, UserRole } from '@/types';
import { useNotification } from '@/contexts/NotificationContext';
import { useAuth, authFetch, decodeToken } from '@/contexts/AuthContext';
import { translateAuthError } from '@/lib/errorTranslator';

interface AdminContextType {
  profile: UserProfile | null;
  role: UserRole | null;
  loading: boolean;
  updateProfile: (fullName: string, phone: string) => Promise<{ success: boolean; error?: string }>;
  refreshProfile: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, token, logout, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const { showToast } = useNotification();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const fetchProfile = async (userId: string, email: string): Promise<UserProfile | null> => {
    try {
      const response = await authFetch('/api/profile');

      if (response.ok) {
        const data = await response.json();
        if (data.profile) return data.profile as UserProfile;
      }

      if (response.status === 401) {
        await logout();
        return null;
      }

      // Fallback
      if (token) {
        const decoded = decodeToken(token);
        if (decoded) {
          const minimalProfile: UserProfile = {
            id: userId,
            email,
            full_name: '',
            phone: '',
            role: (decoded.role as UserRole) || 'pending',
            created_at: new Date().toISOString(),
          };
          return minimalProfile;
        }
      }

      return null;
    } catch (err) {
      console.error('[AdminContext] 💥 fetchProfile error:', err);
      return null;
    }
  };

  const refreshProfile = async () => {
    if (!token || !user) return;
    const prof = await fetchProfile(user.id, user.email);
    setProfile(prof);
  };

  const updateProfile = async (fullName: string, phone: string) => {
    if (!user) return { success: false, error: 'Chưa đăng nhập.' };
    try {
      const response = await authFetch('/api/profile', {
        method: 'PATCH',
        body: JSON.stringify({ fullName, phone }),
      });

      if (!response.ok) {
        const result = await response.json();
        return { success: false, error: result.error || 'Không thể cập nhật hồ sơ.' };
      }

      await refreshProfile();
      return { success: true };
    } catch (err: any) {
      console.error(err);
      return { success: false, error: translateAuthError(err.message) };
    }
  };

  useEffect(() => {
    if (authLoading) return;

    if (!user || !token) {
      setLoading(false);
      navigate('/login');
      return;
    }

    const loadProfile = async () => {
      setLoading(true);
      try {
        const prof = await fetchProfile(user.id, user.email);
        setProfile(prof);
      } catch (error) {
        console.error('[AdminContext] ❌ Error loading profile:', error);
        showToast('Không thể tải hồ sơ người dùng. Vui lòng thử lại.', 'error');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [user, token, authLoading]);

  // Admin Route Guards
  useEffect(() => {
    if (loading) return;
    if (!profile) return;

    if (profile.role === 'pending' && pathname !== '/pending') {
      navigate('/login');
      return;
    }

    if (profile.role !== 'admin' && profile.role !== 'owner') {
      showToast('Bạn không có quyền truy cập trang quản trị này!', 'error');
      navigate('/');
    }
  }, [profile, loading, pathname, navigate, showToast]);

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Đang tải cấu hình Admin...</div>;
  }

  return (
    <AdminContext.Provider
      value={{
        profile,
        role: profile ? profile.role : null,
        loading,
        updateProfile,
        refreshProfile,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin phải được dùng trong AdminProvider');
  }
  return context;
};
