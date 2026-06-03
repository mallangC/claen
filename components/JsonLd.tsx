export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '더퍼스트클린',
    image: 'https://thefirstclean.kr/logo.png',
    url: 'https://thefirstclean.kr',
    telephone: '010-9569-6998',
    description: '서울·경기·인천·충청 전문 청소 업체. 입주청소, 이사청소, 사무실청소, 건물청소 전문.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KR',
      addressRegion: '서울',
    },
    areaServed: ['서울', '경기', '인천', '충청'],
    serviceType: ['입주청소', '이사청소', '거주청소', '사무실청소', '상가청소', '건물청소'],
    priceRange: '$$',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
