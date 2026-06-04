import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: '호피스·상가 청소 | 사무실청소 상가청소 전문',
  description: '더퍼스트클린 사무실·상가 청소 서비스. 사무실청소, 상가청소, 병원청소 전문. 쾌적한 비즈니스 환경을 만들어드립니다.',
  alternates: { canonical: 'https://thefirstclean.kr/office-cleaning' },
}
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 'office',
    href: '/office-cleaning/office',
    img: '/office-cleaning/office.jpg',
    title: '사무실청소',
    subtitle: '업무 효율을 높이는 스마트 케어',
    desc: '임직원이 오직 업무에만 집중할 수 있도록 쾌적하고 건강한 사무 환경을 구축합니다. 일상적인 정기 청소부터 눈에 보이지 않는 사각지대 대청소까지 기업 맞춤형 솔루션을 제공합니다.',
    items: ['사무용 가구 먼지 제거', '카펫 청소 및 스팀 세척', '유리 파티션 청소', '주방/탕비실 청소', '화장실 위생 관리', '바닥 왁싱 및 광택'],
  },
  {
    id: 'store',
    href: '/office-cleaning/store',
    img: '/office-cleaning/store.jpg',
    title: '상가청소',
    subtitle: '고객의 발길을 이끄는 첫인상, 청결의 완성',
    desc: '매장의 청결도는 브랜드의 가치이자 매출의 시작입니다. 오픈 전 쾌적한 매장 상태를 유지하는 정기 청소부터 개업·준공 청소까지, 업종별 특성에 맞춰 방문하는 고객에게 최고의 경험을 선사합니다.',
    items: ['영업 후 청소 서비스', '쇼윈도 청소', '진열대 먼지 제거', '바닥 청소 및 광택', '간판 및 외관 청소', '냉장·냉동 장비 청소'],
  },
  {
    id: 'medical',
    href: '/office-cleaning/medical',
    img: '/office-cleaning/medical.jpg',
    title: '병·의원 청소',
    subtitle: '감염 예방과 안전을 위한 메디컬 위생 솔루션',
    desc: '대기실, 진료실, 수술실 등 구역별 오염도와 특성을 완벽히 분석하여 관리합니다. 의료 폐기물 관리부터 공조 시스템 필터 청소까지, 보이지 않는 바이러스와 세균까지 격이 다른 위생 관리를 약속드립니다.',
    items: ['의료용 소독제 사용', '대기실·진료실 청소', '수술실 준비 청소', '의료 폐기물 관리', '공조 시스템 필터 청소', '화장실 위생 관리'],
  },
]

export default function OfficeCleaningPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="오피스·상가청소"
          subtitle="사무실청소 · 상가청소 · 병·의원 청소"
          breadcrumb={['홈', '오피스·상가청소']}
          compact
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[#1565c0] font-semibold mb-3 tracking-wider uppercase">Office & Commercial</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">오피스·상가 청소 서비스</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                임직원의 업무 효율을 높이는 쾌적한 사무 공간부터 고객의 발길을 이끄는 청결한 매장까지, <br/>
                비즈니스 공간의 가치를 더하는 맞춤형 정기·종합 청소 솔루션을 제공합니다.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div className={`pt-10 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative h-72 rounded-2xl overflow-hidden">
                      <Image src={service.img} alt={service.title} fill className="object-cover" />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="inline-block bg-blue-100 text-[#0a3d7a] text-sm font-semibold px-3 py-1 rounded-full mb-4">
                      {service.title}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{service.subtitle}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.desc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-gray-700">
                            <svg className="w-5 h-5 text-[#1565c0] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={service.href} className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a3d7a] text-white font-semibold rounded-xl hover:bg-[#083270] transition-colors">
                        자세히 보기
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">정기 계약 할인 혜택</h2>
            <p className="text-gray-600 text-lg mb-8">
              정기 계약 시 월 1회 이상 방문 서비스를 할인된 가격으로 이용하실 수 있습니다.<br />
              자세한 사항은 견적 문의를 통해 안내해 드립니다.
            </p>
            <Link href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a3d7a] text-white text-lg font-bold rounded-full hover:bg-[#083270] transition-colors">
              무료 견적 받기
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
