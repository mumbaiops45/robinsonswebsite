// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ConsolidationServices = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <style>{`
//         .consolidation-page {
//           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//           color: #1a2a3a;
//           background: #ffffff;
//           line-height: 1.5;
//         }

//         /* Hero section – with overlay */
//         .consolidation-hero {
//           position: relative;
//           background: url('/hero.jpg') center/cover no-repeat;
//           color: white;
//           padding: 120px 24px 100px;
//           text-align: center;
//           margin-top: 62px;
//         }

//         .consolidation-hero::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.55);
//           z-index: 1;
//         }

//         .consolidation-hero .container {
//           position: relative;
//           z-index: 2;
//         }

//         .consolidation-hero h1 {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//           font-weight: 700;
//           letter-spacing: -0.02em;
//           text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
//         }

//         .consolidation-hero .tagline {
//           font-size: 1.5rem;
//           font-weight: 400;
//           margin-bottom: 1.5rem;
//           text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
//         }

//         .consolidation-hero .description {
//           max-width: 800px;
//           margin: 0 auto;
//           font-size: 1.125rem;
//           line-height: 1.6;
//           background: rgba(0, 0, 0, 0.6);
//           padding: 1rem 1.5rem;
//           border-radius: 8px;
//           text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
//         }

//         @media (max-width: 768px) {
//           .consolidation-hero {
//             margin-top: 56px;
//             padding: 80px 20px 60px;
//           }
//           .consolidation-hero h1 { font-size: 2.2rem; }
//           .consolidation-hero .tagline { font-size: 1.2rem; }
//         }
//         @media (max-width: 480px) {
//           .consolidation-hero h1 { font-size: 1.8rem; }
//         }

//         .container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 24px;
//         }

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

//         /* Overview section */
//         .overview-section {
//           padding: 80px 0;
//           background: #fff;
//         }
//         .overview-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 4rem;
//           align-items: center;
//         }
//         .overview-content p {
//           font-size: 1.125rem;
//           color: #2c3e4e;
//           line-height: 1.6;
//         }
//         .overview-image {
//           border-radius: 1rem;
//           overflow: hidden;
//           box-shadow: 0 12px 28px rgba(0,0,0,0.1);
//         }
//         .overview-image img {
//           width: 100%;
//           height: auto;
//           display: block;
//           transition: transform 0.3s ease;
//         }
//         .overview-image:hover img {
//           transform: scale(1.02);
//         }

//         /* Services grid */
//         .services-section {
//           background: #f8fafc;
//           padding: 80px 0;
//         }
//         .services-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 2rem;
//         }
//         .service-card {
//           background: white;
//           border-radius: 1rem;
//           padding: 1.5rem;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//           transition: all 0.3s ease;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//         }
//         .service-card::before {
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
//         .service-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 8px 24px rgba(0,0,0,0.1);
//         }
//         .service-card:hover::before {
//           transform: scaleX(1);
//         }
//         .service-icon {
//           font-size: 2.5rem;
//           margin-bottom: 1rem;
//           display: inline-block;
//           background: #f0f4f9;
//           padding: 0.75rem;
//           border-radius: 50%;
//           width: 70px;
//           height: 70px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//         }
//         .service-card:hover .service-icon {
//           background: #e6edf5;
//           transform: scale(1.05);
//         }
//         .service-card h3 {
//           font-size: 1.25rem;
//           font-weight: 600;
//           color: #1b4d6e;
//           margin-bottom: 0.75rem;
//         }
//         .service-card p {
//           color: #4a627a;
//           font-size: 0.95rem;
//           line-height: 1.5;
//         }

//         /* Image showcase */
//         .image-showcase {
//           padding: 60px 0;
//           background: #fff;
//         }
//         .showcase-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 2rem;
//           margin-top: 2rem;
//         }
//         .showcase-item {
//           border-radius: 1rem;
//           overflow: hidden;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//           transition: transform 0.3s ease;
//         }
//         .showcase-item:hover {
//           transform: translateY(-5px);
//         }
//         .showcase-item img {
//           width: 100%;
//           height: 250px;
//           object-fit: cover;
//           display: block;
//         }
//         .showcase-caption {
//           padding: 1rem;
//           text-align: center;
//           background: white;
//           font-size: 0.9rem;
//           color: #4a627a;
//         }

//         /* CTA section */
//         .cta-section {
//           background: #0b2e3e;
//           color: white;
//           padding: 80px 0;
//           text-align: center;
//         }
//         .cta-section h2 {
//           font-size: 2rem;
//           margin-bottom: 1rem;
//         }
//         .cta-section p {
//           max-width: 600px;
//           margin: 0 auto 2rem auto;
//           font-size: 1.125rem;
//         }
//         .cta-button {
//           display: inline-block;
//           background: #6a9b5a;
//           color: white;
//           padding: 12px 32px;
//           border-radius: 4px;
//           text-decoration: none;
//           font-weight: 600;
//           transition: background 0.2s;
//           border: none;
//           cursor: pointer;
//           font-size: 1rem;
//         }
//         .cta-button:hover {
//           background: #5a8b4a;
//         }

//         @media (max-width: 768px) {
//           .section-title { font-size: 2rem; }
//           .container { padding: 0 20px; }
//           .overview-grid { grid-template-columns: 1fr; gap: 2rem; }
//         }
//         @media (max-width: 480px) {
//           .section-title { font-size: 1.8rem; }
//         }
//       `}</style>

//       <div className="consolidation-page">
//         {/* Hero Section */}
//         <div className="consolidation-hero">
//           <div className="container">
//             <h1>Consolidation Services</h1>
//             <div className="tagline">Smart Freight Consolidation for Cost‑Effective Shipping</div>
//             <div className="description">
//               Robinsons offers comprehensive freight consolidation solutions for both import and export shipments. By combining multiple smaller shipments into a single container or air pallet, we help you reduce costs, optimise space, and simplify logistics.
//             </div>
//           </div>
//         </div>

//         {/* Overview Section */}
//         <div className="overview-section">
//           <div className="container">
//             <div className="overview-grid">
//               <div className="overview-content">
//                 <h2 className="section-title" style={{ textAlign: 'left' }}>What is Freight Consolidation?</h2>
//                 <p>
//                   Consolidation (or groupage) is the process of combining multiple smaller shipments from different shippers into one full container or air cargo pallet. This allows you to share transport costs, reduce your carbon footprint, and benefit from regular, scheduled departures.
//                 </p>
//                 <p style={{ marginTop: '1rem' }}>
//                   Robinsons manages the entire consolidation process – from pickup at multiple origins to deconsolidation at destination – providing you with a single, hassle‑free solution. Whether you ship LCL (Less than Container Load) by sea or LTL (Less than Truckload) by air, we handle all the complexities.
//                 </p>
//               </div>
//               <div className="overview-image">
//                 <img src="/consolidation.jpg" alt="Freight consolidation warehouse" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Services Grid */}
//         <div className="services-section">
//           <div className="container">
//             <h2 className="section-title">Our Consolidation Services</h2>
//             <div className="section-subtitle">
//               Tailored solutions for efficient, cost‑effective shipping
//             </div>
//             <div className="services-grid">
//               <div className="service-card">
//                 <div className="service-icon">📦</div>
//                 <h3>LCL Consolidation (Sea)</h3>
//                 <p>Combine small shipments into a shared container, paying only for the space you use. Regular sailings to major ports worldwide.</p>
//               </div>
//               <div className="service-card">
//                 <div className="service-icon">✈️</div>
//                 <h3>Air Freight Groupage</h3>
//                 <p>Pallet consolidation for air cargo, offering scheduled departures and cost savings compared to dedicated air freight.</p>
//               </div>
//               <div className="service-card">
//                 <div className="service-icon">🏭</div>
//                 <h3>Multi‑Origin Consolidation</h3>
//                 <p>Pick‑up from multiple suppliers, consolidation at our hub, and single delivery to your doorstep.</p>
//               </div>
//               <div className="service-card">
//                 <div className="service-icon">📊</div>
//                 <h3>Deconsolidation & Distribution</h3>
//                 <p>Breaking down consolidated loads and distributing to multiple consignees with last‑mile delivery.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Image Showcase */}
//         <div className="image-showcase">
//           <div className="container">
//             <h2 className="section-title">Consolidation in Action</h2>
//             <div className="section-subtitle">See how we optimise space and reduce costs</div>
//             <div className="showcase-grid">
//               <div className="showcase-item">
//                 <img src="/warehouse.png" alt="Warehouse consolidation" />
//                 <div className="showcase-caption">Central Consolidation Hub</div>
//               </div>
//               <div className="showcase-item">
//                 <img src="/container.jpg" alt="Container loading" />
//                 <div className="showcase-caption">Container Loading</div>
//               </div>
//               <div className="showcase-item">
//                 <img src="/delivery.png" alt="Last mile delivery" />
//                 <div className="showcase-caption">Last‑mile Distribution</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="cta-section">
//           <div className="container">
//             <h2>Ready to consolidate your shipments?</h2>
//             <p>Contact our consolidation specialists for a free quote.</p>
//             <button
//               className="cta-button"
//               onClick={() => navigate('/contact')}
//             >
//               Get in Touch
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ConsolidationServices;


