'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const reviewImages = [
  '/reviews/01.jpg',
  '/reviews/02.jpg',
  '/reviews/03.jpg',
  '/reviews/04.jpg',
  '/reviews/05.jpg',
  '/reviews/06.jpg',
]

const VISIBLE = 3
const totalPages = Math.ceil(reviewImages.length / VISIBLE)

export default function TestimonialSlider() {
  const [page, setPage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % totalPages)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#1565c0] text-base font-semibold mb-3 tracking-wider uppercase">Customer Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">고객 후기</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">실제 고객분들의 생생한 후기입니다</p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => (
              <div key={pageIdx} className="w-full flex-shrink-0 grid grid-cols-3 gap-4 md:gap-6">
                {reviewImages.slice(pageIdx * VISIBLE, pageIdx * VISIBLE + VISIBLE).map((src, i) => (
                  <div key={i} className="relative aspect-[1/2] rounded-2xl overflow-hidden shadow-md">
                    <Image src={src} alt={`고객 후기 ${pageIdx * VISIBLE + i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button
            onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setPage((p) => (p + 1) % totalPages)}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${page === i ? 'bg-[#0a3d7a] w-6' : 'bg-gray-300 w-2'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
