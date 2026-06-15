import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile, UserRole } from '@/types';
import { useNotification } from '@/contexts/NotificationContext';
import { translateAuthError } from '@/lib/errorTranslator';

// Helper: decode JWT payload (client-side only)
export const decodeToken = (token: string): { userId: string; role?: string; exp?: number } | null => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const payload = JSON.parse(atob(parts[1]));
    return {
      userId: payload.userId,
      role: payload.role,
      exp: payload.exp,
    };
  } catch {
    return null;
  }
};

// Helper: check if token is expired
const isTokenExpired = (token: string): boolean => {
  const decoded = decodeToken(token);
  if (!decoded?.exp) return true;
  return Date.now() >= decoded.exp * 1000;
};

// Helper: get auth headers for API calls
export const getAuthHeaders = (): HeadersInit => {
  if (typeof window === 'undefined') return {};
  const token = localStorage.getItem('rentify_token');
  if (!token) return {};
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

// Helper: authenticated fetch
export const authFetch = async (url: string, options: RequestInit = {}): Promise<Response> => {
  const headers = {
    ...getAuthHeaders(),
    ...(options.headers || {}),
  } as Record<string, string>;

  // Ensure Content-Type for POST/PATCH/PUT with body
  if (options.body && !(options.body instanceof FormData)) {
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
  } else if (options.body instanceof FormData) {
    // Let browser set the multipart/form-data Content-Type and boundary automatically
    delete headers['Content-Type'];
  }

  return fetch(url, {
    ...options,
    headers,
  });
};

// Helper: get current token
export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('rentify_token');
};

interface AuthContextType {
  user: { id: string; email: string } | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, fullName: string, phone: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  changePassword: (password: string) => Promise<{ success: boolean; error?: string }>;
  sendPasswordReset: (email: string) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { showToast } = useNotification();
  const navigate = useNavigate();

  // Restore session from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('rentify_token');
    if (savedToken && !isTokenExpired(savedToken)) {
      setToken(savedToken);
      const decoded = decodeToken(savedToken);
      if (decoded) {
        setUser({ id: decoded.userId, email: '' });
      }
    } else {
      localStorage.removeItem('rentify_token');
    }
    setLoading(false);
  }, []);

  // Login
  const login = async (username: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      if (!response.ok) {
        return { success: false, error: translateAuthError(result.error) };
      }

      // Store token
      localStorage.setItem('rentify_token', result.token);
      setToken(result.token);
      setUser({ id: result.user.id, email: result.user.email });

      return { success: true };
    } catch (err: any) {
      console.error(err);
      return { success: false, error: translateAuthError(err.message) };
    }
  };

  // Register (normal user)
  const register = async (email: string, password: string, fullName: string, phone: string) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, fullName, phone }),
      });

      const result = await response.json();
      if (!response.ok) {
        return { success: false, error: translateAuthError(result.error) };
      }

      // Store token
      localStorage.setItem('rentify_token', result.token);
      setToken(result.token);
      setUser({ id: result.user.id, email: result.user.email });

      return { success: true };
    } catch (err: any) {
      console.error(err);
      return { success: false, error: translateAuthError(err.message) };
    }
  };



  // Logout
  const logout = async () => {
    localStorage.removeItem('rentify_token');
    setUser(null);
    setToken(null);
    navigate('/login', { replace: true });
    showToast('Đăng xuất thành công!');
  };

  // Change password
  const changePassword = async (password: string) => {
    try {
      const response = await authFetch('/api/auth/change-password', {
        method: 'POST',
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const result = await response.json();
        return { success: false, error: result.error || 'Không thể đổi mật khẩu.' };
      }

      return { success: true };
    } catch (err: any) {
      console.error(err);
      return { success: false, error: translateAuthError(err.message) };
    }
  };

  // Password reset (send email - we use a simple API for now)
  const sendPasswordReset = async (email: string) => {
    try {
      const response = await fetch('/api/auth/reset-password-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const result = await response.json();
        return { success: false, error: result.error || 'Không thể gửi yêu cầu đặt lại mật khẩu.' };
      }

      return { success: true };
    } catch (err: any) {
      console.error(err);
      return { success: false, error: translateAuthError(err.message) };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        changePassword,
        sendPasswordReset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth phải được dùng trong AuthProvider');
  }
  return context;
};