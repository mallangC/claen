import ServicePageTemplate from '@/components/ServicePageTemplate'

const subNavItems = [
  { label: '입주청소', href: '/home-care/move-in' },
  { label: '이사청소', href: '/home-care/move-out' },
  { label: '거주청소', href: '/home-care/residential' },
]

const areas = [
  { name: '거실·방', img: '/areas/residential/living-room.jpg', items: ['생활 가구·가전 정밀 케어', '바닥 찌든 때 밀착 세정', '실내 사각지대 먼지 털기', '콘센트·스위치 틈새 케어', '의류·침구 주변 공간 흡입'] },
  { name: '주방', img: '/areas/residential/kitchen.jpg', items: ['레인지후드 필터 분해 세척','쿡탑 및 싱크대 표면 케어','수전·싱크볼 물때 스케일링','밀려있는 음식물 오염원 세척','주방 가구 외부 밀착 케어'] },
  { name: '욕실', img: '/areas/residential/bathroom.jpg', items: ['변기·세면대 위생 스케일링','욕실 타일 및 거울 세정','하수구 배수구 트랩 분해','환풍기 커버 탈거 세척','욕실 수납장 및 액세서리 케어'] },
  { name: '베란다·기타', img: '/areas/residential/balcony.jpg', items: ['방치된 생활 쓰레기 분리 배출','실내 유리창 및 창틀 케어','베란다 바닥 타일 습식 워시','베란다 배수구 오물 세척','현관 신발장 외측 및 바닥 케어'] },
]

export default function ResidentialPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: '거주청소',
        subtitle: '바쁜 일상, 전문가에게 맡기세요',
        breadcrumb: [],
      }}
      subNavItems={subNavItems}
      intro={{
        label: 'Residential Cleaning',
        title: '거주청소란?',
        para1:
          '거주청소는 일상적인 청소만으로는 손대기 힘든 실내 구석구석의 누적 먼지와 방치된 오염원을 체해적으로 케어하는 대청소 서비스입니다. 많은 가구와 가전, 생활 가사 짐들이 있는 상태에서도 자재 손상 없이 안전하게 사각지대를 찾아내어 정밀 흡입하고 찌든 때를 세정합니다. 만지기 찝찝했던 주방과 욕실의 위생까지 완벽하게 회복시켜 드립니다.',
      }}
      areas={areas}
      cta={{
        title: '거주청소 견적 문의',
        subtitle: '원하시는 주기와 범위로 맞춤 상담을 받아보세요',
      }}
    />
  )
}
