import React from 'react';

const RenewableEnergy = () => {
  return (
    <>
      <style>{`
        .renewable-page {
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #1a2a3a;
          background: #ffffff;
          line-height: 1.5;
        }

        /* Hero section */
        .renewable-hero {
          position: relative;
          background: linear-gradient(rgba(11,46,62,0.6), rgba(27,77,110,0.7)), 
                      url('renewable-energyhero.jpg') center/cover no-repeat;
          color: white;
          padding: 120px 24px 100px;
          text-align: center;
          margin-top: 62px;
        }
        @media (max-width: 768px) {
          .renewable-hero {
            margin-top: 56px;
            padding: 80px 20px 60px;
          }
        }
        .renewable-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .renewable-hero .tagline {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .renewable-hero .description {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.125rem;
          line-height: 1.6;
          background: rgba(0,0,0,0.3);
          padding: 1rem;
          border-radius: 8px;
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
          background: #0b2e3e;
          color: white;
          padding: 80px 0;
          text-align: center;
        }
        .cta-section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .cta-section p {
          max-width: 600px;
          margin: 0 auto 2rem auto;
          font-size: 1.125rem;
        }
        .cta-button {
          display: inline-block;
          background: #6a9b5a;
          color: white;
          padding: 12px 32px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.2s;
        }
        .cta-button:hover {
          background: #5a8b4a;
        }

        @media (max-width: 768px) {
          .renewable-hero h1 { font-size: 2.2rem; }
          .renewable-hero .tagline { font-size: 1.2rem; }
          .section-title { font-size: 2rem; }
          .container { padding: 0 20px; }
        }
        @media (max-width: 480px) {
          .renewable-hero h1 { font-size: 1.8rem; }
          .section-title { font-size: 1.8rem; }
        }
      `}</style>

      <div className="renewable-page">
        {/* Hero Section */}
        <div className="renewable-hero">
          <div className="container">
            <h1>Renewable Energy Logistics</h1>
            <div className="tagline">Powering the Green Transition</div>
            <div className="description">
              Robinsons supports the renewable energy sector with specialised logistics for wind, solar, and hydro projects. From turbine components to solar panels, we manage oversized, heavy, and time‑critical shipments that drive sustainable energy forward.
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="overview-section">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content">
                <h2 className="section-title" style={{ textAlign: 'left' }}>Renewable Energy Expertise</h2>
                <p>
                  The renewable energy industry faces unique logistics challenges: oversized components, remote sites, and tight project timelines. Robinsons combines heavy‑lift expertise, project management, and a global network to deliver equipment safely and on schedule.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Whether it's wind turbine blades, solar modules, or hydroelectric components, we provide end‑to‑end solutions – from port handling to site delivery – ensuring your renewable projects stay on track.
                </p>
              </div>
              <div className="overview-image">
                <img src="/images/renewable-energy/overview.jpg" alt="Wind turbine transport" />
              </div>
            </div>
          </div>
        </div>

        {/* Key Services */}
        <div className="services-section">
          <div className="container">
            <h2 className="section-title">Our Renewable Energy Services</h2>
            <div className="section-subtitle">
              Tailored solutions for wind, solar, hydro, and energy storage projects
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">💨</div>
                <h3>Wind Energy Logistics</h3>
                <p>Transport of turbine blades, towers, and nacelles – including route surveys and specialised trailers.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">☀️</div>
                <h3>Solar Project Logistics</h3>
                <p>Just‑in‑time delivery of panels, inverters, and mounting structures for utility‑scale and rooftop installations.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💧</div>
                <h3>Hydro & Energy Storage</h3>
                <p>Transport of heavy turbines, generators, and battery storage systems with precision handling.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🏗️</div>
                <h3>Project Management</h3>
                <p>End‑to‑end coordination, from origin to site, with dedicated project managers and real‑time visibility.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="image-showcase">
          <div className="container">
            <h2 className="section-title">Renewable Energy in Action</h2>
            <div className="section-subtitle">
              See how we move the energy transition forward
            </div>
            <div className="showcase-grid">
              <div className="showcase-item">
                <img src="/images/renewable-energy/wind.jpg" alt="Wind turbine transport" />
                <div className="showcase-caption">Wind Turbine Logistics</div>
              </div>
              <div className="showcase-item">
                <img src="/images/renewable-energy/solar.jpg" alt="Solar panel delivery" />
                <div className="showcase-caption">Solar Project Delivery</div>
              </div>
              <div className="showcase-item">
                <img src="/images/renewable-energy/port.jpg" alt="Port handling" />
                <div className="showcase-caption">Heavy Lift & Port Operations</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="container">
            <h2>Ready to power your renewable energy project?</h2>
            <p>Let's discuss how our specialised logistics can support your green initiatives.</p>
            <a href="#contact" className="cta-button" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>Get in Touch</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenewableEnergy;