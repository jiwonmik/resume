import type { T } from '../hooks/useLanguage';
import { CASE_STUDY_ROUTE, AGENT_CONCURRENCY_ROUTE } from '../routes';

interface Props { t: T }

const dataAssistant = {
  key: 'data-assistant',
  icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  title: { en: 'Data Assistant', ko: 'Data Assistant' },
  desc: {
    en: 'Conversational AI product for music-industry analytics. Text-to-SQL multi-agent with RAG, a citation system for grounded responses, intent classification, and credit-based usage. Shipped to production for 2,200+ premium users with 76% monthly retention and a 92% grounded-response rate.',
    ko: '음악 산업 분석을 위한 대화형 AI 제품. RAG, 근거 기반 응답을 위한 Citation 시스템, 의도 분류, 크레딧 기반 사용량을 갖춘 Text-to-SQL 멀티 에이전트. 2,200+ 프리미엄 사용자 대상 프로덕션 출시, 월간 재방문율 76%, 근거 기반 응답률 92% 달성.',
  },
  tags: ['LangGraph', 'Python', 'ClickHouse', 'RabbitMQ', 'Socket.IO', 'React', 'OpenRouter'],
};

const dataAssistantTools = [
  {
    key: 'conversation-debugger',
    badge: { en: 'Built before LangSmith', ko: 'LangSmith 이전에 직접 구축' },
    href: undefined as string | undefined,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
    title: { en: 'Conversation Debugger', ko: 'Conversation Debugger' },
    desc: {
      en: 'Before LangSmith was viable in production, I built a custom checkpoint-based debugger. Any team member could inspect every decision node, tool call, and state transition — cutting diagnosis from hours to minutes.',
      ko: 'LangSmith 이전에 직접 체크포인트 기반 디버거를 구축. 팀 누구든 결정 노드·툴 호출·상태 전이를 실시간 확인 — 장애 원인 파악을 수 시간에서 수 분으로 단축.',
    },
    tags: ['Python', 'LangGraph', 'React', 'TypeScript', 'Custom Observability'],
  },
  {
    key: 'agent-admin',
    badge: null,
    href: undefined as string | undefined,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: { en: 'No-Code Agent Admin', ko: 'No-Code Agent Admin' },
    desc: {
      en: 'Internal admin UI for end-to-end agent management — prompt editing, model selection, temperature, and versioning. Eliminated engineering bottlenecks for non-technical stakeholders.',
      ko: '프롬프트 편집, 모델 선택, temperature, 버저닝을 포함한 에이전트 관리용 노코드 어드민 UI. 비개발 직군의 병목 제거.',
    },
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    key: 'resilient-chat-architecture',
    badge: { en: 'Architecture write-up', ko: '아키텍처 문서' },
    href: CASE_STUDY_ROUTE,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M13 2 3 14h7l-1 8 11-14h-7l0-6z" />
      </svg>
    ),
    title: { en: 'Resilient Real-Time Chat Architecture', ko: '복원력 있는 실시간 채팅 아키텍처' },
    desc: {
      en: 'Decoupled agent execution from the Socket.IO connection with an independent RabbitMQ worker so jobs survive tab close, refresh, and redeploys — with a Redis Streams adapter syncing events across instances and multi-tab state sync.',
      ko: '에이전트 작업을 Socket.IO 연결과 분리하고 RabbitMQ 기반 독립 Worker를 도입해 탭 종료·새로고침·배포에도 작업이 지속되도록 설계. Redis Streams Adapter로 다중 인스턴스 이벤트를 동기화하고 멀티탭 상태를 맞췄습니다.',
    },
    tags: ['RabbitMQ', 'Redis Streams', 'Socket.IO', 'React'],
  },
  {
    key: 'agent-concurrency',
    badge: { en: 'Architecture write-up', ko: '아키텍처 문서' },
    href: AGENT_CONCURRENCY_ROUTE,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
    title: { en: 'Agent Concurrency & Async Design', ko: '에이전트 동시성 & 비동기 처리 설계' },
    desc: {
      en: 'Prevented duplicate execution and race conditions with an asyncio.Lock-guarded conversation registry, moved reasoning-summary calls to a fire-and-forget background task, and parallelized tool calls with asyncio.gather (capped concurrency, isolated per-tool exceptions).',
      ko: 'asyncio.Lock으로 보호한 대화 단위 레지스트리로 중복 실행·Race Condition 방지, reasoning 요약 호출을 백그라운드 fire-and-forget 태스크로 분리, asyncio.gather로 Tool 호출을 동시 실행 수 제한·예외 격리와 함께 병렬화.',
    },
    tags: ['Python', 'FastAPI', 'asyncio', 'LangChain'],
  },
];

