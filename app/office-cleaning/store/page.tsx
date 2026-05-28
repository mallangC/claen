import ServicePageTemplate from '@/components/ServicePageTemplate'

const subNavItems = [
  { label: '사무실청소', href: '/office-cleaning/office' },
  { label: '상가청소', href: '/office-cleaning/store' },
  { label: '병·의원 청소', href: '/office-cleaning/medical' },
]

const areas = [
  { name: '매장 내부', img: '/office-cleaning/shop-interior.jpg', items: ['진열대 먼지 제거', '쇼케이스 청소', '계산대 주변 청소', '바닥 청소 및 광택', '천장 조명 청소'] },
  { name: '주방·조리실', img: '/office-cleaning/shop-kitchen.jpg', items: ['그리스트랩 청소', '후드 및 덕트 청소', '주방 기기 외부', '타일 기름때 제거', '배수구 청소'] },
  { name: '화장실·창고', img: '/office-cleaning/shop-restroom.jpg', items: ['위생도기 세척', '바닥 청소', '창고 정리 청소', '배수구 청소', '환풍구 청소'] },
  { name: '외부·간판', img: '/office-cleaning/store-exterior.jpg', items: ['출입문 청소', '쇼윈도 청소', '외벽 청소', '간판 청소', '주변 바닥 청소'] },
]

const storeTypes = ['음식점', '카페', '미용실', '네일샵', '학원', '편의점', '약국', '헬스장', '세탁소', '인테리어 쇼룸', '부동산', '기타 상가']

export default function StorePage() {
  return (
    <ServicePageTemplate
      hero={{
        title: '상가청소',
        subtitle: '고객의 첫인상, 깨끗한 매장에서 시작됩니다',
        breadcrumb: [],
      }}
      subNavItems={subNavItems}
      intro={{
        label: 'Store Cleaning',
        title: '상가청소 서비스',
        para1: '상업시설 경우 고객의 방문이 자유로운 공간으로 전체적인 오염제거와 정기적인 관리가 필요한 시설로\n' +
            '다양한 업종이 운영되는 상업시설을 청소하는 서비스를 통해 고객이 이용하는 상가의 다양한 환경을\n' +
            '깨끗하게 청소하여 상가 전체의 깨끗함을 유지합니다. 청소 전문가가 업종, 시설별 오염을 제거하여\n' +
            '고객에게는 쾌적한 시설을 제공하고 운영자에게는 매출 증대의 효과를 드립니다.',
      }}
      areas={areas}
      extraSection={
        <section className="py-14 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">서비스 가능 업종</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {storeTypes.map((type) => (
                <span key={type} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-medium shadow-sm">{type}</span>
              ))}
            </div>
          </div>
        </section>
      }
      cta={{
        title: '상가청소 견적 문의',
        subtitle: '개업청소·정기청소 모두 맞춤 견적 제공',
      }}
    />
  )
}
