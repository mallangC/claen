import ServicePageTemplate from '@/components/ServicePageTemplate'

const subNavItems = [
  { label: '입주청소', href: '/home-care/move-in' },
  { label: '이사청소', href: '/home-care/move-out' },
  { label: '거주청소', href: '/home-care/residential' },
]

const areas = [
  { name: '주방', img: '[ 주방 청소 이미지 ]', items: ['찌든 기름때 제거', '레인지후드 청소', '싱크대 배수구 청소', '타일 줄눈 청소', '가스레인지 분해 청소'] },
  { name: '욕실', img: '[ 욕실 청소 이미지 ]', items: ['곰팡이 제거', '변기 세척 및 소독', '욕실 전체 스케일 제거', '실리콘 청소', '환풍기 청소'] },
  { name: '거실·방', img: '[ 거실·방 청소 이미지 ]', items: ['바닥 왁싱', '창문·창틀 청소', '붙박이장 내부', '도배 후 이물질 제거', '에어컨 필터 청소'] },
  { name: '현관·베란다', img: '[ 현관·베란다 청소 이미지 ]', items: ['베란다 바닥 청소', '새시 프레임 청소', '배수구 청소', '신발장 내부', '천장 거미줄 제거'] },
]

const recommendItems = [
  { title: '이사 나가는 분', desc: '보증금 반환을 위한 원상복구 청소' },
  { title: '이사 들어오는 분', desc: '이전 세입자의 오염 제거 후 새 출발' },
  { title: '집주인·임대인', desc: '공실 청소로 새 세입자 맞이 준비' },
  { title: '도배 후 청소', desc: '도배·인테리어 후 잔여물 정리' },
]

export default function MoveOutPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: '이사청소',
        subtitle: '이사 전·후 묵은 오염을 깨끗하게 해결합니다',
        breadcrumb: [],
        imageDesc: '이사청소 현장 이미지',
      }}
      subNavItems={subNavItems}
      intro={{
        label: 'Move-out Cleaning',
        title: '이사청소란?',
        para1: '오랜 거주로 쌓인 묵은 때, 기름때, 곰팡이 등을 전문 장비와 약품으로 말끔하게 제거합니다. 이사 나가기 전 원상복구 청소, 이사 들어오기 전 청소 모두 가능합니다.',
        para2: '보증금 반환 문제로 스트레스받지 마세요. 전문 청소로 깔끔하게 마무리해 드립니다.',
      }}
      areas={areas}
      extraSection={
        <section className="py-14 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">이런 분께 추천합니다</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recommendItems.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="h-72 bg-gradient-to-br from-gray-800 to-[#0a3d7a] rounded-xl mb-4 flex items-center justify-center">
                    <p className="text-gray-400 text-xs px-2">[ {item.title} 이미지 ]</p>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
      cta={{
        title: '이사청소 견적 문의',
        subtitle: '면적과 오염 상태에 따라 맞춤 견적을 제공해 드립니다',
      }}
    />
  )
}
