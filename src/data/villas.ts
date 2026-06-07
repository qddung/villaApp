import { Villa } from "@/lib/types";
import villasJson from "./villas.json";

export const villas: Villa[] = villasJson as Villa[];

export function getVillaBySlug(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug);
}

export function getFeaturedVillas(): Villa[] {
  return villas.filter((v) => v.featured);
}

export function getVillasByArea(areaSlug: string): Villa[] {
  return villas.filter((v) => v.areaSlug === areaSlug);
}
