'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: '회사소개', href: '/about' },
  {
    label: '프리미엄 홈케어',
    href: '/home-care',
    children: [
      { label: '입주청소', href: '/home-care/move-in' },
      { label: '이사청소', href: '/home-care/move-out' },
      { label: '거주청소', href: '/home-care/residential' },
    ],
  },
  {
    label: '오피스·상가청소',
    href: '/office-cleaning',
    children: [
      { label: '사무실청소', href: '/office-cleaning/office' },
      { label: '상가청소', href: '/office-cleaning/store' },
      { label: '병·의원 청소', href: '/office-cleaning/medical' },
    ],
  },
  {
    label: '건물·기관청소',
    href: '/building-cleaning',
    children: [
      { label: '준공청소', href: '/building-cleaning/completion' },
      { label: '관공서청소', href: '/building-cleaning/government' },
    ],
  },
  { label: '견적문의', href: '/quote' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
    setOpenMobileMenu(null)
  }, [pathname])

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="더퍼스트클린"
              width={200}
              height={200}
              className="h-16 md:h-20 w-auto object-contain"
              style={{ width: 'auto' }}
              priority
            />
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`px-3 lg:px-4 py-2 text-base lg:text-lg font-medium rounded-lg transition-colors duration-200 whitespace-nowrap flex items-center gap-1
                    ${pathname.startsWith(item.href) && item.href !== '/'
                      ? 'text-[#0a3d7a] bg-blue-50'
                      : 'text-gray-700 hover:text-[#0a3d7a] hover:bg-blue-50'
                    }`}
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3.5 h-3.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* 드롭다운 */}
                {item.children && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[140px] z-50"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-5 py-3 text-base font-medium whitespace-nowrap border-b border-gray-50 last:border-0 transition-colors
                          ${pathname === child.href
                            ? 'bg-blue-50 text-[#0a3d7a]'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-[#0a3d7a]'
                          }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 모바일 햄버거 */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="메뉴 열기"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col py-2">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-6 py-4 text-base font-medium text-gray-700 hover:text-[#0a3d7a] hover:bg-blue-50 border-b border-gray-50"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${openMobileMenu === item.label ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMobileMenu === item.label && (
                      <div className="bg-gray-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className="block pl-10 pr-6 py-3 text-sm font-medium text-gray-600 hover:text-[#0a3d7a] hover:bg-blue-50 border-b border-gray-100 last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 text-base font-medium text-gray-700 hover:text-[#0a3d7a] hover:bg-blue-50 border-b border-gray-50 last:border-0"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
