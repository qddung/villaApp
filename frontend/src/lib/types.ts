export interface VillaBasic {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  area: string;
  areaSlug: string;
  address: string;
  images: VillaImageInfo[]; // Will primarily contain the main image for lists
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  size: number; // m²
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  amenities: string[];
}

export interface Villa extends VillaBasic {
  description: string;
  priceWeekend: number;
  priceHoliday: number;
  highlights: string[];
  reviews: Review[];
  rules: VillaRules;
  coordinates: { lat: number; lng: number };
}

export interface VillaImageInfo {
  id: string;
  url: string;
  isMain: boolean;
  tag?: 'new' | 'delete';
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
}

export interface VillaRules {
  checkIn?: string;
  checkOut?: string;
  policies: string[];
}

export interface Area {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  villaCount: number;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  category: string;
}

export interface Testimonial {
  id: string;
  author: string;
  avatar: string;
  location: string;
  rating: number;
  comment: string;
  villaName: string;
}

export interface BookingDetails {
  villaId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalNights: number;
  pricePerNight: number;
  subtotal: number;
  serviceFee: number;
  total: number;
  priceAtBooking?: number;
  bookingType?: "APP" | "ZALO";
  extras: BookingExtra[];
}

export interface BookingExtra {
  id: string;
  name: string;
  price: number;
  selected: boolean;
}

export interface SearchFilters {
  area?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  amenities?: string[];
  guests?: number;
  sortBy?: "price-asc" | "price-desc" | "rating" | "newest";
}

export interface PriceRange {
  label: string;
  min: number;
  max: number;
}

export interface AreaOption {
  slug: string;
  name: string;
  villaCount: number;
}

export interface FilterOptions {
  areas: AreaOption[];
  amenities: string[];
  priceRanges: PriceRange[];
  bedroomOptions: number[];
}
