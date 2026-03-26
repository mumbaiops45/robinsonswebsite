//   // // // import React from 'react';
//   // // // import './Services.css';

//   // // // const Services = () => {
//   // // //   const services = [
//   // // //     {
//   // // //       num: '01',
//   // // //       icon: '✈️',
//   // // //       name: 'Air Imports & Exports',
//   // // //       desc: 'Express, back-to-back and consolidation. Temperature-controlled shipments. In-house customs at all airports. IATA & GDP certified.',
//   // // //     },
//   // // //     {
//   // // //       num: '02',
//   // // //       icon: '🚢',
//   // // //       name: 'Ocean Imports & Exports',
//   // // //       desc: 'LCL & FCL solutions from ICDs & ports. Reefer container handling, factory loading/unloading, temperature-controlled storage.',
//   // // //     },
//   // // //     {
//   // // //       num: '03',
//   // // //       icon: '📦',
//   // // //       name: 'Consolidation Services',
//   // // //       desc: 'LCL & air consolidation, multi-vendor and multi-origin shipments, factory & warehouse consolidation, secure packaging.',
//   // // //     },
//   // // //     {
//   // // //       num: '04',
//   // // //       icon: '📋',
//   // // //       name: 'Customs Clearance',
//   // // //       desc: "One of India's oldest CHA licensees. AEO-LO certified. In-house clearance experts at all major ports — swift and compliant.",
//   // // //     },
//   // // //   ];

//   // // //   return (
//   // // //     <section id="services" className="sec">
//   // // //       <div className="sr">
//   // // //         <div className="chip">Core Services</div>
//   // // //         <h2 className="sec-title">
//   // // //           Freight Solutions <span className="hl">Built for Complexity</span>
//   // // //         </h2>
//   // // //         <p className="sec-sub">
//   // // //           Comprehensive, certified logistics services tailored to your cargo — from express air shipments to large-scale
//   // // //           ocean freight.
//   // // //         </p>
//   // // //       </div>
//   // // //       <div className="svc-grid sr d2">
//   // // //         {services.map((service, index) => (
//   // // //           <div key={index} className="sc">
//   // // //             <div className="sc-num">{service.num}</div>
//   // // //             <span className="sc-ico">{service.icon}</span>
//   // // //             <div className="sc-name">{service.name}</div>
//   // // //             <div className="sc-desc">{service.desc}</div>
//   // // //             <div className="sc-more">Learn more →</div>
//   // // //             <div className="sc-bar"></div>
//   // // //           </div>
//   // // //         ))}
//   // // //       </div>
//   // // //     </section>
//   // // //   );
//   // // // };

//   // // // export default Services;
//   // // // .svc-grid {
//   // // //   display: grid;
//   // // //   grid-template-columns: repeat(4, 1fr);
//   // // //   gap: 0;
//   // // //   background: var(--bd);
//   // // //   border: 1px solid var(--bd);
//   // // //   margin-top: 36px;
//   // // // }

//   // // // .sc {
//   // // //   background: var(--w);
//   // // //   padding: 28px 24px;
//   // // //   border-right: 1px solid var(--bd);
//   // // //   transition: all 0.32s;
//   // // //   cursor: default;
//   // // //   position: relative;
//   // // //   overflow: hidden;
//   // // // }

//   // // // .sc:last-child {
//   // // //   border-right: none;
//   // // // }

//   // // // .sc::before {
//   // // //   content: '';
//   // // //   position: absolute;
//   // // //   inset: 0;
//   // // //   background: var(--n);
//   // // //   transform: translateY(100%);
//   // // //   transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//   // // // }

//   // // // .sc:hover::before {
//   // // //   transform: translateY(0);
//   // // // }

//   // // // .sc:hover {
//   // // //   transform: translateY(-4px);
//   // // //   box-shadow: 0 16px 48px rgba(11, 29, 58, 0.18);
//   // // //   z-index: 2;
//   // // // }

//   // // // .sc-num {
//   // // //   font-size: 0.62rem;
//   // // //   font-weight: 700;
//   // // //   letter-spacing: 0.22em;
//   // // //   color: var(--tm);
//   // // //   margin-bottom: 16px;
//   // // //   position: relative;
//   // // //   z-index: 1;
//   // // //   transition: color 0.3s;
//   // // // }

//   // // // .sc:hover .sc-num {
//   // // //   color: rgba(255, 255, 255, 0.3);
//   // // // }

//   // // // .sc-ico {
//   // // //   font-size: 2rem;
//   // // //   display: block;
//   // // //   margin-bottom: 12px;
//   // // //   position: relative;
//   // // //   z-index: 1;
//   // // //   transition: transform 0.3s;
//   // // // }

//   // // // .sc:hover .sc-ico {
//   // // //   transform: scale(1.05);
//   // // // }

//   // // // .sc-name {
//   // // //   font-size: 0.97rem;
//   // // //   font-weight: 700;
//   // // //   color: var(--n);
//   // // //   margin-bottom: 7px;
//   // // //   position: relative;
//   // // //   z-index: 1;
//   // // //   transition: color 0.3s;
//   // // // }

//   // // // .sc:hover .sc-name {
//   // // //   color: #fff;
//   // // // }

//   // // // .sc-desc {
//   // // //   font-size: 0.79rem;
//   // // //   color: var(--ts);
//   // // //   line-height: 1.65;
//   // // //   position: relative;
//   // // //   z-index: 1;
//   // // //   transition: color 0.3s;
//   // // // }

//   // // // .sc:hover .sc-desc {
//   // // //   color: rgba(255, 255, 255, 0.55);
//   // // // }

//   // // // .sc-more {
//   // // //   display: inline-flex;
//   // // //   align-items: center;
//   // // //   gap: 5px;
//   // // //   margin-top: 12px;
//   // // //   font-size: 0.75rem;
//   // // //   font-weight: 700;
//   // // //   color: var(--g);
//   // // //   position: relative;
//   // // //   z-index: 1;
//   // // //   transition: all 0.3s;
//   // // // }

//   // // // .sc:hover .sc-more {
//   // // //   color: var(--g3);
//   // // //   gap: 9px;
//   // // // }

//   // // // .sc-bar {
//   // // //   position: absolute;
//   // // //   bottom: 0;
//   // // //   left: 0;
//   // // //   right: 0;
//   // // //   height: 2px;
//   // // //   background: linear-gradient(90deg, var(--g), var(--g3));
//   // // //   transform: scaleX(0);
//   // // //   transform-origin: left;
//   // // //   transition: transform 0.4s;
//   // // //   z-index: 2;
//   // // // }

//   // // // .sc:hover .sc-bar {
//   // // //   transform: scaleX(1);
//   // // // }


//   // // import React from 'react';

//   // // const Services = () => {
//   // //   const services = [
//   // //     {
//   // //       num: '01',
//   // //       icon: '✈️',
//   // //       name: 'Air Imports & Exports',
//   // //       desc: 'Express, back-to-back and consolidation. Temperature-controlled shipments. In-house customs at all airports. IATA & GDP certified.',
//   // //     },
//   // //     {
//   // //       num: '02',
//   // //       icon: '🚢',
//   // //       name: 'Ocean Imports & Exports',
//   // //       desc: 'LCL & FCL solutions from ICDs & ports. Reefer container handling, factory loading/unloading, temperature-controlled storage.',
//   // //     },
//   // //     {
//   // //       num: '03',
//   // //       icon: '📦',
//   // //       name: 'Consolidation Services',
//   // //       desc: 'LCL & air consolidation, multi-vendor and multi-origin shipments, factory & warehouse consolidation, secure packaging.',
//   // //     },
//   // //     {
//   // //       num: '04',
//   // //       icon: '📋',
//   // //       name: 'Customs Clearance',
//   // //       desc: "One of India's oldest CHA licensees. AEO-LO certified. In-house clearance experts at all major ports — swift and compliant.",
//   // //     },
//   // //   ];

//   // //   return (
//   // //     <section id="services" className="sec">
//   // //       <div className="sr">
//   // //         <div className="chip">Core Services</div>
//   // //         <h2 className="sec-title">
//   // //           Freight Solutions <span className="hl">Built for Complexity</span>
//   // //         </h2>
//   // //         <p className="sec-sub">
//   // //           Comprehensive, certified logistics services tailored to your cargo — from express air shipments to large-scale
//   // //           ocean freight.
//   // //         </p>
//   // //       </div>
//   // //       <div className="svc-grid sr d2">
//   // //         {services.map((service, index) => (
//   // //           <div key={index} className="sc">
//   // //             <div className="sc-num">{service.num}</div>
//   // //             <span className="sc-ico">{service.icon}</span>
//   // //             <div className="sc-name">{service.name}</div>
//   // //             <div className="sc-desc">{service.desc}</div>
//   // //             <div className="sc-more">Learn more →</div>
//   // //             <div className="sc-bar"></div>
//   // //           </div>
//   // //         ))}
//   // //       </div>
//   // //     </section>
//   // //   );
//   // // };

