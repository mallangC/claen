import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "더퍼스트클린 | 전문 청소 서비스",
  description: "입주청소, 이사청소, 사무실청소, 건물청소 전문 - 더퍼스트클린",
  keywords: "청소, 입주청소, 이사청소, 사무실청소, 건물청소, 더퍼스트클린",
  openGraph: {
    title: "더퍼스트클린 | 전문 청소 서비스",
    description: "입주청소, 이사청소, 사무실청소, 건물청소 전문 - 더퍼스트클린",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
