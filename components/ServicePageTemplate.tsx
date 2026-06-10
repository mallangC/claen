import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ServiceSubNav from '@/components/ServiceSubNav'
import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'

type Area = {
  name: string
  img: string
  items: string[]
}

type SubNavItem = {
  label: string
  href: string
}

type Props = {
  hero: {
    title: string
    subtitle: string
    breadcrumb: string[]
  }
  subNavItems: SubNavItem[]
  intro: {
    label: string
    title: string
    para1: string
    para2?: string
  }
  areas: Area[]
  extraBeforeAreas?: ReactNode
  extraSection?: ReactNode
  cta: {
    title: string
    subtitle: string
  }
}

export default function ServicePageTemplate({
  hero,
  subNavItems,
  intro,
  areas,
  extraBeforeAreas,
  extraSection,
  cta,
}: Props) {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title={hero.title}
          subtitle={hero.subtitle}
          breadcrumb={hero.breadcrumb}
          compact
        />
        <ServiceSubNav items={subNavItems} />

        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-[#1565c0] font-semibold mb-3 tracking-wider text-sm uppercase">{intro.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">{intro.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">{intro.para1}</p>
              {intro.para2 && <p className="text-gray-600 text-lg leading-relaxed">{intro.para2}</p>}
            </div>

            {extraBeforeAreas}

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">청소 범위</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {areas.map((area) => (
                  <div key={area.name} className="bg-gray-50 rounded-2xl overflow-hidden">
                    <div className="relative h-[500px] bg-gradient-to-br from-gray-800 to-[#0a3d7a]">
                      {area.img.startsWith('/') ? (
                        <Image src={area.img} alt={area.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <p className="text-gray-400 text-xs text-center px-3">{area.img}</p>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{area.name}</h4>
                      <ul className="space-y-1.5">
                        {area.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-gray-600 text-base">
                            <svg className="w-4 h-4 text-[#1565c0] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {extraSection}

        <section className="py-14 bg-[#0a3d7a]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{cta.title}</h3>
            <p className="text-blue-200 text-lg mb-8">{cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="px-8 py-4 bg-white text-[#0a3d7a] font-bold text-lg rounded-full hover:bg-gray-100 transition-colors">
                온라인 견적 받기
              </Link>
              <a href="tel:15881888" className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors">
                전화 문의
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
