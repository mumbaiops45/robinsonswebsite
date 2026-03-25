import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';

const About = () => {
  return (
   <>
    <main className="about-page">
      <section className="about-company">
        <div className="container">
          <div className="about-company-grid">
            <div className="about-company-image">
              <div className="image-wrapper">
                <img 
                  src="/about-company.jpg" 
                  alt="Robinsons Cargo and Logistics"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                  }}
                />
                <div className="image-badge">
                  <span>70+ Years</span>
                  <span>of Excellence</span>
                </div>
              </div>
            </div>
            <div className="about-company-content">
              <div className="section-eyebrow">About Robinsons</div>
              <h2 className="section-heading">
                Powering Logistics Excellence
                <span className="highlight"> Since 1954</span>
              </h2>
              <p className="section-body">
                Robinsons Cargo and Logistics, a leader in the industry, specialises in air, 
                sea and supply chain logistics services.
              </p>
              <p className="section-body">
                We drive supply chain innovation and deliver unparalleled customer experiences 
                through our comprehensive, tailored solutions.
              </p>
              <div className="about-company-features">
                <div className="feature-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" fill="none"/>
                    <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" fill="none"/>
                  </svg>
                  <span>Air Freight Solutions</span>
                </div>
                <div className="feature-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 12h20M12 2v20M4 4l16 16M20 4L4 20" stroke="currentColor" fill="none"/>
                  </svg>
                  <span>Sea Freight Services</span>
                </div>
                <div className="feature-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" fill="none"/>
                    <circle cx="12" cy="12" r="4" stroke="currentColor"/>
                  </svg>
                  <span>Supply Chain Management</span>
                </div>
              </div>
              <Link to="/services" className="about-company-btn">
                Know More
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Services/>
    </main></>
  );
};

export default About;