//   // // export default Services;

//   // // // Inject styles into document head
//   // // if (typeof document !== 'undefined') {
//   // //   const styleSheet = document.createElement("style");
//   // //   styleSheet.textContent = `
//   // //     .svc-grid {
//   // //       display: grid;
//   // //       grid-template-columns: repeat(4, 1fr);
//   // //       gap: 0;
//   // //       background: var(--bd);
//   // //       border: 1px solid var(--bd);
//   // //       margin-top: 36px;
//   // //     }

//   // //     .sc {
//   // //       background: var(--w);
//   // //       padding: 28px 24px;
//   // //       border-right: 1px solid var(--bd);
//   // //       transition: all 0.32s;
//   // //       cursor: default;
//   // //       position: relative;
//   // //       overflow: hidden;
//   // //     }

//   // //     .sc:last-child {
//   // //       border-right: none;
//   // //     }

//   // //     .sc::before {
//   // //       content: '';
//   // //       position: absolute;
//   // //       inset: 0;
//   // //       background: var(--n);
//   // //       transform: translateY(100%);
//   // //       transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//   // //     }

//   // //     .sc:hover::before {
//   // //       transform: translateY(0);
//   // //     }

//   // //     .sc:hover {
//   // //       transform: translateY(-4px);
//   // //       box-shadow: 0 16px 48px rgba(11, 29, 58, 0.18);
//   // //       z-index: 2;
//   // //     }

//   // //     .sc-num {
//   // //       font-size: 0.62rem;
//   // //       font-weight: 700;
//   // //       letter-spacing: 0.22em;
//   // //       color: var(--tm);
//   // //       margin-bottom: 16px;
//   // //       position: relative;
//   // //       z-index: 1;
//   // //       transition: color 0.3s;
//   // //     }

//   // //     .sc:hover .sc-num {
//   // //       color: rgba(255, 255, 255, 0.3);
//   // //     }

//   // //     .sc-ico {
//   // //       font-size: 2rem;
//   // //       display: block;
//   // //       margin-bottom: 12px;
//   // //       position: relative;
//   // //       z-index: 1;
//   // //       transition: transform 0.3s;
//   // //     }

//   // //     .sc:hover .sc-ico {
//   // //       transform: scale(1.05);
//   // //     }

//   // //     .sc-name {
//   // //       font-size: 0.97rem;
//   // //       font-weight: 700;
//   // //       color: var(--n);
//   // //       margin-bottom: 7px;
//   // //       position: relative;
//   // //       z-index: 1;
//   // //       transition: color 0.3s;
//   // //     }

//   // //     .sc:hover .sc-name {
//   // //       color: #fff;
//   // //     }

//   // //     .sc-desc {
//   // //       font-size: 0.79rem;
//   // //       color: var(--ts);
//   // //       line-height: 1.65;
//   // //       position: relative;
//   // //       z-index: 1;
//   // //       transition: color 0.3s;
//   // //     }

//   // //     .sc:hover .sc-desc {
//   // //       color: rgba(255, 255, 255, 0.55);
//   // //     }

//   // //     .sc-more {
//   // //       display: inline-flex;
//   // //       align-items: center;
//   // //       gap: 5px;
//   // //       margin-top: 12px;
//   // //       font-size: 0.75rem;
//   // //       font-weight: 700;
//   // //       color: var(--g);
//   // //       position: relative;
//   // //       z-index: 1;
//   // //       transition: all 0.3s;
//   // //     }

//   // //     .sc:hover .sc-more {
//   // //       color: var(--g3);
//   // //       gap: 9px;
//   // //     }

//   // //     .sc-bar {
//   // //       position: absolute;
//   // //       bottom: 0;
//   // //       left: 0;
//   // //       right: 0;
//   // //       height: 2px;
//   // //       background: linear-gradient(90deg, var(--g), var(--g3));
//   // //       transform: scaleX(0);
//   // //       transform-origin: left;
//   // //       transition: transform 0.4s;
//   // //       z-index: 2;
//   // //     }

//   // //     .sc:hover .sc-bar {
//   // //       transform: scaleX(1);
//   // //     }

//   // //     @media (max-width: 1100px) {
//   // //       .svc-grid {
//   // //         grid-template-columns: repeat(2, 1fr);
//   // //       }
//   // //     }
//   // //   `;
//   // //   document.head.appendChild(styleSheet);
//   // // }


//   // // src/components/Home/Services.jsx


//   // import React from 'react';

//   // const Services = () => {
//   //   const services = [
//   //     {
//   //       num: '01',
//   //       icon: '✈️',
//   //       name: 'Air Imports & Exports',
//   //       desc: 'Express, back-to-back and consolidation. Temperature-controlled shipments. In-house customs at all airports. IATA & GDP certified.',
//   //     },
//   //     {
//   //       num: '02',
//   //       icon: '🚢',
//   //       name: 'Ocean Imports & Exports',
//   //       desc: 'LCL & FCL solutions from ICDs & ports. Reefer container handling, factory loading/unloading, temperature-controlled storage.',
//   //     },
//   //     {
//   //       num: '03',
//   //       icon: '📦',
//   //       name: 'Consolidation Services',
//   //       desc: 'LCL & air consolidation, multi-vendor and multi-origin shipments, factory & warehouse consolidation, secure packaging.',
//   //     },
//   //     {
//   //       num: '04',
//   //       icon: '📋',
//   //       name: 'Customs Clearance',
//   //       desc: 'One of India\'s oldest CHA licensees. AEO-LO certified. In-house clearance experts at all major ports — swift and compliant.',
//   //     },
//   //   ];

//   //   return (
//   //     <section id="services" className="sec">
//   //       <div className="sr">
//   //         <div className="chip">Core Services</div>
//   //         <h2 className="sec-title">
//   //           Freight Solutions <span className="hl">Built for Complexity</span>
//   //         </h2>
//   //         <p className="sec-sub">Comprehensive, certified logistics services tailored to your cargo — from express air shipments to large-scale ocean freight.</p>
//   //       </div>
//   //       <div className="svc-grid sr d2">
//   //         {services.map((service, idx) => (
//   //           <div key={idx} className="sc">
//   //             <div className="sc-num">{service.num}</div>
//   //             <span className="sc-ico">{service.icon}</span>
//   //             <div className="sc-name">{service.name}</div>
//   //             <div className="sc-desc">{service.desc}</div>
//   //             <div className="sc-more">Learn more →</div>
//   //             <div className="sc-bar"></div>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     </section>
//   //   );
//   // };

//   // export default Services;


//   // import React from 'react';

//   // const Services = () => {
//   //   const services = [
//   //     {
//   //       num: '01',
//   //       icon: '✈️',
//   //       name: 'Air Imports & Exports',
//   //       desc: 'Express, back-to-back and consolidation. Temperature-controlled shipments. In-house customs at all airports. IATA & GDP certified.',
//   //     },
//   //     {
//   //       num: '02',
//   //       icon: '🚢',
//   //       name: 'Ocean Imports & Exports',
//   //       desc: 'LCL & FCL solutions from ICDs & ports. Reefer container handling, factory loading/unloading, temperature-controlled storage.',
//   //     },
//   //     {
//   //       num: '03',
//   //       icon: '📦',
//   //       name: 'Consolidation Services',
//   //       desc: 'LCL & air consolidation, multi-vendor and multi-origin shipments, factory & warehouse consolidation, secure packaging.',
//   //     },
//   //     {
//   //       num: '04',
//   //       icon: '📋',
//   //       name: 'Customs Clearance',
//   //       desc: "One of India's oldest CHA licensees. AEO-LO certified. In-house clearance experts at all major ports — swift and compliant.",
//   //     },
//   //   ];

//   //   return (
//   //     <>
//   //       <style>{`
//   //         .services-section {
//   //           padding: 72px 48px;
//   //           width: 100%;
//   //           box-sizing: border-box;
//   //         }
//   //         .svc-grid {
//   //           display: grid;
//   //           grid-template-columns: repeat(4, 1fr);
//   //           gap: 0;
//   //           background: var(--bd, #d8e4ed);
//   //           border: 1px solid var(--bd, #d8e4ed);
//   //           margin-top: 36px;
//   //           width: 100%;
//   //         }
//   //         .sc {
//   //           background: var(--w, #ffffff);
//   //           padding: 28px 24px;
//   //           border-right: 1px solid var(--bd, #d8e4ed);
//   //           transition: all 0.32s;
//   //           cursor: default;
//   //           position: relative;
//   //           overflow: hidden;
//   //         }
//   //         .sc:last-child { border-right: none; }
//   //         .sc::before {
//   //           content: '';
//   //           position: absolute;
//   //           inset: 0;
//   //           background: var(--n, #093e5d);
//   //           transform: translateY(100%);
//   //           transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//   //         }
//   //         .sc:hover::before { transform: translateY(0); }
//   //         .sc:hover {
//   //           transform: translateY(-4px);
//   //           box-shadow: 0 16px 48px rgba(11, 29, 58, 0.18);
//   //           z-index: 2;
//   //         }
//   //         .sc-num {
//   //           font-size: 0.62rem;
//   //           font-weight: 700;
//   //           letter-spacing: 0.22em;
//   //           color: var(--tm, #7a9aaa);
//   //           margin-bottom: 16px;
//   //           position: relative;
//   //           z-index: 1;
//   //           transition: color 0.3s;
//   //         }
//   //         .sc:hover .sc-num { color: rgba(255,255,255,0.3); }
//   //         .sc-ico {
//   //           font-size: 2rem;
//   //           display: block;
//   //           margin-bottom: 12px;
//   //           position: relative;
//   //           z-index: 1;
//   //           transition: transform 0.3s;
//   //         }
//   //         .sc:hover .sc-ico { transform: scale(1.05); }
//   //         .sc-name {
//   //           font-size: 0.97rem;
//   //           font-weight: 700;
//   //           color: var(--n, #093e5d);
//   //           margin-bottom: 7px;
//   //           position: relative;
//   //           z-index: 1;
//   //           transition: color 0.3s;
//   //         }
//   //         .sc:hover .sc-name { color: #fff; }
//   //         .sc-desc {
//   //           font-size: 0.79rem;
//   //           color: var(--ts, #3a6680);
//   //           line-height: 1.65;
//   //           position: relative;
//   //           z-index: 1;
//   //           transition: color 0.3s;
//   //         }
//   //         .sc:hover .sc-desc { color: rgba(255,255,255,0.55); }
//   //         .sc-more {
//   //           display: inline-flex;
//   //           align-items: center;
//   //           gap: 5px;
//   //           margin-top: 12px;
//   //           font-size: 0.75rem;
//   //           font-weight: 700;
//   //           color: var(--g, #6a9b5a);
//   //           position: relative;
//   //           z-index: 1;
//   //           transition: all 0.3s;
//   //         }
//   //         .sc:hover .sc-more { color: var(--g3, #8cb27f); gap: 9px; }
//   //         .sc-bar {
//   //           position: absolute;
//   //           bottom: 0; left: 0; right: 0;
//   //           height: 2px;
//   //           background: linear-gradient(90deg, var(--g, #6a9b5a), var(--g3, #8cb27f));
//   //           transform: scaleX(0);
//   //           transform-origin: left;
//   //           transition: transform 0.4s;
//   //           z-index: 2;
//   //         }
//   //         .sc:hover .sc-bar { transform: scaleX(1); }

//   //         /* Responsive */
//   //         @media (max-width: 1100px) {
//   //           .services-section { padding: 60px 20px; }
//   //           .svc-grid { grid-template-columns: repeat(2, 1fr); }
//   //           .sc:nth-child(2) { border-right: none; }
//   //           .sc:nth-child(1),
//   //           .sc:nth-child(2) { border-bottom: 1px solid var(--bd, #d8e4ed); }
//   //           .sc:nth-child(3) { border-right: 1px solid var(--bd, #d8e4ed); }
//   //           .sc:last-child { border-right: none; }
//   //         }

//   //         @media (max-width: 768px) {
//   //           .services-section { padding: 48px 16px; }
//   //           .svc-grid { margin-top: 24px; }
//   //           .sc { padding: 24px 20px; }
//   //           .sc-ico { font-size: 1.7rem; }
//   //           .sc-name { font-size: 0.9rem; }
//   //           .sc-desc { font-size: 0.77rem; }
//   //         }

//   //         @media (max-width: 540px) {
//   //           .svc-grid { grid-template-columns: 1fr; }
//   //           .sc { border-right: none !important; border-bottom: 1px solid var(--bd, #d8e4ed) !important; }
//   //           .sc:last-child { border-bottom: none !important; }
//   //           .sc:hover { transform: none; }
//   //         }

//   //         @media (max-width: 480px) {
//   //           .services-section { padding: 40px 16px; }
//   //           .sc { padding: 20px 16px; }
//   //           .sc-num { margin-bottom: 10px; }
//   //           .sc-ico { font-size: 1.5rem; margin-bottom: 8px; }
//   //           .sc-name { font-size: 0.85rem; }
//   //           .sc-desc { font-size: 0.75rem; line-height: 1.6; }
//   //           .sc-more { font-size: 0.72rem; margin-top: 10px; }
//   //         }
//   //       `}</style>

