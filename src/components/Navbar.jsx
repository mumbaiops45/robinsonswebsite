
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [hasShadow, setHasShadow] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const lastScrollY = useRef(0);
//   const mobileMenuRef = useRef(null);
//   const menuButtonRef = useRef(null);

//   // Handle scroll: add shadow when scrolled down
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setHasShadow(currentScrollY > 10);
//       lastScrollY.current = currentScrollY;
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when clicking outside or resizing to desktop
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isMobileMenuOpen &&
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target) &&
//         menuButtonRef.current &&
//         !menuButtonRef.current.contains(event.target)
//       ) {
//         setIsMobileMenuOpen(false);
//         setIsMobileIndustriesOpen(false);
//         setIsMobileServicesOpen(false);
//       }
//     };
//     const handleResize = () => {
//       if (window.innerWidth > 1100) {
//         setIsMobileMenuOpen(false);
//         setIsMobileIndustriesOpen(false);
//         setIsMobileServicesOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     window.addEventListener('resize', handleResize);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [isMobileMenuOpen]);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//     setIsMobileIndustriesOpen(false);
//     setIsMobileServicesOpen(false);
//   };

//   const toggleMobileIndustries = (e) => {
//     e.preventDefault();
//     setIsMobileIndustriesOpen((prev) => !prev);
//     if (isMobileServicesOpen) setIsMobileServicesOpen(false);
//   };

//   const toggleMobileServices = (e) => {
//     e.preventDefault();
//     setIsMobileServicesOpen((prev) => !prev);
//     if (isMobileIndustriesOpen) setIsMobileIndustriesOpen(false);
//   };

//   return (
//     <>
//       <style>{`
//         .rcl-nav {
//           position: fixed;
//           top: 0; left: 0; right: 0;
//           z-index: 500;
//           height: 62px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 48px;
//           background: rgba(255,255,255,0.97);
//           border-bottom: 1px solid var(--bd, #d8e4ed);
//           transition: box-shadow 0.3s, transform 0.35s;
//           box-sizing: border-box;
//         }
//         .rcl-nav.hide  { transform: translateY(-100%); }
//         .rcl-nav.shadow { box-shadow: 0 2px 24px rgba(11,29,58,0.07); }

//         /* Logo */
//         .rcl-logo {
//           display: flex;
//           align-items: center;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           flex-shrink: 0;
//           text-decoration: none;
//           max-width: 200px;
//         }
//         .rcl-logo-img {
//           height: 34px;
//           width: auto;
//           display: block;
//           object-fit: contain;
//         }

//         /* Desktop nav container - force single row */
//         .rcl-desktop-nav {
//           display: flex;
//           align-items: center;
//           gap: 28px;
//           flex-wrap: nowrap;
//           flex-shrink: 1;
//           min-width: 0;
//         }

//         /* Base button / link styles */
//         .rcl-nav-btn {
//           font-size: 0.78rem;
//           font-weight: 600;
//           color: var(--ts, #3a6680);
//           text-decoration: none;
//           letter-spacing: 0.01em;
//           transition: color 0.2s;
//           position: relative;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           font-family: inherit;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           white-space: nowrap;
//           flex-shrink: 0;
//         }
//         .rcl-nav-btn::after {
//           content: '';
//           position: absolute;
//           bottom: -4px; left: 0;
//           width: 0; height: 1.5px;
//           background: var(--g3, #8cb27f);
//           border-radius: 2px;
//           transition: width 0.25s;
//         }
//         .rcl-nav-btn:hover { color: var(--n, #093e5d); }
//         .rcl-nav-btn:hover::after { width: 100%; }

//         /* Dropdown container (desktop) */
//         .dropdown {
//           position: relative;
//           z-index: 100;
//           flex-shrink: 0;
//         }
//         .dropdown-content {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           background: white;
//           min-width: 220px;
//           box-shadow: 0 8px 20px rgba(0,0,0,0.12);
//           border-radius: 8px;
//           padding: 0.5rem 0;
//           opacity: 0;
//           visibility: hidden;
//           transform: translateY(-12px);
//           transition: all 0.25s ease;
//           z-index: 1000;
//           border: 1px solid var(--bd, #d8e4ed);
//         }
//         .dropdown:hover .dropdown-content {
//           opacity: 1;
//           visibility: visible;
//           transform: translateY(0);
//         }
//         .dropdown-content a {
//           display: block;
//           padding: 0.6rem 1.2rem;
//           color: var(--ts, #3a6680);
//           text-decoration: none;
//           font-size: 0.78rem;
//           font-weight: 500;
//           transition: background 0.2s, color 0.2s;
//           white-space: nowrap;
//         }
//         .dropdown-content a:hover {
//           background: #f5f7fa;
//           color: var(--n, #093e5d);
//         }

//         /* Arrow for desktop dropdown buttons */
//         .dropdown-arrow {
//           font-size: 0.7rem;
//           transition: transform 0.2s;
//         }
//         .dropdown:hover .dropdown-arrow {
//           transform: rotate(180deg);
//         }

//         /* CTA button */
//         .rcl-btn-cta {
//           background: var(--n, #093e5d) !important;
//           color: #fff !important;
//           padding: 8px 20px;
//           border-radius: 4px;
//           font-size: 0.78rem;
//           font-weight: 700;
//           text-decoration: none;
//           display: inline-block;
//           transition: background 0.2s;
//           border: none;
//           cursor: pointer;
//           font-family: inherit;
//           white-space: nowrap;
//           flex-shrink: 0;
//         }
//         .rcl-btn-cta:hover { background: var(--g, #6a9b5a) !important; }
//         .rcl-btn-cta::after { display: none !important; }

//         /* Hamburger */
//         .rcl-hamburger {
//           display: none;
//           flex-direction: column;
//           justify-content: space-between;
//           width: 28px;
//           height: 20px;
//           background: transparent;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           z-index: 10;
//           flex-shrink: 0;
//         }
//         .rcl-hline {
//           width: 100%;
//           height: 2px;
//           background: var(--ts, #3a6680);
//           border-radius: 2px;
//           transition: all 0.3s ease-in-out;
//           transform-origin: center;
//           display: block;
//         }
//         .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
//         .rcl-hamburger.active .rcl-hline:nth-child(2) { opacity: 0; transform: scaleX(0); }
//         .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

