import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Industries from './Industries';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: 'End-to-End Solutions',
      icon: '🔄',
      description: 'Comprehensive logistics services from air and ocean freight to warehousing and distribution.',
    //   longDescription: 'We provide complete supply chain management solutions that cover every aspect of your logistics needs. From initial pickup to final delivery, we ensure seamless coordination across all modes of transport.',
      features: ['Air Freight', 'Ocean Freight', 'Warehousing', 'Distribution', 'Supply Chain Management'],
      color: '#7BAB6E',
      gradient: 'linear-gradient(135deg, #7BAB6E20, #7BAB6E08)'
    },
    {
      id: 2,
      title: 'Global Reach, Local Expertise',
      icon: '🌍',
      description: 'Extensive global network combined with deep local knowledge for effective, tailored solutions.',
    //   longDescription: 'With offices across 4 continents and a network of 120+ strategic partners, we combine international scale with local market understanding to deliver solutions that work in every region.',
      features: ['180+ Countries', '15 Global Offices', '120+ Partners', 'Local Teams', '24/7 Support'],
      color: '#1A4F72',
      gradient: 'linear-gradient(135deg, #1A4F7220, #1A4F7208)'
    },
    {
      id: 3,
      title: 'Industry Expertise',
      icon: '🏭',
      description: 'Specialised teams with in-depth knowledge across various sectors.',
    //   longDescription: 'Our teams possess deep industry knowledge across automotive, pharmaceuticals, retail, manufacturing, and technology sectors, ensuring your specific requirements are met with precision.',
      features: ['Automotive', 'Pharmaceuticals', 'Retail', 'Manufacturing', 'Technology'],
      color: '#5D8A52',
      gradient: 'linear-gradient(135deg, #5D8A5220, #5D8A5208)'
    },
    {
      id: 4,
      title: 'Customer-Centric Approach',
      icon: '❤️',
      description: 'Personalised support and long-term partnerships built on trust.',
    //   longDescription: 'We believe in building lasting relationships through personalized service, dedicated account management, and solutions that evolve with your business needs.',
      features: ['Dedicated Account Managers', 'Custom Solutions', '24/7 Support', 'Real-time Tracking', 'Flexible Options'],
      color: '#2A6A96',
      gradient: 'linear-gradient(135deg, #2A6A9620, #2A6A9608)'
    }
  ];
  useEffect(() => {
    // Add visible class to all elements with animate-on-scroll class after a short delay
    const timer = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        el.classList.add('visible');
      });
      document.querySelectorAll('.stat-card-new').forEach((el) => {
        el.classList.add('visible');
      });
      document.querySelectorAll('.reason-card-new').forEach((el) => {
        el.classList.add('visible');
      });
      document.querySelectorAll('.cert-card-new').forEach((el) => {
        el.classList.add('visible');
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
   <>
    <main className="why-choose-page-new">
      {/* Hero Section */}
      <section className="why-hero-new">
        <div className="hero-backdrop-new"></div>
        <div className="container">
          <div className="hero-wrapper-new">
            <div className="hero-left-new">
              <div className="hero-badge-new">
                <span className="badge-pulse"></span>
                <span>Trusted Since 1954</span>
              </div>
              <h1 className="hero-title-new">
                Why Choose
                <span className="title-gradient-new"> Robinsons?</span>
              </h1>
              <p className="hero-description-new">
                For over seven decades, we've been the partner of choice for businesses seeking 
                excellence in logistics. Discover what makes us different.
              </p>
              <div className="hero-buttons-new">
                <Link to="/contact" className="btn-primary-new">
                  Partner With Us
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link to="/services" className="btn-outline-new">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="hero-right-new">
              <div className="floating-card-new floating-card-1">
                <span>🏆</span>
                <div>70+ Years</div>
              </div>
              <div className="floating-card-new floating-card-2">
                <span>🌍</span>
                <div>Global Network</div>
              </div>
              <div className="floating-card-new floating-card-3">
                <span>⭐</span>
                <div>99.5% Reliability</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave-new">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64 C480,128 960,0 1440,64 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>
      {/* Reasons Section */}
      <section className="reasons-section-new">
        <div className="container">
          <div className="reasons-grid-new">
            {reasons.map((reason, index) => (
              <div 
                key={reason.id}
                className="reason-card-new animate-on-scroll"
              >
                <div className="card-icon-new" style={{ background: reason.gradient }}>
                  <span style={{ color: reason.color }}>{reason.icon}</span>
                </div>
                <h3 className="card-title-new">{reason.title}</h3>
                <p className="card-description-new">{reason.description}</p>
                <div className="card-features-new">
                  {reason.features.map((feature, idx) => (
                    <span key={idx} className="feature-pill">
                      {feature}
                    </span>
                  ))}
                </div>
                {/* <div className="card-hover-content">
                  <p>{reason.longDescription}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
<Industries/>
     
    </main>
   </>
  );
};

export default WhyChooseUs;