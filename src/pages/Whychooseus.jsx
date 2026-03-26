// // import React from 'react';
// // import './Why.css';

// // const Why = () => {
// //   const reasons = [
// //     {
// //       num: '01',
// //       title: 'End-to-End Solutions',
// //       desc: 'Air & ocean freight to warehousing and last-mile distribution — all under one trusted roof with seamless handoffs.',
// //     },
// //     {
// //       num: '02',
// //       title: 'Global Reach, Local Depth',
// //       desc: '120+ international partners combined with 15 Indian offices providing 24/7 direct support and local expertise.',
// //     },
// //     {
// //       num: '03',
// //       title: 'Certified & Compliant',
// //       desc: "AEO-LO, GDP, IATA, FIATA, ISO 9001 & ISO 14001 — among India's earliest AEO-LO holders and oldest CHA licensees.",
// //     },
// //     {
// //       num: '04',
// //       title: 'Customer-Centric Culture',
// //       desc: 'Long-term partnerships built on trust, accuracy, and reliability. Dedicated sector specialists for personalised support.',
// //     },
// //   ];

// //   const associations = [
// //     'Air Cargo Agents Association of India (since 1978)',
// //     'Assoc. of Multimodal Transport Operations of India',
// //     'Indo American Chamber of Commerce',
// //     'Indo Australian Chamber of Commerce',
// //     'Indo French Chamber of Commerce',
// //     'Indian Space Association (since 2021)',
// //     'MSME India',
// //     'FICCI',
// //     'World Air Cargo Organization (since 1996)',
// //     'WCA Interglobal (since 2022, ID: 98952)',
// //   ];

// //   return (
// //     <section className="sec">
// //       <div className="why-grid">
// //         <div className="wy-l sr-l">
// //           <div className="chip">Why Robinsons</div>
// //           <h2 className="sec-title">
// //             The Case for <span className="hl">Partnership</span>
// //           </h2>
// //           <div className="why-list">
// //             {reasons.map((reason, index) => (
// //               <div key={index} className="wr">
// //                 <div className="wr-num">{reason.num}</div>
// //                 <div className="wr-body">
// //                   <div className="wr-ttl">{reason.title}</div>
// //                   <div className="wr-txt">{reason.desc}</div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //         <div className="wy-r sr-r">
// //           <div className="chip">Our Associations</div>
// //           <h2 className="sec-title">
// //             Industry <span className="hl">Memberships</span>
// //           </h2>
// //           <div className="assoc-grid sr d1">
// //             {associations.map((assoc, index) => (
// //               <div key={index} className="ag">
// //                 <div className="ag-name">{assoc}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Why;
// // .why-grid {
// //   display: grid;
// //   grid-template-columns: 1fr 1fr;
// //   gap: 0;
// // }

// // .wy-l {
// //   padding: 72px 52px 72px 48px;
// //   border-right: 1px solid var(--bd);
// // }

// // .wy-r {
// //   padding: 72px 48px 72px 52px;
// //   background: var(--w2);
// // }

// // .why-list {
// //   margin-top: 24px;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 0;
// // }

// // .wr {
// //   display: flex;
// //   gap: 18px;
// //   align-items: flex-start;
// //   padding: 18px 0;
// //   border-bottom: 1px solid var(--bd);
// //   transition: all 0.25s;
// //   cursor: default;
// //   position: relative;
// // }

// // .wr:first-child {
// //   border-top: 1px solid var(--bd);
// // }

// // .wr::after {
// //   content: '';
// //   position: absolute;
// //   left: -52px;
// //   right: -52px;
// //   top: 0;
// //   bottom: 0;
// //   background: rgba(74, 124, 47, 0.04);
// //   opacity: 0;
// //   transition: opacity 0.25s;
// // }

// // .wr:hover::after {
// //   opacity: 1;
// // }

// // .wr-num {
// //   font-size: 1.6rem;
// //   font-weight: 900;
// //   color: var(--w3);
// //   line-height: 1;
// //   min-width: 32px;
// //   position: relative;
// //   z-index: 1;
// //   transition: color 0.25s;
// //   letter-spacing: -0.02em;
// // }

// // .wr:hover .wr-num {
// //   color: var(--g);
// // }

// // .wr-body {
// //   position: relative;
// //   z-index: 1;
// // }

// // .wr-ttl {
// //   font-size: 0.9rem;
// //   font-weight: 700;
// //   color: var(--n);
// //   margin-bottom: 3px;
// // }

// // .wr-txt {
// //   font-size: 0.8rem;
// //   color: var(--ts);
// //   line-height: 1.6;
// // }

// // .assoc-grid {
// //   display: grid;
// //   grid-template-columns: repeat(2, 1fr);
// //   gap: 0;
// //   background: var(--bd);
// //   border: 1px solid var(--bd);
// //   margin-top: 24px;
// // }

// // .ag {
// //   background: var(--w2);
// //   padding: 14px 16px;
// //   border-right: 1px solid var(--bd);
// //   border-bottom: 1px solid var(--bd);
// //   transition: all 0.25s;
// //   cursor: default;
// // }

// // .ag:hover {
// //   background: var(--n);
// // }

// // .ag-name {
// //   font-size: 0.73rem;
// //   font-weight: 600;
// //   color: var(--ts);
// //   line-height: 1.45;
// //   transition: color 0.25s;
// // }

// // .ag:hover .ag-name {
// //   color: var(--g3);
// // }
// import React from 'react';

// const Why = () => {
//   const reasons = [
//     {
//       num: '01',
//       title: 'End-to-End Solutions',
//       desc: 'Air & ocean freight to warehousing and last-mile distribution — all under one trusted roof with seamless handoffs.',
//     },
//     {
//       num: '02',
//       title: 'Global Reach, Local Depth',
//       desc: '120+ international partners combined with 15 Indian offices providing 24/7 direct support and local expertise.',
//     },
//     {
//       num: '03',
//       title: 'Certified & Compliant',
//       desc: "AEO-LO, GDP, IATA, FIATA, ISO 9001 & ISO 14001 — among India's earliest AEO-LO holders and oldest CHA licensees.",
//     },
//     {
//       num: '04',
//       title: 'Customer-Centric Culture',
//       desc: 'Long-term partnerships built on trust, accuracy, and reliability. Dedicated sector specialists for personalised support.',
//     },
//   ];

//   const associations = [
//     'Air Cargo Agents Association of India (since 1978)',
//     'Assoc. of Multimodal Transport Operations of India',
//     'Indo American Chamber of Commerce',
//     'Indo Australian Chamber of Commerce',
//     'Indo French Chamber of Commerce',
//     'Indian Space Association (since 2021)',
//     'MSME India',
//     'FICCI',
//     'World Air Cargo Organization (since 1996)',
//     'WCA Interglobal (since 2022, ID: 98952)',
//   ];

//   return (
//     <section className="sec">
//       <div className="why-grid">
//         <div className="wy-l sr-l">
//           <div className="chip">Why Robinsons</div>
//           <h2 className="sec-title">
//             The Case for <span className="hl">Partnership</span>
//           </h2>
//           <div className="why-list">
//             {reasons.map((reason, index) => (
//               <div key={index} className="wr">
//                 <div className="wr-num">{reason.num}</div>
//                 <div className="wr-body">
//                   <div className="wr-ttl">{reason.title}</div>
//                   <div className="wr-txt">{reason.desc}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="wy-r sr-r">
//           <div className="chip">Our Associations</div>
//           <h2 className="sec-title">
//             Industry <span className="hl">Memberships</span>
//           </h2>
//           <div className="assoc-grid sr d1">
//             {associations.map((assoc, index) => (
//               <div key={index} className="ag">
//                 <div className="ag-name">{assoc}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Why;

// // Inject styles into document head
// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement("style");
//   styleSheet.textContent = `
//     .why-grid {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       gap: 0;
//     }

//     .wy-l {
//       padding: 72px 52px 72px 48px;
//       border-right: 1px solid var(--bd);
//     }

//     .wy-r {
//       padding: 72px 48px 72px 52px;
//       background: var(--w2);
//     }

//     .why-list {
//       margin-top: 24px;
//       display: flex;
//       flex-direction: column;
//       gap: 0;
//     }

//     .wr {
//       display: flex;
//       gap: 18px;
//       align-items: flex-start;
//       padding: 18px 0;
//       border-bottom: 1px solid var(--bd);
//       transition: all 0.25s;
//       cursor: default;
//       position: relative;
//     }

//     .wr:first-child {
//       border-top: 1px solid var(--bd);
//     }

