import ServicePageTemplate from '@/components/ServicePageTemplate'

const subNavItems = [
  { label: '사무실청소', href: '/office-cleaning/office' },
  { label: '상가청소', href: '/office-cleaning/store' },
  { label: '병·의원 청소', href: '/office-cleaning/medical' },
]

const areas = [
  { name: '대기실·원무', img: '[ 대기실·원무 청소 이미지 ]', items: ['의자·소파 소독', '접수대 청소', '잡지·비품 정리', '바닥 소독 청소', '공기청정기 필터 청소'] },
  { name: '진료실', img: '[ 진료실 청소 이미지 ]', items: ['진료대 소독', '의료기기 외부 닦기', '바닥 소독', '창문·블라인드 청소', '세면대 청소'] },
  { name: '화장실', img: '[ 화장실 청소 이미지 ]', items: ['의료용 소독제 사용', '변기 세척 소독', '바닥 소독 청소', '배수구 청소', '비품 정리'] },
  { name: '복도·계단', img: '[ 복도·계단 청소 이미지 ]', items: ['복도 바닥 소독', '난간 소독 청소', '조명 청소', '환기구 청소', '출입문 소독'] },
]

const features = [
  { icon: '🧪', title: '의료용 소독제', desc: '병원급 소독제를 사용하여 세균·바이러스 99.9% 제거' },
  { icon: '🏥', title: '전문 교육 인력', desc: '의료시설 청소 전문 교육을 이수한 전담 청소사 배치' },
  { icon: '🔒', title: '개인정보 보호', desc: '청소 중 환자 개인정보 노출 방지 철저 준수' },
]

export default function MedicalPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: '병·의원 청소',
        subtitle: '의료 환경에 맞는 전문 위생 관리',
        breadcrumb: [],
      }}
      subNavItems={subNavItems}
      intro={{
        label: 'Medical Cleaning',
        title: '병·의원 청소 서비스',
        para1: '병·의원은 환자와 의료진이 함께 생활하는 공간으로 일반 시설과 달리 감염 예방과 위생 관리가 최우선인 환경입니다.\n의료시설 청소는 단순한 청결 유지를 넘어 세균·바이러스 차단을 위한 전문적인 소독과 관리가 필요하며,\n청소 인력 또한 의료시설 특성에 맞는 전문 교육을 이수한 인원으로 구성됩니다.\n진료실·대기실·화장실 등 공간별 오염 특성에 맞는 맞춤 관리로 원내 감염을 예방하고,\n환자와 의료진 모두가 안심할 수 있는 청결하고 위생적인 의료 환경을 만들어 드립니다.',
      }}
      areas={areas}
      extraBeforeAreas={
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {features.map((item) => (
            <div key={item.title} className="bg-blue-50 rounded-2xl p-6 text-center">
              <span className="text-4xl mb-3 block">{item.icon}</span>
              <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      }
      cta={{
        title: '병·의원 청소 견적 문의',
        subtitle: '규모와 진료과목에 맞는 맞춤 서비스 제공',
      }}
    />
  )
}
