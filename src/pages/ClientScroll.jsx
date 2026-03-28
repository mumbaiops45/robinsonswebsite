// // // // // import React from 'react';
// // // // // import './ClientScroll.css';

// // // // // const ClientScroll = () => {
// // // // //   const clients = [
// // // // //     'ROLEX',
// // // // //     'BVLGARI',
// // // // //     'MARUTI SUZUKI',
// // // // //     'CIPLA',
// // // // //     'FOXCONN',
// // // // //     'CARTIER',
// // // // //     'TATA ELECTRONICS',
// // // // //     'AUROBINDO',
// // // // //     'BREITLING',
// // // // //     'BIOCON',
// // // // //     'HILTI',
// // // // //     'UNICEF',
// // // // //     'TIMKEN',
// // // // //     'NAVAL GROUP',
// // // // //     'WHO',
// // // // //     'RIMOWA',
// // // // //   ];

// // // // //   return (
// // // // //     <div className="client-scroll">
// // // // //       <div className="cs-track">
// // // // //         {[...clients, ...clients].map((client, index) => (
// // // // //           <span key={index} className="cs-item">
// // // // //             {client}
// // // // //           </span>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ClientScroll;

// // // // // .client-scroll {
// // // // //   background: var(--w);
// // // // //   border-bottom: 1px solid var(--bd);
// // // // //   overflow: hidden;
// // // // //   padding: 16px 0;
// // // // // }

// // // // // .cs-track {
// // // // //   display: flex;
// // // // //   white-space: nowrap;
// // // // //   animation: tickRun 28s linear infinite;
// // // // // }

// // // // // .cs-item {
// // // // //   display: inline-flex;
// // // // //   align-items: center;
// // // // //   padding: 0 30px;
// // // // //   font-size: 0.75rem;
// // // // //   font-weight: 800;
// // // // //   color: var(--tm);
// // // // //   letter-spacing: 0.06em;
// // // // //   text-transform: uppercase;
// // // // //   border-right: 1px solid var(--bd);
// // // // // }

// // // // // .cs-item:hover {
// // // // //   color: var(--n);
// // // // // }

// // // // // @keyframes tickRun {
// // // // //   0% {
// // // // //     transform: translateX(0);
// // // // //   }
// // // // //   100% {
// // // // //     transform: translateX(-50%);
// // // // //   }
// // // // // }



// // // // import React from 'react';

// // // // const ClientScroll = () => {
// // // //   const clients = [
// // // //     'ROLEX',
// // // //     'BVLGARI',
// // // //     'MARUTI SUZUKI',
// // // //     'CIPLA',
// // // //     'FOXCONN',
// // // //     'CARTIER',
// // // //     'TATA ELECTRONICS',
// // // //     'AUROBINDO',
// // // //     'BREITLING',
// // // //     'BIOCON',
// // // //     'HILTI',
// // // //     'UNICEF',
// // // //     'TIMKEN',
// // // //     'NAVAL GROUP',
// // // //     'WHO',
// // // //     'RIMOWA',
// // // //   ];

// // // //   return (
// // // //     <div className="client-scroll">
// // // //       <div className="cs-track">
// // // //         {[...clients, ...clients].map((client, index) => (
// // // //           <span key={index} className="cs-item">
// // // //             {client}
// // // //           </span>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ClientScroll;

// // // // // Inject styles into document head
// // // // if (typeof document !== 'undefined') {
// // // //   const styleSheet = document.createElement("style");
// // // //   styleSheet.textContent = `
// // // //     .client-scroll {
// // // //       background: var(--w);
// // // //       border-bottom: 1px solid var(--bd);
// // // //       overflow: hidden;
// // // //       padding: 16px 0;
// // // //     }

// // // //     .cs-track {
// // // //       display: flex;
// // // //       white-space: nowrap;
// // // //       animation: tickRun 28s linear infinite;
// // // //     }

// // // //     .cs-item {
// // // //       display: inline-flex;
// // // //       align-items: center;
// // // //       padding: 0 30px;
// // // //       font-size: 0.75rem;
// // // //       font-weight: 800;
// // // //       color: var(--tm);
// // // //       letter-spacing: 0.06em;
// // // //       text-transform: uppercase;
// // // //       border-right: 1px solid var(--bd);
// // // //     }

// // // //     .cs-item:hover {
// // // //       color: var(--n);
// // // //     }

// // // //     @keyframes tickRun {
// // // //       0% {
// // // //         transform: translateX(0);
// // // //       }
// // // //       100% {
// // // //         transform: translateX(-50%);
// // // //       }
// // // //     }
// // // //   `;
// // // //   document.head.appendChild(styleSheet);
// // // // }

// // // // src/components/Home/ClientScroll.jsx


// // // import React from 'react';

// // // const ClientScroll = () => {
// // //   const clients = [
// // //     'ROLEX',
// // //     'BVLGARI',
// // //     'MARUTI SUZUKI',
// // //     'CIPLA',
// // //     'FOXCONN',
// // //     'CARTIER',
// // //     'TATA ELECTRONICS',
// // //     'AUROBINDO',
// // //     'BREITLING',
// // //     'BIOCON',
// // //     'HILTI',
// // //     'UNICEF',
// // //     'TIMKEN',
// // //     'NAVAL GROUP',
// // //     'WHO',
// // //     'RIMOWA',
// // //   ];

// // //   return (
// // //     <div className="client-scroll">
// // //       <div className="cs-track">
// // //         {[...clients, ...clients].map((client, idx) => (
// // //           <span key={idx} className="cs-item">
// // //             {client}
// // //           </span>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ClientScroll;

// // import React from 'react';

// // const ClientScroll = () => {
// //   const clients = [
// //     'ROLEX',
// //     'BVLGARI',
// //     'MARUTI SUZUKI',
// //     'CIPLA',
// //     'FOXCONN',
// //     'CARTIER',
// //     'TATA ELECTRONICS',
// //     'AUROBINDO',
// //     'BREITLING',
// //     'BIOCON',
// //     'HILTI',
// //     'UNICEF',
// //     'TIMKEN',
// //     'NAVAL GROUP',
// //     'WHO',
// //     'RIMOWA',
// //   ];

// //   return (
// //     <>
// //       <style>{`
// //         .client-scroll {
// //           background: var(--w, #ffffff);
// //           border-bottom: 1px solid var(--bd, #d8e4ed);
// //           overflow: hidden;
// //           padding: 16px 0;
// //           width: 100%;
// //         }
// //         .cs-track {
// //           display: flex;
// //           white-space: nowrap;
// //           animation: tickRun 28s linear infinite;
// //           will-change: transform;
// //         }
// //         .cs-item {
// //           display: inline-flex;
// //           align-items: center;
// //           padding: 0 30px;
// //           font-size: 0.75rem;
// //           font-weight: 800;
// //           color: var(--tm, #7a9aaa);
// //           letter-spacing: 0.06em;
// //           text-transform: uppercase;
// //           border-right: 1px solid var(--bd, #d8e4ed);
// //           flex-shrink: 0;
// //           transition: color 0.2s;
// //           cursor: default;
// //         }
// //         .cs-item:hover {
// //           color: var(--n, #093e5d);
// //         }

// //         @media (max-width: 768px) {
// //           .client-scroll { padding: 12px 0; }
// //           .cs-item {
// //             padding: 0 20px;
// //             font-size: 0.65rem;
// //             letter-spacing: 0.04em;
// //           }
// //           .cs-track { animation-duration: 22s; }
// //         }

// //         @media (max-width: 480px) {
// //           .client-scroll { padding: 10px 0; }
// //           .cs-item {
// //             padding: 0 14px;
// //             font-size: 0.58rem;
// //             letter-spacing: 0.03em;
// //           }
// //           .cs-track { animation-duration: 18s; }
// //         }
// //       `}</style>

// //       <div className="client-scroll">
// //         <div className="cs-track">
// //           {[...clients, ...clients].map((client, idx) => (
// //             <span key={idx} className="cs-item">
// //               {client}
// //             </span>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default ClientScroll;

// import React from 'react';

// const ClientPage = () => {
//   const clients = [
//     'ROLEX',
//     'BVLGARI',
//     'MARUTI SUZUKI',
//     'CIPLA',
//     'FOXCONN',
//     'CARTIER',
//     'TATA ELECTRONICS',
//     'AUROBINDO',
//     'BREITLING',
//     'BIOCON',
//     'HILTI',
//     'UNICEF',
//     'TIMKEN',
//     'NAVAL GROUP',
//     'WHO',
//     'RIMOWA',
//   ];

//   // Optional categories – adjust as needed
//   const categories = {
//     'Luxury Goods': ['ROLEX', 'BVLGARI', 'CARTIER', 'RIMOWA', 'BREITLING'],
//     'Automotive & Engineering': ['MARUTI SUZUKI', 'TIMKEN', 'HILTI', 'TATA ELECTRONICS'],
//     'Pharma & Healthcare': ['CIPLA', 'AUROBINDO', 'BIOCON'],
//     'Hi‑Tech & Electronics': ['FOXCONN', 'TATA ELECTRONICS'],
//     'Social Impact & Government': ['UNICEF', 'WHO', 'NAVAL GROUP'],
//   };

//   return (
//     <>
//       <style>{`
//         .client-page {
//           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//           color: #1a2a3a;
//           background: #ffffff;
//           line-height: 1.5;
//         }

//         /* Hero section */
//         .client-hero {
//           background: linear-gradient(135deg, #0b2e3e 0%, #1b4d6e 100%);
//           color: white;
//           padding: 100px 24px 80px;
//           text-align: center;
//           margin-top: 62px;
//         }
//         @media (max-width: 768px) {
//           .client-hero {
//             margin-top: 56px;
//             padding: 80px 20px 60px;
//           }
//         }
//         .client-hero h1 {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//           font-weight: 700;
//           letter-spacing: -0.02em;
//         }
//         .client-hero .tagline {
//           font-size: 1.5rem;
//           font-weight: 400;
//           opacity: 0.9;
//           margin-bottom: 1.5rem;
//         }
//         .client-hero .description {
//           max-width: 800px;
//           margin: 0 auto;
//           font-size: 1.125rem;
//           line-height: 1.6;
//           opacity: 0.9;
//         }

//         .container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 24px;
//         }

