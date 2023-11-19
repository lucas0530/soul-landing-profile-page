import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import { Section } from './IntroSection.style'
import { motion } from 'framer-motion'
import { useTheme } from '@emotion/react'
import IconPlayauto from '@public/static/logo/skills/playauto.png'
import IconRidi from '@public/static/logo/skills/ridi.png'
import IconToss from '@public/static/logo/skills/toss.png'

import IconAha from '@public/static/logo/skills/aha.png'
import Image from 'next/image'
import Divider from '@components/atoms/Divider'
import { forwardRef, ForwardRefRenderFunction, ReactElement } from 'react'
import SectionTitle from '@components/organisms/SectionTitle'
import { SectionMethodsType } from 'pages'

type CareerItemType = {
  company: {
    title: string
    period: string[]
    bio: string | ReactElement
    imageComponent: ReactElement
    subbio: string | ReactElement
  }
  projectList: {
    title: string
    period: string[]
    description: (string | ReactElement)[]
  }[]
}

const CareerList: CareerItemType[] = [
  {
    company: {
      title: '토스뱅크',
      imageComponent: (
        <div
          css={{
            backgroundColor: 'white',
            borderRadius: '100%',
            width: '250px',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ccc',
          }}
        >
          <div
            css={{
              position: 'absolute',
              width: '18rem',
            }}
          >
            <Image src={IconToss} />
          </div>
        </div>
      ),
      period: ['2023.11', ''],
      bio: (
        <>
          토스뱅크는 2021년 12월 출범부터 지금까지 가파르게 성장하여{' '}
          <Text bold>800만</Text>이상의 고객수를 보유하고 있는
          <Text bold>제1금융 인터넷전문은행</Text>입니다.
        </>
      ),
      subbio: (
        <>
          프론트엔드 포지션으로 목돈 굴리기 서비스의 신규 개발 및 유지보수를
          담당하고 있습니다.
        </>
      ),
    },
    projectList: [
      {
        title: '목돈 굴리기 서비스 개발',
        period: ['2023.11', ''],
        description: ['현재 온보딩 과정을 수행하고 있습니다.'],
      },
    ],
  },
  {
    company: {
      title: '리디 (리디북스)',
      imageComponent: (
        <div
          css={{
            backgroundColor: 'white',
            borderRadius: '100%',
            width: '250px',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ccc',
          }}
        >
          <div
            css={{
              position: 'absolute',
              width: '12rem',
            }}
          >
            <Image src={IconRidi} />
          </div>
        </div>
      ),
      period: ['2023.02', '2023.11'],
      bio: (
        <>
          리디 (리디북스)는 웹툰, 웹소설, 만화, 전자책 등을 서비스하는 콘텐츠
          플랫폼입니다.
          <br />
          <Text bold>
            2,200만 이상의 월간활성사용자수(MAU)를 보유하고 있습니다.
          </Text>
        </>
      ),
      subbio: (
        <>
          기본적으로는 프론트엔드 포지션으로 리디 전체 서비스의 신규 개발 및
          유지보수를 담당하고 있습니다.
        </>
      ),
    },
    projectList: [
      {
        title: '배송지 입력 개발',
        period: ['2023.07', '2023.09'],
        description: [
          '리디의 "돌아온 대국민 도서 지원 프로젝트"은 전자책 + 리디페이퍼 기기의 결합 상품 프로모션으로 런칭 3일 만에 리디페이퍼 재고가 전부 소진될 정도로 인기가 많은 이벤트임',
          '본 프로젝트는 해당 이벤트를 포함하여 기기 상품을 배송하기 위해, 사용자의 배송지 정보를 입력받는 기능 개발을 포함하고 있음',
          '배포 전략으로 본 기능 프로덕션 배포 이후, LaunchDarkly를 통한 Feature-Flag 관리를 통해, 프로덕션 환경에서 Internal IP를 대상으로 한 라이브 테스트 진행 예정',
          '위의 배포 전략을 확보하기 위해 Trunk-Based Development 전략이 선 수행되었음',
        ],
      },
      {
        title: '상수리나무 아래 시즌3 프로모션 퀴즈 페이지 개발',
        period: ['2023.07', '2023.07'],
        description: [
          '상수리나무 아래는 리디의 메인 IP로서 틱톡 챌린지 7일 만에 3만 5천개의 동영상, 누적 조회수 60억을 돌파한 글로벌 인기 웹툰임',
          '본 프로젝트는 해당 웹툰의 시즌3 연재를 기념하여 마케팅을 목적으로 개발이 진행되었으며, 마케팅 목적에 걸맞게 소셜 공유, 오픈 그래프 메타 데이터, canvas를 통한 결과 콘텐츠 렌더링 등 다양한 기능 개발이 포함되어 있음',
          '프로모션 페이지 런칭 1일차에 신규 유저 6,500명 및 트위터 공유 1,000회를 기록하며 마켓팅에 있어 주요한 전략으로 자리매김함',
          '배포는 Netlify로 이루어졌으며 Netlify Edge Function의 Default AWS Region이 us-east-1임에 따라, SSR Latency를 줄이기 위해 한국과 물리적 거리가 가장 가까운 Region으로 변경 진행 ',
          '콘텐츠가 많은 프로모션 퀴즈 페이지 특성 상, 콘텐츠 다운로드 속도를 높이기 위해 Cloudflare 도입 및 OptimizedCache 처리 진행',
          'Zero Layout  Shift를 위한 Next Font Optimization, 이미지 사이즈 최적화를 위한 Next/Image 사용 등, NextJS13의 기능을 적극 활용하였음',
        ],
      },
      {
        title: '신간 페이지 리팩토링',
        period: ['2023.06', '2023.06'],
        description: [
          '리디의 웹사이트는 과거 PHP로 개발되어 있었으며, 생산성 증대 및 기술 스택 통일화를 위해 NextJS로의 리팩토링을 진행 중에 있음',
          '해당 프로젝트는 이에 대한 일환으로서, EKS의 Canary 배포 전략을 통해 점진적인 프로덕션 반영을 기대함',
        ],
      },
      {
        title: '키워드 파인더 웹뷰 개발',
        period: ['2023.03', '2023.04'],
        description: [
          '리디는 키워드에 따라 도서 및 웹툰 리스트를 필터링하여 보여주는 키워드 파인더 기능을 웹에서 서비스하고 있었으나 다수의 사용자가 모바일 사용자인 리디 서비스 특성 상 키워드 파인더의 앱 내 지원 요청이 누적 114건 인입됨',
          'gql-codegen을 통해 생성된 react-query API를 사용해 데이터를 패칭하였으며, 이전 회사에서 react-native를 다루었던 경험을 살려, QA 기간 중 주도적인 커뮤니케이션을 장려함',
          '신규 기능 런칭 이후 해당 기능을 사용하는 페이지에 대한 월 평균 트래픽이 32배 상승 (16만 -> 550만)',
        ],
      },
    ],
  },
  {
    company: {
      title: '(주) 더코퍼레이션 (아하)',
      imageComponent: (
        <div
          css={{
            backgroundColor: 'white',
            borderRadius: '100%',
            width: '250px',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ccc',
          }}
        >
          <div
            css={{
              position: 'absolute',
              width: '10rem',
            }}
          >
            <Image src={IconAha} />
          </div>
        </div>
      ),
      period: ['2021.07', '2022.12'],
      bio: (
        <>
          (주) 더코퍼레이션은{' '}
          <Text bold>아하 서비스를 개발 공급하고 있는 회사</Text>
          이며, 아하는 궁금한 점을 질문하면 검증된 전문가로 부터 답변을 받을 수
          있는 보상형 Q&A 서비스입니다.{'\n'}다양한 분야에 신뢰성과 전문성이
          높은 지식DB 보유를 통한 높은 검색 유입량으로{' '}
          <Text bold>
            400만 이상의 월간활성사용자수(MAU)와 2,500만 이상의 월 평균 페이지
            수(PV)를 보유
          </Text>
          하고 있습니다.
        </>
      ),
      subbio: (
        <>
          기본적으로는 프론트엔드 포지션으로 아하 서비스의 신규 개발을 맡았으며,
          <Text bold>
            스타트업 기업답게 중요도가 매우 높은 코어한 기능의 개발을 맡아 담당
            및 진행
          </Text>
          했습니다.
        </>
      ),
    },
    projectList: [
      {
        title: '아하 서비스 웹 마이그레이션',
        period: ['2022.10', ''],
        description: [
          '아하 서비스가 지속적으로 성장함에 따라 유저의 트래픽을 SSR로 감당하기 힘들어져, 기존 레거시 코드를 제거하고 효율적으로 캐싱 기능을 활용할 수 있도록 웹 서비스 마이그레이션 진행 중',
          'ECS 환경에서 동작하는 서비스를 CloudFront에 배포 진행해, 서버로 가중되는 트래픽을 최소화',
          'Style-Component를 기반으로한 컴포넌트 주도 개발(CDD)을 통해 StoryBook을 적극적으로 활용하여 디자이너 분과 상호 교류를 활발하게 진행',
        ],
      },
      {
        title: '1:1 전문가 상담 플랫폼, 아하 커넥츠 기능 개발',
        period: ['2021.07', '2021.12'],
        description: [
          '아하 커넥츠 서비스의 쿠폰 기능, 메인 배너 캐러셀 및 검색 기능 등 개발 진행',
          '개발 담당한 쿠폰 기능 등을 통한 마케팅 진행으로 고객 확보',
        ],
      },
      {
        title: '전문가 상담 서비스 개발',
        period: ['2021.09', '2021.10'],
        description: [
          'SendBird API를 기반으로 하는 아하 커넥츠 코어 기능(채팅 서비스) 개발',
          <>
            기존에 외주사로 부터 제공받아 동작하던{' '}
            <Text bold>Legacy 코드를 전부 걷어내고 새로이 개발 진행</Text>
          </>,
          '기존에 개발을 진행함에 있어 어려움이 있었던 기능들에 대한 개발 및 확장 진행(Delivery receipt, UX 향상 등)',
          '개발 이후로 전과 대비해 고객 니즈 사항이 대부분 수렴되어 개선 요구 CS가 줄어듦',
        ],
      },
      {
        title: '아하 앱 개발 (React)',
        period: ['2021.11', '2022.07'],
        description: [
          '일일 평균적으로 모바일 기기를 통해 접속하는 사용자가 전체 중 60 퍼센트로, 앱에 대한 니즈를 해결하기 위해 앱 개발을 진행함',
          <>
            React-Native를 사용한 네이티브 개발 특성 상, 최적의 성능을 기대하기
            위해{' '}
            <Text bold>
              컴포넌트 아키텍쳐 설계 및 React 라이브러리 이해도를 바탕으로 한
              성능 개선 작업 진행
            </Text>
          </>,
          <>
            앱 출시 후 <Text bold>양대 마켓 무료 인기앱 2위 달성</Text>
            했으며, 대대적인 마케팅으로 인한 고객 확보로 현재 진행 중임
          </>,
        ],
      },
    ],
  },
  {
    company: {
      title: '(주) 플레이오토',
      imageComponent: (
        <div
          css={{
            backgroundColor: 'white',
            borderRadius: '100%',
            width: '250px',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ccc',
          }}
        >
          <div
            css={{
              position: 'absolute',
              width: '20rem',
            }}
          >
            <Image src={IconPlayauto} />
          </div>
        </div>
      ),
      period: ['2019.11', '2021.07'],
      bio: '국내 최초, 국내 최다 쇼핑몰 통합 관리 솔루션을 서비스하는 플랫폼 회사입니다.',
      subbio: (
        <>
          기본적으로는 풀스택 포지션으로 차세대 솔루션 및 백오피스 개발을
          맡았으며,{' '}
          <Text bold>
            주 사용 기술스택 전환을 위해 코드 마이그레이션 프로젝트를 함께 운영
          </Text>
          했습니다.
        </>
      ),
    },
    projectList: [
      {
        title: '쇼핑몰 통합 관리 솔루션 통계 기능 개발',
        period: ['2019.12', '2020.01'],
        description: [
          'mysql procedure를 활용해 통계 REST API를 개발하고, 프론트 단에서 C3 Chart를 활용해 통계 UI 제공',
          '각 업체에게 상품별, 쇼핑몰별, 기초상품별 등 통계 기능을 제공하여, 고객 니즈 충족 및 사용자 편의성 제고를 도모함',
        ],
      },
      {
        title: '백오피스 작업리스트 개발',
        period: ['2020.01', '2020.09'],
        description: [
          'Jira Cloud Platform REST API를 사용하여 백오피스와 연동 진행',
          'CS, QA, 기획의 개발 현황 공유를 위해 진행되었으며, 지라 담당자, 상태 변경 등 다양한 상호작용을 지원함',
          '매일 새벽 Jira에 올라가 있는 이슈 및 프로젝트 리스트를 Amazon Lambda Crontab을 이용해 DB와 동기화 진행',
          '개발 이후로 전과 대비해 CS를 처리해주시는 분들과 기획자 분들이 백오피스에서 지라 데이터와 접근 가능해져 업무가 매우 수월해짐',
        ],
      },
      {
        title: '(주)플레이오토 공식 홈페이지 교육 기능 개발',
        period: ['2020.12', '2021.01'],
        description: [
          '(주)플레이오토의 솔루션 교육을 진행 및 관리하기 위해 개발됨',
          '백오피스를 통한 솔루션 교육 스케쥴 등록 가능, 고객 예약 시스템 구현',
          '특정 케이스에 대해 Amazon Lambda Crontab을 통해 Customer를 대상으로 교육 안내 메일 및 문자 발송 진행',
          <>
            개발 이후로 전과 대비해{' '}
            <Text bold>
              오프라인 및 온라인 교육 예약 신청자가 두 배 가까이 증가
            </Text>
          </>,
        ],
      },
      {
        title: '스와치 그룹 SAP 개발 진행',
        period: ['2021.01', '2021.04'],
        description: [
          '스와치 그룹 ASP 주문 데이터 연동 및 쇼핑몰 주문 건 자동 출고 및 재고 처리 진행',
          '자동 배포 구축을 위해 Github Action, Amazon ECS, Amazon ECR 사용',
          '안정적인 서비스의 공급으로 고객사 확보에 큰 역할을 수행함',
        ],
      },
      {
        title: '쇼핑몰 통합 관리 솔루션 코드 마이그레이션',
        period: ['2021.04', '2021.07'],
        description: [
          '기존 솔루션 코드는 AngularJS + Legacy Code로 작성되어 있어 유지보수에 한계가 있었음',
          <>
            <Text bold>
              ReactJS 라이브러리를 활용한 코드 마이그레이션 작업을 총괄
            </Text>
            하여 진행
          </>,
        ],
      },
    ],
  },
]

