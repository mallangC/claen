import Header from '@/components/Header'
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
    subtitle: '쾌적한 업무 환경 조성',
    desc: '직원들이 쾌적하게 일할 수 있는 사무 환경을 만들어 드립니다. 정기 청소부터 대청소까지 사무실 특성에 맞는 맞춤 청소 서비스를 제공합니다.',
    items: ['사무용 가구 먼지 제거', '카펫 청소 및 스팀 세척', '유리 파티션 청소', '주방/탕비실 청소', '화장실 위생 관리', '바닥 왁싱 및 광택'],
  },
  {
    id: 'store',
    href: '/office-cleaning/store',
    img: '/office-cleaning/store.jpg',
    title: '상가청소',
    subtitle: '고객을 맞이하는 깨끗한 공간',
    desc: '고객의 첫인상을 결정하는 상가 공간을 항상 청결하게 유지합니다. 개업 청소부터 정기 청소까지 상가 운영에 맞춘 서비스를 제공합니다.',
    items: ['영업 후 청소 서비스', '쇼윈도 청소', '진열대 먼지 제거', '바닥 청소 및 광택', '간판 및 외관 청소', '냉장·냉동 장비 청소'],
  },
  {
    id: 'medical',
    href: '/office-cleaning/medical',
    img: '/office-cleaning/medical.jpg',
    title: '병·의원 청소',
    subtitle: '위생이 최우선인 의료 공간',
    desc: '의료 환경의 특수성을 이해하는 전문 팀이 병원 및 의원의 위생 관리를 담당합니다. 의료용 소독제를 사용한 철저한 위생 관리로 감염 예방에 앞장섭니다.',
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
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[#1565c0] font-semibold mb-3 tracking-wider uppercase">Office & Commercial</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">오피스·상가 청소 서비스</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                비즈니스 공간의 청결은 기업의 이미지와 직결됩니다
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
