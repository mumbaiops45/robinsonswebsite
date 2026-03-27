// src/pages/Aboutus.jsx
import React from 'react';

const Aboutus = () => {
  return (
    <>
      <style>{`
        /* Base styles */
        .about-page {
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #1a2a3a;
          background: #ffffff;
          line-height: 1.5;
        }

        /* Hero section with background image */
        .about-hero {
          position: relative;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                      url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover no-repeat;
          color: white;
          padding: 140px 24px 100px;
          text-align: center;
          margin-top: 62px; /* offset for fixed navbar */
        }
        @media (max-width: 768px) {
          .about-hero {
            margin-top: 56px;
            padding: 100px 20px 80px;
          }
        }

        .about-hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .about-hero .tagline {
          font-size: 1.75rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .about-hero .description {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.125rem;
          line-height: 1.6;
          background: rgba(0,0,0,0.3);
          padding: 1rem;
          border-radius: 8px;
          backdrop-filter: blur(4px);
        }

        /* Container */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Company Profile section with image */
        .profile-section {
          padding: 80px 0;
          background: #fff;
        }
        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .profile-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0b2e3e;
          margin-bottom: 1.5rem;
        }
        .profile-content p {
          font-size: 1.125rem;
          color: #2c3e4e;
          line-height: 1.6;
        }
        .profile-image {
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 12px 28px rgba(0,0,0,0.1);
        }
        .profile-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s ease;
        }
        .profile-image:hover img {
          transform: scale(1.02);
        }
        @media (max-width: 768px) {
          .profile-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .profile-content h2 {
            text-align: center;
          }
        }

        /* Values section with enhanced cards */
        .values-section {
          background: #f8fafc;
          padding: 80px 0;
        }
        .values-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0b2e3e;
          margin-bottom: 1rem;
          text-align: center;
        }
        .values-sub {
          text-align: center;
          color: #4a627a;
          max-width: 700px;
          margin: 0 auto 3rem auto;
          font-size: 1.125rem;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .value-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .value-card::before {
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
        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 30px rgba(0,0,0,0.1);
        }
        .value-card:hover::before {
          transform: scaleX(1);
        }
        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: inline-block;
          background: #f0f4f9;
          padding: 0.75rem;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .value-card:hover .value-icon {
          background: #e6edf5;
          transform: scale(1.05);
        }
        .value-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1b4d6e;
          margin-bottom: 1rem;
        }
        .value-card p {
          color: #4a627a;
          font-size: 1rem;
          line-height: 1.5;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2.5rem;
          }
          .about-hero .tagline {
            font-size: 1.3rem;
          }
          .profile-content h2,
          .values-section h2 {
            font-size: 2rem;
          }
          .container {
            padding: 0 20px;
          }
          .profile-section,
          .values-section {
            padding: 60px 0;
          }
          .value-card {
            padding: 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .about-hero h1 {
            font-size: 2rem;
          }
          .about-hero .tagline {
            font-size: 1rem;
          }
          .profile-content h2,
          .values-section h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <div className="about-page">
        {/* Hero Section with background image */}
        <div className="about-hero">
          <div className="container">
            <h1>About Us</h1>
            <div className="tagline">Powering Logistics Excellence Since 1954</div>
            <div className="description">
              Robinsons Cargo and Logistics, a leader in the industry, specialises in air, sea and supply chain logistics services.
              We drive supply chain innovation and deliver unparalleled customer experiences through our comprehensive, tailored solutions.
              With a nationwide presence and unwavering commitment to quality, Robinsons is a trusted end-to-end logistics partner of the customer.
            </div>
          </div>
        </div>

        {/* Company Profile Section with image */}
        <div className="profile-section">
          <div className="container">
            <div className="profile-grid">
              <div className="profile-content">
                <h2>Company Profile</h2>
                <p>
                  For over six decades, Robinsons Cargo and Logistics has been at the forefront of the logistics industry.
                  Our journey began in 1954 with a vision to simplify complex supply chains. Today, we are proud to offer
                  end‑to‑end solutions that empower businesses across the nation. Our expertise spans air freight,
                  ocean freight, and integrated supply chain management, ensuring your goods move seamlessly from origin to destination.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  We combine modern technology with decades of experience to deliver reliable, cost‑effective logistics solutions
                  that adapt to your business needs.
                </p>
              </div>
              <div className="profile-image">
                <img 
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Robinsons Cargo and Logistics operations"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section with icons (can be replaced with actual images) */}
        <div className="values-section">
          <div className="container">
            <h2>Our Values</h2>
            <div className="values-sub">The principles that drive us every day</div>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">⚙️</div>
                <h3>Streamlined Operations</h3>
                <p>
                  Seamless supply chain management with integrated logistics and real-time visibility.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Expert Team & Network</h3>
                <p>
                  Logistics Solutions powered by a skilled team and extensive network.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🔄</div>
                <h3>Flexible & Scalable Solutions</h3>
                <p>
                  Adapt to changing business needs with flexible, industry-specific logistics services.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">⭐</div>
                <h3>Enhanced Customer Experience</h3>
                <p>
                  Elevate customer satisfaction with consistent, end-to-end support and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;