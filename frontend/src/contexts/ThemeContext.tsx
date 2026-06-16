import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

export const getResolvedTheme = (mode: ThemeMode): 'light' | 'dark' => {
  if (mode === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return mode;
};

export const applyTheme = (mode: ThemeMode) => {
  const resolved = getResolvedTheme(mode);
  if (resolved === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const getStoredTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem('theme') as ThemeMode | null;
  return stored || 'system';
};

export const storeTheme = (mode: ThemeMode) => {
  localStorage.setItem('theme', mode);
  applyTheme(mode);
};

export const setupThemeListener = (onChange: () => void) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const listener = () => {
    applyTheme(getStoredTheme());
    onChange();
  };
  mediaQuery.addEventListener('change', listener);
  return () => mediaQuery.removeEventListener('change', listener);
};

interface ThemeContextType {
  themeMode: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
    storeTheme(mode);
    setResolvedTheme(getResolvedTheme(mode));
  }, []);

  useEffect(() => {
    const stored = getStoredTheme();
    setThemeModeState(stored);
    applyTheme(stored);
    setResolvedTheme(getResolvedTheme(stored));

    const cleanup = setupThemeListener(() => {
      const current = getStoredTheme();
      if (current === 'system') {
        setResolvedTheme(getResolvedTheme('system'));
      }
    });

    return cleanup;
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, resolvedTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};