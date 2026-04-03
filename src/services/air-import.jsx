import React from 'react';
import { useNavigate } from 'react-router-dom';

const AirFreight = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .air-freight-page {
          font-family: 'Poppins', sans-serif;
          color: #1a2a3a;
          background: #ffffff;
          line-height: 1.5;
        }

        /* ── Chip — matches global ── */
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.67rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--g3, #8cb27f);
          margin-bottom: 10px;
        }
        .chip::before {
          content: '';
          width: 16px;
          height: 2px;
          background: var(--g3, #8cb27f);
          border-radius: 2px;
        }

        /* ── Hero ── */
        .air-hero {
          position: relative;
          background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
          color: white;
          padding: 40px 24px 100px;
          text-align: center;
          margin-top: 62px;
          overflow: hidden;
        }
        .air-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 40px;
          opacity: 0.2;
          pointer-events: none;
        }
        .air-hero::after {
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
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* h1 — font-size/weight/letter-spacing handled by global */
        .air-hero h1 {
          margin-bottom: 1rem;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          color: #fff;
        }
        .air-hero .tagline {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
          color: #fff;
        }
        .air-hero .description {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.125rem;
          line-height: 1.6;
          background: rgba(0, 0, 0, 0.15);
          padding: 1rem 1.5rem;
          border-radius: 60px;
          backdrop-filter: blur(4px);
          font-weight: 400;
          color: rgba(255,255,255,0.92);
        }

        /* ── Container ── */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Section titles — font-size/weight handled by global ── */
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

        /* ── Overview section ── */
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
  font-size: 0.95rem;
  color: var(--ts, #3a6680);
  line-height: 1.8;
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

        /* ── Import / Export section ── */
        .import-export-section {
          background: #f8fafc;
          padding: 80px 0;
        }
        .import-export-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        .service-card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0,0,0,0.03);
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 35px -12px rgba(106, 155, 90, 0.25);
          border-color: #6a9b5a;
        }
        .service-card-image {
          height: 350px;
          overflow: hidden;
        }
        .service-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .service-card:hover .service-card-image img {
          transform: scale(1.05);
        }
        .service-card-content {
          padding: 1.5rem;
        }
        .service-card-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1b4d6e;
          margin-bottom: 1rem;
        }
        .service-card-content ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .service-card-content li {
          padding: 0.5rem 0;
          color: #4a627a;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          border-bottom: 1px solid #f0f4f8;
        }
        .service-card-content li:last-child {
          border-bottom: none;
        }
        .service-card-content li::before {
          content: "✓";
          color: #6a9b5a;
          font-weight: bold;
          flex-shrink: 0;
        }

        /* ── Features / Why Choose ── */
        .features-section {
          background: #fff;
          padding: 80px 0;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.03);
        }
        .feature-card::before {
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
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 35px -12px rgba(106, 155, 90, 0.25);
          border-color: #6a9b5a;
        }
        .feature-card:hover::before {
          transform: scaleX(1);
        }
        .feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          background: #f0f4f9;
          border-radius: 50%;
          width: 64px;
          height: 64px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #6a9b5a;
        }
        .feature-card:hover .feature-icon {
          background: #e6edf5;
          transform: scale(1.05);
        }
        .feature-card h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #1b4d6e;
          margin-bottom: 0.75rem;
        }
        .feature-card p {
          color: #4a627a;
          font-size: 0.88rem;
          line-height: 1.6;
        }

        /* ── CTA ── */
        .cta-section {
          background: linear-gradient(135deg, #0b2e3e, #6a9b5a);
          color: white;
          text-align: center;
          padding: 70px 20px;
          border-radius: 48px;
          margin: 40px auto 80px;
          max-width: 1100px;
        }
        /* h2 font-size/weight handled by global */
        .cta-section h2 {
          margin-bottom: 1rem;
          color: #fff;
        }
        .cta-section p {
          font-size: 1rem;
          opacity: 0.88;
          max-width: 560px;
          margin: 0 auto 1.8rem;
          font-weight: 400;
          line-height: 1.75;
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

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .overview-grid,
          .import-export-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .service-card-image {
            height: 260px;
          }
        }

        @media (max-width: 768px) {
          .air-hero {
            margin-top: 56px;
            padding: 40px 20px 60px;
          }
          .air-hero .tagline { font-size: 1.2rem; }
          .air-hero .description {
            font-size: 1rem;
            padding: 0.8rem 1rem;
            border-radius: 12px;
          }
          .container { padding: 0 20px; }
          .overview-section,
          .import-export-section,
          .features-section {
            padding: 48px 0;
          }
          .cta-section {
            margin: 40px 20px 60px;
            padding: 50px 20px;
            border-radius: 24px;
          }
          .features-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 540px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .air-hero .tagline { font-size: 1rem; }
          .air-hero .description { font-size: 0.9rem; }
          .section-subtitle { font-size: 0.95rem; }
          .cta-section { padding: 40px 16px; }
        }
      `}</style>

      <div className="air-freight-page">

        {/* ── Hero ── */}
        <div className="air-hero">
          <div className="hero-content">
            <div className="chip">Global Air Logistics</div>
            <h1>Air Freight Services</h1>
            <div className="tagline">Fast, Reliable Global Air Cargo</div>
            <div className="description">
              Robinsons offers comprehensive air freight import and export solutions. Whether you need urgent shipments, time‑sensitive materials, or high‑value goods, our global network ensures your cargo reaches its destination quickly and securely.
            </div>
          </div>
        </div>

        {/* ── Overview ── */}
        <div className="overview-section">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                  Global Air Freight <span style={{ color: 'var(--g, #6a9b5a)' }}>Expertise</span>
                </h2>
                <p>
                  With strategic partnerships with major airlines and a dedicated team, Robinsons delivers tailored air freight solutions. From door‑to‑door delivery to charter services, we manage every detail – ensuring your cargo moves smoothly across borders.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Our end‑to‑end visibility platform gives you real‑time tracking and proactive alerts, so you always know where your shipment is. For imports, exports, or cross‑trade, we simplify the complexities of international air freight.
                </p>
              </div>
              <div className="overview-image">
                <img src="/air-freight1.jpg" alt="Air cargo loading" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Import & Export ── */}
        <div className="import-export-section">
          <div className="container">
            <h2 className="section-title">Air Freight Import & Export Services</h2>
            <div className="section-subtitle">
              End‑to‑end solutions tailored to your supply chain needs
            </div>
            <div className="import-export-grid">
              <div className="service-card">
                <div className="service-card-image">
                  <img src="/import.png" alt="Air freight import" />
                </div>
                <div className="service-card-content">
                  <h3>Air Freight Import</h3>
                  <ul>
                    <li>Customs clearance & compliance</li>
                    <li>Warehousing & distribution</li>
                    <li>Last‑mile delivery to your door</li>
                    <li>Duty drawback & tax management</li>
                    <li>Consolidation & de‑consolidation</li>
                    <li>24/7 tracking & proactive alerts</li>
                  </ul>
                </div>
              </div>
              <div className="service-card">
                <div className="service-card-image">
                  <img src="/export.jpg" alt="Air freight export" />
                </div>
                <div className="service-card-content">
                  <h3>Air Freight Export</h3>
                  <ul>
                    <li>Export documentation & licensing</li>
                    <li>Origin handling & consolidation</li>
                    <li>Charter & scheduled flight options</li>
                    <li>Dangerous goods handling</li>
                    <li>Pharmaceutical & cold chain solutions</li>
                    <li>Insurance & risk management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Why Choose ── */}
        <div className="features-section">
          <div className="container">
            <h2 className="section-title">Why Choose Robinsons Air Freight?</h2>
            <div className="section-subtitle">We deliver speed, security, and peace of mind</div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✈️</div>
                <h3>Global Network</h3>
                <p>Direct partnerships with over 50 airlines covering all major trade lanes.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⏱️</div>
                <h3>Time‑Critical Delivery</h3>
                <p>Same‑day, next‑flight‑out, and charter options for urgent shipments.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Secure Handling</h3>
                <p>Enhanced security for high‑value, fragile, or sensitive cargo.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Real‑Time Visibility</h3>
                <p>24/7 tracking and proactive notifications via our digital platform.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="container">
          <div className="cta-section">
            <h2>Ready to move your cargo by air?</h2>
            <p>Contact our air freight specialists for a customised solution.</p>
            <button className="cta-button" onClick={() => navigate('/contact')}>
              Get in Touch
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default AirFreight;