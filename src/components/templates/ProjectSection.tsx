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
              아하앱
            </Text>
            <Text
              css={{
                color: '#6c757d',
              }}
            >
              2021.11 - 2022.07 (사내 개발자 3人)
            </Text>

            <div
              css={{
                display: 'flex',
                gap: '2rem',
                marginTop: '3rem',
                width: '100%',
                maxWidth: '71.25rem',
              }}
            >
              <div
                css={{
                  width: '50%',
                }}
              >
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{
                    delay: 3000,
                  }}
                  loop
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  navigation
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <div
                      css={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        userSelect: 'none',
                      }}
                    >
                      <Image src={ProjectAha1} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      css={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        userSelect: 'none',
                      }}
                    >
                      <Image src={ProjectAha2} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      css={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        userSelect: 'none',
                      }}
                    >
                      <Image src={ProjectAha3} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      css={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        userSelect: 'none',
                      }}
                    >
                      <Image src={ProjectAha4} />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div>
                <div>
                  <Text>
                    아하 서비스는{' '}
                    <Text bold>
                      궁금한 점을 질문하면 검증된 전문가로 부터 답변을 받을 수
                      있는 보상형 Q&A 서비스
                    </Text>
                    입니다. 아하 서비스의 모바일 디바이스 점유율이 전체 중 60
                    퍼센트로, 비중이 높아{' '}
                    <Text bold>
                      모바일 디바이스에 대한 어플리케이션 니즈 해결을 위해
                      시작하게된 프로젝트
                    </Text>
                    입니다. <br />
                    <br />
                    최대 3명의 개발진으로 이루어진 TF가 만들어져 8개월 동안
                    여정을 함께했습니다. 이 프로젝트를 통해{' '}
                    <Text bold>
                      React 라이브러리를 더 깊게 이해할 수 있던 계기
                    </Text>
                    가 되었습니다.
                    <br />
                    <br />
                    <Text bold>
                      모바일 기기에서 실행되는 어플리케이션 특성 상, 성능
                      최적화가 매우 중요하기 때문에, 효율적인 컴포넌트 아키텍쳐
                      설계 및 최적화 작업이 필수적
                    </Text>
                    이었습니다. 이 과정에서{' '}
                    <Text bold>
                      리액트에 대해 좀 더 알아갈 수 있어 흥미로운 프로젝트
                    </Text>
                    였습니다.
                    <br />
                    <br />앱 출시 후{' '}
                    <Text bold>양대 마켓 무료 인기앱 2위 달성</Text>했으며, 현재
                    대대적인 마케팅을 통한 홍보를 진행 도중에 있습니다.
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
                      <Text>주요 기능</Text>
                    </div>
                    <div>
                      <Text>아하 서비스 전 기능</Text>
                    </div>
                  </div>

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
                      <Text>URL</Text>
                    </div>
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
                  </div>

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
                      <Text>기술 스택</Text>
                    </div>
                    <div
                      css={{
                        display: 'flex',
                        gap: '0.25rem',
                      }}
                    >
                      <SkillTag title="React-Native" />
                      <SkillTag title="NextJS" />
                      <SkillTag title="FireBase" />
                      <SkillTag title="NativeBase" />
                      <SkillTag title="Sentry" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Center>
        </motion.div>
      </Center>
    </Section>
  )
}

export default forwardRef(ProjectSection)
