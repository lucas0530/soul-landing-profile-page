import type { NextPage } from 'next'

import IntroSection from '@components/templates/IntroSection'
// import AboutMeSection from '@components/templates/AboutMeSection'
// import MySkillSection from '@components/templates/MySkillSection'

const Home: NextPage = () => {
  return (
    <main
      css={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <IntroSection />
      {/* <AboutMeSection />
      <MySkillSection /> */}
    </main>
  )
}

export default Home
