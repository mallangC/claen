'use client'

import Link from 'next/link'

const COMPANY_PHONE = '15881888'
const KAKAO_URL = 'http://pf.kakao.com/_xhVnxjX/chat'
const INSTAGRAM_URL = 'https://www.instagram.com/thefirst_clean'
const BLOG_URL = 'https://blog.naver.com/thefirstclean'

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
        <span className="text-xs font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">전화상담</span>
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
        <span className="text-xs font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">간편견적</span>
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
        <span className="text-xs font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">카톡상담</span>
      </a>

      {/* 인스타그램 */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center gap-1"
        aria-label="인스타그램"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all active:scale-95">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
        <span className="text-xs font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">인스타그램</span>
      </a>

      {/* 블로그 */}
      <a
        href={BLOG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center gap-1"
        aria-label="블로그"
      >
        <div className="w-14 h-14 rounded-full bg-[#03C75A] text-white flex items-center justify-center shadow-lg hover:bg-[#02b350] hover:scale-110 transition-all active:scale-95">
          <span className="text-sm font-bold">Blog</span>
        </div>
        <span className="text-xs font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">블로그</span>
      </a>
    </div>
  )
}
