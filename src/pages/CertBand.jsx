// // import React from 'react';
// // import './CertBand.css';

// // const CertBand = () => {
// //   const certifications = [
// //     { icon: '🏆', name: 'AEO-LO<br>Indian Customs' },
// //     { icon: '✅', name: 'GDP<br>Certified' },
// //     { icon: '✈️', name: 'IATA<br>Accredited' },
// //     { icon: '🌐', name: 'FIATA<br>Member' },
// //     { icon: '📊', name: 'ISO 9001<br>QMS' },
// //     { icon: '🌱', name: 'ISO 14001<br>EMS 2024' },
// //     { icon: '⚓', name: 'Federal Maritime<br>Commission' },
// //     { icon: '🚛', name: 'MTO<br>License' },
// //     { icon: '📜', name: 'CHA<br>License' },
// //   ];

// //   return (
// //     <div className="cert-band sr">
// //       {certifications.map((cert, index) => (
// //         <div key={index} className="cb">
// //           <span className="cb-ico">{cert.icon}</span>
// //           <div className="cb-name" dangerouslySetInnerHTML={{ __html: cert.name }}></div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default CertBand;
// // .cert-band {
// //   background: var(--n);
// //   display: grid;
// //   grid-template-columns: repeat(9, 1fr);
// //   border-top: 2px solid var(--g3);
// // }

// // .cb {
// //   padding: 18px 10px;
// //   text-align: center;
// //   border-right: 1px solid rgba(255, 255, 255, 0.06);
// //   transition: background 0.25s;
// //   cursor: default;
// // }

// // .cb:last-child {
// //   border-right: none;
// // }

// // .cb:hover {
// //   background: rgba(122, 184, 50, 0.07);
// // }

// // .cb-ico {
// //   font-size: 1.3rem;
// //   display: block;
// //   margin-bottom: 5px;
// // }
// // // 
// // .cb-name {
// //   font-size: 0.58rem;
// //   font-weight: 600;
// //   letter-spacing: 0.03em;
// //   text-transform: uppercase;
// //   color: rgba(255, 255, 255, 0.4);
// //   line-height: 1.45;
// //   transition: color 0.25s;
// // }

// // .cb:hover .cb-name {
// //   color: var(--g3);
// // }
// import React from 'react';

// const CertBand = () => {
//   const certifications = [
//     { icon: '🏆', name: 'AEO-LO<br>Indian Customs' },
//     { icon: '✅', name: 'GDP<br>Certified' },
//     { icon: '✈️', name: 'IATA<br>Accredited' },
//     { icon: '🌐', name: 'FIATA<br>Member' },
//     { icon: '📊', name: 'ISO 9001<br>QMS' },
//     { icon: '🌱', name: 'ISO 14001<br>EMS 2024' },
//     { icon: '⚓', name: 'Federal Maritime<br>Commission' },
//     { icon: '🚛', name: 'MTO<br>License' },
//     { icon: '📜', name: 'CHA<br>License' },
//   ];

//   return (
//     <div className="cert-band sr">
//       {certifications.map((cert, index) => (
//         <div key={index} className="cb">
//           <span className="cb-ico">{cert.icon}</span>
//           <div className="cb-name" dangerouslySetInnerHTML={{ __html: cert.name }}></div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CertBand;

// // Inject styles into document head
// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement("style");
//   styleSheet.textContent = `
//     .cert-band {
//       background: var(--n);
//       display: grid;
//       grid-template-columns: repeat(9, 1fr);
//       border-top: 2px solid var(--g3);
//     }

//     .cb {
//       padding: 18px 10px;
//       text-align: center;
//       border-right: 1px solid rgba(255, 255, 255, 0.06);
//       transition: background 0.25s;
//       cursor: default;
//     }

//     .cb:last-child {
//       border-right: none;
//     }

//     .cb:hover {
//       background: rgba(122, 184, 50, 0.07);
//     }

//     .cb-ico {
//       font-size: 1.3rem;
//       display: block;
//       margin-bottom: 5px;
//     }

//     .cb-name {
//       font-size: 0.58rem;
//       font-weight: 600;
//       letter-spacing: 0.03em;
//       text-transform: uppercase;
//       color: rgba(255, 255, 255, 0.4);
//       line-height: 1.45;
//       transition: color 0.25s;
//     }

//     .cb:hover .cb-name {
//       color: var(--g3);
//     }

//     @media (max-width: 1100px) {
//       .cert-band {
//         grid-template-columns: repeat(3, 1fr);
//       }
//     }
//   `;
//   document.head.appendChild(styleSheet);
// }

// src/components/Home/CertBand.jsx
import React from 'react';

const CertBand = () => {
  const certs = [
    { icon: '🏆', name: 'AEO-LO\nIndian Customs' },
    { icon: '✅', name: 'GDP\nCertified' },
    { icon: '✈️', name: 'IATA\nAccredited' },
    { icon: '🌐', name: 'FIATA\nMember' },
    { icon: '📊', name: 'ISO 9001\nQMS' },
    { icon: '🌱', name: 'ISO 14001\nEMS 2024' },
    { icon: '⚓', name: 'Federal Maritime\nCommission' },
    { icon: '🚛', name: 'MTO\nLicense' },
    { icon: '📜', name: 'CHA\nLicense' },
  ];

  return (
    <div className="cert-band sr">
      {certs.map((cert, idx) => (
        <div key={idx} className="cb">
          <span className="cb-ico">{cert.icon}</span>
          <div className="cb-name">{cert.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CertBand;