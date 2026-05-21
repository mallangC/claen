import ServicePageTemplate from '@/components/ServicePageTemplate'

const subNavItems = [
  { label: '입주청소', href: '/home-care/move-in' },
  { label: '이사청소', href: '/home-care/move-out' },
  { label: '거주청소', href: '/home-care/residential' },
]

const areas = [
  { name: '거실·방', img: '[ 거실·방 청소 이미지 ]', items: ['청소기 및 물걸레질', '먼지털이 청소', '창문·창틀 청소', '붙박이장 내부', '전등·스위치 청소'] },
  { name: '주방', img: '[ 주방 청소 이미지 ]', items: ['싱크대 청소', '레인지 주변 청소', '수납장 내외부', '타일 청소', '배수구 청소'] },
  { name: '욕실', img: '[ 욕실 청소 이미지 ]', items: ['변기 세척 및 소독', '세면대 청소', '거울 청소', '바닥 청소', '환풍기 청소'] },
  { name: '베란다·기타', img: '[ 베란다 청소 이미지 ]', items: ['베란다 바닥 청소', '새시 프레임 청소', '쓰레기 처리', '현관 청소', '가전 외부 닦기'] },
]

export default function ResidentialPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: '거주청소',
        subtitle: '바쁜 일상, 전문가에게 맡기세요',
        breadcrumb: [],
        imageDesc: '거주청소 서비스 이미지',
      }}
      subNavItems={subNavItems}
      intro={{
        label: 'Residential Cleaning',
        title: '거주청소란?',
        para1:
          '거주청소 서비스는 현재 생활하시는 주거공간을 위한 집안 대청소 서비스로 주거공간은 생활하면서 발생하는 먼지, 찌든 때, 기름때 등과 함께 진드기, 곰팡이와 같은 오염이 발생하게 되는데 거주청소를 통해 평소 청소가 어려운 부분이나 안 보이는 구석의 오염을 제거하여 쾌적한 공간을 만들어 드립니다. 전문적인 거주청소를 통해 인테리어 없이도 새롭게 바뀐 주거환경을 경험하실 수 있습니다.',
      }}
      areas={areas}
      cta={{
        title: '거주청소 견적 문의',
        subtitle: '원하시는 주기와 범위로 맞춤 상담을 받아보세요',
      }}
    />
  )
}
