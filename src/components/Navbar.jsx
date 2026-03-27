
// // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // const Navbar = () => {
// // // // // //   const [isHidden, setIsHidden] = useState(false);
// // // // // //   const [hasShadow, setHasShadow] = useState(false);
// // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // //   const lastScrollY = useRef(0);
// // // // // //   const mobileMenuRef = useRef(null);
// // // // // //   const menuButtonRef = useRef(null);

// // // // // //   // Scroll handling effect
// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       const currentScrollY = window.scrollY;
// // // // // //       setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 80);
// // // // // //       setHasShadow(currentScrollY > 10);
// // // // // //       lastScrollY.current = currentScrollY;
// // // // // //     };

// // // // // //     // window.addEventListener('scroll', handleScroll);
// // // // // //     // return () => window.removeEventListener('scroll', handleScroll);
// // // // // //   }, []);

// // // // // //   // Body scroll lock effect
// // // // // //   // useEffect(() => {
// // // // // //   //   if (isMobileMenuOpen) {
// // // // // //   //     document.body.style.overflow = 'hidden';
// // // // // //   //   } else {
// // // // // //   //     document.body.style.overflow = 'unset';
// // // // // //   //   }
// // // // // //   //   return () => {
// // // // // //   //     document.body.style.overflow = 'unset';
// // // // // //   //   };
// // // // // //   // }, [isMobileMenuOpen]);

// // // // // //   // Click outside and resize effect
// // // // // //   useEffect(() => {
// // // // // //     const handleClickOutside = (event) => {
// // // // // //       if (
// // // // // //         isMobileMenuOpen &&
// // // // // //         mobileMenuRef.current &&
// // // // // //         !mobileMenuRef.current.contains(event.target) &&
// // // // // //         menuButtonRef.current &&
// // // // // //         !menuButtonRef.current.contains(event.target)
// // // // // //       ) {
// // // // // //         setIsMobileMenuOpen(false);
// // // // // //       }
// // // // // //     };

// // // // // //     const handleResize = () => {
// // // // // //       if (window.innerWidth > 1100) {
// // // // // //         setIsMobileMenuOpen(false);
// // // // // //       }
// // // // // //     };

// // // // // //     document.addEventListener('mousedown', handleClickOutside);
// // // // // //     window.addEventListener('resize', handleResize);

// // // // // //     return () => {
// // // // // //       document.removeEventListener('mousedown', handleClickOutside);
// // // // // //       window.removeEventListener('resize', handleResize);
// // // // // //     };
// // // // // //   }, [isMobileMenuOpen]);

// // // // // //   // Handle smooth scroll to sections
// // // // // //   const handleNavClick = (e, sectionId) => {
// // // // // //     e.preventDefault();
// // // // // //     setIsMobileMenuOpen(false);
// // // // // //     const element = document.getElementById(sectionId);
// // // // // //     if (element) {
// // // // // //       element.scrollIntoView({ behavior: 'smooth' });
// // // // // //     }
// // // // // //   };

// // // // // //   // Toggle mobile menu
// // // // // //   const toggleMobileMenu = () => {
// // // // // //     setIsMobileMenuOpen(!isMobileMenuOpen);
// // // // // //   };

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* Embedded CSS for the navbar (only affects this component) */}
// // // // // //       <style>{`
// // // // // //         /* Reset / base (already in global, but we include here to be safe) */
// // // // // //         nav {
// // // // // //           position: fixed;
// // // // // //           top: 0;
// // // // // //           left: 0;
// // // // // //           right: 0;
// // // // // //           z-index: 500;
// // // // // //           height: 62px;
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: space-between;
// // // // // //           padding: 0 48px;
// // // // // //           background: rgba(255, 255, 255, 0.97);
// // // // // //           border-bottom: 1px solid var(--bd, #d8e4ed);
// // // // // //           transition: box-shadow 0.3s, transform 0.35s;
// // // // // //         }
// // // // // //         nav.hide {
// // // // // //           transform: translateY(-100%);
// // // // // //         }
// // // // // //         nav.shadow {
// // // // // //           box-shadow: 0 2px 24px rgba(11, 29, 58, 0.07);
// // // // // //         }
// // // // // //         .logo {
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           background: none;
// // // // // //           border: none;
// // // // // //           cursor: pointer;
// // // // // //           padding: 0;
// // // // // //         }
// // // // // //         .logo-img {
// // // // // //           height: 34px;
// // // // // //           width: auto;
// // // // // //           display: block;
// // // // // //           object-fit: contain;
// // // // // //         }
// // // // // //         .nav-links {
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           gap: 28px;
// // // // // //         }
// // // // // //         .nav-links a,
// // // // // //         .nav-link-btn {
// // // // // //           font-size: 0.78rem;
// // // // // //           font-weight: 600;
// // // // // //           color: var(--ts, #3a6680);
// // // // // //           text-decoration: none;
// // // // // //           letter-spacing: 0.01em;
// // // // // //           transition: color 0.2s;
// // // // // //           position: relative;
// // // // // //           background: none;
// // // // // //           border: none;
// // // // // //           cursor: pointer;
// // // // // //           padding: 0;
// // // // // //         }
// // // // // //         .nav-links a::after,
// // // // // //         .nav-link-btn::after {
// // // // // //           content: '';
// // // // // //           position: absolute;
// // // // // //           bottom: -4px;
// // // // // //           left: 0;
// // // // // //           width: 0;
// // // // // //           height: 1.5px;
// // // // // //           background: var(--g3, #8cb27f);
// // // // // //           border-radius: 2px;
// // // // // //           transition: width 0.25s;
// // // // // //         }
// // // // // //         .nav-links a:hover,
// // // // // //         .nav-link-btn:hover {
// // // // // //           color: var(--n, #093e5d);
// // // // // //         }
// // // // // //         .nav-links a:hover::after,
// // // // // //         .nav-link-btn:hover::after {
// // // // // //           width: 100%;
// // // // // //         }
// // // // // //         .btn-nav {
// // // // // //           background: var(--n, #093e5d) !important;
// // // // // //           color: #fff !important;
// // // // // //           padding: 8px 20px !important;
// // // // // //           border-radius: 4px;
// // // // // //           font-weight: 700 !important;
// // // // // //           transition: background 0.2s !important;
// // // // // //         }
// // // // // //         .btn-nav:hover {
// // // // // //           background: var(--g, #6a9b5a) !important;
// // // // // //         }
// // // // // //         .btn-nav::after {
// // // // // //           display: none !important;
// // // // // //         }

// // // // // //         /* Mobile menu button (hamburger) */
// // // // // //         .mobile-menu-btn {
// // // // // //           display: none;
// // // // // //           flex-direction: column;
// // // // // //           justify-content: space-between;
// // // // // //           width: 30px;
// // // // // //           height: 21px;
// // // // // //           background: transparent;
// // // // // //           border: none;
// // // // // //           cursor: pointer;
// // // // // //           padding: 0;
// // // // // //           z-index: 1001;
// // // // // //           position: relative;
// // // // // //         }
// // // // // //         .hamburger-line {
// // // // // //           width: 100%;
// // // // // //           height: 2px;
// // // // // //           background: var(--ts, #3a6680);
// // // // // //           border-radius: 2px;
// // // // // //           transition: all 0.3s ease-in-out;
// // // // // //           transform-origin: center;
// // // // // //         }
// // // // // //         .mobile-menu-btn.active .hamburger-line:nth-child(1) {
// // // // // //           transform: translateY(9.5px) rotate(45deg);
// // // // // //         }
// // // // // //         .mobile-menu-btn.active .hamburger-line:nth-child(2) {
// // // // // //           opacity: 0;
// // // // // //           transform: scaleX(0);
// // // // // //         }
// // // // // //         .mobile-menu-btn.active .hamburger-line:nth-child(3) {
// // // // // //           transform: translateY(-9.5px) rotate(-45deg);
// // // // // //         }

// // // // // //         /* Mobile navigation menu (slide‑down) */
// // // // // //         .mobile-nav {
// // // // // //           position: fixed;
// // // // // //           top: 62px;
// // // // // //           left: 0;
// // // // // //           right: 0;
// // // // // //           background: rgba(255, 255, 255, 0.98);
// // // // // //           backdrop-filter: blur(10px);
// // // // // //           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
// // // // // //           transform: translateY(-120%);
// // // // // //           opacity: 0;
// // // // // //           transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
// // // // // //           z-index: 500;
// // // // // //           pointer-events: none;
// // // // // //           max-height: calc(100vh - 62px);

// // // // // //         }
// // // // // //         .mobile-nav.open {
// // // // // //           transform: translateY(0);
// // // // // //           opacity: 1;
// // // // // //           pointer-events: auto;
// // // // // //         }
// // // // // //         .mobile-nav-links {
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           padding: 20px;
// // // // // //           gap: 15px;
// // // // // //         }
// // // // // //         .mobile-nav-link {
// // // // // //           background: none;
// // // // // //           border: none;
// // // // // //           font-size: 1rem;
// // // // // //           font-weight: 600;
// // // // // //           color: var(--ts, #3a6680);
// // // // // //           padding: 12px 0;
// // // // // //           text-align: left;
// // // // // //           cursor: pointer;
// // // // // //           transition: all 0.2s;
// // // // // //           border-bottom: 1px solid var(--bd, #d8e4ed);
// // // // // //           width: 100%;
// // // // // //         }
// // // // // //         .mobile-nav-link:hover {
// // // // // //           color: var(--n, #093e5d);
// // // // // //           padding-left: 8px;
// // // // // //           background: rgba(106, 155, 90, 0.05);
// // // // // //         }
// // // // // //         .mobile-btn-nav {
// // // // // //           background: var(--n, #093e5d);
// // // // // //           color: #fff !important;
// // // // // //           padding: 12px 20px;
// // // // // //           border-radius: 4px;
// // // // // //           font-weight: 700;
// // // // // //           text-decoration: none;
// // // // // //           text-align: center;
// // // // // //           margin-top: 10px;
// // // // // //           transition: background 0.2s;
// // // // // //           display: block;
// // // // // //         }
// // // // // //         .mobile-btn-nav:hover {
// // // // // //           background: var(--g, #6a9b5a);
// // // // // //         }
// // // // // // .mobile-nav {
// // // // // //   width: 100%;
// // // // // //   overflow-x: hidden;
// // // // // // }
// // // // // //         /* Responsive breakpoints */
// // // // // //         @media (max-width: 768px) {
// // // // // //           nav {
// // // // // //             padding: 0 16px !important;
// // // // // //           }
// // // // // //           .logo-img {
// // // // // //             height: 28px;
// // // // // //           }
// // // // // //           .desktop-nav {
// // // // // //             display: none !important;
// // // // // //           }
// // // // // //           .mobile-menu-btn {
// // // // // //             display: flex;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (min-width: 1101px) {
// // // // // //           .mobile-nav {
// // // // // //             display: none;
// // // // // //           }
// // // // // //           .desktop-nav {
// // // // // //             display: flex !important;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (max-width: 768px) {
// // // // // //           nav {
// // // // // //             height: 56px;
// // // // // //           }
// // // // // //           .mobile-nav {
// // // // // //             top: 56px;
// // // // // //             max-height: calc(100vh - 56px);
// // // // // //           }
// // // // // //           .logo-img {
// // // // // //             height: 24px;
// // // // // //           }
// // // // // //           .mobile-nav-link {
// // // // // //             font-size: 0.95rem;
// // // // // //             padding: 10px 0;
// // // // // //           }
// // // // // //           .mobile-menu-btn.active .hamburger-line:nth-child(1) {
// // // // // //             transform: translateY(7.5px) rotate(45deg);
// // // // // //           }
// // // // // //           .mobile-menu-btn.active .hamburger-line:nth-child(3) {
// // // // // //             transform: translateY(-7.5px) rotate(-45deg);
// // // // // //           }
// // // // // //         }

