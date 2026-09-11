import CaseStudyPage from './CaseStudyPage';

const CASE_STUDY_HTML = `
  <header>
    <div class="eyebrow">frontend case study</div>
    <h1>연결이 끊겨도, 작업은 사라지지 않는다</h1>
    <p class="subhead">실시간 AI 채팅 프론트엔드에서 Socket.io를 React 상태와 분리하고, 연결 유실에도 에이전트 작업이 이어지도록 설계한 과정.</p>
    <div class="meta-row">
      <span class="chip">역할 <b>Frontend Engineer</b></span>
      <span class="chip">스택 <b>React · Socket.io · RabbitMQ · Redis</b></span>
      <span class="chip">범위 <b>실시간 통신 · 상태 아키텍처</b></span>
    </div>
  </header>

  <div class="thesis">
    <blockquote>"탭을 닫아도, 새로고침해도, 네트워크가 끊겨도 — 이미 시작된 에이전트 작업은 멈추지 않아야 했다."</blockquote>
    <p>초기 구현은 WebSocket 연결 위에서 질문 전송, 실시간 스트리밍, 작업 실행이 모두 이루어졌다. 문제는 연결이 끊기는 순간 <b style="color:var(--ink)">작업의 생사 자체가 연결에 종속</b>된다는 점이었다. 사용자가 탭을 닫거나 서버가 재배포되면, 이미 시작된 AI 에이전트 작업도 함께 사라졌다. 실시간성과 지속성은 같은 연결에 묶일 수 없는 요구였다.</p>
  </div>

  <section>
    <h2>실시간 경로와 영속 경로의 분리</h2>
    <p class="section-intro">Socket.io는 <b style="color:var(--ink)">전달과 제어</b>만 담당하고, 작업 실행은 RabbitMQ와 Worker, DB로 이어지는 별도 경로에 둔다. 소켓이 끊겨도 아래쪽 경로는 멈추지 않는다.</p>

    <figure>
      <svg viewBox="0 0 1000 500" role="img" aria-label="Browser는 Socket.io를 통해 API와 실시간 스트리밍을 주고받고, REST로 질문을 저장하거나 재접속 시 메시지를 복구한다. API는 받은 질문을 RabbitMQ에 발행하고, Worker가 소비해 실행한 뒤 DB에 결과를 저장하고, 완료 이벤트를 다시 API를 통해 Browser로 스트리밍한다. 실시간 경로가 끊겨도 영속 경로는 계속 흐른다." style="color:var(--ink)">

        <defs>
          <marker id="ah-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--accent)"></path>
          </marker>
          <marker id="ah-ink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
          </marker>
          <marker id="ah-durable" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--durable)"></path>
          </marker>
        </defs>

        <text x="20" y="106" font-family="var(--font-mono)" font-size="10.5" letter-spacing="0.06em" fill="var(--accent)">실시간 경로</text>
        <text x="20" y="308" font-family="var(--font-mono)" font-size="10.5" letter-spacing="0.06em" fill="var(--durable)">영속 경로</text>

        <g font-family="var(--font-display)" font-weight="700" font-size="14">
          <rect x="30" y="165" width="150" height="92" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"></rect>
          <text x="105" y="204" text-anchor="middle" fill="var(--ink)">Browser</text>
          <text x="105" y="224" text-anchor="middle" font-family="var(--font-mono)" font-weight="400" font-size="11" fill="var(--ink-soft)">Tab A · Tab B</text>

          <rect x="425" y="165" width="150" height="92" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"></rect>
          <text x="500" y="204" text-anchor="middle" fill="var(--ink)">API</text>
          <text x="500" y="224" text-anchor="middle" font-family="var(--font-mono)" font-weight="400" font-size="10.5" fill="var(--ink-soft)">Redis로 인스턴스 동기화</text>

          <rect x="425" y="350" width="140" height="76" rx="8" fill="none" stroke="var(--durable)" stroke-width="1.4"></rect>
          <text x="495" y="385" text-anchor="middle" fill="var(--durable)">RabbitMQ</text>
          <text x="495" y="404" text-anchor="middle" font-family="var(--font-mono)" font-weight="400" font-size="10.5" fill="var(--ink-soft)">작업 발행·대기</text>

          <rect x="655" y="350" width="140" height="76" rx="8" fill="none" stroke="var(--durable)" stroke-width="1.4"></rect>
          <text x="725" y="385" text-anchor="middle" fill="var(--durable)">Worker</text>
          <text x="725" y="404" text-anchor="middle" font-family="var(--font-mono)" font-weight="400" font-size="10.5" fill="var(--ink-soft)">Agent 실행</text>

          <rect x="855" y="350" width="115" height="76" rx="8" fill="none" stroke="var(--durable)" stroke-width="1.4"></rect>
          <text x="912" y="385" text-anchor="middle" fill="var(--durable)">DB</text>
          <text x="912" y="404" text-anchor="middle" font-family="var(--font-mono)" font-weight="400" font-size="10.5" fill="var(--ink-soft)">메시지·상태</text>
        </g>

        <line x1="180" y1="190" x2="422" y2="190" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#ah-accent)"></line>
        <text x="301" y="182" text-anchor="middle" font-family="var(--font-mono)" font-size="11" fill="var(--accent)">WS: ask / stop</text>

        <line x1="422" y1="212" x2="180" y2="212" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#ah-accent)"></line>
        <text x="301" y="230" text-anchor="middle" font-family="var(--font-mono)" font-size="11" fill="var(--accent)">스트리밍 응답 (room)</text>

        <line x1="180" y1="245" x2="422" y2="245" stroke="currentColor" stroke-width="1.3" marker-end="url(#ah-ink)"></line>
        <text x="301" y="262" text-anchor="middle" font-family="var(--font-mono)" font-size="10.5" fill="var(--ink-soft)">REST POST /ask</text>

        <path d="M 500 165 L 500 55 L 912 55 L 912 348" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" marker-end="url(#ah-ink)"></path>
        <text x="706" y="47" text-anchor="middle" font-family="var(--font-mono)" font-size="10.5" fill="var(--ink-soft)">재접속 시 REST GET /messages → DB 조회</text>

        <line x1="480" y1="257" x2="480" y2="347" stroke="var(--durable)" stroke-width="1.6" marker-end="url(#ah-durable)"></line>
        <text x="492" y="305" font-family="var(--font-mono)" font-size="10.5" fill="var(--durable)">publish</text>

        <line x1="568" y1="388" x2="652" y2="388" stroke="var(--durable)" stroke-width="1.6" marker-end="url(#ah-durable)"></line>
        <text x="610" y="378" text-anchor="middle" font-family="var(--font-mono)" font-size="10.5" fill="var(--durable)">consume</text>

        <line x1="798" y1="388" x2="852" y2="388" stroke="var(--durable)" stroke-width="1.6" marker-end="url(#ah-durable)"></line>
        <text x="825" y="378" text-anchor="middle" font-family="var(--font-mono)" font-size="9.5" fill="var(--durable)">저장</text>

        <path d="M 700 350 L 700 300 L 560 300 L 560 259" fill="none" stroke="var(--accent)" stroke-width="1.6" marker-end="url(#ah-accent)"></path>
        <text x="700" y="292" text-anchor="middle" font-family="var(--font-mono)" font-size="10.5" fill="var(--accent)">완료 이벤트 emit</text>

      </svg>

      <div class="legend">
        <span><i style="background:var(--accent)"></i>실시간 (Socket.io)</span>
        <span><i style="background:var(--ink-soft)"></i>요청 (REST)</span>
        <span><i style="background:var(--ink-soft); background-image:repeating-linear-gradient(90deg, var(--ink-soft) 0 4px, transparent 4px 8px);"></i>복구 (재조회)</span>
        <span><i style="background:var(--durable)"></i>영속 실행 (Queue → Worker → DB)</span>
      </div>

      <figcaption>소켓 연결이 끊기면 사라지는 건 <b style="color:var(--ink)">실시간 스트리밍 화면</b>뿐이다. 작업의 소유권은 RabbitMQ 메시지와 DB 실행 상태에 있으므로, 재접속하면 REST로 DB를 다시 조회해 그대로 이어볼 수 있다.</figcaption>
    </figure>
  </section>

  <section>
    <h2>핵심 설계 결정 3가지</h2>
    <p class="section-intro">겪은 순서대로 정리했다. 각 결정은 이전 결정이 드러낸 다음 문제에서 출발했다.</p>

    <div class="decisions">
      <div class="decision">
        <div class="num">01</div>
        <div>
          <h3>소켓과 작업 실행을 분리한다</h3>
          <dl class="kv">
            <dt>문제</dt><dd>작업 실행이 WebSocket 연결에 묶이면, 탭 종료·새로고침·네트워크 단절 시 이미 시작된 에이전트 작업이 그대로 유실됐다.</dd>
            <dt>결정</dt><dd>Socket.io는 <b>전달·제어(ask/stop)</b>만 맡기고, 실제 실행은 RabbitMQ에 발행해 Worker가 처리하도록 분리했다.</dd>
            <dt>결과</dt><dd>연결이 끊겨도 작업은 계속 진행되고, 재접속 시 DB에서 결과를 그대로 이어볼 수 있다.</dd>
          </dl>
        </div>
      </div>

      <div class="decision">
        <div class="num">02</div>
        <div>
          <h3>연결 상태를 두 단계로 나눈다</h3>
          <dl class="kv">
            <dt>문제</dt><dd>소켓의 전송 계층 연결(TCP)과 서버가 실제로 이벤트를 처리할 준비가 된 상태는 다르다. 이를 하나로 취급하면 초기 이벤트가 조용히 유실됐다.</dd>
            <dt>결정</dt><dd><b>isSocketConnected</b>(전송 연결)와 <b>isConnected</b>(서버의 handlersReady 수신 이후)를 별개 상태로 관리했다.</dd>
            <dt>결과</dt><dd>재연결 직후에도 이벤트 유실 없이 요청을 이어받을 수 있게 됐다.</dd>
          </dl>
        </div>
      </div>

      <div class="decision">
        <div class="num">03</div>
        <div>
          <h3>멀티탭의 상태를 동기화한다</h3>
          <dl class="kv">
            <dt>문제</dt><dd>같은 대화를 여러 탭에서 열면 각 탭이 독립된 소켓 연결을 가져서, 한 탭에서 질문을 보내는 동안 다른 탭은 그 로딩·진행 상태를 알 수 없었다. 탭마다 화면이 서로 다르게 보였다.</dd>
            <dt>결정</dt><dd>대화 단위로 Socket.io <b>room</b>을 구성해, 한 탭에서 발생한 이벤트를 room에 참여한 모든 탭이 동일하게 수신하도록 했다. 이벤트는 conversationId로 필터링하고, 다중 인스턴스 환경은 <b>Redis Streams Adapter</b>로 room을 프로세스 경계 너머로 확장했다. 여기에 Redis 카운터로 사용자당 동시 실행 수도 제한해 중복 실행까지 방어했다.</dd>
            <dt>결과</dt><dd>여러 탭을 열어도 로딩·진행 상태가 항상 동일하게 보이고, 인스턴스가 늘어나도 이벤트 유실이나 상태 불일치가 없다.</dd>
          </dl>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h2>프론트엔드: 컴포넌트는 소켓을 모른다</h2>
    <p class="section-intro">UI가 socket instance를 직접 다루지 않도록 Provider와 Hook을 계층화했다. 각 계층은 한 가지 이벤트→상태 전이만 책임진다.</p>

    <figure>
      <svg viewBox="0 0 640 480" role="img" aria-label="SocketProvider가 만든 socket 인스턴스와 연결 상태는 useConversationSocket으로 전달되어 room에 참여하고, useSocketEvents가 conversationId로 필터링한 이벤트를 ConversationsProvider의 reducer에 dispatch하며, UI 컴포넌트는 그 상태만 구독한다. UI 컴포넌트는 SocketProvider를 직접 참조하지 않는다." style="color:var(--ink)">

        <defs>
          <marker id="ah-ink2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
          </marker>
        </defs>

        <g font-family="var(--font-display)" font-weight="700" font-size="14">
          <rect x="150" y="20" width="260" height="58" rx="8" fill="none" stroke="var(--accent)" stroke-width="1.5"></rect>
          <text x="280" y="54" text-anchor="middle" fill="var(--accent)">SocketProvider</text>

          <rect x="150" y="130" width="260" height="58" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"></rect>
          <text x="280" y="164" text-anchor="middle" fill="var(--ink)">useConversationSocket</text>

          <rect x="150" y="240" width="260" height="58" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"></rect>
          <text x="280" y="274" text-anchor="middle" fill="var(--ink)">useSocketEvents</text>

          <rect x="130" y="350" width="300" height="58" rx="8" fill="none" stroke="currentColor" stroke-width="1.4"></rect>
          <text x="280" y="384" text-anchor="middle" fill="var(--ink)">ConversationsProvider (useReducer)</text>

          <rect x="170" y="422" width="220" height="46" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"></rect>
          <text x="280" y="451" text-anchor="middle" fill="var(--ink)">UI Components</text>
        </g>

        <line x1="280" y1="78" x2="280" y2="128" stroke="currentColor" stroke-width="1.3" marker-end="url(#ah-ink2)"></line>
        <text x="292" y="107" font-family="var(--font-mono)" font-size="10" fill="var(--ink-soft)">socket, isSocketConnected / isConnected</text>

        <line x1="280" y1="188" x2="280" y2="238" stroke="currentColor" stroke-width="1.3" marker-end="url(#ah-ink2)"></line>
        <text x="292" y="217" font-family="var(--font-mono)" font-size="10" fill="var(--ink-soft)">room 참여 (conversationId)</text>

        <line x1="280" y1="298" x2="280" y2="348" stroke="currentColor" stroke-width="1.3" marker-end="url(#ah-ink2)"></line>
        <text x="292" y="327" font-family="var(--font-mono)" font-size="10" fill="var(--ink-soft)">dispatch(action) — id로 필터링됨</text>

        <line x1="280" y1="408" x2="280" y2="420" stroke="currentColor" stroke-width="1.3" marker-end="url(#ah-ink2)"></line>
        <text x="292" y="416" font-family="var(--font-mono)" font-size="10" fill="var(--ink-soft)">sending · progress · nodeLoading</text>

        <path d="M 130 445 C 40 445, 40 49, 148 49" fill="none" stroke="var(--ink-faint)" stroke-width="1.1" stroke-dasharray="3 4"></path>
        <circle cx="60" cy="247" r="9" fill="var(--bg)" stroke="var(--ink-faint)" stroke-width="1.1"></circle>
        <line x1="55" y1="252" x2="65" y2="242" stroke="var(--ink-faint)" stroke-width="1.1"></line>
        <text x="30" y="247" text-anchor="end" font-family="var(--font-mono)" font-size="9.5" fill="var(--ink-faint)">직접 참조 없음</text>
      </svg>

      <figcaption>이벤트 하나가 reducer action 하나로 수렴하기 때문에, 이벤트→상태 전이를 reducer 단위로 테스트할 수 있고, 새 이벤트 추가도 해당 계층만 건드리면 된다.</figcaption>
    </figure>
  </section>

  <section>
    <h2>대화 단위 이벤트 필터링 + cleanup</h2>
    <p class="section-intro">멀티탭·재렌더링 환경에서 가장 자주 깨졌던 지점. 두 줄이 없으면 메시지 중복, 다른 대화로의 오염이 재현됐다.</p>

    <div class="code-card">
      <div class="code-head"><span>useSocketEvents.ts</span><span>partial_response</span></div>
      <pre><span class="kw">useEffect</span>(() => {
  <span class="kw">if</span> (!socket) <span class="kw">return</span>;

  <span class="kw">const</span> <span class="fn">onPartialResponse</span> = ({ conversation_id, payload }) => {
    <span class="cm">// 다른 대화의 이벤트는 이 컴포넌트 트리에 반영하지 않는다</span>
    <span class="kw">if</span> (conversationId !== conversation_id) <span class="kw">return</span>;
    addNodeMessage({ message: payload });
  };

  socket.on(EVENT_NAMES.PARTIAL_RESPONSE, onPartialResponse);

  <span class="kw">return</span> () => {
    <span class="cm">// cleanup 없으면 재렌더링마다 handler가 누적 등록된다</span>
    socket.off(EVENT_NAMES.PARTIAL_RESPONSE, onPartialResponse);
  };
}, [socket, conversationId, addNodeMessage]);</pre>
    </div>
  </section>

  <div class="closing">
    <p><b>얻은 것.</b> 사용자는 탭을 닫거나 네트워크가 끊겨도 작업이 사라지지 않는다는 신뢰를 얻었고, 서버 인스턴스를 늘려도 실시간 전달이 깨지지 않는다. 신뢰성을 연결이 아니라 데이터(DB, 큐)에 두었기 때문에, 이후 새 이벤트나 새 에이전트 타입을 추가할 때도 <b>같은 계층에만</b> 손을 대면 됐다.</p>
  </div>

  <footer>
    <span>더 읽기 —</span>
    <a href="https://velog.io/@limelimejiwon/프론트엔드-설계-Socket.io를-React-상태와-분리하기" target="_blank" rel="noopener">Socket.io를 React 상태와 분리하기 ↗</a>
    <a href="https://velog.io/@limelimejiwon/소켓-연결이-끊겨도-워크플로우는-계속된다-실시간-AI-채팅의-프론트엔드-아키텍처" target="_blank" rel="noopener">소켓 연결이 끊겨도 워크플로우는 계속된다 ↗</a>
  </footer>
`;

interface Props {
  lang: 'en' | 'ko';
  onBack: () => void;
}

export default function CaseStudyResilientChat({ lang, onBack }: Props) {
  return (
    <CaseStudyPage
      lang={lang}
      onBack={onBack}
      bodyClassName="case-study-body"
      html={CASE_STUDY_HTML}
    />
  );
}
