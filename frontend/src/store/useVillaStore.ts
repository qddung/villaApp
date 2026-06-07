import { create } from 'zustand';
import { Villa } from '@/lib/types';
import { fetchVillas } from '@/lib/api';

interface VillaState {
  villas: Villa[];
  loading: boolean;
  error: string | null;
  loadVillas: () => Promise<void>;
  getVillaBySlug: (slug: string) => Villa | undefined;
  getFeaturedVillas: () => Villa[];
  getVillasByArea: (areaSlug: string) => Villa[];
}

export const useVillaStore = create<VillaState>((set, get) => ({
  villas: [],
  loading: true,
  error: null,
  loadVillas: async () => {
    try {
      set({ loading: true, error: null });
      const villas = await fetchVillas();
      set({ villas, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
  getVillaBySlug: (slug) => get().villas.find((v) => v.slug === slug),
  getFeaturedVillas: () => get().villas.filter((v) => v.featured),
  getVillasByArea: (areaSlug) => get().villas.filter((v) => v.areaSlug === areaSlug),
}));
