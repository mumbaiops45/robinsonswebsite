import React from 'react';
import { useNavigate } from 'react-router-dom';

const Automotive = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .automotive-page {
          font-family: 'Poppins',sans-serif;
          color: #1a2a3a;
          background: #ffffff;
          line-height: 1.5;
        }

        /* Hero section with background image */
        .automotive-hero {
          position: relative;
          background: url('/automotive-logistics.jpg') center/cover no-repeat;
          color: white;
          padding: 120px 24px 100px;
          text-align: center;
          margin-top: 62px;
          min-height: 80vh;
        }

        .automotive-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .automotive-hero .container {
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .automotive-hero {
            margin-top: 56px;
            padding: 40px 20px 60px;
          }
        }

        /* ✅ Updated h1 to match global size */
        .automotive-hero h1 {
          margin-bottom: 1rem;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
        }

        .automotive-hero .tagline {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }

        .automotive-hero .description {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.125rem;
          line-height: 1.6;
          background: rgba(0, 0, 0, 0.55);
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        /* Container */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ✅ Updated h2 to match global size */
        .section-title {
          color: #0b2e3e;
          text-align: center;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          text-align: center;
          color: #4a627a;
          max-width: 800px;
          margin: 0 auto 3rem auto;
          font-size: 1.125rem;
        }

        /* Overview section */
        .overview-section {
          padding: 80px 0;
          background: #fff;
        }
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .overview-content p {
          font-size: 1.125rem;
          color: #2c3e4e;
          line-height: 1.6;
        }
        .overview-image {
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 12px 28px rgba(0,0,0,0.1);
        }
        .overview-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }
        .overview-image:hover img {
          transform: scale(1.02);
        }
        @media (max-width: 768px) {
          .overview-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        /* Services grid */
        .services-section {
          background: #f8fafc;
          padding: 80px 0;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .service-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #0b2e3e, #6a9b5a);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        .service-card:hover::before {
          transform: scaleX(1);
        }
        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: #f0f4f9;
          padding: 0.75rem;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .service-card:hover .service-icon {
          background: #e6edf5;
          transform: scale(1.05);
        }
        .service-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1b4d6e;
          margin-bottom: 0.75rem;
        }
        .service-card p {
          color: #4a627a;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* CTA section */
        .cta-section {
          background: linear-gradient(135deg, #0b2e3e, #6a9b5a);
          color: white;
          text-align: center;
          padding: 70px 20px;
          border-radius: 48px;
          margin: 40px auto 80px;
          max-width: 1100px;
        }
        .cta-section h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .cta-section p {
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto 1.8rem;
          font-weight: 400;
        }
        .cta-button {
          display: inline-block;
          background: white;
          color: #0b2e3e;
          padding: 12px 32px;
          border-radius: 40px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-family: inherit;
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          background: #f5f5f5;
        }

        /* Responsive – no fixed h1/h2 font-size overrides */
        @media (max-width: 768px) {
          .automotive-hero {
            padding: 40px 20px 60px;
          }
          .automotive-hero .tagline {
            font-size: 1.2rem;
          }
          .automotive-hero .description {
            font-size: 1rem;
          }
          .section-title {
            /* uses clamp – no override needed */
          }
          .container {
            padding: 0 20px;
          }
          .overview-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .cta-section {
            margin: 40px 20px 60px;
            padding: 50px 20px;
          }
          .cta-section h2 {
            font-size: 1.7rem; /* this is overridden by global !important, but kept for fallback */
          }
        }
        @media (max-width: 480px) {
          /* No overrides for h1 or .section-title – rely on clamp */
        }
      `}</style>

      <div className="automotive-page">
        {/* Hero Section */}
        <div className="automotive-hero">
          <div className="container">
            <h1>Automotive Logistics</h1>
            <div className="tagline">Driving Efficiency Across the Supply Chain</div>
            <div className="description">
              From inbound parts to finished vehicle distribution, Robinsons provides end‑to‑end logistics solutions tailored to the automotive industry. We combine precision, speed, and visibility to keep your operations moving.
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="overview-section">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content">
                <h2 className="section-title" style={{ textAlign: 'left' }}>Automotive Expertise</h2>
                <p>
                  The automotive sector demands reliability, just‑in‑time delivery, and complete visibility. Robinsons leverages decades of experience and a dedicated network to support manufacturers, suppliers, and dealers across the nation. Our solutions cover everything from raw material procurement to aftermarket parts distribution.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  With real‑time tracking, specialised handling, and flexible warehousing, we help you reduce costs, improve turnaround times, and meet the highest quality standards.
                </p>
              </div>
              <div className="overview-image">
                <img
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Automotive logistics operations"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Services Section */}
        <div className="services-section">
          <div className="container">
            <h2 className="section-title">Our Automotive Services</h2>
            <div className="section-subtitle">
              Tailored solutions to keep your supply chain running smoothly
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🏭</div>
                <h3>Inbound Parts Logistics</h3>
                <p>Just‑in‑time delivery of components to assembly lines, with real‑time visibility and quality control.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🚛</div>
                <h3>Finished Vehicle Distribution</h3>
                <p>End‑to‑end transportation of vehicles from factory to dealerships, using specialised carriers.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📦</div>
                <h3>Aftermarket Parts</h3>
                <p>Efficient warehousing and distribution of spare parts to ensure fast, reliable service for customers.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Supply Chain Visibility</h3>
                <p>Digital tracking and analytics to monitor every shipment and optimise performance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container">
          <div className="cta-section">
            <h2>Ready to streamline your automotive logistics?</h2>
            <p>Contact our automotive team today to discuss how we can support your operations.</p>
            <button className="cta-button" onClick={() => navigate('/contact')}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Automotive;