// // // // // //         @media (max-width: 480px) {
// // // // // //           .mobile-nav-links {
// // // // // //             padding: 16px;
// // // // // //             gap: 12px;
// // // // // //           }
// // // // // //           .mobile-nav-link {
// // // // // //             font-size: 0.9rem;
// // // // // //             padding: 8px 0;
// // // // // //           }
// // // // // //           .mobile-btn-nav {
// // // // // //             padding: 10px 16px;
// // // // // //             font-size: 0.9rem;
// // // // // //           }
// // // // // //           .mobile-menu-btn {
// // // // // //             width: 26px;
// // // // // //             height: 18px;
// // // // // //           }
// // // // // //           .mobile-menu-btn.active .hamburger-line:nth-child(1) {
// // // // // //             transform: translateY(8px) rotate(45deg);
// // // // // //           }
// // // // // //           .mobile-menu-btn.active .hamburger-line:nth-child(3) {
// // // // // //             transform: translateY(-8px) rotate(-45deg);
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>

// // // // // //       <nav className={`${isHidden ? 'hide' : ''} ${hasShadow ? 'shadow' : ''}`}>
// // // // // //         <button 
// // // // // //           className="logo" 
// // // // // //           onClick={(e) => handleNavClick(e, 'home')}
// // // // // //           style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
// // // // // //         >
// // // // // //           <img
// // // // // //             src="/logo1.png"
// // // // // //             alt="Robinsons Cargo & Logistics"
// // // // // //             className="logo-img"
// // // // // //           />
// // // // // //         </button>

// // // // // //         {/* Desktop Navigation */}
// // // // // //         <div className="nav-links desktop-nav">
// // // // // //           <button 
// // // // // //             onClick={(e) => handleNavClick(e, 'about')}
// // // // // //             className="nav-link-btn"
// // // // // //           >
// // // // // //             About
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={(e) => handleNavClick(e, 'services')}
// // // // // //             className="nav-link-btn"
// // // // // //           >
// // // // // //             Services
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={(e) => handleNavClick(e, 'industries')}
// // // // // //             className="nav-link-btn"
// // // // // //           >
// // // // // //             Industries
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={(e) => handleNavClick(e, 'clients')}
// // // // // //             className="nav-link-btn"
// // // // // //           >
// // // // // //             Clients
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={(e) => handleNavClick(e, 'esg')}
// // // // // //             className="nav-link-btn"
// // // // // //           >
// // // // // //             ESG
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={(e) => handleNavClick(e, 'offices')}
// // // // // //             className="nav-link-btn"
// // // // // //           >
// // // // // //             Offices
// // // // // //           </button>
// // // // // //           <a href="#contact" className="btn-nav">
// // // // // //             Get in Touch
// // // // // //           </a>
// // // // // //         </div>

// // // // // //         {/* Mobile Menu Button */}
// // // // // //         <button 
// // // // // //           ref={menuButtonRef}
// // // // // //           className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
// // // // // //           onClick={toggleMobileMenu}
// // // // // //           aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
// // // // // //         >
// // // // // //           <span className="hamburger-line"></span>
// // // // // //           <span className="hamburger-line"></span>
// // // // // //           <span className="hamburger-line"></span>
// // // // // //         </button>
// // // // // //       </nav>

// // // // // //       {/* Mobile Navigation Menu */}
// // // // // //       <div 
// // // // // //         ref={mobileMenuRef}
// // // // // //         className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
// // // // // //       >
// // // // // //         <div className="mobile-nav-links">
// // // // // //           <button 
// // // // // //             onClick={(e) => handleNavClick(e, 'about')}
// // // // // //             className="mobile-nav-link"
// // // // // //           >
// // // // // //             About
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={(e) => handleNavClick(e, 'services')}
// // // // // //             className="mobile-nav-link"
// // // // // //           >
// // // // // //             Services
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={(e) => handleNavClick(e, 'industries')}
// // // // // //             className="mobile-nav-link"
// // // // // //           >
// // // // // //             Industries
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={(e) => handleNavClick(e, 'clients')}
// // // // // //             className="mobile-nav-link"
// // // // // //           >
// // // // // //             Clients
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={(e) => handleNavClick(e, 'esg')}
// // // // // //             className="mobile-nav-link"
// // // // // //           >
// // // // // //             ESG
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={(e) => handleNavClick(e, 'offices')}
// // // // // //             className="mobile-nav-link"
// // // // // //           >
// // // // // //             Offices
// // // // // //           </button>
// // // // // //           <a 
// // // // // //             href="#contact" 
// // // // // //             className="mobile-btn-nav"
// // // // // //             onClick={(e) => {
// // // // // //               e.preventDefault();
// // // // // //               const element = document.getElementById('contact');
// // // // // //               if (element) {
// // // // // //                 element.scrollIntoView({ behavior: 'smooth' });
// // // // // //                 setIsMobileMenuOpen(false);
// // // // // //               }
// // // // // //             }}
// // // // // //           >
// // // // // //             Get in Touch
// // // // // //           </a>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;



// // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // const Navbar = () => {
// // // // //   const [isHidden, setIsHidden] = useState(false);
// // // // //   const [hasShadow, setHasShadow] = useState(false);
// // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // //   const lastScrollY = useRef(0);
// // // // //   const mobileMenuRef = useRef(null);
// // // // //   const menuButtonRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       const currentScrollY = window.scrollY;
// // // // //       setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 80);
// // // // //       setHasShadow(currentScrollY > 10);
// // // // //       lastScrollY.current = currentScrollY;
// // // // //     };
// // // // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const handleClickOutside = (event) => {
// // // // //       if (
// // // // //         isMobileMenuOpen &&
// // // // //         mobileMenuRef.current &&
// // // // //         !mobileMenuRef.current.contains(event.target) &&
// // // // //         menuButtonRef.current &&
// // // // //         !menuButtonRef.current.contains(event.target)
// // // // //       ) {
// // // // //         setIsMobileMenuOpen(false);
// // // // //       }
// // // // //     };
// // // // //     const handleResize = () => {
// // // // //       if (window.innerWidth > 1100) setIsMobileMenuOpen(false);
// // // // //     };
// // // // //     document.addEventListener('mousedown', handleClickOutside);
// // // // //     window.addEventListener('resize', handleResize);
// // // // //     return () => {
// // // // //       document.removeEventListener('mousedown', handleClickOutside);
// // // // //       window.removeEventListener('resize', handleResize);
// // // // //     };
// // // // //   }, [isMobileMenuOpen]);

// // // // //   const handleNavClick = (e, sectionId) => {
// // // // //     e.preventDefault();
// // // // //     setIsMobileMenuOpen(false);
// // // // //     const element = document.getElementById(sectionId);
// // // // //     if (element) element.scrollIntoView({ behavior: 'smooth' });
// // // // //   };

// // // // //   const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

// // // // //   return (
// // // // //     <>
// // // // //       <style>{`
// // // // //         .rcl-nav {
// // // // //           position: fixed;
// // // // //           top: 0; left: 0; right: 0;
// // // // //           z-index: 500;
// // // // //           height: 62px;
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           justify-content: space-between;
// // // // //           padding: 0 48px;
// // // // //           background: rgba(255,255,255,0.97);
// // // // //           border-bottom: 1px solid var(--bd, #d8e4ed);
// // // // //           transition: box-shadow 0.3s, transform 0.35s;
// // // // //           box-sizing: border-box;
// // // // //         }
// // // // //         .rcl-nav.hide  { transform: translateY(-100%); }
// // // // //         .rcl-nav.shadow { box-shadow: 0 2px 24px rgba(11,29,58,0.07); }

// // // // //         /* Logo */
// // // // //         .rcl-logo {
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           background: none;
// // // // //           border: none;
// // // // //           cursor: pointer;
// // // // //           padding: 0;
// // // // //           flex-shrink: 0;
// // // // //         }
// // // // //         .rcl-logo-img {
// // // // //           height: 34px;
// // // // //           width: auto;
// // // // //           display: block;
// // // // //           object-fit: contain;
// // // // //         }

// // // // //         /* Desktop links */
// // // // //         .rcl-desktop-nav {
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           gap: 28px;
// // // // //         }
// // // // //         .rcl-nav-btn {
// // // // //           font-size: 0.78rem;
// // // // //           font-weight: 600;
// // // // //           color: var(--ts, #3a6680);
// // // // //           text-decoration: none;
// // // // //           letter-spacing: 0.01em;
// // // // //           transition: color 0.2s;
// // // // //           position: relative;
// // // // //           background: none;
// // // // //           border: none;
// // // // //           cursor: pointer;
// // // // //           padding: 0;
// // // // //           font-family: inherit;
// // // // //         }
// // // // //         .rcl-nav-btn::after {
// // // // //           content: '';
// // // // //           position: absolute;
// // // // //           bottom: -4px; left: 0;
// // // // //           width: 0; height: 1.5px;
// // // // //           background: var(--g3, #8cb27f);
// // // // //           border-radius: 2px;
// // // // //           transition: width 0.25s;
// // // // //         }
// // // // //         .rcl-nav-btn:hover { color: var(--n, #093e5d); }
// // // // //         .rcl-nav-btn:hover::after { width: 100%; }

// // // // //         .rcl-btn-cta {
// // // // //           background: var(--n, #093e5d) !important;
// // // // //           color: #fff !important;
// // // // //           padding: 8px 20px;
// // // // //           border-radius: 4px;
// // // // //           font-size: 0.78rem;
// // // // //           font-weight: 700;
// // // // //           text-decoration: none;
// // // // //           display: inline-block;
// // // // //           transition: background 0.2s;
// // // // //           border: none;
// // // // //           cursor: pointer;
// // // // //           font-family: inherit;
// // // // //         }
// // // // //         .rcl-btn-cta:hover { background: var(--g, #6a9b5a) !important; }
// // // // //         .rcl-btn-cta::after { display: none !important; }

// // // // //         /* Hamburger */
// // // // //         .rcl-hamburger {
// // // // //           display: none;
// // // // //           flex-direction: column;
// // // // //           justify-content: space-between;
// // // // //           width: 28px;
// // // // //           height: 20px;
// // // // //           background: transparent;
// // // // //           border: none;
// // // // //           cursor: pointer;
// // // // //           padding: 0;
// // // // //           z-index: 10;
// // // // //           flex-shrink: 0;
// // // // //         }
// // // // //         .rcl-hline {
// // // // //           width: 100%;
// // // // //           height: 2px;
// // // // //           background: var(--ts, #3a6680);
// // // // //           border-radius: 2px;
// // // // //           transition: all 0.3s ease-in-out;
// // // // //           transform-origin: center;
// // // // //           display: block;
// // // // //         }
// // // // //         .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
// // // // //         .rcl-hamburger.active .rcl-hline:nth-child(2) { opacity: 0; transform: scaleX(0); }
// // // // //         .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

// // // // //         /* Mobile nav panel */
// // // // //         .rcl-mobile-nav {
// // // // //           position: fixed;
// // // // //           top: 62px; left: 0; right: 0;
// // // // //           background: rgba(255,255,255,0.98);
// // // // //           backdrop-filter: blur(10px);
// // // // //           box-shadow: 0 4px 20px rgba(0,0,0,0.1);
// // // // //           transform: translateY(-110%);
// // // // //           opacity: 0;
// // // // //           transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
// // // // //           z-index: 499;
// // // // //           pointer-events: none;
// // // // //           max-height: calc(100vh - 62px);
// // // // //           overflow-y: auto;
// // // // //           width: 100%;
// // // // //           box-sizing: border-box;
// // // // //         }
// // // // //         .rcl-mobile-nav.open {
// // // // //           transform: translateY(0);
// // // // //           opacity: 1;
// // // // //           pointer-events: auto;
// // // // //         }
// // // // //         .rcl-mobile-links {
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           padding: 20px 24px;
// // // // //           gap: 0;
// // // // //         }
// // // // //         .rcl-mobile-btn {
// // // // //           background: none;
// // // // //           border: none;
// // // // //           font-size: 0.97rem;
// // // // //           font-weight: 600;
// // // // //           color: var(--ts, #3a6680);
// // // // //           padding: 14px 0;
// // // // //           text-align: left;
// // // // //           cursor: pointer;
// // // // //           transition: all 0.2s;
// // // // //           border-bottom: 1px solid var(--bd, #d8e4ed);
// // // // //           width: 100%;
// // // // //           font-family: inherit;
// // // // //           letter-spacing: 0.01em;
// // // // //         }
// // // // //         .rcl-mobile-btn:last-of-type { border-bottom: none; }
// // // // //         .rcl-mobile-btn:hover { color: var(--n, #093e5d); padding-left: 8px; }
// // // // //         .rcl-mobile-cta {
// // // // //           display: block;
// // // // //           background: var(--n, #093e5d);
// // // // //           color: #fff;
// // // // //           padding: 13px 20px;
// // // // //           border-radius: 4px;
// // // // //           font-size: 0.9rem;
// // // // //           font-weight: 700;
// // // // //           text-align: center;
// // // // //           text-decoration: none;
// // // // //           margin-top: 16px;
// // // // //           transition: background 0.2s;
// // // // //           font-family: inherit;
// // // // //         }
// // // // //         .rcl-mobile-cta:hover { background: var(--g, #6a9b5a); }

// // // // //         /* Breakpoints */
// // // // //         @media (max-width: 1100px) {
// // // // //           .rcl-desktop-nav { display: none !important; }
// // // // //           .rcl-hamburger { display: flex; }
// // // // //           .rcl-nav { padding: 0 20px; }
// // // // //         }
// // // // //         @media (min-width: 1101px) {
// // // // //           .rcl-mobile-nav { display: none; }
// // // // //           .rcl-desktop-nav { display: flex !important; }
// // // // //         }
// // // // //         @media (max-width: 768px) {
// // // // //           .rcl-nav {
// // // // //             height: 56px;
// // // // //             padding: 0 16px;
// // // // //           }
// // // // //           .rcl-logo-img { height: 28px; }
// // // // //           .rcl-mobile-nav {
// // // // //             top: 56px;
// // // // //             max-height: calc(100vh - 56px);
// // // // //           }
// // // // //           .rcl-mobile-btn { font-size: 0.9rem; padding: 12px 0; }
// // // // //           .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
// // // // //           .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
// // // // //         }
// // // // //         @media (max-width: 480px) {
// // // // //           .rcl-nav { padding: 0 14px; }
// // // // //           .rcl-logo-img { height: 24px; }
// // // // //           .rcl-mobile-links { padding: 16px 18px; }
// // // // //           .rcl-mobile-btn { font-size: 0.85rem; padding: 11px 0; }
// // // // //           .rcl-mobile-cta { padding: 11px 16px; font-size: 0.85rem; }
// // // // //           .rcl-hamburger { width: 24px; height: 18px; }
// // // // //           .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(8px) rotate(45deg); }
// // // // //           .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
// // // // //         }
// // // // //       `}</style>

// // // // //       <nav className={`rcl-nav${isHidden ? ' hide' : ''}${hasShadow ? ' shadow' : ''}`}>
// // // // //         <button
// // // // //           className="rcl-logo"
// // // // //           onClick={(e) => handleNavClick(e, 'home')}
// // // // //           aria-label="Go to home"
// // // // //         >
// // // // //           <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="rcl-logo-img" />
// // // // //         </button>

// // // // //         {/* Desktop Nav */}
// // // // //         <div className="rcl-desktop-nav">
// // // // //           {['about', 'services', 'industries', 'clients', 'esg', 'offices'].map((id) => (
// // // // //             <button key={id} onClick={(e) => handleNavClick(e, id)} className="rcl-nav-btn">
// // // // //               {id.charAt(0).toUpperCase() + id.slice(1)}
// // // // //             </button>
// // // // //           ))}
// // // // //           <a
// // // // //             href="#contact"
// // // // //             className="rcl-btn-cta"
// // // // //             onClick={(e) => handleNavClick(e, 'contact')}
// // // // //           >
// // // // //             Get in Touch
// // // // //           </a>
// // // // //         </div>

// // // // //         {/* Hamburger */}
// // // // //         <button
// // // // //           ref={menuButtonRef}
// // // // //           className={`rcl-hamburger${isMobileMenuOpen ? ' active' : ''}`}
// // // // //           onClick={toggleMobileMenu}
// // // // //           aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
// // // // //         >
// // // // //           <span className="rcl-hline"></span>
// // // // //           <span className="rcl-hline"></span>
// // // // //           <span className="rcl-hline"></span>
// // // // //         </button>
// // // // //       </nav>

// // // // //       {/* Mobile Nav Panel */}
// // // // //       <div
// // // // //         ref={mobileMenuRef}
// // // // //         className={`rcl-mobile-nav${isMobileMenuOpen ? ' open' : ''}`}
// // // // //         aria-hidden={!isMobileMenuOpen}
// // // // //       >
// // // // //         <div className="rcl-mobile-links">
// // // // //           {['about', 'services', 'industries', 'clients', 'esg', 'offices'].map((id) => (
// // // // //             <button key={id} onClick={(e) => handleNavClick(e, id)} className="rcl-mobile-btn">
// // // // //               {id.charAt(0).toUpperCase() + id.slice(1)}
// // // // //             </button>
// // // // //           ))}
// // // // //           <a
// // // // //             href="#contact"
// // // // //             className="rcl-mobile-cta"
// // // // //             onClick={(e) => {
// // // // //               e.preventDefault();
// // // // //               setIsMobileMenuOpen(false);
// // // // //               document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
// // // // //             }}
// // // // //           >
// // // // //             Get in Touch
// // // // //           </a>
// // // // //         </div>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Navbar;


// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import { Link } from 'react-router-dom'; 

// // // // const Navbar = () => {
// // // //   const [isHidden, setIsHidden] = useState(false);
// // // //   const [hasShadow, setHasShadow] = useState(false);
// // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // //   const lastScrollY = useRef(0);
// // // //   const mobileMenuRef = useRef(null);
// // // //   const menuButtonRef = useRef(null);

// // // //   // Handle scroll: hide navbar on scroll down, show on up
// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const currentScrollY = window.scrollY;
// // // //       setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 80);
// // // //       setHasShadow(currentScrollY > 10);
// // // //       lastScrollY.current = currentScrollY;
// // // //     };
// // // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // //   }, []);

// // // //   // Close mobile menu when clicking outside or resizing to desktop
// // // //   useEffect(() => {
// // // //     const handleClickOutside = (event) => {
// // // //       if (
// // // //         isMobileMenuOpen &&
// // // //         mobileMenuRef.current &&
// // // //         !mobileMenuRef.current.contains(event.target) &&
// // // //         menuButtonRef.current &&
// // // //         !menuButtonRef.current.contains(event.target)
// // // //       ) {
// // // //         setIsMobileMenuOpen(false);
// // // //       }
// // // //     };
// // // //     const handleResize = () => {
// // // //       if (window.innerWidth > 1100) setIsMobileMenuOpen(false);
// // // //     };
// // // //     document.addEventListener('mousedown', handleClickOutside);
// // // //     window.addEventListener('resize', handleResize);
// // // //     return () => {
// // // //       document.removeEventListener('mousedown', handleClickOutside);
// // // //       window.removeEventListener('resize', handleResize);
// // // //     };
// // // //   }, [isMobileMenuOpen]);

// // // //   // Smooth scroll to section (used for non‑page links)
// // // //   const handleNavClick = (e, sectionId) => {
// // // //     e.preventDefault();
// // // //     setIsMobileMenuOpen(false);
// // // //     const element = document.getElementById(sectionId);
// // // //     if (element) element.scrollIntoView({ behavior: 'smooth' });
// // // //   };

// // // //   const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

// // // //   return (
// // // //     <>
// // // //       <style>{`
// // // //         .rcl-nav {
// // // //           position: fixed;
// // // //           top: 0; left: 0; right: 0;
// // // //           z-index: 500;
// // // //           height: 62px;
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: space-between;
// // // //           padding: 0 48px;
// // // //           background: rgba(255,255,255,0.97);
// // // //           border-bottom: 1px solid var(--bd, #d8e4ed);
// // // //           transition: box-shadow 0.3s, transform 0.35s;
// // // //           box-sizing: border-box;
// // // //         }
// // // //         .rcl-nav.hide  { transform: translateY(-100%); }
// // // //         .rcl-nav.shadow { box-shadow: 0 2px 24px rgba(11,29,58,0.07); }

// // // //         /* Logo */
// // // //         .rcl-logo {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           background: none;
// // // //           border: none;
// // // //           cursor: pointer;
// // // //           padding: 0;
// // // //           flex-shrink: 0;
// // // //           text-decoration: none;
// // // //         }
// // // //         .rcl-logo-img {
// // // //           height: 34px;
// // // //           width: auto;
// // // //           display: block;
// // // //           object-fit: contain;
// // // //         }

// // // //         /* Desktop links */
// // // //         .rcl-desktop-nav {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           gap: 28px;
// // // //         }
// // // //         .rcl-nav-btn {
// // // //           font-size: 0.78rem;
// // // //           font-weight: 600;
// // // //           color: var(--ts, #3a6680);
// // // //           text-decoration: none;
// // // //           letter-spacing: 0.01em;
// // // //           transition: color 0.2s;
// // // //           position: relative;
// // // //           background: none;
// // // //           border: none;
// // // //           cursor: pointer;
// // // //           padding: 0;
// // // //           font-family: inherit;
// // // //         }
// // // //         .rcl-nav-btn::after {
// // // //           content: '';
// // // //           position: absolute;
// // // //           bottom: -4px; left: 0;
// // // //           width: 0; height: 1.5px;
// // // //           background: var(--g3, #8cb27f);
// // // //           border-radius: 2px;
// // // //           transition: width 0.25s;
// // // //         }
// // // //         .rcl-nav-btn:hover { color: var(--n, #093e5d); }
// // // //         .rcl-nav-btn:hover::after { width: 100%; }

// // // //         .rcl-btn-cta {
// // // //           background: var(--n, #093e5d) !important;
// // // //           color: #fff !important;
// // // //           padding: 8px 20px;
// // // //           border-radius: 4px;
// // // //           font-size: 0.78rem;
// // // //           font-weight: 700;
// // // //           text-decoration: none;
// // // //           display: inline-block;
// // // //           transition: background 0.2s;
// // // //           border: none;
// // // //           cursor: pointer;
// // // //           font-family: inherit;
// // // //         }
// // // //         .rcl-btn-cta:hover { background: var(--g, #6a9b5a) !important; }
// // // //         .rcl-btn-cta::after { display: none !important; }

// // // //         /* Hamburger */
// // // //         .rcl-hamburger {
// // // //           display: none;
// // // //           flex-direction: column;
// // // //           justify-content: space-between;
// // // //           width: 28px;
// // // //           height: 20px;
// // // //           background: transparent;
// // // //           border: none;
// // // //           cursor: pointer;
// // // //           padding: 0;
// // // //           z-index: 10;
// // // //           flex-shrink: 0;
// // // //         }
// // // //         .rcl-hline {
// // // //           width: 100%;
// // // //           height: 2px;
// // // //           background: var(--ts, #3a6680);
// // // //           border-radius: 2px;
// // // //           transition: all 0.3s ease-in-out;
// // // //           transform-origin: center;
// // // //           display: block;
// // // //         }
// // // //         .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
// // // //         .rcl-hamburger.active .rcl-hline:nth-child(2) { opacity: 0; transform: scaleX(0); }
// // // //         .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

// // // //         /* Mobile nav panel */
// // // //         .rcl-mobile-nav {
// // // //           position: fixed;
// // // //           top: 62px; left: 0; right: 0;
// // // //           background: rgba(255,255,255,0.98);
// // // //           backdrop-filter: blur(10px);
// // // //           box-shadow: 0 4px 20px rgba(0,0,0,0.1);
// // // //           transform: translateY(-110%);
// // // //           opacity: 0;
// // // //           transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
// // // //           z-index: 499;
// // // //           pointer-events: none;
// // // //           max-height: calc(100vh - 62px);
// // // //           overflow-y: auto;
// // // //           width: 100%;
// // // //           box-sizing: border-box;
// // // //         }
// // // //         .rcl-mobile-nav.open {
// // // //           transform: translateY(0);
// // // //           opacity: 1;
// // // //           pointer-events: auto;
// // // //         }
// // // //         .rcl-mobile-links {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           padding: 20px 24px;
// // // //           gap: 0;
// // // //         }
// // // //         .rcl-mobile-btn {
// // // //           background: none;
// // // //           border: none;
// // // //           font-size: 0.97rem;
// // // //           font-weight: 600;
// // // //           color: var(--ts, #3a6680);
// // // //           padding: 14px 0;
// // // //           text-align: left;
// // // //           cursor: pointer;
// // // //           transition: all 0.2s;
// // // //           border-bottom: 1px solid var(--bd, #d8e4ed);
// // // //           width: 100%;
// // // //           font-family: inherit;
// // // //           letter-spacing: 0.01em;
// // // //           text-decoration: none;
// // // //         }
// // // //         .rcl-mobile-btn:last-of-type { border-bottom: none; }
// // // //         .rcl-mobile-btn:hover { color: var(--n, #093e5d); padding-left: 8px; }
// // // //         .rcl-mobile-cta {
// // // //           display: block;
// // // //           background: var(--n, #093e5d);
// // // //           color: #fff;
// // // //           padding: 13px 20px;
// // // //           border-radius: 4px;
// // // //           font-size: 0.9rem;
// // // //           font-weight: 700;
// // // //           text-align: center;
// // // //           text-decoration: none;
// // // //           margin-top: 16px;
// // // //           transition: background 0.2s;
// // // //           font-family: inherit;
// // // //         }
// // // //         .rcl-mobile-cta:hover { background: var(--g, #6a9b5a); }

// // // //         /* Breakpoints */
// // // //         @media (max-width: 1100px) {
// // // //           .rcl-desktop-nav { display: none !important; }
// // // //           .rcl-hamburger { display: flex; }
// // // //           .rcl-nav { padding: 0 20px; }
// // // //         }
// // // //         @media (min-width: 1101px) {
// // // //           .rcl-mobile-nav { display: none; }
// // // //           .rcl-desktop-nav { display: flex !important; }
// // // //         }
// // // //         @media (max-width: 768px) {
// // // //           .rcl-nav {
// // // //             height: 56px;
// // // //             padding: 0 16px;
// // // //           }
// // // //           .rcl-logo-img { height: 28px; }
// // // //           .rcl-mobile-nav {
// // // //             top: 56px;
// // // //             max-height: calc(100vh - 56px);
// // // //           }
// // // //           .rcl-mobile-btn { font-size: 0.9rem; padding: 12px 0; }
// // // //           .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
// // // //           .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
// // // //         }
// // // //         @media (max-width: 480px) {
// // // //           .rcl-nav { padding: 0 14px; }
// // // //           .rcl-logo-img { height: 24px; }
// // // //           .rcl-mobile-links { padding: 16px 18px; }
// // // //           .rcl-mobile-btn { font-size: 0.85rem; padding: 11px 0; }
// // // //           .rcl-mobile-cta { padding: 11px 16px; font-size: 0.85rem; }
// // // //           .rcl-hamburger { width: 24px; height: 18px; }
// // // //           .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(8px) rotate(45deg); }
// // // //           .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
// // // //         }
// // // //       `}</style>

// // // //       <nav className={`rcl-nav${isHidden ? ' hide' : ''}${hasShadow ? ' shadow' : ''}`}>
// // // //         {/* Logo: navigates to home */}
// // // //         <Link to="/" className="rcl-logo" aria-label="Go to home">
// // // //           <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="rcl-logo-img" />
// // // //         </Link>

// // // //         {/* Desktop navigation */}
// // // //         <div className="rcl-desktop-nav">
// // // //           <Link to="/aboutus" className="rcl-nav-btn">
// // // //             About
// // // //           </Link>
// // // //           <Link to="/services" className="rcl-nav-btn">
// // // //             Services
// // // //           </Link>
// // // //           <Link to="/esg" className="rcl-nav-btn">
// // // //             ESG
// // // //           </Link>

// // // //           {/* Scroll to section links */}
// // // //           {['industries', 'clients', 'offices'].map((id) => (
// // // //             <button
// // // //               key={id}
// // // //               onClick={(e) => handleNavClick(e, id)}
// // // //               className="rcl-nav-btn"
// // // //             >
// // // //               {id.charAt(0).toUpperCase() + id.slice(1)}
// // // //             </button>
// // // //           ))}

// // // //           {/* Contact CTA (scroll) */}
// // // //           <a
// // // //             href="#contact"
// // // //             className="rcl-btn-cta"
// // // //             onClick={(e) => handleNavClick(e, 'contact')}
// // // //           >
// // // //             Get in Touch
// // // //           </a>
// // // //         </div>

// // // //         {/* Hamburger button for mobile */}
// // // //         <button
// // // //           ref={menuButtonRef}
// // // //           className={`rcl-hamburger${isMobileMenuOpen ? ' active' : ''}`}
// // // //           onClick={toggleMobileMenu}
// // // //           aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
// // // //         >
// // // //           <span className="rcl-hline"></span>
// // // //           <span className="rcl-hline"></span>
// // // //           <span className="rcl-hline"></span>
// // // //         </button>
// // // //       </nav>

// // // //       {/* Mobile menu panel */}
// // // //       <div
// // // //         ref={mobileMenuRef}
// // // //         className={`rcl-mobile-nav${isMobileMenuOpen ? ' open' : ''}`}
// // // //         aria-hidden={!isMobileMenuOpen}
// // // //       >
// // // //         <div className="rcl-mobile-links">
// // // //           {/* About page link */}
// // // //           <Link
// // // //             to="/about-us"
// // // //             className="rcl-mobile-btn"
// // // //             onClick={() => setIsMobileMenuOpen(false)}
// // // //           >
// // // //             About
// // // //           </Link>

// // // //           {/* Services page link */}
// // // //           <Link
// // // //             to="/services"
// // // //             className="rcl-mobile-btn"
// // // //             onClick={() => setIsMobileMenuOpen(false)}
// // // //           >
// // // //             Services
// // // //           </Link>

// // // //           {/* Scroll to section links */}
// // // //           {['industries', 'clients', 'esg', 'offices'].map((id) => (
// // // //             <button
// // // //               key={id}
// // // //               onClick={(e) => handleNavClick(e, id)}
// // // //               className="rcl-mobile-btn"
// // // //             >
// // // //               {id.charAt(0).toUpperCase() + id.slice(1)}
// // // //             </button>
// // // //           ))}

// // // //           {/* Contact CTA (scroll) */}
// // // //           <a
// // // //             href="#contact"
// // // //             className="rcl-mobile-cta"
// // // //             onClick={(e) => {
// // // //               e.preventDefault();
// // // //               setIsMobileMenuOpen(false);
// // // //               document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
// // // //             }}
// // // //           >
// // // //             Get in Touch
// // // //           </a>
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { Link } from 'react-router-dom';

// // // const Navbar = () => {
// // //   const [isHidden, setIsHidden] = useState(false);
// // //   const [hasShadow, setHasShadow] = useState(false);
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // //   const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
// // //   const lastScrollY = useRef(0);
// // //   const mobileMenuRef = useRef(null);
// // //   const menuButtonRef = useRef(null);
// // //   const desktopIndustriesRef = useRef(null);

