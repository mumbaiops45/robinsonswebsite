// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// const AirFreight = () => {
// const navigate = useNavigate();

//   return (
//     <>
//       <style>{`
//         .air-freight-page {
//           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//           color: #1a2a3a;
//           background: #ffffff;
//           line-height: 1.5;
//         }

//         /* Hero section – background image stored directly in public/ */
//        .air-hero {
//   position: relative;
//   background: url('/airplaneimport.jpg') center/cover no-repeat;
//   color: white;
//   padding: 120px 24px 100px;
//   text-align: center;
//   margin-top: 62px;
// }

// /* Dark overlay to improve text contrast */
// .air-hero::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed (0.4 – 0.7) */
//   z-index: 1;
// }
        
// /* Ensure text sits above the overlay */
// .air-hero .container {
//   position: relative;
//   z-index: 2;
// }

// .air-hero h1 {
//   font-size: 3rem;
//   margin-bottom: 1rem;
//   font-weight: 700;
//   letter-spacing: -0.02em;
//   text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
// }

// .air-hero .tagline {
//   font-size: 1.5rem;
//   font-weight: 400;
//   margin-bottom: 1.5rem;
//   text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
// }

// .air-hero .description {
//   max-width: 800px;
//   margin: 0 auto;
//   font-size: 1.125rem;
//   line-height: 1.6;
//   background: rgba(0, 0, 0, 0.55);  /* Darker background for readability */
//   padding: 1rem 1.5rem;
//   border-radius: 8px;
//   text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
// }
          
//         @media (max-width: 768px) {
//           .air-hero {
//             margin-top: 56px;
//             padding: 80px 20px 60px;
//           }
//         }
//         .air-hero h1 {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//           font-weight: 700;
//           letter-spacing: -0.02em;
//           text-shadow: 0 2px 4px rgba(0,0,0,0.2);
//         }
//         .air-hero .tagline {
//           font-size: 1.5rem;
//           font-weight: 400;
//           margin-bottom: 1.5rem;
//           text-shadow: 0 1px 2px rgba(0,0,0,0.2);
//         }
//         .air-hero .description {
//           max-width: 800px;
//           margin: 0 auto;
//           font-size: 1.125rem;
//           line-height: 1.6;
//           background: rgba(0,0,0,0.3);
//           padding: 1rem;
//           border-radius: 8px;
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

//         /* Import / Export section */
//         .import-export-section {
//           background: #f8fafc;
//           padding: 80px 0;
//         }
//         .import-export-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 4rem;
//         }
//         .service-card {
//           background: white;
//           border-radius: 1rem;
//           overflow: hidden;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//           transition: transform 0.3s ease;
//         }
//         .service-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 8px 24px rgba(0,0,0,0.1);
//         }
//         .service-card-image {
//           height: 350px;
//           overflow: hidden;
//         }
//         .service-card-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }
//         .service-card:hover .service-card-image img {
//           transform: scale(1.05);
//         }
//         .service-card-content {
//           padding: 1.5rem;
//         }
//         .service-card h3 {
//           font-size: 1.5rem;
//           font-weight: 700;
//           color: #1b4d6e;
//           margin-bottom: 1rem;
//         }
//         .service-card ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }
//         .service-card li {
//           padding: 0.5rem 0;
//           color: #4a627a;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }
//         .service-card li::before {
//           content: "✓";
//           color: #6a9b5a;
//           font-weight: bold;
//         }

//         /* Features grid (Why Choose) */
//         .features-section {
//           background: #fff;
//           padding: 80px 0;
//         }
//         .features-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 2rem;
//         }
//         .feature-card {
//           background: white;
//           border-radius: 1rem;
//           padding: 1.5rem;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//           transition: all 0.3s ease;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//         }
//         .feature-card::before {
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
//         .feature-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 8px 24px rgba(0,0,0,0.1);
//         }
//         .feature-card:hover::before {
//           transform: scaleX(1);
//         }
//         .feature-icon {
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
//         .feature-card:hover .feature-icon {
//           background: #e6edf5;
//           transform: scale(1.05);
//         }
//         .feature-card h3 {
//           font-size: 1.25rem;
//           font-weight: 600;
//           color: #1b4d6e;
//           margin-bottom: 0.75rem;
//         }
//         .feature-card p {
//           color: #4a627a;
//           font-size: 0.95rem;
//           line-height: 1.5;
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
//         }
//         .cta-button:hover {
//           background: #5a8b4a;
//         }

