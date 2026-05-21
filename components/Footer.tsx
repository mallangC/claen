import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a1a2e] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">더퍼스트클린</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              전문 청소 서비스로 깨끗하고 쾌적한 공간을 만들어 드립니다.
              입주청소, 이사청소, 사무실청소, 건물청소 분야 전문 업체입니다.
            </p>
          </div>

          {/* 사업자 정보 */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-200">사업자 정보</h4>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>상호명: 더퍼스트클린</li>
              <li>대표자: (대표자명 입력)</li>
              <li>사업자등록번호: 000-00-00000</li>
              <li>주소: (회사 주소 입력)</li>
              <li>대표전화: (전화번호 입력)</li>
              <li>이메일: (이메일 입력)</li>
            </ul>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-200">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">회사소개</Link></li>
              <li><Link href="/home-care" className="text-gray-400 hover:text-white transition-colors">프리미엄 홈케어</Link></li>
              <li><Link href="/office-cleaning" className="text-gray-400 hover:text-white transition-colors">오피스·상가청소</Link></li>
              <li><Link href="/building-cleaning" className="text-gray-400 hover:text-white transition-colors">건물·기관청소</Link></li>
              <li><Link href="/quote" className="text-gray-400 hover:text-white transition-colors">견적문의</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© 2024 더퍼스트클린. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
