"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Grid2x2 } from "lucide-react";

interface VillaGalleryProps {
  images: string[];
  name: string;
}

export default function VillaGallery({ images, name }: VillaGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const prev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <>
      {/* Grid layout */}
      <div className="relative grid grid-cols-1 gap-2 overflow-hidden rounded-2xl md:grid-cols-4 md:grid-rows-2">
        {/* Main image */}
        <div
          className="relative col-span-1 cursor-pointer md:col-span-2 md:row-span-2"
          onClick={() => openLightbox(0)}
        >
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
            <Image
              src={images[0]}
              alt={`${name} - Ảnh chính`}
              fill
              className="object-cover transition-transform hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Side images */}
        {images.slice(1, 5).map((img, i) => (
          <div
            key={i}
            className="relative hidden cursor-pointer md:block"
            onClick={() => openLightbox(i + 1)}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={img}
                alt={`${name} - Ảnh ${i + 2}`}
                fill
                className="object-cover transition-transform hover:scale-[1.02]"
                sizes="25vw"
              />
            </div>
          </div>
        ))}

        {/* Show all button */}
        <button
          onClick={() => openLightbox(0)}
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        >
          <Grid2x2 className="h-4 w-4" />
          Xem tất cả {images.length} ảnh
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative h-[80vh] w-[90vw] max-w-5xl">
            <Image
              src={images[activeIndex]}
              alt={`${name} - Ảnh ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <button
            onClick={next}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-6 text-sm text-white/60">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
