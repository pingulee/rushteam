"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";

import Section from "./components/Section";
import AccordionItem from "./components/AccordionItem";
import ServiceModal from "./components/ServiceModal";

const QA_ITEMS = [
  {
    question: "대리는 얼마나 걸리나요?",
    answer:
      "보통 하루 3~5승 기준이며, 티어와 MMR에 따라 다소 차이가 있을 수 있습니다.",
  },
  {
    question: "강의는 어떻게 진행되나요?",
    answer: "디스코드를 통해 1:1로 레디언트 강사님과 실시간으로 진행됩니다.",
  },
  {
    question: "안전한가요?",
    answer:
      "러쉬팀은 100% 수동 플레이를 기반으로 하며, 고객 계정 보호를 최우선으로 합니다.",
  },
];

const SERVICES = [
  {
    title: "발로란트 대리",
    desc: "1티어씩 승급을 원하시는 분들께 추천드리는 서비스입니다.",
    price: `MMR에 따라 추가금이 발생할 수 있습니다.`,
    images: [
      "/images/발로란트_대리_가격_1.webp",
      "/images/발로란트_대리_가격_2.webp",
      "/images/발로란트_대리_가격_3.webp",
      "/images/발로란트_대리_가격_4.webp",
      "/images/발로란트_대리_가격_5.webp",
    ],
  },
  {
    title: "발로란트 판수제",
    desc: "러쉬팀 레디언트 기사님들이 듀오를 제공하는 서비스입니다.",
    price: `MMR에 따라 추가금이 발생할 수 있습니다.`,
    images: [
      "/images/발로란트_듀오_가격_1.webp",
      "/images/발로란트_듀오_가격_2.webp",
      "/images/발로란트_듀오_가격_3.webp",
      "/images/발로란트_듀오_가격_4.webp",
    ],
  },
  {
    title: "발로란트 티어제",
    desc: "2티어 이상 승급을 원하실 때 메리트가 있는 서비스입니다.",
    price: `MMR에 따라 추가금이 발생할 수 있습니다.`,
    images: [
      "/images/티어제_1.webp",
      "/images/티어제_2.webp",
      "/images/티어제_3.webp",
    ],
  },
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    desc: string;
    price: string;
    images?: string[];
  } | null>(null);

  const slides = [
    {
      content: (
        <>
          <h1 className="text-5xl font-bold mb-4">러쉬팀</h1>
          <p className="text-lg max-w-xl text-center">
            발로란트 대리/듀오/코칭 서비스를 가장 신속하고 정확하게 제공합니다.
            <br />
            발로란트 순위 상승은 러쉬팀과 함께하세요.
          </p>
          <Link
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-6 py-3 bg-white text-pink-800 rounded-full font-medium hover:bg-gray-100 transition"
          >
            문의하기
          </Link>
        </>
      ),
    },
    {
      content: (
        <>
          <h2 className="text-4xl font-bold mb-8">제공 서비스</h2>
          <div className="flex flex-col gap-6 max-w-md w-full text-center">
            {SERVICES.map((item) => (
              <button
                key={item.title}
                onClick={() => setSelectedService(item)}
                className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ease-in-out 
                 bg-white/80 hover:bg-white hover:scale-[1.02] text-left w-full cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </button>
            ))}
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            자주 묻는 질문 (Q/A)
          </h2>
          <div className="max-w-2xl w-full mx-auto space-y-4">
            {QA_ITEMS.map(({ question, answer }, idx) => (
              <AccordionItem key={idx} question={question} answer={answer} />
            ))}
          </div>
        </>
      ),
    },
    {
      content: (
        <>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">문의하기</h2>
          <p className="text-center max-w-md mb-4 text-gray-300">
            기사/강사 지원이나 기타 문의사항이 있다면 아래 카카오톡 ID를
            친구추가 하여 연락주세요.
          </p>
          <Link
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-6 py-3 bg-white text-pink-800 rounded-full font-medium hover:bg-gray-100 transition"
          >
            rushteam
          </Link>
        </>
      ),
    },
  ];

  return (
    <>
      {/* ✅ 고정된 배경 이미지 */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/bg-1.webp"
          alt="고정 배경"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel
        modules={[Mousewheel]}
        className="h-screen w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            className="!h-screen flex items-center justify-center px-4 text-white text-center"
          >
            <Section className="relative z-10">{slide.content}</Section>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedService && (
        <ServiceModal
          open={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          content={selectedService.price}
          images={selectedService.images}
        />
      )}
    </>
  );
}
