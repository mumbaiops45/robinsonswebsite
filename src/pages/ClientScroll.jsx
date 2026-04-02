
// // "use client";
// // import React, { useEffect, useRef } from "react";

// // const ClientPage = () => {
// //   const clients = [
// //     { name: "ROLEX", category: "Luxury Goods" },
// //     { name: "BVLGARI", category: "Luxury Goods" },
// //     { name: "MARUTI SUZUKI", category: "Automotive & Engineering" },
// //     { name: "CIPLA", category: "Pharma & Healthcare" },
// //     { name: "FOXCONN", category: "Hi-Tech & Electronics" },
// //     { name: "CARTIER", category: "Luxury Goods" },
// //     { name: "TATA ELECTRONICS", category: "Automotive & Engineering" },
// //     { name: "AUROBINDO", category: "Pharma & Healthcare" },
// //     { name: "BREITLING", category: "Luxury Goods" },
// //     { name: "BIOCON", category: "Pharma & Healthcare" },
// //     { name: "HILTI", category: "Automotive & Engineering" },
// //     { name: "UNICEF", category: "Social Impact & Government" },
// //   ];

// //   const logoMap = {
// //     ROLEX: "/images/clients/Acaai.png",
// //     BVLGARI: "/images/clients/AMTOI.png",
// //     "MARUTI SUZUKI": "/images/clients/custom-department.jpg",
// //     CIPLA: "/images/clients/FIATA.png",
// //     FOXCONN: "/images/clients/fmc.png",
// //     CARTIER: "/images/clients/GDP.png",
// //     "TATA ELECTRONICS": "/images/clients/IATA.png",
// //     AUROBINDO: "/images/clients/ISO.png",
// //     BREITLING: "/images/clients/ISO14001-2015.jpg",
// //     BIOCON: "/images/clients/mto-logo.png",
// //     HILTI: "/images/clients/SEO.png",
// //     UNICEF: "/images/clients/WACO.png",
// //   };

// //   const cardsRef = useRef([]);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry, idx) => {
// //           if (entry.isIntersecting) {
// //             setTimeout(() => {
// //               entry.target.classList.add("card-visible");
// //             }, idx * 50);
// //             observer.unobserve(entry.target);
// //           }
// //         });
// //       },
// //       { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
// //     );

// //     cardsRef.current.forEach((card) => {
// //       if (card) observer.observe(card);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

// //         * {
// //           margin: 0;
// //           padding: 0;
// //           box-sizing: border-box;
// //         }

// //         .client-page {
// //           font-family: 'Poppins', system-ui, sans-serif;
// //           background: linear-gradient(145deg, #fefcf5 0%, #f5f7fc 100%);
// //           overflow-x: hidden;
// //           position: relative;
// //         }

// //         /* HERO */
// //         .hero {
// //           position: relative;
// //           text-align: center;
// //           padding: 30px 20px 100px;
// //           background: linear-gradient(125deg, #0b2e3e 0%, #1b4d6e 60%, #2c6e4f 100%);
// //           color: white;
// //           margin-top: 62px;
// //           overflow: hidden;
// //           z-index: 1;
// //         }

// //         .hero-content {
// //           position: relative;
// //           z-index: 2;
// //           max-width: 800px;
// //           margin: 0 auto;
// //         }

// //         .hero h1 {
// //           font-size: 4rem;
// //           font-weight: 800;
// //         }

// //         .hero p {
// //           font-size: 1.2rem;
// //           opacity: 0.95;
// //         }

// //         .hero-stats {
// //           display: flex;
// //           justify-content: center;
// //           gap: 2rem;
// //           margin-top: 2rem;
// //           flex-wrap: wrap;
// //         }

// //         .stat-item {
// //           background: rgba(255,255,255,0.1);
// //           padding: 0.4rem 1.2rem;
// //           border-radius: 40px;
// //         }

// //         /* SLIDER */
// //         .slider {
// //           overflow: hidden;
// //           width: 100%;
// //           margin-bottom: 40px;
// //         }

// //         .slide-track {
// //           display: flex;
// //           width: calc(260px * 24);
// //           animation: scroll 30s linear infinite;
// //         }

// //         .slider:hover .slide-track {
// //           animation-play-state: paused;
// //         }

// //         .slide {
// //           width: 260px;
// //           flex-shrink: 0;
// //           padding: 10px;
// //         }

// //         @keyframes scroll {
// //           0% { transform: translateX(0); }
// //           100% { transform: translateX(-50%); }
// //         }

