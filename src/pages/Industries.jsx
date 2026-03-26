// // import React from 'react';
// // import './Industries.css';

// // const Industries = () => {
// //   const industries = [
// //     { icon: '🚗', name: 'Automotive' },
// //     { icon: '✈️', name: 'Aviation & Defense' },
// //     { icon: '⚙️', name: 'Engineering' },
// //     { icon: '💻', name: 'Hi-Tech' },
// //     { icon: '💎', name: 'Luxury Goods' },
// //     { icon: '💊', name: 'Pharma & Healthcare' },
// //     { icon: '🏗️', name: 'Project Logistics' },
// //     { icon: '🌿', name: 'Renewable Energy' },
// //     { icon: '🛒', name: 'Retail / E-Commerce' },
// //     { icon: '🛸', name: 'Space & Avionics' },
// //     { icon: '🌡️', name: 'Cold Chain' },
// //     { icon: '🏭', name: 'Industrial & MSME' },
// //   ];

// //   return (
// //     <section id="industries" className="sec industries-section">
// //       <div className="sr">
// //         <div className="chip">Sector Expertise</div>
// //         <h2 className="sec-title">
// //           Industries <span className="hl">We Serve</span>
// //         </h2>
// //         <p className="sec-sub">
// //           Specialised teams with deep sector knowledge delivering customised logistics for the most demanding cargo
// //           categories.
// //         </p>
// //       </div>
// //       <div className="ind-grid sr d2">
// //         {industries.map((industry, index) => (
// //           <div key={index} className="ip">
// //             <span className="ip-ico">{industry.icon}</span>
// //             <span className="ip-name">{industry.name}</span>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Industries;

// // .industries-section {
// //   background: var(--w2);
// //   padding-top: 60px;
// //   padding-bottom: 60px;
// // }

// // .ind-grid {
// //   display: grid;
// //   grid-template-columns: repeat(4, 1fr);
// //   gap: 0;
// //   background: var(--bd);
// //   border: 1px solid var(--bd);
// //   margin-top: 36px;
// // }

// // .ip {
// //   background: var(--w);
// //   padding: 20px 18px;
// //   display: flex;
// //   align-items: center;
// //   gap: 11px;
// //   border-right: 1px solid var(--bd);
// //   border-bottom: 1px solid var(--bd);
// //   transition: all 0.28s;
// //   cursor: default;
// //   position: relative;
// //   overflow: hidden;
// // }

// // .ip::before {
// //   content: '';
// //   position: absolute;
// //   left: 0;
// //   top: 0;
// //   bottom: 0;
// //   width: 3px;
// //   background: var(--g3);
// //   transform: scaleY(0);
// //   transform-origin: bottom;
// //   transition: transform 0.3s;
// // }

// // .ip:hover::before {
// //   transform: scaleY(1);
// // }

// // .ip:hover {
// //   background: var(--w2);
// //   padding-left: 24px;
// // }

// // .ip-ico {
// //   font-size: 1.35rem;
// //   transition: transform 0.25s;
// // }

// // .ip:hover .ip-ico {
// //   transform: scale(1.12);
// // }

// // .ip-name {
// //   font-size: 0.82rem;
// //   font-weight: 600;
// //   color: var(--n);
// // }


// import React from 'react';

// const Industries = () => {
//   const industries = [
//     { icon: '🚗', name: 'Automotive' },
//     { icon: '✈️', name: 'Aviation & Defense' },
//     { icon: '⚙️', name: 'Engineering' },
//     { icon: '💻', name: 'Hi-Tech' },
//     { icon: '💎', name: 'Luxury Goods' },
//     { icon: '💊', name: 'Pharma & Healthcare' },
//     { icon: '🏗️', name: 'Project Logistics' },
//     { icon: '🌿', name: 'Renewable Energy' },
//     { icon: '🛒', name: 'Retail / E-Commerce' },
//     { icon: '🛸', name: 'Space & Avionics' },
//     { icon: '🌡️', name: 'Cold Chain' },
//     { icon: '🏭', name: 'Industrial & MSME' },
//   ];

//   return (
//     <section id="industries" className="sec industries-section">
//       <div className="sr">
//         <div className="chip">Sector Expertise</div>
//         <h2 className="sec-title">
//           Industries <span className="hl">We Serve</span>
//         </h2>
//         <p className="sec-sub">
//           Specialised teams with deep sector knowledge delivering customised logistics for the most demanding cargo
//           categories.
//         </p>
//       </div>
//       <div className="ind-grid sr d2">
//         {industries.map((industry, index) => (
//           <div key={index} className="ip">
//             <span className="ip-ico">{industry.icon}</span>
//             <span className="ip-name">{industry.name}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Industries;

// // Inject styles into document head
// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement("style");
//   styleSheet.textContent = `
//     .industries-section {
//       background: var(--w2);
//       padding-top: 60px;
//       padding-bottom: 60px;
//     }

//     .ind-grid {
//       display: grid;
//       grid-template-columns: repeat(4, 1fr);
//       gap: 0;
//       background: var(--bd);
//       border: 1px solid var(--bd);
//       margin-top: 36px;
//     }

//     .ip {
//       background: var(--w);
//       padding: 20px 18px;
//       display: flex;
//       align-items: center;
//       gap: 11px;
//       border-right: 1px solid var(--bd);
//       border-bottom: 1px solid var(--bd);
//       transition: all 0.28s;
//       cursor: default;
//       position: relative;
//       overflow: hidden;
//     }

//     .ip::before {
//       content: '';
//       position: absolute;
//       left: 0;
//       top: 0;
//       bottom: 0;
//       width: 3px;
//       background: var(--g3);
//       transform: scaleY(0);
//       transform-origin: bottom;
//       transition: transform 0.3s;
//     }

//     .ip:hover::before {
//       transform: scaleY(1);
//     }

//     .ip:hover {
//       background: var(--w2);
//       padding-left: 24px;
//     }

//     .ip-ico {
//       font-size: 1.35rem;
//       transition: transform 0.25s;
//     }

//     .ip:hover .ip-ico {
//       transform: scale(1.12);
//     }

//     .ip-name {
//       font-size: 0.82rem;
//       font-weight: 600;
//       color: var(--n);
//     }

//     @media (max-width: 1100px) {
//       .ind-grid {
//         grid-template-columns: repeat(2, 1fr);
//       }
//     }
//   `;
//   document.head.appendChild(styleSheet);
// }

// src/components/Home/Industries.jsx
import React from 'react';

const Industries = () => {
  const industries = [
    { icon: '🚗', name: 'Automotive' },
    { icon: '✈️', name: 'Aviation & Defense' },
    { icon: '⚙️', name: 'Engineering' },
    { icon: '💻', name: 'Hi-Tech' },
    { icon: '💎', name: 'Luxury Goods' },
    { icon: '💊', name: 'Pharma & Healthcare' },
    { icon: '🏗️', name: 'Project Logistics' },
    { icon: '🌿', name: 'Renewable Energy' },
    { icon: '🛒', name: 'Retail / E-Commerce' },
    { icon: '🛸', name: 'Space & Avionics' },
    { icon: '🌡️', name: 'Cold Chain' },
    { icon: '🏭', name: 'Industrial & MSME' },
  ];

  return (
    <section id="industries" className="sec" style={{ background: 'var(--w2)', paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="section-header">
        <div className="chip">Sector Expertise</div>
        <h2 className="sec-title">
          Industries <span className="hl">We Serve</span>
        </h2>
        <p className="sec-sub">Specialised teams with deep sector knowledge delivering customised logistics for the most demanding cargo categories.</p>
      </div>
      <div className="ind-grid sr d2">
        {industries.map((ind, idx) => (
          <div key={idx} className="ip">
            <span className="ip-ico">{ind.icon}</span>
            <span className="ip-name">{ind.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;