//         @media (max-width: 768px) {
//           .air-hero h1 { font-size: 2.2rem; }
//           .air-hero .tagline { font-size: 1.2rem; }
//           .section-title { font-size: 2rem; }
//           .container { padding: 0 20px; }
//           .overview-grid { grid-template-columns: 1fr; gap: 2rem; }
//           .import-export-grid { grid-template-columns: 1fr; gap: 2rem; }
//         }
//         @media (max-width: 480px) {
//           .air-hero h1 { font-size: 1.8rem; }
//           .section-title { font-size: 1.8rem; }
//         }
//       `}</style>

//       <div className="air-freight-page">
//         {/* Hero Section – background image from public/airplaneimport.jpg */}
//         <div className="air-hero">
//           <div className="container">
//             <h1>Air Freight Services</h1>
//             <div className="tagline">Fast, Reliable Global Air Cargo</div>
//             <div className="description">
//               Robinsons offers comprehensive air freight import and export solutions. Whether you need urgent shipments, time‑sensitive materials, or high‑value goods, our global network ensures your cargo reaches its destination quickly and securely.
//             </div>
//           </div>
//         </div>

//         {/* Overview Section */}
//         <div className="overview-section">
//           <div className="container">
//             <div className="overview-grid">
//               <div className="overview-content">
//                 <h2 className="section-title" style={{ textAlign: 'left' }}>Global Air Freight Expertise</h2>
//                 <p>
//                   With strategic partnerships with major airlines and a dedicated team, Robinsons delivers tailored air freight solutions. From door‑to‑door delivery to charter services, we manage every detail – ensuring your cargo moves smoothly across borders.
//                 </p>
//                 <p style={{ marginTop: '1rem' }}>
//                   Our end‑to‑end visibility platform gives you real‑time tracking and proactive alerts, so you always know where your shipment is. For imports, exports, or cross‑trade, we simplify the complexities of international air freight.
//                 </p>
//               </div>
//               <div className="overview-image">
//                 <img src="/air-freight1.jpg" alt="Air cargo loading" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Import & Export Section */}
//         <div className="import-export-section">
//           <div className="container">
//             <h2 className="section-title">Air Freight Import & Export Services</h2>
//             <div className="section-subtitle">
//               End‑to‑end solutions tailored to your supply chain needs
//             </div>
//             <div className="import-export-grid">
//               {/* Import Card */}
//               <div className="service-card">
//                 <div className="service-card-image">
//                   <img src="/import.png" alt="Air freight import" />
//                 </div>
//                 <div className="service-card-content">
//                   <h3>Air Freight Import</h3>
//                   <ul>
//                     <li>Customs clearance & compliance</li>
//                     <li>Warehousing & distribution</li>
//                     <li>Last‑mile delivery to your door</li>
//                     <li>Duty drawback & tax management</li>
//                     <li>Consolidation & de‑consolidation</li>
//                     <li>24/7 tracking & proactive alerts</li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Export Card */}
//               <div className="service-card">
//                 <div className="service-card-image">
//                   <img src="/export.jpg" alt="Air freight export" />
//                 </div>
//                 <div className="service-card-content">
//                   <h3>Air Freight Export</h3>
//                   <ul>
//                     <li>Export documentation & licensing</li>
//                     <li>Origin handling & consolidation</li>
//                     <li>Charter & scheduled flight options</li>
//                     <li>Dangerous goods handling</li>
//                     <li>Pharmaceutical & cold chain solutions</li>
//                     <li>Insurance & risk management</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Why Choose Robinsons Section */}
//         <div className="features-section">
//           <div className="container">
//             <h2 className="section-title">Why Choose Robinsons Air Freight?</h2>
//             <div className="section-subtitle">We deliver speed, security, and peace of mind</div>
//             <div className="features-grid">
//               <div className="feature-card">
//                 <div className="feature-icon">✈️</div>
//                 <h3>Global Network</h3>
//                 <p>Direct partnerships with over 50 airlines covering all major trade lanes.</p>
//               </div>
//               <div className="feature-card">
//                 <div className="feature-icon">⏱️</div>
//                 <h3>Time‑Critical Delivery</h3>
//                 <p>Same‑day, next‑flight‑out, and charter options for urgent shipments.</p>
//               </div>
//               <div className="feature-card">
//                 <div className="feature-icon">🔒</div>
//                 <h3>Secure Handling</h3>
//                 <p>Enhanced security for high‑value, fragile, or sensitive cargo.</p>
//               </div>
//               <div className="feature-card">
//                 <div className="feature-icon">📊</div>
//                 <h3>Real‑Time Visibility</h3>
//                 <p>24/7 tracking and proactive notifications via our digital platform.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="cta-section">
//           <div className="container">
//         <h2>Ready to move your cargo by air?</h2>
//         <p>Contact our air freight specialists for a customised solution.</p>
//         <button
//           className="cta-button"
//           onClick={() => navigate('/contact')}
//         >
//           Get in Touch
//         </button>
//       </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AirFreight;






// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AirFreight = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

//         .air-freight-page {
//           font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//           color: #1a2a3a;
//           background: #ffffff;
//           line-height: 1.5;
//         }

//         /* Hero section – gradient without image */
//         .air-hero {
//           position: relative;
//           background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
//           color: white;
//           padding: 10px 24px 100px;
//           text-align: center;
//           margin-top: 52px;
//           overflow: hidden;
//         }

//         .air-hero::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
//           background-repeat: repeat;
//           background-size: 40px;
//           opacity: 0.2;
//           pointer-events: none;
//         }

//         .air-hero::after {
//           content: '';
//           position: absolute;
//           bottom: -80px;
//           left: -80px;
//           width: 300px;
//           height: 300px;
//           background: radial-gradient(circle, rgba(106,155,90,0.2), transparent 70%);
//           border-radius: 50%;
//           filter: blur(60px);
//           pointer-events: none;
//         }

//         .air-hero .container {
//           position: relative;
//           z-index: 2;
//         }

//         .air-hero h1 {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//           font-weight: 800;
//           letter-spacing: -0.02em;
//           text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
//         }

//         .air-hero .tagline {
//           font-size: 1.5rem;
//           font-weight: 500;
//           margin-bottom: 1.5rem;
//           text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
//         }

//         .air-hero .description {
//           max-width: 800px;
//           margin: 0 auto;
//           font-size: 1.125rem;
//           line-height: 1.6;
//           background: rgba(0, 0, 0, 0.15);
//           padding: 1rem 1.5rem;
//           border-radius: 60px;
//           backdrop-filter: blur(4px);
//           font-weight: 400;
//         }

//         @media (max-width: 768px) {
//           .air-hero {
//             margin-top: 56px;
//             padding: 80px 20px 60px;
//           }
//           .air-hero h1 {
//             font-size: 2.2rem;
//           }
//           .air-hero .tagline {
//             font-size: 1.2rem;
//           }
//           .air-hero .description {
//             font-size: 1rem;
//             padding: 0.8rem 1rem;
//           }
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

//         /* Import / Export section */
//         .import-export-section {
//           background: #f8fafc;
//           padding: 30px 0;
//         }
//         .import-export-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 4rem;
//         }
//         .service-card {
//           background: white;
//           border-radius: 1rem;
//           overflow: hidden;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//           transition: transform 0.3s ease;
//         }
//         .service-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 8px 24px rgba(0,0,0,0.1);
//         }
//         .service-card-image {
//           height: 350px;
//           overflow: hidden;
//         }
//         .service-card-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }
//         .service-card:hover .service-card-image img {
//           transform: scale(1.05);
//         }
//         .service-card-content {
//           padding: 1.5rem;
//         }
//         .service-card h3 {
//           font-size: 1.5rem;
//           font-weight: 700;
//           color: #1b4d6e;
//           margin-bottom: 1rem;
//         }
//         .service-card ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }
//         .service-card li {
//           padding: 0.5rem 0;
//           color: #4a627a;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }
//         .service-card li::before {
//           content: "✓";
//           color: #6a9b5a;
//           font-weight: bold;
//         }

//         /* Features grid (Why Choose) */
//         .features-section {
//           background: #fff;
//           padding: 30px 0;
//         }
//         .features-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 2rem;
//         }
//         .feature-card {
//           background: white;
//           border-radius: 1rem;
//           padding: 1.5rem;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//           transition: all 0.3s ease;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//         }
//         .feature-card::before {
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
//         .feature-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 8px 24px rgba(0,0,0,0.1);
//         }
//         .feature-card:hover::before {
//           transform: scaleX(1);
//         }
//         .feature-icon {
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
//         .feature-card:hover .feature-icon {
//           background: #e6edf5;
//           transform: scale(1.05);
//         }
//         .feature-card h3 {
//           font-size: 1.25rem;
//           font-weight: 600;
//           color: #1b4d6e;
//           margin-bottom: 0.75rem;
//         }
//         .feature-card p {
//           color: #4a627a;
//           font-size: 0.95rem;
//           line-height: 1.5;
//         }