// //         /* GRID */
// //         .grid-section {
// //           max-width: 1280px;
// //           margin: 0 auto;
// //           padding: 70px 24px 90px;
// //         }

// //         .grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
// //           gap: 28px;
// //         }

// //         .card {
// //           background: rgba(255,255,255,0.75);
// //           border-radius: 2rem;
// //           padding: 1.5rem;
// //           text-align: center;
// //           opacity: 0;
// //           transform: translateY(25px);
// //           transition: 0.5s;
// //         }

// //         .card.card-visible {
// //           opacity: 1;
// //           transform: translateY(0);
// //         }

// //         .logo-wrapper {
// //           height: 90px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //         }

// //         .logo-wrapper img {
// //           max-height: 65px;
// //           max-width: 150px;
// //         }

// //         .no-logo {
// //           font-weight: 700;
// //         }

// //         .client-name {
// //           font-weight: 700;
// //         }

// //         .client-category {
// //           font-size: 12px;
// //         }
// //       `}</style>

// //       <div className="client-page">
// //         {/* HERO */}
// //         <div className="hero">
// //           <div className="hero-content">
// //             <h1>Our Clients</h1>
// //             <p>Trusted by industry leaders across the globe</p>

// //             <div className="hero-stats">
// //               <div className="stat-item">🌍 40+ Countries</div>
// //               <div className="stat-item">🚀 1500+ Shipments</div>
// //               <div className="stat-item">🏆 40+ Years</div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* GRID SECTION */}
// //         <div className="grid-section">

// //           {/* ✅ SLIDER ADDED */}
// //           <div className="slider">
// //             <div className="slide-track">
// //               {[...clients, ...clients].map((client, idx) => (
// //                 <div className="slide" key={"s" + idx}>
// //                   <div className="card card-visible">
// //                     <div className="logo-wrapper">
// //                       {logoMap[client.name] ? (
// //                         <img src={logoMap[client.name]} alt={client.name} />
// //                       ) : (
// //                         <div className="no-logo">{client.name}</div>
// //                       )}
// //                     </div>
// //                     <div className="client-name">{client.name}</div>
// //                     <div className="client-category">{client.category}</div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* ✅ ORIGINAL GRID (UNCHANGED) */}
// //           <div className="grid">
// //             {clients.map((client, idx) => (
// //               <div
// //                 key={idx}
// //                 className="card"
// //                 ref={(el) => (cardsRef.current[idx] = el)}
// //               >
// //                 <div className="logo-wrapper">
// //                   {logoMap[client.name] ? (
// //                     <img src={logoMap[client.name]} alt={client.name} />
// //                   ) : (
// //                     <div className="no-logo">{client.name}</div>
// //                   )}
// //                 </div>
// //                 <div className="client-name">{client.name}</div>
// //                 <div className="client-category">{client.category}</div>
// //               </div>
// //             ))}
// //           </div>

// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default ClientPage;

// "use client";
// import React, { useEffect, useRef } from "react";

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
//   };

//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry, idx) => {
//           if (entry.isIntersecting) {
//             setTimeout(() => {
//               entry.target.classList.add("card-visible");
//             }, idx * 50);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
//     );

//     cardsRef.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .client-page {
//           font-family: 'Poppins', system-ui, sans-serif;
//           background: linear-gradient(145deg, #fefcf5 0%, #f5f7fc 100%);
//           overflow-x: hidden;
//           position: relative;
//         }

//         /* HERO (matches Aboutus styling) */
//         .hero {
//           position: relative;
//           background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
//           color: white;
//           padding: 120px 24px 100px;
//           text-align: center;
//           margin-top: 62px;
//           overflow: hidden;
//         }

//         .hero::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
//           background-repeat: repeat;
//           background-size: 40px;
//           opacity: 0.2;
//           pointer-events: none;
//         }

//         .hero::after {
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

//         .hero-content {
//           position: relative;
//           z-index: 2;
//           max-width: 800px;
//           margin: 0 auto;
//           animation: fadeUp 0.8s ease;
//         }

//         .chip {
//           display: inline-block;
//           background: rgba(255,255,255,0.2);
//           backdrop-filter: blur(4px);
//           color: white;
//           font-size: 0.875rem;
//           font-weight: 600;
//           padding: 0.25rem 0.75rem;
//           border-radius: 30px;
//           margin-bottom: 1rem;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         .hero h1 {
//           font-size: 4rem;
//           font-weight: 800;
//           letter-spacing: -0.02em;
//           margin-bottom: 1rem;
//           text-shadow: 0 2px 10px rgba(0,0,0,0.1);
//         }

//         .hero p {
//           font-size: 1.2rem;
//           opacity: 0.95;
//           margin-bottom: 1.5rem;
//         }

//         .hero-stats {
//           display: flex;
//           justify-content: center;
//           gap: 1.5rem;
//           margin-top: 1rem;
//           flex-wrap: wrap;
//         }

//         .stat-item {
//           background: rgba(255,255,255,0.15);
//           padding: 0.4rem 1.2rem;
//           border-radius: 40px;
//           font-size: 0.9rem;
//           font-weight: 500;
//           backdrop-filter: blur(4px);
//         }

//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* SLIDER */
//         .slider {
//           overflow: hidden;
//           width: 100%;
//           margin-bottom: 40px;
//         }

//         .slide-track {
//           display: flex;
//           width: calc(260px * 24);
//           animation: scroll 30s linear infinite;
//         }

//         .slider:hover .slide-track {
//           animation-play-state: paused;
//         }

//         .slide {
//           width: 260px;
//           flex-shrink: 0;
//           padding: 10px;
//         }

//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         /* GRID */
//         .grid-section {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 70px 24px 90px;
//         }

//         .grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
//           gap: 28px;
//         }

//         .card {
//           background: rgba(255,255,255,0.75);
//           border-radius: 2rem;
//           padding: 1.5rem;
//           text-align: center;
//           opacity: 0;
//           transform: translateY(25px);
//           transition: 0.5s;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//           border: 1px solid rgba(0,0,0,0.03);
//         }

//         .card.card-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .logo-wrapper {
//           height: 90px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .logo-wrapper img {
//           max-height: 65px;
//           max-width: 150px;
//         }

//         .no-logo {
//           font-weight: 700;
//           font-size: 1rem;
//         }

//         .client-name {
//           font-weight: 700;
//           margin-top: 0.5rem;
//           font-size: 1rem;
//         }

//         .client-category {
//           font-size: 0.75rem;
//           color: #6c7a89;
//           margin-top: 0.25rem;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .hero {
//             margin-top: 56px;
//             padding: 100px 20px 80px;
//           }
//           .hero h1 {
//             font-size: 2.8rem;
//           }
//           .hero p {
//             font-size: 1rem;
//           }
//           .stat-item {
//             font-size: 0.75rem;
//             padding: 0.3rem 1rem;
//           }
//           .grid-section {
//             padding: 50px 20px 70px;
//           }
//         }

//         @media (max-width: 480px) {
//           .hero h1 {
//             font-size: 2.2rem;
//           }
//         }
//       `}</style>

//       <div className="client-page">
//         {/* Hero Section (matches Aboutus styling) */}
//         <div className="hero">
//           <div className="hero-content">
//             <div className="chip">Trusted By</div>
//             <h1>Our Clients</h1>
//             <p>Industry leaders across the globe rely on us</p>
//             <div className="hero-stats">
//               <div className="stat-item">🌍 40+ Countries</div>
//               <div className="stat-item">🚀 1500+ Shipments</div>
//               <div className="stat-item">🏆 40+ Years</div>
//             </div>
//           </div>
//         </div>

//         <div className="grid-section">
//           {/* Infinite slider */}
//           <div className="slider">
//             <div className="slide-track">
//               {[...clients, ...clients].map((client, idx) => (
//                 <div className="slide" key={"s" + idx}>
//                   <div className="card card-visible">
//                     <div className="logo-wrapper">
//                       {logoMap[client.name] ? (
//                         <img src={logoMap[client.name]} alt={client.name} />
//                       ) : (
//                         <div className="no-logo">{client.name}</div>
//                       )}
//                     </div>
//                     <div className="client-name">{client.name}</div>
//                     <div className="client-category">{client.category}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Original grid */}
//           <div className="grid">
//             {clients.map((client, idx) => (
//               <div
//                 key={idx}
//                 className="card"
//                 ref={(el) => (cardsRef.current[idx] = el)}
//               >
//                 <div className="logo-wrapper">
//                   {logoMap[client.name] ? (
//                     <img src={logoMap[client.name]} alt={client.name} />
//                   ) : (
//                     <div className="no-logo">{client.name}</div>
//                   )}
//                 </div>
//                 <div className="client-name">{client.name}</div>
//                 <div className="client-category">{client.category}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ClientPage;