//   //       <section id="services" className="services-section">
//   //         <div className="section-header">
//   //           <div className="chip">Core Services</div>
//   //           <h2 className="sec-title">
//   //             Freight Solutions <span className="hl">Built for Complexity</span>
//   //           </h2>
//   //           <p className="sec-sub">
//   //             Comprehensive, certified logistics services tailored to your cargo — from express air shipments to large-scale ocean freight.
//   //           </p>
//   //         </div>
//   //         <div className="svc-grid sr d2">
//   //           {services.map((service, idx) => (
//   //             <div key={idx} className="sc">
//   //               <div className="sc-num">{service.num}</div>
//   //               <span className="sc-ico">{service.icon}</span>
//   //               <div className="sc-name">{service.name}</div>
//   //               <div className="sc-desc">{service.desc}</div>
//   //               <div className="sc-more">Learn more →</div>
//   //               <div className="sc-bar"></div>
//   //             </div>
//   //           ))}
//   //         </div>
//   //       </section>
//   //     </>
//   //   );
//   // };

//   // export default Services;


//   import React from 'react';

// const Services = () => {
//   const services = [
//     {
//       num: '01',
//       icon: '✈️',
//       name: 'Air Imports & Exports',
//       desc: 'Express, back-to-back and consolidation. Temperature-controlled shipments. In-house customs at all airports. IATA & GDP certified.',
//     },
//     {
//       num: '02',
//       icon: '🚢',
//       name: 'Ocean Imports & Exports',
//       desc: 'LCL & FCL solutions from ICDs & ports. Reefer container handling, factory loading/unloading, temperature-controlled storage.',
//     },
//     {
//       num: '03',
//       icon: '📦',
//       name: 'Consolidation Services',
//       desc: 'LCL & air consolidation, multi-vendor and multi-origin shipments, factory & warehouse consolidation, secure packaging.',
//     },
//     {
//       num: '04',
//       icon: '📋',
//       name: 'Customs Clearance',
//       desc: "One of India's oldest CHA licensees. AEO-LO certified. In-house clearance experts at all major ports — swift and compliant.",
//     },
//   ];

//   return (
//     <>
//       <style>{`
//         .services-section {
//           padding: 72px 48px;
//           width: 100%;
//           box-sizing: border-box;
//         }
//         .svc-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 0;
//           background: var(--bd, #d8e4ed);
//           border: 1px solid var(--bd, #d8e4ed);
//           margin-top: 36px;
//           width: 100%;
//         }
//         .sc {
//           background: var(--w, #ffffff);
//           padding: 28px 24px;
//           border-right: 1px solid var(--bd, #d8e4ed);
//           transition: all 0.32s;
//           cursor: default;
//           position: relative;
//           overflow: hidden;
//         }
//         .sc:last-child { border-right: none; }
//         .sc::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: var(--n, #093e5d);
//           transform: translateY(100%);
//           transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//         .sc:hover::before { transform: translateY(0); }
//         .sc:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 16px 48px rgba(11, 29, 58, 0.18);
//           z-index: 2;
//         }
//         .sc-num {
//           font-size: 0.62rem;
//           font-weight: 700;
//           letter-spacing: 0.22em;
//           color: var(--tm, #7a9aaa);
//           margin-bottom: 16px;
//           position: relative;
//           z-index: 1;
//           transition: color 0.3s;
//         }
//         .sc:hover .sc-num { color: rgba(255,255,255,0.3); }
//         .sc-ico {
//           font-size: 2rem;
//           display: block;
//           margin-bottom: 12px;
//           position: relative;
//           z-index: 1;
//           transition: transform 0.3s;
//           text-align: center; /* <-- center the icon */
//         }
//         .sc:hover .sc-ico { transform: scale(1.05); }
//         .sc-name {
//           font-size: 0.97rem;
//           font-weight: 700;
//           color: var(--n, #093e5d);
//           margin-bottom: 7px;
//           position: relative;
//           z-index: 1;
//           transition: color 0.3s;
//         }
//         .sc:hover .sc-name { color: #fff; }
//         .sc-desc {
//           font-size: 0.79rem;
//           color: var(--ts, #3a6680);
//           line-height: 1.65;
//           position: relative;
//           z-index: 1;
//           transition: color 0.3s;
//         }
//         .sc:hover .sc-desc { color: rgba(255,255,255,0.55); }
//         .sc-more {
//           display: inline-flex;
//           align-items: center;
//           gap: 5px;
//           margin-top: 12px;
//           font-size: 0.75rem;
//           font-weight: 700;
//           color: var(--g, #6a9b5a);
//           position: relative;
//           z-index: 1;
//           transition: all 0.3s;
//         }
//         .sc:hover .sc-more { color: var(--g3, #8cb27f); gap: 9px; }
//         .sc-bar {
//           position: absolute;
//           bottom: 0; left: 0; right: 0;
//           height: 2px;
//           background: linear-gradient(90deg, var(--g, #6a9b5a), var(--g3, #8cb27f));
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.4s;
//           z-index: 2;
//         }
//         .sc:hover .sc-bar { transform: scaleX(1); }

