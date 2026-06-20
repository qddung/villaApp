export enum AmenityCategory {
  INDOOR = 1,
  OUTDOOR = 2,
  ENTERTAINMENT = 3,
  GENERAL = 4,
  LOCATION = 5,
  OTHER = 6
}

export const AmenityCategoryDescriptions: Record<number, string> = {
  [AmenityCategory.INDOOR]: "Tiện nghi trong nhà",
  [AmenityCategory.OUTDOOR]: "Tiện nghi ngoài trời",
  [AmenityCategory.ENTERTAINMENT]: "Giải trí",
  [AmenityCategory.GENERAL]: "Tiện nghi chung",
  [AmenityCategory.LOCATION]: "Vị trí",
  [AmenityCategory.OTHER]: "Khác",
};
