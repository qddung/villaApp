import { Villa, VillaBasic, VillaImageInfo, FilterOptions } from './types';
import { authFetch } from '@/contexts/AuthContext';

const API_BASE = '/api';

export async function fetchVillas(): Promise<VillaBasic[]> {
  const res = await authFetch(`${API_BASE}/villas`);
  if (!res.ok) throw new Error('Failed to fetch villas');
  return res.json();
}

export async function fetchFilterOptions(): Promise<FilterOptions> {
  const res = await authFetch(`${API_BASE}/villas/filters/default`);
  if (!res.ok) throw new Error('Failed to fetch filter options');
  return res.json();
}

export async function fetchFamousAreas() {
  const res = await authFetch(`${API_BASE}/areas/famous`);
  if (!res.ok) throw new Error('Failed to fetch famous areas');
  return res.json();
}

export async function fetchAllAreas() {
  const res = await authFetch(`${API_BASE}/areas`);
  if (!res.ok) throw new Error('Failed to fetch all areas');
  return res.json();
}

export async function createArea(data: any) {
  const res = await authFetch(`${API_BASE}/areas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create area');
  return res.json();
}

export async function updateArea(id: string, data: any) {
  const res = await authFetch(`${API_BASE}/areas/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update area');
  return res.json();
}

export async function fetchVillaBySlug(slug: string): Promise<Villa | undefined> {
  try {
    const res = await authFetch(`${API_BASE}/villas/${slug}`, { cache: 'no-store' });
    if (!res.ok) return undefined;
    return res.json();
  } catch {
    return undefined;
  }
}

export async function saveVilla(villa: Partial<Villa>): Promise<Villa> {
  const isUpdate = !!villa.id;
  const method = isUpdate ? 'PUT' : 'POST';
  const url = isUpdate ? `${API_BASE}/villas/${villa.id}` : `${API_BASE}/villas`;

  const newImages = (villa.images || []).filter((img: VillaImageInfo) => img.tag === 'new').map((img: VillaImageInfo) => img.id);
  const deleteImages = (villa.images || []).filter((img: VillaImageInfo) => img.tag === 'delete').map((img: VillaImageInfo) => img.id);

  const payload = {
    ...villa,
    newImages,
    deleteImages,
  };
  
  // Note: we remove images array from payload to let backend handle via newImages/deleteImages logic
  delete payload.images;

  const res = await authFetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to save villa');
  const data = await res.json();
  return data.villa;
}

export async function deleteVilla(id: string): Promise<void> {
  const res = await authFetch(`${API_BASE}/villas/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete villa');
}

/**
 * Upload a single image to the server. Returns { id, isMain }.
 * The image is stored in DB immediately but NOT attached to any villa yet.
 */
export async function uploadVillaImage(file: File, isMain: boolean = false): Promise<VillaImageInfo> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('isMain', String(isMain));

  const res = await authFetch(`${API_BASE}/villa-images`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('Failed to upload image');
  const data = await res.json();
  return {
    id: data.id,
    url: `/api/villa-image/${data.id}`,
    isMain: data.isMain,
    tag: 'new' as const,
  };
}

/**
 * Delete an image by ID (used for cleanup of orphaned uploads)
 */
export async function deleteVillaImage(id: string) {
  const res = await authFetch(`${API_BASE}/villa-images/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete image');
}

export function getFullImageUrl(url: string | null): string | null {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `http://localhost:3001${url}`;
}

/** Get the URL of the first (main) image from a villa's images array */
export function getVillaMainImageUrl(villa: { images: VillaImageInfo[] }): string {
  const main = villa.images.find((img) => img.isMain && img.tag !== 'delete');
  const first = villa.images.find((img) => img.tag !== 'delete');
  const img = main || first;
  if (!img) return '';
  return getFullImageUrl(img.url) || '';
}

/** Get all image URLs for gallery display */
export function getVillaImageUrls(villa: { images: VillaImageInfo[] }): string[] {
  const visible = villa.images.filter((img) => img.tag !== 'delete');
  // Put main image first
  const sorted = [
    ...visible.filter((img) => img.isMain),
    ...visible.filter((img) => !img.isMain),
  ];
  return sorted.map((img) => getFullImageUrl(img.url) || '').filter(Boolean);
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

export async function updateBooking(id: string, data: Record<string, any>) {
  const res = await authFetch(`${API_BASE}/bookings/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update booking');
  return res.json();
}

export async function deleteBooking(id: string) {
  const res = await authFetch(`${API_BASE}/bookings/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete booking');
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
