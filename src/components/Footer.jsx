// //   // import React from 'react';

// //   // const Footer = () => {
// //   //   // Handle click for links with "#" to prevent page jump
// //   //   const handleLinkClick = (e, id) => {
// //   //     e.preventDefault();
// //   //     const element = document.getElementById(id);
// //   //     if (element) {
// //   //       element.scrollIntoView({ behavior: 'smooth' });
// //   //     }
// //   //   };

// //   //   return (
// //   //     <footer>
// //   //       <div className="ft">
// //   //         <div>
// //   //           <div className="ft-brand-logo">
// //   //             <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="ft-logo-img" />
// //   //           </div>
// //   //           <div className="ft-desc">
// //   //             India's trusted end-to-end logistics partner since 1954. Four generations of excellence in air, ocean, and supply chain solutions — 15 offices, 120+ global partners.
// //   //           </div>
// //   //         </div>
// //   //         <div className="ft-col">
// //   //           <div className="ft-ttl">Services</div>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'services')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             Air Imports & Exports
// //   //           </button>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'services')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             Ocean Imports & Exports
// //   //           </button>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'services')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             Consolidation Services
// //   //           </button>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'services')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             Customs Clearance
// //   //           </button>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'services')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             3PL & Warehousing
// //   //           </button>
// //   //         </div>
// //   //         <div className="ft-col">
// //   //           <div className="ft-ttl">Industries</div>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'industries')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             Automotive
// //   //           </button>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'industries')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             Aviation & Defense
// //   //           </button>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'industries')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             Pharma & Healthcare
// //   //           </button>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'industries')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             Luxury Goods
// //   //           </button>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'industries')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             Project Logistics
// //   //           </button>
// //   //         </div>
// //   //         <div className="ft-col">
// //   //           <div className="ft-ttl">Company</div>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'about')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             About Us
// //   //           </button>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'about')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             Certifications
// //   //           </button>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'about')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             Associations
// //   //           </button>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, 'esg')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             ESG
// //   //           </button>
// //   //           <button 
// //   //             onClick={(e) => handleLinkClick(e, '#')} 
// //   //             className="footer-link"
// //   //             style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'inherit' }}
// //   //           >
// //   //             Careers
// //   //           </button>
// //   //         </div>
// //   //       </div>
// //   //       <div className="ft-btm">
// //   //         <div className="ft-copy">
// //   //           © 2026 <strong>Robinsons Cargo and Logistics Pvt Ltd</strong>. All rights reserved.
// //   //         </div>
// //   //         <div className="ft-tag">On The Move Since 1954 · Mumbai, India</div>
// //   //       </div>
// //   //     </footer>
// //   //   );
// //   // };

// //   // export default Footer;


// //   import React from 'react';

// // const Footer = () => {
// //   const handleLinkClick = (e, id) => {
// //     e.preventDefault();
// //     const element = document.getElementById(id);
// //     if (element) {
// //       element.scrollIntoView({ behavior: 'smooth' });
// //     }
// //   };

// //   return (
// //     <>
// //       <style>{`
// //         footer {
// //           background: #060f1e;
// //           padding: 56px 48px 24px;
// //           border-top: 2px solid #6a9b5a;
// //         }

// //         .ft {
// //           display: grid;
// //           grid-template-columns: 2fr 1fr 1fr 1fr;
// //           gap: 44px;
// //           padding-bottom: 36px;
// //           border-bottom: 1px solid rgba(255,255,255,0.1);
// //         }

// //         .ft-brand-logo {
// //           display: flex;
// //           align-items: center;
// //           margin-bottom: 14px;
// //         }

// //         .ft-logo-img {
// //           height: 30px;
// //           width: auto;
// //           display: block;
// //           object-fit: contain;
// //           filter: brightness(0) invert(1);
// //           opacity: 0.9;
// //         }

// //         .ft-desc {
// //           font-size: 0.78rem;
// //           color: #ffffff;
// //           line-height: 1.75;
// //           max-width: 260px;
// //           opacity: 0.8;
// //         }

// //         .ft-ttl {
// //           font-size: 0.63rem;
// //           font-weight: 700;
// //           letter-spacing: 0.2em;
// //           text-transform: uppercase;
// //           color: #ffffff;
// //           margin-bottom: 12px;
// //           opacity: 0.7;
// //         }