// // //   // Handle scroll
// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const currentScrollY = window.scrollY;
// // //       setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 80);
// // //       setHasShadow(currentScrollY > 10);
// // //       lastScrollY.current = currentScrollY;
// // //     };
// // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   // Close mobile menu when clicking outside or resizing to desktop
// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (
// // //         isMobileMenuOpen &&
// // //         mobileMenuRef.current &&
// // //         !mobileMenuRef.current.contains(event.target) &&
// // //         menuButtonRef.current &&
// // //         !menuButtonRef.current.contains(event.target)
// // //       ) {
// // //         setIsMobileMenuOpen(false);
// // //         setIsMobileIndustriesOpen(false);
// // //       }
// // //     };
// // //     const handleResize = () => {
// // //       if (window.innerWidth > 1100) {
// // //         setIsMobileMenuOpen(false);
// // //         setIsMobileIndustriesOpen(false);
// // //       }
// // //     };
// // //     document.addEventListener('mousedown', handleClickOutside);
// // //     window.addEventListener('resize', handleResize);
// // //     return () => {
// // //       document.removeEventListener('mousedown', handleClickOutside);
// // //       window.removeEventListener('resize', handleResize);
// // //     };
// // //   }, [isMobileMenuOpen]);

// // //   // Smooth scroll to section (for non‑page links)
// // //   const handleNavClick = (e, sectionId) => {
// // //     e.preventDefault();
// // //     setIsMobileMenuOpen(false);
// // //     setIsMobileIndustriesOpen(false);
// // //     const element = document.getElementById(sectionId);
// // //     if (element) element.scrollIntoView({ behavior: 'smooth' });
// // //   };

// // //   const toggleMobileMenu = () => {
// // //     setIsMobileMenuOpen((prev) => !prev);
// // //     setIsMobileIndustriesOpen(false);
// // //   };

// // //   const toggleMobileIndustries = (e) => {
// // //     e.preventDefault();
// // //     setIsMobileIndustriesOpen((prev) => !prev);
// // //   };

// // //   return (
// // //     <>
// // //       <style>{`
// // //         .rcl-nav {
// // //           position: fixed;
// // //           top: 0; left: 0; right: 0;
// // //           z-index: 500;
// // //           height: 62px;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: space-between;
// // //           padding: 0 48px;
// // //           background: rgba(255,255,255,0.97);
// // //           border-bottom: 1px solid var(--bd, #d8e4ed);
// // //           transition: box-shadow 0.3s, transform 0.35s;
// // //           box-sizing: border-box;
// // //         }
// // //         .rcl-nav.hide  { transform: translateY(-100%); }
// // //         .rcl-nav.shadow { box-shadow: 0 2px 24px rgba(11,29,58,0.07); }

// // //         /* Logo */
// // //         .rcl-logo {
// // //           display: flex;
// // //           align-items: center;
// // //           background: none;
// // //           border: none;
// // //           cursor: pointer;
// // //           padding: 0;
// // //           flex-shrink: 0;
// // //           text-decoration: none;
// // //         }
// // //         .rcl-logo-img {
// // //           height: 34px;
// // //           width: auto;
// // //           display: block;
// // //           object-fit: contain;
// // //         }

// // //         /* Desktop nav container */
// // //         .rcl-desktop-nav {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 28px;
// // //         }

// // //         /* Base button / link styles */
// // //         .rcl-nav-btn {
// // //           font-size: 0.78rem;
// // //           font-weight: 600;
// // //           color: var(--ts, #3a6680);
// // //           text-decoration: none;
// // //           letter-spacing: 0.01em;
// // //           transition: color 0.2s;
// // //           position: relative;
// // //           background: none;
// // //           border: none;
// // //           cursor: pointer;
// // //           padding: 0;
// // //           font-family: inherit;
// // //         }
// // //         .rcl-nav-btn::after {
// // //           content: '';
// // //           position: absolute;
// // //           bottom: -4px; left: 0;
// // //           width: 0; height: 1.5px;
// // //           background: var(--g3, #8cb27f);
// // //           border-radius: 2px;
// // //           transition: width 0.25s;
// // //         }
// // //         .rcl-nav-btn:hover { color: var(--n, #093e5d); }
// // //         .rcl-nav-btn:hover::after { width: 100%; }

// // //         /* Dropdown container (desktop) */
// // //         .dropdown {
// // //           position: relative;
// // //         }
// // //         .dropdown-content {
// // //           position: absolute;
// // //           top: 100%;
// // //           left: 0;
// // //           background: white;
// // //           min-width: 200px;
// // //           box-shadow: 0 8px 16px rgba(0,0,0,0.1);
// // //           border-radius: 8px;
// // //           padding: 0.5rem 0;
// // //           opacity: 0;
// // //           visibility: hidden;
// // //           transform: translateY(-10px);
// // //           transition: all 0.2s ease;
// // //           z-index: 10;
// // //         }
// // //         .dropdown:hover .dropdown-content {
// // //           opacity: 1;
// // //           visibility: visible;
// // //           transform: translateY(0);
// // //         }
// // //         .dropdown-content a {
// // //           display: block;
// // //           padding: 0.5rem 1rem;
// // //           color: var(--ts, #3a6680);
// // //           text-decoration: none;
// // //           font-size: 0.78rem;
// // //           font-weight: 500;
// // //           transition: background 0.2s, color 0.2s;
// // //         }
// // //         .dropdown-content a:hover {
// // //           background: #f5f7fa;
// // //           color: var(--n, #093e5d);
// // //         }

// // //         /* CTA button */
// // //         .rcl-btn-cta {
// // //           background: var(--n, #093e5d) !important;
// // //           color: #fff !important;
// // //           padding: 8px 20px;
// // //           border-radius: 4px;
// // //           font-size: 0.78rem;
// // //           font-weight: 700;
// // //           text-decoration: none;
// // //           display: inline-block;
// // //           transition: background 0.2s;
// // //           border: none;
// // //           cursor: pointer;
// // //           font-family: inherit;
// // //         }
// // //         .rcl-btn-cta:hover { background: var(--g, #6a9b5a) !important; }
// // //         .rcl-btn-cta::after { display: none !important; }

// // //         /* Hamburger */
// // //         .rcl-hamburger {
// // //           display: none;
// // //           flex-direction: column;
// // //           justify-content: space-between;
// // //           width: 28px;
// // //           height: 20px;
// // //           background: transparent;
// // //           border: none;
// // //           cursor: pointer;
// // //           padding: 0;
// // //           z-index: 10;
// // //           flex-shrink: 0;
// // //         }
// // //         .rcl-hline {
// // //           width: 100%;
// // //           height: 2px;
// // //           background: var(--ts, #3a6680);
// // //           border-radius: 2px;
// // //           transition: all 0.3s ease-in-out;
// // //           transform-origin: center;
// // //           display: block;
// // //         }
// // //         .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
// // //         .rcl-hamburger.active .rcl-hline:nth-child(2) { opacity: 0; transform: scaleX(0); }
// // //         .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

// // //         /* Mobile nav panel */
// // //         .rcl-mobile-nav {
// // //           position: fixed;
// // //           top: 62px; left: 0; right: 0;
// // //           background: rgba(255,255,255,0.98);
// // //           backdrop-filter: blur(10px);
// // //           box-shadow: 0 4px 20px rgba(0,0,0,0.1);
// // //           transform: translateY(-110%);
// // //           opacity: 0;
// // //           transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
// // //           z-index: 499;
// // //           pointer-events: none;
// // //           max-height: calc(100vh - 62px);
// // //           overflow-y: auto;
// // //           width: 100%;
// // //           box-sizing: border-box;
// // //         }
// // //         .rcl-mobile-nav.open {
// // //           transform: translateY(0);
// // //           opacity: 1;
// // //           pointer-events: auto;
// // //         }
// // //         .rcl-mobile-links {
// // //           display: flex;
// // //           flex-direction: column;
// // //           padding: 20px 24px;
// // //           gap: 0;
// // //         }
// // //         .rcl-mobile-btn {
// // //           background: none;
// // //           border: none;
// // //           font-size: 0.97rem;
// // //           font-weight: 600;
// // //           color: var(--ts, #3a6680);
// // //           padding: 14px 0;
// // //           text-align: left;
// // //           cursor: pointer;
// // //           transition: all 0.2s;
// // //           border-bottom: 1px solid var(--bd, #d8e4ed);
// // //           width: 100%;
// // //           font-family: inherit;
// // //           letter-spacing: 0.01em;
// // //           text-decoration: none;
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: center;
// // //         }
// // //         .rcl-mobile-btn:last-of-type { border-bottom: none; }
// // //         .rcl-mobile-btn:hover { color: var(--n, #093e5d); padding-left: 8px; }
// // //         .mobile-submenu {
// // //           padding-left: 1.5rem;
// // //           display: flex;
// // //           flex-direction: column;
// // //         }
// // //         .mobile-submenu a {
// // //           padding: 10px 0;
// // //           color: var(--ts, #3a6680);
// // //           text-decoration: none;
// // //           font-size: 0.85rem;
// // //           border-bottom: none;
// // //         }
// // //         .mobile-submenu a:hover {
// // //           color: var(--n, #093e5d);
// // //           padding-left: 4px;
// // //         }
// // //         .arrow {
// // //           font-size: 0.8rem;
// // //           transition: transform 0.2s;
// // //         }
// // //         .arrow.open {
// // //           transform: rotate(180deg);
// // //         }
// // //         .rcl-mobile-cta {
// // //           display: block;
// // //           background: var(--n, #093e5d);
// // //           color: #fff;
// // //           padding: 13px 20px;
// // //           border-radius: 4px;
// // //           font-size: 0.9rem;
// // //           font-weight: 700;
// // //           text-align: center;
// // //           text-decoration: none;
// // //           margin-top: 16px;
// // //           transition: background 0.2s;
// // //           font-family: inherit;
// // //         }
// // //         .rcl-mobile-cta:hover { background: var(--g, #6a9b5a); }

// // //         /* Breakpoints */
// // //         @media (max-width: 1100px) {
// // //           .rcl-desktop-nav { display: none !important; }
// // //           .rcl-hamburger { display: flex; }
// // //           .rcl-nav { padding: 0 20px; }
// // //         }
// // //         @media (min-width: 1101px) {
// // //           .rcl-mobile-nav { display: none; }
// // //           .rcl-desktop-nav { display: flex !important; }
// // //         }
// // //         @media (max-width: 768px) {
// // //           .rcl-nav {
// // //             height: 56px;
// // //             padding: 0 16px;
// // //           }
// // //           .rcl-logo-img { height: 28px; }
// // //           .rcl-mobile-nav {
// // //             top: 56px;
// // //             max-height: calc(100vh - 56px);
// // //           }
// // //           .rcl-mobile-btn { font-size: 0.9rem; padding: 12px 0; }
// // //           .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
// // //           .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
// // //         }
// // //         @media (max-width: 480px) {
// // //           .rcl-nav { padding: 0 14px; }
// // //           .rcl-logo-img { height: 24px; }
// // //           .rcl-mobile-links { padding: 16px 18px; }
// // //           .rcl-mobile-btn { font-size: 0.85rem; padding: 11px 0; }
// // //           .rcl-mobile-cta { padding: 11px 16px; font-size: 0.85rem; }
// // //           .rcl-hamburger { width: 24px; height: 18px; }
// // //           .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(8px) rotate(45deg); }
// // //           .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
// // //         }
// // //       `}</style>

// // //       <nav className={`rcl-nav${isHidden ? ' hide' : ''}${hasShadow ? ' shadow' : ''}`}>
// // //         <Link to="/" className="rcl-logo" aria-label="Go to home">
// // //           <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="rcl-logo-img" />
// // //         </Link>

// // //         {/* Desktop navigation */}
// // //         <div className="rcl-desktop-nav">
// // //           <Link to="/aboutus" className="rcl-nav-btn">
// // //             About
// // //           </Link>
// // //           <Link to="/services" className="rcl-nav-btn">
// // //             Services
// // //           </Link>

// // //           {/* Industries dropdown (desktop) */}
// // //           <div className="dropdown">
// // //             <button className="rcl-nav-btn">Industries</button>
// // //             <div className="dropdown-content">
// // //               <Link to="/industries/automotive">Automotive</Link>
// // //               <Link to="/industries/engineering">Engineering</Link>
// // //               <Link to="/industries/luxury-goods">Luxury Goods</Link>
// // //               <Link to="/industries/project-logistics">Project Logistics</Link>
// // //               <Link to="/industries/e-commerce">Retail/E-Commerce</Link>
// // //               <Link to="/industries/cold-chain">Cold Chain</Link>
// // //               <Link to="/industries/aviation-defense">Aviation & Defense</Link>
// // //               <Link to="/industries/hi-tech">Hi-Tech</Link>
// // //               <Link to="/industries/pharma-healthcare">Pharma & Healthcare</Link>
// // //               <Link to="/industries/renewable-energy">Renewable Energy</Link>
// // //               <Link to="/industries/space-avionics">Space & Avionics</Link>
// // //               <Link to="/industries/industrial-msme">Industrial & MSME</Link>

// // //             </div>
// // //           </div>

// // //           <Link to="/esg" className="rcl-nav-btn">
// // //             ESG
// // //           </Link>

// // //           {['clients', 'offices'].map((id) => (
// // //             <button
// // //               key={id}
// // //               onClick={(e) => handleNavClick(e, id)}
// // //               className="rcl-nav-btn"
// // //             >
// // //               {id.charAt(0).toUpperCase() + id.slice(1)}
// // //             </button>
// // //           ))}

// // //           <a
// // //             href="#contact"
// // //             className="rcl-btn-cta"
// // //             onClick={(e) => handleNavClick(e, 'contact')}
// // //           >
// // //             Get in Touch
// // //           </a>
// // //         </div>

// // //         {/* Hamburger */}
// // //         <button
// // //           ref={menuButtonRef}
// // //           className={`rcl-hamburger${isMobileMenuOpen ? ' active' : ''}`}
// // //           onClick={toggleMobileMenu}
// // //           aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
// // //         >
// // //           <span className="rcl-hline"></span>
// // //           <span className="rcl-hline"></span>
// // //           <span className="rcl-hline"></span>
// // //         </button>
// // //       </nav>

// // //       {/* Mobile menu panel */}
// // //       <div
// // //         ref={mobileMenuRef}
// // //         className={`rcl-mobile-nav${isMobileMenuOpen ? ' open' : ''}`}
// // //         aria-hidden={!isMobileMenuOpen}
// // //       >
// // //         <div className="rcl-mobile-links">
// // //           <Link
// // //             to="/about-us"
// // //             className="rcl-mobile-btn"
// // //             onClick={() => setIsMobileMenuOpen(false)}
// // //           >
// // //             About
// // //           </Link>
// // //           <Link
// // //             to="/services"
// // //             className="rcl-mobile-btn"
// // //             onClick={() => setIsMobileMenuOpen(false)}
// // //           >
// // //             Services
// // //           </Link>

// // //           {/* Industries dropdown (mobile) */}
// // //           <div>
// // //             <button
// // //               onClick={toggleMobileIndustries}
// // //               className="rcl-mobile-btn"
// // //               style={{ justifyContent: 'space-between' }}
// // //             >
// // //               Industries
// // //               <span className={`arrow ${isMobileIndustriesOpen ? 'open' : ''}`}>▼</span>
// // //             </button>
// // //             {isMobileIndustriesOpen && (
// // //               <div className="mobile-submenu">
// // //                 <Link to="/industries/automotive" onClick={() => setIsMobileMenuOpen(false)}>Automotive</Link>
// // //                 <Link to="/industries/engineering" onClick={() => setIsMobileMenuOpen(false)}>Engineering</Link>
// // //                 <Link to="/industries/high-tech" onClick={() => setIsMobileMenuOpen(false)}>High Tech</Link>
// // //                 <Link to="/industries/aerospace" onClick={() => setIsMobileMenuOpen(false)}>Aerospace</Link>
// // //                 <Link to="/industries/healthcare" onClick={() => setIsMobileMenuOpen(false)}>Healthcare</Link>
// // //               </div>
// // //             )}
// // //           </div>

// // //           <Link
// // //             to="/esg"
// // //             className="rcl-mobile-btn"
// // //             onClick={() => setIsMobileMenuOpen(false)}
// // //           >
// // //             ESG
// // //           </Link>

// // //           {['clients', 'offices'].map((id) => (
// // //             <button
// // //               key={id}
// // //               onClick={(e) => handleNavClick(e, id)}
// // //               className="rcl-mobile-btn"
// // //             >
// // //               {id.charAt(0).toUpperCase() + id.slice(1)}
// // //             </button>
// // //           ))}

// // //           <a
// // //             href="#contact"
// // //             className="rcl-mobile-cta"
// // //             onClick={(e) => {
// // //               e.preventDefault();
// // //               setIsMobileMenuOpen(false);
// // //               document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
// // //             }}
// // //           >
// // //             Get in Touch
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Navbar;


// // import React, { useState, useEffect, useRef } from 'react';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //   const [isHidden, setIsHidden] = useState(false);
// //   const [hasShadow, setHasShadow] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
// //   const lastScrollY = useRef(0);
// //   const mobileMenuRef = useRef(null);
// //   const menuButtonRef = useRef(null);

// //   // Handle scroll
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollY = window.scrollY;
// //       setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 80);
// //       setHasShadow(currentScrollY > 10);
// //       lastScrollY.current = currentScrollY;
// //     };
// //     window.addEventListener('scroll', handleScroll, { passive: true });
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   // Close mobile menu when clicking outside or resizing to desktop
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (
// //         isMobileMenuOpen &&
// //         mobileMenuRef.current &&
// //         !mobileMenuRef.current.contains(event.target) &&
// //         menuButtonRef.current &&
// //         !menuButtonRef.current.contains(event.target)
// //       ) {
// //         setIsMobileMenuOpen(false);
// //         setIsMobileIndustriesOpen(false);
// //       }
// //     };
// //     const handleResize = () => {
// //       if (window.innerWidth > 1100) {
// //         setIsMobileMenuOpen(false);
// //         setIsMobileIndustriesOpen(false);
// //       }
// //     };
// //     document.addEventListener('mousedown', handleClickOutside);
// //     window.addEventListener('resize', handleResize);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //       window.removeEventListener('resize', handleResize);
// //     };
// //   }, [isMobileMenuOpen]);

// //   // Smooth scroll to section (for non‑page links)
// //   const handleNavClick = (e, sectionId) => {
// //     e.preventDefault();
// //     setIsMobileMenuOpen(false);
// //     setIsMobileIndustriesOpen(false);
// //     const element = document.getElementById(sectionId);
// //     if (element) element.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen((prev) => !prev);
// //     setIsMobileIndustriesOpen(false);
// //   };

// //   const toggleMobileIndustries = (e) => {
// //     e.preventDefault();
// //     setIsMobileIndustriesOpen((prev) => !prev);
// //   };

// //   return (
// //     <>
// //       <style>{`
// //         .rcl-nav {
// //           position: fixed;
// //           top: 0; left: 0; right: 0;
// //           z-index: 500;
// //           height: 62px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           padding: 0 48px;
// //           background: rgba(255,255,255,0.97);
// //           border-bottom: 1px solid var(--bd, #d8e4ed);
// //           transition: box-shadow 0.3s, transform 0.35s;
// //           box-sizing: border-box;
// //         }
// //         .rcl-nav.hide  { transform: translateY(-100%); }
// //         .rcl-nav.shadow { box-shadow: 0 2px 24px rgba(11,29,58,0.07); }

// //         /* Logo */
// //         .rcl-logo {
// //           display: flex;
// //           align-items: center;
// //           background: none;
// //           border: none;
// //           cursor: pointer;
// //           padding: 0;
// //           flex-shrink: 0;
// //           text-decoration: none;
// //         }
// //         .rcl-logo-img {
// //           height: 34px;
// //           width: auto;
// //           display: block;
// //           object-fit: contain;
// //         }

// //         /* Desktop nav container */
// //         .rcl-desktop-nav {
// //           display: flex;
// //           align-items: center;
// //           gap: 28px;
// //         }

// //         /* Base button / link styles */
// //         .rcl-nav-btn {
// //           font-size: 0.78rem;
// //           font-weight: 600;
// //           color: var(--ts, #3a6680);
// //           text-decoration: none;
// //           letter-spacing: 0.01em;
// //           transition: color 0.2s;
// //           position: relative;
// //           background: none;
// //           border: none;
// //           cursor: pointer;
// //           padding: 0;
// //           font-family: inherit;
// //         }
// //         .rcl-nav-btn::after {
// //           content: '';
// //           position: absolute;
// //           bottom: -4px; left: 0;
// //           width: 0; height: 1.5px;
// //           background: var(--g3, #8cb27f);
// //           border-radius: 2px;
// //           transition: width 0.25s;
// //         }
// //         .rcl-nav-btn:hover { color: var(--n, #093e5d); }
// //         .rcl-nav-btn:hover::after { width: 100%; }

// //         /* Dropdown container (desktop) */
// //         .dropdown {
// //           position: relative;
// //         }
// //         .dropdown-content {
// //           position: absolute;
// //           top: 100%;
// //           left: 0;
// //           background: white;
// //           min-width: 200px;
// //           box-shadow: 0 8px 16px rgba(0,0,0,0.1);
// //           border-radius: 8px;
// //           padding: 0.5rem 0;
// //           opacity: 0;
// //           visibility: hidden;
// //           transform: translateY(-10px);
// //           transition: all 0.2s ease;
// //           z-index: 10;
// //         }
// //         .dropdown:hover .dropdown-content {
// //           opacity: 1;
// //           visibility: visible;
// //           transform: translateY(0);
// //         }
// //         .dropdown-content a {
// //           display: block;
// //           padding: 0.5rem 1rem;
// //           color: var(--ts, #3a6680);
// //           text-decoration: none;
// //           font-size: 0.78rem;
// //           font-weight: 500;
// //           transition: background 0.2s, color 0.2s;
// //         }
// //         .dropdown-content a:hover {
// //           background: #f5f7fa;
// //           color: var(--n, #093e5d);
// //         }

// //         /* CTA button */
// //         .rcl-btn-cta {
// //           background: var(--n, #093e5d) !important;
// //           color: #fff !important;
// //           padding: 8px 20px;
// //           border-radius: 4px;
// //           font-size: 0.78rem;
// //           font-weight: 700;
// //           text-decoration: none;
// //           display: inline-block;
// //           transition: background 0.2s;
// //           border: none;
// //           cursor: pointer;
// //           font-family: inherit;
// //         }
// //         .rcl-btn-cta:hover { background: var(--g, #6a9b5a) !important; }
// //         .rcl-btn-cta::after { display: none !important; }

// //         /* Hamburger */
// //         .rcl-hamburger {
// //           display: none;
// //           flex-direction: column;
// //           justify-content: space-between;
// //           width: 28px;
// //           height: 20px;
// //           background: transparent;
// //           border: none;
// //           cursor: pointer;
// //           padding: 0;
// //           z-index: 10;
// //           flex-shrink: 0;
// //         }
// //         .rcl-hline {
// //           width: 100%;
// //           height: 2px;
// //           background: var(--ts, #3a6680);
// //           border-radius: 2px;
// //           transition: all 0.3s ease-in-out;
// //           transform-origin: center;
// //           display: block;
// //         }
// //         .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
// //         .rcl-hamburger.active .rcl-hline:nth-child(2) { opacity: 0; transform: scaleX(0); }
// //         .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

// //         /* Mobile nav panel */
// //         .rcl-mobile-nav {
// //           position: fixed;
// //           top: 62px; left: 0; right: 0;
// //           background: rgba(255,255,255,0.98);
// //           backdrop-filter: blur(10px);
// //           box-shadow: 0 4px 20px rgba(0,0,0,0.1);
// //           transform: translateY(-110%);
// //           opacity: 0;
// //           transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
// //           z-index: 499;
// //           pointer-events: none;
// //           max-height: calc(100vh - 62px);
// //           overflow-y: auto;
// //           width: 100%;
// //           box-sizing: border-box;
// //         }
// //         .rcl-mobile-nav.open {
// //           transform: translateY(0);
// //           opacity: 1;
// //           pointer-events: auto;
// //         }
// //         .rcl-mobile-links {
// //           display: flex;
// //           flex-direction: column;
// //           padding: 20px 24px;
// //           gap: 0;
// //         }
// //         .rcl-mobile-btn {
// //           background: none;
// //           border: none;
// //           font-size: 0.97rem;
// //           font-weight: 600;
// //           color: var(--ts, #3a6680);
// //           padding: 14px 0;
// //           text-align: left;
// //           cursor: pointer;
// //           transition: all 0.2s;
// //           border-bottom: 1px solid var(--bd, #d8e4ed);
// //           width: 100%;
// //           font-family: inherit;
// //           letter-spacing: 0.01em;
// //           text-decoration: none;
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //         }
// //         .rcl-mobile-btn:last-of-type { border-bottom: none; }
// //         .rcl-mobile-btn:hover { color: var(--n, #093e5d); padding-left: 8px; }
// //         .mobile-submenu {
// //           padding-left: 1.5rem;
// //           display: flex;
// //           flex-direction: column;
// //         }
// //         .mobile-submenu a {
// //           padding: 10px 0;
// //           color: var(--ts, #3a6680);
// //           text-decoration: none;
// //           font-size: 0.85rem;
// //           border-bottom: none;
// //         }
// //         .mobile-submenu a:hover {
// //           color: var(--n, #093e5d);
// //           padding-left: 4px;
// //         }
// //         .arrow {
// //           font-size: 0.8rem;
// //           transition: transform 0.2s;
// //         }
// //         .arrow.open {
// //           transform: rotate(180deg);
// //         }
// //         .rcl-mobile-cta {
// //           display: block;
// //           background: var(--n, #093e5d);
// //           color: #fff;
// //           padding: 13px 20px;
// //           border-radius: 4px;
// //           font-size: 0.9rem;
// //           font-weight: 700;
// //           text-align: center;
// //           text-decoration: none;
// //           margin-top: 16px;
// //           transition: background 0.2s;
// //           font-family: inherit;
// //         }
// //         .rcl-mobile-cta:hover { background: var(--g, #6a9b5a); }

// //         /* Breakpoints */
// //         @media (max-width: 1100px) {
// //           .rcl-desktop-nav { display: none !important; }
// //           .rcl-hamburger { display: flex; }
// //           .rcl-nav { padding: 0 20px; }
// //         }
// //         @media (min-width: 1101px) {
// //           .rcl-mobile-nav { display: none; }
// //           .rcl-desktop-nav { display: flex !important; }
// //         }
// //         @media (max-width: 768px) {
// //           .rcl-nav {
// //             height: 56px;
// //             padding: 0 16px;
// //           }
// //           .rcl-logo-img { height: 28px; }
// //           .rcl-mobile-nav {
// //             top: 56px;
// //             max-height: calc(100vh - 56px);
// //           }
// //           .rcl-mobile-btn { font-size: 0.9rem; padding: 12px 0; }
// //           .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(9px) rotate(45deg); }
// //           .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
// //         }
// //         @media (max-width: 480px) {
// //           .rcl-nav { padding: 0 14px; }
// //           .rcl-logo-img { height: 24px; }
// //           .rcl-mobile-links { padding: 16px 18px; }
// //           .rcl-mobile-btn { font-size: 0.85rem; padding: 11px 0; }
// //           .rcl-mobile-cta { padding: 11px 16px; font-size: 0.85rem; }
// //           .rcl-hamburger { width: 24px; height: 18px; }
// //           .rcl-hamburger.active .rcl-hline:nth-child(1) { transform: translateY(8px) rotate(45deg); }
// //           .rcl-hamburger.active .rcl-hline:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
// //         }
// //       `}</style>

// //       <nav className={`rcl-nav${isHidden ? ' hide' : ''}${hasShadow ? ' shadow' : ''}`}>
// //         <Link to="/" className="rcl-logo" aria-label="Go to home">
// //           <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="rcl-logo-img" />
// //         </Link>

// //         {/* Desktop navigation */}
// //         <div className="rcl-desktop-nav">
// //           <Link to="/aboutus" className="rcl-nav-btn">
// //             About
// //           </Link>
// //           <Link to="/services" className="rcl-nav-btn">
// //             Services
// //           </Link>

// //           {/* Industries dropdown (desktop) */}
// //           <div className="dropdown">
// //             <button className="rcl-nav-btn">Industries</button>
// //             <div className="dropdown-content">
// //               <Link to="/industries/automotive">Automotive</Link>
// //               <Link to="/industries/engineering">Engineering</Link>
// //               <Link to="/industries/luxury-goods">Luxury Goods</Link>
// //               <Link to="/industries/project-logistics">Project Logistics</Link>
// //               <Link to="/industries/e-commerce">Retail/E-Commerce</Link>
// //               <Link to="/industries/cold-chain">Cold Chain</Link>
// //               <Link to="/industries/aviation-defense">Aviation & Defense</Link>
// //               <Link to="/industries/hi-tech">Hi-Tech</Link>
// //               <Link to="/industries/pharma-healthcare">Pharma & Healthcare</Link>
// //               <Link to="/industries/renewable-energy">Renewable Energy</Link>
// //               <Link to="/industries/space-avionics">Space & Avionics</Link>
// //               <Link to="/industries/industrial-msme">Industrial & MSME</Link>
// //             </div>
// //           </div>

// //           <Link to="/esg" className="rcl-nav-btn">
// //             ESG
// //           </Link>

// //           {['clients', 'offices'].map((id) => (
// //             <button
// //               key={id}
// //               onClick={(e) => handleNavClick(e, id)}
// //               className="rcl-nav-btn"
// //             >
// //               {id.charAt(0).toUpperCase() + id.slice(1)}
// //             </button>
// //           ))}

// //           <a
// //             href="#contact"
// //             className="rcl-btn-cta"
// //             onClick={(e) => handleNavClick(e, 'contact')}
// //           >
// //             Get in Touch
// //           </a>
// //         </div>

// //         {/* Hamburger button for mobile */}
// //         <button
// //           ref={menuButtonRef}
// //           className={`rcl-hamburger${isMobileMenuOpen ? ' active' : ''}`}
// //           onClick={toggleMobileMenu}
// //           aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
// //         >
// //           <span className="rcl-hline"></span>
// //           <span className="rcl-hline"></span>
// //           <span className="rcl-hline"></span>
// //         </button>
// //       </nav>

// //       {/* Mobile menu panel */}
// //       <div
// //         ref={mobileMenuRef}
// //         className={`rcl-mobile-nav${isMobileMenuOpen ? ' open' : ''}`}
// //         aria-hidden={!isMobileMenuOpen}
// //       >
// //         <div className="rcl-mobile-links">
// //           <Link
// //             to="/about-us"
// //             className="rcl-mobile-btn"
// //             onClick={() => setIsMobileMenuOpen(false)}
// //           >
// //             About
// //           </Link>
// //           <Link
// //             to="/services"
// //             className="rcl-mobile-btn"
// //             onClick={() => setIsMobileMenuOpen(false)}
// //           >
// //             Services
// //           </Link>

// //           {/* Industries dropdown (mobile) */}
// //           <div>
// //             <button
// //               onClick={toggleMobileIndustries}
// //               className="rcl-mobile-btn"
// //               style={{ justifyContent: 'space-between' }}
// //             >
// //               Industries
// //               <span className={`arrow ${isMobileIndustriesOpen ? 'open' : ''}`}>▼</span>
// //             </button>
// //             {isMobileIndustriesOpen && (
// //               <div className="mobile-submenu">
// //                 <Link to="/industries/automotive" onClick={() => setIsMobileMenuOpen(false)}>Automotive</Link>
// //                 <Link to="/industries/engineering" onClick={() => setIsMobileMenuOpen(false)}>Engineering</Link>
// //                 <Link to="/industries/luxury-goods" onClick={() => setIsMobileMenuOpen(false)}>Luxury Goods</Link>
// //                 <Link to="/industries/project-logistics" onClick={() => setIsMobileMenuOpen(false)}>Project Logistics</Link>
// //                 <Link to="/industries/e-commerce" onClick={() => setIsMobileMenuOpen(false)}>Retail/E-Commerce</Link>
// //                 <Link to="/industries/cold-chain" onClick={() => setIsMobileMenuOpen(false)}>Cold Chain</Link>
// //                 <Link to="/industries/aviation-defense" onClick={() => setIsMobileMenuOpen(false)}>Aviation & Defense</Link>
// //                 <Link to="/industries/hi-tech" onClick={() => setIsMobileMenuOpen(false)}>Hi-Tech</Link>
// //                 <Link to="/industries/pharma-healthcare" onClick={() => setIsMobileMenuOpen(false)}>Pharma & Healthcare</Link>
// //                 <Link to="/industries/renewable-energy" onClick={() => setIsMobileMenuOpen(false)}>Renewable Energy</Link>
// //                 <Link to="/industries/space-avionics" onClick={() => setIsMobileMenuOpen(false)}>Space & Avionics</Link>
// //                 <Link to="/industries/industrial-msme" onClick={() => setIsMobileMenuOpen(false)}>Industrial & MSME</Link>
// //               </div>
// //             )}
// //           </div>

// //           <Link
// //             to="/esg"
// //             className="rcl-mobile-btn"
// //             onClick={() => setIsMobileMenuOpen(false)}
// //           >
// //             ESG
// //           </Link>

// //           {['clients', 'offices'].map((id) => (
// //             <button
// //               key={id}
// //               onClick={(e) => handleNavClick(e, id)}
// //               className="rcl-mobile-btn"
// //             >
// //               {id.charAt(0).toUpperCase() + id.slice(1)}
// //             </button>
// //           ))}

// //           <a
// //             href="#contact"
// //             className="rcl-mobile-cta"
// //             onClick={(e) => {
// //               e.preventDefault();
// //               setIsMobileMenuOpen(false);
// //               document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
// //             }}
// //           >
// //             Get in Touch
// //           </a>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Navbar;










// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isHidden, setIsHidden] = useState(false);
//   const [hasShadow, setHasShadow] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const lastScrollY = useRef(0);
//   const mobileMenuRef = useRef(null);
//   const menuButtonRef = useRef(null);

//   // Handle scroll: hide on scroll down, show on up
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 80);
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

//   // Smooth scroll to section (for non‑page links)
//   const handleNavClick = (e, sectionId) => {
//     e.preventDefault();
//     setIsMobileMenuOpen(false);
//     setIsMobileIndustriesOpen(false);
//     setIsMobileServicesOpen(false);
//     const element = document.getElementById(sectionId);
//     if (element) element.scrollIntoView({ behavior: 'smooth' });
//   };

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
//         }
//         .rcl-logo-img {
//           height: 34px;
//           width: auto;
//           display: block;
//           object-fit: contain;
//         }

//         /* Desktop nav container */
//         .rcl-desktop-nav {
//           display: flex;
//           align-items: center;
//           gap: 28px;
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
//         }
//         .dropdown-content {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           background: white;
//           min-width: 200px;
//           box-shadow: 0 8px 16px rgba(0,0,0,0.1);
//           border-radius: 8px;
//           padding: 0.5rem 0;
//           opacity: 0;
//           visibility: hidden;
//           transform: translateY(-10px);
//           transition: all 0.2s ease;
//           z-index: 10;
//         }
//         .dropdown:hover .dropdown-content {
//           opacity: 1;
//           visibility: visible;
//           transform: translateY(0);
//         }
//         .dropdown-content a {
//           display: block;
//           padding: 0.5rem 1rem;
//           color: var(--ts, #3a6680);
//           text-decoration: none;
//           font-size: 0.78rem;
//           font-weight: 500;
//           transition: background 0.2s, color 0.2s;
//         }
//         .dropdown-content a:hover {
//           background: #f5f7fa;
//           color: var(--n, #093e5d);
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

//         /* Breakpoints */
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

//       <nav className={`rcl-nav${isHidden ? ' hide' : ''}${hasShadow ? ' shadow' : ''}`}>
//         <Link to="/" className="rcl-logo" aria-label="Go to home">
//           <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="rcl-logo-img" />
//         </Link>

//         {/* Desktop navigation */}
//         <div className="rcl-desktop-nav">
//           <Link to="/aboutus" className="rcl-nav-btn">
//             About
//           </Link>

//           {/* Services dropdown (desktop) */}
//           <div className="dropdown">
//             <button className="rcl-nav-btn">Services</button>
//             <div className="dropdown-content">
//               <Link to="/services/air-import">Air Imports & Exports</Link>
//               <Link to="/services/ocean-import">Ocean Imports & Exports</Link>
//               <Link to="/services/consolidation-services">Consolidation Services</Link>
//               <Link to="/services/customs-clearance">Customs Clearance</Link>
//             </div>
//           </div>

//           {/* Industries dropdown (desktop) */}
//           <div className="dropdown">
//             <button className="rcl-nav-btn">Industries</button>
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

//           <Link to="/esg" className="rcl-nav-btn">
//             ESG
//           </Link>
//           <Link to="/clients" className="rcl-nav-btn">
//             Client
//           </Link>
//           {[ 'offices'].map((id) => (
//             <button
//               key={id}
//               onClick={(e) => handleNavClick(e, id)}
//               className="rcl-nav-btn"
//             >
//               {id.charAt(0).toUpperCase() + id.slice(1)}
//             </button>
//           ))}

//           <a
//             href="#contact"
//             className="rcl-btn-cta"
//             onClick={(e) => handleNavClick(e, 'contact')}
//           >
//             Get in Touch
//           </a>
//         </div>

//         {/* Hamburger button for mobile */}
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
//           <Link
//             to="/aboutus"
//             className="rcl-mobile-btn"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             About
//           </Link>

//           {/* Services dropdown (mobile) */}
//           <div>
//             <button
//               onClick={toggleMobileServices}
//               className="rcl-mobile-btn"
//               style={{ justifyContent: 'space-between' }}
//             >
//               Services
//               <span className={`arrow ${isMobileServicesOpen ? 'open' : ''}`}>▼</span>
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

//           {/* Industries dropdown (mobile) */}
//           <div>
//             <button
//               onClick={toggleMobileIndustries}
//               className="rcl-mobile-btn"
//               style={{ justifyContent: 'space-between' }}
//             >
//               Industries
//               <span className={`arrow ${isMobileIndustriesOpen ? 'open' : ''}`}>▼</span>
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

//           <Link
//             to="/esg"
//             className="rcl-mobile-btn"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             ESG
//           </Link>

//           {['clients', 'offices'].map((id) => (
//             <button
//               key={id}
//               onClick={(e) => handleNavClick(e, id)}
//               className="rcl-mobile-btn"
//             >
//               {id.charAt(0).toUpperCase() + id.slice(1)}
//             </button>
//           ))}

//           <a
//             href="#contact"
//             className="rcl-mobile-cta"
//             onClick={(e) => {
//               e.preventDefault();
//               setIsMobileMenuOpen(false);
//               document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//             }}
//           >
//             Get in Touch
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // const [isHidden, setIsHidden] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Handle scroll: hide on scroll down, show on up, and add shadow
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 80);
      setHasShadow(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or resizing to desktop
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

  // Smooth scroll to section (for non‑page links)
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsMobileIndustriesOpen(false);
    setIsMobileServicesOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsMobileIndustriesOpen(false);
    setIsMobileServicesOpen(false);
  };

  const toggleMobileIndustries = (e) => {
    e.preventDefault();
    setIsMobileIndustriesOpen((prev) => !prev);
    if (isMobileServicesOpen) setIsMobileServicesOpen(false);
  };

  const toggleMobileServices = (e) => {
    e.preventDefault();
    setIsMobileServicesOpen((prev) => !prev);
    if (isMobileIndustriesOpen) setIsMobileIndustriesOpen(false);
  };

  return (
    <>
      <style>{`
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
        .rcl-nav.hide  { transform: translateY(-100%); }
        .rcl-nav.shadow { box-shadow: 0 2px 24px rgba(11,29,58,0.07); }

        /* Logo */
        .rcl-logo {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
          text-decoration: none;
        }
        .rcl-logo-img {
          height: 34px;
          width: auto;
          display: block;
          object-fit: contain;
        }

        /* Desktop nav container */
        .rcl-desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        /* Base button / link styles */
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
          font-family: inherit;
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
        .rcl-nav-btn:hover { color: var(--n, #093e5d); }
        .rcl-nav-btn:hover::after { width: 100%; }

        /* Dropdown container (desktop) */
        .dropdown {
          position: relative;
        }
        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          min-width: 200px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          border-radius: 8px;
          padding: 0.5rem 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.2s ease;
          z-index: 20; /* ensures dropdown is above other content */
        }
        .dropdown:hover .dropdown-content {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-content a {
          display: block;
          padding: 0.5rem 1rem;
          color: var(--ts, #3a6680);
          text-decoration: none;
          font-size: 0.78rem;
          font-weight: 500;
          transition: background 0.2s, color 0.2s;
        }
        .dropdown-content a:hover {
          background: #f5f7fa;
          color: var(--n, #093e5d);
        }

        /* CTA button */
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
          font-family: inherit;
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
          font-family: inherit;
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
          font-family: inherit;
        }
        .rcl-mobile-cta:hover { background: var(--g, #6a9b5a); }

        /* Breakpoints */
        @media (max-width: 1100px) {
          .rcl-desktop-nav { display: none !important; }
          .rcl-hamburger { display: flex; }
          .rcl-nav { padding: 0 20px; }
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
        <Link to="/" className="rcl-logo" aria-label="Go to home">
          <img src="/logo1.png" alt="Robinsons Cargo & Logistics" className="rcl-logo-img" />
        </Link>

        {/* Desktop navigation */}
        <div className="rcl-desktop-nav">
          <Link to="/" className="rcl-nav-btn">Home</Link>
          <Link to="/aboutus" className="rcl-nav-btn">About</Link>

          {/* Services dropdown */}
          <div className="dropdown">
            <button className="rcl-nav-btn">Services</button>
            <div className="dropdown-content">
              <Link to="/services/air-import">Air Imports & Exports</Link>
              <Link to="/services/ocean-import">Ocean Imports & Exports</Link>
              <Link to="/services/consolidation-services">Consolidation Services</Link>
              <Link to="/services/customs-clearance">Customs Clearance</Link>
            </div>
          </div>

          {/* Industries dropdown */}
          <div className="dropdown">
            <button className="rcl-nav-btn">Industries</button>
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

          <Link to="/esg" className="rcl-nav-btn">ESG</Link>
          <Link to="/clients" className="rcl-nav-btn">Client</Link>
          <button onClick={(e) => handleNavClick(e, 'offices')} className="rcl-nav-btn">Offices</button>

          <a href="#contact" className="rcl-btn-cta" onClick={(e) => handleNavClick(e, 'contact')}>
            Get in Touch
          </a>
        </div>

        {/* Hamburger button */}
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

      {/* Mobile menu panel */}
      <div
        ref={mobileMenuRef}
        className={`rcl-mobile-nav${isMobileMenuOpen ? ' open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="rcl-mobile-links">
          <Link to="/" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/aboutus" className="rcl-mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>About</Link>

          {/* Mobile Services dropdown */}
          <div>
            <button onClick={toggleMobileServices} className="rcl-mobile-btn" style={{ justifyContent: 'space-between' }}>
              Services <span className={`arrow ${isMobileServicesOpen ? 'open' : ''}`}>▼</span>
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

          {/* Mobile Industries dropdown */}
          <div>
            <button onClick={toggleMobileIndustries} className="rcl-mobile-btn" style={{ justifyContent: 'space-between' }}>
              Industries <span className={`arrow ${isMobileIndustriesOpen ? 'open' : ''}`}>▼</span>
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
          <button onClick={(e) => handleNavClick(e, 'offices')} className="rcl-mobile-btn">Offices</button>

          <a href="#contact" className="rcl-mobile-cta" onClick={(e) => {
            e.preventDefault();
            setIsMobileMenuOpen(false);
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>Get in Touch</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;