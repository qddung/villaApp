import { create } from 'zustand';
import { Villa, VillaBasic, FilterOptions } from '@/lib/types';
import { fetchVillas, fetchFilterOptions, fetchVillaBySlug } from '@/lib/api';

interface VillaState {
  villas: VillaBasic[];
  fullVillas: Record<string, Villa>;
  filterOptions: FilterOptions | null;
  loading: boolean;
  loadingFilters: boolean;
  error: string | null;
  loadVillas: () => Promise<void>;
  loadFilterOptions: () => Promise<void>;
  getVillaBySlug: (slug: string) => VillaBasic | undefined;
  fetchVillaDetails: (slug: string, force?: boolean) => Promise<Villa | undefined>;
  getFeaturedVillas: () => VillaBasic[];
  getVillasByArea: (areaSlug: string) => VillaBasic[];
}

export const useVillaStore = create<VillaState>((set, get) => ({
  villas: [],
  fullVillas: {},
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
  getVillaBySlug: (slug) => {
    return get().villas.find((v) => v.slug === slug);
  },
  fetchVillaDetails: async (slug, force = false) => {
    const existing = get().fullVillas[slug];
    if (existing && !force) return existing;
    
    const details = await fetchVillaBySlug(slug);
    if (details) {
      set((state) => ({
        fullVillas: { ...state.fullVillas, [slug]: details }
      }));
    }
    return details;
  },
  getFeaturedVillas: () => {
    return get().villas.filter((v) => v.featured);
  },
  getVillasByArea: (areaSlug) => {
    return get().villas.filter((v) => v.areaSlug === areaSlug);
  },
}));