"use client";
import React, { useEffect, useRef } from "react";

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

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("card-visible");
            }, idx * 50);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    cardsRef.current.forEach((card) => {
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

        .client-page {
          font-family: 'Poppins', system-ui, sans-serif;
          background: linear-gradient(145deg, #fefcf5 0%, #f5f7fc 100%);
          overflow-x: hidden;
          position: relative;
        }

        /* HERO (matches Aboutus styling) */
        .hero {
          position: relative;
          background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
          color: white;
          padding: 40px 24px 100px;
          text-align: center;
          margin-top: 62px;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 40px;
          opacity: 0.2;
          pointer-events: none;
        }

        .hero::after {
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

        .hero h1 {
          font-size: 4rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          text-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .hero p {
          font-size: 1.2rem;
          opacity: 0.95;
          margin-bottom: 1.5rem;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        .stat-item {
          background: rgba(255,255,255,0.15);
          padding: 0.4rem 1.2rem;
          border-radius: 40px;
          font-size: 0.9rem;
          font-weight: 500;
          backdrop-filter: blur(4px);
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

        /* SLIDER */
        .slider {
          overflow: hidden;
          width: 100%;
          margin-bottom: 40px;
        }

        .slide-track {
          display: flex;
          width: calc(260px * 24);
          animation: scroll 30s linear infinite;
        }

        .slider:hover .slide-track {
          animation-play-state: paused;
        }

        .slide {
          width: 260px;
          flex-shrink: 0;
          padding: 10px;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* GRID & CARD STYLES (with green hover border) */
        .grid-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 70px 24px 90px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 28px;
        }

        .card {
          background: rgba(255,255,255,0.75);
          border-radius: 2rem;
          padding: 1.5rem;
          text-align: center;
          opacity: 0;
          transform: translateY(25px);
          transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.03);
          cursor: default;
        }

        .card.card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hover effect: green border + enhanced shadow */
        .card:hover {
          border-color: #6a9b5a;
          box-shadow: 0 12px 25px -10px rgba(106, 155, 90, 0.25), 0 4px 12px rgba(0,0,0,0.05);
          transform: translateY(-4px);
        }

        .logo-wrapper {
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-wrapper img {
          max-height: 65px;
          max-width: 150px;
        }

        .no-logo {
          font-weight: 700;
          font-size: 1rem;
        }

        .client-name {
          font-weight: 700;
          margin-top: 0.5rem;
          font-size: 1rem;
          transition: color 0.2s;
        }

        .client-category {
          font-size: 0.75rem;
          color: #6c7a89;
          margin-top: 0.25rem;
          transition: color 0.2s;
        }

        /* Optional: subtle color change on hover (complementary) */
        .card:hover .client-name {
          color: #2c7a4d;
        }

        .card:hover .client-category {
          color: #6a9b5a;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            margin-top: 56px;
            padding: 40px 20px 80px;
          }
          .hero h1 {
            font-size: 2.8rem;
          }
          .hero p {
            font-size: 1rem;
          }
          .stat-item {
            font-size: 0.75rem;
            padding: 0.3rem 1rem;
          }
          .grid-section {
            padding: 50px 20px 70px;
          }
        }

        @media (max-width: 480px) {
          .hero h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <div className="client-page">
        {/* Hero Section (matches Aboutus styling) */}
        <div className="hero">
          <div className="hero-content">
            <div className="chip">Trusted By</div>
            <h1>Our Clients</h1>
            <p>Industry leaders across the globe rely on us</p>
            <div className="hero-stats">
              <div className="stat-item">🌍 40+ Countries</div>
              <div className="stat-item">🚀 1500+ Shipments</div>
              <div className="stat-item">🏆 40+ Years</div>
            </div>
          </div>
        </div>

        <div className="grid-section">
          {/* Infinite slider */}
          <div className="slider">
            <div className="slide-track">
              {[...clients, ...clients].map((client, idx) => (
                <div className="slide" key={"s" + idx}>
                  <div className="card card-visible">
                    <div className="logo-wrapper">
                      {logoMap[client.name] ? (
                        <img src={logoMap[client.name]} alt={client.name} />
                      ) : (
                        <div className="no-logo">{client.name}</div>
                      )}
                    </div>
                    <div className="client-name">{client.name}</div>
                    <div className="client-category">{client.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Original grid */}
          <div className="grid">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="card"
                ref={(el) => (cardsRef.current[idx] = el)}
              >
                <div className="logo-wrapper">
                  {logoMap[client.name] ? (
                    <img src={logoMap[client.name]} alt={client.name} />
                  ) : (
                    <div className="no-logo">{client.name}</div>
                  )}
                </div>
                <div className="client-name">{client.name}</div>
                <div className="client-category">{client.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientPage;