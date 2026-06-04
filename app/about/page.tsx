import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '회사소개 | 더퍼스트클린',
  description: '더퍼스트클린 회사 소개. 10년 이상의 청소 전문 업체. 신뢰, 전문성, 안전을 바탕으로 최고의 청소 서비스를 제공합니다.',
  alternates: { canonical: 'https://thefirstclean.kr/about' },
}
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Image from 'next/image'

const values = [
  {
    title: '신뢰',
    desc: '고객과의 약속을 지키고 투명한 서비스를 제공합니다.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: '전문성',
    desc: '10년 이상의 경험으로 쌓인 전문 기술을 바탕으로 최고의 청소 서비스를 제공합니다.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: '안전',
    desc: '친환경 세제와 안전한 청소 방법으로 고객과 환경을 보호합니다.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: '책임',
    desc: '모든 작업에 책임감을 갖고 완벽한 결과물을 제공합니다.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
]


export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="회사소개"
          subtitle="더퍼스트클린은 고객의 공간을 최상의 상태로 관리합니다"
          breadcrumb={['홈', '회사소개']}
          compact
        />

        {/* 회사 소개 본문 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#1565c0] font-semibold mb-3 text-base tracking-wider uppercase">About Us</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  공간의 가치를 완성하는 한 끗, 청결
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    브랜드의 완성은 인테리어가 아니라, 관리된 청결함입니다.
                    아무리 훌륭한 공간도 청결이 유지되지 않으면 그 가치는 빠르게 떨어집니다.
                    반대로, 꾸준히 관리된 공간은 시간이 지날수록 신뢰와 품격을 쌓아갑니다.
                  </p>
                  <p>
                    더퍼스트클린은 단순한 청소를 넘어 공간의 가치와 수명을 높이는 가장 경제적인 투자를 제공합니다.
                    전문 교육을 이수한 청소 인력, 공간별 맞춤 세제와 장비, 그리고 체계적인 품질 관리 시스템으로
                    매 방문마다 일관된 결과를 보장합니다.
                  </p>
                  <p>
                    주거 공간부터 사무실, 상가, 대형 건물까지 —
                    <strong className="text-gray-800"> &#39;더퍼스트 클린&#39;</strong>이 소중한 공간을 매일 아침 새것처럼 리셋합니다.
                  </p>
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/about.png"
                  alt="더퍼스트클린 회사 소개"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 핵심 가치 */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#1565c0] font-semibold mb-3 tracking-wider uppercase">Core Values</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">핵심 가치</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val) => (
                <div key={val.title} className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-[#0a3d7a] rounded-full flex items-center justify-center mx-auto mb-4">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