type CareerContentProps = {
  career: CareerItemType
}

const CareerContent = ({ career }: CareerContentProps) => (
  <motion.div
    css={{
      display: 'flex',
      width: '100%',
      maxWidth: '71.25rem',
      gap: '4rem',
      flexDirection: 'column',
      '@media (min-width: 800px)': {
        flexDirection: 'row',
      },
    }}
  >
    <div
      css={{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        paddingBottom: '4rem',
        display: 'flex',
        justifyContent: 'center',

        '@media (min-width: 800px)': {
          borderRightColor: '#ccc',
          borderRightWidth: 1,
          borderBottomWidth: 0,
          borderRightStyle: 'solid',
          paddingRight: '4rem',
        },
      }}
    >
      {career.company.imageComponent}
    </div>
    <div>
      <header>
        <div>
          <Text
            css={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
            }}
          >
            {career.company.title}
          </Text>
        </div>
        <div
          css={{
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          <Text
            css={{
              fontSize: '1.25rem',
              color: '#6c757d',
            }}
          >
            {career.company.period[0]} - {career.company.period[1]}
          </Text>
        </div>
      </header>
      <article>
        <Text
          css={{
            fontSize: '1.2rem',
          }}
        >
          {career.company.bio}
        </Text>
      </article>
      <article
        css={{
          marginTop: '1rem',
        }}
      >
        <Text
          css={{
            fontSize: '1.2rem',
          }}
        >
          {career.company.subbio}
        </Text>
      </article>
      <Divider
        style={{
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      />

      {/** TODO: 태그를 통해 사용 기술 추가하기 */}
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {career.projectList
          .sort(
            ({ period: [peroidA] }, { period: [peroidB] }) =>
              new Date(peroidB).getTime() - new Date(peroidA).getTime()
          )
          .map((project) => (
            <article key={project.title}>
              <Text
                css={{
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                }}
              >
                ▎ {project.title}
              </Text>
              <div
                css={{
                  marginTop: '0.5rem',
                  marginBottom: '0.5rem',
                }}
              >
                <Text
                  css={{
                    fontSize: '1.1rem',
                    color: '#6c757d',
                  }}
                >
                  {project.period[0]} - {project.period[1]}
                </Text>
              </div>
              <ul
                css={{
                  paddingLeft: '1rem',
                  li: {
                    marginBottom: '0.5rem',
                  },
                }}
              >
                {project.description.map((desc, idx) => (
                  <li key={idx}>
                    <Text>{desc}</Text>
                  </li>
                ))}
              </ul>
            </article>
          ))}
      </div>
    </div>
  </motion.div>
)

type CareerSectionProps = {
  sectionMethods: SectionMethodsType
}

const CareerSection: ForwardRefRenderFunction<
  HTMLDivElement,
  CareerSectionProps
> = ({ sectionMethods }, ref) => {
  return (
    <Section
      ref={ref}
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#f5f5f5',
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
          title="CAREER"
          onClickScrollClip={() => sectionMethods.scrollToSection(4)}
        />

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
          viewport={{
            once: true,
          }}
          css={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '3rem',
            gap: '4rem',
          }}
        >
          {CareerList.map((career) => (
            <CareerContent career={career} key={career.company.title} />
          ))}
        </motion.div>
      </Center>
    </Section>
  )
}

export default forwardRef(CareerSection)
