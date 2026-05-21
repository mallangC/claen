'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = [
  {
    label: '입주청소',
    images: [
      { src: '/gallery/move-in/move-in-1.png', caption: '창틀 청소' },
      { src: '/gallery/move-in/move-in-2.png', caption: '화장실 청소' },
      { src: '/gallery/move-in/move-in-3.png', caption: '곰팡이 청소' },
    ],
  },
  {
    label: '바닥청소',
    images: [
      { src: '/gallery/floor/floor-1.png', caption: '바닥 기계 청소' },
      { src: '/gallery/floor/floor-2.png', caption: '찌든 때 기계 청소' },
      { src: '/gallery/floor/floor-3.png', caption: '바닥 약품 청소 및 코팅' },
    ],
  },
  {
    label: '유리창청소',
    images: [
      { src: '/gallery/window/window-1.png', caption: '내부 유리창 관리' },
      { src: '/gallery/window/window-2.png', caption: '쇼 케이스 및 표면 소독' },
      { src: '/gallery/window/window-3.png', caption: '퓨어워터 외부 유리창 청소' },
    ],
  },
  {
    label: '화장실 청소',
    images: [
      { src: '/gallery/bathroom/bathroom-1.png', caption: '화장실 전체 오염 제거' },
      { src: '/gallery/bathroom/bathroom-2.png', caption: '배수구 청소' },
      { src: '/gallery/bathroom/bathroom-3.png', caption: '수전 관리' },
    ],
  },
  {
    label: '외부청소',
    images: [
      { src: '/gallery/exterior/exterior-1.png', caption: '간판/외벽 청소' },
      { src: '/gallery/exterior/exterior-2.png', caption: '에어컨 곰팡이 청소' },
      { src: '/gallery/exterior/exterior-3.png', caption: '소파/의자 관리' },
    ],
  },
]

export default function CleaningGallerySection() {
  const [active, setActive] = useState(0)
  const current = categories[active]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#1565c0] text-base font-semibold mb-3 tracking-wider uppercase">Cleaning Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">청소 항목</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">항목을 선택하면 실제 작업 현장을 확인하실 수 있습니다</p>
        </div>

        {/* 탭 */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-[#0a3d7a] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0a3d7a] hover:text-[#0a3d7a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 이미지 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {current.images.map((img, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] bg-gray-100 group">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center text-gray-700 text-sm font-medium">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
