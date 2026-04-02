import React from 'react';
import { useNavigate } from 'react-router-dom';

const OceanImport = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        /* Poppins font */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .ocean-page {
          font-family: 'Poppins',sans-serif;
          color: #1a2a3a;
          background: #ffffff;
          line-height: 1.5;
        }

        /* Chip style (for hero) */
        .chip {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 30px;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Hero section – gradient, no background image */
        .ocean-hero {
          position: relative;
          background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
          color: white;
          padding: 40px 24px 100px;
          text-align: center;
          margin-top: 52px;
          overflow: hidden;
        }

        .ocean-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 40px;
          opacity: 0.2;
          pointer-events: none;
        }

        .ocean-hero::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(106,155,90,0.2), transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
          animation: fadeUp 0.8s ease;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ocean-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .ocean-hero .tagline {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }

        .ocean-hero .description {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.125rem;
          line-height: 1.6;
          background: rgba(0, 0, 0, 0.15);
          padding: 1rem 1.5rem;
          border-radius: 60px;
          backdrop-filter: blur(4px);
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .ocean-hero {
            margin-top: 56px;
            padding: 40px 20px 60px;
          }
          .ocean-hero h1 { font-size: 2.2rem; }
          .ocean-hero .tagline { font-size: 1.2rem; }
          .ocean-hero .description { font-size: 1rem; padding: 0.8rem 1rem; }
        }

        /* Rest of your existing styles remain unchanged */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
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
          padding: 20px 0;
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
          display: inline-block;
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

        /* Import / Export specific cards */
        .import-export-section {
          background: #fff;
          padding: 60px 0;
        }
        .import-export-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        .import-card, .export-card {
          background: #f8fafc;
          border-radius: 1rem;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .import-card:hover, .export-card:hover {
          transform: translateY(-5px);
        }
        .card-image {
          height: 350px;
          overflow: hidden;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .import-card:hover .card-image img,
        .export-card:hover .card-image img {
          transform: scale(1.05);
        }
        .card-content {
          padding: 1.5rem;
        }
        .card-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1b4d6e;
          margin-bottom: 1rem;
        }
        .card-content ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .card-content li {
          padding: 0.5rem 0;
          color: #4a627a;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .card-content li::before {
          content: "✓";
          color: #6a9b5a;
          font-weight: bold;
        }

        /* Image showcase */
        .image-showcase {
          padding: 60px 0;
          background: #f8fafc;
        }
        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .showcase-item {
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }
        .showcase-item:hover {
          transform: translateY(-5px);
        }
        .showcase-item img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }
        .showcase-caption {
          padding: 1rem;
          text-align: center;
          background: white;
          font-size: 0.9rem;
          color: #4a627a;
        }

        /* Modern CTA section – updated */
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
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          background: #f5f5f5;
        }

        @media (max-width: 768px) {
          .section-title { font-size: 2rem; }
          .container { padding: 0 20px; }
          .overview-grid, .import-export-grid { grid-template-columns: 1fr; gap: 2rem; }
          .cta-section {
            margin: 40px 20px 60px;
            padding: 50px 20px;
          }
          .cta-section h2 {
            font-size: 1.7rem;
          }
        }
        @media (max-width: 480px) {
          .section-title { font-size: 1.8rem; }
        }
      `}</style>

      <div className="ocean-page">
        {/* Hero Section – updated with gradient and chip */}
        <div className="ocean-hero">
          <div className="hero-content">
            <div className="chip">Global Maritime Logistics</div>
            <h1>Ocean Imports & Exports</h1>
            <div className="tagline">Reliable Ocean Freight Solutions</div>
            <div className="description">
              Robinsons provides reliable ocean freight services for import and export shipments worldwide. Whether you need FCL (Full Container Load) or LCL (Less than Container Load), our global network of carriers and local expertise ensures your cargo moves efficiently across oceans.
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="overview-section">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content">
                <h2 className="section-title" style={{ textAlign: 'left' }}>Global Ocean Freight Expertise</h2>
                <p>
                  With decades of experience and strong relationships with major shipping lines, Robinsons delivers end‑to‑end ocean freight solutions. We handle everything from booking, documentation, and customs clearance to warehousing and last‑mile delivery.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Our digital platform provides real‑time tracking, proactive alerts, and full visibility from origin to destination. Whether you ship containers, breakbulk, or project cargo, we offer tailored ocean freight services that fit your supply chain needs.
                </p>
              </div>
              <div className="overview-image">
                <img src="/ocean.jpg" alt="Container ship at port" />
              </div>
            </div>
          </div>
        </div>

        {/* Import & Export Cards */}
        <div className="import-export-section">
          <div className="container">
            <h2 className="section-title">Ocean Freight Import & Export Services</h2>
            <div className="section-subtitle">
              Customised solutions for full container loads, LCL, and project cargo
            </div>
            <div className="import-export-grid">
              <div className="import-card">
                <div className="card-image">
                  <img src="/import1.png" alt="Ocean freight import" />
                </div>
                <div className="card-content">
                  <h3>Ocean Freight Import</h3>
                  <ul>
                    <li>Customs clearance & compliance</li>
                    <li>Warehousing & distribution</li>
                    <li>Last‑mile delivery</li>
                    <li>Duty drawback & tax management</li>
                    <li>Consolidation & de‑consolidation</li>
                    <li>24/7 tracking & proactive alerts</li>
                  </ul>
                </div>
              </div>
              <div className="export-card">
                <div className="card-image">
                  <img src="/export1.png" alt="Ocean freight export" />
                </div>
                <div className="card-content">
                  <h3>Ocean Freight Export</h3>
                  <ul>
                    <li>Export documentation & licensing</li>
                    <li>Origin handling & consolidation</li>
                    <li>FCL & LCL container bookings</li>
                    <li>Breakbulk & project cargo</li>
                    <li>Dangerous goods handling</li>
                    <li>Insurance & risk management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Service Features */}
        <div className="services-section">
          <div className="container">
            <h2 className="section-title">Why Choose Robinsons Ocean Freight?</h2>
            <div className="section-subtitle">Reliability, flexibility, and global reach</div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🚢</div>
                <h3>Global Network</h3>
                <p>Direct contracts with major carriers covering all major trade lanes worldwide.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📦</div>
                <h3>FCL & LCL Options</h3>
                <p>Full container loads and less‑than‑container‑load consolidation for cost efficiency.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🔒</div>
                <h3>Cargo Security</h3>
                <p>Enhanced security measures, including container seals and monitoring.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Real‑Time Visibility</h3>
                <p>24/7 tracking, milestone updates, and proactive exception management.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="image-showcase">
          <div className="container">
            <h2 className="section-title">Ocean Freight in Action</h2>
            <div className="section-subtitle">See how we move goods across the seas</div>
            <div className="showcase-grid">
              <div className="showcase-item">
                <img src="/container-yard.png" alt="Container yard" />
                <div className="showcase-caption">Container Yard Operations</div>
              </div>
              <div className="showcase-item">
                <img src="/port-terminal.jpg" alt="Port terminal" />
                <div className="showcase-caption">Port Terminal Handling</div>
              </div>
              <div className="showcase-item">
                <img src="/vessel-loading.jpg" alt="Vessel loading" />
                <div className="showcase-caption">Vessel Loading & Discharge</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern CTA Section */}
        <div className="container">
          <div className="cta-section">
            <h2>Ready to ship by ocean?</h2>
            <p>Contact our ocean freight specialists for competitive rates and tailored solutions.</p>
            <button className="cta-button" onClick={() => navigate('/contact')}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OceanImport;