import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import { Section } from './IntroSection.style'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import IconHtml5 from '@public/static/logo/skills/html5.png'
import IconCss from '@public/static/logo/skills/css.png'
import IconJs from '@public/static/logo/skills/js.png'
import IconTs from '@public/static/logo/skills/ts.png'
import IconSass from '@public/static/logo/skills/sass.png'
import IconStyledComponent from '@public/static/logo/skills/styled-component.png'
import IconTailWind from '@public/static/logo/skills/tailwind.png'
import IconEmotion from '@public/static/logo/skills/emotion.png'
import IconJquery from '@public/static/logo/skills/jquery.png'
import IconReact from '@public/static/logo/skills/react.png'
import IconNext from '@public/static/logo/skills/next.png'
import IconRedux from '@public/static/logo/skills/redux.png'
import IconMobx from '@public/static/logo/skills/mobx.png'
import IconNest from '@public/static/logo/skills/nestjs.png'
import IconMysql from '@public/static/logo/skills/mysql.png'
import IconPostgresql from '@public/static/logo/skills/postgresql.png'
import IconTypeorm from '@public/static/logo/skills/typeorm.png'
import IconReactNative from '@public/static/logo/skills/react-native.png'
import IconNativeBase from '@public/static/logo/skills/native-base.png'
import IconAmazon from '@public/static/logo/skills/amazon.png'
import IconDocker from '@public/static/logo/skills/docker.png'
import IconFigma from '@public/static/logo/skills/figma.png'
import IconZeplin from '@public/static/logo/skills/zeplin.png'
import IconJira from '@public/static/logo/skills/jira-confluence.png'
import IconRedhat from '@public/static/logo/skills/redhat.png'
import { Interpolation } from '@emotion/styled'
import { CSSObject, Theme, useTheme } from '@emotion/react'

type SkillItemProps = {
  src: string | StaticImageData
  imageContainerStyle: Interpolation<Theme>
  containerStyle?: CSSObject
}

const SkillItem = ({
  src,
  imageContainerStyle,
  containerStyle,
}: SkillItemProps) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    css={{
      borderWidth: 2,
      borderColor: '#eeeeee',
      borderStyle: 'solid',
      cursor: 'pointer',
      borderRadius: '1rem',
      userSelect: 'none',
      display: 'flex',
      width: '90px',
      height: '90px',
      alignItems: 'center',
      justifyContent: 'center',
      ...containerStyle,
    }}
  >
    <div css={imageContainerStyle}>
      <Image src={src} />
    </div>
  </motion.div>
)

