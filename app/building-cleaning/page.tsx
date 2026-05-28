import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 'completion',
    href: '/building-cleaning/completion',
    img: '/building-cleaning/completion.jpg',
    title: '준공청소',
    subtitle: '건물 완공 후 입주 준비 청소',
    desc: '건물 신축·증축·리모델링 완료 후 입주를 위한 준공청소를 전문적으로 진행합니다. 건설 과정에서 발생한 분진, 페인트 자국, 시멘트 잔여물 등을 완벽하게 제거합니다.',
    items: [
      '건설 분진 제거',
      '페인트·시멘트 잔여물 제거',
      '유리·창호 청소',
      '바닥재 보호 및 광택',
      '위생도기 청소',
      '계단·복도 청소',
      '지하주차장 청소',
      '옥상·외부 청소',
    ],
  },
  {
    id: 'government',
    href: '/building-cleaning/government',
    img: '/building-cleaning/government.jpg',
    title: '관공서청소',
    subtitle: '공공기관을 위한 전문 청소',
    desc: '관공서, 학교, 도서관 등 공공시설의 청소를 전문적으로 진행합니다. 공공 공간의 특성에 맞는 위생 기준을 준수하며 쾌적한 환경을 만들어 드립니다.',
    items: [
      '청사 내부 전체 청소',
      '민원실 청소',
      '회의실·강당 청소',
      '화장실 위생 관리',
      '엘리베이터 청소',
      '외부 계단·현관 청소',
      '주차장 청소',
      '정기 위생 관리',
    ],
  },
]

const features = [
  { title: '대형 장비 보유', desc: '산업용 고압세척기, 전문 청소 장비로 대형 공간도 효율적으로 처리합니다.' },
  { title: '전문 인력', desc: '청소 전문 교육을 받은 숙련된 인력이 팀을 이루어 작업합니다.' },
  { title: '안전 준수', desc: '고소 작업 등 안전이 필요한 작업은 안전 장비를 착용하고 진행합니다.' },
  { title: '친환경 세제', desc: '환경부 인증 친환경 세제만을 사용하여 안전한 청소를 보장합니다.' },
]

export default function BuildingCleaningPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="건물·기관청소"
          subtitle="준공청소 · 관공서청소"
          breadcrumb={['홈', '건물·기관청소']}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[#1565c0] font-semibold mb-3 tracking-wider uppercase">Building & Institution</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">건물·기관 청소 서비스</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                대형 건물부터 공공기관까지, 규모에 상관없이 완벽하게
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

        {/* 특장점 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">대형 청소 서비스의 강점</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feat) => (
                <div key={feat.title} className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-[#0a3d7a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{feat.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0a3d7a]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">대형 프로젝트 문의</h2>
            <p className="text-blue-200 text-lg mb-8">
              규모가 큰 프로젝트일수록 전문 견적이 필요합니다.<br />
              현장 방문 후 정확한 견적을 제공해 드립니다.
            </p>
            <Link href="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a3d7a] text-lg font-bold rounded-full hover:bg-gray-100 transition-colors">
              무료 견적 받기
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
