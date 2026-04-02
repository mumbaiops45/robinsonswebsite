// // src/pages/ESGPage.jsx
// import React from 'react';

// const ESGPage = () => {
//   return (
//     <>
//       <style>{`
//         /* Base styles */
//         .esg-page {
//           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//           color: #1a2a3a;
//           background: #ffffff;
//           line-height: 1.5;
//         }

//         /* Hero section with background image (no overlay) */
//         .esg-hero {
//           position: relative;
//           background: url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover no-repeat;
//           color: white;
//           padding: 120px 24px 100px;
//           text-align: center;
//           margin-top: 62px;
//         }
//         @media (max-width: 768px) {
//           .esg-hero {
//             margin-top: 56px;
//             padding: 80px 20px 60px;
//           }
//         }
//         .esg-hero h1 {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//           font-weight: 700;
//           letter-spacing: -0.02em;
//           text-shadow: 0 2px 4px rgba(0,0,0,0.2);
//         }
//         .esg-hero .tagline {
//           font-size: 1.5rem;
//           font-weight: 400;
//           margin-bottom: 1.5rem;
//           text-shadow: 0 1px 2px rgba(0,0,0,0.2);
//         }
//         .esg-hero .description {
//           max-width: 800px;
//           margin: 0 auto;
//           font-size: 1.125rem;
//           line-height: 1.6;
//           background: rgba(0,0,0,0.5);
//           padding: 1rem;
//           border-radius: 8px;
//         }

//         /* Container */
//         .container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 24px;
//         }

//         /* Section titles */
//         .section-title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           color: #0b2e3e;
//           text-align: center;
//           margin-bottom: 1rem;
//         }
//         .section-subtitle {
//           text-align: center;
//           color: #4a627a;
//           max-width: 800px;
//           margin: 0 auto 3rem auto;
//           font-size: 1.125rem;
//         }

//         /* SDG Grid with images */
//         .sdg-section {
//           padding: 80px 0;
//           background: #fff;
//         }
//         .sdg-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//           gap: 2rem;
//           margin-top: 2rem;
//         }
//         .sdg-card {
//           background: #ffffff;
//           border-radius: 1rem;
//           overflow: hidden;
//           box-shadow: 0 8px 20px rgba(0,0,0,0.05);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           text-align: center;
//         }
//         .sdg-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 12px 28px rgba(0,0,0,0.1);
//         }
//         .sdg-image {
//           height: 140px;
//           background-size: cover;
//           background-position: center;
//         }
//         .sdg-content {
//           padding: 1.5rem;
//         }
//         .sdg-number {
//           font-size: 2rem;
//           font-weight: 800;
//           color: #1b4d6e;
//           margin-bottom: 0.5rem;
//         }
//         .sdg-card h3 {
//           font-size: 1.25rem;
//           font-weight: 600;
//           color: #0b2e3e;
//           margin-bottom: 0.75rem;
//         }
//         .sdg-card p {
//           color: #4a627a;
//           font-size: 0.95rem;
//         }

//         /* Initiatives sections */
//         .initiatives-section {
//           background: #f8fafc;
//           padding: 80px 0;
//         }
//         .initiatives-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 2rem;
//         }
//         .initiative-card {
//           background: white;
//           border-radius: 1rem;
//           padding: 1.5rem;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//           transition: all 0.3s ease;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//         }
//         .initiative-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 4px;
//           background: linear-gradient(90deg, #0b2e3e, #6a9b5a);
//           transform: scaleX(0);
//           transition: transform 0.3s ease;
//         }
//         .initiative-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 8px 24px rgba(0,0,0,0.1);
//         }
//         .initiative-card:hover::before {
//           transform: scaleX(1);
//         }
//         .initiative-icon {
//           font-size: 2.5rem;
//           margin-bottom: 1rem;
//           display: inline-block;
//           background: #f0f4f9;
//           padding: 0.75rem;
//           border-radius: 50%;
//           width: 70px;
//           height: 70px;
//           line-height: 1;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//         }
//         .initiative-card:hover .initiative-icon {
//           background: #e6edf5;
//           transform: scale(1.05);
//         }
//         .initiative-card h3 {
//           font-size: 1.25rem;
//           font-weight: 600;
//           color: #1b4d6e;
//           margin-bottom: 0.75rem;
//         }
//         .initiative-card p {
//           color: #4a627a;
//           font-size: 0.95rem;
//           line-height: 1.5;
//         }

//         /* Two‑column layout for governance & social */
//         .two-column {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2rem;
//           margin-top: 2rem;
//         }
//         @media (max-width: 768px) {
//           .two-column {
//             grid-template-columns: 1fr;
//           }
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .esg-hero h1 {
//             font-size: 2.2rem;
//           }
//           .esg-hero .tagline {
//             font-size: 1.2rem;
//           }
//           .section-title {
//             font-size: 2rem;
//           }
//           .container {
//             padding: 0 20px;
//           }
//           .sdg-section,
//           .initiatives-section {
//             padding: 60px 0;
//           }
//         }
//         @media (max-width: 480px) {
//           .esg-hero h1 {
//             font-size: 1.8rem;
//           }
//           .section-title {
//             font-size: 1.8rem;
//           }
//         }
//       `}</style>

//       <div className="esg-page">
//         {/* Hero Section with background image – overlay removed */}
//         <div className="esg-hero">
//           <div className="container">
//             <h1>ESG</h1>
//             <div className="tagline">Our Sustainable Development Goals</div>
//             <div className="description">
//               At Robinsons, we recognise the vital role we play in creating a sustainable future. Our commitment to the United Nations Sustainable Development Goals (SDGs) is at the core of our operations and strategy. As a leader in global logistics, we strive to innovate and implement practices that not only improve our services but also contribute positively to society and the environment.
//             </div>
//           </div>
//         </div>

//         {/* SDG Focus Section with images */}
//         <div className="sdg-section">
//           <div className="container">
//             <h2 className="section-title">Key SDGs We Focus On</h2>
//             <div className="section-subtitle">
//               Aligning with the United Nations' global goals for a better future
//             </div>
//             <div className="sdg-grid">
//               <div className="sdg-card">
//                 <div className="sdg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
//                 <div className="sdg-content">
//                   <div className="sdg-number">Goal 5</div>
//                   <h3>Gender Equality</h3>
//                   <p>Achieve gender equality and empower all women and girls.</p>
//                 </div>
//               </div>
//               <div className="sdg-card">
//                 <div className="sdg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
//                 <div className="sdg-content">
//                   <div className="sdg-number">Goal 12</div>
//                   <h3>Responsible Consumption & Production</h3>
//                   <p>Ensure sustainable consumption and production patterns.</p>
//                 </div>
//               </div>
//               <div className="sdg-card">
//                 <div className="sdg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
//                 <div className="sdg-content">
//                   <div className="sdg-number">Goal 13</div>
//                   <h3>Climate Action</h3>
//                   <p>Take urgent action to combat climate change and its impacts.</p>
//                 </div>
//               </div>
//               <div className="sdg-card">
//                 <div className="sdg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
//                 <div className="sdg-content">
//                   <div className="sdg-number">Goal 17</div>
//                   <h3>Partnerships for the Goals</h3>
//                   <p>Strengthen the means of implementation and revitalize global partnerships.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Environmental Initiatives */}
//         <div className="initiatives-section">
//           <div className="container">
//             <h2 className="section-title">Environmental Initiatives</h2>
//             <div className="section-subtitle">
//               Protecting our planet through concrete actions
//             </div>
//             <div className="initiatives-grid">
//               <div className="initiative-card">
//                 <div className="initiative-icon">🏖️</div>
//                 <h3>Beach Clean-Up Drives</h3>
//                 <p>Active participation in nationwide beach and lake clean-up initiatives to restore coastal ecosystems and raise environmental awareness.</p>
//               </div>
//               <div className="initiative-card">
//                 <div className="initiative-icon">🔄</div>
//                 <h3>Circular Economy Initiatives</h3>
//                 <p>Implementing circular economy principles to reduce waste and maximize resource efficiency.</p>
//               </div>
//               <div className="initiative-card">
//                 <div className="initiative-icon">🌿</div>
//                 <h3>Collaboration for Biodiversity Conservation</h3>
//                 <p>Partnering with organizations to protect and restore biodiversity in key ecosystems.</p>
//               </div>
//               <div className="initiative-card">
//                 <div className="initiative-icon">🌳</div>
//                 <h3>Reforestation Efforts</h3>
//                 <p>Tree planting initiatives to offset carbon footprint and restore green cover.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social & Governance Combined Section */}
//         <div className="initiatives-section" style={{ background: '#fff' }}>
//           <div className="container">
//             <h2 className="section-title">Social & Governance Initiatives</h2>
//             <div className="section-subtitle">
//               Building stronger communities and responsible governance
//             </div>
//             <div className="two-column">
//               <div>
//                 <div className="initiative-card" style={{ marginBottom: '1.5rem' }}>
//                   <div className="initiative-icon">🤝</div>
//                   <h3>Community Engagement</h3>
//                   <p>Active involvement with local communities to understand needs and co‑create sustainable solutions.</p>
//                 </div>
//                 <div className="initiative-card">
//                   <div className="initiative-icon">🤲</div>
//                   <h3>Partnerships with NGOs</h3>
//                   <p>Collaborating with non‑governmental organizations to amplify social impact and reach underserved communities.</p>
//                 </div>
//               </div>
//               <div>
//                 <div className="initiative-card" style={{ marginBottom: '1.5rem' }}>
//                   <div className="initiative-icon">📊</div>
//                   <h3>Sustainability Reporting</h3>
//                   <p>Transparent reporting on ESG performance, aligned with global standards.</p>
//                 </div>
//                 <div className="initiative-card">
//                   <div className="initiative-icon">♻️</div>
//                   <h3>Implementing the 3Rs</h3>
//                   <p>Reduce, Reuse, Recycle – embedding circular practices across our operations.</p>
//                 </div>
//               </div>
//             </div>
//             <div style={{ marginTop: '2rem', textAlign: 'center' }}>
//               <div className="initiative-card" style={{ display: 'inline-block', width: 'auto', minWidth: '280px' }}>
//                 <div className="initiative-icon">🌱</div>
//                 <h3>Tree Planting Initiatives</h3>
//                 <p>Ongoing reforestation programs to contribute to carbon neutrality and ecological balance.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ESGPage;



// src/pages/ESGPage.jsx
import React, { useEffect, useRef } from 'react';

const ESGPage = () => {
  // Refs for animated sections and cards
  const sdgSectionRef = useRef(null);
  const envSectionRef = useRef(null);
  const socialGovernanceRef = useRef(null);
  const sdgCardsRef = useRef([]);
  const initiativeCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    // Observe section containers and cards
    if (sdgSectionRef.current) observer.observe(sdgSectionRef.current);
    if (envSectionRef.current) observer.observe(envSectionRef.current);
    if (socialGovernanceRef.current) observer.observe(socialGovernanceRef.current);
    sdgCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    initiativeCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-dark: #0a2b3e;
          --primary-accent: #6a9b5a;
          --primary-light: #eef2ff;
          --text-dark: #1f2e3a;
          --text-gray: #4b5f6e;
          --bg-gray: #f9fbfd;
          --shadow-sm: 0 4px 20px rgba(0, 0, 0, 0.05);
          --shadow-md: 0 10px 30px rgba(0, 0, 0, 0.08);
          --shadow-hover: 0 20px 35px rgba(0, 0, 0, 0.1);
          --transition: all 0.3s ease;
        }

        .esg-page {
          font-family: 'Poppins', sans-serif;
          color: var(--text-dark);
          background: #fff;
          line-height: 1.5;
          overflow-x: hidden;
        }

        /* Container */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* Section spacing */
        .section {
          padding: 80px 0;
        }

        .section-light {
          background: var(--bg-gray);
        }

        .section-white {
          background: #ffffff;
        }

        /* Headings */
        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          text-align: center;
          color: var(--primary-dark);
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: var(--text-gray);
          max-width: 700px;
          margin: 0 auto 3rem auto;
          font-weight: 400;
        }

        /* Chip style */
        .chip {
          display: inline-block;
          background: var(--primary-light);
          color: var(--primary-dark);
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 30px;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* ---------- Hero Section (Gradient) ---------- */
        .esg-hero {
          position: relative;
          background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
          color: white;
          padding: 35px 24px 100px;
          text-align: center;
          margin-top: 62px;
          overflow: hidden;
        }

        .esg-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 40px;
          opacity: 0.2;
          pointer-events: none;
        }

        .esg-hero::after {
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

        .hero-content h1 {
          font-size: 4rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          text-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .hero-tagline {
          font-size: 1.8rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          opacity: 0.95;
        }

        .hero-description {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.2rem;
          line-height: 1.6;
          background: rgba(0,0,0,0.15);
          padding: 1.2rem 2rem;
          border-radius: 60px;
          backdrop-filter: blur(4px);
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .esg-hero {
            margin-top: 56px;
            padding: 40px 20px 80px;
          }
          .hero-content h1 {
            font-size: 2.8rem;
          }
          .hero-tagline {
            font-size: 1.3rem;
          }
          .hero-description {
            font-size: 1rem;
            padding: 1rem;
            border-radius: 32px;
          }
        }

        /* Animation keyframes */
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

        /* Section visibility animation */
        .section-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Cards base animation */
        .sdg-card, .initiative-card, .social-card, .tree-card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .sdg-card.visible, .initiative-card.visible, .social-card.visible, .tree-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* SDG Grid */
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
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          text-align: center;
          border: 1px solid rgba(0,0,0,0.03);
        }

        .sdg-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-accent);
          box-shadow: 0 20px 35px -12px rgba(106, 155, 90, 0.25), var(--shadow-sm);
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
          color: var(--primary-accent);
          margin-bottom: 0.5rem;
        }

        .sdg-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary-dark);
          margin-bottom: 0.75rem;
        }

        .sdg-card p {
          color: var(--text-gray);
          font-size: 0.95rem;
        }

        /* Environmental Initiatives */
        .initiatives-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .initiative-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.03);
        }

        .initiative-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-dark), var(--primary-accent));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .initiative-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-accent);
          box-shadow: 0 20px 35px -12px rgba(106, 155, 90, 0.25), var(--shadow-sm);
        }

        .initiative-card:hover::before {
          transform: scaleX(1);
        }

        .initiative-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: inline-block;
          background: var(--primary-light);
          padding: 0.75rem;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: var(--primary-accent);
        }

        .initiative-card:hover .initiative-icon {
          background: #e6edf5;
          transform: scale(1.05);
        }

        .initiative-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary-dark);
          margin-bottom: 0.75rem;
        }

        .initiative-card p {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* ===== Redesigned Social & Governance Section ===== */
        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .social-card {
          background: white;
          border-radius: 1.5rem;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: var(--transition);
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: var(--shadow-sm);
          position: relative;
          overflow: hidden;
        }

        .social-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-dark), var(--primary-accent));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .social-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-accent);
          box-shadow: 0 20px 35px -12px rgba(106, 155, 90, 0.25), var(--shadow-sm);
        }

        .social-card:hover::before {
          transform: scaleX(1);
        }

        .social-icon {
          font-size: 2.8rem;
          background: var(--primary-light);
          width: 80px;
          height: 80px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-bottom: 1.5rem;
          color: var(--primary-accent);
          transition: var(--transition);
        }

        .social-card:hover .social-icon {
          background: #e6edf5;
          transform: scale(1.05);
        }

        .social-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 0.75rem;
        }

        .social-card p {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Tree Planting Card */
        .tree-card {
          background: linear-gradient(135deg, var(--primary-dark), #1b4d6e);
          border-radius: 1.5rem;
          padding: 2rem;
          text-align: center;
          color: white;
          margin-top: 1rem;
          transition: var(--transition);
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .tree-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          padding: 2px;
          background: linear-gradient(135deg, #fff, var(--primary-accent));
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .tree-card:hover::after {
          opacity: 1;
        }

        .tree-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 35px -12px rgba(106, 155, 90, 0.4);
        }

        .tree-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .tree-card h3 {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .tree-card p {
          font-size: 1rem;
          opacity: 0.9;
          max-width: 500px;
          margin: 0 auto 1rem;
        }

        .tree-badge {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
          padding: 0.3rem 1rem;
          border-radius: 40px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .container {
            padding: 0 24px;
          }
          .section {
            padding: 60px 0;
          }
          .section-title {
            font-size: 2.2rem;
          }
          .sdg-grid {
            gap: 1.5rem;
          }
          .social-grid {
            gap: 1.5rem;
          }
          .social-card {
            padding: 1.5rem;
          }
          .social-icon {
            width: 70px;
            height: 70px;
            font-size: 2.2rem;
          }
          .tree-card h3 {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.9rem;
          }
          .hero-content h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <div className="esg-page">
        {/* Hero Section */}
        <div className="esg-hero">
          <div className="hero-content">
            <div className="chip">Our Commitment</div>
            <h1>ESG</h1>
            <div className="hero-tagline">Our Sustainable Development Goals</div>
            <div className="hero-description">
              At Robinsons, we recognise the vital role we play in creating a sustainable future. Our commitment to the United Nations Sustainable Development Goals (SDGs) is at the core of our operations and strategy. As a leader in global logistics, we strive to innovate and implement practices that not only improve our services but also contribute positively to society and the environment.
            </div>
          </div>
        </div>

        {/* SDG Focus Section */}
        <div className="section section-white" ref={sdgSectionRef}>
          <div className="container">
            <div className="chip" style={{ background: 'var(--primary-light)', display: 'inline-block', margin: '0 auto 1rem', textAlign: 'center', width: 'fit-content' }}>
              UN Sustainable Development Goals
            </div>
            <h2 className="section-title">Key SDGs We Focus On</h2>
            <p className="section-subtitle">
              Aligning with the United Nations' global goals for a better future
            </p>
            <div className="sdg-grid">
              <div className="sdg-card" ref={(el) => (sdgCardsRef.current[0] = el)}>
                <div className="sdg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
                <div className="sdg-content">
                  <div className="sdg-number">Goal 5</div>
                  <h3>Gender Equality</h3>
                  <p>Achieve gender equality and empower all women and girls.</p>
                </div>
              </div>
              <div className="sdg-card" ref={(el) => (sdgCardsRef.current[1] = el)}>
                <div className="sdg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
                <div className="sdg-content">
                  <div className="sdg-number">Goal 12</div>
                  <h3>Responsible Consumption & Production</h3>
                  <p>Ensure sustainable consumption and production patterns.</p>
                </div>
              </div>
              <div className="sdg-card" ref={(el) => (sdgCardsRef.current[2] = el)}>
                <div className="sdg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
                <div className="sdg-content">
                  <div className="sdg-number">Goal 13</div>
                  <h3>Climate Action</h3>
                  <p>Take urgent action to combat climate change and its impacts.</p>
                </div>
              </div>
              <div className="sdg-card" ref={(el) => (sdgCardsRef.current[3] = el)}>
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
        <div className="section section-light" ref={envSectionRef}>
          <div className="container">
            <div className="chip" style={{ background: 'var(--primary-light)', display: 'inline-block', margin: '0 auto 1rem', textAlign: 'center', width: 'fit-content' }}>
              Protecting Our Planet
            </div>
            <h2 className="section-title">Environmental Initiatives</h2>
            <p className="section-subtitle">
              Concrete actions to safeguard the environment
            </p>
            <div className="initiatives-grid">
              <div className="initiative-card" ref={(el) => (initiativeCardsRef.current[0] = el)}>
                <div className="initiative-icon">🏖️</div>
                <h3>Beach Clean-Up Drives</h3>
                <p>Active participation in nationwide beach and lake clean-up initiatives to restore coastal ecosystems and raise environmental awareness.</p>
              </div>
              <div className="initiative-card" ref={(el) => (initiativeCardsRef.current[1] = el)}>
                <div className="initiative-icon">🔄</div>
                <h3>Circular Economy Initiatives</h3>
                <p>Implementing circular economy principles to reduce waste and maximize resource efficiency.</p>
              </div>
              <div className="initiative-card" ref={(el) => (initiativeCardsRef.current[2] = el)}>
                <div className="initiative-icon">🌿</div>
                <h3>Collaboration for Biodiversity Conservation</h3>
                <p>Partnering with organizations to protect and restore biodiversity in key ecosystems.</p>
              </div>
              <div className="initiative-card" ref={(el) => (initiativeCardsRef.current[3] = el)}>
                <div className="initiative-icon">🌳</div>
                <h3>Reforestation Efforts</h3>
                <p>Tree planting initiatives to offset carbon footprint and restore green cover.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Governance Section - Redesigned */}
        <div className="section section-white" ref={socialGovernanceRef} style={{ background: 'linear-gradient(135deg, #fafcf5 0%, #ffffff 100%)' }}>
          <div className="container">
            <div className="chip" style={{ background: 'var(--primary-light)', display: 'inline-block', margin: '0 auto 1rem', textAlign: 'center', width: 'fit-content' }}>
              People & Accountability
            </div>
            <h2 className="section-title">Social & Governance Initiatives</h2>
            <p className="section-subtitle">
              Building stronger communities and responsible governance
            </p>

            {/* 4‑column grid for the four main cards */}
            <div className="social-grid">
              <div className="social-card" ref={(el) => (initiativeCardsRef.current[4] = el)}>
                <div className="social-icon">🤝</div>
                <h3>Community Engagement</h3>
                <p>Active involvement with local communities to understand needs and co‑create sustainable solutions.</p>
              </div>
              <div className="social-card" ref={(el) => (initiativeCardsRef.current[5] = el)}>
                <div className="social-icon">🤲</div>
                <h3>Partnerships with NGOs</h3>
                <p>Collaborating with non‑governmental organizations to amplify social impact and reach underserved communities.</p>
              </div>
              <div className="social-card" ref={(el) => (initiativeCardsRef.current[6] = el)}>
                <div className="social-icon">📊</div>
                <h3>Sustainability Reporting</h3>
                <p>Transparent reporting on ESG performance, aligned with global standards.</p>
              </div>
              <div className="social-card" ref={(el) => (initiativeCardsRef.current[7] = el)}>
                <div className="social-icon">♻️</div>
                <h3>Implementing the 3Rs</h3>
                <p>Reduce, Reuse, Recycle – embedding circular practices across our operations.</p>
              </div>
            </div>

            {/* Special Tree Planting Card */}
            <div className="tree-card" ref={(el) => (initiativeCardsRef.current[8] = el)}>
              <div className="tree-icon">🌱</div>
              <h3>Tree Planting Initiatives</h3>
              <p>Ongoing reforestation programs to contribute to carbon neutrality and ecological balance.</p>
              <div className="tree-badge">3500+ trees planted</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ESGPage;