// //         .ft-col a,
// //         .footer-link {
// //           display: block;
// //           font-size: 0.79rem;
// //           color: #ffffff;
// //           text-decoration: none;
// //           margin-bottom: 7px;
// //           transition: all 0.2s;
// //           background: none;
// //           border: none;
// //           cursor: pointer;
// //           padding: 0;
// //           font: inherit;
// //           text-align: left;
// //           width: auto;
// //           opacity: 0.8;
// //         }

// //         .ft-col a:hover,
// //         .footer-link:hover {
// //           color: #6a9b5a;
// //           text-decoration: underline;
// //           padding-left: 4px;
// //           opacity: 1;
// //         }

// //         .ft-btm {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           padding-top: 20px;
// //           flex-wrap: wrap;
// //           gap: 6px;
// //         }

// //         .ft-copy {
// //           font-size: 0.71rem;
// //           color: #ffffff;
// //           opacity: 0.6;
// //         }

// //         .ft-copy strong {
// //           color: #6a9b5a;
// //           font-weight: 600;
// //         }

// //         .ft-tag {
// //           font-size: 0.67rem;
// //           color: #ffffff;
// //           opacity: 0.5;
// //           letter-spacing: 0.14em;
// //           text-transform: uppercase;
// //         }

// //         @media (max-width: 768px) {
// //           footer {
// //             padding: 40px 24px 20px;
// //           }
// //           .ft {
// //             grid-template-columns: 1fr;
// //             gap: 32px;
// //           }
// //           .ft-desc {
// //             max-width: 100%;
// //           }
// //           .ft-btm {
// //             flex-direction: column;
// //             align-items: flex-start;
// //             gap: 12px;
// //           }
// //         }
// //       `}</style>

// //       <footer>
// //         <div className="ft">
// //           <div>
// //             <div className="ft-brand-logo">
// //               <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="ft-logo-img" />
// //             </div>
// //             <div className="ft-desc">
// //               India's trusted end-to-end logistics partner since 1954. Four generations of excellence in air, ocean, and supply chain solutions — 15 offices, 120+ global partners.
// //             </div>
// //           </div>
// //           <div className="ft-col">
// //             <div className="ft-ttl">Services</div>
// //             <button onClick={(e) => handleLinkClick(e, 'services')} className="footer-link">
// //               Air Imports & Exports
// //             </button>
// //             <button onClick={(e) => handleLinkClick(e, 'services')} className="footer-link">
// //               Ocean Imports & Exports
// //             </button>
// //             <button onClick={(e) => handleLinkClick(e, 'services')} className="footer-link">
// //               Consolidation Services
// //             </button>
// //             <button onClick={(e) => handleLinkClick(e, 'services')} className="footer-link">
// //               Customs Clearance
// //             </button>
// //             <button onClick={(e) => handleLinkClick(e, 'services')} className="footer-link">
// //               3PL & Warehousing
// //             </button>
// //           </div>
// //           <div className="ft-col">
// //             <div className="ft-ttl">Industries</div>
// //             <button onClick={(e) => handleLinkClick(e, 'industries')} className="footer-link">
// //               Automotive
// //             </button>
// //             <button onClick={(e) => handleLinkClick(e, 'industries')} className="footer-link">
// //               Aviation & Defense
// //             </button>
// //             <button onClick={(e) => handleLinkClick(e, 'industries')} className="footer-link">
// //               Pharma & Healthcare
// //             </button>
// //             <button onClick={(e) => handleLinkClick(e, 'industries')} className="footer-link">
// //               Luxury Goods
// //             </button>
// //             <button onClick={(e) => handleLinkClick(e, 'industries')} className="footer-link">
// //               Project Logistics
// //             </button>
// //           </div>
// //           <div className="ft-col">
// //             <div className="ft-ttl">Company</div>
// //             <button onClick={(e) => handleLinkClick(e, 'about')} className="footer-link">
// //               About Us
// //             </button>
// //             <button onClick={(e) => handleLinkClick(e, 'about')} className="footer-link">
// //               Certifications
// //             </button>
// //             <button onClick={(e) => handleLinkClick(e, 'about')} className="footer-link">
// //               Associations
// //             </button>
// //             <button onClick={(e) => handleLinkClick(e, 'esg')} className="footer-link">
// //               ESG
// //             </button>
// //             <button onClick={(e) => handleLinkClick(e, '#')} className="footer-link">
// //               Careers
// //             </button>
// //           </div>
// //         </div>
// //         <div className="ft-btm">
// //           <div className="ft-copy">
// //             © 2026 <strong>Robinsons Cargo and Logistics Pvt Ltd</strong>. All rights reserved.
// //           </div>
// //           <div className="ft-tag">On The Move Since 1954 · Mumbai, India</div>
// //         </div>
// //       </footer>
// //     </>
// //   );
// // };

