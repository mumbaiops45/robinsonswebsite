
// // import React from 'react';

// // const Ticker = () => {
// //   const items = [
// //     'Air Imports & Exports',
// //     'Ocean Imports & Exports',
// //     'Customs Clearance',
// //     'Consolidation Services',
// //     '3PL & Warehousing',
// //     'Project Logistics',
// //     'Cold Chain',
// //     'AEO-LO Certified',
// //     'GDP Certified',
// //     'ISO 14001 · ISO 9001',
// //     'IATA Accredited',
// //     '120+ Global Partners',
// //   ];

// //   return (
// //     <div className="ticker-wrap">
// //       <div className="ticker">
// //         <div className="ticker-inner">
// //           {[...items, ...items].map((item, idx) => (
// //             <span key={idx} className="t-it">
// //               {item} <span className="t-sep">›</span>
// //             </span>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Ticker;

// import React from 'react';

// const Ticker = () => {
//   const items = [
//     'Air Imports & Exports',
//     'Ocean Imports & Exports',
//     'Customs Clearance',
//     'Consolidation Services',
//     '3PL & Warehousing',
//     'Project Logistics',
//     'Cold Chain',
//     'AEO-LO Certified',
//     'GDP Certified',
//     'ISO 14001 · ISO 9001',
//     'IATA Accredited',
//     '120+ Global Partners',
//   ];

//   return (
//     <>
//       <style>{`
//         .ticker-wrap {
//           background: var(--n, #093e5d);
//           overflow: hidden;
//           border-top: 2px solid var(--g3, #8cb27f);
//           width: 100%;
//         }
//         .ticker {
//           padding: 10px 0;
//           overflow: hidden;
//         }
//         .ticker-inner {
//           display: flex;
//           white-space: nowrap;
//           animation: tickRun 40s linear infinite;
//         }
//         .t-it {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           padding: 0 18px;
//           font-size: 0.69rem;
//           font-weight: 700;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           color: rgba(255, 255, 255, 0.6);
//         }
//         .t-sep {
//           color: var(--g3, #8cb27f);
//           font-size: 0.8rem;
//           opacity: 0.8;
//         }
//         @keyframes tickRun {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         /* Responsive adjustments */
//         @media (max-width: 768px) {
//           .ticker {
//             padding: 8px 0;
//           }
//           .t-it {
//             padding: 0 12px;
//             font-size: 0.6rem;
//             gap: 8px;
//           }
//           .t-sep {
//             font-size: 0.7rem;
//           }
//           .ticker-inner {
//             animation-duration: 30s; /* slightly faster on mobile */
//           }
//         }

//         @media (max-width: 480px) {
//           .ticker {
//             padding: 6px 0;
//           }
//           .t-it {
//             padding: 0 10px;
//             font-size: 0.55rem;
//             gap: 6px;
//           }
//           .t-sep {
//             font-size: 0.6rem;
//           }
//           .ticker-inner {
//             animation-duration: 25s;
//           }
//         }
//       `}</style>

//       <div className="ticker-wrap">
//         <div className="ticker">
//           <div className="ticker-inner">
//             {[...items, ...items].map((item, idx) => (
//               <span key={idx} className="t-it">
//                 {item} <span className="t-sep">›</span>
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Ticker;


import React from 'react';

const Ticker = () => {
  const items = [
    'Air Imports & Exports',
    'Ocean Imports & Exports',
    'Customs Clearance',
    'Consolidation Services',
    '3PL & Warehousing',
    'Project Logistics',
    'Cold Chain',
    'AEO-LO Certified',
    'GDP Certified',
    'ISO 14001 · ISO 9001',
    'IATA Accredited',
    '120+ Global Partners',
  ];

  return (
    <>
      <style>{`
        .ticker-wrap {
          background: var(--n, #093e5d);
          overflow: hidden;
          border-top: 2px solid var(--g3, #8cb27f);
          width: 100%;
        }
        .ticker {
          padding: 10px 0;
          overflow: hidden;
        }
        .ticker-inner {
          display: flex;
          white-space: nowrap;
          animation: tickRun 40s linear infinite;
          will-change: transform;
        }
        .t-it {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 0 18px;
          font-size: 0.69rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          flex-shrink: 0;
        }
        .t-sep {
          color: var(--g3, #8cb27f);
          font-size: 0.8rem;
          opacity: 0.8;
        }
        @keyframes tickRun {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .ticker { padding: 8px 0; }
          .t-it {
            padding: 0 12px;
            font-size: 0.6rem;
            gap: 8px;
            letter-spacing: 0.1em;
          }
          .t-sep { font-size: 0.65rem; }
          .ticker-inner { animation-duration: 30s; }
        }

        @media (max-width: 480px) {
          .ticker { padding: 6px 0; }
          .t-it {
            padding: 0 10px;
            font-size: 0.55rem;
            gap: 6px;
            letter-spacing: 0.08em;
          }
          .t-sep { font-size: 0.6rem; }
          .ticker-inner { animation-duration: 25s; }
        }
      `}</style>

      <div className="ticker-wrap">
        <div className="ticker">
          <div className="ticker-inner">
            {[...items, ...items].map((item, idx) => (
              <span key={idx} className="t-it">
                {item} <span className="t-sep">›</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticker;