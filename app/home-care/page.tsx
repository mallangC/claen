import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 'move-in',
    href: '/home-care/move-in',
    title: '입주청소',
    subtitle: '새 집의 첫 단추, 분진까지 완벽하게',
    desc: '신축 건물 입주 전, 호흡기를 위협하는 미세한 시멘트 가루와 공사 먼지, 페인트 자국, 실리콘 잔여물 등을 흔적 없이 제거합니다. 전문 장비와 독일산 친환경 세제를 사용하여 단순 청소를 넘어 가족의 건강을 위한 청결한 첫 공간을 완성해 드립니다.',
    items: [
      '공사 분진 및 미세먼지 정밀 흡입',
      '주방 싱크대 탈거 청소',
      '친환경 세제 사용 & 탈취 케어',
      '베란다 창틀 및 새시 청소',
      '욕실 전체 타일 분진 제거',
      '틈새 먼지 세정',
    ],
    img: '/home-care/move-in.jpg',
  },
  {
    id: 'move-out',
    href: '/home-care/move-out',
    title: '이사청소',
    subtitle: '전 거주자의 생활 오염 전면 제거',
    desc: '오랜 거주로 인해 집안 곳곳에 쌓인 생활 먼지와 오염 요소를 친환경 세제와 전문 장비로 안전하게 제거합니다. 눈에 보이는 곳은 물론 보이지 않는 수납장 내부까지 밀착 케어하여 가족을 위한 청결하고 건강한 첫 공간을 만들어 드니다.',
    items: [
      '주방 후드 필터 분해 및 주방 가구 정밀 세정',
      '욕실 전체 타일 오염 케어',
      '수납 가구 내부 정밀 소독',
      '실내 전 구역 고질적인 묵은 때 세정',
      '베란다 창틀 및 새시 청소',
      '친환경 세제 사용 & 탈취 케어',
    ],
    img: '/home-care/move-out.jpg',
  },
  {
    id: 'residential',
    href: '/home-care/residential',
    title: '거주청소',
    subtitle: '살고 있는 공간을 새집처럼 복원',
    desc: '가구와 가전, 생활 짐이 있는 상태에서 진행되는 거주청소는 완벽한 기술력과 디테일이 필요합니다. 일상적인 청소로는 해결되지 않는 집안 곳곳의 찌든 때와 사각지대 묵은 먼지를 전용 장비로 안전하게 제거합니다. 주기적인 대청소가 필요할 때, 우리 가족을 위한 완벽한 위생 공간을 다시 찾아드립니다.',
    items: [
      '방치된 생활 쓰레기 분리 및 수거 보조',
      '주방 싱크대 주변 밀착 세정',
      '친환경 세제 사용 & 공간 탈취 케어',
      '가구·가전 배치 상태 그대로 청소',
      '욕실 찌든 물때 및 냄새 박멸',
      '실내 전 구역 생활 먼지 제거',
    ],
    img: '/home-care/residential.jpg',
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
                    <div className="relative h-72 rounded-2xl overflow-hiddenㄷ">
                      <Image src={service.img} alt={service.title} fill className="object-cover" />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="inline-block bg-blue-100 text-[#0a3d7a] text-sm font-semibold px-3 py-1 rounded-full mb-4">
                      {service.title}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{service.subtitle}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.desc}</p>
                    <ul className="flex flex-col gap-2 mb-8">
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