// // export default Footer;

// import React from 'react';
// import { Link } from 'react-router-dom'; // Add this import

// const Footer = () => {
//   // If you still need scroll‑to‑section for certain links (e.g., from homepage), you can keep handleLinkClick.
//   // But for most, we use <Link> for page navigation.
//   const handleLinkClick = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       <style>{`
//         footer {
//           background: #060f1e;
//           padding: 56px 48px 24px;
//           border-top: 2px solid #6a9b5a;
//         }
//         .ft {
//           display: grid;
//           grid-template-columns: 2fr 1fr 1fr 1fr;
//           gap: 44px;
//           padding-bottom: 36px;
//           border-bottom: 1px solid rgba(255,255,255,0.1);
//         }
//         .ft-brand-logo {
//           display: flex;
//           align-items: center;
//           margin-bottom: 14px;
//         }
//         .ft-logo-img {
//           height: 30px;
//           width: auto;
//           display: block;
//           object-fit: contain;
//           filter: brightness(0) invert(1);
//           opacity: 0.9;
//         }
//         .ft-desc {
//           font-size: 0.78rem;
//           color: #ffffff;
//           line-height: 1.75;
//           max-width: 260px;
//           opacity: 0.8;
//         }
//         .ft-ttl {
//           font-size: 0.63rem;
//           font-weight: 700;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #ffffff;
//           margin-bottom: 12px;
//           opacity: 0.7;
//         }
//         /* Common styles for footer links (both <Link> and any remaining buttons) */
//         .ft-col a,
//         .footer-link {
//           display: block;
//           font-size: 0.79rem;
//           color: #ffffff;
//           text-decoration: none;
//           margin-bottom: 7px;
//           transition: all 0.2s;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           font: inherit;
//           text-align: left;
//           width: auto;
//           opacity: 0.8;
//         }
//         .ft-col a:hover,
//         .footer-link:hover {
//           color: #6a9b5a;
//           text-decoration: underline;
//           padding-left: 4px;
//           opacity: 1;
//         }
//         .ft-btm {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding-top: 20px;
//           flex-wrap: wrap;
//           gap: 6px;
//         }
//         .ft-copy {
//           font-size: 0.71rem;
//           color: #ffffff;
//           opacity: 0.6;
//         }
//         .ft-copy strong {
//           color: #6a9b5a;
//           font-weight: 600;
//         }
//         .ft-tag {
//           font-size: 0.67rem;
//           color: #ffffff;
//           opacity: 0.5;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//         }
//         @media (max-width: 768px) {
//           footer {
//             padding: 40px 24px 20px;
//           }
//           .ft {
//             grid-template-columns: 1fr;
//             gap: 32px;
//           }
//           .ft-desc {
//             max-width: 100%;
//           }
//           .ft-btm {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 12px;
//           }
//         }
//       `}</style>

//       <footer>
//         <div className="ft">
//           <div>
//             <div className="ft-brand-logo">
//               <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="ft-logo-img" />
//             </div>
//             <div className="ft-desc">
//               India's trusted end-to-end logistics partner since 1954. Four generations of excellence in air, ocean, and supply chain solutions — 15 offices, 120+ global partners.
//             </div>
//           </div>

//           <div className="ft-col">
//             <div className="ft-ttl">Services</div>
//             <Link to="/services/air-import">Air Imports & Exports</Link>
//             <Link to="/services/ocean-import">Ocean Imports & Exports</Link>
//             <Link to="/services/consolidation-services">Consolidation Services</Link>
//             <Link to="/services/customs-clearance">Customs Clearance</Link>
//           </div>

//           <div className="ft-col">
//             <div className="ft-ttl">Industries</div>
//             <Link to="/industries/automotive">Automotive</Link>
//             <Link to="/industries/aviation-defense">Aviation & Defense</Link>
//             <Link to="/industries/pharma-healthcare">Pharma & Healthcare</Link>
//             <Link to="/industries/luxury-goods">Luxury Goods</Link>
//             <Link to="/industries/project-logistics">Project Logistics</Link>
//           </div>

//           <div className="ft-col">
//             <div className="ft-ttl">Company</div>
//             <Link to="/aboutus">About Us</Link>
//             <Link to="/esg">ESG</Link>

//             <Link to="/clients">Client</Link> 
//             <Link to="/officespage">Offices</Link>
//           </div>
//         </div>

//         <div className="ft-btm">
//           <div className="ft-copy">
//             © 2026 <strong>Robinsons Cargo and Logistics Pvt Ltd</strong>. All rights reserved.
//           </div>
//           <div className="ft-tag">On The Move Since 1954 · Mumbai, India</div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // const handleLinkClick = (e, id) => {
  //   e.preventDefault();
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <>
      <style>{`
        /* Import Poppins font */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        footer {
          background: #060f1e;
          padding: 56px 48px 24px;
          border-top: 2px solid #6a9b5a;
          font-family: 'Poppins', sans-serif; /* Apply Poppins globally */
        }
        .ft {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 44px;
          padding-bottom: 36px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .ft-brand-logo {
          display: flex;
          align-items: center;
          margin-bottom: 14px;
        }
        .ft-logo-img {
          height: 30px;
          width: auto;
          display: block;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.9;
        }
        .ft-desc {
          font-size: 0.78rem;
          color: #ffffff;
          line-height: 1.75;
          max-width: 260px;
          opacity: 0.8;
        }
        .ft-ttl {
          font-size: 0.63rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 12px;
          opacity: 0.7;
        }
        /* Common styles for footer links (both <Link> and any remaining buttons) */
        .ft-col a,
        .footer-link {
          display: block;
          font-size: 0.79rem;
          color: #ffffff;
          text-decoration: none;
          margin-bottom: 7px;
          transition: all 0.2s;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font: inherit;
          text-align: left;
          width: auto;
          opacity: 0.8;
        }
        .ft-col a:hover,
        .footer-link:hover {
          color: #6a9b5a;
          text-decoration: underline;
          padding-left: 4px;
          opacity: 1;
        }
        .ft-btm {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          flex-wrap: wrap;
          gap: 6px;
        }
        .ft-copy {
          font-size: 0.71rem;
          color: #ffffff;
          opacity: 0.6;
        }
        .ft-copy strong {
          color: #6a9b5a;
          font-weight: 600;
        }
        .ft-tag {
          font-size: 0.67rem;
          color: #ffffff;
          opacity: 0.5;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          footer {
            padding: 40px 24px 20px;
          }
          .ft {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .ft-desc {
            max-width: 100%;
          }
          .ft-btm {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      <footer>
        <div className="ft">
          <div>
            <div className="ft-brand-logo">
              <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="ft-logo-img" />
            </div>
            <div className="ft-desc">
              India's trusted end-to-end logistics partner since 1954. Four generations of excellence in air, ocean, and supply chain solutions — 15 offices, 120+ global partners.
            </div>
          </div>

          <div className="ft-col">
            <div className="ft-ttl">Services</div>
            <Link to="/services/air-import">Air Imports & Exports</Link>
            <Link to="/services/ocean-import">Ocean Imports & Exports</Link>
            <Link to="/services/consolidation-services">Consolidation Services</Link>
            <Link to="/services/customs-clearance">Customs Clearance</Link>
          </div>

          <div className="ft-col">
            <div className="ft-ttl">Industries</div>
            <Link to="/industries/automotive">Automotive</Link>
            <Link to="/industries/aviation-defense">Aviation & Defense</Link>
            <Link to="/industries/pharma-healthcare">Pharma & Healthcare</Link>
            <Link to="/industries/luxury-goods">Luxury Goods</Link>
            <Link to="/industries/project-logistics">Project Logistics</Link>
          </div>

          <div className="ft-col">
            <div className="ft-ttl">Company</div>
            <Link to="/aboutus">About Us</Link>
            <Link to="/esg">ESG</Link>
            <Link to="/clients">Client</Link> 
            <Link to="/officespage">Offices</Link>
          </div>
        </div>

        <div className="ft-btm">
          <div className="ft-copy">
            © 2026 <strong>Robinsons Cargo and Logistics Pvt Ltd</strong>. All rights reserved.
          </div>
          <div className="ft-tag">On The Move Since 1954 · Mumbai, India</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;