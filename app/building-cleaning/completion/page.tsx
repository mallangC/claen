import ServicePageTemplate from '@/components/ServicePageTemplate'

const subNavItems = [
  { label: '준공청소', href: '/building-cleaning/completion' },
  { label: '관공서청소', href: '/building-cleaning/government' },
]

const areas = [
  { name: '실내 공간', img: '/building-cleaning/completion-interior.jpg', items: ['건설 분진 전체 제거', '페인트 자국 제거', '시멘트 잔여물 제거', '바닥재 보호 및 광택', '천장·벽면 청소'] },
  { name: '유리·창호', img: '/building-cleaning/completion-glass.jpg', items: ['창문 내외부 청소', '창틀 잔여물 제거', '유리문 청소', '방충망 청소', '새시 프레임 청소'] },
  { name: '위생도기', img: '/building-cleaning/completion-sanitary.jpg', items: ['변기·세면대 보호막 제거', '욕조 청소', '타일 줄눈 청소', '수전 청소', '배수구 청소'] },
  { name: '공용 공간', img: '/building-cleaning/completion-common.jpg', items: ['엘리베이터 내부', '계단·복도', '지하주차장', '옥상 청소', '외벽 청소'] },
]

export default function CompletionPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: '준공청소',
        subtitle: '건물 완공 후 완벽한 입주 준비',
        breadcrumb: [],
      }}
      subNavItems={subNavItems}
      intro={{
        label: 'Completion Cleaning',
        title: '준공청소 서비스',
        para1: '준공청소는 건물이 완공된 후에, 사용자들이 입주하거나 사용하기 전에 필요한 청소 작업으로 공사 후에 남아있는 건축폐기물과 먼지, 페인트 자국 등 건축 시 사용된 공사 잔재들을 깨끗하게 청소합니다. 준공 청소를 통해 건물에 입주하기 전 건물을 청소하게 되면 건물에 대한 깨끗한 이미지를 만들고 신축 건물 입주 시에 쾌적한 환경에서 입주가 가능한 상태로 만들어드립니다.',
      }}
      areas={areas}
      cta={{
        title: '준공청소 현장 견적',
        subtitle: '규모·층수·면적에 따라 현장 방문 후 정확한 견적 제공',
      }}
    />
  )
}
