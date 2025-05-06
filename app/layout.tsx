import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "발로란트 대리 | 랭크업 보장 | 러쉬팀 RushTeam",
  description:
    "러쉬팀은 발로란트 대리, 듀오, 강의 서비스를 전문으로 제공하며 높은 승률과 철저한 보안, 실력자 매칭을 보장합니다.",
  keywords: [
    "발로란트 대리",
    "발로란트 듀오",
    "발로란트 강의",
    "발로란트 티어업",
    "발로란트 부스터",
    "발로란트 랭크업",
    "러쉬팀",
    "RushTeam",
    "발로란트 대리 사이트",
    "발로 대리",
    "발로란트 대리기사",
    "발로란트 티어"
  ],
  authors: [{ name: "RushTeam", url: "https://러쉬팀.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "발로란트 대리 | 러쉬팀 RushTeam",
    description:
      "발로란트 승률 최상위 대리, 듀오, 코칭을 제공하는 러쉬팀. 안전하고 빠른 서비스로 티어를 올려보세요.",
    url: "https://러쉬팀.com",
    siteName: "러쉬팀",
    images: [
      {
        url: "/images/001.png",
        width: 1280,
        height: 720,
        alt: "발로란트 대리 서비스 | 러쉬팀",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "러쉬팀 | 발로란트 대리 전문",
    description:
      "안전하고 빠른 발로란트 대리 서비스. 듀오, 코칭까지 실력자 매칭!",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
