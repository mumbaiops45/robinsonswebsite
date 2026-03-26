// // import React from 'react';
// // import './Esg.css';

// // const Esg = () => {
// //   const esgItems = [
// //     { icon: '🌳', title: 'Reforestation & Tree Planting', desc: 'Active reforestation drives and tree planting initiatives to offset carbon emissions and restore biodiversity across India.' },
// //     { icon: '♻️', title: 'Circular Economy', desc: 'Implementing the 3Rs — Reduce, Reuse, Recycle — across operations and embedded in every logistics workflow.' },
// //     { icon: '🤝', title: 'NGO Partnerships', desc: 'Active NGO partnerships, beach clean-up drives, and community engagement programmes creating positive impact.' },
// //     { icon: '⚖️', title: 'Gender Equality', desc: 'Committed to SDG 5 — a diverse, equitable workplace with fair treatment and equal opportunity for all.' },
// //     { icon: '🌏', title: 'Biodiversity Conservation', desc: 'Collaboration for biodiversity conservation and governance frameworks aligned with international standards.' },
// //     { icon: '📊', title: 'Sustainability Reporting', desc: 'Transparent ESG disclosures reinforcing accountability to employees, clients, and communities.' },
// //   ];

// //   const sdgs = [
// //     { num: '5', label: 'Gender Equality', class: 's1' },
// //     { num: '9', label: 'Industry & Innovation', class: 's2' },
// //     { num: '12', label: 'Responsible Consumption', class: 's3' },
// //     { num: '13', label: 'Climate Action', class: 's4' },
// //     { num: '17', label: 'Partnerships for Goals', class: 's5' },
// //   ];

// //   return (
// //     <section id="esg">
// //       <div className="esg-top sr">
// //         <div className="esg-tl">
// //           <div className="chip chip-w">Sustainability</div>
// //           <h2 className="sec-title" style={{ color: '#fff' }}>
// //             Environmental, Social <span style={{ color: 'var(--g3)' }}>&amp; Governance</span>
// //           </h2>
// //           <p className="sec-sub" style={{ color: 'rgba(255,255,255,.55)', marginTop: '10px' }}>
// //             Our commitment to UN SDGs is embedded at the core of our strategy — from green logistics to community
// //             impact. ISO 14001 certified since 2024.
// //           </p>
// //         </div>
// //         <div className="esg-tr sr d2">
// //           <div className="pbar-block">
// //             <div className="pb-row">
// //               <div className="pb-head">
// //                 <span className="pb-lbl">Carbon Reduction Efforts</span>
// //                 <span className="pb-val">78%</span>
// //               </div>
// //               <div className="pb-track">
// //                 <div className="pb-fill" data-w="78"></div>
// //               </div>
// //             </div>
// //             <div className="pb-row">
// //               <div className="pb-head">
// //                 <span className="pb-lbl">Green Packaging Adoption</span>
// //                 <span className="pb-val">85%</span>
// //               </div>
// //               <div className="pb-track">
// //                 <div className="pb-fill" data-w="85"></div>
// //               </div>
// //             </div>
// //             <div className="pb-row">
// //               <div className="pb-head">
// //                 <span className="pb-lbl">Waste Reduction (3Rs)</span>
// //                 <span className="pb-val">70%</span>
// //               </div>
// //               <div className="pb-track">
// //                 <div className="pb-fill" data-w="70"></div>
// //               </div>
// //             </div>
// //             <div className="pb-row">
// //               <div className="pb-head">
// //                 <span className="pb-lbl">Gender Diversity in Teams</span>
// //                 <span className="pb-val">60%</span>
// //               </div>
// //               <div className="pb-track">
// //                 <div className="pb-fill" data-w="60"></div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="esg-grid sr d1">
// //         {esgItems.map((item, index) => (
// //           <div key={index} className="ec">
// //             <span className="ec-ico">{item.icon}</span>
// //             <div className="ec-ttl">{item.title}</div>
// //             <div className="ec-txt">{item.desc}</div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="sdg-strip sr">
// //         {sdgs.map((sdg, index) => (
// //           <div key={index} className={`sdg-it ${sdg.class}`}>
// //             <div className="sdg-num">{sdg.num}</div>
// //             <div className="sdg-lbl">{sdg.label}</div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Esg;
// // .esg-top {
// //   display: grid;
// //   grid-template-columns: 1fr 1fr;
// //   gap: 0;
// //   background: var(--n);
// //   border-bottom: 2px solid var(--g);
// // }

