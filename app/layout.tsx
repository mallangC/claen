import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const BASE_URL = 'https://thefirstclean.kr'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: '더퍼스트클린 | 입주청소 이사청소 사무실청소 전문',
    template: '%s | 더퍼스트클린',
  },
  description: '서울·경기·인천·충청 전문 청소 업체 더퍼스트클린. 입주청소, 이사청소, 사무실청소, 상가청소, 건물청소. 100% 직영 팀장제, 독일산 친환경 세제 사용. 무료 견적 상담.',
  keywords: ['입주청소', '이사청소', '사무실청소', '상가청소', '건물청소', '청소업체', '서울청소', '경기청소', '인천청소', '더퍼스트클린', '친환경청소', '전문청소'],
  authors: [{ name: '더퍼스트클린' }],
  creator: '더퍼스트클린',
  publisher: '더퍼스트클린',
  formatDetection: { telephone: true, email: false, address: true },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: BASE_URL,
    siteName: '더퍼스트클린',
    title: '더퍼스트클린 | 입주청소 이사청소 사무실청소 전문',
    description: '서울·경기·인천·충청 전문 청소 업체. 입주청소, 이사청소, 사무실청소, 건물청소. 100% 직영 팀장제 운영.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: '더퍼스트클린 전문 청소 서비스' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full" data-scroll-behavior="smooth">
      <head>
        <meta name="google-site-verification" content="gwx0k8y9B1YGXW7Klu0Ab2goqjhXlZhNXAOKKkTFwPo" />
        <meta name="naver-site-verification" content="95ad1f3b740a36ab8a9cb8d17c8e2d01052bff77" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
