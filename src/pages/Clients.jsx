// // // import React, { useState } from 'react';
// // // import './Clients.css';

// // // const Clients = () => {
// // //   const [activeTab, setActiveTab] = useState('lux');

// // //   const tabs = [
// // //     { id: 'lux', label: 'Luxury' },
// // //     { id: 'auto', label: 'Automotive & Eng.' },
// // //     { id: 'aero', label: 'Aerospace & Defense' },
// // //     { id: 'pharma', label: 'Pharma & Biotech' },
// // //     { id: 'other', label: 'Others' },
// // //   ];

// // //   const clientsData = {
// // //     lux: ['ROLEX', 'BVLGARI', 'CARTIER', 'CHOPARD GENÈVE', 'BREITLING 1884', 'ETHOS WATCH', 'RIMOWA', 'FRANCK MULLER', 'RICHEMONT', '+More Luxury'],
// // //     auto: ['TIMKEN', 'WIPRO INFRA ENG.', 'HILTI', 'MARUTI SUZUKI', 'BERGEN PIPE', 'ANDRITZ', 'RICE LAKE', 'ASHIRVAD PIPES', 'HAGER', 'OERLIKON BALZERS'],
// // //     aero: ['FOXCONN', 'PEGATRON', 'TATA ELECTRONICS', 'PIXXEL', 'GALAXEYE', 'DHRUVA SPACE', 'PARAS DEFENCE', 'NAVAL GROUP', 'DIGANTARA', 'ETHEREAL X'],
// // //     pharma: ['AUROBINDO', 'TRANSASIA', 'CIPLA', 'UNICEF', 'MEDREICH', 'BIOCON', 'VIATRIS', 'WORLD HEALTH ORG.', 'MEIJI GROUP', '+More'],
// // //     other: ['NEILSOFT', 'SOGEFI GROUP', 'LENSKART', 'ADVIK HI-TECH', 'POTAIN', 'SÉCHERON', 'MEPHISTO', 'CLYDE INDUSTRIES', 'AVANTOR', 'TARA RELAYS'],
// // //   };

// // //   return (
// // //     <section id="clients" className="clients-sec">
// // //       <div className="sr">
// // //         <div className="chip">Trusted By</div>
// // //         <h2 className="sec-title">
// // //           Clients Across <span className="hl">Every Sector</span>
// // //         </h2>
// // //       </div>
// // //       <div className="tab-bar sr d1">
// // //         {tabs.map((tab) => (
// // //           <button
// // //             key={tab.id}
// // //             className={`tb ${activeTab === tab.id ? 'on' : ''}`}
// // //             onClick={() => setActiveTab(tab.id)}
// // //           >
// // //             {tab.label}
// // //           </button>
// // //         ))}
// // //       </div>
// // //       <div className={`cpanel ${activeTab === 'lux' ? 'on' : ''} sr d2`}>
// // //         <div className="cl-grid">
// // //           {clientsData.lux.map((client, index) => (
// // //             <div key={index} className="cl">
// // //               <span>{client}</span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //       <div className={`cpanel ${activeTab === 'auto' ? 'on' : ''} sr d2`}>
// // //         <div className="cl-grid">
// // //           {clientsData.auto.map((client, index) => (
// // //             <div key={index} className="cl">
// // //               <span>{client}</span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //       <div className={`cpanel ${activeTab === 'aero' ? 'on' : ''} sr d2`}>
// // //         <div className="cl-grid">
// // //           {clientsData.aero.map((client, index) => (
// // //             <div key={index} className="cl">
// // //               <span>{client}</span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //       <div className={`cpanel ${activeTab === 'pharma' ? 'on' : ''} sr d2`}>
// // //         <div className="cl-grid">
// // //           {clientsData.pharma.map((client, index) => (
// // //             <div key={index} className="cl">
// // //               <span>{client}</span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //       <div className={`cpanel ${activeTab === 'other' ? 'on' : ''} sr d2`}>
// // //         <div className="cl-grid">
// // //           {clientsData.other.map((client, index) => (
// // //             <div key={index} className="cl">
// // //               <span>{client}</span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Clients; 
// // // .clients-sec {
// // //   background: var(--w);
// // //   padding: 72px 48px;
// // // }

// // // .tab-bar {
// // //   display: flex;
// // //   gap: 0;
// // //   border-bottom: 1.5px solid var(--bd);
// // //   margin-top: 28px;
// // // }

// // // .tb {
// // //   padding: 9px 18px;
// // //   font-size: 0.74rem;
// // //   font-weight: 700;
// // //   letter-spacing: 0.05em;
// // //   text-transform: uppercase;
// // //   color: var(--tm);
// // //   background: none;
// // //   border: none;
// // //   cursor: pointer;
// // //   border-bottom: 2px solid transparent;
// // //   margin-bottom: -1.5px;
// // //   transition: all 0.2s;
// // //   font-family: 'Inter', sans-serif;
// // // }

// // // .tb.on {
// // //   color: var(--n);
// // //   border-bottom-color: var(--g);
// // // }

// // // .tb:hover {
// // //   color: var(--n);
// // // }

// // // .cpanel {
// // //   display: none;
// // //   padding-top: 20px;
// // // }

// // // .cpanel.on {
// // //   display: block;
// // // }

// // // .cl-grid {
// // //   display: grid;
// // //   grid-template-columns: repeat(5, 1fr);
// // //   gap: 1px;
// // //   background: var(--bd);
// // //   border: 1px solid var(--bd);
// // // }

// // // .cl {
// // //   background: var(--w);
// // //   padding: 20px 14px;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;
// // //   transition: background 0.22s;
// // //   cursor: default;
// // // }

// // // .cl:hover {
// // //   background: var(--n);
// // // }

// // // .cl span {
// // //   font-size: 0.74rem;
// // //   font-weight: 800;
// // //   color: var(--tm);
// // //   letter-spacing: 0.05em;
// // //   text-transform: uppercase;
// // //   text-align: center;
// // //   transition: color 0.22s;
// // // }

// // // .cl:hover span {
// // //   color: var(--g3);
// // // }


// // import React, { useState } from 'react';

// // const Clients = () => {
// //   const [activeTab, setActiveTab] = useState('lux');

// //   const tabs = [
// //     { id: 'lux', label: 'Luxury' },
// //     { id: 'auto', label: 'Automotive & Eng.' },
// //     { id: 'aero', label: 'Aerospace & Defense' },
// //     { id: 'pharma', label: 'Pharma & Biotech' },
// //     { id: 'other', label: 'Others' },
// //   ];

// //   const clientsData = {
// //     lux: ['ROLEX', 'BVLGARI', 'CARTIER', 'CHOPARD GENÈVE', 'BREITLING 1884', 'ETHOS WATCH', 'RIMOWA', 'FRANCK MULLER', 'RICHEMONT', '+More Luxury'],
// //     auto: ['TIMKEN', 'WIPRO INFRA ENG.', 'HILTI', 'MARUTI SUZUKI', 'BERGEN PIPE', 'ANDRITZ', 'RICE LAKE', 'ASHIRVAD PIPES', 'HAGER', 'OERLIKON BALZERS'],
// //     aero: ['FOXCONN', 'PEGATRON', 'TATA ELECTRONICS', 'PIXXEL', 'GALAXEYE', 'DHRUVA SPACE', 'PARAS DEFENCE', 'NAVAL GROUP', 'DIGANTARA', 'ETHEREAL X'],
// //     pharma: ['AUROBINDO', 'TRANSASIA', 'CIPLA', 'UNICEF', 'MEDREICH', 'BIOCON', 'VIATRIS', 'WORLD HEALTH ORG.', 'MEIJI GROUP', '+More'],
// //     other: ['NEILSOFT', 'SOGEFI GROUP', 'LENSKART', 'ADVIK HI-TECH', 'POTAIN', 'SÉCHERON', 'MEPHISTO', 'CLYDE INDUSTRIES', 'AVANTOR', 'TARA RELAYS'],
// //   };

