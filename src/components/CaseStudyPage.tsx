interface Props {
  lang: 'en' | 'ko';
  onBack: () => void;
  bodyClassName: string;
  html: string;
}

export default function CaseStudyPage({ lang, onBack, bodyClassName, html }: Props) {
  return (
    <section className="case-study-page" id="case-study">
      <button className="case-study-back" onClick={onBack}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        {lang === 'en' ? 'Back to Resume' : '이력서로 돌아가기'}
      </button>
      <div className={bodyClassName} dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}
