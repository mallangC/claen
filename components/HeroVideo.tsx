'use client'

export default function HeroVideo() {
  const videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL

  return (
    <div className="relative w-full h-screen min-h-[500px] overflow-hidden select-none">
      {/* 영상 배경 */}
      {videoUrl ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-950" />
      )}

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          더퍼스트클린
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 mb-10 font-medium">
          전문가의 손길로 완벽한 청결
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/quote"
            className="px-8 py-4 bg-[#0a3d7a] text-white text-lg font-semibold rounded-full hover:bg-[#083270] transition-colors"
          >
            무료 견적 받기
          </a>
          <a
            href="tel:01012345678"
            className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-colors"
          >
            전화 상담
          </a>
        </div>
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
