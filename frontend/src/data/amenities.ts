import { Amenity } from "@/lib/types";

export const amenities: Amenity[] = [
  { id: "pool", name: "Hồ bơi riêng", icon: "Waves", category: "Tiện nghi ngoài trời" },
  { id: "ocean-view", name: "View biển", icon: "Sunset", category: "View" },
  { id: "garden", name: "Sân vườn", icon: "TreePine", category: "Tiện nghi ngoài trời" },
  { id: "bbq", name: "Khu BBQ", icon: "Flame", category: "Tiện nghi ngoài trời" },
  { id: "wifi", name: "WiFi tốc độ cao", icon: "Wifi", category: "Tiện nghi trong nhà" },
  { id: "ac", name: "Máy lạnh", icon: "Wind", category: "Tiện nghi trong nhà" },
  { id: "kitchen", name: "Bếp đầy đủ", icon: "CookingPot", category: "Tiện nghi trong nhà" },
  { id: "parking", name: "Bãi đỗ xe", icon: "Car", category: "Tiện nghi chung" },
  { id: "security", name: "An ninh 24/7", icon: "Shield", category: "Tiện nghi chung" },
  { id: "karaoke", name: "Phòng karaoke", icon: "Music", category: "Giải trí" },
  { id: "gym", name: "Phòng gym", icon: "Dumbbell", category: "Giải trí" },
  { id: "jacuzzi", name: "Jacuzzi", icon: "Bath", category: "Tiện nghi trong nhà" },
  { id: "tv", name: "Smart TV", icon: "Tv", category: "Tiện nghi trong nhà" },
  { id: "washer", name: "Máy giặt", icon: "WashingMachine", category: "Tiện nghi trong nhà" },
  { id: "elevator", name: "Thang máy", icon: "ArrowUpDown", category: "Tiện nghi chung" },
  { id: "beach-access", name: "Gần biển", icon: "Umbrella", category: "Vị trí" },
  { id: "billiards", name: "Phòng Billiards", icon: "CircleDot", category: "Giải trí" },
  { id: "waterfall-pool", name: "Hồ bơi thác nước", icon: "Droplets", category: "Tiện nghi ngoài trời" },
];

export function getAmenityByIds(ids: string[]): Amenity[] {
  return ids.map((id) => amenities.find((a) => a.id === id)).filter(Boolean) as Amenity[];
}
