"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";

import Section from "./components/Section";
import AccordionItem from "./components/AccordionItem";
import ServiceModal from "./components/ServiceModal";

const QA_ITEMS = [
  {
    question: "러쉬팀 소개",
    answer:
      "러쉬팀은 발로란트 전문 레디언트 기사님들로 구성된 프리미엄 대리·듀오·코칭 팀으로, 빠르고 안전하게 원하는 티어 달성을 도와드립니다.",
  },
  {
    question: "발로란트 대리는 어떤 서비스인가요?",
    answer:
      "고객님의 계정을 전문 레디언트 기사님이 직접 플레이하여 목표한 티어까지 빠르게 승급시켜드리는 서비스입니다.",
  },
  {
    question: "발로란트 듀오는 어떤 서비스인가요?",
    answer:
      "고객님과 러쉬팀 소속 레디언트 기사님이 함께 플레이하여 승률을 높이고, 게임을 즐기며 원하는 티어로 올라가는 서비스입니다.",
  },
  {
    question: "안전한가요?",
    answer:
      "러쉬팀의 모든 서비스는 100% 수작업으로 이루어지며, VPN 사용 및 보안 조치를 통해 고객님의 계정을 안전하게 보호하고 있습니다.",
  },
  {
    question: "작업 시간은 어느정도 소요되나요?",
    answer:
      "요청하신 티어와 현재 계정의 MMR 상태에 따라 작업 시간이 달라질 수 있지만 최대한 빨리 진행해드립니다다.",
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

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

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

      <div className="sr-only">
        <article>
          <h1>발로란트 대리 서비스, 왜 러쉬팀이 선택받는가?</h1>

          <section>
            <h2>발로란트 랭크 상승, 혼자만의 싸움이 아닙니다</h2>
            <p>
              발로란트는 협업과 전략이 핵심인 FPS 게임입니다. 개인 실력만으로는
              일정 랭크 이상 상승이 쉽지 않으며, 이러한 경우 발로란트 대리
              서비스가 큰 도움이 됩니다.
            </p>
          </section>

          <section>
            <h2>러쉬팀, 신뢰와 실력으로 검증된 대리 서비스</h2>
            <p>
              러쉬팀은 다년간의 경험과 축적된 노하우를 통해 안전하고 신뢰할 수
              있는 서비스를 제공합니다.
            </p>
            <h3>전문적인 대리 진행</h3>
            <p>
              상위 랭크를 유지하는 전문 플레이어들이 직접 대리를 수행하여 빠르고
              확실하게 원하는 랭크로 올려드립니다.
            </p>

            <h3>안전한 계정 관리</h3>
            <p>
              러쉬팀은 계정 보안을 최우선으로 하며, 고객의 개인정보 보호를
              철저히 관리합니다.
            </p>

            <h3>투명한 진행 과정</h3>
            <p>
              모든 대리 과정은 실시간으로 고객에게 투명하게 공유되어 믿고 맡길
              수 있습니다.
            </p>
          </section>

          <section>
            <h2>발로란트 대리, 어떤 경우에 필요할까?</h2>
            <ul>
              <li>
                <strong>시간 부족:</strong> 일상에서 충분한 플레이 시간을
                확보하기 어려울 때
              </li>
              <li>
                <strong>실력 향상:</strong> 높은 티어에서 플레이하며 게임 실력을
                향상시키고자 할 때
              </li>
              <li>
                <strong>친구와의 플레이:</strong> 친구들과의 플레이에서 더 좋은
                성과를 얻고 싶을 때
              </li>
            </ul>
          </section>

          <section>
            <h2>러쉬팀을 선택해야 하는 이유</h2>
            <ul>
              <li>오랜 경험과 전문성</li>
              <li>상위 랭크 전문 플레이어 구성</li>
              <li>높은 고객 만족도와 재이용률</li>
            </ul>
          </section>

          <section>
            <h2>결론: 발로란트 대리, 러쉬팀과 함께라면 걱정 없습니다</h2>
            <p>
              발로란트 랭크 상승의 고민, 이제 러쉬팀과 함께 해결하세요.
              전문적이고 안전한 서비스로 확실한 랭크 상승을 경험할 수 있습니다.
            </p>
          </section>

          <footer>
            <p>
              지금 바로{" "}
              <a href="https://playvalorant.com/ko-kr/">
                러쉬팀 발로란트 대리 서비스
              </a>
              를 방문하여 자세한 내용을 확인해보세요!
            </p>
          </footer>
        </article>
      </div>

      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel
        modules={[Mousewheel]}
        className="h-screen w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => {
          if (swiperRef.current) {
            swiperRef.current.swiper = swiper;
          }
        }}
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

      {/* ✅ 동그라미 인디케이터 */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => swiperRef.current?.swiper.slideTo(i)}
            title={`섹션 ${i + 1} 이동`}
            aria-label={`섹션 ${i + 1}로 이동`}
            className={`w-3 h-3 rounded-full border transition ${
              activeIndex === i ? "bg-white" : "bg-transparent border-white/50"
            }`}
          />
        ))}
      </div>

      {/* ✅ 서비스 모달 */}
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
