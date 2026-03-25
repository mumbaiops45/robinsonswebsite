import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Certifications from './Certifications';

const Industries = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const industries = [
    {
      id: 1,
      name: 'Automotive',
      icon: '🚗',
      description: 'End-to-end logistics solutions for automotive parts, vehicles, and supply chain management.',
      longDescription: 'We provide specialized automotive logistics including just-in-time delivery, parts distribution, vehicle transport, and comprehensive warehousing solutions for manufacturers and suppliers.',
      features: ['Just-in-Time Delivery', 'Parts Distribution', 'Vehicle Transport', 'Warehousing'],
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format',
      color: '#7BAB6E',
      category: 'manufacturing'
    },
    {
      id: 2,
      name: 'Aviation & Defense',
      icon: '✈️',
      description: 'Specialized logistics for aerospace components, defense equipment, and sensitive materials.',
      longDescription: 'Our aviation and defense logistics include AOG services, secure transport, regulatory compliance, and time-critical deliveries for mission-critical components.',
      features: ['AOG Services', 'Secure Transport', 'Regulatory Compliance', 'Time-Critical'],
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&auto=format',
      color: '#1A4F72',
      category: 'aerospace'
    },
    {
      id: 3,
      name: 'Engineering',
      icon: '⚙️',
      description: 'Comprehensive logistics for heavy machinery, industrial equipment, and engineering projects.',
      longDescription: 'We handle heavy lift operations, project cargo, equipment transport, and site delivery for complex engineering and industrial projects worldwide.',
      features: ['Heavy Lift', 'Project Cargo', 'Equipment Transport', 'Site Delivery'],
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format',
      color: '#5D8A52',
      category: 'industrial'
    },
    {
      id: 4,
      name: 'Hi-Tech',
      icon: '💻',
      description: 'Secure, time-sensitive logistics for electronics, semiconductors, and high-value technology products.',
      longDescription: 'Our hi-tech logistics include ESD protection, secure handling, time-sensitive deliveries, and global distribution for electronics and semiconductor industries.',
      features: ['ESD Protection', 'Secure Handling', 'Time-Sensitive', 'Global Distribution'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format',
      color: '#2A6A96',
      category: 'technology'
    },
    {
      id: 5,
      name: 'Luxury Goods',
      icon: '💎',
      description: 'Premium logistics services for high-value luxury items, jewelry, and designer goods.',
      longDescription: 'We offer white glove service, secure transport, climate control, and real-time tracking for high-value luxury goods and jewelry.',
      features: ['White Glove Service', 'Secure Transport', 'Climate Control', 'Real-Time Tracking'],
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format',
      color: '#9DC48F',
      category: 'premium'
    },
    {
      id: 6,
      name: 'Pharma & Healthcare',
      icon: '💊',
      description: 'Temperature-controlled logistics for pharmaceuticals, medical devices, and healthcare products.',
      longDescription: 'Our GDP-compliant cold chain solutions include temperature monitoring, regulatory compliance, and specialized handling for pharmaceuticals and medical devices.',
      features: ['GDP Compliant', 'Cold Chain', 'Temperature Monitoring', 'Regulatory Compliance'],
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format',
      color: '#7BAB6E',
      category: 'healthcare'
    },
    {
      id: 7,
      name: 'Project Logistics',
      icon: '🏗️',
      description: 'Complex project cargo management for infrastructure, industrial, and energy projects.',
      longDescription: 'We manage complex project cargo including OOG cargo, heavy lift, charter services, and site management for large-scale infrastructure projects.',
      features: ['OOG Cargo', 'Heavy Lift', 'Charter Services', 'Site Management'],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format',
      color: '#1A4F72',
      category: 'project'
    },
    {
      id: 8,
      name: 'Renewable Energy',
      icon: '🌿',
      description: 'Sustainable logistics solutions for wind, solar, and renewable energy projects.',
      longDescription: 'We provide sustainable logistics for wind turbine transport, solar panel logistics, green solutions, and project management for renewable energy initiatives.',
      features: ['Wind Turbine Transport', 'Solar Panel Logistics', 'Green Solutions', 'Project Management'],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format',
      color: '#5D8A52',
      category: 'energy'
    },
    {
      id: 9,
      name: 'Retail / E-Commerce',
      icon: '🛒',
      description: 'End-to-end logistics for retail and e-commerce fulfillment and distribution.',
      longDescription: 'Our retail and e-commerce solutions include order fulfillment, last mile delivery, returns management, and inventory control for omnichannel operations.',
      features: ['Order Fulfillment', 'Last Mile Delivery', 'Returns Management', 'Inventory Control'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format',
      color: '#2A6A96',
      category: 'retail'
    },
    {
      id: 10,
      name: 'Space & Avionics',
      icon: '🛸',
      description: 'Specialized logistics for space components, satellites, and avionics equipment.',
      longDescription: 'We offer clean room handling, ESD protection, secure transport, and regulatory compliance for space components and avionics equipment.',
      features: ['Clean Room Handling', 'ESD Protection', 'Secure Transport', 'Regulatory Compliance'],
      image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&auto=format',
      color: '#9DC48F',
      category: 'aerospace'
    },
    {
      id: 11,
      name: 'Cold Chain',
      icon: '🌡️',
      description: 'Temperature-controlled logistics for perishable goods, food, and temperature-sensitive products.',
      longDescription: 'Our cold chain solutions include reefer containers, temperature monitoring, cold storage, and pharma-grade handling for perishable goods.',
      features: ['Reefer Containers', 'Temperature Monitoring', 'Cold Storage', 'Pharma Grade'],
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format',
      color: '#7BAB6E',
      category: 'logistics'
    },
    {
      id: 12,
      name: 'Industrial & MSME',
      icon: '🏭',
      description: 'Tailored logistics solutions for industrial manufacturing and MSME sector needs.',
      longDescription: 'We provide raw material transport, finished goods distribution, warehousing, and inventory management for industrial manufacturing and MSME sectors.',
      features: ['Raw Material Transport', 'Finished Goods Distribution', 'Warehousing', 'Inventory Management'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format',
      color: '#1A4F72',
      category: 'industrial'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🎯' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'aerospace', name: 'Aerospace', icon: '✈️' },
    { id: 'healthcare', name: 'Healthcare', icon: '💊' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'energy', name: 'Energy', icon: '⚡' },
    { id: 'retail', name: 'Retail', icon: '🛒' }
  ];

  const filteredIndustries = activeCategory === 'all' 
    ? industries 
    : industries.filter(industry => industry.category === activeCategory);

  return (
<>
    <main className="industries-page-new">
      {/* Hero Section */}
      <section className="industries-hero-new">
        <div className="hero-bg-new">
          <div className="hero-gradient-new"></div>
          <div className="hero-pattern-new"></div>
        </div>
        <div className="container">
          <div className="hero-content-new">
            <div className="hero-tag-new">
              <span>Industry Expertise</span>
            </div>
            <h1 className="hero-title-new">
              Industries We
              <span className="title-highlight"> Serve</span>
            </h1>
            <p className="hero-description-new">
              Specialised teams with deep sector knowledge delivering customised logistics 
              for the most demanding cargo categories across 12+ industries.
            </p>
            <div className="hero-stats-new">
              <div className="hero-stat-new">
                <div className="stat-value">12+</div>
                <div className="stat-label">Industries</div>
              </div>
              <div className="hero-stat-new">
                <div className="stat-value">500+</div>
                <div className="stat-label">Experts</div>
              </div>
              <div className="hero-stat-new">
                <div className="stat-value">98%</div>
                <div className="stat-label">Satisfaction</div>
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

      {/* Category Tabs */}
      <section className="category-tabs-new">
        <div className="container">
          <div className="tabs-wrapper-new">
            {categories.map(category => (
              <button
                key={category.id}
                className={`tab-btn-new ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-grid-new">
        <div className="container">
          <div className="grid-container-new">
            {filteredIndustries.map((industry) => (
              <div 
                key={industry.id}
                className="industry-card-side-new"
                data-name={industry.name}
                onMouseEnter={() => setHoveredCard(industry.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-image-full-new">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      // Fallback images for specific categories
                      if (industry.category === 'healthcare') {
                        e.target.src = 'https://images.pexels.com/photos/7089399/pexels-photo-7089399.jpeg?w=800&auto=compress';
                      } else if (industry.name === 'Pharma & Healthcare') {
                        e.target.src = 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?w=800&auto=compress';
                      } else {
                        e.target.src = 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format';
                      }
                    }}
                  />
                  <div className="card-gradient-overlay"></div>
                </div>
                <div className={`card-info-side-new ${hoveredCard === industry.id ? 'active' : ''}`}>
                  <div className="side-content-new">
                    <div className="side-icon" style={{ backgroundColor: industry.color }}>
                      {industry.icon}
                    </div>
                    <h3 className="side-title">{industry.name}</h3>
                    <p className="side-description">{industry.longDescription}</p>
                    <div className="side-features">
                      {industry.features.map((feature, idx) => (
                        <span key={idx} className="side-feature">{feature}</span>
                      ))}
                    </div>
                    <Link to="/contact" className="side-link">
                      Get Quote
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<Certifications/>

    
    </main>
</>
  );
};

export default Industries;