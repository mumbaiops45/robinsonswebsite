// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../App.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu and dropdowns when route changes
//   useEffect(() => {
//     setIsOpen(false);
//     setOpenDropdown(null);
//   }, [location]);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest('.navbar-dropdown')) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const isActive = (path) => location.pathname === path;

//   const handleDropdownMouseEnter = (name) => setOpenDropdown(name);
//   const handleDropdownMouseLeave = () => setOpenDropdown(null);

//   const toggleDropdown = (dropdown) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   const servicesItems = [
//     { name: 'Air Freight', path: '/services/air-freight' },
//     { name: 'Ocean Freight', path: '/services/ocean-freight' },
//     { name: 'Custom Clearance', path: '/services/custom-clearance' },
//     { name: 'Warehousing', path: '/services/warehousing' },
//     { name: 'Supply Chain Solutions', path: '/services/supply-chain' },
//     { name: 'Project Logistics', path: '/services/project-logistics' },
//   ];

//   const industriesItems = [
//     { name: 'Automotive', path: '/industries/automotive' },
//     { name: 'Healthcare', path: '/industries/healthcare' },
//     { name: 'Retail & E-commerce', path: '/industries/retail' },
//     { name: 'Manufacturing', path: '/industries/manufacturing' },
//     { name: 'Oil & Gas', path: '/industries/oil-gas' },
//     { name: 'Aerospace', path: '/industries/aerospace' },
//   ];

//   const aboutItems = [
//     { name: 'Our Story', path: '/about/our-story' },
//     { name: 'Leadership', path: '/about/leadership' },
//     { name: 'Mission & Values', path: '/about/mission-values' },
//     { name: 'Sustainability', path: '/about/sustainability' },
//     { name: 'Global Network', path: '/about/global-network' },
//   ];

//   const renderDropdown = (key, label, items, wide = false) => (
//     <div
//       className="navbar-dropdown"
//       onMouseEnter={() => handleDropdownMouseEnter(key)}
//       onMouseLeave={handleDropdownMouseLeave}
//     >
//       <button
//         className={`navbar-dropdown-btn ${location.pathname.startsWith('/' + key) ? 'navbar-link-active' : ''}`}
//         onClick={() => toggleDropdown(key)}
//         aria-haspopup="true"
//         aria-expanded={openDropdown === key}
//       >
//         {label}
//         <svg className={`dropdown-chevron ${openDropdown === key ? 'chevron-open' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>
//       {/* Invisible bridge to prevent hover gap flicker */}
//       <div className="dropdown-bridge" />
//       <div className={`dropdown-menu ${wide ? 'dropdown-menu-wide' : ''} ${openDropdown === key ? 'dropdown-open' : ''}`}>
//         {items.map((item) => (
//           <Link key={item.name} to={item.path} className="dropdown-item">
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} role="navigation" aria-label="Main navigation">
//       <div className="navbar-container">
//         <div className="navbar-content">

//           {/* Logo */}
//           <Link to="/" className="navbar-logo" aria-label="Robinsons - Home">
//             <img
//               src="/Robinsonslogo.png"
//               alt="Robinsons Logistics"
//               className="navbar-logo-img"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = '/logo-placeholder.png';
//               }}
//             />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="navbar-desktop">
//             <Link to="/" className={`navbar-link ${isActive('/') ? 'navbar-link-active' : ''}`}>
//               Home
//             </Link>

//             {renderDropdown('about', 'About Us', aboutItems)}
//             {renderDropdown('services', 'Services', servicesItems, true)}
//             {renderDropdown('industries', 'Industries', industriesItems)}

//             <Link to="/esg" className={`navbar-link ${isActive('/esg') ? 'navbar-link-active' : ''}`}>
//               ESG
//             </Link>
//             <Link to="/careers" className={`navbar-link ${isActive('/careers') ? 'navbar-link-active' : ''}`}>
//               Careers
//             </Link>
//             <Link to="/contact" className="navbar-cta">
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="navbar-mobile-btn"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label={isOpen ? 'Close menu' : 'Open menu'}
//             aria-expanded={isOpen}
//           >
//             {isOpen ? '✕' : '☰'}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="navbar-mobile" role="dialog" aria-label="Mobile navigation">
//             <div className="navbar-mobile-menu">
//               <Link
//                 to="/"
//                 className={`navbar-mobile-link ${isActive('/') ? 'navbar-mobile-link-active' : ''}`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>

