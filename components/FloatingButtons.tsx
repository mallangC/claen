'use client'

import Link from 'next/link'

const COMPANY_PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || '01012345678'
const KAKAO_URL = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || 'https://pf.kakao.com/_your_channel'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex">
      {/* 전화 버튼 */}
      <a
        href={`tel:${COMPANY_PHONE}`}
        className="flex-1 flex flex-col items-center justify-center bg-[#0a3d7a] text-white py-6 md:py-8 gap-1 hover:bg-[#083270] transition-colors active:scale-95"
      >
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="text-sm md:text-base font-semibold">전화상담</span>
      </a>

      {/* 간편견적 버튼 */}
      <Link
        href="/quote"
        className="flex-1 flex flex-col items-center justify-center bg-[#1565c0] text-white py-6 md:py-8 gap-1 hover:bg-[#1256a8] transition-colors active:scale-95"
      >
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span className="text-sm md:text-base font-semibold">간편견적</span>
      </Link>

      {/* 카톡상담 버튼 */}
      <a
        href={KAKAO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center bg-[#FEE500] text-[#3C1E1E] py-6 md:py-8 gap-1 hover:bg-[#f0d800] transition-colors active:scale-95"
      >
        <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.39 1.344 4.533 3.432 5.925L4.5 20l4.5-2.5c.984.195 2.003.3 3 .3 5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
        </svg>
        <span className="text-sm md:text-base font-semibold">카톡상담</span>
      </a>
    </div>
  )
}