// //   return (
// //     <section id="clients" className="clients-sec">
// //       <div className="sr">
// //         <div className="chip">Trusted By</div>
// //         <h2 className="sec-title">
// //           Clients Across <span className="hl">Every Sector</span>
// //         </h2>
// //       </div>
// //       <div className="tab-bar sr d1">
// //         {tabs.map((tab) => (
// //           <button
// //             key={tab.id}
// //             className={`tb ${activeTab === tab.id ? 'on' : ''}`}
// //             onClick={() => setActiveTab(tab.id)}
// //           >
// //             {tab.label}
// //           </button>
// //         ))}
// //       </div>
// //       <div className={`cpanel ${activeTab === 'lux' ? 'on' : ''} sr d2`}>
// //         <div className="cl-grid">
// //           {clientsData.lux.map((client, index) => (
// //             <div key={index} className="cl">
// //               <span>{client}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <div className={`cpanel ${activeTab === 'auto' ? 'on' : ''} sr d2`}>
// //         <div className="cl-grid">
// //           {clientsData.auto.map((client, index) => (
// //             <div key={index} className="cl">
// //               <span>{client}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <div className={`cpanel ${activeTab === 'aero' ? 'on' : ''} sr d2`}>
// //         <div className="cl-grid">
// //           {clientsData.aero.map((client, index) => (
// //             <div key={index} className="cl">
// //               <span>{client}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <div className={`cpanel ${activeTab === 'pharma' ? 'on' : ''} sr d2`}>
// //         <div className="cl-grid">
// //           {clientsData.pharma.map((client, index) => (
// //             <div key={index} className="cl">
// //               <span>{client}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <div className={`cpanel ${activeTab === 'other' ? 'on' : ''} sr d2`}>
// //         <div className="cl-grid">
// //           {clientsData.other.map((client, index) => (
// //             <div key={index} className="cl">
// //               <span>{client}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Clients;

// // // Inject styles into document head
// // if (typeof document !== 'undefined') {
// //   const styleSheet = document.createElement("style");
// //   styleSheet.textContent = `
// //     .clients-sec {
// //       background: var(--w);
// //       padding: 72px 48px;
// //     }

// //     .tab-bar {
// //       display: flex;
// //       gap: 0;
// //       border-bottom: 1.5px solid var(--bd);
// //       margin-top: 28px;
// //     }

// //     .tb {
// //       padding: 9px 18px;
// //       font-size: 0.74rem;
// //       font-weight: 700;
// //       letter-spacing: 0.05em;
// //       text-transform: uppercase;
// //       color: var(--tm);
// //       background: none;
// //       border: none;
// //       cursor: pointer;
// //       border-bottom: 2px solid transparent;
// //       margin-bottom: -1.5px;
// //       transition: all 0.2s;
// //       font-family: 'Inter', sans-serif;
// //     }

// //     .tb.on {
// //       color: var(--n);
// //       border-bottom-color: var(--g);
// //     }

// //     .tb:hover {
// //       color: var(--n);
// //     }

// //     .cpanel {
// //       display: none;
// //       padding-top: 20px;
// //     }

// //     .cpanel.on {
// //       display: block;
// //     }

// //     .cl-grid {
// //       display: grid;
// //       grid-template-columns: repeat(5, 1fr);
// //       gap: 1px;
// //       background: var(--bd);
// //       border: 1px solid var(--bd);
// //     }

// //     .cl {
// //       background: var(--w);
// //       padding: 20px 14px;
// //       display: flex;
// //       align-items: center;
// //       justify-content: center;
// //       transition: background 0.22s;
// //       cursor: default;
// //     }

// //     .cl:hover {
// //       background: var(--n);
// //     }

// //     .cl span {
// //       font-size: 0.74rem;
// //       font-weight: 800;
// //       color: var(--tm);
// //       letter-spacing: 0.05em;
// //       text-transform: uppercase;
// //       text-align: center;
// //       transition: color 0.22s;
// //     }

// //     .cl:hover span {
// //       color: var(--g3);
// //     }

// //     @media (max-width: 1100px) {
// //       .clients-sec {
// //         padding: 60px 20px;
// //       }
// //       .cl-grid {
// //         grid-template-columns: repeat(3, 1fr);
// //       }
// //     }
// //   `;
// //   document.head.appendChild(styleSheet);
// // }
// // src/components/Home/Clients.jsx


// // import React, { useState } from 'react';

// // const Clients = () => {
// //   const [activeTab, setActiveTab] = useState('lux');

// //   const tabs = [
// //     { id: 'lux', label: 'Luxury' },
// //     { id: 'auto', label: 'Automotive & Eng.' },
// //     { id: 'aero', label: 'Aerospace & Defense' },
// //     { id: 'pharma', label: 'Pharma & Biotech' },
// //     { id: 'other', label: 'Others' },
// //   ];

