import ServicePageTemplate from '@/components/ServicePageTemplate'

const subNavItems = [
  { label: '사무실청소', href: '/office-cleaning/office' },
  { label: '상가청소', href: '/office-cleaning/store' },
  { label: '병·의원 청소', href: '/office-cleaning/medical' },
]

const areas = [
  { name: '업무 공간', img: '[ 업무 공간 청소 이미지 ]', items: ['책상·사무기기 먼지 제거', '의자 청소', '파티션 유리 청소', '전화기·키보드 소독', '서랍장 외부 청소'] },
  { name: '회의실·로비', img: '[ 회의실·로비 청소 이미지 ]', items: ['테이블 및 의자 청소', '화이트보드 청소', '바닥 청소 및 광택', '유리문·창문 청소', '천장 먼지 제거'] },
  { name: '탕비실·주방', img: '[ 탕비실·주방 청소 이미지 ]', items: ['싱크대 청소', '전자레인지 내외부', '냉장고 외부', '커피머신 주변', '바닥 청소'] },
  { name: '화장실', img: '[ 화장실 청소 이미지 ]', items: ['변기 세척 및 소독', '세면대 청소', '거울 청소', '바닥 청소', '배수구 청소'] },
]

const contractItems = [
  { freq: '주 1회', desc: '매주 정기 청소로 항상 깨끗한 환경 유지' },
  { freq: '주 2-3회', desc: '더 잦은 방문으로 최상의 청결 상태 유지' },
  { freq: '월 정기', desc: '대청소 개념으로 월 1~2회 집중 청소' },
]

export default function OfficePage() {
  return (
    <ServicePageTemplate
      hero={{
        title: '사무실청소',
        subtitle: '쾌적한 업무 환경이 생산성을 높입니다',
        breadcrumb: [],
      }}
      subNavItems={subNavItems}
      intro={{
        label: 'Office Cleaning',
        title: '사무실청소 서비스',
        para1: '사무실은 생산적인 업무 환경을 유지하는데 중요한 공간으로, 사무실 내 모든 공간을 철저하게 관리하기 위해\n' +
            '일상적인 청소뿐만 아니라 정기적인 대청소를 포함한 다양한 서비스를 제공합니다.\n' +
            '전문 청소 기술과 인증받은 세제를 사용하여 깨끗하고 위생적인 공간을 유지하며,\n' +
            '클라이언트의 요구에 맞춘 맞춤형 서비스로 고객의 업무에 지장을 주지 않으면서,\n' +
            '청소와 관리가 가능할 수 있도록 정확한 프로세스로 진행되며,\n' +
            '쾌적한 사무환경을 제공하여 직원들의 작업 효율을 높이고 고객 만족도를 높이는 환경을 만듭니다.',
      }}
      areas={areas}
      extraSection={
        <section className="py-14 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">정기 계약 안내</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {contractItems.map((item) => (
                <div key={item.freq} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <p className="text-2xl font-black text-[#0a3d7a] mb-2">{item.freq}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
      cta={{
        title: '사무실청소 견적 문의',
        subtitle: '면적과 주기에 따라 합리적인 견적을 제공합니다',
      }}
    />
  )
}
