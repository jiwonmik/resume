import CaseStudyPage from './CaseStudyPage';

const CASE_STUDY_HTML = `
  <span class="eyebrow">Data Assistant · Backend</span>
  <h1>에이전트 동시성 &amp; 비동기 처리 설계</h1>
  <p class="lede">
    단일 이벤트 루프 위에서 여러 대화를 동시에 처리하는 FastAPI 에이전트 워커.
    <code>asyncio</code> 하나로 중복 실행 방지, 응답 지연 해소, Tool 병렬 실행까지
    풀어낸 과정을 정리했다.
  </p>
  <div class="meta">
    <span>Chartmetric · Data Assistant</span>
    <span>2024.07 – 2026.03</span>
    <span>Python · FastAPI · asyncio · LangChain</span>
  </div>

  <hr class="rule" />

  <div class="block-label">문제 상황</div>
  <p>
    Agent는 Python 기반 FastAPI Worker의 단일 이벤트 루프 위에서 여러 대화를
    동시에 처리해야 했다. 이 구조에서 서로 다른 성격의 세 가지 문제가 함께
    걸려 있었다.
  </p>
  <div class="context-grid">
    <div class="tile">
      <span class="tag">DUPLICATE REQUESTS</span>
      <h3>중복 실행 &amp; Race Condition</h3>
      <p>같은 대화에서 메시지를 연달아 보내거나, 실행 중 정지 버튼을 누르는
      경우 두 요청이 동시에 같은 상태를 건드릴 수 있었다.</p>
    </div>
    <div class="tile">
      <span class="tag">BLOCKING LATENCY</span>
      <h3>진행률 표시가 흐름을 막음</h3>
      <p>reasoning을 요약해 로딩 문구를 보여주는 LLM 호출이 동기적으로
      끼어들며 다음 스텝을 지연시켰다.</p>
    </div>
    <div class="tile">
      <span class="tag">SEQUENTIAL TOOLS</span>
      <h3>Tool 호출의 순차 처리</h3>
      <p>LLM이 한 턴에 여러 tool을 요청해도 하나씩 처리하면서 지연이 tool
      개수만큼 그대로 누적됐다.</p>
    </div>
  </div>

  <hr class="rule" />

  <section class="solution">
    <div class="sec-head">
      <span class="tag-pill">DUPLICATE REQUESTS</span>
    </div>
    <h2>대화 단위 동시성 제어</h2>

    <div class="block-label">해결</div>
    <p>
      <code>conversation_id</code>를 키로 실행 중인 task를 등록하는 레지스트리를
      두고, 그 접근 자체를 <code>asyncio.Lock</code>으로 보호했다. 새 요청이
      오면 Lock을 획득해 레지스트리를 확인 — 이미 실행 중이면 거절하고, 아니면
      등록 후 실행한다. Stop 요청은 <code>task.cancel()</code>을 호출하고,
      어떤 경로로 끝나든 <code>finally</code> 블록에서 레지스트리 제거를
      보장한다.
    </p>
    <div class="callout">
      <b>왜 Lock이 필요한가.</b> await 지점에서 제어권이 이벤트 루프로
      넘어가는 순간, 다른 코루틴이 끼어들어 레지스트리를 먼저 바꿔놓을 수
      있다. 체크-후-등록을 하나의 원자적 구간으로 묶어야 두 요청이 동시에
      "실행 중 아님"을 보고 함께 통과하는 상황을 막을 수 있었다.
    </div>

    <figure>
      <div class="diagram-scroll">
        <svg viewBox="0 0 720 220" role="img" aria-label="같은 conversation에 대한 중복 요청은 Lock으로 보호된 레지스트리에서 거절되고, Stop 요청은 task를 취소한 뒤 finally에서 레지스트리를 정리한다">
          <defs>
            <marker id="arrow1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <polygon points="0,0 7,3 0,6" fill="currentColor" />
            </marker>
          </defs>
          <line x1="150" y1="46" x2="700" y2="46" stroke="currentColor" stroke-opacity=".18" />
          <line x1="150" y1="118" x2="700" y2="118" stroke="currentColor" stroke-opacity=".18" />
          <line x1="150" y1="182" x2="700" y2="182" stroke="currentColor" stroke-opacity=".18" />
          <text x="4" y="42" font-size="11.5" fill="currentColor" opacity=".65">요청</text>
          <text x="4" y="106" font-size="11.5" fill="currentColor" opacity=".65">Registry</text>
          <text x="4" y="115" font-size="11.5" fill="currentColor" opacity=".65">(Lock)</text>
          <text x="4" y="178" font-size="11.5" fill="currentColor" opacity=".65">실행 상태</text>

          <line x1="230" y1="30" x2="230" y2="200" stroke="currentColor" stroke-opacity=".12" stroke-dasharray="3,3" />
          <line x1="430" y1="30" x2="430" y2="200" stroke="currentColor" stroke-opacity=".12" stroke-dasharray="3,3" />
          <line x1="600" y1="30" x2="600" y2="200" stroke="currentColor" stroke-opacity=".12" stroke-dasharray="3,3" />

          <circle cx="230" cy="46" r="5" fill="var(--accent)" />
          <text x="230" y="24" font-size="12" text-anchor="middle" fill="currentColor" font-weight="600">요청 A</text>
          <text x="230" y="37" font-size="10.5" text-anchor="middle" fill="currentColor" opacity=".6">conv #42</text>

          <circle cx="430" cy="46" r="5" fill="currentColor" opacity=".55" />
          <text x="430" y="24" font-size="12" text-anchor="middle" fill="currentColor" font-weight="600">요청 B</text>
          <text x="430" y="37" font-size="10.5" text-anchor="middle" fill="currentColor" opacity=".6">동일 conv, 중복</text>

          <circle cx="600" cy="46" r="5" fill="currentColor" opacity=".55" />
          <text x="600" y="24" font-size="12" text-anchor="middle" fill="currentColor" font-weight="600">Stop 요청</text>

          <text x="230" y="100" font-size="11" text-anchor="middle" fill="currentColor">Lock 획득</text>
          <text x="230" y="113" font-size="11" text-anchor="middle" fill="currentColor" opacity=".7">미등록 → 등록</text>

          <text x="430" y="100" font-size="11" text-anchor="middle" fill="var(--accent-ink)" font-weight="600">Lock 획득</text>
          <text x="430" y="113" font-size="11" text-anchor="middle" fill="var(--accent-ink)">이미 실행 중 → 거절</text>

          <text x="600" y="100" font-size="11" text-anchor="middle" fill="currentColor" opacity=".7">task.cancel()</text>

          <rect x="230" y="172" width="370" height="18" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1" />
          <text x="415" y="185" font-size="11" text-anchor="middle" fill="var(--accent-ink)">conv #42 실행 중</text>
          <line x1="600" y1="163" x2="600" y2="199" stroke="var(--accent)" stroke-width="2" />
          <path d="M614 195 h70" stroke="currentColor" stroke-opacity=".4" marker-end="url(#arrow1)" />
          <text x="618" y="212" font-size="10.5" fill="currentColor" opacity=".65">finally → registry 제거</text>
        </svg>
      </div>
      <figcaption>같은 conv #42에 대한 중복 요청(B)은 Lock으로 보호된 레지스트리 조회에서 거절되고, Stop 요청은 task를 취소한 뒤 finally에서 레지스트리를 정리해 다음 요청을 다시 받을 수 있게 한다.</figcaption>
    </figure>
  </section>

  <section class="solution">
    <div class="sec-head">
      <span class="tag-pill">BLOCKING LATENCY</span>
    </div>
    <h2>백그라운드 진행률 태스크</h2>

    <div class="block-label">해결</div>
    <p>
      reasoning 요약 작업을 <code>await</code>하지 않고 별도 task로 fire-and-forget
      생성해, 에이전트는 요약이 끝나길 기다리지 않고 곧바로 다음 스텝으로
      진행한다. 요약에 쓰는 LLM 호출은 동기식이라 <code>asyncio.to_thread</code>로
      스레드풀에 위임했고, 최종 답변이 먼저 나오면 아직 끝나지 않은 요약
      task는 모두 취소한다.
    </p>
    <div class="callout">
      <b>알고 있던 한계.</b> <code>to_thread</code>로 넘긴 작업은
      <code>task.cancel()</code>을 호출해도 스레드 내부의 동기 함수 자체는
      계속 실행된다. 즉 이미 나간 LLM API 요청과 비용은 취소되지 않는다 —
      async 전용 함수로 바꾸면 해결 가능한 지점으로 남겨두었다.
    </div>

    <figure>
      <div class="diagram-scroll">
        <svg viewBox="0 0 720 190" role="img" aria-label="메인 에이전트 흐름은 요약 작업을 기다리지 않고 계속 진행하고, 백그라운드 요약 task는 최종 답변 시점에 취소되지만 스레드 내부 실행은 그 이후에도 계속된다">
          <defs>
            <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <polygon points="0,0 7,3 0,6" fill="currentColor" />
            </marker>
          </defs>

          <text x="4" y="46" font-size="11.5" fill="currentColor" opacity=".65">메인 에이전트</text>
          <text x="4" y="128" font-size="11.5" fill="currentColor" opacity=".65">요약 task</text>
          <text x="4" y="139" font-size="10" fill="currentColor" opacity=".55">(to_thread)</text>

          <line x1="150" y1="50" x2="660" y2="50" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow2)" />
          <circle cx="220" cy="50" r="3.5" fill="currentColor" />
          <text x="220" y="34" font-size="11" text-anchor="middle" fill="currentColor">Step 1</text>
          <circle cx="340" cy="50" r="3.5" fill="currentColor" />
          <text x="340" y="34" font-size="11" text-anchor="middle" fill="currentColor">Step 2</text>
          <circle cx="460" cy="50" r="3.5" fill="currentColor" />
          <text x="460" y="34" font-size="11" text-anchor="middle" fill="currentColor">Step 3</text>
          <circle cx="600" cy="50" r="4" fill="var(--accent)" />
          <text x="600" y="34" font-size="11.5" text-anchor="middle" fill="var(--accent-ink)" font-weight="600">최종 답변</text>

          <line x1="600" y1="26" x2="600" y2="160" stroke="var(--accent)" stroke-opacity=".5" stroke-dasharray="3,3" />

          <rect x="220" y="118" width="380" height="18" rx="4" fill="var(--surface-2)" stroke="currentColor" stroke-opacity=".3" />
          <text x="410" y="131" font-size="11" text-anchor="middle" fill="currentColor" opacity=".8">요약 생성 중 (스레드풀)</text>

          <rect x="600" y="118" width="70" height="18" rx="4" fill="none" stroke="var(--accent)" stroke-dasharray="2,3" />
          <text x="635" y="131" font-size="10.5" text-anchor="middle" fill="var(--accent-ink)">×</text>

          <text x="600" y="158" font-size="10.5" fill="var(--accent-ink)">cancel() 호출 이후에도 스레드 내부 실행은 계속됨</text>
        </svg>
      </div>
      <figcaption>메인 에이전트는 요약을 기다리지 않고 Step 1→3을 거쳐 최종 답변까지 진행한다. 요약 task는 그 시점에 취소되지만, to_thread로 넘긴 동기 함수 자체는 스레드 안에서 계속 실행된다.</figcaption>
    </figure>
  </section>

  <section class="solution">
    <div class="sec-head">
      <span class="tag-pill">SEQUENTIAL TOOLS</span>
    </div>
    <h2>Tool 호출 병렬 실행</h2>

    <div class="block-label">해결</div>
    <p>
      여러 tool 호출을 <code>asyncio.gather</code>로 동시에 실행하되, 서버
      부하를 감안해 동시 실행 개수를 4개로 제한했다. <code>return_exceptions=True</code>로
      개별 tool의 예외를 격리해, 하나가 실패해도 gather 전체가 멈추지 않고
      나머지 결과로 계속 진행한다. 각 결과에는 원래 호출 순서의 인덱스를
      붙여, 실행이 끝난 뒤 원래 순서로 재정렬한다.
    </p>

    <figure>
      <div class="diagram-scroll">
        <svg viewBox="0 0 720 250" role="img" aria-label="순차 실행은 네 개 tool을 하나씩 이어 붙여 전체 시간이 합산되지만, asyncio.gather 기반 병렬 실행은 동시에 시작해 가장 오래 걸리는 tool만큼만 걸리고, 실패한 tool은 격리되어 나머지 결과와 함께 재정렬된다">
          <defs>
            <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <polygon points="0,0 7,3 0,6" fill="currentColor" />
            </marker>
          </defs>

          <text x="150" y="20" font-size="12" font-weight="600" fill="currentColor">순차 실행</text>
          <rect x="150" y="30" width="110" height="26" fill="var(--surface-2)" stroke="currentColor" stroke-opacity=".3" />
          <text x="205" y="47" font-size="11" text-anchor="middle" fill="currentColor">Tool A</text>
          <rect x="262" y="30" width="110" height="26" fill="var(--surface-2)" stroke="currentColor" stroke-opacity=".3" />
          <text x="317" y="47" font-size="11" text-anchor="middle" fill="currentColor">Tool B</text>
          <rect x="374" y="30" width="110" height="26" fill="var(--surface-2)" stroke="currentColor" stroke-opacity=".3" />
          <text x="429" y="47" font-size="11" text-anchor="middle" fill="currentColor">Tool C</text>
          <rect x="486" y="30" width="110" height="26" fill="var(--surface-2)" stroke="currentColor" stroke-opacity=".3" />
          <text x="541" y="47" font-size="11" text-anchor="middle" fill="currentColor">Tool D</text>
          <line x1="596" y1="43" x2="640" y2="43" stroke="currentColor" stroke-opacity=".5" marker-end="url(#arrow3)" />
          <text x="648" y="47" font-size="10.5" fill="currentColor" opacity=".65">결과</text>

          <line x1="150" y1="80" x2="670" y2="80" stroke="currentColor" stroke-opacity=".12" />

          <text x="150" y="104" font-size="12" font-weight="600" fill="currentColor">병렬 실행</text>
          <text x="150" y="118" font-size="10.5" fill="currentColor" opacity=".6">asyncio.gather · 동시성 ≤ 4</text>

          <rect x="150" y="128" width="150" height="20" rx="3" fill="var(--surface-2)" stroke="currentColor" stroke-opacity=".3" />
          <text x="225" y="142" font-size="10.5" text-anchor="middle" fill="currentColor">Tool A</text>

          <rect x="150" y="154" width="190" height="20" rx="3" fill="var(--surface-2)" stroke="currentColor" stroke-opacity=".3" />
          <text x="245" y="168" font-size="10.5" text-anchor="middle" fill="currentColor">Tool B</text>

          <rect x="150" y="180" width="110" height="20" rx="3" fill="none" stroke="var(--accent)" stroke-dasharray="3,3" />
          <text x="205" y="194" font-size="10.5" text-anchor="middle" fill="var(--accent-ink)">Tool C ×</text>

          <rect x="150" y="206" width="170" height="20" rx="3" fill="var(--surface-2)" stroke="currentColor" stroke-opacity=".3" />
          <text x="235" y="220" font-size="10.5" text-anchor="middle" fill="currentColor">Tool D</text>

          <line x1="150" y1="118" x2="150" y2="228" stroke="currentColor" stroke-opacity=".15" stroke-dasharray="2,3" />
          <path d="M340 164 L385 164" stroke="currentColor" stroke-opacity=".4" marker-end="url(#arrow3)" />
          <text x="393" y="168" font-size="10" fill="currentColor" opacity=".65">index 기준</text>
          <text x="393" y="180" font-size="10" fill="currentColor" opacity=".65">재정렬</text>
          <path d="M340 164 L385 200" stroke="currentColor" stroke-opacity=".25" />
        </svg>
      </div>
      <figcaption>순차 실행은 네 tool의 시간이 그대로 더해지지만, 병렬 실행은 동시에 시작해 가장 오래 걸리는 tool만큼만 걸린다. Tool C가 실패해도 return_exceptions=True로 격리되어 나머지 결과와 함께 원래 순서로 재정렬된다.</figcaption>
    </figure>
  </section>

  <hr class="rule" />

  <footer>
    <div class="stack-tags">
      <span>Python</span>
      <span>FastAPI</span>
      <span>asyncio</span>
      <span>LangChain</span>
      <span>Socket.io</span>
    </div>
    <a class="source-link" href="https://velog.io/@limelimejiwon/%EB%8C%80%ED%99%94%ED%98%95-AI-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%8F%99%EC%8B%9C%EC%84%B1%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC%EC%97%90-%EB%8C%80%ED%95%B4" target="_blank" rel="noopener">
      전체 구현 기록 — velog <span class="arrow">→</span>
    </a>
  </footer>
`;

interface Props {
  lang: 'en' | 'ko';
  onBack: () => void;
}

export default function CaseStudyAgentConcurrency({ lang, onBack }: Props) {
  return (
    <CaseStudyPage
      lang={lang}
      onBack={onBack}
      bodyClassName="cs-agent-concurrency"
      html={CASE_STUDY_HTML}
    />
  );
}
