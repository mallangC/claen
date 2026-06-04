interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb: string[]
  compact?: boolean
}

export default function PageHero({ title, subtitle, breadcrumb, compact }: PageHeroProps) {
  return (
    <section className={`relative w-full ${compact ? 'h-44 md:h-56' : 'h-64 md:h-80'} bg-[#0a1a2e] flex items-center justify-center mt-20 md:mt-24 overflow-hidden`}>
      {/* 배경 그라데이션 효과 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{title}</h1>
        {subtitle && (
          <p className="text-base md:text-xl text-gray-300">{subtitle}</p>
        )}
      </div>

      {/* 바닥 장식 라인 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600" />
    </section>
  )
}
