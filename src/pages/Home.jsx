// import React, { useEffect, useRef } from 'react';

// const Hero = () => {
//   const statsRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const counters = entry.target.querySelectorAll('.cnt');
//             counters.forEach((counter) => {
//               const updateCount = () => {
//                 const target = parseInt(counter.getAttribute('data-to'), 10);
//                 let count = 0;
//                 const speed = Math.max(1, Math.round(target / 55));
//                 const timer = setInterval(() => {
//                   count = Math.min(count + speed, target);
//                   counter.innerText = count;
//                   if (count >= target) clearInterval(timer);
//                 }, 18);
//               };
//               updateCount();
//             });
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.25 }
//     );

//     if (statsRef.current) observer.observe(statsRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <style>{`
//         /* Hero section styles */
//         .hero {
//           min-height: 100vh;
//           background: var(--w, #ffffff);
//           display: flex;
//           align-items: center;
//           padding: 0 150px;
//           padding-top: 62px;
//           position: relative;
//           overflow: hidden;
//         }
//         .hero-bg {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, #f0f5ff 0%, #ffffff 50%, #f2f8eb 100%);
//           animation: heroBg 8s ease-in-out infinite alternate;
//         }
//         @keyframes heroBg {
//           0% { background: linear-gradient(135deg, #edf3ff 0%, #ffffff 55%, #f0f8e8 100%); }
//           100% { background: linear-gradient(135deg, #f5f8ff 0%, #ffffff 55%, #f5fbee 100%); }
//         }
//         .hero-shape1,
//         .hero-shape2 {
//           position: absolute;
//           border-radius: 50%;
//           animation: float1 7s ease-in-out infinite;
//         }
//         .hero-shape1 {
//           right: -80px;
//           top: -80px;
//           width: 480px;
//           height: 480px;
//           background: radial-gradient(circle, rgba(122, 184, 50, 0.07), transparent 70%);
//         }
//         .hero-shape2 {
//           right: 200px;
//           bottom: -100px;
//           width: 320px;
//           height: 320px;
//           background: radial-gradient(circle, rgba(11, 29, 58, 0.04), transparent 70%);
//           animation: float2 9s ease-in-out infinite;
//         }
//         @keyframes float1 {
//           0%, 100% { transform: translate(0, 0); }
//           50% { transform: translate(-20px, 20px); }
//         }
//         @keyframes float2 {
//           0%, 100% { transform: translate(0, 0); }
//           50% { transform: translate(15px, -25px); }
//         }
//         .hero-inner {
//           position: relative;
//           z-index: 2;
//           width: 100%;
//           display: grid;
//           grid-template-columns: 1.1fr 0.9fr;
//           gap: 60px;
//           align-items: center;
//         }
//         .hero-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           font-size: 0.7rem;
//           font-weight: 700;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: var(--g, #6a9b5a);
//           margin-bottom: 20px;
//           animation: fadeUp 0.7s 0.1s both;
//         }
//         .hero-eyebrow::before {
//           content: '';
//           width: 24px;
//           height: 2px;
//           background: var(--g, #6a9b5a);
//           border-radius: 2px;
//         }
//         .hero-title {
//           font-size: clamp(2.8rem, 4.8vw, 4.6rem);
//           font-weight: 900;
//           line-height: 1.06;
//           letter-spacing: -0.03em;
//           color: var(--n, #093e5d);
//           margin-bottom: 18px;
//           animation: fadeUp 0.7s 0.2s both;
//         }
//         .hero-title .green {
//           color: var(--g, #6a9b5a);
//         }
//         .hero-title .line {
//           display: block;
//         }
//         .hero-desc {
//           font-size: 1.02rem;
//           line-height: 1.8;
//           color: var(--ts, #3a6680);
//           max-width: 480px;
//           margin-bottom: 30px;
//           font-weight: 400;
//           animation: fadeUp 0.7s 0.35s both;
//         }
//         .hero-ctas {
//           display: flex;
//           gap: 12px;
//           flex-wrap: wrap;
//           animation: fadeUp 0.7s 0.48s both;
//         }
//         .btn-primary {
//           background: var(--n, #093e5d);
//           color: #fff;
//           padding: 13px 28px;
//           border-radius: 4px;
//           font-size: 0.85rem;
//           font-weight: 700;
//           text-decoration: none;
//           display: inline-block;
//           transition: all 0.25s;
//           position: relative;
//           overflow: hidden;
//         }
//         .btn-primary::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: var(--g, #6a9b5a);
//           transform: translateX(-100%);
//           transition: transform 0.35s ease;
//         }
//         .btn-primary:hover::before {
//           transform: translateX(0);
//         }
//         .btn-primary span {
//           position: relative;
//           z-index: 1;
//         }
//         .btn-sec {
//           background: transparent;
//           color: var(--n, #093e5d);
//           padding: 13px 28px;
//           border-radius: 4px;
//           font-size: 0.85rem;
//           font-weight: 600;
//           text-decoration: none;
//           border: 1.5px solid var(--bd, #d8e4ed);
//           display: inline-block;
//           transition: all 0.25s;
//         }
//         .btn-sec:hover {
//           border-color: var(--n, #093e5d);
//           background: var(--w3, #edf1f8);
//         }
//         .hero-stats {
//           display: flex;
//           gap: 36px;
//           margin-top: 40px;
//           padding-top: 28px;
//           border-top: 1px solid var(--bd, #d8e4ed);
//           animation: fadeUp 0.7s 0.6s both;
//           flex-wrap: wrap;
//         }
//         .hst-val {
//           font-size: 2rem;
//           font-weight: 900;
//           color: var(--n, #093e5d);
//           letter-spacing: -0.03em;
//           line-height: 1;
//         }
//         .hst-val em {
//           font-style: normal;
//           color: var(--g, #6a9b5a);
//         }
//         .hst-lbl {
//           font-size: 0.68rem;
//           font-weight: 600;
//           color: var(--tm, #7a9aaa);
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           margin-top: 3px;
//         }
//         .hero-right {
//           animation: fadeUp 0.7s 0.3s both;
//         }
//         .hero-img-box {
//           background: var(--w2, #f7f9fc);
//           border: 1px solid var(--bd, #d8e4ed);
//           border-radius: 8px;
          
//           position: relative;
//         }
//         .hero-img-inner {
//           padding: 32px;
//         }
//         .hib-badge {
//           position: absolute;
//           top: -35px;
//           right: 30px;
//           background: var(--n, #093e5d);
//           color: #fff;
//           border-radius: 50%;
//           width: 80px;
//           height: 80px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           z-index: 1;
//         }
//         .hib-badge-yr {
//           font-size: 1.3rem;
//           font-weight: 900;
//           line-height: 1;
//           letter-spacing: -0.02em;
//         }
//         .hib-badge-lbl {
//           font-size: 0.5rem;
//           font-weight: 700;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           opacity: 0.7;
//           margin-top: 2px;
//         }
//         .hib-title {
//           font-size: 0.72rem;
//           font-weight: 700;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: var(--g, #6a9b5a);
//           margin-bottom: 14px;
//         }
//         .hib-list {
//           display: flex;
//           flex-direction: column;
//         }
//         .hib-row {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 12px 0;
//           border-bottom: 1px solid var(--bd, #d8e4ed);
//           transition: background 0.2s;
//           border-radius: 3px;
//           cursor: default;
//         }
//         .hib-row:last-child {
//           border-bottom: none;
//         }
//         .hib-row:hover {
//           background: rgba(122, 184, 50, 0.05);
//           padding-left: 6px;
//         }
//         .hib-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           background: var(--g3, #8cb27f);
//           flex-shrink: 0;
//         }
//         .hib-name {
//           font-size: 0.84rem;
//           font-weight: 600;
//           color: var(--n, #093e5d);
//         }
//         .hib-tag {
//           margin-left: auto;
//           font-size: 0.62rem;
//           font-weight: 700;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           color: var(--g, #6a9b5a);
//           background: rgba(122, 184, 50, 0.1);
//           padding: 2px 8px;
//           border-radius: 2px;
//           white-space: nowrap;
//         }
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* Responsive adjustments */
//         @media (max-width: 1100px) {
//           .hero {
//             padding: 0 20px;
//             padding-top: 62px;
//           }
//           .hero-inner {
//             grid-template-columns: 1fr;
//             gap: 40px;
//           }
//           .hero-right {
//             display: none;
//           }
//           .hero-shape1,
//           .hero-shape2 {
//             display: none;
//           }
//         }

//         @media (max-width: 768px) {
//           .hero {
//             padding-top: 56px;
//           }
//           .hero-stats {
//             gap: 20px;
//             justify-content: space-between;
//           }
//           .hst-val {
//             font-size: 1.5rem;
//           }
//           .hst-lbl {
//             font-size: 0.6rem;
//           }
//           .hero-title {
//             font-size: 2.2rem;
//             line-height: 1.2;
//           }
//           .hero-desc {
//             font-size: 0.9rem;
//             line-height: 1.6;
//           }
//           .btn-primary,
//           .btn-sec {
//             padding: 10px 20px;
//             font-size: 0.75rem;
//           }
//           .hero-ctas {
//             gap: 10px;
//           }
//           .hero-img-inner {
//             padding: 20px;
//           }
//           .hib-badge {
//             width: 70px;
//             height: 70px;
//             top: -15px;
//             right: 15px;
//           }
//           .hib-badge-yr {
//             font-size: 1.1rem;
//           }
//         }

//         @media (max-width: 640px) {
//           .hero-left {
//             text-align: center;
//           }
//           .hero-eyebrow {
//             justify-content: center;
//           }
//           .hero-desc {
//             margin-left: auto;
//             margin-right: auto;
//           }
//           .hero-ctas {
//             justify-content: center;
//           }
//           .hero-stats {
//             justify-content: center;
//           }
//         }

//         @media (max-width: 480px) {
//           .hero-stats {
//             gap: 15px;
//             flex-wrap: wrap;
//           }
//           .hst {
//             flex: 1 1 calc(50% - 15px);
//             text-align: center;
//           }
//           .hib-badge {
//             width: 60px;
//             height: 60px;
//             top: 10px;
//             right: 10px;
//           }
//           .hib-badge-yr {
//             font-size: 1rem;
//           }
//           .hib-badge-lbl {
//             font-size: 0.45rem;
//           }
//           .hib-name {
//             font-size: 0.75rem;
//           }
//           .hib-tag {
//             font-size: 0.55rem;
//             padding: 2px 6px;
//           }
//         }
//       `}</style>

//       <section className="hero" id="home">
//         <div className="hero-bg"></div>
//         <div className="hero-shape1"></div>
//         <div className="hero-shape2"></div>
//         <div className="hero-inner">
//           <div className="hero-left">
//             <div className="hero-eyebrow">On The Move Since 1954</div>
//             <h1 className="hero-title">
//               <span className="line">Powering</span>
//               <span className="line green">Logistics</span>
//               <span className="line">Excellence</span>
//             </h1>
//             <p className="hero-desc">
//               Four generations of visionary leadership. A global network of 120+ partners. End-to-end freight forwarding for the world's most demanding industries.
//             </p>
//             <div className="hero-ctas">
//               <a href="#services" className="btn-primary">
//                 <span>Explore Services</span>
//               </a>
//               <a href="#about" className="btn-sec">
//                 Our Story →
//               </a>
//             </div>
//             <div className="hero-stats" ref={statsRef}>
//               <div className="hst">
//                 <div className="hst-val">
//                   <span className="cnt" data-to="150">0</span><em>+</em>
//                 </div>
//                 <div className="hst-lbl">Professionals</div>
//               </div>
//               <div className="hst">
//                 <div className="hst-val">
//                   <span className="cnt" data-to="15">0</span>
//                 </div>
//                 <div className="hst-lbl">Offices</div>
//               </div>
//               <div className="hst">
//                 <div className="hst-val">
//                   <span className="cnt" data-to="120">0</span><em>+</em>
//                 </div>
//                 <div className="hst-lbl">Partners</div>
//               </div>
//               <div className="hst">
//                 <div className="hst-val">
//                   <span className="cnt" data-to="70">0</span><em>+</em>
//                 </div>
//                 <div className="hst-lbl">Years</div>
//               </div>
//             </div>
//           </div>
//           <div className="hero-right">
//             <div className="hero-img-box">
//               <div className="hib-badge">
//                 <div className="hib-badge-yr">1954</div>
//                 <div className="hib-badge-lbl">Est.</div>
//               </div>
//               <div className="hero-img-inner">
//                 <div className="hib-title">Core Services</div>
//                 <div className="hib-list">
//                   <div className="hib-row">
//                     <div className="hib-dot"></div>
//                     <div className="hib-name">Air Imports & Exports</div>
//                     <div className="hib-tag">IATA · GDP</div>
//                   </div>
//                   <div className="hib-row">
//                     <div className="hib-dot"></div>
//                     <div className="hib-name">Ocean Imports & Exports</div>
//                     <div className="hib-tag">LCL · FCL</div>
//                   </div>
//                   <div className="hib-row">
//                     <div className="hib-dot"></div>
//                     <div className="hib-name">Customs Clearance</div>
//                     <div className="hib-tag">AEO-LO</div>
//                   </div>
//                   <div className="hib-row">
//                     <div className="hib-dot"></div>
//                     <div className="hib-name">Consolidation Services</div>
//                     <div className="hib-tag">Air · Sea</div>
//                   </div>
//                   <div className="hib-row">
//                     <div className="hib-dot"></div>
//                     <div className="hib-name">3PL & Warehousing</div>
//                     <div className="hib-tag">Cold Chain</div>
//                   </div>
//                   <div className="hib-row">
//                     <div className="hib-dot"></div>
//                     <div className="hib-name">Project Logistics</div>
//                     <div className="hib-tag">Heavy Lift</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;



import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.h-cnt');
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
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          background: var(--w, #ffffff);
          display: flex;
          align-items: center;
          padding: 0 48px;
          padding-top: 62px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f0f5ff 0%, #ffffff 50%, #f2f8eb 100%);
          animation: heroBg 8s ease-in-out infinite alternate;
        }
        @keyframes heroBg {
          0%   { background: linear-gradient(135deg,#edf3ff 0%,#ffffff 55%,#f0f8e8 100%); }
          100% { background: linear-gradient(135deg,#f5f8ff 0%,#ffffff 55%,#f5fbee 100%); }
        }
        .hero-shape1, .hero-shape2 {
          position: absolute;
          border-radius: 50%;
        }
        .hero-shape1 {
          right: -80px; top: -80px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(122,184,50,0.07), transparent 70%);
          animation: float1 7s ease-in-out infinite;
        }
        .hero-shape2 {
          right: 200px; bottom: -100px;
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(11,29,58,0.04), transparent 70%);
          animation: float2 9s ease-in-out infinite;
        }
        @keyframes float1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,20px)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(15px,-25px)} }

        .hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--g, #6a9b5a);
          margin-bottom: 20px;
          animation: fadeUp 0.7s 0.1s both;
        }
        .hero-eyebrow::before {
          content: '';
          width: 24px; height: 2px;
          background: var(--g, #6a9b5a);
          border-radius: 2px;
        }
        .hero-title {
          font-size: clamp(2.4rem, 4.8vw, 4.6rem);
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -0.03em;
          color: var(--n, #093e5d);
          margin-bottom: 18px;
          animation: fadeUp 0.7s 0.2s both;
        }
        .hero-title .green { color: var(--g, #6a9b5a); }
        .hero-title .line { display: block; }
        .hero-desc {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--ts, #3a6680);
          max-width: 480px;
          margin-bottom: 30px;
          animation: fadeUp 0.7s 0.35s both;
        }
        .hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          animation: fadeUp 0.7s 0.48s both;
        }
        .btn-primary {
          background: var(--n, #093e5d);
          color: #fff;
          padding: 13px 28px;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--g, #6a9b5a);
          transform: translateX(-100%);
          transition: transform 0.35s ease;
        }
        .btn-primary:hover::before { transform: translateX(0); }
        .btn-primary span { position: relative; z-index: 1; }
        .btn-sec {
          background: transparent;
          color: var(--n, #093e5d);
          padding: 13px 28px;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          border: 1.5px solid var(--bd, #d8e4ed);
          display: inline-block;
          transition: all 0.25s;
        }
        .btn-sec:hover {
          border-color: var(--n, #093e5d);
          background: var(--w3, #edf1f8);
        }

        /* Stats */
        .hero-stats {
          display: flex;
          gap: 36px;
          margin-top: 40px;
          padding-top: 28px;
          border-top: 1px solid var(--bd, #d8e4ed);
          animation: fadeUp 0.7s 0.6s both;
          flex-wrap: wrap;
        }
        .hst-val {
          font-size: 2rem;
          font-weight: 900;
          color: var(--n, #093e5d);
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .hst-val em { font-style: normal; color: var(--g, #6a9b5a); }
        .hst-lbl {
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--tm, #7a9aaa);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 3px;
        }

        /* Right card */
        .hero-right { animation: fadeUp 0.7s 0.3s both; }
        .hero-img-box {
          background: var(--w2, #f7f9fc);
          border: 1px solid var(--bd, #d8e4ed);
          border-radius: 8px;
          position: relative;
        }
        .hero-img-inner { padding: 32px; }
        .hib-badge {
          position: absolute;
          top: -35px; right: 30px;
          background: var(--n, #093e5d);
          color: #fff;
          border-radius: 50%;
          width: 80px; height: 80px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          z-index: 1;
        }
        .hib-badge-yr {
          font-size: 1.3rem; font-weight: 900;
          line-height: 1; letter-spacing: -0.02em;
        }
        .hib-badge-lbl {
          font-size: 0.5rem; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          opacity: 0.7; margin-top: 2px;
        }
        .hib-title {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--g, #6a9b5a); margin-bottom: 14px;
        }
        .hib-list { display: flex; flex-direction: column; }
        .hib-row {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid var(--bd, #d8e4ed);
          transition: background 0.2s, padding-left 0.2s;
          border-radius: 3px; cursor: default;
        }
        .hib-row:last-child { border-bottom: none; }
        .hib-row:hover { background: rgba(122,184,50,0.05); padding-left: 6px; }
        .hib-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--g3, #8cb27f); flex-shrink: 0;
        }
        .hib-name {
          font-size: 0.84rem; font-weight: 600;
          color: var(--n, #093e5d);
        }
        .hib-tag {
          margin-left: auto;
          font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--g, #6a9b5a);
          background: rgba(122,184,50,0.1);
          padding: 2px 8px; border-radius: 2px;
          white-space: nowrap;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
       @media (max-width: 1100px) {
  .hero {
    padding: 0 20px;
    padding-top: 62px;
  }
  .hero-inner {
    grid-template-columns: 1fr;   /* stacks the two sections */
    gap: 40px;                    /* adds space between text and card */
  }
  /* Remove display: none – let the card appear */
  .hero-right {
    display: block;
  }
  .hero-shape1, .hero-shape2 {
    display: none;
  }
}

        @media (max-width: 768px) {
          .hero { padding: 0 16px; padding-top: 56px; min-height: 100svh; }
          .hero-inner { padding-top: 16px; }
          .hero-stats { gap: 20px; justify-content: space-between; }
          .hst-val { font-size: 1.5rem; }
          .hst-lbl { font-size: 0.6rem; }
          .hero-desc { font-size: 0.9rem; line-height: 1.65; }
          .btn-primary, .btn-sec { padding: 11px 22px; font-size: 0.8rem; }
          .hero-ctas { gap: 10px; }
          .hero-eyebrow { font-size: 0.65rem; margin-bottom: 14px; }
        }
          

        @media (max-width: 640px) {
          .hero-left { text-align: center; }
          .hero-eyebrow { justify-content: center; }
          .hero-desc { margin-left: auto; margin-right: auto; }
          .hero-ctas { justify-content: center; }
          .hero-stats { justify-content: center; }
        }

        @media (max-width: 480px) {
          .hero { padding: 0 14px; padding-top: 56px; }
          .hero-stats { gap: 12px; }
          .hst { flex: 1 1 calc(50% - 12px); text-align: center; }
          .hst-val { font-size: 1.4rem; }
          .btn-primary, .btn-sec { padding: 10px 18px; font-size: 0.78rem; }
          .hero-ctas { gap: 8px; }
          .hero-eyebrow { font-size: 0.6rem; letter-spacing: 0.12em; }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-shape1"></div>
        <div className="hero-shape2"></div>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow">On The Move Since 1954</div>
            <h1 className="hero-title">
              <span className="line">Powering</span>
              <span className="line green">Logistics</span>
              <span className="line">Excellence</span>
            </h1>
            <p className="hero-desc">
              Four generations of visionary leadership. A global network of 120+ partners. End-to-end freight forwarding for the world's most demanding industries.
            </p>
            <div className="hero-ctas">
              <a href="#services" className="btn-primary">
                <span>Explore Services</span>
              </a>
              <a href="#about" className="btn-sec">Our Story →</a>
            </div>
            <div className="hero-stats" ref={statsRef}>
              {[
                { to: 150, suffix: '+', label: 'Professionals' },
                { to: 15,  suffix: '',  label: 'Offices' },
                { to: 120, suffix: '+', label: 'Partners' },
                { to: 70,  suffix: '+', label: 'Years' },
              ].map((s, i) => (
                <div className="hst" key={i}>
                  <div className="hst-val">
                    <span className="h-cnt" data-to={s.to}>0</span>
                    <em>{s.suffix}</em>
                  </div>
                  <div className="hst-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-img-box">
              <div className="hib-badge">
                <div className="hib-badge-yr">1954</div>
                <div className="hib-badge-lbl">Est.</div>
              </div>
              <div className="hero-img-inner">
                <div className="hib-title">Core Services</div>
                <div className="hib-list">
                  {[
                    { name: 'Air Imports & Exports',    tag: 'IATA · GDP' },
                    { name: 'Ocean Imports & Exports',  tag: 'LCL · FCL'  },
                    { name: 'Customs Clearance',        tag: 'AEO-LO'     },
                    { name: 'Consolidation Services',   tag: 'Air · Sea'  },
                    { name: '3PL & Warehousing',        tag: 'Cold Chain' },
                    { name: 'Project Logistics',        tag: 'Heavy Lift' },
                  ].map((row, i) => (
                    <div className="hib-row" key={i}>
                      <div className="hib-dot"></div>
                      <div className="hib-name">{row.name}</div>
                      <div className="hib-tag">{row.tag}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;