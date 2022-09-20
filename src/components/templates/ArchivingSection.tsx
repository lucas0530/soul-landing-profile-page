import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import { Section } from './IntroSection.style'
import { motion } from 'framer-motion'
import { useTheme } from '@emotion/react'
import IconPortfolio from '@public/static/images/portfolio-logo.png'
import IconGithub from '@public/static/logo/skills/github.png'
import IconVelog from '@public/static/logo/skills/velog.png'
import Image from 'next/image'
import SectionTitle from '@components/organisms/SectionTitle'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { SectionMethodsType } from 'pages'

// TODO: black 컬러 일부 gray.800 수정
type ArchivingSectionProps = {
  sectionMethods: SectionMethodsType
}

const ArchivingSection: ForwardRefRenderFunction<
  HTMLDivElement,
  ArchivingSectionProps
> = ({ sectionMethods }, ref) => {
  const theme = useTheme()

  return (
    <Section
      ref={ref}
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#212529',
        padding: '6rem 2rem',
      }}
    >
      <Center
        css={{
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <SectionTitle
          title="ARCHIVING"
          color={theme.colors.white}
          onClickScrollClip={() => sectionMethods.scrollToSection(3)}
        />

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
          viewport={{
            once: true,
          }}
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
            marginTop: '3rem',
          }}
        >
          <div
            css={{
              display: 'flex',
              gap: '4rem',
              flexDirection: 'column',
              '@media (min-width: 1200px)': {
                flexDirection: 'row',
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open('https://github.com/KZ-Lucas')}
              css={{
                backgroundColor: '#f5f5f5',
                padding: '2rem',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                flex: 1,
              }}
            >
              <div
                css={{
                  width: '12rem',
                  marginLeft: '-0.25rem',
                }}
              >
                <Image src={IconGithub} />
              </div>
              <div
                css={{
                  marginTop: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <a
                  css={{
                    whiteSpace: 'nowrap',
                  }}
                  href="https://github.com/KZ-Lucas"
                >
                  github.com/KZ-Lucas
                </a>
              </div>

              <div>
                <Text
                  css={{
                    fontWeight: 'bold',
                  }}
                >
                  소스 코드 저장소
                </Text>
                <Text>입니다.</Text>
              </div>
              <ul
                css={{
                  paddingLeft: '1rem',
                  li: {
                    marginBottom: '0.5rem',
                  },
                }}
              >
                <li>
                  <Text>과거 프로젝트, 프로그램, 앱의 소스 코드</Text>
                </li>
                <li>
                  <Text>멘토링 중인 Organizations의 소스 코드</Text>
                </li>
                <li>
                  <Text>라이브러리 활동 내역 등</Text>
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open('https://velog.io/@lucas')}
              css={{
                backgroundColor: '#f5f5f5',
                padding: '2rem',
                borderRadius: '1rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
            >
              <div
                css={{
                  marginTop: '-1.5rem',
                  marginBottom: '-2.5rem',
                  marginLeft: '-3.5rem',
                  width: '14rem',
                }}
              >
                <Image src={IconVelog} />
              </div>
              <div
                css={{
                  marginTop: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <a
                  css={{
                    whiteSpace: 'nowrap',
                  }}
                  href="https://velog.io/@lucas"
                >
                  velog.io/@lucas
                </a>
              </div>

              <div>
                <Text
                  css={{
                    fontWeight: 'bold',
                  }}
                >
                  스터디 및 지식 공유 목적의 블로그
                </Text>
                <Text>입니다.</Text>
              </div>
              <ul
                css={{
                  paddingLeft: '1rem',
                  li: {
                    marginBottom: '0.5rem',
                  },
                }}
              >
                <li>
                  <Text>공부한 내용을 머리로 정리하기 위해 작성한 기록</Text>
                </li>
                <li>
                  <Text>한층 더 성장한 개발자가 되기 위한 몸부림</Text>
                </li>
                <li>
                  <Text>알고 있는 지식을 공유하고 피드백을 받기 위한 자리</Text>
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              window.open(
                'https://soul-static.s3.ap-northeast-2.amazonaws.com/%EC%B5%9C%EA%B7%BC%EC%9B%90+%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4.pdf'
              )
            }
            css={{
              backgroundColor: '#f5f5f5',
              padding: '2rem',
              borderRadius: '1rem',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
            }}
          >
            <div
              css={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '4rem',
                }}
              >
                <Image src={IconPortfolio} />
              </div>
              <div
                css={{
                  marginBottom: '-0.8rem',
                }}
              >
                <Text
                  bold
                  css={{
                    fontSize: '3rem',
                  }}
                >
                  Portfolio
                </Text>
              </div>
            </div>
            <div
              css={{
                marginTop: '1rem',
                marginBottom: '1rem',
              }}
            >
              <Text
                bold
                css={{
                  whiteSpace: 'nowrap',
                }}
              >
                클릭 시 포트폴리오 pdf 파일로 이동합니다.
              </Text>
            </div>

            <div>
              <Text>이력서를 보완하기 위해 작성한 포트폴리오입니다.</Text>
              <br />
              <Text>
                업무를 진행하면서 기능을 개선하거나 문제를 해결한 내용을
                담았습니다.
              </Text>
              <br />
              <br />
              <Text>
                ※ 개인 프로젝트에 대한 포트폴리오는 별도로 작성해 게시할
                예정입니다.
              </Text>
            </div>
          </motion.div>
        </motion.div>
      </Center>
    </Section>
  )
}

export default forwardRef(ArchivingSection)
