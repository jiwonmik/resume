import { useState } from 'react';
import type { T } from '../hooks/useLanguage';
import { CASE_STUDY_ROUTE, AGENT_CONCURRENCY_ROUTE } from '../routes';

interface Props { t: T }

export default function Experience({ t }: Props) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggle = (key: string) =>
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <section className="section" id="experience">
      <p className="section-label">// {t({ en: 'Experience', ko: '경력' })}</p>
      <h2 className="section-heading">{t({ en: "Where I've Worked", ko: '경력 사항' })}</h2>
      <p className="section-sub">{t({ en: 'Building AI systems from prototype to production.', ko: '프로토타입에서 프로덕션까지 AI 시스템을 만들었습니다.' })}</p>

      <div className="timeline">

        {/* Chartmetric — merged */}
        <div className="timeline-item">
          <div className="timeline-card" />
          <div className="timeline-dot" />
          <div className="timeline-card">
            <div className="timeline-card-inner">
              <p className="card-date">{t({ en: 'Dec 2023 – Mar 2026', ko: '2023년 12월 – 2026년 3월' })}</p>
              <h3>Chartmetric</h3>
              <p className="card-company">{t({ en: 'Software Engineer', ko: '소프트웨어 엔지니어' })}</p>

              {/* Role 1 */}
              <div className="role-block">
                <p className="role-label">
                  {t({ en: 'Conversational AI · Jun 2024 – Mar 2026', ko: 'Conversational AI · 2024년 6월 – 2026년 3월' })}
                </p>
                <p className="card-summary">
                  {t({
                    en: 'Built and shipped Data Assistant — a text-to-SQL multi-agent AI product for music-industry analytics. Owned the full stack from agent architecture to real-time infrastructure and internal tooling.',
                    ko: '음악 산업 분석용 Text-to-SQL 멀티 에이전트 AI 제품 Data Assistant를 설계부터 출시까지 전담. 에이전트 아키텍처부터 실시간 인프라, 내부 도구까지 전체 스택 담당.',
                  })}
                </p>
              </div>

              {/* Role 2 */}
              <div className="role-block">
                <p className="role-label">
                  {t({ en: 'Enterprise Dashboard · Dec 2023 – May 2024', ko: '엔터프라이즈 대시보드 · 2023년 12월 – 2024년 5월' })}
                </p>
                <p className="card-summary">
                  {t({
                    en: 'Architected the data model layer for a self-serve enterprise analytics platform.',
                    ko: '셀프서브 엔터프라이즈 분석 플랫폼의 데이터 모델 레이어 설계.',
                  })}
                </p>
              </div>

              <div className="tags">
                <span>Python</span><span>LangGraph</span><span>LangChain</span><span>OpenRouter</span>
                <span>RabbitMQ</span><span>Socket.IO</span><span>React</span><span>TypeScript</span>
                <span>PostgreSQL</span><span>ClickHouse</span><span>Node.js</span><span>Chart.js</span>
              </div>

              <button className="exp-toggle" onClick={() => toggle('chartmetric')}>
                {expanded['chartmetric']
                  ? t({ en: 'Hide details', ko: '접기' })
                  : t({ en: 'Show details', ko: '자세히 보기' })}
                <svg
                  width="12" height="12" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transform: expanded['chartmetric'] ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {expanded['chartmetric'] && (
                <div className="exp-details">
                  <p className="exp-details-role">{t({ en: 'Conversational AI', ko: 'Conversational AI' })}</p>
                  <div className="version-block">
                    <span className="version-label">{t({ en: 'v1 · Text-to-SQL Multi-Agent', ko: 'v1 · Text-to-SQL 멀티 에이전트' })}</span>
                    <ul>
                      <li>{t({ en: 'Built a text-to-SQL multi-agent system with ClickHouse schema injection, data visualization, human-in-the-loop interactions, and retry/debug flows', ko: 'ClickHouse 스키마 컨텍스트 주입, 데이터 시각화, human-in-the-loop, 재시도·디버그 플로우를 갖춘 Text-to-SQL 멀티 에이전트 시스템 구축' })}</li>
                      <li>{t({ en: 'Developed a Conversation Debugger with checkpoint-based inspection for team-wide observability without developer bottlenecks', ko: '체크포인트 기반 Conversation Debugger 구축 — 팀 전체가 개발자 없이 직접 원인 파악 가능' })}</li>
                      <li>{t({ en: 'Shipped a no-code admin interface for end-to-end agent management', ko: '프롬프트·모델·temperature·버저닝 포함 에이전트 관리용 노코드 어드민 UI 구축' })}</li>
                    </ul>
                  </div>
                  <div className="version-block">
                    <span className="version-label">{t({ en: 'v2 · Agent RAG + API Orchestration', ko: 'v2 · 에이전트 RAG + API 오케스트레이션' })}</span>
                    <ul>
                      <li>{t({ en: 'Reduced avg. response time by ~7s through tool call execution optimization', ko: '툴 호출 실행 최적화로 평균 응답 시간 약 7초 단축' })}</li>
                      <li>{t({ en: 'Built a citation system that assigns unique IDs to tool results and validates in-response source citations, reaching a 92% grounded-response rate', ko: 'Tool 실행 결과에 고유 ID를 부여하고 응답 내 출처 인용을 구조화·검증하는 Citation 시스템 구축 — 근거 기반 응답률 92% 달성' })}</li>
                      <li>{t({ en: 'Shipped to production for 2,200+ premium users with 76% monthly retention', ko: '2,200+ 프리미엄 사용자 대상 프로덕션 출시, 월간 재방문율 76% 기록' })}</li>
                      <li>{t({ en: 'Introduced intent classification for mode-based tool and model selection, reducing unnecessary compute', ko: '쿼리 의도 분류 기반 툴·모델 선택 도입 — 불필요한 연산 비용 절감' })}</li>
                      <li>{t({ en: 'Designed credit-based usage system with query-complexity estimation; integrated LangSmith for production-grade tracing', ko: '쿼리 복잡도 기반 크레딧 시스템 설계; LangSmith 기반 트레이싱·평가 도입' })}</li>
                      <li>{t({ en: 'Optimized prompt context assembly, cutting token consumption by ~20K tokens per conversation', ko: '컨텍스트 조립 최적화로 대화당 토큰 약 2만 개 절감' })}</li>
                      <li>{t({ en: 'Delivered internal agent tooling later adopted into an MCP server integrated with the Claude API', ko: '내부 에이전트 툴링 구축 — 이후 Claude API와 연동된 MCP 서버에 채택됨' })}</li>
                    </ul>
                  </div>
                  <div className="version-block">
                    <span className="version-label">{t({ en: 'Agent Concurrency & Async Optimization', ko: '에이전트 동시성 및 비동기 처리 최적화' })}</span>
                    <ul>
                      <li>{t({ en: 'Ran independent tools in parallel via asyncio.gather with a concurrency cap, cutting per-step agent latency and server load', ko: 'asyncio.gather 기반 독립 Tool 병렬 실행과 동시 실행 수 제한으로 Agent 단계별 레이턴시 및 서버 부하 최적화' })}</li>
                      <li>{t({ en: 'Isolated exceptions per tool so the agent keeps working from remaining results even when one tool fails', ko: '개별 Tool 예외를 격리하여 일부 Tool 실패에도 Agent가 나머지 결과를 기반으로 작업을 지속하도록 설계' })}</li>
                      <li>
                        {t({
                          en: 'Managed per-conversation execution state with an asyncio.Lock-guarded registry to prevent race conditions between duplicate and stop requests — ',
                          ko: 'asyncio.Lock으로 보호한 대화 단위 실행 상태 레지스트리로 중복 요청·Stop 요청 간 Race Condition 방지 — ',
                        })}
                        <a href={AGENT_CONCURRENCY_ROUTE} className="exp-inline-link">
                          {t({ en: 'read the write-up', ko: '아키텍처 문서 보기' })}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="version-block">
                    <span className="version-label">{t({ en: 'Shared Infrastructure', ko: '공통 인프라' })}</span>
                    <ul>
                      <li>
                        {t({
                          en: 'Decoupled agent execution from the Socket.IO connection with an independent RabbitMQ worker so jobs survive tab close, refresh, and redeploys — ',
                          ko: '에이전트 작업을 Socket.IO 연결과 분리하고 RabbitMQ 기반 독립 Worker를 도입하여 탭 종료·새로고침·배포에도 작업이 지속되도록 개선 — ',
                        })}
                        <a href={CASE_STUDY_ROUTE} className="exp-inline-link">
                          {t({ en: 'read the write-up', ko: '아키텍처 문서 보기' })}
                        </a>
                      </li>
                      <li>{t({ en: 'Built a Redis Streams adapter for multi-instance event delivery, enabling a scalable real-time agent execution environment', ko: 'Redis Streams Adapter 기반 다중 인스턴스 이벤트 전달, 확장 가능한 실시간 에이전트 실행 환경 구축' })}</li>
                      <li>{t({ en: 'Streamed tool planning, calls, and step results as Socket events, with background-task-driven progress to improve perceived wait time', ko: '에이전트의 Tool 계획·호출·단계별 결과를 Socket 이벤트로 스트리밍하고, 백그라운드 태스크 기반 진행 상태 생성으로 사용자 대기 경험 개선' })}</li>
                      <li>{t({ en: 'Established automated regression testing with LLM-as-Judge for response quality scoring', ko: 'LLM-as-Judge 기반 자동화 회귀 테스트 프레임워크 구축' })}</li>
                    </ul>
                  </div>

                  <p className="exp-details-role" style={{ marginTop: '1.5rem' }}>{t({ en: 'Enterprise Dashboard', ko: '엔터프라이즈 대시보드' })}</p>
                  <ul>
                    <li>{t({ en: 'Architected the data model layer — dimension/metric classification, color/label systems, chart-to-table cross-interaction with rendering optimization', ko: '데이터 모델 레이어 설계 — 차원·지표 분류, 색상·라벨 시스템, 차트→테이블 크로스 인터랙션 및 렌더링 최적화' })}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 42Maru */}
        <div className="timeline-item">
          <div className="timeline-card">
            <div className="timeline-card-inner">
              <p className="card-date">{t({ en: 'Dec 2020 – Jun 2021', ko: '2020년 12월 – 2021년 6월' })}</p>
              <h3>42Maru</h3>
              <p className="card-company">{t({ en: 'Software Engineer Intern', ko: '소프트웨어 엔지니어 인턴' })}</p>
              <p className="card-summary">
                {t({
                  en: 'Built a Korean/English autocomplete search engine for KB Securities and a semantic search system on Wiki data using vector similarity — early hands-on work with search infrastructure and NLP.',
                  ko: 'KB증권 한/영 자동완성 검색엔진 구축, Wiki 데이터 기반 벡터 유사도 시맨틱 검색 구현 — 검색 인프라와 NLP에 대한 초기 실무 경험.',
                })}
              </p>
              <div className="tags">
                <span>Python</span><span>FastAPI</span><span>Elasticsearch</span><span>FAISS</span>
                <span>Docker</span><span>Kibana</span><span>Logstash</span>
              </div>

              <button className="exp-toggle" onClick={() => toggle('42maru')}>
                {expanded['42maru']
                  ? t({ en: 'Hide details', ko: '접기' })
                  : t({ en: 'Show details', ko: '자세히 보기' })}
                <svg
                  width="12" height="12" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transform: expanded['42maru'] ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {expanded['42maru'] && (
                <div className="exp-details">
                  <div className="version-block">
                    <span className="version-label">{t({ en: 'KB Securities — Integrated Search Engine', ko: 'KB증권 통합검색엔진 구축' })}</span>
                    <ul>
                      <li>{t({ en: 'Developed and operated a Korean/English autocomplete search API for stock ticker data', ko: '주식 종목데이터 기반 한글/영어 자동완성 검색 API 개발 및 운영' })}</li>
                      <li>{t({ en: 'Implemented latest news search feature', ko: '최신 뉴스 검색 구현' })}</li>
                      <li>{t({ en: 'Handled indexing tasks including field definition and Analyzer configuration', ko: '인덱싱 작업 — 필드 및 Analyzer 구성' })}</li>
                    </ul>
                  </div>
                  <div className="version-block">
                    <span className="version-label">{t({ en: 'Semantic Search — Wiki Data Toy Project', ko: 'Wiki 데이터 시맨틱 검색 토이프로젝트' })}</span>
                    <ul>
                      <li>{t({ en: 'Korean keyword search over Wikipedia data', ko: '위키데이터 기반 한글 키워드 검색 구현' })}</li>
                      <li>{t({ en: 'Vector similarity search using FAISS embeddings over Wikipedia data', ko: '위키데이터 기반 한글 벡터 유사도 기반 검색 구현' })}</li>
                    </ul>
                  </div>
                  <div className="version-block">
                    <span className="version-label">{t({ en: 'Internal Tooling', ko: '사내 도구' })}</span>
                    <ul>
                      <li>{t({ en: 'Built a demo page for internal ML models (HTML/CSS/JavaScript)', ko: '사내 개발 모델 데모 페이지 제작 (HTML/CSS/JavaScript)' })}</li>
                      <li>{t({ en: 'Created Docker deployment images for internal ML models', ko: '사내 개발 모델 Docker 배포 이미지 제작' })}</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="timeline-dot" />
          <div className="timeline-card" />
        </div>

      </div>
    </section>
  );
}
