// // // src/pages/Aboutus.jsx
// // import React from 'react';

// // const Aboutus = () => {
// //   return (
// //     <>
// //       <style>{`
// //         /* Base styles */
// //         .about-page {
// //           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
// //           color: #1a2a3a;
// //           background: #ffffff;
// //           line-height: 1.5;
// //         }

// //         /* Hero section with background image */
// //         .about-hero {
// //           position: relative;
// //           background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
// //                       url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover no-repeat;
// //           color: white;
// //           padding: 140px 24px 100px;
// //           text-align: center;
// //           margin-top: 62px; /* offset for fixed navbar */
// //         }
// //         @media (max-width: 768px) {
// //           .about-hero {
// //             margin-top: 56px;
// //             padding: 100px 20px 80px;
// //           }
// //         }

// //         .about-hero h1 {
// //           font-size: 3.5rem;
// //           margin-bottom: 1rem;
// //           font-weight: 700;
// //           letter-spacing: -0.02em;
// //           text-shadow: 0 2px 4px rgba(0,0,0,0.2);
// //         }
// //         .about-hero .tagline {
// //           font-size: 1.75rem;
// //           font-weight: 400;
// //           margin-bottom: 1.5rem;
// //           text-shadow: 0 1px 2px rgba(0,0,0,0.2);
// //         }
// //         .about-hero .description {
// //           max-width: 800px;
// //           margin: 0 auto;
// //           font-size: 1.125rem;
// //           line-height: 1.6;
// //           background: rgba(0,0,0,0.3);
// //           padding: 1rem;
// //           border-radius: 8px;
// //           backdrop-filter: blur(4px);
// //         }

// //         /* Container */
// //         .container {
// //           max-width: 1280px;
// //           margin: 0 auto;
// //           padding: 0 24px;
// //         }

// //         /* Company Profile section with image */
// //         .profile-section {
// //           padding: 80px 0;
// //           background: #fff;
// //         }
// //         .profile-grid {
// //           display: grid;
// //           grid-template-columns: 1fr 1fr;
// //           gap: 4rem;
// //           align-items: center;
// //         }
// //         .profile-content h2 {
// //           font-size: 2.5rem;
// //           font-weight: 700;
// //           color: #0b2e3e;
// //           margin-bottom: 1.5rem;
// //         }
// //         .profile-content p {
// //           font-size: 1.125rem;
// //           color: #2c3e4e;
// //           line-height: 1.6;
// //         }
// //         .profile-image {
// //           border-radius: 1rem;
// //           overflow: hidden;
// //           box-shadow: 0 12px 28px rgba(0,0,0,0.1);
// //         }
// //         .profile-image img {
// //           width: 100%;
// //           height: auto;
// //           display: block;
// //           transition: transform 0.3s ease;
// //         }
// //         .profile-image:hover img {
// //           transform: scale(1.02);
// //         }
// //         @media (max-width: 768px) {
// //           .profile-grid {
// //             grid-template-columns: 1fr;
// //             gap: 2rem;
// //           }
// //           .profile-content h2 {
// //             text-align: center;
// //           }
// //         }

// //         /* Values section with enhanced cards */
// //         .values-section {
// //           background: #f8fafc;
// //           padding: 80px 0;
// //         }
// //         .values-section h2 {
// //           font-size: 2.5rem;
// //           font-weight: 700;
// //           color: #0b2e3e;
// //           margin-bottom: 1rem;
// //           text-align: center;
// //         }
// //         .values-sub {
// //           text-align: center;
// //           color: #4a627a;
// //           max-width: 700px;
// //           margin: 0 auto 3rem auto;
// //           font-size: 1.125rem;
// //         }
// //         .values-grid {
// //           display: grid;
// //           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// //           gap: 2rem;
// //         }
// //         .value-card {
// //           background: white;
// //           border-radius: 1rem;
// //           padding: 2rem;
// //           box-shadow: 0 8px 20px rgba(0,0,0,0.05);
// //           transition: all 0.3s ease;
// //           text-align: center;
// //           position: relative;
// //           overflow: hidden;
// //         }
// //         .value-card::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 4px;
// //           background: linear-gradient(90deg, #0b2e3e, #6a9b5a);
// //           transform: scaleX(0);
// //           transition: transform 0.3s ease;
// //         }
// //         .value-card:hover {
// //           transform: translateY(-8px);
// //           box-shadow: 0 20px 30px rgba(0,0,0,0.1);
// //         }
// //         .value-card:hover::before {
// //           transform: scaleX(1);
// //         }
// //         .value-icon {
// //           font-size: 3rem;
// //           margin-bottom: 1rem;
// //           display: inline-block;
// //           background: #f0f4f9;
// //           padding: 0.75rem;
// //           border-radius: 50%;
// //           width: 80px;
// //           height: 80px;
// //           line-height: 1;
// //           display: inline-flex;
// //           align-items: center;
// //           justify-content: center;
// //           transition: all 0.3s ease;
// //         }
// //         .value-card:hover .value-icon {
// //           background: #e6edf5;
// //           transform: scale(1.05);
// //         }
// //         .value-card h3 {
// //           font-size: 1.5rem;
// //           font-weight: 600;
// //           color: #1b4d6e;
// //           margin-bottom: 1rem;
// //         }
// //         .value-card p {
// //           color: #4a627a;
// //           font-size: 1rem;
// //           line-height: 1.5;
// //         }

// //         /* Responsive adjustments */
// //         @media (max-width: 768px) {
// //           .about-hero h1 {
// //             font-size: 2.5rem;
// //           }
// //           .about-hero .tagline {
// //             font-size: 1.3rem;
// //           }
// //           .profile-content h2,
// //           .values-section h2 {
// //             font-size: 2rem;
// //           }
// //           .container {
// //             padding: 0 20px;
// //           }
// //           .profile-section,
// //           .values-section {
// //             padding: 60px 0;
// //           }
// //           .value-card {
// //             padding: 1.5rem;
// //           }
// //         }
// //         @media (max-width: 480px) {
// //           .about-hero h1 {
// //             font-size: 2rem;
// //           }
// //           .about-hero .tagline {
// //             font-size: 1rem;
// //           }
// //           .profile-content h2,
// //           .values-section h2 {
// //             font-size: 1.8rem;
// //           }
// //         }
// //       `}</style>