//         /* CTA section – redesigned to match other pages */
//         .cta-section {
//           background: linear-gradient(135deg, #0b2e3e, #6a9b5a);
//           color: white;
//           text-align: center;
//           padding: 70px 20px;
//           border-radius: 48px;
//           margin: 40px auto 80px;
//           max-width: 1100px;
//         }
//         .cta-section h2 {
//           font-size: 2rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//         }
//         .cta-section p {
//           font-size: 1.1rem;
//           opacity: 0.9;
//           max-width: 600px;
//           margin: 0 auto 1.8rem;
//           font-weight: 400;
//         }
//         .cta-button {
//           display: inline-block;
//           background: white;
//           color: #0b2e3e;
//           padding: 12px 32px;
//           border-radius: 40px;
//           font-weight: 600;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//           border: none;
//           cursor: pointer;
//           font-size: 1rem;
//         }
//         .cta-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 8px 20px rgba(0,0,0,0.15);
//           background: #f5f5f5;
//         }

//         @media (max-width: 768px) {
//           .air-hero h1 { font-size: 2.2rem; }
//           .air-hero .tagline { font-size: 1.2rem; }
//           .section-title { font-size: 2rem; }
//           .container { padding: 0 20px; }
//           .overview-grid { grid-template-columns: 1fr; gap: 2rem; }
//           .import-export-grid { grid-template-columns: 1fr; gap: 2rem; }
//           .cta-section {
//             margin: 40px 20px 60px;
//             padding: 50px 20px;
//           }
//           .cta-section h2 {
//             font-size: 1.7rem;
//           }
//         }
//         @media (max-width: 480px) {
//           .air-hero h1 { font-size: 1.8rem; }
//           .section-title { font-size: 1.8rem; }
//         }
//       `}</style>

//       <div className="air-freight-page">
//         {/* Hero Section – gradient only, no background image */}
//         <div className="air-hero">
//           <div className="container">
//             <h1>Air Freight Services</h1>
//             <div className="tagline">Fast, Reliable Global Air Cargo</div>
//             <div className="description">
//               Robinsons offers comprehensive air freight import and export solutions. Whether you need urgent shipments, time‑sensitive materials, or high‑value goods, our global network ensures your cargo reaches its destination quickly and securely.
//             </div>
//           </div>
//         </div>