//         /* Mobile nav panel */
//         .rcl-mobile-nav {
//           position: fixed;
//           top: 62px; left: 0; right: 0;
//           background: rgba(255,255,255,0.98);
//           backdrop-filter: blur(10px);
//           box-shadow: 0 4px 20px rgba(0,0,0,0.1);
//           transform: translateY(-110%);
//           opacity: 0;
//           transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
//           z-index: 499;
//           pointer-events: none;
//           max-height: calc(100vh - 62px);
//           overflow-y: auto;
//           width: 100%;
//           box-sizing: border-box;
//         }
//         .rcl-mobile-nav.open {
//           transform: translateY(0);
//           opacity: 1;
//           pointer-events: auto;
//         }
//         .rcl-mobile-links {
//           display: flex;
//           flex-direction: column;
//           padding: 20px 24px;
//           gap: 0;
//         }
//         .rcl-mobile-btn {
//           background: none;
//           border: none;
//           font-size: 0.97rem;
//           font-weight: 600;
//           color: var(--ts, #3a6680);
//           padding: 14px 0;
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.2s;
//           border-bottom: 1px solid var(--bd, #d8e4ed);
//           width: 100%;
//           font-family: inherit;
//           letter-spacing: 0.01em;
//           text-decoration: none;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }
//         .rcl-mobile-btn:last-of-type { border-bottom: none; }
//         .rcl-mobile-btn:hover { color: var(--n, #093e5d); padding-left: 8px; }
//         .mobile-submenu {
//           padding-left: 1.5rem;
//           display: flex;
//           flex-direction: column;
//         }
//         .mobile-submenu a {
//           padding: 10px 0;
//           color: var(--ts, #3a6680);
//           text-decoration: none;
//           font-size: 0.85rem;
//           border-bottom: none;
//         }
//         .mobile-submenu a:hover {
//           color: var(--n, #093e5d);
//           padding-left: 4px;
//         }
//         .arrow {
//           font-size: 0.8rem;
//           transition: transform 0.2s;
//         }
//         .arrow.open {
//           transform: rotate(180deg);
//         }
//         .rcl-mobile-cta {
//           display: block;
//           background: var(--n, #093e5d);
//           color: #fff;
//           padding: 13px 20px;
//           border-radius: 4px;
//           font-size: 0.9rem;
//           font-weight: 700;
//           text-align: center;
//           text-decoration: none;
//           margin-top: 16px;
//           transition: background 0.2s;
//           font-family: inherit;
//         }
//         .rcl-mobile-cta:hover { background: var(--g, #6a9b5a); }

//         /* ===== RESPONSIVE: Force desktop menu into one row ===== */
//         @media (min-width: 1101px) and (max-width: 1350px) {
//           .rcl-nav {
//             padding: 0 24px;
//           }
//           .rcl-desktop-nav {
//             gap: 18px;
//           }
//           .rcl-nav-btn {
//             font-size: 0.7rem;
//           }
//           .rcl-btn-cta {
//             padding: 6px 16px;
//             font-size: 0.7rem;
//           }
//           .dropdown-content a {
//             font-size: 0.72rem;
//             padding: 0.5rem 1rem;
//           }
//         }

//         @media (min-width: 1101px) and (max-width: 1200px) {
//           .rcl-nav {
//             padding: 0 16px;
//           }
//           .rcl-desktop-nav {
//             gap: 12px;
//           }
//           .rcl-nav-btn {
//             font-size: 0.65rem;
//           }
//           .rcl-btn-cta {
//             padding: 5px 12px;
//             font-size: 0.65rem;
//           }
//         }

//         /* Breakpoints for mobile */
//         @media (max-width: 1100px) {
//           .rcl-desktop-nav { display: none !important; }
//           .rcl-hamburger { display: flex; }
//           .rcl-nav { padding: 0 20px; }
//         }
//         @media (min-width: 1101px) {
//           .rcl-mobile-nav { display: none; }
//           .rcl-desktop-nav { display: flex !important; }
//         }
//         @media (max-width: 768px) {
//           .rcl-nav {
//             height: 56px;
//             padding: 0 16px;
//           }
//           .rcl-logo-img { height: 28px; }
//           .rcl-mobile-nav {
//             top: 56px;
//             max-height: calc(100vh - 56px);
//           }
//           .rcl-mobile-btn { font-size: 0.9rem; padding: 12px 0; }
//           .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
//           .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
//         }
//         @media (max-width: 480px) {
//           .rcl-nav { padding: 0 14px; }
//           .rcl-logo-img { height: 24px; }
//           .rcl-mobile-links { padding: 16px 18px; }
//           .rcl-mobile-btn { font-size: 0.85rem; padding: 11px 0; }
//           .rcl-mobile-cta { padding: 11px 16px; font-size: 0.85rem; }
//           .rcl-hamburger { width: 24px; height: 18px; }
//           .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(8px) rotate(45deg); }
//           .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
//         }
//       `}</style>

//       <nav className={`rcl-nav${hasShadow ? ' shadow' : ''}`}>
//         <Link to="/" className="rcl-logo" aria-label="Go to home">
//           <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="rcl-logo-img" />
//         </Link>

//         {/* Desktop navigation - now always in one row */}
//         <div className="rcl-desktop-nav">
//           <Link to="/" className="rcl-nav-btn">Home</Link>
//           <Link to="/aboutus" className="rcl-nav-btn">About</Link>

//           {/* Services dropdown */}
//           <div className="dropdown">
//             <button className="rcl-nav-btn">
//               Services
//               <span className="dropdown-arrow">▼</span>
//             </button>
//             <div className="dropdown-content">
//               <Link to="/services/air-import">Air Imports & Exports</Link>
//               <Link to="/services/ocean-import">Ocean Imports & Exports</Link>
//               <Link to="/services/consolidation-services">Consolidation Services</Link>
//               <Link to="/services/customs-clearance">Customs Clearance</Link>
//             </div>
//           </div>

