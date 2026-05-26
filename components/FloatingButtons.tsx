'use client'

import Link from 'next/link'

const COMPANY_PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || '01012345678'
const KAKAO_URL = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || 'https://pf.kakao.com/_your_channel'

export default function FloatingButtons() {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* 전화상담 */}
      <a
        href={`tel:${COMPANY_PHONE}`}
        className="group flex flex-col items-center gap-1"
        aria-label="전화상담"
      >
        <div className="w-14 h-14 rounded-full bg-[#0a3d7a] text-white flex items-center justify-center shadow-lg hover:bg-[#083270] hover:scale-110 transition-all active:scale-95">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <span className="text-xs font-semibold text-gray-600 drop-shadow-sm">전화상담</span>
      </a>

      {/* 간편견적 */}
      <Link
        href="/quote"
        className="group flex flex-col items-center gap-1"
        aria-label="간편견적"
      >
        <div className="w-14 h-14 rounded-full bg-[#1565c0] text-white flex items-center justify-center shadow-lg hover:bg-[#1256a8] hover:scale-110 transition-all active:scale-95">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <span className="text-xs font-semibold text-gray-600 drop-shadow-sm">간편견적</span>
      </Link>

      {/* 카톡상담 */}
      <a
        href={KAKAO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center gap-1"
        aria-label="카톡상담"
      >
        <div className="w-14 h-14 rounded-full bg-[#FEE500] text-[#3C1E1E] flex items-center justify-center shadow-lg hover:bg-[#f0d800] hover:scale-110 transition-all active:scale-95">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.39 1.344 4.533 3.432 5.925L4.5 20l4.5-2.5c.984.195 2.003.3 3 .3 5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
          </svg>
        </div>
        <span className="text-xs font-semibold text-gray-600 drop-shadow-sm">카톡상담</span>
      </a>
    </div>
  )
}
