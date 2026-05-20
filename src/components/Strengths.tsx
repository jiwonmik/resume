import type { T } from '../hooks/useLanguage';

interface Props { t: T }

export default function Strengths({ t }: Props) {
  return (
    <section className="section" id="strengths">
      <p className="section-label">// {t({ en: 'What I Bring', ko: '강점' })}</p>
      <h2 className="section-heading">{t({ en: 'How I Work', ko: '일하는 방식' })}</h2>
      <p className="section-sub">{t({ en: 'What sets me apart beyond the tech stack.', ko: '기술 스택을 넘어선 차별점.' })}</p>
      <div className="strengths-grid">
        <div className="strength-item">
          <span className="strength-num">01</span>
          <div>
            <h4>{t({ en: 'End-to-end ownership', ko: '처음부터 끝까지 책임' })}</h4>
            <p>
              {t({
                en: 'Built the AI platform from rough prototype to production — owning architecture, infra, and UX end to end, with a focus on fault tolerance and scalability. When it broke (socket disconnections, workflow failures, cost spikes), I diagnosed, fixed, and built the tooling to prevent recurrence.',
                ko: 'AI 플랫폼을 거친 프로토타입에서 프로덕션까지, 에이전트 아키텍처·실시간 인프라·UI까지 전 영역을 직접 담당했습니다. 장애가 생겼을 때 직접 진단하고, 수정하고, 재발하지 않을 구조를 만들었습니다.',
              })}
            </p>
          </div>
        </div>

        <div className="strength-item">
          <span className="strength-num">02</span>
          <div>
            <h4>{t({ en: 'Pioneer mindset', ko: '개척자 마인드셋' })}</h4>
            <p>
              {t({
                en: 'Pioneered AI before it was a priority — introduced the first LLM-based project, laid the architectural foundation others built on, and brought in RabbitMQ and WebSocket as firsts for the company.',
                ko: 'AI가 우선순위가 되기 전에 먼저 시작했습니다. 사내 최초의 LLM 기반 프로젝트를 도입하고, 팀이 그 위에 계속 쌓아갈 수 있는 아키텍처 기반을 놓았습니다.',
              })}
            </p>
          </div>
        </div>

        <div className="strength-item">
          <span className="strength-num">03</span>
          <div>
            <h4>{t({ en: 'Cross-functional clarity', ko: '크로스 팀 소통' })}</h4>
            <p>
              {t({
                en: 'Worked directly with product, data, and non-technical stakeholders to surface real pain points and convert them into technical specs — across time zones, in async environments, consistently praised for communication clarity.',
                ko: '제품, 데이터, 비기술 직군과 직접 협업해 현장의 페인 포인트를 발굴하고 기술 스펙으로 풀어왔습니다. 시간대를 가리지 않는 비동기 환경에서도 명확한 커뮤니케이션으로 신뢰를 쌓았습니다.',
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
