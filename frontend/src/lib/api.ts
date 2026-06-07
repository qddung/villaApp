import { Villa } from './types';

const API_BASE = 'http://localhost:3001/api';

export async function fetchVillas(): Promise<Villa[]> {
  const res = await fetch(`${API_BASE}/villas`);
  if (!res.ok) throw new Error('Failed to fetch villas');
  return res.json();
}

export async function fetchVillaBySlug(slug: string): Promise<Villa | undefined> {
  try {
    const res = await fetch(`${API_BASE}/villas/${slug}`);
    if (!res.ok) return undefined;
    return res.json();
  } catch {
    return undefined;
  }
}

export async function saveVilla(villa: Villa): Promise<Villa> {
  const res = await fetch(`${API_BASE}/villas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(villa),
  });
  if (!res.ok) throw new Error('Failed to save villa');
  const data = await res.json();
  return data.villa;
}

export async function deleteVilla(id: string): Promise<void> {
  const res = await fetch(`${API_BASE}/villas`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error('Failed to delete villa');
}

export async function getVillaImages(slug: string): Promise<{ main: string | null; details: string[] }> {
  try {
    const res = await fetch(`${API_BASE}/villa-images?slug=${slug}`);
    if (!res.ok) return { main: null, details: [] };
    const data = await res.json();
    // Prepend API_BASE to URLs since they are returned as relative paths like /api/villa-image/...
    // Actually, backend returns `/api/villa-image/...`. We need `http://localhost:3001`
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
  const res = await fetch(`${API_BASE}/villa-images`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    // Strip the backendUrl if needed, or backend can handle it if it expects the exact URL it gave
    body: JSON.stringify({ slug, imageUrl: imageUrl.replace('http://localhost:3001', '') }),
  });
  if (!res.ok) throw new Error('Failed to delete image');
}

export async function uploadVillaImage(slug: string, type: 'main' | 'detail', file: File) {
  const formData = new FormData();
  formData.append('slug', slug);
  formData.append('type', type);
  formData.append('file', file);
  
  const res = await fetch(`${API_BASE}/villa-images`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('Failed to upload image');
  const data = await res.json();
  return data;
}

export function getFullImageUrl(url: string | null): string | null {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `http://localhost:3001${url}`;
}
