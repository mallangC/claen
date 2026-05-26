import ServicePageTemplate from '@/components/ServicePageTemplate'

const subNavItems = [
  { label: '입주청소', href: '/home-care/move-in' },
  { label: '이사청소', href: '/home-care/move-out' },
  { label: '거주청소', href: '/home-care/residential' },
]

const areas = [
  { name: '주방', img: '/areas/move-out/kitchen.jpg', items: ['레인지후드 필터 분해 및 주방 가구 세정', '하단 걸레받이 탈거 및 내부 먼지 강력 흡입', '싱크대 상·하부장 분리 내외부 생활 오염 정밀 케어', '쿡탑 주변 찌든 오염 및 벽면 타일 유분기 정밀 제거', '수전·싱크볼 고온 세정 및 배수구 유해 세균 살균 소독'] },
  { name: '욕실', img: '/areas/move-out/bathroom.jpg', items: ['욕실 전체 타일 세정 벽·바닥 누적 오염 밀착 케어', '환풍기 커버 탈거 및 내부 누적 먼지 흡입 세척', '하수구 배수구 트랩 분해 오물 제거 및 악취 차단 고온 소독', '수전·도기 정밀 스케일링 고질적인 물때 제거 및 스텐 광택 복원', '욕실 가구 및 거울 수납장 내외부 유막 제거 및 세정'] },
  { name: '거실·방', img: '/areas/move-out/living-room.jpg', items: ['붙박이장·수납 서랍장 전면 탈거 내부 수납공간 안심 위생 케어', '실내 창문 및 창틀 오랜 시간 누적된 먼지 정밀 흡입 케어', '벽면·천장 생활 먼지 및 전등갓 분해 벌레 사체·먼지 털기', '바닥 묵은 때 흡입 및 친환경 세제 밀착 살균 세정', '콘센트·스위치·몰딩 손때가 타기 쉬운 사각지대 디테일 케어'] },
  { name: '현관·베란다', img: '/areas/move-out/entrance.jpg', items: ['현관 신발장 서랍장 탈거 흙먼지 제거 및 내외부 정밀 소독', '베란다 창틀 및 새시 외부 찌든 먼지 프리미엄 고압 세척', '바닥 타일 전면 습식 올-워시(All-Wash) 세정', '베란다 배수구 트랩 분해 이물질 세척 및 유해 세균 살균 소독'] },
]

const recommendItems = [
  { title: '이사 나가는 분', desc: '보증금 반환 분쟁 제로, 깨끗한 퇴거를 위한 완벽한 원상복구 케어' },
  { title: '이사 들어오는 분', desc: '이전 세입자의 거주 흔적 완벽 삭제, 찝찝함 없는 위생적인 새 출발' },
  { title: '집주인·임대인', desc: '빠른 공실 회전과 자산 가치 상승, 품격 있는 새 세입자 맞이 준비' },
  { title: '이사 전', desc: '도배·장판 후 하얀 도배풀 자국 및 미세 석고 가루 털기, 시공 직후 정밀 미세 케어' },
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
        para1: '이사청소는 단순한 가시적인 청소를 넘어, 이전 거주자가 오랜 시간 머무르며 남긴 누적된 생활 오염과 숨은 사각지대의 유해 요소를 완벽하게 걷어내는 ‘공간 복원’ 과정입니다. 더퍼스트클린은 독한 화학 약품으로 겉만 번지르르하게 닦아내어 자재를 손상시키는 하청 방식을 철저히 배제합니다. 검증된 독일산 프리미엄 친환경 세제와 고성능 전문 장비를 투입하여 실내 전체를 맑고 위생적인 청정 공간으로 리프레시합니다.',
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
        title: '이사청소 견적 문의',
        subtitle: '면적과 오염 상태에 따라 맞춤 견적을 제공해 드립니다',
      }}
    />
  )
}