// //   const clientData = {
// //     lux: ['ROLEX', 'BVLGARI', 'CARTIER', 'CHOPARD GENÈVE', 'BREITLING 1884', 'ETHOS WATCH', 'RIMOWA', 'FRANCK MULLER', 'RICHEMONT', '+More Luxury'],
// //     auto: ['TIMKEN', 'WIPRO INFRA ENG.', 'HILTI', 'MARUTI SUZUKI', 'BERGEN PIPE', 'ANDRITZ', 'RICE LAKE', 'ASHIRVAD PIPES', 'HAGER', 'OERLIKON BALZERS'],
// //     aero: ['FOXCONN', 'PEGATRON', 'TATA ELECTRONICS', 'PIXXEL', 'GALAXEYE', 'DHRUVA SPACE', 'PARAS DEFENCE', 'NAVAL GROUP', 'DIGANTARA', 'ETHEREAL X'],
// //     pharma: ['AUROBINDO', 'TRANSASIA', 'CIPLA', 'UNICEF', 'MEDREICH', 'BIOCON', 'VIATRIS', 'WORLD HEALTH ORG.', 'MEIJI GROUP', '+More'],
// //     other: ['NEILSOFT', 'SOGEFI GROUP', 'LENSKART', 'ADVIK HI-TECH', 'POTAIN', 'SÉCHERON', 'MEPHISTO', 'CLYDE INDUSTRIES', 'AVANTOR', 'TARA RELAYS'],
// //   };

// //   return (
// //     <section id="clients" className="clients-sec">
// //       <div className=".section-header">
// //         <div className="chip">Trusted By</div>
// //         <h2 className="sec-title">
// //           Clients Across <span className="hl">Every Sector</span>
// //         </h2>
// //       </div>
// //       <div className="tab-bar sr d1">
// //         {tabs.map((tab) => (
// //           <button
// //             key={tab.id}
// //             className={`tb ${activeTab === tab.id ? 'on' : ''}`}
// //             onClick={() => setActiveTab(tab.id)}
// //           >
// //             {tab.label}
// //           </button>
// //         ))}
// //       </div>
// //       {tabs.map((tab) => (
// //         <div
// //           key={tab.id}
// //           id={`p-${tab.id}`}
// //           className={`cpanel ${activeTab === tab.id ? 'on' : ''} sr d2`}
// //         >
// //           <div className="cl-grid">
// //             {clientData[tab.id].map((client, idx) => (
// //               <div key={idx} className="cl">
// //                 <span>{client}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </section>
// //   );
// // };

// // export default Clients;

// import React, { useState } from 'react';

// const Clients = () => {
//   const [activeTab, setActiveTab] = useState('lux');

//   const tabs = [
//     { id: 'lux', label: 'Luxury' },
//     { id: 'auto', label: 'Automotive & Eng.' },
//     { id: 'aero', label: 'Aerospace & Defense' },
//     { id: 'pharma', label: 'Pharma & Biotech' },
//     { id: 'other', label: 'Others' },
//   ];

//   const clientData = {
//     lux: ['ROLEX', 'BVLGARI', 'CARTIER', 'CHOPARD GENÈVE', 'BREITLING 1884', 'ETHOS WATCH', 'RIMOWA', 'FRANCK MULLER', 'RICHEMONT', '+More Luxury'],
//     auto: ['TIMKEN', 'WIPRO INFRA ENG.', 'HILTI', 'MARUTI SUZUKI', 'BERGEN PIPE', 'ANDRITZ', 'RICE LAKE', 'ASHIRVAD PIPES', 'HAGER', 'OERLIKON BALZERS'],
//     aero: ['FOXCONN', 'PEGATRON', 'TATA ELECTRONICS', 'PIXXEL', 'GALAXEYE', 'DHRUVA SPACE', 'PARAS DEFENCE', 'NAVAL GROUP', 'DIGANTARA', 'ETHEREAL X'],
//     pharma: ['AUROBINDO', 'TRANSASIA', 'CIPLA', 'UNICEF', 'MEDREICH', 'BIOCON', 'VIATRIS', 'WORLD HEALTH ORG.', 'MEIJI GROUP', '+More'],
//     other: ['NEILSOFT', 'SOGEFI GROUP', 'LENSKART', 'ADVIK HI-TECH', 'POTAIN', 'SÉCHERON', 'MEPHISTO', 'CLYDE INDUSTRIES', 'AVANTOR', 'TARA RELAYS'],
//   };

//   return (
//     <>
//       <style>{`
//         /* Center the tab bar */
//         .clients-sec .tab-bar {
//           justify-content: center;
//           gap: 12px; /* optional spacing between buttons */
//         }

//         /* Center the client grid */
//         .clients-sec .cl-grid {
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         /* Adjust grid breakpoints to keep centered */
//         @media (max-width: 768px) {
//           .clients-sec .cl-grid {
//             max-width: 100%;
//           }
//         }
//       `}</style>

//       <section id="clients" className="clients-sec">
//         {/* Fixed heading wrapper: no leading dot */}
//         <div className="section-header">
//           <div className="chip">Trusted By</div>
//           <h2 className="sec-title">
//             Clients Across <span className="hl">Every Sector</span>
//           </h2>
//         </div>

//         <div className="tab-bar sr d1">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               className={`tb ${activeTab === tab.id ? 'on' : ''}`}
//               onClick={() => setActiveTab(tab.id)}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {tabs.map((tab) => (
//           <div
//             key={tab.id}
//             id={`p-${tab.id}`}
//             className={`cpanel ${activeTab === tab.id ? 'on' : ''} sr d2`}
//           >
//             <div className="cl-grid">
//               {clientData[tab.id].map((client, idx) => (
//                 <div key={idx} className="cl">
//                   <span>{client}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// };

// export default Clients;
import React, { useState } from 'react';

const Clients = () => {
  const [activeTab, setActiveTab] = useState('lux');

  const tabs = [
    { id: 'lux', label: 'Luxury' },
    { id: 'auto', label: 'Automotive & Eng.' },
    { id: 'aero', label: 'Aerospace & Defense' },
    { id: 'pharma', label: 'Pharma & Biotech' },
    { id: 'other', label: 'Others' },
  ];

  const clientData = {
    lux: ['ROLEX', 'BVLGARI', 'CARTIER', 'CHOPARD GENÈVE', 'BREITLING 1884', 'ETHOS WATCH', 'RIMOWA', 'FRANCK MULLER', 'RICHEMONT', '+More Luxury'],
    auto: ['TIMKEN', 'WIPRO INFRA ENG.', 'HILTI', 'MARUTI SUZUKI', 'BERGEN PIPE', 'ANDRITZ', 'RICE LAKE', 'ASHIRVAD PIPES', 'HAGER', 'OERLIKON BALZERS'],
    aero: ['FOXCONN', 'PEGATRON', 'TATA ELECTRONICS', 'PIXXEL', 'GALAXEYE', 'DHRUVA SPACE', 'PARAS DEFENCE', 'NAVAL GROUP', 'DIGANTARA', 'ETHEREAL X'],
    pharma: ['AUROBINDO', 'TRANSASIA', 'CIPLA', 'UNICEF', 'MEDREICH', 'BIOCON', 'VIATRIS', 'WORLD HEALTH ORG.', 'MEIJI GROUP', '+More'],
    other: ['NEILSOFT', 'SOGEFI GROUP', 'LENSKART', 'ADVIK HI-TECH', 'POTAIN', 'SÉCHERON', 'MEPHISTO', 'CLYDE INDUSTRIES', 'AVANTOR', 'TARA RELAYS'],
  };

  return (
    <>
      <style>{`
        /* Reduce top padding of the clients section */
        .clients-sec {
          padding-top: 40px; /* adjust as needed */
        }
        /* Center the tab bar */
        .clients-sec .tab-bar {
          justify-content: center;
          gap: 12px;
        }
        /* Center the client grid */
        .clients-sec .cl-grid {
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .clients-sec .cl-grid {
            max-width: 100%;
          }
        }
      `}</style>

      <section id="clients" className="clients-sec">
        <div className="section-header">
          <div className="chip">Trusted By</div>
          <h2 className="sec-title">
            Clients Across <span className="hl">Every Sector</span>
          </h2>
        </div>

        <div className="tab-bar sr d1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tb ${activeTab === tab.id ? 'on' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`p-${tab.id}`}
            className={`cpanel ${activeTab === tab.id ? 'on' : ''} sr d2`}
          >
            <div className="cl-grid">
              {clientData[tab.id].map((client, idx) => (
                <div key={idx} className="cl">
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Clients;