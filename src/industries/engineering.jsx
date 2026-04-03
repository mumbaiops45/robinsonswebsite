import React from 'react';
import { useNavigate } from 'react-router-dom';

const Engineering = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .engineering-page {
          font-family: 'Poppins',sans-serif;
          color: #1a2a3a;
          background: #ffffff;
          line-height: 1.5;
        }

        /* Hero section – with overlay */
        .engineering-hero {
          position: relative;
          background: url('/engineeringhero.jpg') center/cover no-repeat;
          color: white;
          padding: 120px 24px 100px;
          text-align: center;
          margin-top: 62px;
        }

        .engineering-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.55);
          z-index: 1;
        }

        .engineering-hero .container {
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .engineering-hero {
            margin-top: 56px;
            padding: 40px 20px 60px;
          }
        }
        .engineering-hero h1 {
            
          margin-bottom: 1rem;
         
          
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
        }
        .engineering-hero .tagline {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }
        .engineering-hero .description {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.125rem;
          line-height: 1.6;
          background: rgba(0, 0, 0, 0.6);
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

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

        .image-showcase {
          padding: 60px 0;
          background: #fff;
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
        @media (max-width: 768px) {
          .air-hero h1 { font-size: 2.2rem; }
          .air-hero .tagline { font-size: 1.2rem; }
          .section-title { font-size: 2rem; }
          .container { padding: 0 20px; }
          .overview-grid { grid-template-columns: 1fr; gap: 2rem; }
          .import-export-grid { grid-template-columns: 1fr; gap: 2rem; }
          .cta-section {
            margin: 40px 20px 60px;
            padding: 50px 20px;
          }
          
        }
        @media (max-width: 480px) {
         
        }
      `}</style>

      <div className="engineering-page">
        <div className="engineering-hero">
          <div className="container">
            <h1>Engineering Logistics</h1>
            <div className="tagline">Moving Heavy Industry Forward</div>
            <div className="description">
              From heavy machinery and industrial components to project cargo, Robinsons provides end‑to‑end logistics solutions tailored for the engineering sector. We combine precision planning, specialised equipment, and a global network to keep your projects on track.
            </div>
          </div>
        </div>

        <div className="overview-section">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content">
                <h2 className="section-title" style={{ textAlign: 'left' }}>Engineering Expertise</h2>
                <p>
                  The engineering industry demands reliable, just‑in‑time delivery of oversized, high‑value equipment and components. Robinsons leverages decades of experience, dedicated engineering teams, and a robust infrastructure to support manufacturers, contractors, and project managers.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Our solutions cover everything from inbound raw materials to finished machinery delivery, with full visibility and customised handling to meet the most stringent requirements.
                </p>
              </div>
              <div className="overview-image">
                <img src="/engineering.png" alt="Heavy machinery and engineering logistics" />
              </div>
            </div>
          </div>
        </div>

        <div className="services-section">
          <div className="container">
            <h2 className="section-title">Our Engineering Services</h2>
            <div className="section-subtitle">Tailored solutions for heavy industry and project logistics</div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🏗️</div>
                <h3>Heavy Machinery Transport</h3>
                <p>Specialised handling and transportation of heavy equipment, including cranes, turbines, and industrial machinery.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📦</div>
                <h3>Project Cargo</h3>
                <p>End‑to‑end management of complex project shipments, from planning to execution, ensuring on‑time delivery.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">⚙️</div>
                <h3>Industrial Components</h3>
                <p>Just‑in‑time delivery of precision components for manufacturing and assembly lines.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Supply Chain Visibility</h3>
                <p>Real‑time tracking and analytics to monitor every shipment and optimise performance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="image-showcase">
          <div className="container">
            <h2 className="section-title">Engineering in Action</h2>
            <div className="section-subtitle">See how we move the industry forward</div>
            <div className="showcase-grid">
              <div className="showcase-item">
                <img src="/heavy-transport1.jpg" alt="Heavy equipment transport" />
                <div className="showcase-caption">Heavy Equipment Transport</div>
              </div>
              <div className="showcase-item">
                <img src="/project-logistics.jpg" alt="Industrial project logistics" />
                <div className="showcase-caption">Project Logistics</div>
              </div>
              <div className="showcase-item">
                <img src="/supply-chain.jpg" alt="Supply chain management" />
                <div className="showcase-caption">End‑to‑end Visibility</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="container">
            <h2>Ready to streamline your engineering logistics?</h2>
            <p>Contact our engineering logistics team today to discuss your project needs.</p>
            <button
              className="cta-button"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engineering;