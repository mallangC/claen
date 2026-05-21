import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

const services = [
  {
    id: 'move-in',
    href: '/home-care/move-in',
    title: '입주청소',
    subtitle: '새 집, 완벽하게 시작하세요',
    desc: '새 아파트나 빌라에 입주 전 건설 과정에서 발생한 먼지, 페인트 자국, 실리콘 잔여물 등을 완벽하게 제거합니다. 전문 장비와 친환경 세제로 새 집의 모든 공간을 청결하게 준비해 드립니다.',
    items: [
      '주방 후드, 레인지 상세 청소',
      '욕실 줄눈, 실리콘 청소',
      '베란다 새시 청소',
      '전등, 스위치 청소',
      '붙박이 수납장 내부 청소',
      '바닥 왁싱 및 광택',
    ],
    imageDesc: '입주청소 전/후 비교 이미지',
  },
  {
    id: 'move-out',
    href: '/home-care/move-out',
    title: '이사청소',
    subtitle: '이사 전후 완벽한 청소',
    desc: '오래 살던 집의 이사 전 청소 또는 새로 이사하는 집의 이사 후 청소를 전문적으로 진행합니다. 생활하면서 쌓인 묵은 때와 오염을 완벽하게 제거합니다.',
    items: [
      '에어컨 필터 및 내부 청소',
      '주방 찌든 때 제거',
      '화장실 곰팡이 제거',
      '발코니 청소',
      '창문 내외부 청소',
      '도배 후 청소 가능',
    ],
    imageDesc: '이사청소 작업 현장 이미지',
  },
  {
    id: 'residential',
    href: '/home-care/residential',
    title: '거주청소',
    subtitle: '정기적인 청결 관리',
    desc: '바쁜 일상 속에서 관리하기 힘든 집안 구석구석을 전문가가 청소해 드립니다. 주 1회, 격주, 월 1회 등 원하시는 주기로 정기 청소 서비스를 이용하실 수 있습니다.',
    items: [
      '거실, 방 청소기 및 물걸레질',
      '주방 청소 및 싱크대 관리',
      '욕실 청소 및 소독',
      '유리창 청소',
      '먼지털이 및 청소',
      '쓰레기 처리',
    ],
    imageDesc: '거주청소 서비스 이미지',
  },
]

export default function HomeCarePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="프리미엄 홈케어"
          subtitle="입주청소 · 이사청소 · 거주청소"
          breadcrumb={['홈', '프리미엄 홈케어']}
          imageDesc="홈케어 서비스 대표 이미지"
        />

        {/* 서비스 목록 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[#1565c0] font-semibold mb-3 tracking-wider uppercase">Home Care Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">홈케어 서비스</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                가정의 모든 청소 필요를 전문가가 책임집니다
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="h-72 bg-gradient-to-br from-gray-900 to-[#0a3d7a] rounded-2xl flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <p className="text-gray-400 text-sm mb-2">[ {service.imageDesc} ]</p>
                        <p className="text-xl font-bold">{service.title}</p>
                      </div>
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
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a3d7a] text-white font-semibold rounded-xl hover:bg-[#083270] transition-colors"
                    >
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

        {/* 가격 안내 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">가격 안내</h2>
            <p className="text-gray-600 text-lg mb-8">
              청소 비용은 면적, 오염 상태, 서비스 종류에 따라 달라집니다.<br />
              정확한 견적은 현장 확인 후 안내해 드립니다.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a3d7a] text-white text-lg font-bold rounded-full hover:bg-[#083270] transition-colors"
            >
              무료 견적 받기
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
