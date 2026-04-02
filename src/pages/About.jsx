import React, { useEffect, useRef } from 'react';

const About = () => {
  const progressRef = useRef(null);
  const numbersRef = useRef(null);

  useEffect(() => {
    // Progress bars
    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.pb-fill').forEach((fill) => {
              fill.style.width = fill.dataset.w + '%';
            });
            progressObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (progressRef.current) progressObserver.observe(progressRef.current);

    // Number counters
    const numbersObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.ab-cnt').forEach((counter) => {
              const target = parseInt(counter.getAttribute('data-to'), 10);
              let count = 0;
              const speed = Math.max(1, Math.round(target / 55));
              const timer = setInterval(() => {
                count = Math.min(count + speed, target);
                counter.innerText = count;
                if (count >= target) clearInterval(timer);
              }, 18);
            });
            numbersObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    if (numbersRef.current) numbersObserver.observe(numbersRef.current);

    return () => {
      progressObserver.disconnect();
      numbersObserver.disconnect();
    };
  }, []);

  const timeline = [
    { yr: '1954',      txt: 'Robinsons Bombay Pvt Ltd commenced stevedoring operations in Mumbai' },
    { yr: '1972',      txt: 'Entered freight forwarding as Robinsons Air Services — establishing the air cargo foundation' },
    { yr: '1970–2000', txt: 'Expanded to Delhi, Bengaluru, Hyderabad, Kolkata, Chennai; obtained IATA & FIATA accreditation' },
    { yr: '2000–2010', txt: 'ISO 9001 certified; restructured into Pvt Ltd; launched cold chain in Bhiwandi & New Delhi' },
    { yr: '2017',      txt: 'Awarded GDP & AEO-LO Certification — among the first in India' },
    { yr: '2021–22',   txt: 'Joined Indian Space Association; became WCA Interglobal member (ID: 98952)' },
    { yr: '2024',      txt: 'Achieved ISO 14001 Environmental Management System Certification' },
  ];

  const stats = [
    { to: 150, suffix: '+', label: 'Professionals' },
    { to: 15,  suffix: '',  label: 'Offices in India' },
    { to: 120, suffix: '+', label: 'Global Partners' },
    { to: 70,  suffix: '+', label: 'Years of Excellence' },
  ];

  const bars = [
    { label: 'Air Freight Expertise', val: 92 },
    { label: 'Ocean Freight',         val: 88 },
    { label: 'Customs Clearance',     val: 95 },
    { label: 'Project Logistics',     val: 85 },
  ];

  return (
    <>
      <style>{`
        /* About wrapper */
        #about {
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          width: 100%;
        }

        /* Left panel */
        .ab-l {
          padding: 72px 52px 72px 48px;
          border-right: 1px solid var(--bd, #d8e4ed);
          box-sizing: border-box;
        }

        /* Right panel */
        .ab-r {
          padding: 72px 48px 72px 52px;
          background: var(--n, #093e5d);
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }
        .ab-r::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(122,184,50,0.08), transparent 70%);
        }

        /* Timeline */
        .tl {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .tl-row {
          display: flex;
          gap: 14px;
          padding: 13px 0;
          border-bottom: 1px solid var(--bd, #d8e4ed);
          transition: all 0.25s;
          cursor: default;
          border-radius: 3px;
        }
        .tl-row:hover { padding-left: 8px; background: rgba(74,124,47,0.03); }
        .tl-row:first-child { border-top: 1px solid var(--bd, #d8e4ed); }
        .tl-yr {
          font-size: 0.66rem; font-weight: 700;
          letter-spacing: 0.1em; color: var(--g, #6a9b5a);
          text-transform: uppercase; min-width: 72px; padding-top: 2px;
          flex-shrink: 0;
        }
        .tl-txt {
          font-size: 0.82rem;
          color: var(--ts, #3a6680);
          line-height: 1.55;
        }

        /* Feature grid */
        .ab-feats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(255,255,255,0.06);
          margin-top: 28px;
          position: relative; z-index: 1;
        }
        .af {
          padding: 22px 18px;
          background: rgba(255,255,255,0.03);
          transition: background 0.3s;
          cursor: default;
          position: relative; overflow: hidden;
        }
        .af:hover { background: rgba(122,184,50,0.08); }
        .af-val {
          font-size: 2.2rem; font-weight: 900;
          color: #fff; letter-spacing: -0.03em; line-height: 1;
        }
        .af-val em { font-style: normal; color: var(--g3, #8cb27f); }
        .af-lbl {
          font-size: 0.65rem; font-weight: 600;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.1em; text-transform: uppercase;
          margin-top: 4px;
        }
        .af-line {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--g3, #8cb27f);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s;
        }
        .af:hover .af-line { transform: scaleX(1); }

        /* Progress bars */
        .pbar-block {
          margin-top: 24px;
          display: flex; flex-direction: column; gap: 12px;
          position: relative; z-index: 1;
        }
        .pb-row {}
        .pb-head {
          display: flex; justify-content: space-between;
          align-items: center; margin-bottom: 5px;
        }
        .pb-lbl { font-size: 0.74rem; font-weight: 600; color: rgba(255,255,255,0.55); }
        .pb-val { font-size: 0.72rem; font-weight: 700; color: var(--g3, #8cb27f); }
        .pb-track {
          height: 3px; background: rgba(255,255,255,0.08);
          border-radius: 2px; overflow: hidden;
        }
        .pb-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--g, #6a9b5a), var(--g3, #8cb27f));
          border-radius: 2px; width: 0;
          transition: width 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .about-grid { grid-template-columns: 1fr; }
          .ab-l {
            padding: 56px 20px;
            border-right: none;
            border-bottom: 1px solid var(--bd, #d8e4ed);
          }
          .ab-r { padding: 56px 20px; }
        }

        @media (max-width: 768px) {
          .ab-l, .ab-r { padding: 48px 16px; }
          .tl-yr { font-size: 0.62rem; min-width: 62px; }
          .tl-txt { font-size: 0.78rem; }
          .af-val { font-size: 1.8rem; }
          .af-lbl { font-size: 0.6rem; }
          .pb-lbl, .pb-val { font-size: 0.68rem; }
        }

        @media (max-width: 480px) {
          .ab-l, .ab-r { padding: 40px 14px; }
          .tl { margin-top: 16px; }
          .tl-row { gap: 10px; padding: 10px 0; }
          .tl-yr { font-size: 0.58rem; min-width: 54px; }
          .tl-txt { font-size: 0.75rem; }
          .ab-feats { margin-top: 20px; }
          .af { padding: 16px 14px; }
          .af-val { font-size: 1.5rem; }
          .af-lbl { font-size: 0.56rem; }
          .pbar-block { margin-top: 18px; gap: 10px; }
          .pb-lbl, .pb-val { font-size: 0.64rem; }
        }
      `}</style>

      <section id="about">
        <div className="about-grid">
          {/* Left: Heritage */}
          <div className="ab-l sr-l">
            <div className="chip">Our Heritage</div>
            <h2 className="sec-title">
              Seven Decades of<br />
              <span className="hl">Moving the World</span>
            </h2>
            <p className="sec-sub" style={{ marginTop: '10px' }}>
              Founded in 1954 as a stevedoring firm in Mumbai, Robinsons has evolved across four generations of the Vazirani family into one of India's most trusted freight forwarding specialists — affiliated with 120+ global logistics partners.
            </p>
            <div className="tl sr d1">
              {timeline.map((item, i) => (
                <div className="tl-row" key={i}>
                  <div className="tl-yr">{item.yr}</div>
                  <div className="tl-txt">{item.txt}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Numbers */}
          <div className="ab-r sr-r">
            <div className="chip chip-w">By The Numbers</div>
            <h2 className="sec-title" style={{ color: '#fff' }}>
              Track Record <span style={{ color: 'var(--g3)' }}>That Speaks</span>
            </h2>
            <div className="ab-feats sr d2" ref={numbersRef}>
              {stats.map((s, i) => (
                <div className="af" key={i}>
                  <div className="af-val">
                    <span className="ab-cnt" data-to={s.to}>0</span>
                    <em>{s.suffix}</em>
                  </div>
                  <div className="af-lbl">{s.label}</div>
                  <div className="af-line"></div>
                </div>
              ))}
            </div>
            <div className="pbar-block sr d3" ref={progressRef}>
              {bars.map((b, i) => (
                <div className="pb-row" key={i}>
                  <div className="pb-head">
                    <span className="pb-lbl">{b.label}</span>
                    <span className="pb-val">{b.val}%</span>
                  </div>
                  <div className="pb-track">
                    <div className="pb-fill" data-w={b.val}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;