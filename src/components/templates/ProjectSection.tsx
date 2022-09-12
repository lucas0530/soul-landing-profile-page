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
import ProjectDame1 from '@public/static/images/project-dame-1.png'
import ProjectDame2 from '@public/static/images/project-dame-2.png'
import ProjectDame3 from '@public/static/images/project-dame-3.png'
import ProjectBm1 from '@public/static/images/project-bm-1.jpg'
import ProjectBm2 from '@public/static/images/project-bm-2.jpg'
import ProjectBm3 from '@public/static/images/project-bm-3.jpg'
import ProjectBm4 from '@public/static/images/project-bm-4.jpg'
import ProjectBm5 from '@public/static/images/project-bm-5.jpg'
import ProjectBm6 from '@public/static/images/project-bm-6.jpg'

import Divider from '@components/atoms/Divider'
import androidMarket from '@public/static/logo/market/google-play.svg'
// import close from '@public/static/icon/object/close.svg'
import iosMarket from '@public/static/logo/market/apple-store.png'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
// import Portal from '@components/atoms/Portal'

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
        {/* <div
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
        </div> */}
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
            rel="noopener noreferrer"
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

  {
    title: 'Dame Da Ne meme generator',
    subTitle: '2020.10 - 2020.10 (1人)',
    imageList: [ProjectDame3, ProjectDame1, ProjectDame2],
    description: (
      <>
        <div>
          <Text>
            전세계적으로 유행중인 <Text bold>다메다메 밈(Dame Da Ne meme)</Text>
            을 이미지 한장을 통해 원버튼으로 만들 수 있도록 하여, 수 많은
            분들에게 사랑을 받을 수 있었던 개인 프로젝트입니다.
            <br />
            <Text bold>딥페이크 API를 활용</Text>해 정적인 이미지가 다메다메 밈
            원 동영상처럼 움직일 수 있도록 하였습니다.
            <br />
            또한,{' '}
            <Text bold>i18n을 통해 외국인도 쉽게 이용하실 수 있도록 개발</Text>
            하였습니다.
            <br />
            <br />
            GPU 연산을 필요로 하는 딥페이크 API 특성상, 동시 접속자가 일정 이상
            모이게 되었을 때{' '}
            <Text bold>
              서버의 성능이 느려지는 것을 방지하기 위해, AWS의 Simple Queue
              Service(SQS)를 적극 활용
            </Text>
            하였습니다.
            <br />
            <br />
            많게는{' '}
            <Text bold>
              하루에 700명 이상의 사용자와 1700번의 이상의 페이지뷰를 기록
            </Text>
            했으며, <Text bold>평균 세션 시간 9분을 기록</Text>했습니다.
            <br />
            평균 세션 시간을 이용해 카카오 애드핏을 활용, 많게는{' '}
            <Text bold>하루에 5만번 이상의 광고요청수를 기록</Text>했습니다.
            <br />
            <br />
            최종적으로는{' '}
            <Text bold>
              기업의 도움을 받아, 부담됐던 서버비를 줄일 수 있게 되었습니다.
            </Text>
          </Text>
        </div>
      </>
    ),
    subDescription: [
      { title: '주요 기능', description: <Text>다메다메 밈 제작</Text> },
      {
        title: 'URL',
        description: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=UlFRB3F8TyE"
          >
            초등학생 유투버가 녹화한 동작 영상 #1
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
            <SkillTag title="Koa" />
            <SkillTag title="Socket.IO" />
            <SkillTag title="SQS" />
            <SkillTag title="S3" />
            <SkillTag title="EC2" />
          </div>
        ),
      },
    ],
  },

  {
    title: 'Behavior Monitoring',
    subTitle: '2019.05 - 2019.11 (1人)',
    imageList: [
      ProjectBm1,
      ProjectBm2,
      ProjectBm3,
      ProjectBm4,
      ProjectBm5,
      ProjectBm6,
    ],
    description: (
      <>
        <div>
          <Text>
            경쟁력이 떨어지는 기존 자사 제품의 UI를 대체하기 위해 BootStrap
            Template에 기반에 새롭게 작성한 웹 애플리케이션입니다.
            <br />
            해당 웹 애플리케이션은 Agent Driver가 설치된 OS의 파일, 프로세스,
            네트워크에 대한 모든 생성 및 변경, 요청 등의 액션을 수집하고, 이를
            토대로 의심 행동을 나타내어주는 기능을 제공합니다.
            <br />
            <br />웹 애플리케이션 개발을 배우기 시작하면서 초기에 진행된
            프로젝트로, 당시 BootStrap Template 저작권을 구매하여 MPA 기반의 웹
            애플리케이션을 설계했습니다.
            <br />
            <br />
            당시 PHP로 서비스되던 웹 애플리케이션의 경우 블로킹 I/O로 인해 UX에
            치명적이었고, 이를 해결하기 위해 기존 쿼리를 수행하던 PHP 코드를
            NodeJS 코드로 마이그레이션을 진행하면서 백엔드 개발 또한 함께
            진행하였습니다.
            <br />
            <br />
            실제로 개발된 웹 애플리케이션이 기관에 납품되는 등 실적을 얻을 수
            있던 프로젝트였습니다.
          </Text>
        </div>
      </>
    ),
    subDescription: [
      {
        title: '주요 기능',
        description: (
          <Text>
            내부자에 의한 정보유출 행위 및 외부 침입자의 해킹 행위에 대한
            모니터링
          </Text>
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
            <SkillTag title="JQuery" />
            <SkillTag title="Express" />
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
            key={project.title}
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
                      <SwiperSlide key={image.src}>
                        <div
                          css={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            userSelect: 'none',
                          }}
                        >
                          <Image src={image} alt={image.src} />
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
                          key={title}
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
      {/* <Portal>
        <Center
          id="TEST"
          css={{
            height: '100%',
            width: '100%',
            position: 'fixed',
            top: 0,
          }}
        >
          <div
            css={{
              height: '100%',
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: '3rem',
            }}
          >
            <div
              css={{
                position: 'absolute',
                top: 0,
                right: 0,
                padding: '1rem',
              }}
            >
              <Image
                src={close}
                width="28px"
                height="28px"
                onClick={() => {}}
                css={{
                  cursor: 'pointer',
                }}
              />
            </div>
            <div>
              <Text>ㅁㄴㅇㅁㄴㅇㄴㅁㅇ</Text>
            </div>
          </div>
        </Center>
      </Portal> */}
    </Section>
  )
}

export default forwardRef(ProjectSection)