// // .esg-tl {
// //   padding: 60px 52px 60px 48px;
// //   border-right: 1px solid rgba(255, 255, 255, 0.07);
// // }

// // .esg-tr {
// //   padding: 60px 48px 60px 52px;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// // }

// // .esg-grid {
// //   display: grid;
// //   grid-template-columns: repeat(3, 1fr);
// //   gap: 0;
// //   background: var(--bd);
// //   border: 1px solid var(--bd);
// //   border-top: none;
// // }

// // .ec {
// //   background: var(--w);
// //   padding: 26px 22px;
// //   border-right: 1px solid var(--bd);
// //   border-bottom: 1px solid var(--bd);
// //   transition: all 0.32s;
// //   cursor: default;
// //   position: relative;
// //   overflow: hidden;
// // }

// // .ec:hover {
// //   background: var(--n);
// //   z-index: 1;
// // }

// // .ec::before {
// //   content: '';
// //   position: absolute;
// //   inset: 0;
// //   background: radial-gradient(circle at 0 100%, rgba(122, 184, 50, 0.07), transparent 60%);
// //   opacity: 0;
// //   transition: opacity 0.3s;
// // }

// // .ec:hover::before {
// //   opacity: 1;
// // }

// // .ec-ico {
// //   font-size: 1.6rem;
// //   display: block;
// //   margin-bottom: 10px;
// //   transition: transform 0.28s;
// // }

// // .ec:hover .ec-ico {
// //   transform: scale(1.1);
// // }

// // .ec-ttl {
// //   font-size: 0.88rem;
// //   font-weight: 700;
// //   color: var(--n);
// //   margin-bottom: 5px;
// //   transition: color 0.3s;
// // }

// // .ec:hover .ec-ttl {
// //   color: #fff;
// // }

// // .ec-txt {
// //   font-size: 0.78rem;
// //   color: var(--ts);
// //   line-height: 1.6;
// //   transition: color 0.3s;
// // }

// // .ec:hover .ec-txt {
// //   color: rgba(255, 255, 255, 0.5);
// // }

// // .sdg-strip {
// //   display: flex;
// //   background: var(--n);
// //   border-top: 1px solid rgba(255, 255, 255, 0.06);
// // }

// // .sdg-it {
// //   flex: 1;
// //   padding: 16px 10px;
// //   text-align: center;
// //   border-right: 1px solid rgba(255, 255, 255, 0.06);
// //   cursor: default;
// //   transition: filter 0.25s;
// // }

// // .sdg-it:last-child {
// //   border-right: none;
// // }

// // .sdg-it:hover {
// //   filter: brightness(1.15);
// // }

// // .sdg-num {
// //   font-size: 1.4rem;
// //   font-weight: 900;
// //   color: #fff;
// // }

// // .sdg-lbl {
// //   font-size: 0.56rem;
// //   font-weight: 700;
// //   text-transform: uppercase;
// //   letter-spacing: 0.06em;
// //   color: rgba(255, 255, 255, 0.45);
// //   margin-top: 2px;
// //   line-height: 1.3;
// // }

// // .s1 {
// //   background: rgba(239, 64, 43, 0.16);
// // }
// // .s2 {
// //   background: rgba(253, 105, 37, 0.16);
// // }
// // .s3 {
// //   background: rgba(191, 139, 46, 0.16);
// // }
// // .s4 {
// //   background: rgba(63, 126, 68, 0.16);
// // }
// // .s5 {
// //   background: rgba(25, 72, 106, 0.16);
// // }


// import React from 'react';

// const Esg = () => {
//   const esgItems = [
//     { icon: '🌳', title: 'Reforestation & Tree Planting', desc: 'Active reforestation drives and tree planting initiatives to offset carbon emissions and restore biodiversity across India.' },
//     { icon: '♻️', title: 'Circular Economy', desc: 'Implementing the 3Rs — Reduce, Reuse, Recycle — across operations and embedded in every logistics workflow.' },
//     { icon: '🤝', title: 'NGO Partnerships', desc: 'Active NGO partnerships, beach clean-up drives, and community engagement programmes creating positive impact.' },
//     { icon: '⚖️', title: 'Gender Equality', desc: 'Committed to SDG 5 — a diverse, equitable workplace with fair treatment and equal opportunity for all.' },
//     { icon: '🌏', title: 'Biodiversity Conservation', desc: 'Collaboration for biodiversity conservation and governance frameworks aligned with international standards.' },
//     { icon: '📊', title: 'Sustainability Reporting', desc: 'Transparent ESG disclosures reinforcing accountability to employees, clients, and communities.' },
//   ];

//   const sdgs = [
//     { num: '5', label: 'Gender Equality', class: 's1' },
//     { num: '9', label: 'Industry & Innovation', class: 's2' },
//     { num: '12', label: 'Responsible Consumption', class: 's3' },
//     { num: '13', label: 'Climate Action', class: 's4' },
//     { num: '17', label: 'Partnerships for Goals', class: 's5' },
//   ];

//   return (
//     <section id="esg">
//       <div className="esg-top sr">
//         <div className="esg-tl">
//           <div className="chip chip-w">Sustainability</div>
//           <h2 className="sec-title" style={{ color: '#fff' }}>
//             Environmental, Social <span style={{ color: 'var(--g3)' }}>&amp; Governance</span>
//           </h2>
//           <p className="sec-sub" style={{ color: 'rgba(255,255,255,.55)', marginTop: '10px' }}>
//             Our commitment to UN SDGs is embedded at the core of our strategy — from green logistics to community
//             impact. ISO 14001 certified since 2024.
//           </p>
//         </div>
//         <div className="esg-tr sr d2">
//           <div className="pbar-block">
//             <div className="pb-row">
//               <div className="pb-head">
//                 <span className="pb-lbl">Carbon Reduction Efforts</span>
//                 <span className="pb-val">78%</span>
//               </div>
//               <div className="pb-track">
//                 <div className="pb-fill" data-w="78"></div>
//               </div>
//             </div>
//             <div className="pb-row">
//               <div className="pb-head">
//                 <span className="pb-lbl">Green Packaging Adoption</span>
//                 <span className="pb-val">85%</span>
//               </div>
//               <div className="pb-track">
//                 <div className="pb-fill" data-w="85"></div>
//               </div>
//             </div>
//             <div className="pb-row">
//               <div className="pb-head">
//                 <span className="pb-lbl">Waste Reduction (3Rs)</span>
//                 <span className="pb-val">70%</span>
//               </div>
//               <div className="pb-track">
//                 <div className="pb-fill" data-w="70"></div>
//               </div>
//             </div>
//             <div className="pb-row">
//               <div className="pb-head">
//                 <span className="pb-lbl">Gender Diversity in Teams</span>
//                 <span className="pb-val">60%</span>
//               </div>
//               <div className="pb-track">
//                 <div className="pb-fill" data-w="60"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="esg-grid sr d1">
//         {esgItems.map((item, index) => (
//           <div key={index} className="ec">
//             <span className="ec-ico">{item.icon}</span>
//             <div className="ec-ttl">{item.title}</div>
//             <div className="ec-txt">{item.desc}</div>
//           </div>
//         ))}
//       </div>
//       <div className="sdg-strip sr">
//         {sdgs.map((sdg, index) => (
//           <div key={index} className={`sdg-it ${sdg.class}`}>
//             <div className="sdg-num">{sdg.num}</div>
//             <div className="sdg-lbl">{sdg.label}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Esg;

// // Inject styles into document head
// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement("style");
//   styleSheet.textContent = `
//     .esg-top {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       gap: 0;
//       background: var(--n);
//       border-bottom: 2px solid var(--g);
//     }

//     .esg-tl {
//       padding: 60px 52px 60px 48px;
//       border-right: 1px solid rgba(255, 255, 255, 0.07);
//     }

//     .esg-tr {
//       padding: 60px 48px 60px 52px;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//     }

//     .esg-grid {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       gap: 0;
//       background: var(--bd);
//       border: 1px solid var(--bd);
//       border-top: none;
//     }

//     .ec {
//       background: var(--w);
//       padding: 26px 22px;
//       border-right: 1px solid var(--bd);
//       border-bottom: 1px solid var(--bd);
//       transition: all 0.32s;
//       cursor: default;
//       position: relative;
//       overflow: hidden;
//     }

//     .ec:hover {
//       background: var(--n);
//       z-index: 1;
//     }

//     .ec::before {
//       content: '';
//       position: absolute;
//       inset: 0;
//       background: radial-gradient(circle at 0 100%, rgba(122, 184, 50, 0.07), transparent 60%);
//       opacity: 0;
//       transition: opacity 0.3s;
//     }

//     .ec:hover::before {
//       opacity: 1;
//     }

//     .ec-ico {
//       font-size: 1.6rem;
//       display: block;
//       margin-bottom: 10px;
//       transition: transform 0.28s;
//     }

//     .ec:hover .ec-ico {
//       transform: scale(1.1);
//     }

//     .ec-ttl {
//       font-size: 0.88rem;
//       font-weight: 700;
//       color: var(--n);
//       margin-bottom: 5px;
//       transition: color 0.3s;
//     }

//     .ec:hover .ec-ttl {
//       color: #fff;
//     }

//     .ec-txt {
//       font-size: 0.78rem;
//       color: var(--ts);
//       line-height: 1.6;
//       transition: color 0.3s;
//     }

//     .ec:hover .ec-txt {
//       color: rgba(255, 255, 255, 0.5);
//     }

//     .sdg-strip {
//       display: flex;
//       background: var(--n);
//       border-top: 1px solid rgba(255, 255, 255, 0.06);
//     }

//     .sdg-it {
//       flex: 1;
//       padding: 16px 10px;
//       text-align: center;
//       border-right: 1px solid rgba(255, 255, 255, 0.06);
//       cursor: default;
//       transition: filter 0.25s;
//     }

//     .sdg-it:last-child {
//       border-right: none;
//     }

//     .sdg-it:hover {
//       filter: brightness(1.15);
//     }

//     .sdg-num {
//       font-size: 1.4rem;
//       font-weight: 900;
//       color: #fff;
//     }

//     .sdg-lbl {
//       font-size: 0.56rem;
//       font-weight: 700;
//       text-transform: uppercase;
//       letter-spacing: 0.06em;
//       color: rgba(255, 255, 255, 0.45);
//       margin-top: 2px;
//       line-height: 1.3;
//     }

//     .s1 {
//       background: rgba(239, 64, 43, 0.16);
//     }
//     .s2 {
//       background: rgba(253, 105, 37, 0.16);
//     }
//     .s3 {
//       background: rgba(191, 139, 46, 0.16);
//     }
//     .s4 {
//       background: rgba(63, 126, 68, 0.16);
//     }
//     .s5 {
//       background: rgba(25, 72, 106, 0.16);
//     }

//     @media (max-width: 1100px) {
//       .esg-top {
//         grid-template-columns: 1fr;
//       }
//       .esg-tl {
//         padding: 48px 20px;
//         border-right: none;
//         border-bottom: 1px solid rgba(255, 255, 255, 0.06);
//       }
//       .esg-tr {
//         padding: 48px 20px;
//       }
//       .esg-grid {
//         grid-template-columns: repeat(2, 1fr);
//       }
//     }
//   `;
//   document.head.appendChild(styleSheet);
// }

// src/components/Home/ESG.jsx