//         /* Responsive */
//         @media (max-width: 1100px) {
//           .services-section { padding: 60px 20px; }
//           .svc-grid { grid-template-columns: repeat(2, 1fr); }
//           .sc:nth-child(2) { border-right: none; }
//           .sc:nth-child(1),
//           .sc:nth-child(2) { border-bottom: 1px solid var(--bd, #d8e4ed); }
//           .sc:nth-child(3) { border-right: 1px solid var(--bd, #d8e4ed); }
//           .sc:last-child { border-right: none; }
//         }

//         @media (max-width: 768px) {
//           .services-section { padding: 48px 16px; }
//           .svc-grid { margin-top: 24px; }
//           .sc { padding: 24px 20px; }
//           .sc-ico { font-size: 1.7rem; }
//           .sc-name { font-size: 0.9rem; }
//           .sc-desc { font-size: 0.77rem; }
//         }

//         @media (max-width: 540px) {
//           .svc-grid { grid-template-columns: 1fr; }
//           .sc { border-right: none !important; border-bottom: 1px solid var(--bd, #d8e4ed) !important; }
//           .sc:last-child { border-bottom: none !important; }
//           .sc:hover { transform: none; }
//         }

//         @media (max-width: 480px) {
//           .services-section { padding: 40px 16px; }
//           .sc { padding: 20px 16px; }
//           .sc-num { margin-bottom: 10px; }
//           .sc-ico { font-size: 1.5rem; margin-bottom: 8px; }
//           .sc-name { font-size: 0.85rem; }
//           .sc-desc { font-size: 0.75rem; line-height: 1.6; }
//           .sc-more { font-size: 0.72rem; margin-top: 10px; }
//         }
//       `}</style>

//       <section id="services" className="services-section">
//         <div className="section-header">
//           <div className="chip">Core Services</div>
//           <h2 className="sec-title">
//             Freight Solutions <span className="hl">Built for Complexity</span>
//           </h2>
//           <p className="sec-sub">
//             Comprehensive, certified logistics services tailored to your cargo — from express air shipments to large-scale ocean freight.
//           </p>
//         </div>
//         <div className="svc-grid sr d2">
//           {services.map((service, idx) => (
//             <div key={idx} className="sc">
//               <div className="sc-num">{service.num}</div>
//               <span className="sc-ico">{service.icon}</span>
//               <div className="sc-name">{service.name}</div>
//               <div className="sc-desc">{service.desc}</div>
//               <div className="sc-more">Learn more →</div>
//               <div className="sc-bar"></div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Services;





import React from 'react';

