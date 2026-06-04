'use client'

import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    id: 1,
    label: '입주청소 · 이사청소',
    desc: '새 공간의 시작을 깨끗하게',
    bg: 'bg-gradient-to-br from-gray-900 to-blue-950',
  },
  {
    id: 2,
    label: '프리미엄 홈케어',
    desc: '전문가의 손길로 완벽한 청결',
    bg: 'bg-gradient-to-br from-blue-950 to-gray-900',
  },
  {
    id: 3,
    label: '오피스 · 상가 청소',
    desc: '비즈니스 공간을 최상의 상태로',
    bg: 'bg-gradient-to-br from-gray-900 to-slate-800',
  },
  {
    id: 4,
    label: '건물 · 기관 청소',
    desc: '대형 공간도 완벽하게',
    bg: 'bg-gradient-to-br from-slate-900 to-blue-900',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setIsTransitioning(false)
    }, 300)
  }, [])

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative w-full h-screen min-h-[500px] overflow-hidden select-none">
      {/* 슬라이드 */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${slide.bg} ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* 이미지 자리 표시 텍스트 */}
          <div
            className={`text-center px-6 transition-all duration-300 ${isTransitioning && i === current ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
          >
            <p className="text-gray-400 text-sm md:text-base mb-4 tracking-widest uppercase">
              [ {slide.label} 관련 이미지 또는 영상 ]
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              더퍼스트클린
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-10 font-medium">
              {slide.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quote"
                className="px-8 py-4 bg-[#0a3d7a] text-white text-lg font-semibold rounded-full hover:bg-[#083270] transition-colors"
              >
                무료 견적 받기
              </a>
              <a
                href="tel:15881888"
                className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-colors"
              >
                전화 상담
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* 좌우 화살표 */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="이전 슬라이드"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="다음 슬라이드"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 도트 인디케이터 */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`slider-dot ${i === current ? 'active' : ''}`}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>

      {/* 스크롤 다운 아이콘 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}
