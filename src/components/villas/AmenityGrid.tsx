import {
  Waves, Sunset, TreePine, Flame, Wifi, Wind, CookingPot, Car,
  Shield, Music, Dumbbell, Bath, Tv, WashingMachine, ArrowUpDown, Umbrella,
} from "lucide-react";
import { getAmenityByIds } from "@/data/amenities";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Waves, Sunset, TreePine, Flame, Wifi, Wind, CookingPot, Car,
  Shield, Music, Dumbbell, Bath, Tv, WashingMachine, ArrowUpDown, Umbrella,
};

interface AmenityGridProps {
  amenityIds: string[];
}

export default function AmenityGrid({ amenityIds }: AmenityGridProps) {
  const items = getAmenityByIds(amenityIds);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((amenity) => {
        const Icon = iconMap[amenity.icon];
        return (
          <div
            key={amenity.id}
            className="flex items-center gap-3 rounded-xl border border-gray-100 px-4 py-3"
          >
            {Icon && <Icon className="h-5 w-5 shrink-0 text-gold" />}
            <span className="text-sm text-gray-700">{amenity.name}</span>
          </div>
        );
      })}
    </div>
  );
}
