import type { T } from '../hooks/useLanguage';

interface Props { t: T }

export default function Education({ t }: Props) {
  return (
    <section className="section" id="education">
      <p className="section-label">// {t({ en: 'Education', ko: '학력' })}</p>
      <h2 className="section-heading">{t({ en: 'Academic Background', ko: '학력 사항' })}</h2>
      <p className="section-sub">{t({ en: 'Where I studied and what I researched.', ko: '수학한 곳과 연구한 내용입니다.' })}</p>
      <div className="card">
        <div className="card-header">
          <div>
            <h3>{t({ en: 'B.E. in Information Security and Enterprise Security', ko: '정보보안 및 기업보안 공학사' })}</h3>
            <p className="company">
              {t({ en: "Seoul Women's University · GPA 4.17 / 4.5", ko: '서울여자대학교 · GPA 4.17 / 4.5' })}
            </p>
          </div>
          <span className="date">2017 – 2021</span>
        </div>
        <ul>
          <li>
            {t({
              en: 'Undergraduate Research Student — developed a cloud intrusion detection system based on performance metrics, funded by the National Research Foundation of Korea (NRF)',
              ko: '학부 연구생 — 한국연구재단(NRF) 지원 과제로 성능 메트릭 기반 클라우드 침입 탐지 시스템 개발',
            })}
          </li>
        </ul>
      </div>
    </section>
  );
}
