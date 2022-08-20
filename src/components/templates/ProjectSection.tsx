import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import { Section } from './IntroSection.style'
import { motion } from 'framer-motion'
import { useTheme } from '@emotion/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import SectionTitle from '@components/organisms/SectionTitle'
import { SectionMethodsType } from 'pages'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import ProjectAha1 from '@public/static/images/project-aha-1.png'
import ProjectAha2 from '@public/static/images/project-aha-2.png'
import ProjectAha3 from '@public/static/images/project-aha-3.png'
import ProjectAha4 from '@public/static/images/project-aha-4.png'
import ProjectPort1 from '@public/static/images/project-port-1.png'
import ProjectPort2 from '@public/static/images/project-port-2.png'
import ProjectPort3 from '@public/static/images/project-port-3.png'
import ProjectPort4 from '@public/static/images/project-port-4.png'
import ProjectPort5 from '@public/static/images/project-port-5.png'
import Divider from '@components/atoms/Divider'
import androidMarket from '@public/static/logo/market/google-play.svg'
import iosMarket from '@public/static/logo/market/apple-store.png'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'

type ProjectSectionProps = {
  sectionMethods: SectionMethodsType
}

type SkillTagProps = {
  title: string
}

const SkillTag = ({ title }: SkillTagProps) => (
  <div
    css={{
      borderRadius: '1rem',
      border: '1px solid gray',
      padding: '0px 4px',
      cursor: 'pointer',
      userSelect: 'none',
    }}
  >
    <Text
      css={{
        fontSize: '0.875rem',
      }}
    >
      {title}
    </Text>
  </div>
)

const ProjectList = [
  {
    title: '아하앱',
    subTitle: '2021.11 - 2022.07 (사내 개발자 3人)',
    imageList: [ProjectAha1, ProjectAha2, ProjectAha3, ProjectAha4],
    description: (
      <>
        <div>
          <Text>
            아하 서비스는{' '}
            <Text bold>
              궁금한 점을 질문하면 검증된 전문가로 부터 답변을 받을 수 있는
              보상형 Q&A 서비스
            </Text>
            입니다. 아하 서비스의 모바일 디바이스 점유율이 전체 중 60 퍼센트로,
            비중이 높아{' '}
            <Text bold>
              모바일 디바이스에 대한 어플리케이션 니즈 해결을 위해 시작하게된
              프로젝트
            </Text>
            입니다. <br />
            <br />
            최대 3명의 개발진으로 이루어진 TF가 만들어져 8개월 동안 여정을
            함께했습니다. 이 프로젝트를 통해{' '}
            <Text bold>React 라이브러리를 더 깊게 이해할 수 있던 계기</Text>
            가 되었습니다.
            <br />
            <br />
            <Text bold>
              모바일 기기에서 실행되는 어플리케이션 특성 상, 성능 최적화가 매우
              중요하기 때문에, 효율적인 컴포넌트 아키텍쳐 설계 및 최적화 작업이
              필수적
            </Text>
            이었습니다. 이 과정에서{' '}
            <Text bold>
              리액트에 대해 좀 더 알아갈 수 있어 흥미로운 프로젝트
            </Text>
            였습니다.
            <br />
            <br />앱 출시 후 <Text bold>양대 마켓 무료 인기앱 2위 달성</Text>
            했으며, 현재 대대적인 마케팅을 통한 홍보를 진행 도중에 있습니다.
          </Text>
        </div>
        <div
          css={{
            marginTop: '1rem',
          }}
        >
          <button
            css={{
              backgroundColor: '#333',
              border: 0,
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: '#555',
              },
            }}
          >
            <Text
              css={{
                color: 'white',
                fontSize: '1.1rem',
              }}
            >
              자세히 보기 (작업 중)
            </Text>
          </button>
        </div>
      </>
    ),
    subDescription: [
      { title: '주요 기능', description: <Text>아하 서비스 전 기능</Text> },
      {
        title: 'URL',
        description: (
          <div
            css={{
              display: 'flex',
              gap: '0.5rem',
            }}
          >
            <div
              css={{
                width: 40,
                cursor: 'pointer',
              }}
              onClick={() =>
                window.open(
                  'https://play.google.com/store/apps/details?id=io.aha.app.aha'
                )
              }
            >
              <Image src={androidMarket} />
            </div>
            <div
              css={{
                width: 40,
                cursor: 'pointer',
              }}
              onClick={() =>
                window.open(
                  'https://apps.apple.com/kr/app/%EC%95%84%ED%95%98-%EA%B6%81%EA%B8%88%ED%95%A0-%EB%95%90-%EC%95%84%ED%95%98/id1615680677'
                )
              }
            >
              <Image src={iosMarket} />
            </div>
          </div>
        ),
      },
      {
        title: '기술 스택',
        description: (
          <div
            css={{
              display: 'flex',
              gap: '0.25rem',
              flexWrap: 'wrap',
            }}
          >
            <SkillTag title="React-Native" />
            <SkillTag title="NextJS" />
            <SkillTag title="React-Query" />
            <SkillTag title="Redux" />
            <SkillTag title="NativeBase" />
            <SkillTag title="Sentry" />
          </div>
        ),
      },
    ],
  },

  {
    title: '포트폴리오 사이트',
    subTitle: '2022.08 - 2022.08 (1人)',
    imageList: [
      ProjectPort1,
      ProjectPort2,
      ProjectPort3,
      ProjectPort4,
      ProjectPort5,
    ],
    description: (
      <>
        <div>
          <Text>
            <Text bold>포트폴리오 용도로 제작한 웹사이트</Text>입니다. <br />
            지금 보고 있는 바로 이 웹사이트에 해당합니다. <br />
            <br />
            Framer 라이브러리를 사용해 손쉽게 컴포넌트 단위로 애니메이션을
            적용할 수 있었고, 이를 통해 높은 퀄리티의 사용자 인터렉션을 제공할
            수 있어 재미있는 경험이었습니다.
            <br />
            <br />
            Github Action을 통한 S3 배포 및 CloudFront Invalidation을 통해{' '}
            <Text bold>자동화 배포를 구현</Text>했으며, Route53을 통해 도메인을
            할당 받아, 보고 계시는 사이트를 여러분들께 서빙할 수 있었습니다.
          </Text>
        </div>
      </>
    ),
    subDescription: [
      { title: '주요 기능', description: <Text>포트폴리오</Text> },
      {
        title: 'URL',
        description: (
          <a
            target="_blank"
            href="https://github.com/KZ-Lucas/soul-landing-profile-page"
          >
            https://github.com/KZ-Lucas/soul-landing-profile-page
          </a>
        ),
      },
      {
        title: '기술 스택',
        description: (
          <div
            css={{
              display: 'flex',
              gap: '0.25rem',
              flexWrap: 'wrap',
            }}
          >
            <SkillTag title="NextJS" />
            <SkillTag title="Framer" />
            <SkillTag title="Emotion" />
            <SkillTag title="AWS" />
          </div>
        ),
      },
    ],
  },
]

const ProjectSection: ForwardRefRenderFunction<
  HTMLDivElement,
  ProjectSectionProps
> = ({ sectionMethods }, ref) => {
  const theme = useTheme()

  SwiperCore.use([Navigation, Pagination, Autoplay]) // 추가

  return (
    <Section
      ref={ref}
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#4244ff',
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
          title="PROJECT"
          color={theme.colors.white}
          onClickScrollClip={() => sectionMethods.scrollToSection(5)}
        />

        {ProjectList.map((project) => (
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
              width: '100%',
              marginTop: '4rem',
              justifyContent: 'center',
            }}
          >
            <Center
              css={{
                padding: '3rem',
                borderRadius: '1rem',
                backgroundColor: theme.colors.white,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Text
                bold
                css={{
                  fontSize: '2rem',
                }}
              >
                {project.title}
              </Text>
              <Text
                css={{
                  color: '#6c757d',
                }}
              >
                {project.subTitle}
              </Text>

              <div
                css={{
                  display: 'flex',
                  gap: '2rem',
                  marginTop: '3rem',
                  width: '100%',
                  alignItems: 'center',
                  maxWidth: '71.25rem',
                  flexDirection: 'column',
                  '@media (min-width: 800px)': {
                    flexDirection: 'row',
                  },
                }}
              >
                <div
                  css={{
                    width: '100%',
                    '@media (min-width: 800px)': {
                      width: '50%',
                    },
                  }}
                >
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                    }}
                    loop
                    navigation
                    pagination={{ clickable: true }}
                  >
                    {project.imageList.map((image) => (
                      <SwiperSlide>
                        <div
                          css={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            userSelect: 'none',
                          }}
                        >
                          <Image src={image} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div
                  css={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '@media (min-width: 800px)': {
                      width: '50%',
                    },
                  }}
                >
                  <div>{project.description}</div>

                  <div>
                    <Divider
                      style={{
                        paddingBottom: '1rem',
                        marginBottom: '1rem',
                      }}
                    />

                    <div
                      css={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                      }}
                    >
                      {project.subDescription.map(({ title, description }) => (
                        <div
                          css={{
                            display: 'flex',
                          }}
                        >
                          <div
                            css={{
                              width: '9rem',
                            }}
                          >
                            <Text>{title}</Text>
                          </div>
                          <div>{description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Center>
          </motion.div>
        ))}
      </Center>
    </Section>
  )
}

export default forwardRef(ProjectSection)
