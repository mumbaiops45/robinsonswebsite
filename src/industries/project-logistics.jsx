import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectLogistics = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .project-page {
          font-family: 'Poppins',sans-serif;
          color: #1a2a3a;
          background: #ffffff;
          line-height: 1.5;
        }

        /* Hero section – with gradient + overlay */
        .project-hero {
          position: relative;
          background: linear-gradient(rgba(11,46,62,0.6), rgba(27,77,110,0.7)), 
                      url('/projectlogisticshero.jpg') center/cover no-repeat;
          color: white;
          padding: 120px 24px 100px;
          text-align: center;
          margin-top: 62px;
        }

        /* Additional dark overlay to ensure text contrast */
        .project-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .project-hero .container {
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .project-hero {
            margin-top: 56px;
            padding: 40px 20px 60px;
          }
        }
        .project-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
        }
        .project-hero .tagline {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }
        .project-hero .description {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.125rem;
          line-height: 1.6;
          background: rgba(0, 0, 0, 0.55);
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

        /* Image showcase */
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
          .cta-section h2 {
            font-size: 1.7rem;
          } 
        }
        @media (max-width: 480px) {
          .air-hero h1 { font-size: 1.8rem; }
          .section-title { font-size: 1.8rem; }
        }
      `}</style>

      <div className="project-page">
        {/* Hero Section */}
        <div className="project-hero">
          <div className="container">
            <h1>Project Logistics</h1>
            <div className="tagline">End‑to‑End Solutions for Complex Projects</div>
            <div className="description">
              From wind turbines to industrial plants, Robinsons specialises in managing complex, oversized, and time‑critical project cargo. Our dedicated project teams handle every aspect – from initial planning and route surveys to final delivery on site.
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="overview-section">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content">
                <h2 className="section-title" style={{ textAlign: 'left' }}>Project Cargo Expertise</h2>
                <p>
                  Project logistics requires meticulous planning, specialised equipment, and a global network. Robinsons brings together experienced project managers, engineering know‑how, and a reliable supply chain to execute the most demanding shipments.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Whether it's a power plant, mining equipment, or modular construction, we provide turnkey solutions that minimise risk, reduce costs, and ensure on‑time delivery – anywhere in the world.
                </p>
              </div>
              <div className="overview-image">
                <img src="/logisticsoverview.png" alt="Project cargo loading" />
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <div className="container">
            <h2 className="section-title">Our Project Logistics Services</h2>
            <div className="section-subtitle">
              Tailored solutions for heavy lift, oversized cargo, and turnkey projects
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🏗️</div>
                <h3>Heavy Lift & Oversized Cargo</h3>
                <p>Specialised transport for components weighing over 100 tonnes, using multi‑axle trailers and cranes.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📋</div>
                <h3>Route Survey & Engineering</h3>
                <p>Pre‑shipment route surveys, bridge assessments, and engineering solutions for safe passage.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🚢</div>
                <h3>Charter & Breakbulk</h3>
                <p>Vessel chartering, port handling, and breakbulk shipping for non‑containerised cargo.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🏭</div>
                <h3>Turnkey Project Management</h3>
                <p>Single point of contact for all logistics – from procurement to installation support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="image-showcase">
          <div className="container">
            <h2 className="section-title">Project Logistics in Action</h2>
            <div className="section-subtitle">
              See how we deliver success for complex industrial projects
            </div>
            <div className="showcase-grid">
              <div className="showcase-item">
                <img src="/heavy-lift.png" alt="Heavy lift transport" />
                <div className="showcase-caption">Heavy Lift Transport</div>
              </div>
              <div className="showcase-item">
                <img src="/wind-turbine.jpg" alt="Wind turbine logistics" />
                <div className="showcase-caption">Renewable Energy Projects</div>
              </div>
              <div className="showcase-item">
                <img src="/industrial.png" alt="Industrial plant logistics" />
                <div className="showcase-caption">Industrial Plant Installation</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}

        <div className="container">
          <div className="cta-section">
            <h2>Ready to move your next project?</h2>
            <p>Contact our project logistics experts for a customised solution.</p>
            <button className="cta-button" onClick={() => navigate('/contact')}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectLogistics;