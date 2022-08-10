import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import { useTheme } from '@emotion/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Section } from './IntroSection.style'

const PAGE_HEIGHT = 4200
const MOTION_OFFSET = {
  WELCOME_CONTAINER_SCALE: [0, 900],
  WELCOME_MAIN_TITLE_OPACITY: [700, 900],
  WELCOME_SUB_TITLE_OPACITY: [500, 700],
  BIO_MAIN_TITLE_OPACITY: [1000, 2400],
  BIO_SUB_TITLE_OPACITY: [1400, 2400],
  BIO_MAIN_TITLE_TRANSLATE_Y: [1000, 1400],
  BIO_CONTAINER_HOLDUP_Y: 3400,
  READ_MORE_BUTTON_OPACITY: [2800, 3000],
  READ_MORE_BUTTON_TRANSLATE_Y: [2800, 3000],
}

const WelcomeFixedMotion = () => {
  const { scrollY } = useScroll()
  const theme = useTheme()

  /** container motion styles */
  const containerScale = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_CONTAINER_SCALE,
    [1, 1.2]
  )

  /** main title motion styles */
  const mainTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_MAIN_TITLE_OPACITY,
    [1, 0]
  )

  /** sub title motion styles */
  const subTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.WELCOME_SUB_TITLE_OPACITY,
    [1, 0]
  )

  return (
    <Center type="fixed">
      <Center
        css={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <motion.div style={{ scale: containerScale }}>
          <motion.div
            style={{ opacity: mainTitleOpacity }}
            css={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Text
              css={{
                color: theme.colors.white,
                fontSize: '8rem',
                textAlign: 'center',
              }}
            >
              안녕하세요!
            </Text>
          </motion.div>

          <motion.div
            style={{ opacity: subTitleOpacity }}
            css={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Text
              css={{
                color: 'white',
                fontSize: '2.5rem',
                textAlign: 'center',
              }}
            >
              FE개발자 최근원입니다
            </Text>
          </motion.div>
        </motion.div>
      </Center>
    </Center>
  )
}

const BioFixedMotion = () => {
  const { scrollY } = useScroll()
  const theme = useTheme()

  /** container motion styles */
  const containerTranslateY = useTransform(scrollY, (value) =>
    value > MOTION_OFFSET.BIO_CONTAINER_HOLDUP_Y
      ? MOTION_OFFSET.BIO_CONTAINER_HOLDUP_Y - value
      : 0
  )

  /** main title motion styles */
  const mainTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.BIO_MAIN_TITLE_OPACITY,
    [0, 1]
  )
  const mainTitleTranslateY = useTransform(
    scrollY,
    MOTION_OFFSET.BIO_MAIN_TITLE_TRANSLATE_Y,
    [0, -10]
  )

  /** sub title motion styles */
  const subTitleOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.BIO_SUB_TITLE_OPACITY,
    [0, 1]
  )

  /** button motion styles */
  const buttonOpacity = useTransform(
    scrollY,
    MOTION_OFFSET.READ_MORE_BUTTON_OPACITY,
    [0, 1]
  )

  const buttonTranslateY = useTransform(
    scrollY,
    MOTION_OFFSET.READ_MORE_BUTTON_TRANSLATE_Y,
    [0, -10]
  )

  const buttonPointerEvent = useTransform(scrollY, (value) =>
    value > MOTION_OFFSET.READ_MORE_BUTTON_OPACITY[0] ? 'auto' : 'none'
  )

  return (
    <Center type="fixed">
      <Center
        css={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <motion.div
          style={{
            translateY: containerTranslateY,
          }}
        >
          <motion.div
            style={{
              opacity: mainTitleOpacity,
              translateY: mainTitleTranslateY,
            }}
            css={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Text
              css={{
                color: theme.colors.white,
                fontSize: '4rem',
                textAlign: 'center',
              }}
            >
              FE개발자 최근원
            </Text>
          </motion.div>

          <motion.div
            style={{ opacity: subTitleOpacity }}
            css={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Text
              css={{
                color: 'white',
                fontSize: '2rem',
                textAlign: 'center',
              }}
            >
              {
                '기본에 충실해지고 싶은 3년차 개발자입니다.\n프론트 전반에 걸쳐 지식에 대한 열망이 아주 강합니다.'
              }
            </Text>
          </motion.div>

          <motion.div
            style={{
              opacity: buttonOpacity,
              translateY: buttonTranslateY,
              pointerEvents: buttonPointerEvent,
            }}
            css={{
              marginBottom: '-4rem',
              marginTop: '4rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button
              css={{
                borderColor: theme.colors.white,
                borderWidth: 2,
                borderStyle: 'solid',
                borderRadius: '980px',
                backgroundColor: 'black',
                height: '52px',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: 'white',
                  transition: 'background-color 350ms ease-in-out',
                  span: {
                    transition: 'color 350ms ease-in-out',
                    color: 'black',
                  },
                },
              }}
            >
              <span
                css={{
                  color: 'white',
                  fontSize: '1rem',
                }}
              >
                저를 조금 더 알아보고 싶나요?
              </span>
            </button>
          </motion.div>
        </motion.div>
      </Center>
    </Center>
  )
}

function IntroSection() {
  const theme = useTheme()

  return (
    <Section
      css={{
        backgroundColor: theme.colors.black,
        height: PAGE_HEIGHT,
        position: 'relative',
      }}
    >
      <WelcomeFixedMotion />
      <BioFixedMotion />
    </Section>
  )
}

export default IntroSection
