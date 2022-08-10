import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import { Section } from './IntroSection.style'
import { motion } from 'framer-motion'

const ABOUT_ME_FIELD = [
  { title: '이름', fields: ['최근원'] },
  { title: '생년월일', fields: ['1998.05.30'] },
  { title: '연락처', fields: ['010-4902-0651', 'chlrmsdnjs9862@gmail.com'] },
]

const AboutMeSection = () => {
  return (
    <Section
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'white',
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
          transition={{
            delay: 0.3,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
        >
          <Text
            css={{
              fontWeight: 'bold',
              fontSize: '4rem',
              borderBottomColor: '#cccccc',
              borderBottomWidth: 2,
              borderBottomStyle: 'solid',
            }}
          >
            ABOUT ME
          </Text>
        </motion.div>

        <motion.div
          initial={{ translateY: 0, opacity: 0 }}
          whileInView={{
            translateY: -20,
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
          css={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            marginTop: '4rem',
          }}
        >
          {ABOUT_ME_FIELD.map(({ fields, title }) => (
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem',
                flex: 1,
              }}
            >
              <Text
                css={{
                  fontSize: '2rem',
                  borderBottomColor: '#cccccc',
                  borderBottomWidth: 2,
                  borderBottomStyle: 'solid',
                }}
              >
                {title}
              </Text>
              {fields.map((field) => (
                <Text
                  css={{
                    fontSize: '1rem',
                  }}
                >
                  {field}
                </Text>
              ))}
            </div>
          ))}
        </motion.div>
      </Center>
    </Section>
  )
}

export default AboutMeSection
