import React, { useEffect, useRef } from 'react';

const NumbersBand = () => {
  const numbersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.nb-cnt');
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute('data-to'), 10);
              let count = 0;
              const speed = Math.max(1, Math.round(target / 55));
              const timer = setInterval(() => {
                count = Math.min(count + speed, target);
                counter.innerText = count;
                if (count >= target) clearInterval(timer);
              }, 18);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (numbersRef.current) observer.observe(numbersRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 150, suffix: '+', label: 'Employees' },
    { value: 15,  suffix: '',  label: 'Offices Across India' },
    { value: 120, suffix: '+', label: 'International Partners' },
    { value: 70,  suffix: '+', label: 'Years of Excellence' },
  ];

  return (
    <>
      <style>{`
        .numbers-band {
          background: var(--w2, #f7f9fc);
          border-top: 1px solid var(--bd, #d8e4ed);
          border-bottom: 1px solid var(--bd, #d8e4ed);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
        }
        .nb-cell {
          padding: 36px 24px;
          text-align: center;
          border-right: 1px solid var(--bd, #d8e4ed);
          transition: background 0.25s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .nb-cell:last-child { border-right: none; }
        .nb-cell:hover { background: var(--w, #ffffff); }
        .nb-cell::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--g3, #8cb27f);
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .nb-cell:hover::after { transform: scaleX(1); }
        .nb-val {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--n, #093e5d);
          letter-spacing: -0.035em;
          line-height: 1;
        }
        .nb-val em {
          font-style: normal;
          color: var(--g, #6a9b5a);
        }
        .nb-lbl {
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--tm, #7a9aaa);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 5px;
        }

        @media (max-width: 1100px) {
          .numbers-band {
            grid-template-columns: repeat(2, 1fr);
          }
          .nb-cell {
            border-bottom: 1px solid var(--bd, #d8e4ed);
          }
          .nb-cell:nth-child(2) { border-right: none; }
          .nb-cell:nth-child(3) { border-right: 1px solid var(--bd, #d8e4ed); }
          .nb-cell:nth-child(3),
          .nb-cell:nth-child(4) { border-bottom: none; }
        }

        @media (max-width: 768px) {
          .nb-cell { padding: 28px 16px; }
          .nb-val { font-size: 2rem; }
          .nb-lbl { font-size: 0.6rem; }
        }

        @media (max-width: 480px) {
          .nb-cell { padding: 22px 12px; }
          .nb-val { font-size: 1.7rem; }
          .nb-lbl {
            font-size: 0.56rem;
            letter-spacing: 0.08em;
          }
        }
      `}</style>

      <div className="numbers-band sr" ref={numbersRef}>
        {stats.map((stat, idx) => (
          <div key={idx} className="nb-cell">
            <div className="nb-val">
              <span className="nb-cnt" data-to={stat.value}>0</span>
              <em>{stat.suffix}</em>
            </div>
            <div className="nb-lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NumbersBand;