//     .wr::after {
//       content: '';
//       position: absolute;
//       left: -52px;
//       right: -52px;
//       top: 0;
//       bottom: 0;
//       background: rgba(74, 124, 47, 0.04);
//       opacity: 0;
//       transition: opacity 0.25s;
//     }

//     .wr:hover::after {
//       opacity: 1;
//     }

//     .wr-num {
//       font-size: 1.6rem;
//       font-weight: 900;
//       color: var(--w3);
//       line-height: 1;
//       min-width: 32px;
//       position: relative;
//       z-index: 1;
//       transition: color 0.25s;
//       letter-spacing: -0.02em;
//     }

//     .wr:hover .wr-num {
//       color: var(--g);
//     }

//     .wr-body {
//       position: relative;
//       z-index: 1;
//     }

//     .wr-ttl {
//       font-size: 0.9rem;
//       font-weight: 700;
//       color: var(--n);
//       margin-bottom: 3px;
//     }

//     .wr-txt {
//       font-size: 0.8rem;
//       color: var(--ts);
//       line-height: 1.6;
//     }

//     .assoc-grid {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       gap: 0;
//       background: var(--bd);
//       border: 1px solid var(--bd);
//       margin-top: 24px;
//     }

//     .ag {
//       background: var(--w2);
//       padding: 14px 16px;
//       border-right: 1px solid var(--bd);
//       border-bottom: 1px solid var(--bd);
//       transition: all 0.25s;
//       cursor: default;
//     }

//     .ag:hover {
//       background: var(--n);
//     }

//     .ag-name {
//       font-size: 0.73rem;
//       font-weight: 600;
//       color: var(--ts);
//       line-height: 1.45;
//       transition: color 0.25s;
//     }

//     .ag:hover .ag-name {
//       color: var(--g3);
//     }

//     @media (max-width: 1100px) {
//       .why-grid {
//         grid-template-columns: 1fr;
//       }
//       .wy-l {
//         padding: 48px 20px;
//         border-right: none;
//         border-bottom: 1px solid var(--bd);
//       }
//       .wy-r {
//         padding: 48px 20px;
//       }
//     }
//   `;
//   document.head.appendChild(styleSheet);
// }

// src/components/Home/WhyRobinsons.jsx
import React from 'react';

const WhyRobinsons = () => {
  const reasons = [
    {
      num: '01',
      title: 'End-to-End Solutions',
      text: 'Air & ocean freight to warehousing and last-mile distribution — all under one trusted roof with seamless handoffs.',
    },
    {
      num: '02',
      title: 'Global Reach, Local Depth',
      text: '120+ international partners combined with 15 Indian offices providing 24/7 direct support and local expertise.',
    },
    {
      num: '03',
      title: 'Certified & Compliant',
      text: 'AEO-LO, GDP, IATA, FIATA, ISO 9001 & ISO 14001 — among India\'s earliest AEO-LO holders and oldest CHA licensees.',
    },
    {
      num: '04',
      title: 'Customer-Centric Culture',
      text: 'Long-term partnerships built on trust, accuracy, and reliability. Dedicated sector specialists for personalised support.',
    },
  ];

  const associations = [
    'Air Cargo Agents Association of India (since 1978)',
    'Assoc. of Multimodal Transport Operations of India',
    'Indo American Chamber of Commerce',
    'Indo Australian Chamber of Commerce',
    'Indo French Chamber of Commerce',
    'Indian Space Association (since 2021)',
    'MSME India',
    'FICCI',
    'World Air Cargo Organization (since 1996)',
    'WCA Interglobal (since 2022, ID: 98952)',
  ];

  return (
    <section className="sec">
      <div className="why-grid">
        <div className="wy-l sr-l">
          <div className="chip">Why Robinsons</div>
          <h2 className="sec-title">
            The Case for <span className="hl">Partnership</span>
          </h2>
          <div className="why-list">
            {reasons.map((reason, idx) => (
              <div key={idx} className="wr">
                <div className="wr-num">{reason.num}</div>
                <div className="wr-body">
                  <div className="wr-ttl">{reason.title}</div>
                  <div className="wr-txt">{reason.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="wy-r sr-r">
          <div className="chip">Our Associations</div>
          <h2 className="sec-title">
            Industry <span className="hl">Memberships</span>
          </h2>
          <div className="assoc-grid sr d1">
            {associations.map((assoc, idx) => (
              <div key={idx} className="ag">
                <div className="ag-name">{assoc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRobinsons;