import type { T } from '../hooks/useLanguage';

interface Props { t: T }

const codeLines = [
  { indent: 0, content: '<span class="kw">class</span> <span class="cl">JiwonKim</span>:' },
  { indent: 1, content: '<span class="kw">def</span> <span class="fn">__init__</span>(self):' },
  { indent: 2, content: 'self.role = <span class="str">"AI Engineer"</span>' },
  { indent: 2, content: 'self.focus = <span class="str">"AI systems that ship"</span>' },
  { indent: 2, content: 'self.stack = [<span class="str">"LangGraph"</span>, <span class="str">"Python"</span>,' },
  { indent: 3, content: '<span class="str">"React"</span>, <span class="str">"ClickHouse"</span>]' },
  { indent: 0, content: '' },
  { indent: 1, content: '<span class="kw">def</span> <span class="fn">ship</span>(self, idea):' },
  { indent: 2, content: '<span class="cm"># prototype → production</span>' },
  { indent: 2, content: 'agent = <span class="fn">build_agent</span>(idea)' },
  { indent: 2, content: 'agent.<span class="fn">optimize</span>()' },
  { indent: 2, content: '<span class="kw">return</span> agent.<span class="fn">deploy</span>()' },
];

export default function About({ t }: Props) {
  return (
    <section className="section" id="about">
      <p className="section-label">// {t({ en: 'About', ko: '소개' })}</p>
      <h2 className="section-heading">{t({ en: 'Building AI That Ships', ko: '실제로 작동하는 AI를 만듭니다' })}</h2>
      <p className="section-sub">{t({ en: 'Not just prototypes — production systems that scale.', ko: '프로토타입이 아닌, 실제로 운영되는 AI 시스템.' })}</p>

      <div className="about-layout">
        <div className="about-visual">
          <div className="code-window">
            <div className="code-window-bar">
              <span /><span /><span />
            </div>
            <pre className="code-window-body">
              {codeLines.map((line, i) => (
                <div key={i} className="code-line">
                  <span className="code-ln">{i + 1}</span>
                  <span
                    style={{ paddingLeft: `${line.indent * 1.4}rem` }}
                    dangerouslySetInnerHTML={{ __html: line.content || '&nbsp;' }}
                  />
                </div>
              ))}
            </pre>
          </div>
        </div>

        <div className="about-content">
          <p className="about-text">
            {t({
              en: "Started as a frontend engineer — always cared about what users actually experience. Now I build full AI systems end-to-end, but the same question drives every decision: does this make something meaningfully better for the person using it?",
              ko: '프론트엔드 엔지니어로 시작해, 언제나 유저가 실제로 무엇을 경험하는지를 중심에 뒀습니다. 지금은 AI 시스템 전체를 설계하고 만들지만, 모든 결정의 출발점은 같습니다 — 이게 쓰는 사람에게 실질적으로 더 나은 경험을 만드는가?',
            })}
          </p>
          <p className="about-text">
            {t({
              en: "On launch night, I stayed up watching the usage dashboard. Seeing real people use something you built from scratch reminded me why it matters: technology is most powerful when it brings people closer.",
              ko: '런칭 날 밤, 대시보드에서 실제 유저들이 들어오는 걸 보며 밤을 새웠습니다. 기술은 사람을 빠르게 만들 때가 아니라, 더 가깝게 이어줄 때 가장 강력하다는 걸 다시 확인했습니다.',
            })}
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <p className="stat-value">2,200+</p>
              <p className="stat-label">{t({ en: 'Premium Users', ko: '프리미엄 사용자' })}</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">76%</p>
              <p className="stat-label">{t({ en: 'Monthly Retention', ko: '월간 재방문율' })}</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">92%</p>
              <p className="stat-label">{t({ en: 'Grounded Response Rate', ko: '근거 기반 응답률' })}</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">~7s</p>
              <p className="stat-label">{t({ en: 'Response Time Cut', ko: '응답 시간 단축' })}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
