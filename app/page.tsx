import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '더퍼스트클린 | 입주청소 이사청소 사무실청소 건물청소 전문',
  description: '서울·경기·인천·충청 전문 청소 업체 더퍼스트클린. 입주청소, 이사청소, 사무실청소, 상가청소, 건물청소. 100% 직영 팀장제, 독일산 친환경 세제. 지금 무료 견적 받으세요.',
  alternates: { canonical: 'https://thefirstclean.kr' },
}
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import HeroVideo from '@/components/HeroVideo'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import TestimonialSlider from '@/components/TestimonialSlider'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    icon: '🏠',
    title: '프리미엄 홈케어',
    items: ['입주청소', '이사청소', '거주청소'],
    href: '/home-care',
    desc: '새로운 공간의 시작을 완벽하게. 전문 장비와 친환경 세제로 구석구석 청소합니다.',
    img: '/services/home-care.jpg',
  },
  {
    icon: '🏢',
    title: '오피스·상가청소',
    items: ['사무실청소', '상가청소', '병·의원 청소'],
    href: '/office-cleaning',
    desc: '비즈니스 공간의 청결은 기업 이미지와 직결됩니다. 전문 팀이 관리합니다.',
    img: '/services/office-cleaning.jpg',
  },
  {
    icon: '🏗️',
    title: '건물·기관청소',
    items: ['준공청소', '관공서청소'],
    href: '/building-cleaning',
    desc: '대형 건물부터 공공기관까지, 규모와 상관없이 완벽한 청소 서비스를 제공합니다.',
    img: '/services/building-cleaning.jpg',
  },
]