//         /* Marquee section (reuse your ClientScroll style) */
//         .marquee-section {
//           padding: 60px 0 0;
//           background: #fff;
//         }
//         .client-scroll {
//           background: var(--w, #ffffff);
//           border-bottom: 1px solid var(--bd, #d8e4ed);
//           overflow: hidden;
//           padding: 16px 0;
//           width: 100%;
//         }
//         .cs-track {
//           display: flex;
//           white-space: nowrap;
//           animation: tickRun 28s linear infinite;
//           will-change: transform;
//         }
//         .cs-item {
//           display: inline-flex;
//           align-items: center;
//           padding: 0 30px;
//           font-size: 0.75rem;
//           font-weight: 800;
//           color: var(--tm, #7a9aaa);
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           border-right: 1px solid var(--bd, #d8e4ed);
//           flex-shrink: 0;
//           transition: color 0.2s;
//           cursor: default;
//         }
//         .cs-item:hover {
//           color: var(--n, #093e5d);
//         }

//         @keyframes tickRun {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         @media (max-width: 768px) {
//           .client-scroll { padding: 12px 0; }
//           .cs-item {
//             padding: 0 20px;
//             font-size: 0.65rem;
//             letter-spacing: 0.04em;
//           }
//           .cs-track { animation-duration: 22s; }
//         }

//         @media (max-width: 480px) {
//           .client-scroll { padding: 10px 0; }
//           .cs-item {
//             padding: 0 14px;
//             font-size: 0.58rem;
//             letter-spacing: 0.03em;
//           }
//           .cs-track { animation-duration: 18s; }
//         }

//         /* Categorized grid */
//         .grid-section {
//           padding: 60px 0;
//           background: #f8fafc;
//         }
//         .grid-title {
//           text-align: center;
//           font-size: 2rem;
//           font-weight: 700;
//           color: #0b2e3e;
//           margin-bottom: 2rem;
//         }
//         .client-categories {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 2rem;
//         }
//         .category-card {
//           background: white;
//           border-radius: 1rem;
//           padding: 1.5rem;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//           transition: transform 0.3s ease;
//         }
//         .category-card:hover {
//           transform: translateY(-5px);
//         }
//         .category-card h3 {
//           font-size: 1.25rem;
//           font-weight: 600;
//           color: #1b4d6e;
//           margin-bottom: 1rem;
//           border-left: 3px solid #6a9b5a;
//           padding-left: 0.75rem;
//         }
//         .category-card ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }
//         .category-card li {
//           padding: 0.5rem 0;
//           color: #4a627a;
//           border-bottom: 1px solid #eef2f6;
//         }
//         .category-card li:last-child {
//           border-bottom: none;
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
//           .client-hero h1 { font-size: 2.2rem; }
//           .client-hero .tagline { font-size: 1.2rem; }
//           .grid-title { font-size: 1.8rem; }
//         }
//         @media (max-width: 480px) {
//           .client-hero h1 { font-size: 1.8rem; }
//           .grid-title { font-size: 1.5rem; }
//         }
//       `}</style>

//       <div className="client-page">
//         {/* Hero Section */}
//         <div className="client-hero">
//           <div className="container">
//             <h1>Our Clients</h1>
//             <div className="tagline">Trusted by Industry Leaders Worldwide</div>
//             <div className="description">
//               Robinsons Cargo & Logistics is proud to partner with a diverse range of clients across industries. From luxury brands to healthcare and automotive giants, we deliver excellence that powers their supply chains.
//             </div>
//           </div>
//         </div>

//         {/* Marquee Section – same as your ClientScroll */}
//         <div className="marquee-section">
//           <div className="container">
//             <div className="client-scroll">
//               <div className="cs-track">
//                 {[...clients, ...clients].map((client, idx) => (
//                   <span key={idx} className="cs-item">
//                     {client}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Categorized Clients Grid */}
//         <div className="grid-section">
//           <div className="container">
//             <h2 className="grid-title">Partners Across Industries</h2>
//             <div className="client-categories">
//               {Object.entries(categories).map(([category, clientsList]) => (
//                 <div key={category} className="category-card">
//                   <h3>{category}</h3>
//                   <ul>
//                     {clientsList.map((client, idx) => (
//                       <li key={idx}>{client}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="cta-section">
//           <div className="container">
//             <h2>Become Our Partner</h2>
//             <p>Join the growing list of businesses that trust Robinsons for their logistics needs.</p>
//             <a href="#contact" className="cta-button" onClick={(e) => {
//               e.preventDefault();
//               document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//             }}>Get in Touch</a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ClientPage;  


// import React from 'react';

// const ClientPage = () => {
//   const clients = [
//     'ROLEX',
//     'BVLGARI',
//     'MARUTI SUZUKI',
//     'CIPLA',
//     'FOXCONN',
//     'CARTIER',
//     'TATA ELECTRONICS',
//     'AUROBINDO',
//     'BREITLING',
//     'BIOCON',
//     'HILTI',
//     'UNICEF',
//     'TIMKEN',
//     'NAVAL GROUP',
//     'WHO',
//     'RIMOWA',
//   ];

//   // Optional categories (you can adjust or remove)
//   const categories = {
//     'Luxury Goods': ['ROLEX', 'BVLGARI', 'CARTIER', 'RIMOWA', 'BREITLING'],
//     'Automotive & Engineering': ['MARUTI SUZUKI', 'TIMKEN', 'HILTI', 'TATA ELECTRONICS'],
//     'Pharma & Healthcare': ['CIPLA', 'AUROBINDO', 'BIOCON'],
//     'Hi‑Tech & Electronics': ['FOXCONN', 'TATA ELECTRONICS'],
//     'Social Impact & Government': ['UNICEF', 'WHO', 'NAVAL GROUP'],
//   };

//   // Helper to format filename (e.g., "MARUTI SUZUKI" -> "maruti-suzuki.png")
//   const getLogoPath = (name) => {
//     const fileName = name.toLowerCase().replace(/ /g, '-');
//     return `/images/clients/${fileName}.png`;
//   };

//   return (
//     <>
//       <style>{`
//         .client-page {
//           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//           color: #1a2a3a;
//           background: #ffffff;
//           line-height: 1.5;
//         }

//         .client-hero {
//           background: linear-gradient(135deg, #0b2e3e 0%, #1b4d6e 100%);
//           color: white;
//           padding: 100px 24px 80px;
//           text-align: center;
//           margin-top: 62px;
//         }
//         @media (max-width: 768px) {
//           .client-hero {
//             margin-top: 56px;
//             padding: 80px 20px 60px;
//           }
//         }
//         .client-hero h1 {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//           font-weight: 700;
//           letter-spacing: -0.02em;
//         }
//         .client-hero .tagline {
//           font-size: 1.5rem;
//           font-weight: 400;
//           opacity: 0.9;
//           margin-bottom: 1.5rem;
//         }
//         .client-hero .description {
//           max-width: 800px;
//           margin: 0 auto;
//           font-size: 1.125rem;
//           line-height: 1.6;
//           opacity: 0.9;
//         }

//         .container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 24px;
//         }

//         /* Marquee section – same as your original */
//         .marquee-section {
//           padding: 60px 0 0;
//           background: #fff;
//         }
//         .client-scroll {
//           background: var(--w, #ffffff);
//           border-bottom: 1px solid var(--bd, #d8e4ed);
//           overflow: hidden;
//           padding: 16px 0;
//           width: 100%;
//         }
//         .cs-track {
//           display: flex;
//           white-space: nowrap;
//           animation: tickRun 28s linear infinite;
//           will-change: transform;
//         }
//         .cs-item {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           padding: 0 30px;
//           font-size: 0.75rem;
//           font-weight: 800;
//           color: var(--tm, #7a9aaa);
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           border-right: 1px solid var(--bd, #d8e4ed);
//           flex-shrink: 0;
//           transition: color 0.2s;
//           cursor: default;
//           height: 60px;
//         }
//         .cs-item img {
//           max-height: 40px;
//           max-width: 120px;
//           object-fit: contain;
//         }
//         .cs-item span {
//           display: inline-block;
//         }
//         .cs-item:hover {
//           color: var(--n, #093e5d);
//         }

//         @keyframes tickRun {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         @media (max-width: 768px) {
//           .client-scroll { padding: 12px 0; }
//           .cs-item {
//             padding: 0 20px;
//             font-size: 0.65rem;
//             letter-spacing: 0.04em;
//             height: 50px;
//           }
//           .cs-item img { max-height: 32px; max-width: 100px; }
//           .cs-track { animation-duration: 22s; }
//         }
//         @media (max-width: 480px) {
//           .client-scroll { padding: 10px 0; }
//           .cs-item {
//             padding: 0 14px;
//             font-size: 0.58rem;
//             letter-spacing: 0.03em;
//             height: 40px;
//           }
//           .cs-item img { max-height: 28px; max-width: 80px; }
//           .cs-track { animation-duration: 18s; }
//         }

//         /* Grid section – now with logos */
//         .grid-section {
//           padding: 60px 0;
//           background: #f8fafc;
//         }
//         .grid-title {
//           text-align: center;
//           font-size: 2rem;
//           font-weight: 700;
//           color: #0b2e3e;
//           margin-bottom: 2rem;
//         }
//         .client-categories {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 2rem;
//         }
//         .category-card {
//           background: white;
//           border-radius: 1rem;
//           padding: 1.5rem;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//           transition: transform 0.3s ease;
//         }
//         .category-card:hover {
//           transform: translateY(-5px);
//         }
//         .category-card h3 {
//           font-size: 1.25rem;
//           font-weight: 600;
//           color: #1b4d6e;
//           margin-bottom: 1rem;
//           border-left: 3px solid #6a9b5a;
//           padding-left: 0.75rem;
//         }
//         .client-logo-item {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 0.75rem 0;
//           border-bottom: 1px solid #eef2f6;
//         }
//         .client-logo-item:last-child {
//           border-bottom: none;
//         }
//         .client-logo-item img {
//           width: 50px;
//           height: 50px;
//           object-fit: contain;
//         }
//         .client-logo-item span {
//           font-size: 0.9rem;
//           font-weight: 500;
//           color: #2c3e4e;
//         }
//         .fallback-text {
//           display: inline-block;
//           font-size: 0.9rem;
//           font-weight: 600;
//           color: #7a9aaa;
//         }

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
//           .client-hero h1 { font-size: 2.2rem; }
//           .client-hero .tagline { font-size: 1.2rem; }
//           .grid-title { font-size: 1.8rem; }
//         }
//         @media (max-width: 480px) {
//           .client-hero h1 { font-size: 1.8rem; }
//           .grid-title { font-size: 1.5rem; }
//         }
//       `}</style>

//       <div className="client-page">
//         {/* Hero Section */}
//         <div className="client-hero">
//           <div className="container">
//             <h1>Our Clients</h1>
//             <div className="tagline">Trusted by Industry Leaders Worldwide</div>
//             <div className="description">
//               Robinsons Cargo & Logistics is proud to partner with a diverse range of clients across industries. From luxury brands to healthcare and automotive giants, we deliver excellence that powers their supply chains.
//             </div>
//           </div>
//         </div>

//         {/* Marquee Section */}
//         <div className="marquee-section">
//           <div className="container">
//             <div className="client-scroll">
//               <div className="cs-track">
//                 {[...clients, ...clients].map((client, idx) => {
//                   const imgPath = getLogoPath(client);
//                   return (
//                     <span key={idx} className="cs-item">
//                       <img
//                         src={imgPath}
//                         alt={client}
//                         onError={(e) => {
//                           // Fallback to text if image fails to load
//                           e.target.style.display = 'none';
//                           e.target.parentElement.innerHTML = `<span>${client}</span>`;
//                         }}
//                       />
//                     </span>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Categorized Clients Grid */}
//         <div className="grid-section">
//           <div className="container">
//             <h2 className="grid-title">Partners Across Industries</h2>
//             <div className="client-categories">
//               {Object.entries(categories).map(([category, clientsList]) => (
//                 <div key={category} className="category-card">
//                   <h3>{category}</h3>
//                   {clientsList.map((client, idx) => {
//                     const imgPath = getLogoPath(client);
//                     return (
//                       <div key={idx} className="client-logo-item">
//                         <img
//                           src={imgPath}
//                           alt={client}
//                           onError={(e) => {
//                             e.target.style.display = 'none';
//                             e.target.parentElement.querySelector('.fallback-text').style.display = 'inline-block';
//                           }}
//                         />
//                         <span className="fallback-text" style={{ display: 'none' }}>{client}</span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="cta-section">
//           <div className="container">
//             <h2>Become Our Partner</h2>
//             <p>Join the growing list of businesses that trust Robinsons for their logistics needs.</p>
//             <a href="#contact" className="cta-button" onClick={(e) => {
//               e.preventDefault();
//               document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//             }}>Get in Touch</a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ClientPage;


// import React from 'react';

// const ClientPage = () => {
//   const clients = [
//     { name: 'ROLEX', category: 'Luxury Goods' },
//     { name: 'BVLGARI', category: 'Luxury Goods' },
//     { name: 'MARUTI SUZUKI', category: 'Automotive & Engineering' },
//     { name: 'CIPLA', category: 'Pharma & Healthcare' },
//     { name: 'FOXCONN', category: 'Hi‑Tech & Electronics' },
//     { name: 'CARTIER', category: 'Luxury Goods' },
//     { name: 'TATA ELECTRONICS', category: 'Automotive & Engineering' },
//     { name: 'AUROBINDO', category: 'Pharma & Healthcare' },
//     { name: 'BREITLING', category: 'Luxury Goods' },
//     { name: 'BIOCON', category: 'Pharma & Healthcare' },
//     { name: 'HILTI', category: 'Automotive & Engineering' },
//     { name: 'UNICEF', category: 'Social Impact & Government' },
//     { name: 'TIMKEN', category: 'Automotive & Engineering' },
//     { name: 'NAVAL GROUP', category: 'Social Impact & Government' },
//     { name: 'WHO', category: 'Social Impact & Government' },
//     { name: 'RIMOWA', category: 'Luxury Goods' },
//   ];

//   // Group clients by category
//   const categories = {
//     'Luxury Goods': clients.filter(c => c.category === 'Luxury Goods'),
//     'Automotive & Engineering': clients.filter(c => c.category === 'Automotive & Engineering'),
//     'Pharma & Healthcare': clients.filter(c => c.category === 'Pharma & Healthcare'),
//     'Hi‑Tech & Electronics': clients.filter(c => c.category === 'Hi‑Tech & Electronics'),
//     'Social Impact & Government': clients.filter(c => c.category === 'Social Impact & Government'),
//   };

//   const getLogoPath = (name) => {
//     const fileName = name.toLowerCase().replace(/ /g, '-');
//     return `/images/clients/${fileName}.png`;
//   };

//   return (
//     <>
//       <style>{`
//         .client-page {
//           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//           color: #1a2a3a;
//           background: #ffffff;
//           line-height: 1.5;
//         }

//         /* Hero section */
//         .client-hero {
//           background: linear-gradient(135deg, #0b2e3e 0%, #1b4d6e 100%);
//           color: white;
//           padding: 100px 24px 80px;
//           text-align: center;
//           margin-top: 62px;
//         }
//         @media (max-width: 768px) {
//           .client-hero {
//             margin-top: 56px;
//             padding: 80px 20px 60px;
//           }
//         }
//         .client-hero h1 {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//           font-weight: 700;
//           letter-spacing: -0.02em;
//         }
//         .client-hero .tagline {
//           font-size: 1.5rem;
//           font-weight: 400;
//           opacity: 0.9;
//           margin-bottom: 1.5rem;
//         }
//         .client-hero .description {
//           max-width: 800px;
//           margin: 0 auto;
//           font-size: 1.125rem;
//           line-height: 1.6;
//           opacity: 0.9;
//         }

//         .container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 24px;
//         }

//         /* Clients grid */
//         .clients-section {
//           padding: 80px 0;
//           background: #fff;
//         }
//         .client-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//           gap: 32px;
//           margin-top: 40px;
//         }
//         .client-card {
//           background: white;
//           border-radius: 1rem;
//           padding: 1.5rem;
//           text-align: center;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//           border: 1px solid #eef2f6;
//         }
//         .client-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 12px 24px rgba(0,0,0,0.1);
//         }
//         .client-logo {
//           height: 80px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 1rem;
//         }
//         .client-logo img {
//           max-height: 60px;
//           max-width: 120px;
//           object-fit: contain;
//         }
//         .client-name {
//           font-size: 1rem;
//           font-weight: 600;
//           color: #2c3e4e;
//           margin-bottom: 0.25rem;
//         }
//         .client-category {
//           font-size: 0.75rem;
//           color: #6a9b5a;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         /* Category sections */
//         .category-section {
//           margin-bottom: 60px;
//         }
//         .category-title {
//           font-size: 1.8rem;
//           font-weight: 700;
//           color: #0b2e3e;
//           margin-bottom: 1.5rem;
//           border-left: 4px solid #6a9b5a;
//           padding-left: 1rem;
//         }

//         @media (max-width: 768px) {
//           .client-hero h1 { font-size: 2.2rem; }
//           .client-hero .tagline { font-size: 1.2rem; }
//           .clients-section { padding: 60px 20px; }
//           .client-grid { gap: 20px; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
//           .client-logo { height: 70px; }
//           .client-logo img { max-height: 50px; }
//           .category-title { font-size: 1.5rem; }
//         }
//         @media (max-width: 480px) {
//           .client-hero h1 { font-size: 1.8rem; }
//           .client-grid { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 16px; }
//           .client-card { padding: 1rem; }
//           .client-logo { height: 60px; }
//           .client-logo img { max-height: 40px; }
//           .client-name { font-size: 0.85rem; }
//         }
//       `}</style>

//       <div className="client-page">
//         <div className="client-hero">
//           <div className="container">
//             <h1>Our Clients</h1>
//             <div className="tagline">Trusted by Industry Leaders Worldwide</div>
//             <div className="description">
//               Robinsons Cargo & Logistics is proud to partner with a diverse range of clients across industries. From luxury brands to healthcare and automotive giants, we deliver excellence that powers their supply chains.
//             </div>
//           </div>
//         </div>

//         <div className="clients-section">
//           <div className="container">
//             {Object.entries(categories).map(([category, clientsList]) => (
//               <div key={category} className="category-section">
//                 <h2 className="category-title">{category}</h2>
//                 <div className="client-grid">
//                   {clientsList.map((client, idx) => {
//                     const imgPath = getLogoPath(client.name);
//                     return (
//                       <div key={idx} className="client-card">
//                         <div className="client-logo">
//                           <img
//                             src={imgPath}
//                             alt={client.name}
//                             onError={(e) => {
//                               e.target.style.display = 'none';
//                               // Show a text fallback inside the logo container
//                               e.target.parentElement.innerHTML = `<div style="font-size:0.8rem; font-weight:600;">${client.name}</div>`;
//                             }}
//                           />
//                         </div>
//                         <div className="client-name">{client.name}</div>
//                         <div className="client-category">{client.category}</div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ClientPage;






// "use client";

// import React from "react";

// const ClientPage = () => {
//   const clients = [
//     { name: "ROLEX", category: "Luxury Goods" },
//     { name: "BVLGARI", category: "Luxury Goods" },
//     { name: "MARUTI SUZUKI", category: "Automotive & Engineering" },
//     { name: "CIPLA", category: "Pharma & Healthcare" },
//     { name: "FOXCONN", category: "Hi-Tech & Electronics" },
//     { name: "CARTIER", category: "Luxury Goods" },
//     { name: "TATA ELECTRONICS", category: "Automotive & Engineering" },
//     { name: "AUROBINDO", category: "Pharma & Healthcare" },
//     { name: "BREITLING", category: "Luxury Goods" },
//     { name: "BIOCON", category: "Pharma & Healthcare" },
//     { name: "HILTI", category: "Automotive & Engineering" },
//     { name: "UNICEF", category: "Social Impact & Government" },
//     { name: "TIMKEN", category: "Automotive & Engineering" },
//     { name: "NAVAL GROUP", category: "Social Impact & Government" },
//     { name: "WHO", category: "Social Impact & Government" },
//     { name: "RIMOWA", category: "Luxury Goods" },
//   ];

//   const logoMap = {
//     ROLEX: "/images/clients/Acaai.png",
//     BVLGARI: "/images/clients/AMTOI.png",
//     "MARUTI SUZUKI": "/images/clients/custom-department.jpg",
//     CIPLA: "/images/clients/FIATA.png",
//     FOXCONN: "/images/clients/fmc.png",
//     CARTIER: "/images/clients/GDP.png",
//     "TATA ELECTRONICS": "/images/clients/IATA.png",
//     AUROBINDO: "/images/clients/ISO.png",
//     BREITLING: "/images/clients/ISO14001-2025.jpg",
//     BIOCON: "/images/clients/mto-logo.png",
//     HILTI: "/images/clients/SEO.png",
//     UNICEF: "/images/clients/WACO.png",
//     TIMKEN: "/images/clients/timken.png",
//     "NAVAL GROUP": "/images/clients/naval.png",
//     WHO: "/images/clients/who.png",
//     RIMOWA: "/images/clients/rimowa.png",
//   };

//   return (
//     <div className="client-page">
//       {/* HERO */}
//       <section className="hero">
//         <h1>Our Clients</h1>
//         <p>Trusted by Industry Leaders Across the Globe</p>
//       </section>

//       {/* CLIENT GRID */}
//       <section className="grid-section">
//         <div className="grid">
//           {clients.map((client, i) => (
//             <div key={i} className="card">
//               <img
//                 src={logoMap[client.name]}
//                 alt={client.name}
//                 onError={(e) => (e.target.style.display = "none")}
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* STYLE */}
//       <style jsx>{`
//         .client-page {
//           background: #f9fbfd;
//           font-family: system-ui;
//         }

//         /* HERO */
//         .hero {
//           text-align: center;
//           padding: 100px 20px 60px;
//           background: linear-gradient(135deg, var(--primery), #0b2e3e);
//           color: white;
//         }

//         .hero h1 {
//           font-size: 42px;
//           margin-bottom: 10px;
//         }

//         .hero p {
//           font-size: 18px;
//           opacity: 0.9;
//         }

//         /* GRID */
//         .grid-section {
//           padding: 60px 20px;
//           max-width: 1200px;
//           margin: auto;
//         }

//         .grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
//           gap: 30px;
//         }

//         .card {
//           height: 120px;
//           background: white;
//           border-radius: 16px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 8px 20px rgba(0,0,0,0.05);
//           transition: all 0.3s ease;
//         }

//         .card:hover {
//           transform: translateY(-6px) scale(1.03);
//           box-shadow: 0 15px 40px rgba(0,0,0,0.1);
//         }

//         .card img {
//           max-height: 50px;
//           max-width: 120px;
//           object-fit: contain;
//           filter: grayscale(100%);
//           opacity: 0.7;
//           transition: 0.3s ease;
//         }

//         .card:hover img {
//           filter: grayscale(0%);
//           opacity: 1;
//         }

//         /* MOBILE */
//         @media (max-width: 600px) {
//           .hero h1 {
//             font-size: 28px;
//           }

//           .grid {
//             gap: 20px;
//           }

//           .card {
//             height: 90px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ClientPage;

// "use client";

// import React from "react";

// const ClientPage = () => {
//   const clients = [
//     { name: "ROLEX", category: "Luxury Goods" },
//     { name: "BVLGARI", category: "Luxury Goods" },
//     { name: "MARUTI SUZUKI", category: "Automotive & Engineering" },
//     { name: "CIPLA", category: "Pharma & Healthcare" },
//     { name: "FOXCONN", category: "Hi-Tech & Electronics" },
//     { name: "CARTIER", category: "Luxury Goods" },
//     { name: "TATA ELECTRONICS", category: "Automotive & Engineering" },
//     { name: "AUROBINDO", category: "Pharma & Healthcare" },
//     { name: "BREITLING", category: "Luxury Goods" },
//     { name: "BIOCON", category: "Pharma & Healthcare" },
//     { name: "HILTI", category: "Automotive & Engineering" },
//     { name: "UNICEF", category: "Social Impact & Government" },
//     { name: "TIMKEN", category: "Automotive & Engineering" },
//     { name: "NAVAL GROUP", category: "Social Impact & Government" },
//     { name: "WHO", category: "Social Impact & Government" },
//     { name: "RIMOWA", category: "Luxury Goods" },
//   ];

//   const logoMap = {
//     ROLEX: "/images/clients/Acaai.png",
//     BVLGARI: "/images/clients/AMTOI.png",
//     "MARUTI SUZUKI": "/images/clients/custom-department.jpg",
//     CIPLA: "/images/clients/FIATA.png",
//     FOXCONN: "/images/clients/fmc.png",
//     CARTIER: "/images/clients/GDP.png",
//     "TATA ELECTRONICS": "/images/clients/IATA.png",
//     AUROBINDO: "/images/clients/ISO.png",
//     BREITLING: "/images/clients/ISO14001-2015.jpg",
//     BIOCON: "/images/clients/mto-logo.png",
//     HILTI: "/images/clients/SEO.png",
//     UNICEF: "/images/clients/WACO.png",
//     TIMKEN: "/images/clients/timken.png",
//     "NAVAL GROUP": "/images/clients/naval.png",
//     WHO: "/images/clients/who.png",
//     RIMOWA: "/images/clients/rimowa.png",
//   };

//   return (
//     <div className="client-page">
//       {/* HERO */}
//       <section className="hero">
//         <h1>Our Clients</h1>
//         <p>Trusted by Industry Leaders Across the Globe</p>
//       </section>

//       {/* GRID */}
//       <section className="grid-section">
//         <div className="grid">
//           {clients.map((client, i) => (
//             <div key={i} className="card">
//               <div className="logo-wrapper">
//                 <img
//                   src={logoMap[client.name]}
//                   alt={client.name}
//                   onError={(e) => (e.target.style.display = "none")}
//                 />
//               </div>
//               <p className="client-name">{client.name}</p>
//               <p className="client-category">{client.category}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* STYLES */}
//       <style jsx>{`
//         .client-page {
//           background: #f9fbfd;
//           font-family: system-ui;
//         }

//         /* HERO */
//         .hero {
//           text-align: center;
//           padding: 100px 20px 60px;
//           background: linear-gradient(135deg, var(--primery), #0b2e3e);
//           color: white;
//         }

//         .hero h1 {
//           font-size: 42px;
//           margin-bottom: 10px;
//           color: #fff; /* keep white for contrast */
//         }

//         .hero p {
//           font-size: 18px;
//           opacity: 0.9;
//           color: #fff;
//         }

//         /* GRID */
//         .grid-section {
//           padding: 60px 20px;
//           max-width: 1200px;
//           margin: auto;
//         }

//         .grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr); /* ✅ 4 PER ROW */
//           gap: 30px;
//         }

//         .card {
//           background: #ffffff;
//           border-radius: 16px;
//           padding: 20px;
//           text-align: center;
//           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
//           transition: all 0.3s ease;
//         }

//         .card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
//         }

//         .logo-wrapper {
//           height: 70px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 10px;
//         }

//         .logo-wrapper img {
//           max-height: 50px;
//           max-width: 120px;
//           object-fit: contain;
//         }

//         /* ✅ TEXT BLUE */
//         .client-name {
//           font-size: 14px;
//           font-weight: 600;
//           color: var(--primery);
//           margin-bottom: 4px;
//         }

//         .client-category {
//           font-size: 12px;
//           color: var(--primery); /* ✅ ALSO BLUE */
//           opacity: 0.7;
//         }

//         /* RESPONSIVE */
//         @media (max-width: 1024px) {
//           .grid {
//             grid-template-columns: repeat(3, 1fr);
//           }
//         }

//         @media (max-width: 768px) {
//           .grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 480px) {
//           .grid {
//             grid-template-columns: repeat(1, 1fr);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ClientPage;

import React from "react";

const ClientPage = () => {
  const clients = [
    { name: "ROLEX", category: "Luxury Goods" },
    { name: "BVLGARI", category: "Luxury Goods" },
    { name: "MARUTI SUZUKI", category: "Automotive & Engineering" },
    { name: "CIPLA", category: "Pharma & Healthcare" },
    { name: "FOXCONN", category: "Hi-Tech & Electronics" },
    { name: "CARTIER", category: "Luxury Goods" },
    { name: "TATA ELECTRONICS", category: "Automotive & Engineering" },
    { name: "AUROBINDO", category: "Pharma & Healthcare" },
    { name: "BREITLING", category: "Luxury Goods" },
    { name: "BIOCON", category: "Pharma & Healthcare" },
    { name: "HILTI", category: "Automotive & Engineering" },
    { name: "UNICEF", category: "Social Impact & Government" },
  ];

  const logoMap = {
    ROLEX: "/images/clients/Acaai.png",
    BVLGARI: "/images/clients/AMTOI.png",
    "MARUTI SUZUKI": "/images/clients/custom-department.jpg",
    CIPLA: "/images/clients/FIATA.png",
    FOXCONN: "/images/clients/fmc.png",
    CARTIER: "/images/clients/GDP.png",
    "TATA ELECTRONICS": "/images/clients/IATA.png",
    AUROBINDO: "/images/clients/ISO.png",
    BREITLING: "/images/clients/ISO14001-2015.jpg",
    BIOCON: "/images/clients/mto-logo.png",
    HILTI: "/images/clients/SEO.png",
    UNICEF: "/images/clients/WACO.png",
    
  };

  return (
    <div className="client-page">
      {/* HERO */}
      <div className="hero">
        <h1>Our Clients</h1>
        <p>Trusted by Industry Leaders Across the Globe</p>
      </div>

      {/* GRID */}
      <div className="grid-section">
        <div className="grid">
          {clients.map((client, i) => (
            <div key={i} className="card">
              <div className="logo-wrapper">
                <img
                  src={logoMap[client.name]}
                  alt={client.name}
                  onError={(e) => {
                    // Fallback to text if image fails
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML += `<div class="no-logo">${client.name}</div>`;
                  }}
                />
              </div>
              <p className="client-name">{client.name}</p>
              <p className="client-category">{client.category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .client-page {
          background: #f9fbfd;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
          --primary: #1b4d6e;
        }

        /* HERO */
        .hero {
          text-align: center;
          padding: 100px 20px 60px;
          background: linear-gradient(135deg, #0b2e3e, #1b4d6e);
          color: white;
          margin-top: 62px;
        }
        @media (max-width: 768px) {
          .hero {
            margin-top: 56px;
            padding: 80px 20px 60px;
          }
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #fff;
        }

        .hero p {
          font-size: 1.25rem;
          opacity: 0.9;
          color: #fff;
        }

        /* GRID */
        .grid-section {
          padding: 60px 20px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .card {
          background: #ffffff;
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #eef2f6;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .logo-wrapper {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .logo-wrapper img {
          max-height: 60px;
          max-width: 140px;
          object-fit: contain;
        }

        .no-logo {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .client-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 4px;
        }

        .client-category {
          font-size: 0.7rem;
          color: var(--primary);
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.2rem;
          }
          .hero p {
            font-size: 1rem;
          }
          .grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero h1 {
            font-size: 1.8rem;
          }
          .grid {
            grid-template-columns: 1fr;
          }
          .logo-wrapper {
            height: 70px;
          }
          .logo-wrapper img {
            max-height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default ClientPage;