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
          background: linear-gradient(135deg, #060f1e 0%, #0a1428 100%);
          padding: 56px 48px 24px;
          border-top: 1px solid rgba(106, 155, 90, 0.4);
          font-family: 'Poppins', sans-serif;
          position: relative;
          box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.3);
        }

        /* decorative line glow */
        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #6a9b5a, #8bc34a, #6a9b5a);
          box-shadow: 0 0 8px #6a9b5a;
        }

        .ft {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 44px;
          padding-bottom: 36px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* logo area */
        .ft-brand-logo {
          display: flex;
          align-items: center;
          margin-bottom: 14px;
          transition: transform 0.25s ease;
        }
        .ft-brand-logo:hover {
          transform: scale(1.02);
        }
        .ft-logo-img {
          height: 34px;
          width: auto;
          display: block;
          object-fit: contain;
          transition: filter 0.3s, drop-shadow 0.3s;
        }
        .ft-logo-img:hover {
          filter: brightness(0) invert(1) drop-shadow(0 0 4px #6a9b5a);
        }

        .ft-desc {
          font-size: 0.78rem;
          color: #ffffff;
          line-height: 1.75;
          max-width: 260px;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
        .ft-desc:hover {
          opacity: 1;
        }

        .ft-ttl {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #6a9b5a;
          margin-bottom: 16px;
          position: relative;
          display: inline-block;
        }
        .ft-ttl::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 28px;
          height: 2px;
          background: #6a9b5a;
          border-radius: 2px;
          transition: width 0.25s;
        }
        .ft-col:hover .ft-ttl::after {
          width: 48px;
        }

        /* link styling with slide effect */
        .ft-col a,
        .footer-link {
          display: block;
          font-size: 0.79rem;
          color: #e0e0e0;
          text-decoration: none;
          margin-bottom: 10px;
          transition: all 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font: inherit;
          text-align: left;
          width: auto;
          opacity: 0.75;
          position: relative;
          left: 0;
        }
        .ft-col a:hover,
        .footer-link:hover {
          color: #6a9b5a;
          opacity: 1;
          left: 6px;
          text-decoration: none;
        }

        /* bottom bar */
        .ft-btm {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }
        .ft-copy {
          font-size: 0.71rem;
          color: #ffffff;
          opacity: 0.6;
          transition: opacity 0.2s;
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
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .ft-tag span {
          font-size: 0.8rem;
        }

        /* social icons row */
        .social-links {
          display: flex;
          gap: 20px;
          align-items: center;
          margin-top: 8px;
        }
        .social-icon {
          color: #ffffff;
          opacity: 0.7;
          font-size: 1.2rem;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }
        .social-icon:hover {
          opacity: 1;
          color: #6a9b5a;
          transform: translateY(-3px);
          background: rgba(106, 155, 90, 0.2);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        /* floating scroll button */
        .scroll-top-fixed {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 999;
          background: #6a9b5a;
          border: none;
          color: #ffffff;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.5rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
          transition: all 0.25s ease;
          opacity: 0;
          pointer-events: none;
          transform: scale(0.8);
        }
        .scroll-top-fixed.visible {
          opacity: 1;
          pointer-events: auto;
          transform: scale(1);
          animation: gentleBounce 0.4s ease;
        }
        .scroll-top-fixed:hover {
          background: #46823b;
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 8px 20px rgba(106, 155, 90, 0.5);
        }
        @keyframes gentleBounce {
          0% { transform: scale(0.8); opacity: 0; }
          70% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }

        /* responsive */
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
            width: 42px;
            height: 42px;
            font-size: 1.3rem;
          }
          .social-links {
            margin-top: 12px;
          }
        }
      `}</style>

      {/* floating back-to-top button */}
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
            <Link to="/clients">Clients</Link>
            <Link to="/officespage">Offices</Link>
          </div>
        </div>

        <div className="ft-btm">
          <div className="ft-copy">
            © 2026 <strong>Robinsons Cargo and Logistics Pvt Ltd</strong>. All rights reserved.
          </div>
          <div className="ft-tag">
            <span></span> On The Move Since 1954 · Mumbai, India
          </div>
          {/* Social media row */}
         
        </div>
      </footer>
    </>
  );
};

export default Footer;