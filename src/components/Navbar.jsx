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
    { name: 'Air Imports & Exports', path: '/services/air-freight' },
    { name: 'Consolidation Services', path: '/services/ocean-freight' },
    { name: 'Customs Clearance', path: '/services/custom-clearance' },
    { name: 'Ocean Import & Exports', path: '/services/warehousing' },
    { name: '3PL', path: '/services/supply-chain' },
  ];

  const industriesItems = [
    { name: 'Automotive', path: '/industries/automotive' },
    { name: 'Aviation & Defense', path: '/industries/healthcare' },
    { name: 'Engineering', path: '/industries/retail' },
    { name: 'High-Tech', path: '/industries/manufacturing' },
    { name: 'Luxury', path: '/industries/oil-gas' },
    { name: 'Pharma & Healthcare', path: '/industries/aerospace' },
    { name: 'Project Logistics', path: '/industries/Logistics' },
    { name: 'Renewable Energy', path: '/industries/Energy' },
    { name: 'Retail/E-Commerce', path: '/industries/Commerce' },

  ];

  const aboutItems = [
    { name: 'Company Profile', path: '/about/our-story' },
    { name: 'Core Values', path: '/about/leadership' },
    { name: 'Certifications', path: '/about/mission-values' },
    { name: 'Associations', path: '/about/sustainability' },
    { name: 'Licenses', path: '/about/global-network' },
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