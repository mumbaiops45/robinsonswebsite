
import React, { useState } from 'react'; // Remove useEffect and useRef as they're not used
import { Link } from 'react-router-dom';
import WhyChooseUs from './Whychooseus';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      category: 'air',
      title: 'Air Imports & Exports',
      icon: '✈️',
      description: 'Fast, reliable air freight solutions connecting global markets with precision timing and secure handling.',
      features: ['Express Delivery', 'Temperature Controlled', 'Dangerous Goods', 'Door-to-Door'],
      image: '/air-freight.jpg',
      stats: { speed: '24-48h', coverage: '180+ Countries', reliability: '99.5%' }
    },
    {
      id: 2,
      category: 'air',
      title: 'Consolidation Services',
      icon: '📦',
      description: 'Cost-effective freight consolidation combining multiple shipments for optimized logistics and reduced costs.',
      features: ['LCL Consolidation', 'Groupage Services', 'Warehousing', 'Inventory Management'],
      image: '/consolidation.jpg',
      stats: { savings: 'Up to 40%', efficiency: '30% Faster', coverage: 'Global Network' }
    },
    {
      id: 3,
      category: 'customs',
      title: 'Custom Clearance',
      icon: '🛃',
      description: 'Expert customs brokerage ensuring smooth border crossings with full compliance and documentation support.',
      features: ['Documentation', 'Tariff Classification', 'Compliance', 'Duty Management'],
      image: '/custom-clearance.jpg',
      stats: { clearance: '24h', success: '99.8%', countries: '40+' }
    },
    {
      id: 4,
      category: 'ocean',
      title: 'Ocean Imports & Exports',
      icon: '🚢',
      description: 'Comprehensive ocean freight solutions with global coverage and flexible container options.',
      features: ['FCL & LCL', 'Ro-Ro Services', 'Project Cargo', 'Port Handling'],
      image: '/ocean-freight.jpg',
      stats: { routes: '500+', vessels: '2000+', capacity: 'Unlimited' }
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <>
      <main className="services-page-new">
        {/* Modern Hero Section */}
        <section className="services-hero-modern">
          <div className="hero-bg-modern">
            <div className="hero-gradient-modern"></div>
            <div className="hero-pattern-modern"></div>
          </div>
          <div className="container hero-container-modern">
            <div className="hero-content-modern">
              <div className="hero-icon-modern">
                <span>⚡</span>
              </div>
              <h1 className="hero-title-modern">
                Our
                <span className="title-gradient-modern"> Services</span>
              </h1>
              <div className="hero-decoration-modern">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
            </div>
          </div>
          <div className="hero-shape-modern">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,64 C480,128 960,0 1440,64 L1440,120 L0,120 Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Filter Section */}
        <section className="filter-section-modern">
          <div className="container">
            <div className="filter-wrapper-modern">
              <button 
                className={`filter-btn-modern ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                <span>All Services</span>
              </button>
              <button 
                className={`filter-btn-modern ${activeFilter === 'air' ? 'active' : ''}`}
                onClick={() => setActiveFilter('air')}
              >
                <span>Air Freight</span>
                <span className="filter-icon">✈️</span>
              </button>
              <button 
                className={`filter-btn-modern ${activeFilter === 'ocean' ? 'active' : ''}`}
                onClick={() => setActiveFilter('ocean')}
              >
                <span>Ocean Freight</span>
                <span className="filter-icon">🚢</span>
              </button>
              <button 
                className={`filter-btn-modern ${activeFilter === 'customs' ? 'active' : ''}`}
                onClick={() => setActiveFilter('customs')}
              >
                <span>Customs</span>
                <span className="filter-icon">🛃</span>
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-grid-modern">
          <div className="container">
            <div className="cards-grid-modern">
              {filteredServices.map((service, index) => (
                <div 
                  key={service.id}
                  className={`service-card-modern ${hoveredCard === service.id ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-bg-modern"></div>
                  <div className="card-image-modern">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        if (service.category === 'air') {
                          e.target.src = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                        } else if (service.category === 'ocean') {
                          e.target.src = 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                        } else if (service.category === 'customs') {
                          e.target.src = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                        } else {
                          e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                        }
                      }}
                    />
                    <div className="card-overlay-modern"></div>
                    <div className="card-icon-modern">{service.icon}</div>
                    <div className="card-badge-modern">
                      <span className="badge-text">{service.category === 'air' ? 'Express' : service.category === 'ocean' ? 'Global' : 'Fast'}</span>
                    </div>
                  </div>
                  <div className="card-content-modern">
                    <h3 className="card-title-modern">{service.title}</h3>
                    <p className="card-desc-modern">{service.description}</p>
                    <div className="card-features-modern">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="feature-modern">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <polyline points="20 6 9 17 4 12" stroke="currentColor" fill="none"/>
                          </svg>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact" className="card-link-modern">
                      <span>Get Quote</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs/>
      </main>
    </>
  );
};

export default Services;