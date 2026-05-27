'use client'

import { useState } from 'react'
import Image from 'next/image'

const cases = [
  { title: '창틀 청소', location: '아파트 창틀 묵은 때 제거', before: '/before-after/case1-before.png', after: '/before-after/case1-after.png' },
  { title: '배수구 청소', location: '욕실 배수구 찌든 때 제거', before: '/before-after/case2-before.jpg', after: '/before-after/case2-after.jpg' },
  { title: '화장실 청소', location: '화장실 전체 청소 및 소독', before: '/before-after/case3-before.jpg', after: '/before-after/case3-after.jpg' },
  { title: '환풍기 청소', location: '주방·욕실 환풍기 분해 청소', before: '/before-after/case4-before.jpg', after: '/before-after/case4-after.png' },
  { title: '곰팡이 제거', location: '욕실 줄눈·실리콘 곰팡이 제거', before: '/before-after/case5-before.png', after: '/before-after/case5-after.png' },
  { title: '찌든 때 제거', location: '주방 기름때·찌든 때 제거', before: '/before-after/case6-before.png', after: '/before-after/case6-after.png' },
]

function BeforeAfterCard({ title, location, before, after }: {
  title: string
  location: string
  before: string
  after: string
}) {
  const [isAfter, setIsAfter] = useState(false)

  return (
    <div className="rounded-2xl overflow-hidden shadow-md">
      {/* 이미지 영역 */}
      <div className="relative h-72 md:h-96 bg-gray-900 overflow-hidden">
        <Image
          src={before}
          alt={`${title} 청소 전`}
          fill
          className={`object-cover transition-opacity duration-500 ${isAfter ? 'opacity-0' : 'opacity-100'}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Image
          src={after}
          alt={`${title} 청소 후`}
          fill
          className={`object-cover transition-opacity duration-500 ${isAfter ? 'opacity-100' : 'opacity-0'}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Before/After 배지 */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full transition-colors duration-300 ${isAfter ? 'bg-[#1565c0] text-white' : 'bg-black/50 text-white'}`}>
            {isAfter ? 'After' : 'Before'}
          </span>
        </div>
      </div>

      {/* 하단 정보 + 버튼 */}
      <div className="bg-white p-4 flex items-center justify-between">
        <div>
          <p className="font-bold text-gray-900 text-base">{title}</p>
          <p className="text-gray-500 text-sm mt-0.5">{location}</p>
        </div>
        <button
          onClick={() => setIsAfter(!isAfter)}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            isAfter
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              : 'bg-[#0a3d7a] text-white hover:bg-[#083270]'
          }`}
        >
          {isAfter ? '← Before' : 'After →'}
        </button>
      </div>
    </div>
  )
}

export default function BeforeAfterSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#1565c0] text-base font-semibold mb-3 tracking-wider uppercase">Before & After</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            더퍼스트클린을 경험해보세요!
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            청소 전·후 사진을 직접 확인하세요.<br />
            눈으로 보이는 차이가 더퍼스트클린의 실력입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cases.map((c) => (
            <BeforeAfterCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