//           {/* Industries dropdown */}
//           <div className="dropdown">
//             <button className="rcl-nav-btn">
//               Industries
//               <span className="dropdown-arrow">▼</span>
//             </button>
//             <div className="dropdown-content">
//               <Link to="/industries/automotive">Automotive</Link>
//               <Link to="/industries/engineering">Engineering</Link>
//               <Link to="/industries/luxury-goods">Luxury Goods</Link>
//               <Link to="/industries/project-logistics">Project Logistics</Link>
//               <Link to="/industries/e-commerce">Retail/E-Commerce</Link>
//               <Link to="/industries/cold-chain">Cold Chain</Link>
//               <Link to="/industries/aviation-defense">Aviation & Defense</Link>
//               <Link to="/industries/hi-tech">Hi-Tech</Link>
//               <Link to="/industries/pharma-healthcare">Pharma & Healthcare</Link>
//               <Link to="/industries/renewable-energy">Renewable Energy</Link>
//               <Link to="/industries/space-avionics">Space & Avionics</Link>
//               <Link to="/industries/industrial-msme">Industrial & MSME</Link>
//             </div>
//           </div>

//           <Link to="/esg" className="rcl-nav-btn">ESG</Link>
//           <Link to="/clients" className="rcl-nav-btn">Client</Link>
//           <Link to="/officespage" className="rcl-nav-btn">Offices</Link>
//           <Link to="/contact" className="rcl-btn-cta">Get in Touch</Link>
//         </div>

//         {/* Hamburger button */}
//         <button
//           ref={menuButtonRef}
//           className={`rcl-hamburger${isMobileMenuOpen ? ' active' : ''}`}
//           onClick={toggleMobileMenu}
//           aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
//         >
//           <span className="rcl-hline"></span>
//           <span className="rcl-hline"></span>
//           <span className="rcl-hline"></span>
//         </button>
//       </nav>

//       {/* Mobile menu panel */}
//       <div
//         ref={mobileMenuRef}
//         className={`rcl-mobile-nav${isMobileMenuOpen ? ' open' : ''}`}
//         aria-hidden={!isMobileMenuOpen}
//       >
//         <div className="rcl-mobile-links">
//           <Link to="/" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//           <Link to="/aboutus" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>About</Link>

//           {/* Mobile Services dropdown */}
//           <div>
//             <button onClick={toggleMobileServices} className="rcl-mobile-btn" style={{ justifyContent: 'space-between' }}>
//               Services <span className={`arrow ${isMobileServicesOpen ? 'open' : ''}`}>▼</span>
//             </button>
//             {isMobileServicesOpen && (
//               <div className="mobile-submenu">
//                 <Link to="/services/air-import" onClick={() => setIsMobileMenuOpen(false)}>Air Imports & Exports</Link>
//                 <Link to="/services/ocean-import" onClick={() => setIsMobileMenuOpen(false)}>Ocean Imports & Exports</Link>
//                 <Link to="/services/consolidation-services" onClick={() => setIsMobileMenuOpen(false)}>Consolidation Services</Link>
//                 <Link to="/services/customs-clearance" onClick={() => setIsMobileMenuOpen(false)}>Customs Clearance</Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile Industries dropdown */}
//           <div>
//             <button onClick={toggleMobileIndustries} className="rcl-mobile-btn" style={{ justifyContent: 'space-between' }}>
//               Industries <span className={`arrow ${isMobileIndustriesOpen ? 'open' : ''}`}>▼</span>
//             </button>
//             {isMobileIndustriesOpen && (
//               <div className="mobile-submenu">
//                 <Link to="/industries/automotive" onClick={() => setIsMobileMenuOpen(false)}>Automotive</Link>
//                 <Link to="/industries/engineering" onClick={() => setIsMobileMenuOpen(false)}>Engineering</Link>
//                 <Link to="/industries/luxury-goods" onClick={() => setIsMobileMenuOpen(false)}>Luxury Goods</Link>
//                 <Link to="/industries/project-logistics" onClick={() => setIsMobileMenuOpen(false)}>Project Logistics</Link>
//                 <Link to="/industries/e-commerce" onClick={() => setIsMobileMenuOpen(false)}>Retail/E-Commerce</Link>
//                 <Link to="/industries/cold-chain" onClick={() => setIsMobileMenuOpen(false)}>Cold Chain</Link>
//                 <Link to="/industries/aviation-defense" onClick={() => setIsMobileMenuOpen(false)}>Aviation & Defense</Link>
//                 <Link to="/industries/hi-tech" onClick={() => setIsMobileMenuOpen(false)}>Hi-Tech</Link>
//                 <Link to="/industries/pharma-healthcare" onClick={() => setIsMobileMenuOpen(false)}>Pharma & Healthcare</Link>
//                 <Link to="/industries/renewable-energy" onClick={() => setIsMobileMenuOpen(false)}>Renewable Energy</Link>
//                 <Link to="/industries/space-avionics" onClick={() => setIsMobileMenuOpen(false)}>Space & Avionics</Link>
//                 <Link to="/industries/industrial-msme" onClick={() => setIsMobileMenuOpen(false)}>Industrial & MSME</Link>
//               </div>
//             )}
//           </div>

//           <Link to="/esg" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>ESG</Link>
//           <Link to="/clients" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Client</Link>
//           <Link to="/officespage" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Offices</Link>
//           <Link to="/contact" className="rcl-mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [hasShadow, setHasShadow] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const mobileMenuRef = useRef(null);
//   const menuButtonRef = useRef(null);

//   // Scroll shadow
//   useEffect(() => {
//     const handleScroll = () => {
//       setHasShadow(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu on outside click / resize
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isMobileMenuOpen &&
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target) &&
//         menuButtonRef.current &&
//         !menuButtonRef.current.contains(event.target)
//       ) {
//         setIsMobileMenuOpen(false);
//         setIsMobileIndustriesOpen(false);
//         setIsMobileServicesOpen(false);
//       }
//     };
//     const handleResize = () => {
//       if (window.innerWidth > 1100) {
//         setIsMobileMenuOpen(false);
//         setIsMobileIndustriesOpen(false);
//         setIsMobileServicesOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     window.addEventListener('resize', handleResize);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [isMobileMenuOpen]);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(prev => !prev);
//     setIsMobileIndustriesOpen(false);
//     setIsMobileServicesOpen(false);
//   };

//   const toggleMobileIndustries = (e) => {
//     e.preventDefault();
//     setIsMobileIndustriesOpen(prev => !prev);
//     if (isMobileServicesOpen) setIsMobileServicesOpen(false);
//   };

//   const toggleMobileServices = (e) => {
//     e.preventDefault();
//     setIsMobileServicesOpen(prev => !prev);
//     if (isMobileIndustriesOpen) setIsMobileIndustriesOpen(false);
//   };

//   return (
//     <>
//       <style>{`
//         .rcl-nav {
//           position: fixed;
//           top: 0; left: 0; right: 0;
//           z-index: 500;
//           height: 62px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 48px;
//           background: rgba(255,255,255,0.97);
//           border-bottom: 1px solid var(--bd, #d8e4ed);
//           transition: box-shadow 0.3s, transform 0.35s;
//           box-sizing: border-box;
//         }


//         .rcl-nav.shadow { box-shadow: 0 2px 24px rgba(11,29,58,0.07); }

//         .rcl-logo {
//           display: flex;
//           align-items: center;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           flex-shrink: 0;
//           text-decoration: none;
//           max-width: 200px;
//         }
//         .rcl-logo-img {
//           height: 34px;
//           width: auto;
//           display: block;
//           object-fit: contain;
//         }

//         .rcl-desktop-nav {
//           display: flex;
//           align-items: center;
//           gap: 28px;
//           flex-wrap: nowrap;
//           flex-shrink: 0;
//           min-width: 0;
//         }

//         .rcl-nav-btn {
//           font-size: 0.78rem;
//           font-weight: 600;
//           color: var(--ts, #3a6680);
//           text-decoration: none;
//           letter-spacing: 0.01em;
//           transition: color 0.2s;
//           position: relative;
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           font-family: inherit;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           white-space: nowrap;
//           flex-shrink: 0;
//         }
//         .rcl-nav-btn::after {
//           content: '';
//           position: absolute;
//           bottom: -4px; left: 0;
//           width: 0; height: 1.5px;
//           background: var(--g3, #8cb27f);
//           border-radius: 2px;
//           transition: width 0.25s;
//         }
//         .rcl-nav-btn:hover { color: var(--n, #093e5d); }
//         .rcl-nav-btn:hover::after { width: 100%; }

//         .dropdown {
//           position: relative;
//           z-index: 100;
//           flex-shrink: 0;
//         }
//         .dropdown-content {
//           position: absolute;
//           top:100%;
//           left: 0;
//           transform: translateX(-50%);
//           background: white;
//           min-width: 260px;
//           box-shadow: 0 8px 20px rgba(0,0,0,0.12);
//           border-radius: 8px;
//           padding: 0.5rem 0;
//           opacity: 0;
//           visibility: hidden;
//           transition: all 0.25s ease;
//           z-index: 1000;
//           border: 1px solid var(--bd, #d8e4ed);
//           transform: none;  
//         }
//         .dropdown:hover .dropdown-content {
//           opacity: 1;
//           visibility: visible;
//           transform: translateY(0);
//         }
//         .dropdown-heading {
//           padding: 0.6rem 1.2rem;
//           font-size: 0.75rem;
//           font-weight: 700;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           color: #6a9b5a;
//           border-bottom: 1px solid #eef2f6;
//           margin-bottom: 0.3rem;
//         }
//         .dropdown-content a {
//           display: block;
//           padding: 0.6rem 1.2rem;
//           color: var(--ts, #3a6680);
//           text-decoration: none;
//           font-size: 0.78rem;
//           font-weight: 500;
//           transition: background 0.2s, color 0.2s;
//           white-space: nowrap;
//         }
//         .dropdown-content a:hover {
//           background: #f5f7fa;
//           color: var(--n, #093e5d);
//         }

//         .dropdown-arrow {
//           font-size: 0.8rem;
//           transition: transform 0.2s;
//           display: inline-block;
//         }
//         .dropdown:hover .dropdown-arrow {
//           transform: rotate(180deg);
//         }

//         .rcl-btn-cta {
//           background: var(--n, #093e5d) !important;
//           color: #fff !important;
//           padding: 8px 20px;
//           border-radius: 4px;
//           font-size: 0.78rem;
//           font-weight: 700;
//           text-decoration: none;
//           display: inline-block;
//           transition: background 0.2s;
//           border: none;
//           cursor: pointer;
//           font-family: inherit;
//           white-space: nowrap;
//           flex-shrink: 0;
//         }
//         .rcl-btn-cta:hover { background: var(--g, #6a9b5a) !important; }
//         .rcl-btn-cta::after { display: none !important; }

//         /* Hamburger */
//         .rcl-hamburger {
//           display: none;
//           flex-direction: column;
//           justify-content: space-between;
//           width: 28px;
//           height: 20px;
//           background: transparent;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           z-index: 10;
//           flex-shrink: 0;
//         }
//         .rcl-hline {
//           width: 100%;
//           height: 2px;
//           background: var(--ts, #3a6680);
//           border-radius: 2px;
//           transition: all 0.3s ease-in-out;
//           transform-origin: center;
//           display: block;
//         }
//         .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
//         .rcl-hamburger.active .rcl-hline:nth-child(2) { opacity: 0; transform: scaleX(0); }
//         .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

