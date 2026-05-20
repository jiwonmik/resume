export default function Publications() {
  return (
    <section className="section" id="publications">
      <p className="section-label">// Publications</p>
      <h2 className="section-heading">Research</h2>
      <p className="section-sub">Peer-reviewed work from my undergraduate research years.</p>

      <div className="pub-group">
        <p className="pub-group-label">International</p>
        <div className="card pub-card">
          <p className="pub-title">CNN-Based Network Intrusion Detection against Denial-of-Service Attacks</p>
          <p className="pub-meta">
            Jiyeon Kim, <strong>Jiwon Kim</strong>, Hyunjung Kim, Minsun Shim, Eunjung Choi
          </p>
          <p className="pub-ref">
            <em>Electronics</em> 9(6), pp. 916 (1–21) · Jun 2020 · IF 2.690, SCIE
          </p>
        </div>
        <div className="card pub-card">
          <p className="pub-title">Machine Learning and Deep Learning based HTTP-DoS Detection using Performance Metrics in AWS</p>
          <p className="pub-meta">
            Seung-Ah Hong, Minsun Shim, Yu-Ri Song, <strong>Ji-Won Kim</strong>, Jiyeon Kim
          </p>
          <p className="pub-ref">
            <em>Human-centric Computing and Information Sciences (HCIS 2021)</em> · South Korea · Aug 2021 · Presentation
          </p>
        </div>
      </div>

      <div className="pub-group">
        <p className="pub-group-label">Domestic</p>
        <div className="card pub-card">
          <p className="pub-title">Research on Application-Layer Denial-of-Service Attack Detection Using Amazon CloudWatch</p>
          <p className="pub-meta">
            Seung-Ah Hong, Yu-Ri Song, <strong>Ji-Won Kim</strong>, Jiyeon Kim
          </p>
          <p className="pub-ref">
            <em>Korea Multimedia Society Spring Conference</em>, Vol. 24, No. 1 · Apr 2021
          </p>
          <p className="pub-award">🏆 Best Paper Award · Korea Federation of Information Technology Societies</p>
        </div>
        <div className="card pub-card">
          <p className="pub-title">Slowloris Attack Detection via Machine Learning on Application Metrics</p>
          <p className="pub-meta">
            <strong>Ji-Won Kim</strong>, Jiyeon Kim, Eunjung Choi
          </p>
          <p className="pub-ref">
            <em>Korea Multimedia Society Fall Conference</em>, Vol. 21, No. 2 · Nov 2018
          </p>
        </div>
      </div>
    </section>
  );
}
