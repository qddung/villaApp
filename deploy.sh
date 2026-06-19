#!/bin/bash

# ==============================================================================
# Script tự động Deploy dự án VillaVungTau lên VPS
# Tự động kéo code mới nhất, build lại Frontend, Backend và khởi động lại PM2
# ==============================================================================

# Dừng kịch bản nếu có bất kỳ lỗi nào xảy ra
set -e

echo "============================================="
echo "🚀 BẮT ĐẦU QUÁ TRÌNH DEPLOY CẬP NHẬT CODE"
echo "============================================="

# Bước 2: Kéo code mới nhất từ Github
echo "=> Đang kéo mã nguồn mới nhất từ Github..."
git pull

# Bước 3: Cập nhật Database (Prisma)
echo "=> Đang cập nhật cấu trúc Database..."
cd database
npm install
npx prisma generate
npx prisma migrate deploy
cd ..

# Bước 4: Cập nhật và Build Frontend (React/Vite)
echo "=> Đang cài đặt và Build Frontend..."
cd frontend
npm install
npm run build
cd ..

# Bước 5: Cập nhật và Build Backend (NestJS)
echo "=> Đang cài đặt và Build Backend..."
cd backend
npm install
npm run build
echo "=> Khởi động lại Backend qua PM2..."
# Nếu pm2 chưa chạy tiến trình này thì start, nếu chạy rồi thì restart
pm2 restart villa-backend || pm2 start dist/main.js --name "villa-backend"
pm2 save
cd ..

echo "============================================="
echo "🎉 DEPLOY THÀNH CÔNG!"
echo "Toàn bộ hệ thống đã được nâng cấp lên bản mới nhất."
echo "============================================="
