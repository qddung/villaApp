import { create } from 'zustand';
import { Villa, FilterOptions } from '@/lib/types';
import { fetchVillas, fetchFilterOptions } from '@/lib/api';

interface VillaState {
  villas: Villa[];
  filterOptions: FilterOptions | null;
  loading: boolean;
  loadingFilters: boolean;
  error: string | null;
  loadVillas: () => Promise<void>;
  loadFilterOptions: () => Promise<void>;
  getVillaBySlug: (slug: string) => Villa | undefined;
  getFeaturedVillas: () => Villa[];
  getVillasByArea: (areaSlug: string) => Villa[];
}

export const useVillaStore = create<VillaState>((set, get) => ({
  villas: [],
  filterOptions: null,
  loading: true,
  loadingFilters: true,
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
  loadFilterOptions: async () => {
    try {
      set({ loadingFilters: true, error: null });
      const filterOptions = await fetchFilterOptions();
      set({ filterOptions, loadingFilters: false });
    } catch (err: any) {
      set({ error: err.message, loadingFilters: false });
    }
  },
  getVillaBySlug: (slug) => get().villas.find((v) => v.slug === slug),
  getFeaturedVillas: () => get().villas.filter((v) => v.featured),
  getVillasByArea: (areaSlug) => get().villas.filter((v) => v.areaSlug === areaSlug),
}));
