'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SubNavItem {
  label: string
  href: string
}

interface ServiceSubNavProps {
  items: SubNavItem[]
}

export default function ServiceSubNav({ items }: ServiceSubNavProps) {
  const pathname = usePathname()

  return (
    <div className="bg-white border-b border-gray-200 sticky top-20 md:top-24 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto scrollbar-hide">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-shrink-0 px-6 py-4 text-base font-semibold border-b-2 transition-colors whitespace-nowrap
                ${pathname === item.href
                  ? 'border-[#0a3d7a] text-[#0a3d7a]'
                  : 'border-transparent text-gray-500 hover:text-[#0a3d7a] hover:border-gray-300'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