//         /* Mobile nav panel */
//         .rcl-mobile-nav {
//           position: fixed;
//           top: 62px; left: 0; right: 0;
//           background: rgba(255,255,255,0.98);
//           backdrop-filter: blur(10px);
//           box-shadow: 0 4px 20px rgba(0,0,0,0.1);
//           transform: translateY(-110%);
//           opacity: 0;
//           transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
//           z-index: 499;
//           pointer-events: none;
//           max-height: calc(100vh - 62px);
//           overflow-y: auto;
//           width: 100%;
//           box-sizing: border-box;
//         }
//         .rcl-mobile-nav.open {
//           transform: translateY(0);
//           opacity: 1;
//           pointer-events: auto;
//         }
//         .rcl-mobile-links {
//           display: flex;
//           flex-direction: column;
//           padding: 20px 24px;
//           gap: 0;
//         }
//         .rcl-mobile-btn {
//           background: none;
//           border: none;
//           font-size: 0.97rem;
//           font-weight: 600;
//           color: var(--ts, #3a6680);
//           padding: 14px 0;
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.2s;
//           border-bottom: 1px solid var(--bd, #d8e4ed);
//           width: 100%;
//           font-family: inherit;
//           letter-spacing: 0.01em;
//           text-decoration: none;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }
//         .rcl-mobile-btn:last-of-type { border-bottom: none; }
//         .rcl-mobile-btn:hover { color: var(--n, #093e5d); padding-left: 8px; }
//         .mobile-submenu {
//           padding-left: 1.5rem;
//           display: flex;
//           flex-direction: column;
//         }
//         .mobile-submenu a {
//           padding: 10px 0;
//           color: var(--ts, #3a6680);
//           text-decoration: none;
//           font-size: 0.85rem;
//           border-bottom: none;
//         }
//         .mobile-submenu a:hover {
//           color: var(--n, #093e5d);
//           padding-left: 4px;
//         }
//         .arrow {
//           font-size: 0.8rem;
//           transition: transform 0.2s;
//           display: inline-block;
//         }
//         .arrow.open {
//           transform: rotate(180deg);
//         }
//         .rcl-mobile-cta {
//           display: block;
//           background: var(--n, #093e5d);
//           color: #fff;
//           padding: 13px 20px;
//           border-radius: 4px;
//           font-size: 0.9rem;
//           font-weight: 700;
//           text-align: center;
//           text-decoration: none;
//           margin-top: 16px;
//           transition: background 0.2s;
//           font-family: inherit;
//         }
//         .rcl-mobile-cta:hover { background: var(--g, #6a9b5a); }

//         /* ===== DESKTOP RESPONSIVE – KEEP MENU IN ONE ROW ===== */
//         @media (min-width: 1101px) and (max-width: 1350px) {
//           .rcl-nav {
//             padding: 0 24px;
//           }
//           .rcl-desktop-nav {
//             gap: 12px;
//           }
//           .rcl-nav-btn {
//             font-size: 0.65rem;
//           }
//           .rcl-btn-cta {
//             padding: 5px 12px;
//             font-size: 0.65rem;
//           }
//           .dropdown-content {
//             min-width: 200px;
//           }
//           .dropdown-content a {
//             font-size: 0.68rem;
//             padding: 0.5rem 1rem;
//           }
//           .rcl-logo {
//             max-width: 160px;
//           }
//           .rcl-logo-img {
//             height: 30px;
//           }
//         }

//         /* Extra tight for the narrowest desktops (just above the breakpoint) */
//         @media (min-width: 1101px) and (max-width: 1180px) {
//           .rcl-desktop-nav {
//             gap: 6px;
//           }
//           .rcl-nav-btn {
//             font-size: 0.58rem;
//           }
//           .rcl-btn-cta {
//             padding: 4px 8px;
//             font-size: 0.58rem;
//           }
//         }

//         /* Prevents dropdown from going off‑screen on narrower desktop screens */
//         @media (min-width: 1101px) and (max-width: 1300px) {
//           .dropdown-content {
//             left: 0;
//             transform: none;
//             min-width: 200px;
//           }
//           .dropdown:hover .dropdown-content {
//             transform: translateY(0);
//           }
//         }

//         @media (max-width: 1100px) {
//           .rcl-desktop-nav { display: none !important; }
//           .rcl-hamburger { display: flex; }
//           .rcl-nav { padding: 0 20px; }
//         }
//         @media (min-width: 1101px) {
//           .rcl-mobile-nav { display: none; }
//           .rcl-desktop-nav { display: flex !important; }
//         }
//         @media (max-width: 768px) {
//           .rcl-nav {
//             height: 56px;
//             padding: 0 16px;
//           }
//           .rcl-logo-img { height: 28px; }
//           .rcl-mobile-nav {
//             top: 56px;
//             max-height: calc(100vh - 56px);
//           }
//           .rcl-mobile-btn { font-size: 0.9rem; padding: 12px 0; }
//           .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
//           .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
//         }
//         @media (max-width: 480px) {
//           .rcl-nav { padding: 0 14px; }
//           .rcl-logo-img { height: 24px; }
//           .rcl-mobile-links { padding: 16px 18px; }
//           .rcl-mobile-btn { font-size: 0.85rem; padding: 11px 0; }
//           .rcl-mobile-cta { padding: 11px 16px; font-size: 0.85rem; }
//           .rcl-hamburger { width: 24px; height: 18px; }
//           .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(8px) rotate(45deg); }
//           .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
//         }
//       `}</style>

//       <nav className={`rcl-nav${hasShadow ? ' shadow' : ''}`}>
//         <Link to="/" className="rcl-logo">
//           <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="rcl-logo-img" />
//         </Link>

//         <div className="rcl-desktop-nav">
//           <Link to="/" className="rcl-nav-btn">Home</Link>
//           <Link to="/aboutus" className="rcl-nav-btn">About</Link>

//           <div className="dropdown">
//             <button className="rcl-nav-btn">
//               Services
//               <span className="dropdown-arrow">⌵</span>
//             </button>
//             <div className="dropdown-content">
//               <Link to="/services/air-import">Air Imports & Exports</Link>
//               <Link to="/services/ocean-import">Ocean Imports & Exports</Link>
//               <Link to="/services/consolidation-services">Consolidation Services</Link>
//               <Link to="/services/customs-clearance">Customs Clearance</Link>
//             </div>
//           </div>