import React, { useEffect, useRef } from 'react';

const ESG = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.pb-fill');
            fills.forEach((fill) => {
              fill.style.width = fill.dataset.w + '%';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (progressRef.current) observer.observe(progressRef.current);

    return () => observer.disconnect();
  }, []);

  const esgItems = [
    { icon: '🌳', title: 'Reforestation & Tree Planting', text: 'Active reforestation drives and tree planting initiatives to offset carbon emissions and restore biodiversity across India.' },
    { icon: '♻️', title: 'Circular Economy', text: 'Implementing the 3Rs — Reduce, Reuse, Recycle — across operations and embedded in every logistics workflow.' },
    { icon: '🤝', title: 'NGO Partnerships', text: 'Active NGO partnerships, beach clean-up drives, and community engagement programmes creating positive impact.' },
    { icon: '⚖️', title: 'Gender Equality', text: 'Committed to SDG 5 — a diverse, equitable workplace with fair treatment and equal opportunity for all.' },
    { icon: '🌏', title: 'Biodiversity Conservation', text: 'Collaboration for biodiversity conservation and governance frameworks aligned with international standards.' },
    { icon: '📊', title: 'Sustainability Reporting', text: 'Transparent ESG disclosures reinforcing accountability to employees, clients, and communities.' },
  ];

  const sdgs = [
    { num: '5', label: 'Gender Equality', class: 's1' },
    { num: '9', label: 'Industry & Innovation', class: 's2' },
    { num: '12', label: 'Responsible Consumption', class: 's3' },
    { num: '13', label: 'Climate Action', class: 's4' },
    { num: '17', label: 'Partnerships for Goals', class: 's5' },
  ];

  return (
    <section id="esg">
      <div className="esg-top sr">
        <div className="esg-tl">
          <div className="chip chip-w">Sustainability</div>
          <h2 className="sec-title" style={{ color: '#fff' }}>
            Environmental, Social <span style={{ color: 'var(--g3)' }}>&amp; Governance</span>
          </h2>
          <p className="sec-sub" style={{ color: 'rgba(255,255,255,.55)', marginTop: '10px' }}>
            Our commitment to UN SDGs is embedded at the core of our strategy — from green logistics to community impact. ISO 14001 certified since 2024.
          </p>
        </div>
        <div className="esg-tr sr d2">
          <div className="pbar-block" ref={progressRef}>
            <div className="pb-row">
              <div className="pb-head">
                <span className="pb-lbl">Carbon Reduction Efforts</span>
                <span className="pb-val">78%</span>
              </div>
              <div className="pb-track">
                <div className="pb-fill" data-w="78"></div>
              </div>
            </div>
            <div className="pb-row">
              <div className="pb-head">
                <span className="pb-lbl">Green Packaging Adoption</span>
                <span className="pb-val">85%</span>
              </div>
              <div className="pb-track">
                <div className="pb-fill" data-w="85"></div>
              </div>
            </div>
            <div className="pb-row">
              <div className="pb-head">
                <span className="pb-lbl">Waste Reduction (3Rs)</span>
                <span className="pb-val">70%</span>
              </div>
              <div className="pb-track">
                <div className="pb-fill" data-w="70"></div>
              </div>
            </div>
            <div className="pb-row">
              <div className="pb-head">
                <span className="pb-lbl">Gender Diversity in Teams</span>
                <span className="pb-val">60%</span>
              </div>
              <div className="pb-track">
                <div className="pb-fill" data-w="60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="esg-grid sr d1">
        {esgItems.map((item, idx) => (
          <div key={idx} className="ec">
            <span className="ec-ico">{item.icon}</span>
            <div className="ec-ttl">{item.title}</div>
            <div className="ec-txt">{item.text}</div>
          </div>
        ))}
      </div>
      <div className="sdg-strip sr">
        {sdgs.map((sdg, idx) => (
          <div key={idx} className={`sdg-it ${sdg.class}`}>
            <div className="sdg-num">{sdg.num}</div>
            <div className="sdg-lbl">{sdg.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ESG;