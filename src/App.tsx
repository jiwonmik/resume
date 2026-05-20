import { useEffect } from 'react';
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

export default function App() {
  const { lang, toggle, t } = useLanguage();

  useEffect(() => {
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
  }, []);

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
