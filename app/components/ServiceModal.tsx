"use client";

import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

export default function ServiceModal({
  open,
  onClose,
  title,
  content,
  images = [],
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  images?: string[];
}) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 backdrop-blur-sm bg-black/40"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl  p-6 shadow-2xl border border-gray-200">
          <Dialog.Title className="text-2xl font-bold mb-4">
            {title} 가격 안내
          </Dialog.Title>

          {/* 이미지 슬라이더 */}
          {images.length > 0 && (
            <div className="w-full aspect-video mb-4 relative overflow-hidden rounded">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                modules={[Navigation]}
                className="h-full"
              >
                {images.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative w-full h-auto">
                      <Image
                        src={src}
                        alt={`${title} 서비스 이미지 ${idx + 1}`}
                        width={640}
                        height={360}
                        className="object-contain rounded"
                        priority={idx === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          <p className="text-sm whitespace-pre-line">{content}</p>

          <button
            onClick={onClose}
            className="mt-6 w-full px-4 py-2 bg-pink-800 text-white rounded-md hover:bg-pink-800 transition cursor-pointer"
          >
            닫기
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