const reasons = [
  { title: '100% 직영 팀장제 운영', desc: '하청이나 단기 알바 없이, 본사 교육을 수료한 전문 팀장과 대표가 책임지고 현장을 직접 지휘합니다.', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { title: '독일산 프리미엄 친환경 세제', desc: '눈에 보이지 않는 유해 성분까지 차단하기 위해 인체에 무해한 독일산 안심 세제와 피톤치드로 케어합니다.', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { title: '구역별 전문 올-탈거 청소', desc: '수납장 서랍, 배수구 트랩, 환풍기 커버 등 분리 가능한 모든 곳을 완전히 탈거하여 사각지대 분진을 박멸합니다.', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' },
  { title: '고성능 전문 장비 시스템', desc: '산업용 고압 세척기, 고온 스팀기, 미세먼지 정밀 흡입기 등 공간과 오염에 맞는 최적의 전문 장비를 투입합니다.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: '당일 현장 검수 및 무상 A/S', desc: '청소 완료 전 고객님과 함께 현장을 꼼꼼히 검수하며, 미흡한 부분은 그 자리에서 즉시 완벽하게 재케어합니다.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { title: '거품 없는 프리미엄 & 전후 리포트', desc: '직영 운영으로 프리미엄 퀄리티를 최저가 수준으로 실현합니다. 작업 전후 디테일한 비교 사진을 실시간 공유하여 완벽한 품질을 눈으로 증명합니다.', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
]

const processSteps = [
  { icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z', title: '무료 견적 상담', desc: '온라인·유선 접수 후\n현장 조건에 맞춘 단가 안내' },
  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', title: '예약 확정', desc: '계약금 결제 완료 후\n예약일 확정 및 전담 배정팀 배치' },
  { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', title: '하루 전 안심 해피콜', desc: '담당 팀장이 일정과 과정 안내\n요청사항과 특이사항 미리 체크' },
  { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', title: '책임 현장 케어', desc: '전문 팀장 직접 투입\n구역별 체계적인 청소 진행' },
  { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: '청소 완공 검수', desc: '청소완료 후\n고객님 검수 및 잔금 결제' },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 히어로 슬라이더 */}
        <HeroVideo />

        {/* 고객 공감 + 신뢰 섹션 */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-5 leading-tight">
                믿을만한 청소업체,<br /><span className="text-[#0a3d7a]">찾고 계신가요?</span>
              </h2>
              <p className="text-gray-500 text-xl md:text-2xl">여러 청소 업체 비교하는 데 지치셨죠?</p>
            </div>

            {/* 페인 포인트 3가지 - 말풍선 대화 형식 */}
            <div className="flex flex-col gap-10 mb-14 max-w-3xl mx-auto">
              {[
                { emoji: '😩', text: '업체마다 견적이 다 달라요... 어딜 믿어야 할지 모르겠어요', side: 'left' },
                { emoji: '😰', text: '청소 끝났다고 해서 봤더니 여기저기 그대로더라고요', side: 'right' },
                { emoji: '😤', text: '하자가 있어서 연락했는데 전화도 안 받고... 진짜 너무해요', side: 'left' },
              ].map((item) => (
                <div key={item.text} className={`flex items-center gap-6 ${item.side === 'right' ? 'flex-row-reverse' : ''}`}>
                  <span className="text-7xl shrink-0">{item.emoji}</span>
                  <div className={`relative px-10 py-8 rounded-2xl shadow-sm ${
                    item.side === 'left'
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-[#0a3d7a] text-white'
                  }`}>
                    <p className="text-2xl font-semibold leading-relaxed">{item.text}</p>
                    {item.side === 'left' ? (
                      <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-6 h-10 bg-gray-100" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 50%)'}} />
                    ) : (
                      <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-6 h-10 bg-[#0a3d7a]" style={{clipPath: 'polygon(0 0, 0 100%, 100% 50%)'}} />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 솔루션 + 신뢰 지표 */}
            <div className="bg-[#0a3d7a] rounded-3xl px-8 py-14 text-white text-center">
              <p className="text-blue-200 text-base font-semibold tracking-widest uppercase mb-4">Solution</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-12">그 고민, 더퍼스트클린이 해결합니다</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { num: '2,300+', label: '누적 시공 건수' },
                  { num: '100%', label: '고객 만족도' },
                  { num: '87%+', label: '재이용률' },
                  { num: '100%', label: '당일 검수 보장' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-5xl md:text-6xl font-black text-white mb-2">{stat.num}</p>
                    <p className="text-blue-200 text-base md:text-lg">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 서비스 소개 섹션 */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[#1565c0] text-base font-semibold mb-3 tracking-wider uppercase">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">전문 청소 서비스</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                더퍼스트클린은 다양한 공간에 맞춤형 청소 서비스를 제공합니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0a3d7a] transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {service.items.map((item) => (
                        <span key={item} className="text-xs bg-blue-50 text-[#1565c0] px-2.5 py-1 rounded-full font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                    <div className="mt-4 flex items-center text-[#0a3d7a] font-semibold text-sm gap-2 group-hover:gap-3 transition-all">
                      <span>자세히 보기</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 실적 통계 배너 - 숨김 */}

        {/* 청소 전후 섹션 */}
        <BeforeAfterSection />

        {/* 고객 후기 */}
        <TestimonialSlider />

        {/* 청소 항목 갤러리 - 숨김 */}

        {/* 왜 더퍼스트클린인가 */}
        <section className="py-16 md:py-24 bg-[#0a1a2e] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-blue-400 text-base font-semibold mb-3 tracking-wider uppercase">Why First Clean</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">더퍼스트클린을 선택하는 이유</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                고객 만족을 최우선으로 생각하는 더퍼스트클린만의 차별화된 서비스
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl min-h-[280px] flex flex-col items-center text-center p-8 border-t-4 border-[#1565c0]">
                  <div className="w-16 h-16 rounded-full bg-[#1565c0] flex items-center justify-center mb-5">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 진행 프로세스 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[#1565c0] text-base font-semibold mb-3 tracking-wider uppercase">Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">서비스 진행 과정</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">간단한 5단계로 완벽한 청소 서비스를 경험하세요</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((p) => (
                <div key={p.title} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0a3d7a] text-white flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA 배너 */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#0a3d7a] to-[#1565c0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">지금 바로 무료 견적을 받아보세요</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">전화 한 통으로 전문 상담원이 맞춤 견적을 안내해 드립니다</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="px-8 py-4 bg-white text-[#0a3d7a] text-lg font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                온라인 견적 문의
              </Link>
              <a href="tel:01012345678" className="px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white/10 transition-colors">
                전화 상담하기
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