//           <div className="dropdown">
//             <button className="rcl-nav-btn">
//               Industries
//               <span className="dropdown-arrow">⌵</span>
//             </button>
//             <div className="dropdown-content">
//               <Link to="/industries/automotive">Automotive</Link>
//               <Link to="/industries/engineering">Engineering</Link>
//               <Link to="/industries/luxury-goods">Luxury Goods</Link>
//               <Link to="/industries/project-logistics">Project Logistics</Link>
//               <Link to="/industries/e-commerce">Retail/E-Commerce</Link>
//               <Link to="/industries/cold-chain">Cold Chain</Link>
//               <Link to="/industries/aviation-defense">Aviation & Defense</Link>
//               <Link to="/industries/hi-tech">Hi-Tech</Link>
//               <Link to="/industries/pharma-healthcare">Pharma & Healthcare</Link>
//               <Link to="/industries/renewable-energy">Renewable Energy</Link>
//               <Link to="/industries/space-avionics">Space & Avionics</Link>
//               <Link to="/industries/industrial-msme">Industrial & MSME</Link>
//             </div>
//           </div>

//           <Link to="/esg" className="rcl-nav-btn">ESG</Link>
//           <Link to="/clients" className="rcl-nav-btn">Client</Link>
//           <Link to="/officespage" className="rcl-nav-btn">Offices</Link>
//           <Link to="/contact" className="rcl-btn-cta">Get in Touch</Link>
//         </div>

//         <button
//           ref={menuButtonRef}
//           className={`rcl-hamburger${isMobileMenuOpen ? ' active' : ''}`}
//           onClick={toggleMobileMenu}
//           aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
//         >
//           <span className="rcl-hline"></span>
//           <span className="rcl-hline"></span>
//           <span className="rcl-hline"></span>
//         </button>
//       </nav>

//       <div
//         ref={mobileMenuRef}
//         className={`rcl-mobile-nav${isMobileMenuOpen ? ' open' : ''}`}
//         aria-hidden={!isMobileMenuOpen}
//       >
//         <div className="rcl-mobile-links">
//           <Link to="/" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//           <Link to="/aboutus" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>About</Link>

//           <div>
//             <button onClick={toggleMobileServices} className="rcl-mobile-btn" style={{ justifyContent: 'space-between' }}>
//               Services <span className={`arrow ${isMobileServicesOpen ? 'open' : ''}`}>⌵</span>
//             </button>
//             {isMobileServicesOpen && (
//               <div className="mobile-submenu">
//                 <Link to="/services/air-import" onClick={() => setIsMobileMenuOpen(false)}>Air Imports & Exports</Link>
//                 <Link to="/services/ocean-import" onClick={() => setIsMobileMenuOpen(false)}>Ocean Imports & Exports</Link>
//                 <Link to="/services/consolidation-services" onClick={() => setIsMobileMenuOpen(false)}>Consolidation Services</Link>
//                 <Link to="/services/customs-clearance" onClick={() => setIsMobileMenuOpen(false)}>Customs Clearance</Link>
//               </div>
//             )}
//           </div>

//           <div>
//             <button onClick={toggleMobileIndustries} className="rcl-mobile-btn" style={{ justifyContent: 'space-between' }}>
//               Industries <span className={`arrow ${isMobileIndustriesOpen ? 'open' : ''}`}>⌵</span>
//             </button>
//             {isMobileIndustriesOpen && (
//               <div className="mobile-submenu">
//                 <Link to="/industries/automotive" onClick={() => setIsMobileMenuOpen(false)}>Automotive</Link>
//                 <Link to="/industries/engineering" onClick={() => setIsMobileMenuOpen(false)}>Engineering</Link>
//                 <Link to="/industries/luxury-goods" onClick={() => setIsMobileMenuOpen(false)}>Luxury Goods</Link>
//                 <Link to="/industries/project-logistics" onClick={() => setIsMobileMenuOpen(false)}>Project Logistics</Link>
//                 <Link to="/industries/e-commerce" onClick={() => setIsMobileMenuOpen(false)}>Retail/E-Commerce</Link>
//                 <Link to="/industries/cold-chain" onClick={() => setIsMobileMenuOpen(false)}>Cold Chain</Link>
//                 <Link to="/industries/aviation-defense" onClick={() => setIsMobileMenuOpen(false)}>Aviation & Defense</Link>
//                 <Link to="/industries/hi-tech" onClick={() => setIsMobileMenuOpen(false)}>Hi-Tech</Link>
//                 <Link to="/industries/pharma-healthcare" onClick={() => setIsMobileMenuOpen(false)}>Pharma & Healthcare</Link>
//                 <Link to="/industries/renewable-energy" onClick={() => setIsMobileMenuOpen(false)}>Renewable Energy</Link>
//                 <Link to="/industries/space-avionics" onClick={() => setIsMobileMenuOpen(false)}>Space & Avionics</Link>
//                 <Link to="/industries/industrial-msme" onClick={() => setIsMobileMenuOpen(false)}>Industrial & MSME</Link>
//               </div>
//             )}
//           </div>