//               {/* About Mobile */}
//               <div>
//                 <button
//                   className="navbar-mobile-dropdown-btn"
//                   onClick={() => toggleDropdown('about-mobile')}
//                   aria-expanded={openDropdown === 'about-mobile'}
//                 >
//                   <span className={location.pathname.startsWith('/about') ? 'text-accent font-semibold' : ''}>
//                     About Us
//                   </span>
//                   <svg className={`mobile-chevron ${openDropdown === 'about-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 {openDropdown === 'about-mobile' && (
//                   <div className="navbar-mobile-submenu">
//                     {aboutItems.map((item) => (
//                       <Link key={item.name} to={item.path} className="navbar-mobile-sub-link" onClick={() => setIsOpen(false)}>
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Services Mobile */}
//               <div>
//                 <button
//                   className="navbar-mobile-dropdown-btn"
//                   onClick={() => toggleDropdown('services-mobile')}
//                   aria-expanded={openDropdown === 'services-mobile'}
//                 >
//                   <span className={location.pathname.startsWith('/services') ? 'text-accent font-semibold' : ''}>
//                     Services
//                   </span>
//                   <svg className={`mobile-chevron ${openDropdown === 'services-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 {openDropdown === 'services-mobile' && (
//                   <div className="navbar-mobile-submenu">
//                     {servicesItems.map((item) => (
//                       <Link key={item.name} to={item.path} className="navbar-mobile-sub-link" onClick={() => setIsOpen(false)}>
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Industries Mobile */}
//               <div>
//                 <button
//                   className="navbar-mobile-dropdown-btn"
//                   onClick={() => toggleDropdown('industries-mobile')}
//                   aria-expanded={openDropdown === 'industries-mobile'}
//                 >
//                   <span className={location.pathname.startsWith('/industries') ? 'text-accent font-semibold' : ''}>
//                     Industries
//                   </span>
//                   <svg className={`mobile-chevron ${openDropdown === 'industries-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 {openDropdown === 'industries-mobile' && (
//                   <div className="navbar-mobile-submenu">
//                     {industriesItems.map((item) => (
//                       <Link key={item.name} to={item.path} className="navbar-mobile-sub-link" onClick={() => setIsOpen(false)}>
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/esg"
//                 className={`navbar-mobile-link ${isActive('/esg') ? 'navbar-mobile-link-active' : ''}`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 ESG
//               </Link>
//               <Link
//                 to="/careers"
//                 className={`navbar-mobile-link ${isActive('/careers') ? 'navbar-mobile-link-active' : ''}`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Careers
//               </Link>
//               <Link to="/contact" className="navbar-mobile-cta" onClick={() => setIsOpen(false)}>
//                 Contact
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar-dropdown')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  const handleDropdownMouseEnter = (name) => setOpenDropdown(name);
  const handleDropdownMouseLeave = () => setOpenDropdown(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const servicesItems = [
    { name: 'Air Freight', path: '/services/air-freight' },
    { name: 'Ocean Freight', path: '/services/ocean-freight' },
    { name: 'Custom Clearance', path: '/services/custom-clearance' },
    { name: 'Warehousing', path: '/services/warehousing' },
    { name: 'Supply Chain Solutions', path: '/services/supply-chain' },
    { name: 'Project Logistics', path: '/services/project-logistics' },
  ];

  const industriesItems = [
    { name: 'Automotive', path: '/industries/automotive' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Retail & E-commerce', path: '/industries/retail' },
    { name: 'Manufacturing', path: '/industries/manufacturing' },
    { name: 'Oil & Gas', path: '/industries/oil-gas' },
    { name: 'Aerospace', path: '/industries/aerospace' },
  ];

  const aboutItems = [
    { name: 'Our Story', path: '/about/our-story' },
    { name: 'Leadership', path: '/about/leadership' },
    { name: 'Mission & Values', path: '/about/mission-values' },
    { name: 'Sustainability', path: '/about/sustainability' },
    { name: 'Global Network', path: '/about/global-network' },
  ];

  const renderDropdown = (key, label, items, wide = false) => (
    <div
      className="navbar-dropdown"
      onMouseEnter={() => handleDropdownMouseEnter(key)}
      onMouseLeave={handleDropdownMouseLeave}
    >
      <button
        className={`navbar-dropdown-btn ${location.pathname.startsWith('/' + key) ? 'navbar-link-active' : ''}`}
        onClick={() => toggleDropdown(key)}
        aria-haspopup="true"
        aria-expanded={openDropdown === key}
      >
        {label}
        <svg className={`dropdown-chevron ${openDropdown === key ? 'chevron-open' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="dropdown-bridge" />
      <div className={`dropdown-menu ${wide ? 'dropdown-menu-wide' : ''} ${openDropdown === key ? 'dropdown-open' : ''}`}>
        {items.map((item) => (
          <Link key={item.name} to={item.path} className="dropdown-item">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-content">

          {/* Logo */}
          <Link to="/" className="navbar-logo" aria-label="Robinsons - Home">
            <img
              src="/Robinsonslogo.png"
              alt="Robinsons Logistics"
              className="navbar-logo-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/logo-placeholder.png';
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-desktop">
            <Link to="/" className={`navbar-link ${isActive('/') ? 'navbar-link-active' : ''}`}>
              Home
            </Link>

            {renderDropdown('about', 'About Us', aboutItems)}
            {renderDropdown('services', 'Services', servicesItems, true)}
            {renderDropdown('industries', 'Industries', industriesItems)}

            <Link to="/esg" className={`navbar-link ${isActive('/esg') ? 'navbar-link-active' : ''}`}>
              ESG
            </Link>
            <Link to="/careers" className={`navbar-link ${isActive('/careers') ? 'navbar-link-active' : ''}`}>
              Careers
            </Link>
            <Link to="/contact" className="navbar-cta">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar-mobile-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <>
            <div className="navbar-mobile-overlay" onClick={() => setIsOpen(false)} />
            <div className="navbar-mobile" role="dialog" aria-label="Mobile navigation">
              <div className="navbar-mobile-header">
                <span className="navbar-mobile-title">Menu</span>
                <button className="navbar-mobile-close" onClick={() => setIsOpen(false)} aria-label="Close menu">
                  ✕
                </button>
              </div>
              <div className="navbar-mobile-menu">
                <Link
                  to="/"
                  className={`navbar-mobile-link ${isActive('/') ? 'navbar-mobile-link-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* About Mobile */}
                <div className="navbar-mobile-dropdown">
                  <button
                    className="navbar-mobile-dropdown-btn"
                    onClick={() => toggleDropdown('about-mobile')}
                    aria-expanded={openDropdown === 'about-mobile'}
                  >
                    <span className={location.pathname.startsWith('/about') ? 'text-accent' : ''}>
                      About Us
                    </span>
                    <svg className={`mobile-chevron ${openDropdown === 'about-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === 'about-mobile' && (
                    <div className="navbar-mobile-submenu">
                      {aboutItems.map((item) => (
                        <Link key={item.name} to={item.path} className="navbar-mobile-sub-link" onClick={() => setIsOpen(false)}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Services Mobile */}
                <div className="navbar-mobile-dropdown">
                  <button
                    className="navbar-mobile-dropdown-btn"
                    onClick={() => toggleDropdown('services-mobile')}
                    aria-expanded={openDropdown === 'services-mobile'}
                  >
                    <span className={location.pathname.startsWith('/services') ? 'text-accent' : ''}>
                      Services
                    </span>
                    <svg className={`mobile-chevron ${openDropdown === 'services-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === 'services-mobile' && (
                    <div className="navbar-mobile-submenu">
                      {servicesItems.map((item) => (
                        <Link key={item.name} to={item.path} className="navbar-mobile-sub-link" onClick={() => setIsOpen(false)}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Industries Mobile */}
                <div className="navbar-mobile-dropdown">
                  <button
                    className="navbar-mobile-dropdown-btn"
                    onClick={() => toggleDropdown('industries-mobile')}
                    aria-expanded={openDropdown === 'industries-mobile'}
                  >
                    <span className={location.pathname.startsWith('/industries') ? 'text-accent' : ''}>
                      Industries
                    </span>
                    <svg className={`mobile-chevron ${openDropdown === 'industries-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === 'industries-mobile' && (
                    <div className="navbar-mobile-submenu">
                      {industriesItems.map((item) => (
                        <Link key={item.name} to={item.path} className="navbar-mobile-sub-link" onClick={() => setIsOpen(false)}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/esg"
                  className={`navbar-mobile-link ${isActive('/esg') ? 'navbar-mobile-link-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  ESG
                </Link>
                <Link
                  to="/careers"
                  className={`navbar-mobile-link ${isActive('/careers') ? 'navbar-mobile-link-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </Link>
                <Link to="/contact" className="navbar-mobile-cta" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;