-- Seed Amenities
INSERT INTO "amenities" ("id", "name", "icon", "category") VALUES
('pool', 'Hồ bơi riêng', 'Waves', 'Tiện nghi ngoài trời'),
('ocean-view', 'View biển', 'Sunset', 'View'),
('garden', 'Sân vườn', 'TreePine', 'Tiện nghi ngoài trời'),
('bbq', 'Khu BBQ', 'Flame', 'Tiện nghi ngoài trời'),
('wifi', 'WiFi tốc độ cao', 'Wifi', 'Tiện nghi trong nhà'),
('ac', 'Máy lạnh', 'Wind', 'Tiện nghi trong nhà'),
('kitchen', 'Bếp đầy đủ', 'CookingPot', 'Tiện nghi trong nhà'),
('parking', 'Bãi đỗ xe', 'Car', 'Tiện nghi chung'),
('security', 'An ninh 24/7', 'Shield', 'Tiện nghi chung'),
('karaoke', 'Phòng karaoke', 'Music', 'Giải trí'),
('gym', 'Phòng gym', 'Dumbbell', 'Giải trí'),
('jacuzzi', 'Jacuzzi', 'Bath', 'Tiện nghi trong nhà'),
('tv', 'Smart TV', 'Tv', 'Tiện nghi trong nhà'),
('washer', 'Máy giặt', 'WashingMachine', 'Tiện nghi trong nhà'),
('elevator', 'Thang máy', 'ArrowUpDown', 'Tiện nghi chung'),
('beach-access', 'Gần biển', 'Umbrella', 'Vị trí'),
('billiards', 'Phòng Billiards', 'CircleDot', 'Giải trí'),
('waterfall-pool', 'Hồ bơi thác nước', 'Droplets', 'Tiện nghi ngoài trời')
ON CONFLICT ("id") DO NOTHING;

-- Seed default Settings if no settings exist
INSERT INTO "settings" ("id", "siteName", "heroTitle", "heroHighlight", "heroDescription", "createdAt", "updatedAt")
SELECT 
  gen_random_uuid(), 
  'TungLuongVilla', 
  'Villa Căn Hộ Cao Cấp', 
  'Tại Vũng Tàu', 
  'Khám phá bộ sưu tập villa được chọn lọc kỹ lưỡng với hồ bơi riêng, view biển tuyệt đẹp và dịch vụ 24/7',
  NOW(), 
  NOW()
WHERE NOT EXISTS (SELECT 1 FROM "settings");