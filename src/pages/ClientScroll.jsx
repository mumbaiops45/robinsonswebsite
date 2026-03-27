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


import React from 'react';

const ClientPage = () => {
  const clients = [
    'ROLEX',
    'BVLGARI',
    'MARUTI SUZUKI',
    'CIPLA',
    'FOXCONN',
    'CARTIER',
    'TATA ELECTRONICS',
    'AUROBINDO',
    'BREITLING',
    'BIOCON',
    'HILTI',
    'UNICEF',
    'TIMKEN',
    'NAVAL GROUP',
    'WHO',
    'RIMOWA',
  ];

  // Optional categories (you can adjust or remove)
  const categories = {
    'Luxury Goods': ['ROLEX', 'BVLGARI', 'CARTIER', 'RIMOWA', 'BREITLING'],
    'Automotive & Engineering': ['MARUTI SUZUKI', 'TIMKEN', 'HILTI', 'TATA ELECTRONICS'],
    'Pharma & Healthcare': ['CIPLA', 'AUROBINDO', 'BIOCON'],
    'Hi‑Tech & Electronics': ['FOXCONN', 'TATA ELECTRONICS'],
    'Social Impact & Government': ['UNICEF', 'WHO', 'NAVAL GROUP'],
  };

  // Helper to format filename (e.g., "MARUTI SUZUKI" -> "maruti-suzuki.png")
  const getLogoPath = (name) => {
    const fileName = name.toLowerCase().replace(/ /g, '-');
    return `/images/clients/${fileName}.png`;
  };

  return (
    <>
      <style>{`
        .client-page {
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #1a2a3a;
          background: #ffffff;
          line-height: 1.5;
        }

        .client-hero {
          background: linear-gradient(135deg, #0b2e3e 0%, #1b4d6e 100%);
          color: white;
          padding: 100px 24px 80px;
          text-align: center;
          margin-top: 62px;
        }
        @media (max-width: 768px) {
          .client-hero {
            margin-top: 56px;
            padding: 80px 20px 60px;
          }
        }
        .client-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .client-hero .tagline {
          font-size: 1.5rem;
          font-weight: 400;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }
        .client-hero .description {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.125rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Marquee section – same as your original */
        .marquee-section {
          padding: 60px 0 0;
          background: #fff;
        }
        .client-scroll {
          background: var(--w, #ffffff);
          border-bottom: 1px solid var(--bd, #d8e4ed);
          overflow: hidden;
          padding: 16px 0;
          width: 100%;
        }
        .cs-track {
          display: flex;
          white-space: nowrap;
          animation: tickRun 28s linear infinite;
          will-change: transform;
        }
        .cs-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 30px;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--tm, #7a9aaa);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-right: 1px solid var(--bd, #d8e4ed);
          flex-shrink: 0;
          transition: color 0.2s;
          cursor: default;
          height: 60px;
        }
        .cs-item img {
          max-height: 40px;
          max-width: 120px;
          object-fit: contain;
        }
        .cs-item span {
          display: inline-block;
        }
        .cs-item:hover {
          color: var(--n, #093e5d);
        }

        @keyframes tickRun {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .client-scroll { padding: 12px 0; }
          .cs-item {
            padding: 0 20px;
            font-size: 0.65rem;
            letter-spacing: 0.04em;
            height: 50px;
          }
          .cs-item img { max-height: 32px; max-width: 100px; }
          .cs-track { animation-duration: 22s; }
        }
        @media (max-width: 480px) {
          .client-scroll { padding: 10px 0; }
          .cs-item {
            padding: 0 14px;
            font-size: 0.58rem;
            letter-spacing: 0.03em;
            height: 40px;
          }
          .cs-item img { max-height: 28px; max-width: 80px; }
          .cs-track { animation-duration: 18s; }
        }

        /* Grid section – now with logos */
        .grid-section {
          padding: 60px 0;
          background: #f8fafc;
        }
        .grid-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          color: #0b2e3e;
          margin-bottom: 2rem;
        }
        .client-categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .category-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }
        .category-card:hover {
          transform: translateY(-5px);
        }
        .category-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1b4d6e;
          margin-bottom: 1rem;
          border-left: 3px solid #6a9b5a;
          padding-left: 0.75rem;
        }
        .client-logo-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0.75rem 0;
          border-bottom: 1px solid #eef2f6;
        }
        .client-logo-item:last-child {
          border-bottom: none;
        }
        .client-logo-item img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }
        .client-logo-item span {
          font-size: 0.9rem;
          font-weight: 500;
          color: #2c3e4e;
        }
        .fallback-text {
          display: inline-block;
          font-size: 0.9rem;
          font-weight: 600;
          color: #7a9aaa;
        }

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
          .client-hero h1 { font-size: 2.2rem; }
          .client-hero .tagline { font-size: 1.2rem; }
          .grid-title { font-size: 1.8rem; }
        }
        @media (max-width: 480px) {
          .client-hero h1 { font-size: 1.8rem; }
          .grid-title { font-size: 1.5rem; }
        }
      `}</style>

      <div className="client-page">
        {/* Hero Section */}
        <div className="client-hero">
          <div className="container">
            <h1>Our Clients</h1>
            <div className="tagline">Trusted by Industry Leaders Worldwide</div>
            <div className="description">
              Robinsons Cargo & Logistics is proud to partner with a diverse range of clients across industries. From luxury brands to healthcare and automotive giants, we deliver excellence that powers their supply chains.
            </div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="marquee-section">
          <div className="container">
            <div className="client-scroll">
              <div className="cs-track">
                {[...clients, ...clients].map((client, idx) => {
                  const imgPath = getLogoPath(client);
                  return (
                    <span key={idx} className="cs-item">
                      <img
                        src={imgPath}
                        alt={client}
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<span>${client}</span>`;
                        }}
                      />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Categorized Clients Grid */}
        <div className="grid-section">
          <div className="container">
            <h2 className="grid-title">Partners Across Industries</h2>
            <div className="client-categories">
              {Object.entries(categories).map(([category, clientsList]) => (
                <div key={category} className="category-card">
                  <h3>{category}</h3>
                  {clientsList.map((client, idx) => {
                    const imgPath = getLogoPath(client);
                    return (
                      <div key={idx} className="client-logo-item">
                        <img
                          src={imgPath}
                          alt={client}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.querySelector('.fallback-text').style.display = 'inline-block';
                          }}
                        />
                        <span className="fallback-text" style={{ display: 'none' }}>{client}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="container">
            <h2>Become Our Partner</h2>
            <p>Join the growing list of businesses that trust Robinsons for their logistics needs.</p>
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

export default ClientPage;