//           <Link to="/esg" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>ESG</Link>
//           <Link to="/clients" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Client</Link>
//           <Link to="/officespage" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Offices</Link>
//           <Link to="/contact" className="rcl-mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on outside click / resize
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setIsMobileIndustriesOpen(false);
        setIsMobileServicesOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setIsMobileMenuOpen(false);
        setIsMobileIndustriesOpen(false);
        setIsMobileServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setIsMobileIndustriesOpen(false);
    setIsMobileServicesOpen(false);
  };

  const toggleMobileIndustries = (e) => {
    e.preventDefault();
    setIsMobileIndustriesOpen(prev => !prev);
    if (isMobileServicesOpen) setIsMobileServicesOpen(false);
  };

  const toggleMobileServices = (e) => {
    e.preventDefault();
    setIsMobileServicesOpen(prev => !prev);
    if (isMobileIndustriesOpen) setIsMobileIndustriesOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .rcl-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 500;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          background: rgba(255,255,255,0.97);
          border-bottom: 1px solid var(--bd, #d8e4ed);
          transition: box-shadow 0.3s, transform 0.35s;
          box-sizing: border-box;
        }

        .rcl-nav.shadow { box-shadow: 0 2px 24px rgba(11,29,58,0.07); }

        .rcl-logo {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
          text-decoration: none;
          max-width: 200px;
        }
        .rcl-logo-img {
          height: 34px;
          width: auto;
          display: block;
          object-fit: contain;
        }

        .rcl-desktop-nav {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: nowrap;
  flex-shrink: 0;
  min-width: 0;
  height: 100%;
}

        .rcl-nav-btn {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--ts, #3a6680);
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: color 0.2s;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;                  /* ← reset browser button margin */
  font-family: 'Poppins', sans-serif;
  display: inline-flex;
  align-items: center;
  line-height: 1;             /* ← prevents baseline drift */
  gap: 8px;
  white-space: nowrap;
  flex-shrink: 0;
   overflow: visible; 
}
        .rcl-nav-btn::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 1.5px;
          background: var(--g3, #8cb27f);
          border-radius: 2px;
          transition: width 0.25s;
        }
        .dropdown:hover .rcl-nav-btn::after { width: 100%; } 

       .dropdown {
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  display: flex;             
  align-items: center;        
  height: 100%;              
}

.rcl-nav-btn.active::after {
  width: 100%;
}
        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          min-width: 100px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
          border-radius: 8px;
          padding: 0.5rem 0;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease;
          z-index: 1000;
          border: 1px solid var(--bd, #d8e4ed);
          transform: none;   
        }
        .dropdown:hover .dropdown-content {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-content a {
          display: block;
          padding: 0.6rem 1.2rem;
          color: var(--ts, #3a6680);
          text-decoration: none;
          font-size: 0.78rem;
          font-weight: 500;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .dropdown-content a:hover {
          background: #f5f7fa;
          color: var(--n, #093e5d);
        }

        /* No arrow in desktop, so we hide the class */
        .dropdown-arrow {
          display: none;
        }

        .rcl-btn-cta {
          background: var(--n, #093e5d) !important;
          color: #fff !important;
          padding: 8px 20px;
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s;
          border: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .rcl-btn-cta:hover { background: var(--g, #6a9b5a) !important; }
        .rcl-btn-cta::after { display: none !important; }

        /* Hamburger */
        .rcl-hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
          flex-shrink: 0;
        }
        .rcl-hline {
          width: 100%;
          height: 2px;
          background: var(--ts, #3a6680);
          border-radius: 2px;
          transition: all 0.3s ease-in-out;
          transform-origin: center;
          display: block;
        }
        .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
        .rcl-hamburger.active .rcl-hline:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

        /* Mobile nav panel */
        .rcl-mobile-nav {
          position: fixed;
          top: 62px; left: 0; right: 0;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transform: translateY(-110%);
          opacity: 0;
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
          z-index: 499;
          pointer-events: none;
          max-height: calc(100vh - 62px);
          overflow-y: auto;
          width: 100%;
          box-sizing: border-box;
        }
        .rcl-mobile-nav.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        .rcl-mobile-links {
          display: flex;
          flex-direction: column;
          padding: 20px 24px;
          gap: 0;
        }
        .rcl-mobile-btn {
          background: none;
          border: none;
          font-size: 0.97rem;
          font-weight: 600;
          color: var(--ts, #3a6680);
          padding: 14px 0;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
          border-bottom: 1px solid var(--bd, #d8e4ed);
          width: 100%;
          font-family: 'Poppins', sans-serif;  
          letter-spacing: 0.01em;
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .rcl-mobile-btn:last-of-type { border-bottom: none; }
        .rcl-mobile-btn:hover { color: var(--n, #093e5d); padding-left: 8px; }
        .mobile-submenu {
          padding-left: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .mobile-submenu a {
          padding: 10px 0;
          color: var(--ts, #3a6680);
          text-decoration: none;
          font-size: 0.85rem;
          border-bottom: none;
        }
        .mobile-submenu a:hover {
          color: var(--n, #093e5d);
          padding-left: 4px;
        }
        .arrow {
          font-size: 0.8rem;
          transition: transform 0.2s;
          display: inline-block;
        }
        .arrow.open {
          transform: rotate(180deg);
        }
        .rcl-mobile-cta {
          display: block;
          background: var(--n, #093e5d);
          color: #fff;
          padding: 13px 20px;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          margin-top: 16px;
          transition: background 0.2s;
          font-family: 'Poppins', sans-serif;  
        }
        .rcl-mobile-cta:hover { background: var(--g, #6a9b5a); }

        /* ===== DESKTOP RESPONSIVE – KEEP MENU IN ONE ROW ===== */
        @media (min-width: 1101px) and (max-width: 1350px) {
          .rcl-nav {
            padding: 0 24px;
          }
          .rcl-desktop-nav {
            gap: 12px;
          }
          .rcl-nav-btn {
            font-size: 0.65rem;
          }
          .rcl-btn-cta {
            padding: 5px 12px;
            font-size: 0.65rem;
          }
          .dropdown-content {
            min-width: 180px;
          }
          .dropdown-content a {
            font-size: 0.68rem;
            padding: 0.5rem 1rem;
          }
          .rcl-logo {
            max-width: 160px;
          }
          .rcl-logo-img {
            height: 30px;
          }
        }

        /* Extra tight for the narrowest desktops (just above the breakpoint) */
        @media (min-width: 1101px) and (max-width: 1180px) {
          .rcl-desktop-nav {
            gap: 6px;
          }
          .rcl-nav-btn {
            font-size: 0.58rem;
          }
          .rcl-btn-cta {
            padding: 4px 8px;
            font-size: 0.58rem;
          }
        }

        /* Prevents dropdown from going off‑screen on narrower desktop screens */
        @media (min-width: 1101px) and (max-width: 1300px) {
          .dropdown-content {
            left: 0;
            transform: none;
            min-width: 200px;
          }
        }

        @media (max-width: 1100px) {
          .rcl-desktop-nav { display: none !important; }
          .rcl-hamburger { display: flex; }
          .rcl-nav { padding: 0 20px; }
          .dropdown-arrow { display: inline-block; } /* show arrows in mobile */
        }
        @media (min-width: 1101px) {
          .rcl-mobile-nav { display: none; }
          .rcl-desktop-nav { display: flex !important; }
        }
        @media (max-width: 768px) {
          .rcl-nav {
            height: 56px;
            padding: 0 16px;
          }
          .rcl-logo-img { height: 28px; }
          .rcl-mobile-nav {
            top: 56px;
            max-height: calc(100vh - 56px);
          }
          .rcl-mobile-btn { font-size: 0.9rem; padding: 12px 0; }
          .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
          .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
        }
        @media (max-width: 480px) {
          .rcl-nav { padding: 0 14px; }
          .rcl-logo-img { height: 24px; }
          .rcl-mobile-links { padding: 16px 18px; }
          .rcl-mobile-btn { font-size: 0.85rem; padding: 11px 0; }
          .rcl-mobile-cta { padding: 11px 16px; font-size: 0.85rem; }
          .rcl-hamburger { width: 24px; height: 18px; }
          .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(8px) rotate(45deg); }
          .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
        }
      `}</style>

      <nav className={`rcl-nav${hasShadow ? ' shadow' : ''}`}>
        <Link to="/" className="rcl-logo">
          <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="rcl-logo-img" />
        </Link>

        <div className="rcl-desktop-nav">
          <NavLink to="/" className="rcl-nav-btn">Home</NavLink>
          <NavLink to="/aboutus" className="rcl-nav-btn">About</NavLink>

          <div className="dropdown">
            <button className="rcl-nav-btn">
              Services
            </button>
            <div className="dropdown-content">
              <Link to="/services/air-import">Air Imports & Exports</Link>
              <Link to="/services/ocean-import">Ocean Imports & Exports</Link>
              <Link to="/services/consolidation-services">Consolidation Services</Link>
              <Link to="/services/customs-clearance">Customs Clearance</Link>
            </div>
          </div>

          <div className="dropdown">
            <button className="rcl-nav-btn">
              Industries
            </button>
            <div className="dropdown-content">
              <Link to="/industries/automotive">Automotive</Link>
              <Link to="/industries/engineering">Engineering</Link>
              <Link to="/industries/luxury-goods">Luxury Goods</Link>
              <Link to="/industries/project-logistics">Project Logistics</Link>
              <Link to="/industries/e-commerce">Retail/E-Commerce</Link>
              <Link to="/industries/cold-chain">Cold Chain</Link>
              <Link to="/industries/aviation-defense">Aviation & Defense</Link>
              <Link to="/industries/hi-tech">Hi-Tech</Link>
              <Link to="/industries/pharma-healthcare">Pharma & Healthcare</Link>
              <Link to="/industries/renewable-energy">Renewable Energy</Link>
              <Link to="/industries/space-avionics">Space & Avionics</Link>
              <Link to="/industries/industrial-msme">Industrial & MSME</Link>
            </div>
          </div>

          <NavLink to="/esg" className="rcl-nav-btn" end>ESG</NavLink>
<NavLink to="/clients" className="rcl-nav-btn" end>Client</NavLink>
<NavLink to="/officespage" className="rcl-nav-btn" end>Offices</NavLink>
          <Link to="/contact" className="rcl-btn-cta">Get in Touch</Link>
        </div>

        <button
          ref={menuButtonRef}
          className={`rcl-hamburger${isMobileMenuOpen ? ' active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="rcl-hline"></span>
          <span className="rcl-hline"></span>
          <span className="rcl-hline"></span>
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className={`rcl-mobile-nav${isMobileMenuOpen ? ' open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="rcl-mobile-links">
          <Link to="/" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/aboutus" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>About</Link>

          <div>
            <button onClick={toggleMobileServices} className="rcl-mobile-btn" style={{ justifyContent: 'space-between' }}>
              Services <span className={`arrow ${isMobileServicesOpen ? 'open' : ''}`}>⌵</span>
            </button>
            {isMobileServicesOpen && (
              <div className="mobile-submenu">
                <Link to="/services/air-import" onClick={() => setIsMobileMenuOpen(false)}>Air Imports & Exports</Link>
                <Link to="/services/ocean-import" onClick={() => setIsMobileMenuOpen(false)}>Ocean Imports & Exports</Link>
                <Link to="/services/consolidation-services" onClick={() => setIsMobileMenuOpen(false)}>Consolidation Services</Link>
                <Link to="/services/customs-clearance" onClick={() => setIsMobileMenuOpen(false)}>Customs Clearance</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={toggleMobileIndustries} className="rcl-mobile-btn" style={{ justifyContent: 'space-between' }}>
              Industries <span className={`arrow ${isMobileIndustriesOpen ? 'open' : ''}`}>⌵</span>
            </button>
            {isMobileIndustriesOpen && (
              <div className="mobile-submenu">
                <Link to="/industries/automotive" onClick={() => setIsMobileMenuOpen(false)}>Automotive</Link>
                <Link to="/industries/engineering" onClick={() => setIsMobileMenuOpen(false)}>Engineering</Link>
                <Link to="/industries/luxury-goods" onClick={() => setIsMobileMenuOpen(false)}>Luxury Goods</Link>
                <Link to="/industries/project-logistics" onClick={() => setIsMobileMenuOpen(false)}>Project Logistics</Link>
                <Link to="/industries/e-commerce" onClick={() => setIsMobileMenuOpen(false)}>Retail/E-Commerce</Link>
                <Link to="/industries/cold-chain" onClick={() => setIsMobileMenuOpen(false)}>Cold Chain</Link>
                <Link to="/industries/aviation-defense" onClick={() => setIsMobileMenuOpen(false)}>Aviation & Defense</Link>
                <Link to="/industries/hi-tech" onClick={() => setIsMobileMenuOpen(false)}>Hi-Tech</Link>
                <Link to="/industries/pharma-healthcare" onClick={() => setIsMobileMenuOpen(false)}>Pharma & Healthcare</Link>
                <Link to="/industries/renewable-energy" onClick={() => setIsMobileMenuOpen(false)}>Renewable Energy</Link>
                <Link to="/industries/space-avionics" onClick={() => setIsMobileMenuOpen(false)}>Space & Avionics</Link>
                <Link to="/industries/industrial-msme" onClick={() => setIsMobileMenuOpen(false)}>Industrial & MSME</Link>
              </div>
            )}
          </div>

          <Link to="/esg" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>ESG</Link>
          <Link to="/clients" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Client</Link>
          <Link to="/officespage" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Offices</Link>
          <Link to="/contact" className="rcl-mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;