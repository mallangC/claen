'use client'

import { useState, useEffect } from 'react'

const reviews = [
  {
    name: '김○○ 고객님',
    service: '입주청소',
    text: '새 아파트로 이사하기 전 입주청소를 맡겼는데 정말 만족스러웠습니다. 창틀 구석구석, 화장실 줄눈까지 새것처럼 만들어 주셔서 깜짝 놀랐어요. 다음에도 꼭 이용할게요.',
    rating: 5,
  },
  {
    name: '이○○ 대표님',
    service: '사무실청소',
    text: '매주 정기 청소를 맡기고 있는데 항상 일정하게 깔끔하게 해주십니다. 직원들 만족도가 높아졌고 방문 고객들 반응도 좋아졌어요. 신뢰할 수 있는 업체입니다.',
    rating: 5,
  },
  {
    name: '박○○ 고객님',
    service: '이사청소',
    text: '이사 후 찌든 때가 너무 많아서 걱정했는데 전문 장비로 말끔하게 처리해 주셨어요. 특히 욕실 곰팡이 제거가 완벽했습니다. 가격 대비 퀄리티가 훌륭해요.',
    rating: 5,
  },
  {
    name: '최○○ 원장님',
    service: '병·의원 청소',
    text: '의료기관 특성상 위생 관리가 까다로운데 전문적으로 잘 처리해 주십니다. 소독 후 냄새도 없고 청결 상태가 오래 유지돼서 정기 계약하게 됐습니다.',
    rating: 5,
  },
  {
    name: '정○○ 고객님',
    service: '거주청소',
    text: '처음에 반신반의했는데 직접 보니 확실히 다르더라고요. 혼자서는 엄두도 못 냈던 에어컨 내부, 렌지후드까지 깨끗하게 해주셨어요. 강력 추천합니다.',
    rating: 5,
  },
  {
    name: '홍○○ 관리소장님',
    service: '준공청소',
    text: '신축 건물 준공청소를 맡겼는데 공사 잔재물, 페인트 자국 하나 없이 완벽하게 마무리해 주셨습니다. 입주자들 반응이 매우 좋았고 일정도 정확히 지켜주셨어요.',
    rating: 5,
  },
]

const DESKTOP_VISIBLE = 4
const MOBILE_PAGE_SIZE = 2

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-[#6B8E9F] flex items-center justify-center shadow-sm">
          <span className="text-base font-bold text-white">{review.name[0]}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 min-w-0">
        <span className="text-sm font-semibold text-white/90">{review.name}</span>
        <div
          className="relative bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm"
          style={{
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.12))',
          }}
        >
          {/* 꼬리 */}
          <span
            className="absolute -top-0 -left-2"
            style={{
              width: 0,
              height: 0,
              borderTop: '10px solid white',
              borderLeft: '10px solid transparent',
            }}
          />
          <div className="flex gap-0.5 mb-2">
            {Array.from({ length: review.rating }).map((_, j) => (
              <svg key={j} className="w-4 h-4 fill-[#FEE500]" viewBox="0 0 24 24" stroke="#d4a000" strokeWidth={0.5}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-800 text-sm leading-relaxed">{review.text}</p>
        </div>
        <span className="text-xs text-white/70 ml-1">{review.service}</span>
      </div>
    </div>
  )
}

export default function TestimonialSlider() {
  const [desktopCurrent, setDesktopCurrent] = useState(0)
  const [mobilePage, setMobilePage] = useState(0)
  const desktopMax = reviews.length - DESKTOP_VISIBLE
  const mobileMaxPage = Math.ceil(reviews.length / MOBILE_PAGE_SIZE) - 1
  const mobileReviews = reviews.slice(mobilePage * MOBILE_PAGE_SIZE, mobilePage * MOBILE_PAGE_SIZE + MOBILE_PAGE_SIZE)

  useEffect(() => {
    const timer = setInterval(() => {
      setDesktopCurrent((c) => (c >= desktopMax ? 0 : c + 1))
      setMobilePage((p) => (p >= mobileMaxPage ? 0 : p + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [desktopMax, mobileMaxPage])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#1565c0] text-base font-semibold mb-3 tracking-wider uppercase">Customer Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">고객 후기</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">실제 고객분들의 생생한 후기입니다</p>
        </div>

        {/* 모바일: 2×2 그리드 */}
        <div className="md:hidden">
          <div className="bg-[#ABC1D1] rounded-2xl p-4">
            <div className="grid grid-cols-2 gap-4">
              {mobileReviews.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: mobileMaxPage + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setMobilePage(i)}
                className={`h-2 rounded-full transition-all ${mobilePage === i ? 'bg-[#0a3d7a] w-6' : 'bg-gray-300 w-2'}`}
              />
            ))}
          </div>
        </div>

        {/* 데스크탑: 4열 슬라이더 */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="overflow-hidden bg-[#ABC1D1] rounded-2xl px-4 py-6">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${desktopCurrent * (100 / DESKTOP_VISIBLE)}%)` }}
              >
                {reviews.map((review, i) => (
                  <div key={i} className="w-1/4 flex-shrink-0 px-3">
                    <ReviewCard review={review} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setDesktopCurrent((c) => Math.max(c - 1, 0))}
              disabled={desktopCurrent === 0}
              className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setDesktopCurrent((c) => Math.min(c + 1, desktopMax))}
              disabled={desktopCurrent === desktopMax}
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: desktopMax + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setDesktopCurrent(i)}
                className={`h-2 rounded-full transition-all ${desktopCurrent === i ? 'bg-[#0a3d7a] w-6' : 'bg-gray-300 w-2'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
