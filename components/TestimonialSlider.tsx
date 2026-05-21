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

const VISIBLE = 4

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const max = reviews.length - VISIBLE

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c >= max ? 0 : c + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [max])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#1565c0] text-base font-semibold mb-3 tracking-wider uppercase">Customer Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">고객 후기</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">실제 고객분들의 생생한 후기입니다</p>
        </div>

        <div className="relative">
          {/* 슬라이드 트랙 */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / VISIBLE)}%)` }}
            >
              {reviews.map((review, i) => (
                <div key={i} className="w-1/4 flex-shrink-0 px-3">
                  <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-4 h-full">
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <svg key={j} className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed flex-1">"{review.text}"</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                      <p className="text-[#1565c0] text-xs font-medium mt-0.5">{review.service}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 이전 버튼 */}
          <button
            onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
            disabled={current === 0}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 다음 버튼 */}
          <button
            onClick={() => setCurrent((c) => Math.min(c + 1, max))}
            disabled={current === max}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 인디케이터 */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                current === i ? 'bg-[#0a3d7a] w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
