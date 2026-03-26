import React, { useEffect } from 'react';
// import Hero from './components/Hero';
// import Ticker from './components/Ticker';
// import ClientScroll from './components/ClientScroll';
// import About from './components/About';
// import NumbersBand from './components/NumbersBand';
// import Services from './components/Services';
// import Industries from './components/Industries';
// import CertBand from './components/CertBand';
// import Why from './components/Why';
// import Clients from './components/Clients';
// import Esg from './components/Esg';
// import Offices from './components/Offices';
// import Cta from './components/Cta';
// import Footer from './components/Footer';
import Hero from '../src/pages/Home'
import Navbar from './components/Navbar';
import Ticker from './pages/Ticker';
import ClientScroll from './pages/ClientScroll';
import About from './pages/About';
import NumbersBand from './pages/NumbersBand';
import Services from './pages/Services';
import Industries from './pages/Industries';
import CertBand from './pages/CertBand';
import Why from './pages/Whychooseus';
import Clients from './pages/Clients';
import Esg from './pages/Esg';
import Offices from './pages/Offices';
import Cta from './pages/Cta';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll reveal observer
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07 }
    );

    document.querySelectorAll('.sr, .sr-l, .sr-r').forEach((el) => obs.observe(el));

    // Counter observer
    function runCount(el) {
      const to = +el.dataset.to;
      let c = 0;
      const s = Math.max(1, Math.round(to / 55));
      const t = setInterval(() => {
        c = Math.min(c + s, to);
        el.textContent = c;
        if (c >= to) clearInterval(t);
      }, 18);
    }

    const cObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.cnt').forEach(runCount);
            cObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll('.hero-stats, .ab-feats, .numbers-band').forEach((el) => cObs.observe(el));

    // Progress bars observer
    const pObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.pb-fill').forEach((b) => {
              b.style.width = b.dataset.w + '%';
            });
            pObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.pbar-block').forEach((el) => pObs.observe(el));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <ClientScroll />
      <About />
      <NumbersBand />
      <Services />
      <Industries />
      <CertBand />
      <Why />
      <Clients />
      <Esg />
      <Offices />
      <Cta />
      <Footer />
    </>
  );
}

export default App;