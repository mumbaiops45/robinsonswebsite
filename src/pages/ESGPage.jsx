// src/pages/ESGPage.jsx
import React from 'react';

const ESGPage = () => {
  return (
    <>
      <style>{`
        /* Base styles */
        .esg-page {
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #1a2a3a;
          background: #ffffff;
          line-height: 1.5;
        }

        /* Hero section with background image (no overlay) */
        .esg-hero {
          position: relative;
          background: url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover no-repeat;
          color: white;
          padding: 120px 24px 100px;
          text-align: center;
          margin-top: 62px;
        }
        @media (max-width: 768px) {
          .esg-hero {
            margin-top: 56px;
            padding: 80px 20px 60px;
          }
        }
        .esg-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .esg-hero .tagline {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .esg-hero .description {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.125rem;
          line-height: 1.6;
          background: rgba(0,0,0,0.5);
          padding: 1rem;
          border-radius: 8px;
        }

        /* Container */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Section titles */
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

        /* SDG Grid with images */
        .sdg-section {
          padding: 80px 0;
          background: #fff;
        }
        .sdg-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .sdg-card {
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }
        .sdg-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.1);
        }
        .sdg-image {
          height: 140px;
          background-size: cover;
          background-position: center;
        }
        .sdg-content {
          padding: 1.5rem;
        }
        .sdg-number {
          font-size: 2rem;
          font-weight: 800;
          color: #1b4d6e;
          margin-bottom: 0.5rem;
        }
        .sdg-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0b2e3e;
          margin-bottom: 0.75rem;
        }
        .sdg-card p {
          color: #4a627a;
          font-size: 0.95rem;
        }

        /* Initiatives sections */
        .initiatives-section {
          background: #f8fafc;
          padding: 80px 0;
        }
        .initiatives-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .initiative-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .initiative-card::before {
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
        .initiative-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        .initiative-card:hover::before {
          transform: scaleX(1);
        }
        .initiative-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: inline-block;
          background: #f0f4f9;
          padding: 0.75rem;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .initiative-card:hover .initiative-icon {
          background: #e6edf5;
          transform: scale(1.05);
        }
        .initiative-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1b4d6e;
          margin-bottom: 0.75rem;
        }
        .initiative-card p {
          color: #4a627a;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Two‑column layout for governance & social */
        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }
        @media (max-width: 768px) {
          .two-column {
            grid-template-columns: 1fr;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .esg-hero h1 {
            font-size: 2.2rem;
          }
          .esg-hero .tagline {
            font-size: 1.2rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .container {
            padding: 0 20px;
          }
          .sdg-section,
          .initiatives-section {
            padding: 60px 0;
          }
        }
        @media (max-width: 480px) {
          .esg-hero h1 {
            font-size: 1.8rem;
          }
          .section-title {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <div className="esg-page">
        {/* Hero Section with background image – overlay removed */}
        <div className="esg-hero">
          <div className="container">
            <h1>ESG</h1>
            <div className="tagline">Our Sustainable Development Goals</div>
            <div className="description">
              At Robinsons, we recognise the vital role we play in creating a sustainable future. Our commitment to the United Nations Sustainable Development Goals (SDGs) is at the core of our operations and strategy. As a leader in global logistics, we strive to innovate and implement practices that not only improve our services but also contribute positively to society and the environment.
            </div>
          </div>
        </div>

        {/* SDG Focus Section with images */}
        <div className="sdg-section">
          <div className="container">
            <h2 className="section-title">Key SDGs We Focus On</h2>
            <div className="section-subtitle">
              Aligning with the United Nations' global goals for a better future
            </div>
            <div className="sdg-grid">
              <div className="sdg-card">
                <div className="sdg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
                <div className="sdg-content">
                  <div className="sdg-number">Goal 5</div>
                  <h3>Gender Equality</h3>
                  <p>Achieve gender equality and empower all women and girls.</p>
                </div>
              </div>
              <div className="sdg-card">
                <div className="sdg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
                <div className="sdg-content">
                  <div className="sdg-number">Goal 12</div>
                  <h3>Responsible Consumption & Production</h3>
                  <p>Ensure sustainable consumption and production patterns.</p>
                </div>
              </div>
              <div className="sdg-card">
                <div className="sdg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
                <div className="sdg-content">
                  <div className="sdg-number">Goal 13</div>
                  <h3>Climate Action</h3>
                  <p>Take urgent action to combat climate change and its impacts.</p>
                </div>
              </div>
              <div className="sdg-card">
                <div className="sdg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
                <div className="sdg-content">
                  <div className="sdg-number">Goal 17</div>
                  <h3>Partnerships for the Goals</h3>
                  <p>Strengthen the means of implementation and revitalize global partnerships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Initiatives */}
        <div className="initiatives-section">
          <div className="container">
            <h2 className="section-title">Environmental Initiatives</h2>
            <div className="section-subtitle">
              Protecting our planet through concrete actions
            </div>
            <div className="initiatives-grid">
              <div className="initiative-card">
                <div className="initiative-icon">🏖️</div>
                <h3>Beach Clean-Up Drives</h3>
                <p>Active participation in nationwide beach and lake clean-up initiatives to restore coastal ecosystems and raise environmental awareness.</p>
              </div>
              <div className="initiative-card">
                <div className="initiative-icon">🔄</div>
                <h3>Circular Economy Initiatives</h3>
                <p>Implementing circular economy principles to reduce waste and maximize resource efficiency.</p>
              </div>
              <div className="initiative-card">
                <div className="initiative-icon">🌿</div>
                <h3>Collaboration for Biodiversity Conservation</h3>
                <p>Partnering with organizations to protect and restore biodiversity in key ecosystems.</p>
              </div>
              <div className="initiative-card">
                <div className="initiative-icon">🌳</div>
                <h3>Reforestation Efforts</h3>
                <p>Tree planting initiatives to offset carbon footprint and restore green cover.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Governance Combined Section */}
        <div className="initiatives-section" style={{ background: '#fff' }}>
          <div className="container">
            <h2 className="section-title">Social & Governance Initiatives</h2>
            <div className="section-subtitle">
              Building stronger communities and responsible governance
            </div>
            <div className="two-column">
              <div>
                <div className="initiative-card" style={{ marginBottom: '1.5rem' }}>
                  <div className="initiative-icon">🤝</div>
                  <h3>Community Engagement</h3>
                  <p>Active involvement with local communities to understand needs and co‑create sustainable solutions.</p>
                </div>
                <div className="initiative-card">
                  <div className="initiative-icon">🤲</div>
                  <h3>Partnerships with NGOs</h3>
                  <p>Collaborating with non‑governmental organizations to amplify social impact and reach underserved communities.</p>
                </div>
              </div>
              <div>
                <div className="initiative-card" style={{ marginBottom: '1.5rem' }}>
                  <div className="initiative-icon">📊</div>
                  <h3>Sustainability Reporting</h3>
                  <p>Transparent reporting on ESG performance, aligned with global standards.</p>
                </div>
                <div className="initiative-card">
                  <div className="initiative-icon">♻️</div>
                  <h3>Implementing the 3Rs</h3>
                  <p>Reduce, Reuse, Recycle – embedding circular practices across our operations.</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <div className="initiative-card" style={{ display: 'inline-block', width: 'auto', minWidth: '280px' }}>
                <div className="initiative-icon">🌱</div>
                <h3>Tree Planting Initiatives</h3>
                <p>Ongoing reforestation programs to contribute to carbon neutrality and ecological balance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ESGPage;