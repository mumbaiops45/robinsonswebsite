import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          
          {/* Company Info with Logo */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img 
                src="/Robinsonslogo.png" 
                alt="Robinsons Logistics" 
                className="footer-logo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150x50?text=Robinsons';
                }}
              />
            </Link>
            <p className="footer-description">
              India's trusted end-to-end logistics partner since 1954. Four generations of excellence in air, ocean, and supply chain solutions — 15 offices, 120+ global partners.
            </p>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/air-freight" className="footer-link">Air Imports & Exports</Link></li>
              <li><Link to="/services/ocean-freight" className="footer-link">Ocean Imports & Exports</Link></li>
              <li><Link to="/services/warehousing" className="footer-link">Consolidation Services</Link></li>
              <li><Link to="/services/custom-clearance" className="footer-link">Customs Clearance</Link></li>
              <li><Link to="/services/supply-chain" className="footer-link">3PL & Warehousing</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="footer-section">
            <h4 className="footer-heading">Industries</h4>
            <ul className="footer-links">
              <li><Link to="/industries/automotive" className="footer-link">Automotive</Link></li>
              <li><Link to="/industries/aerospace" className="footer-link">Aviation & Defense</Link></li>
              <li><Link to="/industries/healthcare" className="footer-link">Pharma & Healthcare</Link></li>
              <li><Link to="/industries/luxury" className="footer-link">Luxury Goods</Link></li>
              <li><Link to="/industries/project-logistics" className="footer-link">Project Logistics</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about/our-story" className="footer-link">About Us</Link></li>
              <li><Link to="/about/certifications" className="footer-link">Certifications</Link></li>
              <li><Link to="/about/associations" className="footer-link">Associations</Link></li>
              <li><Link to="/esg" className="footer-link">ESG</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} Robinsons Cargo and Logistics Pvt Ltd. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
            <Link to="/cookies" className="footer-legal-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;