// src/pages/services/ConsolidationServices.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConsolidationServices = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        /* Poppins font */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .consolidation-page {
          font-family: 'Poppins', sans-serif;
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
        .consolidation-hero {
          position: relative;
          background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
          color: white;
          padding: 40px 24px 100px;
          text-align: center;
          margin-top: 52px;
          overflow: hidden;
        }

        .consolidation-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 40px;
          opacity: 0.2;
          pointer-events: none;
        }

        .consolidation-hero::after {
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

        .consolidation-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .consolidation-hero .tagline {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }

        .consolidation-hero .description {
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
          .consolidation-hero {
            margin-top: 56px;
            padding: 40px 20px 60px;
          }
          .consolidation-hero h1 { font-size: 2.2rem; }
          .consolidation-hero .tagline { font-size: 1.2rem; }
          .consolidation-hero .description { font-size: 1rem; padding: 0.8rem 1rem; }
        }

        /* Modern CTA section */
        .cta-section {
          background: linear-gradient(135deg, #0b2e3e, #6a9b5a);
          color: white;
          text-align: center;
          padding: 50px 20px;
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
          .cta-section {
            margin: 40px 20px 60px;
            padding: 50px 20px;
          }
          .cta-section h2 {
            font-size: 1.7rem;
          }
        }

        /* The rest of your existing styles remain unchanged */
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

        @media (max-width: 768px) {
          .section-title { font-size: 2rem; }
          .container { padding: 0 20px; }
          .overview-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 480px) {
          .section-title { font-size: 1.8rem; }
        }
      `}</style>

      <div className="consolidation-page">
        {/* Hero Section – updated with gradient and chip */}
        <div className="consolidation-hero">
          <div className="hero-content">
            <div className="chip">Smart Consolidation</div>
            <h1>Consolidation Services</h1>
            <div className="tagline">Cost‑Effective Freight Consolidation</div>
            <div className="description">
              Robinsons offers comprehensive freight consolidation solutions for both import and export shipments. By combining multiple smaller shipments into a single container or air pallet, we help you reduce costs, optimise space, and simplify logistics.
            </div>
          </div>
        </div>

        {/* Overview Section – unchanged */}
        <div className="overview-section">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content">
                <h2 className="section-title" style={{ textAlign: 'left' }}>What is Freight Consolidation?</h2>
                <p>
                  Consolidation (or groupage) is the process of combining multiple smaller shipments from different shippers into one full container or air cargo pallet. This allows you to share transport costs, reduce your carbon footprint, and benefit from regular, scheduled departures.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Robinsons manages the entire consolidation process – from pickup at multiple origins to deconsolidation at destination – providing you with a single, hassle‑free solution. Whether you ship LCL (Less than Container Load) by sea or LTL (Less than Truckload) by air, we handle all the complexities.
                </p>
              </div>
              <div className="overview-image">
                <img src="/consolidation.jpg" alt="Freight consolidation warehouse" />
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid – unchanged */}
        <div className="services-section">
          <div className="container">
            <h2 className="section-title">Our Consolidation Services</h2>
            <div className="section-subtitle">
              Tailored solutions for efficient, cost‑effective shipping
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">📦</div>
                <h3>LCL Consolidation (Sea)</h3>
                <p>Combine small shipments into a shared container, paying only for the space you use. Regular sailings to major ports worldwide.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">✈️</div>
                <h3>Air Freight Groupage</h3>
                <p>Pallet consolidation for air cargo, offering scheduled departures and cost savings compared to dedicated air freight.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🏭</div>
                <h3>Multi‑Origin Consolidation</h3>
                <p>Pick‑up from multiple suppliers, consolidation at our hub, and single delivery to your doorstep.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Deconsolidation & Distribution</h3>
                <p>Breaking down consolidated loads and distributing to multiple consignees with last‑mile delivery.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Showcase – unchanged */}
        <div className="image-showcase">
          <div className="container">
            <h2 className="section-title">Consolidation in Action</h2>
            <div className="section-subtitle">See how we optimise space and reduce costs</div>
            <div className="showcase-grid">
              <div className="showcase-item">
                <img src="/warehouse.png" alt="Warehouse consolidation" />
                <div className="showcase-caption">Central Consolidation Hub</div>
              </div>
              <div className="showcase-item">
                <img src="/container.jpg" alt="Container loading" />
                <div className="showcase-caption">Container Loading</div>
              </div>
              <div className="showcase-item">
                <img src="/delivery.png" alt="Last mile delivery" />
                <div className="showcase-caption">Last‑mile Distribution</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section – modernised */}
        <div className="container">
          <div className="cta-section">
            <h2>Ready to consolidate your shipments?</h2>
            <p>Contact our consolidation specialists for a free quote.</p>
            <button className="cta-button" onClick={() => navigate('/contact')}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsolidationServices;