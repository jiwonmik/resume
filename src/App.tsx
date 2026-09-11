import { useEffect, useState } from 'react';
import { useLanguage } from './hooks/useLanguage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Strengths from './components/Strengths';
import Education from './components/Education';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Footer from './components/Footer';
import CaseStudyResilientChat from './components/CaseStudyResilientChat';
import CaseStudyAgentConcurrency from './components/CaseStudyAgentConcurrency';
import { CASE_STUDY_ROUTE, AGENT_CONCURRENCY_ROUTE } from './routes';

export default function App() {
  const { lang, toggle, t } = useLanguage();
  const [hash, setHash] = useState(() => window.location.hash);
  const isCaseStudy = hash === CASE_STUDY_ROUTE || hash === AGENT_CONCURRENCY_ROUTE;

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isCaseStudy]);

  useEffect(() => {
    if (isCaseStudy) return;
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [isCaseStudy]);

  if (isCaseStudy) {
    const goBack = () => { window.location.hash = ''; };
    return (
      <>
        <Navbar lang={lang} onToggle={toggle} onBack={goBack} />
        <main>
          {hash === CASE_STUDY_ROUTE ? (
            <CaseStudyResilientChat lang={lang} onBack={goBack} />
          ) : (
            <CaseStudyAgentConcurrency lang={lang} onBack={goBack} />
          )}
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar lang={lang} onToggle={toggle} />
      <Hero t={t} />
      <main>
        <About t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Strengths t={t} />
        <Education t={t} />
        <Publications />
        <Footer t={t} />
      </main>
    </>
  );
}
