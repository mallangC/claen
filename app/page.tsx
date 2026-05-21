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
  { num: '01', title: '10년 이상의 전문성', desc: '풍부한 경험을 바탕으로 어떤 공간도 완벽하게 청소합니다.' },
  { num: '02', title: '친환경 세제 사용', desc: '인체에 무해한 친환경 세제만을 사용하여 안전한 청소를 보장합니다.' },
  { num: '03', title: '전문 장비 보유', desc: '산업용 고압세척기, 전문 청소 장비로 효과적인 청소를 실현합니다.' },
  { num: '04', title: '철저한 사후 관리', desc: '청소 완료 후에도 만족하실 수 있도록 사후 관리를 제공합니다.' },
  { num: '05', title: '합리적인 가격', desc: '무료 현장 견적으로 투명하고 합리적인 가격을 제공합니다.' },
  { num: '06', title: '신속한 서비스', desc: '빠른 예약과 신속한 서비스로 고객의 소중한 시간을 지킵니다.' },
]

const processSteps = [
  { step: '01', title: '견적 문의', desc: '전화, 카톡 또는 온라인으로 간편하게 견적을 요청하세요.' },
  { step: '02', title: '현장 확인', desc: '전문 상담원이 현장을 확인하고 맞춤 견적을 제공합니다.' },
  { step: '03', title: '청소 진행', desc: '전문 팀이 꼼꼼하고 신속하게 청소를 진행합니다.' },
  { step: '04', title: '품질 확인', desc: '청소 완료 후 품질을 확인하고 만족도를 체크합니다.' },
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
        <section className="relative py-20 md:py-28 overflow-hidden">
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
            <div className="text-center mb-14">
              <p className="text-blue-300 text-base font-semibold mb-3 tracking-wider uppercase">Our Achievement</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">숫자로 증명하는 더퍼스트클린</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: '10+', label: '년 업력' },
                { num: '5,000+', label: '누적 시공 건수' },
                { num: '99%', label: '고객 만족도' },
                { num: '24/7', label: '고객 지원' },
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
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
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
