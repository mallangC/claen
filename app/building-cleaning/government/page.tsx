import ServicePageTemplate from '@/components/ServicePageTemplate'

const subNavItems = [
  { label: '준공청소', href: '/building-cleaning/completion' },
  { label: '관공서청소', href: '/building-cleaning/government' },
]

const areas = [
  { name: '민원실·로비', img: '[ 민원실·로비 청소 이미지 ]', items: ['대기 의자 소독', '안내데스크 청소', '바닥 청소 및 광택', '천장·조명 청소', '유리문 청소'] },
  { name: '사무 공간', img: '[ 사무 공간 청소 이미지 ]', items: ['업무용 책상·의자', '파일 캐비닛 외부', '창문·블라인드', '바닥 청소', '공조 필터 청소'] },
  { name: '회의실·강당', img: '[ 회의실·강당 청소 이미지 ]', items: ['테이블·의자 소독', '빔프로젝터 주변', '화이트보드 청소', '바닥 청소', '무대·단상 청소'] },
  { name: '공용 공간', img: '[ 공용 공간 청소 이미지 ]', items: ['엘리베이터 내부', '계단·복도 청소', '화장실 위생 관리', '주차장 청소', '외부 계단 청소'] },
]

export default function GovernmentPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: '관공서청소',
        subtitle: '공공기관의 품격있는 청결 환경 조성',
        breadcrumb: [],
      }}
      subNavItems={subNavItems}
      intro={{
        label: 'Government Cleaning',
        title: '관공서청소 서비스',
        para1: '공공기관은 많은 사람들이 쉽게 이용할 수 있어, 외부에 의한 오염에 쉽게 노출되는 환경입니다. 깨끗한 환경을 유지하는 것이 공공서비스의 품질과 이미지에 중요한 역할을 하기 때문에 전문적이고 체계적인 청소를 통해 방문객과 이용자들에게 쾌적한 환경을 제공하여 공공기관의 이미지를 높이고 업무 환경을 개선하는 등의 공공기관의 운영 효율성을 높일 수 있도록 도움을 드립니다.',
      }}
      areas={areas}
      cta={{
        title: '관공서청소 견적 문의',
        subtitle: '정기 계약·단발성 청소 모두 상담 가능합니다',
      }}
    />
  )
}
