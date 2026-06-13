import { Villa, FilterOptions } from './types';
import { authFetch } from '@/contexts/AuthContext';

const API_BASE = '/api';

export async function fetchVillas(): Promise<Villa[]> {
  const res = await authFetch(`${API_BASE}/villas`);
  if (!res.ok) throw new Error('Failed to fetch villas');
  return res.json();
}

export async function fetchFilterOptions(): Promise<FilterOptions> {
  const res = await authFetch(`${API_BASE}/villas/filters/default`);
  if (!res.ok) throw new Error('Failed to fetch filter options');
  return res.json();
}

export async function fetchVillaBySlug(slug: string): Promise<Villa | undefined> {
  try {
    const res = await authFetch(`${API_BASE}/villas/${slug}`);
    if (!res.ok) return undefined;
    return res.json();
  } catch {
    return undefined;
  }
}

export async function saveVilla(villa: Villa): Promise<Villa> {
  const res = await authFetch(`${API_BASE}/villas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(villa),
  });
  if (!res.ok) throw new Error('Failed to save villa');
  const data = await res.json();
  return data.villa;
}

export async function deleteVilla(id: string): Promise<void> {
  const res = await authFetch(`${API_BASE}/villas`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error('Failed to delete villa');
}

export async function getVillaImages(slug: string): Promise<{ main: string | null; details: string[] }> {
  try {
    const res = await authFetch(`${API_BASE}/villa-images?slug=${slug}`);
    if (!res.ok) return { main: null, details: [] };
    const data = await res.json();
    const backendUrl = 'http://localhost:3001';
    return {
      main: data.main ? backendUrl + data.main : null,
      details: data.details ? data.details.map((d: string) => backendUrl + d) : [],
    };
  } catch {
    return { main: null, details: [] };
  }
}

export async function deleteVillaImage(slug: string, imageUrl: string) {
  const res = await authFetch(`${API_BASE}/villa-images`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug, imageUrl: imageUrl.replace('http://localhost:3001', '') }),
  });
  if (!res.ok) throw new Error('Failed to delete image');
}

export async function uploadVillaImage(slug: string, type: 'main' | 'detail', file: File) {
  const formData = new FormData();
  formData.append('slug', slug);
  formData.append('type', type);
  formData.append('file', file);
  
  const res = await authFetch(`${API_BASE}/villa-images`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('Failed to upload image');
  const data = await res.json();
  return data;
}

export async function fetchBookings() {
  const res = await authFetch(`${API_BASE}/bookings`);
  if (!res.ok) throw new Error('Failed to fetch bookings');
  return res.json();
}

export async function createBooking(data: any) {
  const res = await authFetch(`${API_BASE}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create booking');
  return res.json();
}

export async function updateBookingStatus(id: string, status: string) {
  const res = await authFetch(`${API_BASE}/bookings/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error('Failed to update booking status');
  return res.json();
}

export async function login(username: string, password: string) {
  const res = await authFetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error('Invalid credentials');
  return res.json();
}

export function getFullImageUrl(url: string | null): string | null {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `http://localhost:3001${url}`;
}

export async function fetchPricing(villaId: string) {
  const res = await authFetch(`${API_BASE}/villas/${villaId}/pricing`);
  if (!res.ok) throw new Error('Failed to fetch pricing');
  return res.json();
}

export async function createPricing(villaId: string, data: any) {
  const res = await authFetch(`${API_BASE}/villas/${villaId}/pricing`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create pricing');
  return res.json();
}

export async function deletePricing(villaId: string, id: string) {
  const res = await authFetch(`${API_BASE}/villas/${villaId}/pricing/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete pricing');
}

export async function fetchSettings() {
  const res = await authFetch(`${API_BASE}/settings`);
  if (!res.ok) throw new Error('Failed to fetch settings');
  return res.json();
}

export async function updateSettings(data: any) {
  const res = await authFetch(`${API_BASE}/settings`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update settings');
  return res.json();
}
