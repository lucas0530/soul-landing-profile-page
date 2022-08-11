import type { NextPage } from 'next'

import IntroSection from '@components/templates/IntroSection'
import AboutMeSection from '@components/templates/AboutMeSection'
import MySkillSection from '@components/templates/MySkillSection'
import ArchivingSection from '@components/templates/ArchivingSection'
import CareerSection from '@components/templates/CareerSection'
import { useCallback, useMemo, useRef } from 'react'

export type SectionMethodsType = {
  scrollToSection: (index: number) => void
}

const Home: NextPage = () => {
  const IntroSectionRef = useRef<HTMLDivElement>(null)
  const AboutMeSectionRef = useRef<HTMLDivElement>(null)
  const MySkillSectionRef = useRef<HTMLDivElement>(null)
  const ArchivingSectionRef = useRef<HTMLDivElement>(null)
  const CareerSectionRef = useRef<HTMLDivElement>(null)

  const scrollToSection = useCallback((index: number) => {
    console.log(index)
    switch (index) {
      case 0:
      case 1:
        return AboutMeSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
        })
      case 2:
        return MySkillSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
        })
      case 3:
        return ArchivingSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
        })
      case 4:
        return CareerSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
        })
    }
  }, [])

  const sectionMethods = useMemo(() => ({ scrollToSection }), [scrollToSection])

  return (
    <main
      css={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <IntroSection ref={IntroSectionRef} sectionMethods={sectionMethods} />
      <AboutMeSection ref={AboutMeSectionRef} sectionMethods={sectionMethods} />
      <MySkillSection ref={MySkillSectionRef} sectionMethods={sectionMethods} />
      <ArchivingSection
        ref={ArchivingSectionRef}
        sectionMethods={sectionMethods}
      />
      <CareerSection ref={CareerSectionRef} sectionMethods={sectionMethods} />
    </main>
  )
}

export default Home