const otherProjects = [
  {
    key: 'enterprise-dashboard',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: { en: 'Enterprise Analytics Dashboard', ko: '엔터프라이즈 분석 대시보드' },
    desc: {
      en: 'Self-serve analytics platform with dimension/metric classification, chart-to-table cross-interaction, and a configuration snapshot editor for real-time state observability.',
      ko: '차원·지표 분류, 차트→테이블 크로스 인터랙션 및 설정 스냅샷 에디터를 갖춘 셀프서브 분석 플랫폼.',
    },
    tags: ['React', 'TypeScript', 'Chart.js', 'PostgreSQL', 'Node.js'],
  },
  {
    key: 'cloud-ids',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: { en: 'Cloud Intrusion Detection System', ko: '클라우드 침입 탐지 시스템' },
    desc: {
      en: 'CNN-based network intrusion detection against DoS attacks, developed as undergraduate research funded by the National Research Foundation of Korea. Published in Electronics (IF 2.690).',
      ko: '한국연구재단 지원 학부 연구 과제로 개발한 CNN 기반 DoS 공격 탐지 시스템. Electronics (IF 2.690) 게재.',
    },
    tags: ['Python', 'CNN', 'Network Security'],
  },
];

export default function Projects({ t }: Props) {
  return (
    <section className="section" id="projects">
      <p className="section-label">// {t({ en: 'Projects', ko: '프로젝트' })}</p>
      <h2 className="section-heading">{t({ en: "What I've Built", ko: '만든 것들' })}</h2>
      <p className="section-sub">{t({ en: 'A selection of products and tools I shipped.', ko: '제가 만든 제품과 도구들입니다.' })}</p>

      {/* Featured project */}
      <div className="project-card project-card--featured project-card--full">
        <div className="project-card-header">
          <span className="project-icon">{dataAssistant.icon}</span>
          <h3>
            <a
              href="https://www.linkedin.com/posts/helloakashm_very-excited-to-launch-data-assistant-on-ugcPost-7452494950476324864-pFpt?utm_source=share&utm_medium=member_desktop&rcm=ACoAACbCuucB5FTWw-mVOygKE7eWMQiXNLfojMY"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              {t(dataAssistant.title)}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </h3>
        </div>
        <p className="project-desc">{t(dataAssistant.desc)}</p>
        <div className="project-tags">
          {dataAssistant.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
      </div>

      {/* Tools built for Data Assistant */}
      <div className="project-subgroup">
        <p className="project-subgroup-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          {t({ en: 'Tooling built for Data Assistant', ko: 'Data Assistant를 위해 구축한 도구' })}
        </p>
        <div className="project-subgrid">
          {dataAssistantTools.map(p => (
            <div className="project-card project-card--sub" key={p.key}>
              <div className="project-card-header">
                <span className="project-icon">{p.icon}</span>
                <h3>
                  {p.href ? (
                    <a href={p.href} className="project-link">
                      {t(p.title)}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </a>
                  ) : (
                    t(p.title)
                  )}
                </h3>
              </div>
              {p.badge && (
                <span className="project-badge">{t(p.badge)}</span>
              )}
              <p className="project-desc">{t(p.desc)}</p>
              <div className="project-tags">
                {p.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other projects */}
      <div className="projects-grid">
        {otherProjects.map(p => (
          <div className="project-card" key={p.key}>
            <div className="project-card-header">
              <span className="project-icon">{p.icon}</span>
              <h3>{t(p.title)}</h3>
            </div>
            <p className="project-desc">{t(p.desc)}</p>
            <div className="project-tags">
              {p.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
