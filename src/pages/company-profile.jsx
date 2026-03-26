import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CompanyProfile = () => {
  const [activeTimeline, setActiveTimeline] = useState(null);
  const [counts, setCounts] = useState({
    employees: 0,
    offices: 0,
    partners: 0,
    years: 0
  });
  const statsRef = useRef(null);

  const timelineData = [
    {
      year: '1954',
      title: 'The Beginning',
      description: 'Robinsons Bombay Pvt Ltd commenced stevedoring operations in Mumbai',
      icon: '⚓',
      color: '#7BAB6E'
    },
    {
      year: '1972',
      title: 'Air Freight Expansion',
      description: 'Entered freight forwarding as Robinsons Air Services — establishing the air cargo foundation',
      icon: '✈️',
      color: '#1A4F72'
    },
    {
      year: '1970-2000',
      title: 'National Presence',
      description: 'Expanded to Delhi, Bengaluru, Hyderabad, Kolkata, Chennai; obtained IATA & FIATA accreditation',
      icon: '🇮🇳',
      color: '#5D8A52'
    },
    {
      year: '2000-2010',
      title: 'Infrastructure Growth',
      description: 'ISO 9001 certified; restructured into Pvt Ltd; launched cold chain in Bhiwandi & New Delhi',
      icon: '🏭',
      color: '#2A6A96'
    },
    {
      year: '2017',
      title: 'Quality Milestone',
      description: 'Awarded GDP & AEO-LO Certification — among the first in India',
      icon: '🏆',
      color: '#7BAB6E'
    },
    {
      year: '2021-22',
      title: 'Global Integration',
      description: 'Joined Indian Space Association; became WCA Interglobal member (ID: 98952)',
      icon: '🌍',
      color: '#1A4F72'
    },
    {
      year: '2024',
      title: 'Sustainable Future',
      description: 'Achieved ISO 14001 Environmental Management System Certification',
      icon: '🌱',
      color: '#5D8A52'
    }
  ];

  const stats = [
    { icon: '👥', value: 150, label: 'Professionals', suffix: '+', key: 'employees' },
    { icon: '📍', value: 15, label: 'Offices in India', suffix: '', key: 'offices' },
    { icon: '🤝', value: 120, label: 'Global Partners', suffix: '+', key: 'partners' },
    { icon: '📅', value: 70, label: 'Years of Excellence', suffix: '+', key: 'years' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;

    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.value / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCounts(prev => ({ ...prev, [stat.key]: stat.value }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [stat.key]: Math.floor(current) }));
        }
      }, stepTime);
    });
  };

  return (
    <main className="company-profile-page">
      {/* Hero Section */}
      <section className="company-hero">
        <div className="company-hero-bg">
          <div className="company-hero-overlay"></div>
          <div className="company-hero-pattern"></div>
        </div>
        <div className="container">
          <div className="company-hero-content">
            <div className="company-hero-badge">
              <span>Our Legacy</span>
            </div>
            <h1 className="company-hero-title">
              Seven Decades of
              <span className="title-highlight"> Moving the World</span>
            </h1>
            <p className="company-hero-description">
              Founded in 1954 as a stevedoring firm in Mumbai, Robinsons has evolved across four generations 
              of the Vazirani family into one of India's most trusted freight forwarding specialists — 
              affiliated with 120+ global logistics partners.
            </p>
          </div>
        </div>
        <div className="company-hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64 C480,128 960,0 1440,64 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="company-stats" ref={statsRef}>
        <div className="container">
          <div className="company-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="company-stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{counts[stat.key]}{stat.suffix}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="company-about">
        <div className="container">
          <div className="company-about-grid">
            <div className="company-about-content">
              <div className="section-eyebrow">About Us</div>
              <h2 className="section-title">
                Powering Logistics Excellence
                <span className="title-highlight"> Since 1954</span>
              </h2>
              <p className="section-text">
                Robinsons Cargo and Logistics, a leader in the industry, specialises in air, 
                sea and supply chain logistics services.
              </p>
              <p className="section-text">
                We drive supply chain innovation and deliver unparalleled customer experiences 
                through our comprehensive, tailored solutions.
              </p>
              <p className="section-text">
                With a nationwide presence and unwavering commitment to quality, Robinsons is a 
                trusted end-to-end logistics partner of the customer.
              </p>
              <div className="company-features">
                <div className="feature">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" fill="none"/>
                    <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" fill="none"/>
                  </svg>
                  <span>Air Freight Solutions</span>
                </div>
                <div className="feature">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M2 12h20M12 2v20M4 4l16 16M20 4L4 20" stroke="currentColor" fill="none"/>
                  </svg>
                  <span>Sea Freight Services</span>
                </div>
                <div className="feature">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" fill="none"/>
                    <circle cx="12" cy="12" r="4" stroke="currentColor"/>
                  </svg>
                  <span>Supply Chain Management</span>
                </div>
              </div>
              <Link to="/contact" className="company-cta-btn">
                Partner With Us
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
            <div className="company-about-image">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Robinsons Logistics"
                />
                <div className="image-badge">
                  <span>70+</span>
                  <span>Years Strong</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="company-timeline">
        <div className="container">
          <div className="timeline-header">
            <div className="section-eyebrow">Our Journey</div>
            <h2 className="section-title">Four Generations of Excellence</h2>
            <p className="section-subtitle">A legacy forged through decades of dedication and innovation</p>
          </div>
          <div className="timeline-container">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${activeTimeline === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveTimeline(index)}
                onMouseLeave={() => setActiveTimeline(null)}
              >
                <div className="timeline-marker" style={{ background: item.color }}>
                  <span className="timeline-icon">{item.icon}</span>
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year" style={{ color: item.color }}>{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="company-values">
        <div className="container">
          <div className="values-header">
            <div className="section-eyebrow">Our Guiding Principles</div>
            <h2 className="section-title">The Robinsons Way</h2>
            <p className="section-subtitle">Values that drive our commitment to excellence</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Integrity First</h3>
              <p>We do what we say, when we say. Honesty and transparency are non-negotiable in every interaction.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Reliability Always</h3>
              <p>Your cargo's journey is our responsibility. We deliver on our promises, every time, without fail.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation Forward</h3>
              <p>Embracing technology and new thinking to solve complex supply chain challenges.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>People First</h3>
              <p>Our team is our greatest asset. We invest in relationships with employees and clients alike.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="company-cta">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-content">
              <h3>Ready to Partner with Excellence?</h3>
              <p>Join the thousands of businesses that trust Robinsons with their logistics needs</p>
              <Link to="/contact" className="cta-button">
                Get Started Today
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanyProfile;