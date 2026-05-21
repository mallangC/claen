import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import QuoteForm from './QuoteForm'

export default function QuotePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="견적문의"
          subtitle="빠르고 정확한 맞춤 견적을 제공해 드립니다"
          breadcrumb={['홈', '견적문의']}
        />

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 안내 박스 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {[
                { icon: '📞', title: '전화 상담', desc: '평일 09:00 ~ 18:00' },
                { icon: '💬', title: '카카오 상담', desc: '24시간 문의 가능' },
                { icon: '📝', title: '온라인 견적', desc: '24시간 접수 가능' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 text-center shadow-sm">
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <p className="font-bold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 견적 폼 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">견적 문의하기</h2>
              <p className="text-gray-600 mb-8">아래 양식을 작성해 주시면 빠르게 연락드리겠습니다.</p>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