const Services = () => {
  const services = [
    {
      num: '01',
      icon: '✈️',
      name: 'Air Imports & Exports',
      desc: 'Express, back-to-back and consolidation. Temperature-controlled shipments. In-house customs at all airports. IATA & GDP certified.',
    },
    {
      num: '02',
      icon: '🚢',
      name: 'Ocean Imports & Exports',
      desc: 'LCL & FCL solutions from ICDs & ports. Reefer container handling, factory loading/unloading, temperature-controlled storage.',
    },
    {
      num: '03',
      icon: '📦',
      name: 'Consolidation Services',
      desc: 'LCL & air consolidation, multi-vendor and multi-origin shipments, factory & warehouse consolidation, secure packaging.',
    },
    {
      num: '04',
      icon: '📋',
      name: 'Customs Clearance',
      desc: "One of India's oldest CHA licensees. AEO-LO certified. In-house clearance experts at all major ports — swift and compliant.",
    },
  ];

  return (
    <>
      <style>{`
        .services-section {
          padding: 72px 48px;
          width: 100%;
          box-sizing: border-box;
        }
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          background: var(--bd, #d8e4ed);
          border: 1px solid var(--bd, #d8e4ed);
          margin-top: 36px;
          max-width: 1200px;        /* Limit the width of the grid */
          margin-left: auto;         /* Center the grid horizontally */
          margin-right: auto;
          width: 100%;
        }
        .sc {
          background: var(--w, #ffffff);
          padding: 28px 24px;
          border-right: 1px solid var(--bd, #d8e4ed);
          transition: all 0.32s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .sc:last-child { border-right: none; }
        .sc::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--n, #093e5d);
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sc:hover::before { transform: translateY(0); }
        .sc:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(11, 29, 58, 0.18);
          z-index: 2;
        }
        .sc-num {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: var(--tm, #7a9aaa);
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
          transition: color 0.3s;
        }
        .sc:hover .sc-num { color: rgba(255,255,255,0.3); }
        .sc-ico {
          font-size: 2rem;
          display: block;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
          transition: transform 0.3s;
          text-align: center; /* Center the icon */
        }
        .sc:hover .sc-ico { transform: scale(1.05); }
        .sc-name {
          font-size: 0.97rem;
          font-weight: 700;
          color: var(--n, #093e5d);
          margin-bottom: 7px;
          position: relative;
          z-index: 1;
          transition: color 0.3s;
        }
        .sc:hover .sc-name { color: #fff; }
        .sc-desc {
          font-size: 0.79rem;
          color: var(--ts, #3a6680);
          line-height: 1.65;
          position: relative;
          z-index: 1;
          transition: color 0.3s;
        }
        .sc:hover .sc-desc { color: rgba(255,255,255,0.55); }
        .sc-more {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--g, #6a9b5a);
          position: relative;
          z-index: 1;
          transition: all 0.3s;
        }
        .sc:hover .sc-more { color: var(--g3, #8cb27f); gap: 9px; }
        .sc-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--g, #6a9b5a), var(--g3, #8cb27f));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s;
          z-index: 2;
        }
        .sc:hover .sc-bar { transform: scaleX(1); }

        /* Responsive */
        @media (max-width: 1100px) {
          .services-section { padding: 60px 20px; }
          .svc-grid { grid-template-columns: repeat(2, 1fr); max-width: 800px; }
          .sc:nth-child(2) { border-right: none; }
          .sc:nth-child(1),
          .sc:nth-child(2) { border-bottom: 1px solid var(--bd, #d8e4ed); }
          .sc:nth-child(3) { border-right: 1px solid var(--bd, #d8e4ed); }
          .sc:last-child { border-right: none; }
        }

        @media (max-width: 768px) {
          .services-section { padding: 48px 16px; }
          .svc-grid { margin-top: 24px; max-width: 100%; }
          .sc { padding: 24px 20px; }
          .sc-ico { font-size: 1.7rem; }
          .sc-name { font-size: 0.9rem; }
          .sc-desc { font-size: 0.77rem; }
        }

        @media (max-width: 540px) {
          .svc-grid { grid-template-columns: 1fr; max-width: 100%; }
          .sc { border-right: none !important; border-bottom: 1px solid var(--bd, #d8e4ed) !important; }
          .sc:last-child { border-bottom: none !important; }
          .sc:hover { transform: none; }
        }

        @media (max-width: 480px) {
          .services-section { padding: 40px 16px; }
          .sc { padding: 20px 16px; }
          .sc-num { margin-bottom: 10px; }
          .sc-ico { font-size: 1.5rem; margin-bottom: 8px; }
          .sc-name { font-size: 0.85rem; }
          .sc-desc { font-size: 0.75rem; line-height: 1.6; }
          .sc-more { font-size: 0.72rem; margin-top: 10px; }
        }
      `}</style>

      <section id="services" className="services-section">
        <div className="section-header">
          <div className="chip">Core Services</div>
          <h2 className="sec-title">
            Freight Solutions <span className="hl">Built for Complexity</span>
          </h2>
          <p className="sec-sub">
            Comprehensive, certified logistics services tailored to your cargo — from express air shipments to large-scale ocean freight.
          </p>
        </div>
        <div className="svc-grid sr d2">
          {services.map((service, idx) => (
            <div key={idx} className="sc">
              <div className="sc-num">{service.num}</div>
              <span className="sc-ico">{service.icon}</span>
              <div className="sc-name">{service.name}</div>
              <div className="sc-desc">{service.desc}</div>
              <div className="sc-more">Learn more →</div>
              <div className="sc-bar"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;