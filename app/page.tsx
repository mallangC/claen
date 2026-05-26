import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import HeroSlider from '@/components/HeroSlider'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import CleaningGallerySection from '@/components/CleaningGallerySection'
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
  { num: '01', title: '100% 직영 팀장제 운영', desc: '하청이나 단기 알바 없이, 본사 교육을 수료한 전문 팀장과 대표가 책임지고 현장을 직접 지휘합니다.' },
  { num: '02', title: '독일산 프리미엄 친환경 세제', desc: '눈에 보이지 않는 유해 성분까지 차단하기 위해 인체에 무해한 독일산 안심 세제와 피톤치드로 케어합니다.' },
  { num: '03', title: '구역별 전문 올-탈거 청소', desc: '수납장 서랍, 배수구 트랩, 환풍기 커버 등 분리 가능한 모든 곳을 완전히 탈거하여 사각지대 분진을 박멸합니다.' },
  { num: '04', title: '고성능 전문 장비 시스템', desc: '산업용 고압 세척기, 고온 스팀기, 미세먼지 정밀 흡입기 등 공간과 오염에 맞는 최적의 전문 장비를 투입합니다.' },
  { num: '05', title: '당일 현장 검수 및 무상 A/S', desc: '청소 완료 전 고객님과 함께 현장을 꼼꼼히 검수하며, 미흡한 부분은 그 자리에서 즉시 완벽하게 재케어합니다.' },
  { num: '06', title: '거품 없는 프리미엄 & 전후 리포트', desc: '직영 운영으로 프리미엄 퀄리티를 최저가 수준으로 실현합니다. 작업 전후 디테일한 비교 사진을 실시간 공유하여 완벽한 품질을 눈으로 증명합니다.' },
]

const processSteps = [
  { step: '01', title: '무료 견적 상담', desc: '온라인·유선 접수 후\n현장 조건에 맞춘 단가 안내' },
  { step: '02', title: '예약 확정', desc: '계약금 결제 완료 후\n예약일 확정 및 전담 배정팀 배치' },
  { step: '03', title: '책임 현장 케어', desc: '일정 하루 전 사전 안내 후\n전문 팀장이 투입' },
  { step: '04', title: '청소 완공 검수', desc: '청소완료 후\n고객님 검수 및 잔금 결제' },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 히어로 슬라이더 */}
        <HeroSlider />

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

        {/* 실적 통계 배너 */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/about.png"
              alt="청소 현장"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0a1a2e]/78" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-blue-300 text-base font-semibold mb-3 tracking-wider uppercase">Our Achievement</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">숫자로 증명하는 더퍼스트클린</h2>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {[
                { num: '7년', label: '업력' },
                { num: '2,300건', label: '누적 시공' },
                { num: '5점', label: '평점' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-5xl md:text-6xl font-black text-white mb-3">{stat.num}</p>
                  <div className="w-10 h-0.5 bg-blue-400 mx-auto mb-3" />
                  <p className="text-blue-200 text-base font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 청소 전후 섹션 */}
        <BeforeAfterSection />

        {/* 고객 후기 */}
        <TestimonialSlider />

        {/* 청소 항목 갤러리 */}
        <CleaningGallerySection />

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
                <div key={reason.num} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <span className="text-4xl font-black text-blue-500/30 mb-3 block">{reason.num}</span>
                  <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
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
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">간단한 4단계로 완벽한 청소 서비스를 경험하세요</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((p) => (
                <div key={p.step} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0a3d7a] text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                    {p.step}
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
