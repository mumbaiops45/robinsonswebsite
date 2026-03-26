// // // import React from 'react';
// // // import './ClientScroll.css';

// // // const ClientScroll = () => {
// // //   const clients = [
// // //     'ROLEX',
// // //     'BVLGARI',
// // //     'MARUTI SUZUKI',
// // //     'CIPLA',
// // //     'FOXCONN',
// // //     'CARTIER',
// // //     'TATA ELECTRONICS',
// // //     'AUROBINDO',
// // //     'BREITLING',
// // //     'BIOCON',
// // //     'HILTI',
// // //     'UNICEF',
// // //     'TIMKEN',
// // //     'NAVAL GROUP',
// // //     'WHO',
// // //     'RIMOWA',
// // //   ];

// // //   return (
// // //     <div className="client-scroll">
// // //       <div className="cs-track">
// // //         {[...clients, ...clients].map((client, index) => (
// // //           <span key={index} className="cs-item">
// // //             {client}
// // //           </span>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ClientScroll;

// // // .client-scroll {
// // //   background: var(--w);
// // //   border-bottom: 1px solid var(--bd);
// // //   overflow: hidden;
// // //   padding: 16px 0;
// // // }

// // // .cs-track {
// // //   display: flex;
// // //   white-space: nowrap;
// // //   animation: tickRun 28s linear infinite;
// // // }

// // // .cs-item {
// // //   display: inline-flex;
// // //   align-items: center;
// // //   padding: 0 30px;
// // //   font-size: 0.75rem;
// // //   font-weight: 800;
// // //   color: var(--tm);
// // //   letter-spacing: 0.06em;
// // //   text-transform: uppercase;
// // //   border-right: 1px solid var(--bd);
// // // }

// // // .cs-item:hover {
// // //   color: var(--n);
// // // }

// // // @keyframes tickRun {
// // //   0% {
// // //     transform: translateX(0);
// // //   }
// // //   100% {
// // //     transform: translateX(-50%);
// // //   }
// // // }



// // import React from 'react';

// // const ClientScroll = () => {
// //   const clients = [
// //     'ROLEX',
// //     'BVLGARI',
// //     'MARUTI SUZUKI',
// //     'CIPLA',
// //     'FOXCONN',
// //     'CARTIER',
// //     'TATA ELECTRONICS',
// //     'AUROBINDO',
// //     'BREITLING',
// //     'BIOCON',
// //     'HILTI',
// //     'UNICEF',
// //     'TIMKEN',
// //     'NAVAL GROUP',
// //     'WHO',
// //     'RIMOWA',
// //   ];

// //   return (
// //     <div className="client-scroll">
// //       <div className="cs-track">
// //         {[...clients, ...clients].map((client, index) => (
// //           <span key={index} className="cs-item">
// //             {client}
// //           </span>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ClientScroll;

// // // Inject styles into document head
// // if (typeof document !== 'undefined') {
// //   const styleSheet = document.createElement("style");
// //   styleSheet.textContent = `
// //     .client-scroll {
// //       background: var(--w);
// //       border-bottom: 1px solid var(--bd);
// //       overflow: hidden;
// //       padding: 16px 0;
// //     }

// //     .cs-track {
// //       display: flex;
// //       white-space: nowrap;
// //       animation: tickRun 28s linear infinite;
// //     }

// //     .cs-item {
// //       display: inline-flex;
// //       align-items: center;
// //       padding: 0 30px;
// //       font-size: 0.75rem;
// //       font-weight: 800;
// //       color: var(--tm);
// //       letter-spacing: 0.06em;
// //       text-transform: uppercase;
// //       border-right: 1px solid var(--bd);
// //     }

// //     .cs-item:hover {
// //       color: var(--n);
// //     }

// //     @keyframes tickRun {
// //       0% {
// //         transform: translateX(0);
// //       }
// //       100% {
// //         transform: translateX(-50%);
// //       }
// //     }
// //   `;
// //   document.head.appendChild(styleSheet);
// // }

// // src/components/Home/ClientScroll.jsx


// import React from 'react';

// const ClientScroll = () => {
//   const clients = [
//     'ROLEX',
//     'BVLGARI',
//     'MARUTI SUZUKI',
//     'CIPLA',
//     'FOXCONN',
//     'CARTIER',
//     'TATA ELECTRONICS',
//     'AUROBINDO',
//     'BREITLING',
//     'BIOCON',
//     'HILTI',
//     'UNICEF',
//     'TIMKEN',
//     'NAVAL GROUP',
//     'WHO',
//     'RIMOWA',
//   ];

//   return (
//     <div className="client-scroll">
//       <div className="cs-track">
//         {[...clients, ...clients].map((client, idx) => (
//           <span key={idx} className="cs-item">
//             {client}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClientScroll;

import React from 'react';

const ClientScroll = () => {
  const clients = [
    'ROLEX',
    'BVLGARI',
    'MARUTI SUZUKI',
    'CIPLA',
    'FOXCONN',
    'CARTIER',
    'TATA ELECTRONICS',
    'AUROBINDO',
    'BREITLING',
    'BIOCON',
    'HILTI',
    'UNICEF',
    'TIMKEN',
    'NAVAL GROUP',
    'WHO',
    'RIMOWA',
  ];

  return (
    <>
      <style>{`
        .client-scroll {
          background: var(--w, #ffffff);
          border-bottom: 1px solid var(--bd, #d8e4ed);
          overflow: hidden;
          padding: 16px 0;
          width: 100%;
        }
        .cs-track {
          display: flex;
          white-space: nowrap;
          animation: tickRun 28s linear infinite;
          will-change: transform;
        }
        .cs-item {
          display: inline-flex;
          align-items: center;
          padding: 0 30px;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--tm, #7a9aaa);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-right: 1px solid var(--bd, #d8e4ed);
          flex-shrink: 0;
          transition: color 0.2s;
          cursor: default;
        }
        .cs-item:hover {
          color: var(--n, #093e5d);
        }

        @media (max-width: 768px) {
          .client-scroll { padding: 12px 0; }
          .cs-item {
            padding: 0 20px;
            font-size: 0.65rem;
            letter-spacing: 0.04em;
          }
          .cs-track { animation-duration: 22s; }
        }

        @media (max-width: 480px) {
          .client-scroll { padding: 10px 0; }
          .cs-item {
            padding: 0 14px;
            font-size: 0.58rem;
            letter-spacing: 0.03em;
          }
          .cs-track { animation-duration: 18s; }
        }
      `}</style>

      <div className="client-scroll">
        <div className="cs-track">
          {[...clients, ...clients].map((client, idx) => (
            <span key={idx} className="cs-item">
              {client}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientScroll;