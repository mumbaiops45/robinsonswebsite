// // import React from 'react';
// // import './Cta.css';

// // const Cta = () => {
// //   return (
// //     <section id="contact" className="cta">
// //       <div className="cta-shape"></div>
// //       <div className="chip sr" style={{ justifyContent: 'center' }}>
// //         Ready to Ship
// //       </div>
// //       <div className="cta-title sr d1">
// //         Move Your Cargo
// //         <br />
// //         <em>With Confidence.</em>
// //       </div>
// //       <p className="cta-sub sr d2">
// //         Speak with our logistics specialists today. Whether air, ocean, or project cargo — we have the expertise and
// //         network to deliver anywhere in the world.
// //       </p>
// //       <div className="cta-btns sr d3">
// //         <a href="mailto:info@robinsonsglobal.com" className="btn-primary">
// //           <span>Email Us Now</span>
// //         </a>
// //         <a href="tel:+912262887777" className="btn-sec">
// //           +91 (22) 6288 7777
// //         </a>
// //       </div>
// //       <div className="cta-info sr d4">
// //         info@robinsonsglobal.com &nbsp;·&nbsp; www.robinsonsglobal.com &nbsp;·&nbsp; Ballard Estate, Mumbai – 400001
// //       </div>
// //     </section>
// //   );
// // };

// // export default Cta;
// // .cta {
// //   background: var(--w2);
// //   padding: 88px 48px;
// //   text-align: center;
// //   position: relative;
// //   overflow: hidden;
// //   border-top: 1px solid var(--bd);
// // }

// // .cta-shape {
// //   position: absolute;
// //   top: 50%;
// //   left: 50%;
// //   transform: translate(-50%, -50%);
// //   width: 600px;
// //   height: 600px;
// //   border-radius: 50%;
// //   background: radial-gradient(circle, rgba(122, 184, 50, 0.07), transparent 70%);
// // }

// // .cta > * {
// //   position: relative;
// //   z-index: 1;
// // }

// // .cta-title {
// //   font-size: clamp(2rem, 4vw, 3.8rem);
// //   font-weight: 900;
// //   letter-spacing: -0.035em;
// //   line-height: 1.06;
// //   color: var(--n);
// //   margin-bottom: 12px;
// // }

// // .cta-title em {
// //   font-style: normal;
// //   color: var(--g);
// // }

// // .cta-sub {
// //   font-size: 0.97rem;
// //   color: var(--ts);
// //   max-width: 480px;
// //   margin: 0 auto 30px;
// //   line-height: 1.75;
// // }

// // .cta-btns {
// //   display: flex;
// //   gap: 12px;
// //   justify-content: center;
// //   flex-wrap: wrap;
// // }

// // .cta-info {
// //   font-size: 0.74rem;
// //   color: var(--tm);
// //   margin-top: 20px;
// //   letter-spacing: 0.04em;
// // }

// import React from 'react';

// const Cta = () => {
//   return (
//     <section id="contact" className="cta">
//       <div className="cta-shape"></div>
//       <div className="chip sr" style={{ justifyContent: 'center' }}>
//         Ready to Ship
//       </div>
//       <div className="cta-title sr d1">
//         Move Your Cargo
//         <br />
//         <em>With Confidence.</em>
//       </div>
//       <p className="cta-sub sr d2">
//         Speak with our logistics specialists today. Whether air, ocean, or project cargo — we have the expertise and
//         network to deliver anywhere in the world.
//       </p>
//       <div className="cta-btns sr d3">
//         <a href="mailto:info@robinsonsglobal.com" className="btn-primary">
//           <span>Email Us Now</span>
//         </a>
//         <a href="tel:+912262887777" className="btn-sec">
//           +91 (22) 6288 7777
//         </a>
//       </div>
//       <div className="cta-info sr d4">
//         info@robinsonsglobal.com &nbsp;·&nbsp; www.robinsonsglobal.com &nbsp;·&nbsp; Ballard Estate, Mumbai – 400001
//       </div>
//     </section>
//   );
// };

// export default Cta;

// // Inject styles into document head
// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement("style");
//   styleSheet.textContent = `
//     .cta {
//       background: var(--w2);
//       padding: 88px 48px;
//       text-align: center;
//       position: relative;
//       overflow: hidden;
//       border-top: 1px solid var(--bd);
//     }

//     .cta-shape {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       width: 600px;
//       height: 600px;
//       border-radius: 50%;
//       background: radial-gradient(circle, rgba(122, 184, 50, 0.07), transparent 70%);
//     }

//     .cta > * {
//       position: relative;
//       z-index: 1;
//     }

//     .cta-title {
//       font-size: clamp(2rem, 4vw, 3.8rem);
//       font-weight: 900;
//       letter-spacing: -0.035em;
//       line-height: 1.06;
//       color: var(--n);
//       margin-bottom: 12px;
//     }

//     .cta-title em {
//       font-style: normal;
//       color: var(--g);
//     }

//     .cta-sub {
//       font-size: 0.97rem;
//       color: var(--ts);
//       max-width: 480px;
//       margin: 0 auto 30px;
//       line-height: 1.75;
//     }

//     .cta-btns {
//       display: flex;
//       gap: 12px;
//       justify-content: center;
//       flex-wrap: wrap;
//     }

//     .cta-info {
//       font-size: 0.74rem;
//       color: var(--tm);
//       margin-top: 20px;
//       letter-spacing: 0.04em;
//     }

//     @media (max-width: 1100px) {
//       .cta {
//         padding-left: 20px;
//         padding-right: 20px;
//       }
//     }
//   `;
//   document.head.appendChild(styleSheet);
// }


// src/components/Home/CTA.jsx


import React from 'react';

const CTA = () => {
  return (
    <section id="contact" className="cta">
      <div className="cta-shape"></div>
      <div className="chip sr" style={{ justifyContent: 'center' }}>
        Ready to Ship
      </div>
      <div className="cta-title sr d1">
        Move Your Cargo
        <br />
        <em>With Confidence.</em>
      </div>
      <p className="cta-sub sr d2">
        Speak with our logistics specialists today. Whether air, ocean, or project cargo — we have the expertise and network to deliver anywhere in the world.
      </p>
      <div className="cta-btns sr d3">
        <a href="mailto:info@robinsonsglobal.com" className="btn-primary">
          <span>Email Us Now</span>
        </a>
        <a href="tel:+912262887777" className="btn-sec">
          +91 (22) 6288 7777
        </a>
      </div>
      <div className="cta-info sr d4">
        info@robinsonsglobal.com &nbsp;·&nbsp; www.robinsonsglobal.com &nbsp;·&nbsp; Ballard Estate, Mumbai – 400001
      </div>
    </section>
  );
};

export default CTA;