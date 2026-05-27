import ServicePageTemplate from '@/components/ServicePageTemplate'

const subNavItems = [
  { label: '입주청소', href: '/home-care/move-in' },
  { label: '이사청소', href: '/home-care/move-out' },
  { label: '거주청소', href: '/home-care/residential' },
]

const areas = [
  {
    name: '주방',
    img: '/areas/move-in/kitchen.jpg',
    items: ['싱크대 상·하부장 완전 탈거 청소', '하단 걸레받이 탈거 내부 흡입', '가스레인지/인덕션 주변 오염 제거', '벽면 타일 분진 제거', '수전·싱크볼 정밀 세정 및 발수 광택 마감'],
  },
  {
    name: '욕실',
    img: '/areas/move-in/bathroom.jpg',
    items: ['욕실 벽·바닥 시멘트 분진 멸균 세척', '환풍기 완전 분해 세척', '배수구 트랩 분해 및 공사 오물 세척', '수전·액세서리 미세 물때 스케일링 및 스텐 광택 복원'],
  },
  {
    name: '거실·방',
    img: '/areas/move-in/living-room.jpg',
    items: ['붙박이장·수납 서랍장 전면 탈거 청소', '실내 창문 및 창틀 정밀 흡입', '벽면·천장 미세 먼지 및 몰딩 먼지 털기', '바닥 미세 분진 흡입 및 밀착 살균 세정', '전등갓 분해 및 콘센트·스위치 틈새 케어'],
  },
  {
    name: '현관·베란다',
    img: '/areas/move-in/entrance.jpg',
    items: ['현관 신발장 서랍장 탈거 케어', '베란다 창틀 및 새시 프리미엄 케어', '바닥 타일 전면 습식 워터 케어', '배수구 오물 세척'],
  },
]

const recommendItems = [
  { title: '신축 아파트 입주', desc: '새 아파트 입주 전, 눈에 보이지 않는 미세한 공사 분진과 미세 잔여물까지 완벽 케어' },
  { title: '인테리어·리모델링', desc: '공사 후 남은 도배 풀, 분진 제거로 완벽한 입주 준비' },
  { title: '전세·월세 입주', desc: '오랜 거주 흔적과 찌든 때 제거로 쾌적한 주거 공간 제공 및 세입자 안심 케어' },
  { title: '단독 주택 입주', desc: '다양한 실내 외 오염 제거와 정밀 소독으로 우리가족만의 프라이빗한 공간 완성' },
]

export default function MoveInPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: '입주청소',
        subtitle: '새 집의 시작을 완벽하게 준비합니다',
        breadcrumb: ['홈', '프리미엄 홈케어', '입주청소'],
      }}
      subNavItems={subNavItems}
      intro={{
        label: 'Move-in Cleaning',
        title: '입주청소란?',
        para1:
          '단순한 청소를 넘어, 가족의 건강을 공사 먼지로부터 격리합니다.\n' +
            '입주청소는 단순한 쓸고 닦기가 아닌, 건축 유해 물질을 제거하는 \'디톡스 케어\'입니다. 신축 과정에서 쌓인 미세한 시멘트 가루와 화학 잔여물은 면역력을 떨어뜨리는 주범입니다. 보이지 않는 구석진 틈새까지 완벽하게 찾아내 유해 물질을 전면 제거하고, 쾌적하고 건강한 첫 출발을 선물합니다.',
      }}
      areas={areas}
      extraSection={
        <section className="py-14 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">이런 분께 추천합니다</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recommendItems.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="h-72 bg-linear-to-br from-gray-800 to-[#0a3d7a] rounded-xl mb-4 flex items-center justify-center">
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
        title: '입주청소 견적 문의',
        subtitle: '면적과 상태에 따라 맞춤 견적을 제공해 드립니다',
      }}
    />
  )
}