const FrontendSection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
        }}
      >
        <Text
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          FrontEnd
        </Text>
        {/** 1 Line */}
        <article
          css={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'space-between',
            width: '280px',
          }}
        >
          <SkillItem
            src={IconHtml5}
            imageContainerStyle={{
              width: '4.25rem',
            }}
          />
          <SkillItem
            src={IconCss}
            imageContainerStyle={{
              width: '3rem',
            }}
          />
          <SkillItem
            src={IconJs}
            imageContainerStyle={{
              width: '3rem',
            }}
          />
        </article>

        {/** 2 Line */}
        <article
          css={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'space-between',
            width: '280px',
          }}
        >
          <SkillItem
            src={IconTs}
            imageContainerStyle={{
              width: '4rem',
            }}
          />

          <SkillItem
            src={IconSass}
            imageContainerStyle={{
              width: '10rem',
              marginLeft: '-1rem',
              marginRight: '-1rem',
            }}
          />

          <SkillItem
            src={IconStyledComponent}
            imageContainerStyle={{
              width: '4rem',
            }}
            containerStyle={{
              backgroundColor: 'black',
            }}
          />
        </article>

        {/** 3 Line */}
        <article
          css={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <SkillItem
            src={IconTailWind}
            imageContainerStyle={{
              width: '10rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 4 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconEmotion}
            imageContainerStyle={{
              width: '14rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 5 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconJquery}
            imageContainerStyle={{
              width: '14rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 6 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconReact}
            imageContainerStyle={{
              width: '12rem',
              paddingTop: '0.7rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 7 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconNext}
            imageContainerStyle={{
              width: '8rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 8 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconRedux}
            imageContainerStyle={{
              width: '12rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 9 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconMobx}
            imageContainerStyle={{
              width: '10rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>
      </div>
    </section>
  )
}

const BackendSection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
        }}
      >
        <Text
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Backend
        </Text>
        {/** 1 Line */}
        <article
          css={{
            display: 'flex',
            width: '280px',
          }}
        >
          <SkillItem
            src={IconNest}
            imageContainerStyle={{
              width: '9rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 2 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconMysql}
            imageContainerStyle={{
              width: '8rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 3 Line */}
        <article
          css={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <SkillItem
            src={IconPostgresql}
            imageContainerStyle={{
              width: '5rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />

          <SkillItem
            src={IconTypeorm}
            imageContainerStyle={{
              marginTop: '-0.25rem',
              width: '7rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>
      </div>
    </section>
  )
}

const MobileSection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
        }}
      >
        <Text
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Mobile App
        </Text>
        {/** 1 Line */}
        <article
          css={{
            display: 'flex',
            width: '280px',
          }}
        >
          <SkillItem
            src={IconReactNative}
            imageContainerStyle={{
              width: '14rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 2 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconNativeBase}
            imageContainerStyle={{
              width: '15rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>
      </div>
    </section>
  )
}

const DeploymentSection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
          gap: '0.5rem',
        }}
      >
        <Text
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Deployment
        </Text>
        {/** 1 Line */}
        <article
          css={{
            display: 'flex',
            width: '280px',
          }}
        >
          <SkillItem
            src={IconAmazon}
            imageContainerStyle={{
              width: '9rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 2 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconDocker}
            imageContainerStyle={{
              width: '11rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>
      </div>
    </section>
  )
}

const CommunitySection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
          gap: '0.5rem',
        }}
      >
        <Text
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Community
        </Text>
        {/** 1 Line */}
        <article
          css={{
            display: 'flex',
            width: '280px',
          }}
        >
          <SkillItem
            src={IconFigma}
            imageContainerStyle={{
              width: '9rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 2 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconZeplin}
            imageContainerStyle={{
              width: '10rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 3 Line */}
        <article
          css={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <SkillItem
            src={IconJira}
            imageContainerStyle={{
              width: '10rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>
      </div>
    </section>
  )
}

const ExtraSection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
        }}
      >
        <Text
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Extra
        </Text>
        {/** 1 Line */}
        <article
          css={{
            display: 'flex',
            width: '280px',
          }}
        >
          <SkillItem
            src={IconRedhat}
            imageContainerStyle={{
              width: '9rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>
      </div>
    </section>
  )
}

const MySkillSection = () => {
  return (
    <Section
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#ffc107',
        padding: '6rem 2rem',
      }}
    >
      <Center
        css={{
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <motion.div
          initial={{ translateY: 0, opacity: 0 }}
          whileInView={{
            translateY: -20,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
        >
          <Text
            css={{
              fontWeight: 'bold',
              fontSize: '4rem',
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              borderBottomStyle: 'solid',
            }}
          >
            SKILLS
          </Text>
        </motion.div>
        <motion.div
          css={{
            display: 'flex',
            marginTop: '3rem',
            justifyContent: 'center',
            width: '100%',
            gap: '2rem',
          }}
          viewport={{
            once: true,
          }}
          initial={{ translateY: 0, opacity: 0 }}
          whileInView={{
            translateY: -20,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
        >
          <FrontendSection />
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <BackendSection />
            <MobileSection />
            <DeploymentSection />
          </div>

          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <CommunitySection />
            <ExtraSection />
          </div>
        </motion.div>
      </Center>
    </Section>
  )
}

export default MySkillSection