//         {/* Overview Section */}
//         <div className="overview-section">
//           <div className="container">
//             <div className="overview-grid">
//               <div className="overview-content">
//                 <h2 className="section-title" style={{ textAlign: 'left' }}>Global Air Freight Expertise</h2>
//                 <p>
//                   With strategic partnerships with major airlines and a dedicated team, Robinsons delivers tailored air freight solutions. From door‑to‑door delivery to charter services, we manage every detail – ensuring your cargo moves smoothly across borders.
//                 </p>
//                 <p style={{ marginTop: '1rem' }}>
//                   Our end‑to‑end visibility platform gives you real‑time tracking and proactive alerts, so you always know where your shipment is. For imports, exports, or cross‑trade, we simplify the complexities of international air freight.
//                 </p>
//               </div>
//               <div className="overview-image">
//                 <img src="/air-freight1.jpg" alt="Air cargo loading" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Import & Export Section */}
//         <div className="import-export-section">
//           <div className="container">
//             <h2 className="section-title">Air Freight Import & Export Services</h2>
//             <div className="section-subtitle">
//               End‑to‑end solutions tailored to your supply chain needs
//             </div>
//             <div className="import-export-grid">
//               {/* Import Card */}
//               <div className="service-card">
//                 <div className="service-card-image">
//                   <img src="/import.png" alt="Air freight import" />
//                 </div>
//                 <div className="service-card-content">
//                   <h3>Air Freight Import</h3>
//                   <ul>
//                     <li>Customs clearance & compliance</li>
//                     <li>Warehousing & distribution</li>
//                     <li>Last‑mile delivery to your door</li>
//                     <li>Duty drawback & tax management</li>
//                     <li>Consolidation & de‑consolidation</li>
//                     <li>24/7 tracking & proactive alerts</li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Export Card */}
//               <div className="service-card">
//                 <div className="service-card-image">
//                   <img src="/export.jpg" alt="Air freight export" />
//                 </div>
//                 <div className="service-card-content">
//                   <h3>Air Freight Export</h3>
//                   <ul>
//                     <li>Export documentation & licensing</li>
//                     <li>Origin handling & consolidation</li>
//                     <li>Charter & scheduled flight options</li>
//                     <li>Dangerous goods handling</li>
//                     <li>Pharmaceutical & cold chain solutions</li>
//                     <li>Insurance & risk management</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Why Choose Robinsons Section */}
//         <div className="features-section">
//           <div className="container">
//             <h2 className="section-title">Why Choose Robinsons Air Freight?</h2>
//             <div className="section-subtitle">We deliver speed, security, and peace of mind</div>
//             <div className="features-grid">
//               <div className="feature-card">
//                 <div className="feature-icon">✈️</div>
//                 <h3>Global Network</h3>
//                 <p>Direct partnerships with over 50 airlines covering all major trade lanes.</p>
//               </div>
//               <div className="feature-card">
//                 <div className="feature-icon">⏱️</div>
//                 <h3>Time‑Critical Delivery</h3>
//                 <p>Same‑day, next‑flight‑out, and charter options for urgent shipments.</p>
//               </div>
//               <div className="feature-card">
//                 <div className="feature-icon">🔒</div>
//                 <h3>Secure Handling</h3>
//                 <p>Enhanced security for high‑value, fragile, or sensitive cargo.</p>
//               </div>
//               <div className="feature-card">
//                 <div className="feature-icon">📊</div>
//                 <h3>Real‑Time Visibility</h3>
//                 <p>24/7 tracking and proactive notifications via our digital platform.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action – redesigned */}
//         <div className="container">
//           <div className="cta-section">
//             <h2>Ready to move your cargo by air?</h2>
//             <p>Contact our air freight specialists for a customised solution.</p>
//             <button className="cta-button" onClick={() => navigate('/contact')}>
//               Get in Touch
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AirFreight;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const AirFreight = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .air-freight-page {
          font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #1a2a3a;
          background: #ffffff;
          line-height: 1.5;
        }

        /* Hero section – gradient without image */
        .air-hero {
          position: relative;
          background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
          color: white;
          padding: 10px 24px 100px;
          text-align: center;
          margin-top: 52px;
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

        .air-hero .container {
          position: relative;
          z-index: 2;
        }

        .air-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .air-hero .tagline {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
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
        }

        @media (max-width: 768px) {
          .air-hero {
            margin-top: 56px;
            padding: 80px 20px 60px;
          }
          .air-hero h1 {
            font-size: 2.2rem;
          }
          .air-hero .tagline {
            font-size: 1.2rem;
          }
          .air-hero .description {
            font-size: 1rem;
            padding: 0.8rem 1rem;
          }
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

        /* Import / Export section – with borders */
        .import-export-section {
          background: #f8fafc;
          padding: 30px 0;
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
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.2s;
          border: 1px solid rgba(0,0,0,0.03);
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 35px -12px rgba(106, 155, 90, 0.25), 0 4px 12px rgba(0,0,0,0.05);
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
        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1b4d6e;
          margin-bottom: 1rem;
        }
        .service-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .service-card li {
          padding: 0.5rem 0;
          color: #4a627a;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .service-card li::before {
          content: "✓";
          color: #6a9b5a;
          font-weight: bold;
        }

        /* Features grid (Why Choose) */
        .features-section {
          background: #fff;
          padding: 30px 0;
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
          box-shadow: 0 20px 35px -12px rgba(106, 155, 90, 0.25), 0 4px 12px rgba(0,0,0,0.05);
          border-color: #6a9b5a;
        }
        .feature-card:hover::before {
          transform: scaleX(1);
        }
        .feature-icon {
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
          color: #6a9b5a;
        }
        .feature-card:hover .feature-icon {
          background: #e6edf5;
          transform: scale(1.05);
        }
        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1b4d6e;
          margin-bottom: 0.75rem;
        }
        .feature-card p {
          color: #4a627a;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* CTA section – redesigned to match other pages */
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

      <div className="air-freight-page">
        {/* Hero Section – gradient only, no background image */}
        <div className="air-hero">
          <div className="container">
            <h1>Air Freight Services</h1>
            <div className="tagline">Fast, Reliable Global Air Cargo</div>
            <div className="description">
              Robinsons offers comprehensive air freight import and export solutions. Whether you need urgent shipments, time‑sensitive materials, or high‑value goods, our global network ensures your cargo reaches its destination quickly and securely.
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="overview-section">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content">
                <h2 className="section-title" style={{ textAlign: 'left' }}>Global Air Freight Expertise</h2>
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

        {/* Import & Export Section */}
        <div className="import-export-section">
          <div className="container">
            <h2 className="section-title">Air Freight Import & Export Services</h2>
            <div className="section-subtitle">
              End‑to‑end solutions tailored to your supply chain needs
            </div>
            <div className="import-export-grid">
              {/* Import Card */}
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

              {/* Export Card */}
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

        {/* Why Choose Robinsons Section */}
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

        {/* Call to Action – redesigned */}
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