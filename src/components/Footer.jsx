// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   // const handleLinkClick = (e, id) => {
//   //   e.preventDefault();
//   //   const element = document.getElementById(id);
//   //   if (element) {
//   //     element.scrollIntoView({ behavior: 'smooth' });
//   //   }
//   // };

//   return (
//     <>
//       <style>{`
//         /* Import Poppins font */
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

//         footer {
//           background: #060f1e;
//           padding: 56px 48px 24px;
//           border-top: 2px solid #6a9b5a;
//           font-family: 'Poppins', sans-serif; /* Apply Poppins globally */
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
//           opacity: 0.95;
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



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        footer {
          background: #060f1e;
          padding: 56px 48px 24px;
          border-top: 2px solid #6a9b5a;
          font-family: 'Poppins', sans-serif;
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
          mix-blend-mode: screen;
          opacity: 0.95;
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

        /* ── Bottom bar ── */
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

        /* ── Scroll-to-top inside footer ── */
        .ft-scroll-btn {
          background: #6a9b5a;
          border: none;
          color: #ffffff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .ft-scroll-btn:hover {
          background: #558048;
          transform: translateY(-2px);
        }

        /* ── Fixed floating button ── */
        .scroll-top-fixed {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 999;
          background: #6a9b5a;
          border: none;
          color: #ffffff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.35);
          transition: background 0.2s, transform 0.2s, opacity 0.3s;
          opacity: 0;
          pointer-events: none;
        }
        .scroll-top-fixed.visible {
          opacity: 1;
          pointer-events: auto;
        }
        .scroll-top-fixed:hover {
          background: #558048;
          transform: translateY(-3px);
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
          .scroll-top-fixed {
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>

      {/* ── Fixed floating scroll-to-top ── */}
      <button
        className={`scroll-top-fixed ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <footer>
        <div className="ft">
          <div>
            <div className="ft-brand-logo">
              <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="ft-logo-img" />
            </div>
            <div className="ft-desc">
              India's trusted end-to-end logistics partner since 1954. Four generations of excellence
              in air, ocean, and supply chain solutions — 15 offices, 120+ global partners.
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