// //       <div className="about-page">
// //         {/* Hero Section with background image */}
// //         <div className="about-hero">
// //           <div className="container">
// //             <h1>About Us</h1>
// //             <div className="tagline">Powering Logistics Excellence Since 1954</div>
// //             <div className="description">
// //               Robinsons Cargo and Logistics, a leader in the industry, specialises in air, sea and supply chain logistics services.
// //               We drive supply chain innovation and deliver unparalleled customer experiences through our comprehensive, tailored solutions.
// //               With a nationwide presence and unwavering commitment to quality, Robinsons is a trusted end-to-end logistics partner of the customer.
// //             </div>
// //           </div>
// //         </div>

// //         {/* Company Profile Section with image */}
// //         <div className="profile-section">
// //           <div className="container">
// //             <div className="profile-grid">
// //               <div className="profile-content">
// //                 <h2>Company Profile</h2>
// //                 <p>
// //                   For over six decades, Robinsons Cargo and Logistics has been at the forefront of the logistics industry.
// //                   Our journey began in 1954 with a vision to simplify complex supply chains. Today, we are proud to offer
// //                   end‑to‑end solutions that empower businesses across the nation. Our expertise spans air freight,
// //                   ocean freight, and integrated supply chain management, ensuring your goods move seamlessly from origin to destination.
// //                 </p>
// //                 <p style={{ marginTop: '1rem' }}>
// //                   We combine modern technology with decades of experience to deliver reliable, cost‑effective logistics solutions
// //                   that adapt to your business needs.
// //                 </p>
// //               </div>
// //               <div className="profile-image">
// //                 <img 
// //                   src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
// //                   alt="Robinsons Cargo and Logistics operations"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Values Section with icons (can be replaced with actual images) */}
// //         <div className="values-section">
// //           <div className="container">
// //             <h2>Our Values</h2>
// //             <div className="values-sub">The principles that drive us every day</div>
// //             <div className="values-grid">
// //               <div className="value-card">
// //                 <div className="value-icon">⚙️</div>
// //                 <h3>Streamlined Operations</h3>
// //                 <p>
// //                   Seamless supply chain management with integrated logistics and real-time visibility.
// //                 </p>
// //               </div>
// //               <div className="value-card">
// //                 <div className="value-icon">🤝</div>
// //                 <h3>Expert Team & Network</h3>
// //                 <p>
// //                   Logistics Solutions powered by a skilled team and extensive network.
// //                 </p>
// //               </div>
// //               <div className="value-card">
// //                 <div className="value-icon">🔄</div>
// //                 <h3>Flexible & Scalable Solutions</h3>
// //                 <p>
// //                   Adapt to changing business needs with flexible, industry-specific logistics services.
// //                 </p>
// //               </div>
// //               <div className="value-card">
// //                 <div className="value-icon">⭐</div>
// //                 <h3>Enhanced Customer Experience</h3>
// //                 <p>
// //                   Elevate customer satisfaction with consistent, end-to-end support and exceptional service.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Aboutus;







// import React from 'react';

// const Aboutus = () => {
//   return (
//     <>
//       <style>{`
//         /* ---------- Google Fonts ---------- */
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

//         /* ---------- CSS Variables ---------- */
//         :root {
//           --primary-dark: #0a2b3e;
//           --primary-accent: #6a9b5a;   /* Matches Clients and Offices */
//           --primary-light: #eef2ff;
//           --text-dark: #1f2e3a;
//           --text-gray: #4b5f6e;
//           --bg-gray: #f9fbfd;
//           --shadow-sm: 0 4px 20px rgba(0, 0, 0, 0.05);
//           --shadow-md: 0 10px 30px rgba(0, 0, 0, 0.08);
//           --shadow-hover: 0 20px 35px rgba(0, 0, 0, 0.1);
//           --transition: all 0.3s ease;
//         }

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .about-page {
//           font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, sans-serif;
//           color: var(--text-dark);
//           background: #fff;
//           line-height: 1.5;
//           overflow-x: hidden;
//         }

//         /* Container */
//         .container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 32px;
//         }

//         /* Section spacing */
//         .section {
//           padding: 80px 0;
//         }

//         .section-light {
//           background: var(--bg-gray);
//         }

//         .section-white {
//           background: #ffffff;
//         }

//         /* Headings */
//         .section-title {
//           font-size: 2.8rem;
//           font-weight: 700;
//           text-align: center;
//           color: var(--primary-dark);
//           margin-bottom: 1rem;
//           letter-spacing: -0.01em;
//         }

//         .section-subtitle {
//           text-align: center;
//           font-size: 1.2rem;
//           color: var(--text-gray);
//           max-width: 700px;
//           margin: 0 auto 3rem auto;
//           font-weight: 400;
//         }

//         /* Chip style from Clients component */
//         .chip {
//           display: inline-block;
//           background: var(--primary-light);
//           color: var(--primary-dark);
//           font-size: 0.875rem;
//           font-weight: 600;
//           padding: 0.25rem 0.75rem;
//           border-radius: 30px;
//           margin-bottom: 1rem;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         /* ---------- Hero Section (Gradient style from OfficesPage) ---------- */
//         .about-hero {
//           position: relative;
//           background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
//           color: white;
//           padding: 20px 24px 120px;
//           text-align: center;
//           margin-top: 42px;
//           overflow: hidden;
//         }

//         .about-hero::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
//           background-repeat: repeat;
//           background-size: 40px;
//           opacity: 0.2;
//           pointer-events: none;
//         }

//         .about-hero::after {
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

//         .hero-content h1 {
//           font-size: 4rem;
//           font-weight: 800;
//           letter-spacing: -0.02em;
//           margin-bottom: 1rem;
//           text-shadow: 0 2px 10px rgba(0,0,0,0.1);
//         }

//         .hero-tagline {
//           font-size: 1.8rem;
//           font-weight: 500;
//           margin-bottom: 1.5rem;
//           opacity: 0.95;
//         }

//         .hero-description {
//           max-width: 800px;
//           margin: 0 auto;
//           font-size: 1.2rem;
//           line-height: 1.6;
//           background: rgba(0,0,0,0.15);
//           padding: 1.2rem 2rem;
//           border-radius: 60px;
//           backdrop-filter: blur(4px);
//           font-weight: 400;
//         }

//         @media (max-width: 768px) {
//           .about-hero {
//             margin-top: 56px;
//             padding: 120px 20px 100px;
//           }
//           .hero-content h1 {
//             font-size: 2.8rem;
//           }
//           .hero-tagline {
//             font-size: 1.3rem;
//           }
//           .hero-description {
//             font-size: 1rem;
//             padding: 1rem;
//             border-radius: 32px;
//           }
//         }

//         /* ---------- Vision & Mission Cards ---------- */
//         .vm-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2.5rem;
//         }

//         .vm-card {
//           background: white;
//           border-radius: 32px;
//           padding: 2.5rem;
//           box-shadow: var(--shadow-sm);
//           transition: var(--transition);
//           border: 1px solid rgba(0,0,0,0.03);
//           position: relative;
//           overflow: hidden;
//         }

//         .vm-card::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           height: 4px;
//           background: linear-gradient(90deg, var(--primary-dark), var(--primary-accent));
//           transform: scaleX(0);
//           transition: transform 0.4s ease;
//         }

//         .vm-card:hover {
//           transform: translateY(-8px);
//           box-shadow: var(--shadow-hover);
//         }

//         .vm-card:hover::after {
//           transform: scaleX(1);
//         }

//         .vm-icon {
//           font-size: 3.2rem;
//           margin-bottom: 1.5rem;
//           background: var(--primary-light);
//           width: 70px;
//           height: 70px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 24px;
//           color: var(--primary-accent);
//         }

//         .vm-card h3 {
//           font-size: 1.8rem;
//           font-weight: 700;
//           color: var(--primary-dark);
//           margin-bottom: 1rem;
//         }

//         .vm-card p {
//           color: var(--text-gray);
//           font-size: 1.05rem;
//           line-height: 1.6;
//           font-weight: 400;
//         }

//         @media (max-width: 768px) {
//           .vm-grid {
//             grid-template-columns: 1fr;
//             gap: 2rem;
//           }
//           .vm-card {
//             padding: 2rem;
//           }
//           .vm-card h3 {
//             font-size: 1.6rem;
//           }
//         }

//         /* ---------- Company Profile / About Grid ---------- */
//         .profile-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 4rem;
//           align-items: center;
//         }

//         .profile-content h2 {
//           font-size: 2.4rem;
//           font-weight: 700;
//           color: var(--primary-dark);
//           margin-bottom: 1.5rem;
//           position: relative;
//           display: inline-block;
//         }

//         .profile-content h2:after {
//           content: '';
//           position: absolute;
//           bottom: -12px;
//           left: 0;
//           width: 70px;
//           height: 3px;
//           background: var(--primary-accent);
//           border-radius: 3px;
//         }

//         .profile-content p {
//           font-size: 1.1rem;
//           color: var(--text-gray);
//           line-height: 1.6;
//           margin-bottom: 1rem;
//           font-weight: 400;
//         }

//         .profile-image {
//           border-radius: 28px;
//           overflow: hidden;
//           box-shadow: var(--shadow-md);
//           transition: var(--transition);
//         }

//         .profile-image img {
//           width: 100%;
//           height: auto;
//           display: block;
//           transition: transform 0.5s ease;
//         }

//         .profile-image:hover img {
//           transform: scale(1.03);
//         }

//         @media (max-width: 768px) {
//           .profile-grid {
//             grid-template-columns: 1fr;
//             gap: 2rem;
//             text-align: center;
//           }
//           .profile-content h2:after {
//             left: 50%;
//             transform: translateX(-50%);
//           }
//           .profile-content p {
//             text-align: center;
//           }
//         }

//         /* ---------- Values Section ---------- */
//         .values-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//           gap: 2rem;
//           margin-top: 1rem;
//         }

//         .value-card {
//           background: white;
//           border-radius: 28px;
//           padding: 2rem 1.8rem;
//           text-align: center;
//           transition: var(--transition);
//           box-shadow: var(--shadow-sm);
//           border: 1px solid rgba(0,0,0,0.03);
//         }

//         .value-card:hover {
//           transform: translateY(-8px);
//           box-shadow: var(--shadow-hover);
//         }

//         .value-icon {
//           font-size: 2.8rem;
//           background: var(--primary-light);
//           width: 80px;
//           height: 80px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 40px;
//           margin-bottom: 1.5rem;
//           color: var(--primary-accent);
//           transition: var(--transition);
//         }

//         .value-card:hover .value-icon {
//           transform: scale(1.05);
//           background: #e2e8f0;
//         }

//         .value-card h3 {
//           font-size: 1.5rem;
//           font-weight: 600;
//           margin-bottom: 1rem;
//           color: var(--primary-dark);
//         }

//         .value-card p {
//           color: var(--text-gray);
//           font-size: 0.95rem;
//           line-height: 1.5;
//           font-weight: 400;
//         }

//         /* ---------- CTA Section ---------- */
//         .cta-section {
//           background: linear-gradient(135deg, var(--primary-dark), var(--primary-accent));
//           color: white;
//           text-align: center;
//           padding: 70px 20px;
//           border-radius: 48px;
//           margin: 40px auto 80px;
//           max-width: 1100px;
//         }

//         .cta-section h3 {
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

//         .cta-btn {
//           display: inline-block;
//           background: white;
//           color: var(--primary-dark);
//           padding: 12px 32px;
//           border-radius: 40px;
//           font-weight: 600;
//           text-decoration: none;
//           transition: var(--transition);
//           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//         }

//         .cta-btn:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 8px 20px rgba(0,0,0,0.15);
//           background: #f5f5f5;
//         }

//         /* Keyframes */
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

//         /* Responsive */
//         @media (max-width: 768px) {
//           .container {
//             padding: 0 24px;
//           }
//           .section {
//             padding: 60px 0;
//           }
//           .section-title {
//             font-size: 2.2rem;
//           }
//           .cta-section {
//             margin: 40px 20px 60px;
//             padding: 50px 20px;
//           }
//           .cta-section h3 {
//             font-size: 1.7rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .section-title {
//             font-size: 1.9rem;
//           }
//           .profile-content h2 {
//             font-size: 1.9rem;
//           }
//         }
//       `}</style>

//       <div className="about-page">
//         {/* Hero Section with OfficesPage style gradient */}
//         <div className="about-hero">
//           <div className="hero-content">
//             <h1>About Us</h1>
//             <div className="hero-tagline">Powering Logistics Excellence</div>
//             <div className="hero-description">
//               Robinsons Cargo and Logistics — a leader in air, sea, and supply chain solutions.
//               We drive innovation and deliver unmatched customer experiences through tailored,
//               end‑to‑end logistics.
//             </div>
//           </div>
//         </div>

//         {/* Vision & Mission Section */}
//         <div className="section section-white">
//           <div className="container">
//             <div className="chip">Our Compass</div>
//             <h2 className="section-title">Vision & Mission</h2>
//             <p className="section-subtitle">
//               Guided by purpose, driven by impact — shaping the future of logistics.
//             </p>
//             <div className="vm-grid">
//               <div className="vm-card">
//                 <div className="vm-icon">🎯</div>
//                 <h3>Our Mission</h3>
//                 <p>
//                   To deliver exceptional, reliable logistics solutions through operational excellence,
//                   cutting-edge technology, and a customer-first approach. We empower businesses
//                   to thrive by making supply chains seamless, sustainable, and scalable.
//                 </p>
//               </div>
//               <div className="vm-card">
//                 <div className="vm-icon">👁️</div>
//                 <h3>Our Vision</h3>
//                 <p>
//                   To be the world’s most trusted and innovative logistics partner — connecting
//                   economies, enabling growth, and setting new standards in integrated cargo
//                   and supply chain management with integrity and foresight.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Company Profile Section */}
//         <div className="section section-light">
//           <div className="container">
//             <div className="chip">Our Story</div>
//             <div className="profile-grid">
//               <div className="profile-content">
//                 <h2>Company Profile</h2>
//                 <p>
//                   For over six decades, Robinsons Cargo and Logistics has stood as a pillar of reliability
//                   in the logistics industry. Founded in 1954 with a vision to simplify complex supply chains,
//                   we now offer integrated solutions spanning air freight, ocean freight, warehousing,
//                   and supply chain management.
//                 </p>
//                 <p>
//                   Our nationwide presence, combined with modern technology and deep industry expertise,
//                   ensures your goods move efficiently from origin to destination — on time, every time.
//                   We don’t just move cargo; we build partnerships that drive success.
//                 </p>
//               </div>
//               <div className="profile-image">
//                 <img 
//                   src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
//                   alt="Robinsons Cargo logistics operations"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Values Section */}
//         <div className="section section-white">
//           <div className="container">
//             <div className="chip">Our Principles</div>
//             <h2 className="section-title">Core Values</h2>
//             <p className="section-subtitle">
//               The principles that define our culture and guide every decision.
//             </p>
//             <div className="values-grid">
//               <div className="value-card">
//                 <div className="value-icon">⚡</div>
//                 <h3>Operational Excellence</h3>
//                 <p>Precision, efficiency, and continuous improvement in every process.</p>
//               </div>
//               <div className="value-card">
//                 <div className="value-icon">🤝</div>
//                 <h3>Integrity & Trust</h3>
//                 <p>Honest partnerships, transparency, and accountability at all levels.</p>
//               </div>
//               <div className="value-card">
//                 <div className="value-icon">🌍</div>
//                 <h3>Global Mindset</h3>
//                 <p>Connecting markets with culturally aware, borderless logistics.</p>
//               </div>
//               <div className="value-card">
//                 <div className="value-icon">🚀</div>
//                 <h3>Customer-Centric Innovation</h3>
//                 <p>Forward-thinking solutions tailored to unique business needs.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Professional CTA Section */}
//         <div className="container">
//           <div className="cta-section">
//             <h3>Ready to transform your supply chain?</h3>
//             <p>Partner with Robinsons Cargo and Logistics for seamless, scalable solutions.</p>
//             <a href="/contact" className="cta-btn">Get in touch</a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Aboutus;



// import React, { useEffect, useRef } from 'react';

// const Aboutus = () => {
//   // Refs for animated elements
//   const vmCardsRef = useRef([]);
//   const profileImageRef = useRef(null);
//   const valueCardsRef = useRef([]);
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('card-visible');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
//     );

//     // Observe Vision & Mission cards
//     vmCardsRef.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     // Observe profile image
//     if (profileImageRef.current) observer.observe(profileImageRef.current);

//     // Observe value cards
//     valueCardsRef.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     // Observe CTA section
//     if (ctaRef.current) observer.observe(ctaRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <style>{`
//         /* ---------- Google Fonts ---------- */
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

//         /* ---------- CSS Variables ---------- */
//         :root {
//           --primary-dark: #0a2b3e;
//           --primary-accent: #6a9b5a;
//           --primary-light: #eef2ff;
//           --text-dark: #1f2e3a;
//           --text-gray: #4b5f6e;
//           --bg-gray: #f9fbfd;
//           --shadow-sm: 0 4px 20px rgba(0, 0, 0, 0.05);
//           --shadow-md: 0 10px 30px rgba(0, 0, 0, 0.08);
//           --shadow-hover: 0 20px 35px rgba(0, 0, 0, 0.1);
//           --transition: all 0.3s ease;
//         }

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .about-page {
//           font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, sans-serif;
//           color: var(--text-dark);
//           background: #fff;
//           line-height: 1.5;
//           overflow-x: hidden;
//         }

//         /* Container */
//         .container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 32px;
//         }

//         /* Section spacing */
//         .section {
//           padding: 80px 0;
//         }

//         .section-light {
//           background: var(--bg-gray);
//         }

//         .section-white {
//           background: #ffffff;
//         }

//         /* Headings */
//         .section-title {
//           font-size: 2.8rem;
//           font-weight: 700;
//           text-align: center;
//           color: var(--primary-dark);
//           margin-bottom: 1rem;
//           letter-spacing: -0.01em;
//         }

//         .section-subtitle {
//           text-align: center;
//           font-size: 1.2rem;
//           color: var(--text-gray);
//           max-width: 700px;
//           margin: 0 auto 3rem auto;
//           font-weight: 400;
//         }

//         /* Chip style */
//         .chip {
//           display: inline-block;
//           background: var(--primary-light);
//           color: var(--primary-dark);
//           font-size: 0.875rem;
//           font-weight: 600;
//           padding: 0.25rem 0.75rem;
//           border-radius: 30px;
//           margin-bottom: 1rem;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         /* ---------- Hero Section ---------- */
//         .about-hero {
//           position: relative;
//           background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
//           color: white;
//           padding: 20px 24px 120px;
//           text-align: center;
//           margin-top: 42px;
//           overflow: hidden;
//         }

//         .about-hero::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
//           background-repeat: repeat;
//           background-size: 40px;
//           opacity: 0.2;
//           pointer-events: none;
//         }

//         .about-hero::after {
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

//         .hero-content h1 {
//           font-size: 4rem;
//           font-weight: 800;
//           letter-spacing: -0.02em;
//           margin-bottom: 1rem;
//           text-shadow: 0 2px 10px rgba(0,0,0,0.1);
//         }

//         .hero-tagline {
//           font-size: 1.8rem;
//           font-weight: 500;
//           margin-bottom: 1.5rem;
//           opacity: 0.95;
//         }

//         .hero-description {
//           max-width: 800px;
//           margin: 0 auto;
//           font-size: 1.2rem;
//           line-height: 1.6;
//           background: rgba(0,0,0,0.15);
//           padding: 1.2rem 2rem;
//           border-radius: 60px;
//           backdrop-filter: blur(4px);
//           font-weight: 400;
//         }

//         @media (max-width: 768px) {
//           .about-hero {
//             margin-top: 56px;
//             padding: 120px 20px 100px;
//           }
//           .hero-content h1 {
//             font-size: 2.8rem;
//           }
//           .hero-tagline {
//             font-size: 1.3rem;
//           }
//           .hero-description {
//             font-size: 1rem;
//             padding: 1rem;
//             border-radius: 32px;
//           }
//         }

//         /* ---------- Cards base animation ---------- */
//         .vm-card,
//         .value-card,
//         .profile-image,
//         .cta-section {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 0.6s ease, transform 0.6s ease;
//         }

//         .vm-card.card-visible,
//         .value-card.card-visible,
//         .profile-image.card-visible,
//         .cta-section.card-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* Stagger effect for value cards */
//         .value-card:nth-child(1) { transition-delay: 0s; }
//         .value-card:nth-child(2) { transition-delay: 0.1s; }
//         .value-card:nth-child(3) { transition-delay: 0.2s; }
//         .value-card:nth-child(4) { transition-delay: 0.3s; }

//         /* ---------- Vision & Mission Cards ---------- */
//         .vm-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2.5rem;
//         }

//         .vm-card {
//           background: white;
//           border-radius: 32px;
//           padding: 2.5rem;
//           box-shadow: var(--shadow-sm);
//           transition: var(--transition), opacity 0.6s ease, transform 0.6s ease;
//           border: 1px solid rgba(0,0,0,0.03);
//           position: relative;
//           overflow: hidden;
//         }

//         .vm-card::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           height: 4px;
//           background: linear-gradient(90deg, var(--primary-dark), var(--primary-accent));
//           transform: scaleX(0);
//           transition: transform 0.4s ease;
//         }

//         .vm-card:hover {
//           transform: translateY(-8px);
//           box-shadow: var(--shadow-hover);
//         }

//         .vm-card:hover::after {
//           transform: scaleX(1);
//         }

//         .vm-icon {
//           font-size: 3.2rem;
//           margin-bottom: 1.5rem;
//           background: var(--primary-light);
//           width: 70px;
//           height: 70px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 24px;
//           color: var(--primary-accent);
//         }

//         .vm-card h3 {
//           font-size: 1.8rem;
//           font-weight: 700;
//           color: var(--primary-dark);
//           margin-bottom: 1rem;
//         }

//         .vm-card p {
//           color: var(--text-gray);
//           font-size: 1.05rem;
//           line-height: 1.6;
//           font-weight: 400;
//         }

//         @media (max-width: 768px) {
//           .vm-grid {
//             grid-template-columns: 1fr;
//             gap: 2rem;
//           }
//           .vm-card {
//             padding: 2rem;
//           }
//           .vm-card h3 {
//             font-size: 1.6rem;
//           }
//         }

//         /* ---------- Company Profile / About Grid ---------- */
//         .profile-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 4rem;
//           align-items: center;
//         }

//         .profile-content h2 {
//           font-size: 2.4rem;
//           font-weight: 700;
//           color: var(--primary-dark);
//           margin-bottom: 1.5rem;
//           position: relative;
//           display: inline-block;
//         }

//         .profile-content h2:after {
//           content: '';
//           position: absolute;
//           bottom: -12px;
//           left: 0;
//           width: 70px;
//           height: 3px;
//           background: var(--primary-accent);
//           border-radius: 3px;
//         }

//         .profile-content p {
//           font-size: 1.1rem;
//           color: var(--text-gray);
//           line-height: 1.6;
//           margin-bottom: 1rem;
//           font-weight: 400;
//         }

//         .profile-image {
//           border-radius: 28px;
//           overflow: hidden;
//           box-shadow: var(--shadow-md);
//           transition: var(--transition), opacity 0.6s ease, transform 0.6s ease;
//         }

//         .profile-image img {
//           width: 100%;
//           height: auto;
//           display: block;
//           transition: transform 0.5s ease;
//         }

//         .profile-image:hover img {
//           transform: scale(1.03);
//         }

//         @media (max-width: 768px) {
//           .profile-grid {
//             grid-template-columns: 1fr;
//             gap: 2rem;
//             text-align: center;
//           }
//           .profile-content h2:after {
//             left: 50%;
//             transform: translateX(-50%);
//           }
//           .profile-content p {
//             text-align: center;
//           }
//         }

//         /* ---------- Values Section ---------- */
//         .values-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//           gap: 2rem;
//           margin-top: 1rem;
//         }

//         .value-card {
//           background: white;
//           border-radius: 28px;
//           padding: 2rem 1.8rem;
//           text-align: center;
//           transition: var(--transition), opacity 0.6s ease, transform 0.6s ease;
//           box-shadow: var(--shadow-sm);
//           border: 1px solid rgba(0,0,0,0.03);
//         }

//         .value-card:hover {
//           transform: translateY(-8px);
//           box-shadow: var(--shadow-hover);
//         }

//         .value-icon {
//           font-size: 2.8rem;
//           background: var(--primary-light);
//           width: 80px;
//           height: 80px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 40px;
//           margin-bottom: 1.5rem;
//           color: var(--primary-accent);
//           transition: var(--transition);
//         }

//         .value-card:hover .value-icon {
//           transform: scale(1.05);
//           background: #e2e8f0;
//         }

//         .value-card h3 {
//           font-size: 1.5rem;
//           font-weight: 600;
//           margin-bottom: 1rem;
//           color: var(--primary-dark);
//         }

//         .value-card p {
//           color: var(--text-gray);
//           font-size: 0.95rem;
//           line-height: 1.5;
//           font-weight: 400;
//         }

//         /* ---------- CTA Section ---------- */
//         .cta-section {
//           background: linear-gradient(135deg, var(--primary-dark), var(--primary-accent));
//           color: white;
//           text-align: center;
//           padding: 70px 20px;
//           border-radius: 48px;
//           margin: 40px auto 80px;
//           max-width: 1100px;
//           transition: opacity 0.6s ease, transform 0.6s ease;
//         }

//         .cta-section h3 {
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

//         .cta-btn {
//           display: inline-block;
//           background: white;
//           color: var(--primary-dark);
//           padding: 12px 32px;
//           border-radius: 40px;
//           font-weight: 600;
//           text-decoration: none;
//           transition: var(--transition);
//           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//         }

//         .cta-btn:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 8px 20px rgba(0,0,0,0.15);
//           background: #f5f5f5;
//         }

//         /* Keyframes */
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

//         /* Responsive */
//         @media (max-width: 768px) {
//           .container {
//             padding: 0 24px;
//           }
//           .section {
//             padding: 60px 0;
//           }
//           .section-title {
//             font-size: 2.2rem;
//           }
//           .cta-section {
//             margin: 40px 20px 60px;
//             padding: 50px 20px;
//           }
//           .cta-section h3 {
//             font-size: 1.7rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .section-title {
//             font-size: 1.9rem;
//           }
//           .profile-content h2 {
//             font-size: 1.9rem;
//           }
//         }
//       `}</style>

//       <div className="about-page">
//         {/* Hero Section */}
//         <div className="about-hero">
//           <div className="hero-content">
//             <h1>About Us</h1>
//             <div className="hero-tagline">Powering Logistics Excellence</div>
//             <div className="hero-description">
//               Robinsons Cargo and Logistics — a leader in air, sea, and supply chain solutions.
//               We drive innovation and deliver unmatched customer experiences through tailored,
//               end‑to‑end logistics.
//             </div>
//           </div>
//         </div>

//         {/* Vision & Mission Section */}
//         <div className="section section-white">
//           <div className="container">
//             <div className="chip">Our Compass</div>
//             <h2 className="section-title">Vision & Mission</h2>
//             <p className="section-subtitle">
//               Guided by purpose, driven by impact — shaping the future of logistics.
//             </p>
//             <div className="vm-grid">
//               <div
//                 className="vm-card"
//                 ref={(el) => (vmCardsRef.current[0] = el)}
//               >
//                 <div className="vm-icon">🎯</div>
//                 <h3>Our Mission</h3>
//                 <p>
//                   To deliver exceptional, reliable logistics solutions through operational excellence,
//                   cutting-edge technology, and a customer-first approach. We empower businesses
//                   to thrive by making supply chains seamless, sustainable, and scalable.
//                 </p>
//               </div>
//               <div
//                 className="vm-card"
//                 ref={(el) => (vmCardsRef.current[1] = el)}
//               >
//                 <div className="vm-icon">👁️</div>
//                 <h3>Our Vision</h3>
//                 <p>
//                   To be the world’s most trusted and innovative logistics partner — connecting
//                   economies, enabling growth, and setting new standards in integrated cargo
//                   and supply chain management with integrity and foresight.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Company Profile Section */}
//         <div className="section section-light">
//           <div className="container">
//             <div className="chip">Our Story</div>
//             <div className="profile-grid">
//               <div className="profile-content">
//                 <h2>Company Profile</h2>
//                 <p>
//                   For over six decades, Robinsons Cargo and Logistics has stood as a pillar of reliability
//                   in the logistics industry. Founded in 1954 with a vision to simplify complex supply chains,
//                   we now offer integrated solutions spanning air freight, ocean freight, warehousing,
//                   and supply chain management.
//                 </p>
//                 <p>
//                   Our nationwide presence, combined with modern technology and deep industry expertise,
//                   ensures your goods move efficiently from origin to destination — on time, every time.
//                   We don’t just move cargo; we build partnerships that drive success.
//                 </p>
//               </div>
//               <div
//                 className="profile-image"
//                 ref={profileImageRef}
//               >
//                 <img 
//                   src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
//                   alt="Robinsons Cargo logistics operations"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Values Section */}
//         <div className="section section-white">
//           <div className="container">
//             <div className="chip">Our Principles</div>
//             <h2 className="section-title">Core Values</h2>
//             <p className="section-subtitle">
//               The principles that define our culture and guide every decision.
//             </p>
//             <div className="values-grid">
//               <div
//                 className="value-card"
//                 ref={(el) => (valueCardsRef.current[0] = el)}
//               >
//                 <div className="value-icon">⚡</div>
//                 <h3>Operational Excellence</h3>
//                 <p>Precision, efficiency, and continuous improvement in every process.</p>
//               </div>
//               <div
//                 className="value-card"
//                 ref={(el) => (valueCardsRef.current[1] = el)}
//               >
//                 <div className="value-icon">🤝</div>
//                 <h3>Integrity & Trust</h3>
//                 <p>Honest partnerships, transparency, and accountability at all levels.</p>
//               </div>
//               <div
//                 className="value-card"
//                 ref={(el) => (valueCardsRef.current[2] = el)}
//               >
//                 <div className="value-icon">🌍</div>
//                 <h3>Global Mindset</h3>
//                 <p>Connecting markets with culturally aware, borderless logistics.</p>
//               </div>
//               <div
//                 className="value-card"
//                 ref={(el) => (valueCardsRef.current[3] = el)}
//               >
//                 <div className="value-icon">🚀</div>
//                 <h3>Customer-Centric Innovation</h3>
//                 <p>Forward-thinking solutions tailored to unique business needs.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="container">
//           <div className="cta-section" ref={ctaRef}>
//             <h3>Ready to transform your supply chain?</h3>
//             <p>Partner with Robinsons Cargo and Logistics for seamless, scalable solutions.</p>
//             <a href="/contact" className="cta-btn">Get in touch</a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Aboutus;






// src/pages/Aboutus.jsx
import React, { useEffect, useRef } from 'react';

const Aboutus = () => {
  // Refs for animated elements
  const vmCardsRef = useRef([]);
  const profileImageRef = useRef(null);
  const valueCardsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    // Observe Vision & Mission cards
    vmCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Observe profile image
    if (profileImageRef.current) observer.observe(profileImageRef.current);

    // Observe value cards
    valueCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Observe CTA section
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ---------- Google Fonts ---------- */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        /* ---------- CSS Variables ---------- */
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

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-page {
          font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, sans-serif;
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

        /* ---------- Hero Section ---------- */
        .about-hero {
          position: relative;
          background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
          color: white;
          padding: 20px 24px 120px;
          text-align: center;
          margin-top: 42px;
          overflow: hidden;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 40px;
          opacity: 0.2;
          pointer-events: none;
        }

        .about-hero::after {
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
          .about-hero {
            margin-top: 56px;
            padding: 120px 20px 100px;
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

        /* ---------- Cards base animation ---------- */
        .vm-card,
        .value-card,
        .profile-image,
        .cta-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .vm-card.card-visible,
        .value-card.card-visible,
        .profile-image.card-visible,
        .cta-section.card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Stagger effect for value cards */
        .value-card:nth-child(1) { transition-delay: 0s; }
        .value-card:nth-child(2) { transition-delay: 0.1s; }
        .value-card:nth-child(3) { transition-delay: 0.2s; }
        .value-card:nth-child(4) { transition-delay: 0.3s; }

        /* ---------- Vision & Mission Cards ---------- */
        .vm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .vm-card {
          background: white;
          border-radius: 32px;
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
          transition: var(--transition), opacity 0.6s ease, transform 0.6s ease;
          border: 1px solid rgba(0,0,0,0.03);
          position: relative;
          overflow: hidden;
        }

        .vm-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-dark), var(--primary-accent));
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .vm-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-hover);
        }

        .vm-card:hover::after {
          transform: scaleX(1);
        }

        .vm-icon {
          font-size: 3.2rem;
          margin-bottom: 1.5rem;
          background: var(--primary-light);
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          color: var(--primary-accent);
        }

        .vm-card h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 1rem;
        }

        .vm-card p {
          color: var(--text-gray);
          font-size: 1.05rem;
          line-height: 1.6;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .vm-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .vm-card {
            padding: 2rem;
          }
          .vm-card h3 {
            font-size: 1.6rem;
          }
        }

        /* ---------- Company Profile / About Grid ---------- */
        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .profile-content h2 {
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }

        .profile-content h2:after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 70px;
          height: 3px;
          background: var(--primary-accent);
          border-radius: 3px;
        }

        .profile-content p {
          font-size: 1.1rem;
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 1rem;
          font-weight: 400;
        }

        .profile-image {
          border-radius: 28px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: var(--transition), opacity 0.6s ease, transform 0.6s ease;
        }

        .profile-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .profile-image:hover img {
          transform: scale(1.03);
        }

        @media (max-width: 768px) {
          .profile-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          .profile-content h2:after {
            left: 50%;
            transform: translateX(-50%);
          }
          .profile-content p {
            text-align: center;
          }
        }

        /* ---------- Values Section - Enhanced Green Hover ---------- */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          margin-top: 1rem;
        }

        .value-card {
          background: white;
          border-radius: 28px;
          padding: 2rem 1.8rem;
          text-align: center;
          transition: var(--transition), opacity 0.6s ease, transform 0.6s ease;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(0,0,0,0.03);
          position: relative;
          overflow: hidden;
        }

        /* Green border and glow on hover */
        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 35px rgba(106, 155, 90, 0.15), var(--shadow-hover);
          border-color: var(--primary-accent);
          background: linear-gradient(to bottom, #ffffff, #fafff7);
        }

        /* Icon becomes green on hover */
        .value-card:hover .value-icon {
          background: #e9f5ee;
          color: #2c7a4d;
          transform: scale(1.05);
        }

        .value-icon {
          font-size: 2.8rem;
          background: var(--primary-light);
          width: 80px;
          height: 80px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 40px;
          margin-bottom: 1.5rem;
          color: var(--primary-accent);
          transition: var(--transition);
        }

        .value-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--primary-dark);
          transition: color 0.2s ease;
        }

        .value-card:hover h3 {
          color: var(--primary-accent);
        }

        .value-card p {
          color: var(--text-gray);
          font-size: 0.95rem;
          line-height: 1.5;
          font-weight: 400;
          transition: color 0.2s ease;
        }

        .value-card:hover p {
          color: #2c3e4e;
        }

        /* Optional: green decorative line at top on hover */
        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-accent), #8cb27f);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .value-card:hover::before {
          transform: scaleX(1);
        }

        /* ---------- CTA Section ---------- */
        .cta-section {
          background: linear-gradient(135deg, var(--primary-dark), var(--primary-accent));
          color: white;
          text-align: center;
          padding: 70px 20px;
          border-radius: 48px;
          margin: 40px auto 80px;
          max-width: 1100px;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .cta-section h3 {
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

        .cta-btn {
          display: inline-block;
          background: white;
          color: var(--primary-dark);
          padding: 12px 32px;
          border-radius: 40px;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          background: #f5f5f5;
        }

        /* Keyframes */
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
          .cta-section {
            margin: 40px 20px 60px;
            padding: 50px 20px;
          }
          .cta-section h3 {
            font-size: 1.7rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.9rem;
          }
          .profile-content h2 {
            font-size: 1.9rem;
          }
        }
      `}</style>

      <div className="about-page">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="hero-content">
            <h1>About Us</h1>
            <div className="hero-tagline">Powering Logistics Excellence</div>
            <div className="hero-description">
              Robinsons Cargo and Logistics — a leader in air, sea, and supply chain solutions.
              We drive innovation and deliver unmatched customer experiences through tailored,
              end‑to‑end logistics.
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="section section-white">
          <div className="container">
            <div className="chip">Our Compass</div>
            <h2 className="section-title">Vision & Mission</h2>
            <p className="section-subtitle">
              Guided by purpose, driven by impact — shaping the future of logistics.
            </p>
            <div className="vm-grid">
              <div
                className="vm-card"
                ref={(el) => (vmCardsRef.current[0] = el)}
              >
                <div className="vm-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To deliver exceptional, reliable logistics solutions through operational excellence,
                  cutting-edge technology, and a customer-first approach. We empower businesses
                  to thrive by making supply chains seamless, sustainable, and scalable.
                </p>
              </div>
              <div
                className="vm-card"
                ref={(el) => (vmCardsRef.current[1] = el)}
              >
                <div className="vm-icon">👁️</div>
                <h3>Our Vision</h3>
                <p>
                  To be the world’s most trusted and innovative logistics partner — connecting
                  economies, enabling growth, and setting new standards in integrated cargo
                  and supply chain management with integrity and foresight.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Profile Section */}
        <div className="section section-light">
          <div className="container">
            <div className="chip">Our Story</div>
            <div className="profile-grid">
              <div className="profile-content">
                <h2>Company Profile</h2>
                <p>
                  For over six decades, Robinsons Cargo and Logistics has stood as a pillar of reliability
                  in the logistics industry. Founded in 1954 with a vision to simplify complex supply chains,
                  we now offer integrated solutions spanning air freight, ocean freight, warehousing,
                  and supply chain management.
                </p>
                <p>
                  Our nationwide presence, combined with modern technology and deep industry expertise,
                  ensures your goods move efficiently from origin to destination — on time, every time.
                  We don’t just move cargo; we build partnerships that drive success.
                </p>
              </div>
              <div
                className="profile-image"
                ref={profileImageRef}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Robinsons Cargo logistics operations"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="section section-white">
          <div className="container">
            <div className="chip">Our Principles</div>
            <h2 className="section-title">Core Values</h2>
            <p className="section-subtitle">
              The principles that define our culture and guide every decision.
            </p>
            <div className="values-grid">
              <div
                className="value-card"
                ref={(el) => (valueCardsRef.current[0] = el)}
              >
                <div className="value-icon">⚡</div>
                <h3>Operational Excellence</h3>
                <p>Precision, efficiency, and continuous improvement in every process.</p>
              </div>
              <div
                className="value-card"
                ref={(el) => (valueCardsRef.current[1] = el)}
              >
                <div className="value-icon">🤝</div>
                <h3>Integrity & Trust</h3>
                <p>Honest partnerships, transparency, and accountability at all levels.</p>
              </div>
              <div
                className="value-card"
                ref={(el) => (valueCardsRef.current[2] = el)}
              >
                <div className="value-icon">🌍</div>
                <h3>Global Mindset</h3>
                <p>Connecting markets with culturally aware, borderless logistics.</p>
              </div>
              <div
                className="value-card"
                ref={(el) => (valueCardsRef.current[3] = el)}
              >
                <div className="value-icon">🚀</div>
                <h3>Customer-Centric Innovation</h3>
                <p>Forward-thinking solutions tailored to unique business needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container">
          <div className="cta-section" ref={ctaRef}>
            <h3>Ready to transform your supply chain?</h3>
            <p>Partner with Robinsons Cargo and Logistics for seamless, scalable solutions.</p>
            <a href="/contact" className="cta-btn">Get in touch</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;