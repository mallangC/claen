import ServicePageTemplate from '@/components/ServicePageTemplate'

const subNavItems = [
  { label: '입주청소', href: '/home-care/move-in' },
  { label: '이사청소', href: '/home-care/move-out' },
  { label: '거주청소', href: '/home-care/residential' },
]

const areas = [
  {
    name: '주방',
    img: '[ 주방 청소 이미지 ]',
    items: ['레인지후드 분해 청소', '싱크대 상·하부장 내부', '가스레인지 및 주변', '타일 기름때 제거', '냉장고 외부'],
  },
  {
    name: '욕실',
    img: '[ 욕실 청소 이미지 ]',
    items: ['변기 꼼꼼 세척', '세면대 물때 제거', '거울 청소', '줄눈 및 실리콘 청소', '욕조 스케일 제거'],
  },
  {
    name: '거실·방',
    img: '[ 거실·방 청소 이미지 ]',
    items: ['붙박이장 내외부', '창문·창틀 청소', '베란다 청소', '바닥 청소 및 광택', '전등·스위치 청소'],
  },
  {
    name: '현관·베란다',
    img: '[ 현관·베란다 청소 이미지 ]',
    items: ['현관 신발장 내외부', '베란다 새시 청소', '바닥 청소', '배수구 청소', '외부 유리 청소'],
  },
]

const recommendItems = [
  { title: '신축 아파트 입주', desc: '새 아파트 입주 전 건설 분진과 유해물질 제거' },
  { title: '재건축·리모델링', desc: '공사 후 남은 먼지와 잔여물 완벽 청소' },
  { title: '전세·월세 입주', desc: '이전 세입자의 생활 오염 말끔히 해결' },
  { title: '청약 당첨 후', desc: '입주 전 완벽한 청결 상태로 새 출발' },
]

export default function MoveInPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: '입주청소',
        subtitle: '새 집의 시작을 완벽하게 준비합니다',
        breadcrumb: ['홈', '프리미엄 홈케어', '입주청소'],
        imageDesc: '입주청소 현장 이미지',
      }}
      subNavItems={subNavItems}
      intro={{
        label: 'Move-in Cleaning',
        title: '입주청소란?',
        para1:
          '입주청소 서비스는 새로 지어진 아파트, 빌라, 주택 등에 입주하기 전에 집안에 남아있는 공사 잔여물은 물론 다양한 오염을 제거하는 청소 서비스입니다. 집을 짓기 위해서는 시멘트, 본드 등의 건축 자재가 사용되는데 실내에 남아있는 공사 잔여물은 유해 물질을 배출하여 제대로 된 청소를 하지 않고 입주를 하게 되면 새집증후군과 같은 질환을 유발할 수 있어 전문 입주청소 후 입주를 해야 새집증후군을 예방할 수 있습니다.',
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
        title: '입주청소 견적 문의',
        subtitle: '면적과 상태에 따라 맞춤 견적을 제공해 드립니다',
      }}
    />
  )
}
