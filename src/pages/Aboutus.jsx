
// import React, { useEffect, useRef } from 'react';
// import { FaBullseye, FaEye, FaBolt, FaHandshake, FaGlobe, FaRocket } from 'react-icons/fa';

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
//           margin-top: 62px;
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

//         /* ---------- Values Section - Enhanced Green Hover ---------- */
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
//           position: relative;
//           overflow: hidden;
//         }

//         /* Green border and glow on hover */
//         .value-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 35px rgba(106, 155, 90, 0.15), var(--shadow-hover);
//           border-color: var(--primary-accent);
//           background: linear-gradient(to bottom, #ffffff, #fafff7);
//         }

//         /* Icon becomes green on hover */
//         .value-card:hover .value-icon {
//           background: #e9f5ee;
//           color: #2c7a4d;
//           transform: scale(1.05);
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

//         .value-card h3 {
//           font-size: 1.5rem;
//           font-weight: 600;
//           margin-bottom: 1rem;
//           color: var(--primary-dark);
//           transition: color 0.2s ease;
//         }

//         .value-card:hover h3 {
//           color: var(--primary-accent);
//         }

//         .value-card p {
//           color: var(--text-gray);
//           font-size: 0.95rem;
//           line-height: 1.5;
//           font-weight: 400;
//           transition: color 0.2s ease;
//         }

//         .value-card:hover p {
//           color: #2c3e4e;
//         }

//         /* Optional: green decorative line at top on hover */
//         .value-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 3px;
//           background: linear-gradient(90deg, var(--primary-accent), #8cb27f);
//           transform: scaleX(0);
//           transition: transform 0.3s ease;
//         }

//         .value-card:hover::before {
//           transform: scaleX(1);
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
//                 <div className="vm-icon">
//                   <FaBullseye />
//                 </div>
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
//                 <div className="vm-icon">
//                   <FaEye />
//                 </div>
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
//                 <div className="value-icon">
//                   <FaBolt />
//                 </div>
//                 <h3>Operational Excellence</h3>
//                 <p>Precision, efficiency, and continuous improvement in every process.</p>
//               </div>
//               <div
//                 className="value-card"
//                 ref={(el) => (valueCardsRef.current[1] = el)}
//               >
//                 <div className="value-icon">
//                   <FaHandshake />
//                 </div>
//                 <h3>Integrity & Trust</h3>
//                 <p>Honest partnerships, transparency, and accountability at all levels.</p>
//               </div>
//               <div
//                 className="value-card"
//                 ref={(el) => (valueCardsRef.current[2] = el)}
//               >
//                 <div className="value-icon">
//                   <FaGlobe />
//                 </div>
//                 <h3>Global Mindset</h3>
//                 <p>Connecting markets with culturally aware, borderless logistics.</p>
//               </div>
//               <div
//                 className="value-card"
//                 ref={(el) => (valueCardsRef.current[3] = el)}
//               >
//                 <div className="value-icon">
//                   <FaRocket />
//                 </div>
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

import React, { useEffect, useRef } from 'react';
import { FaBullseye, FaEye, FaBolt, FaHandshake, FaGlobe, FaRocket } from 'react-icons/fa';

const Aboutus = () => {
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

    vmCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    if (profileImageRef.current) observer.observe(profileImageRef.current);
    valueCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
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
          font-family: 'Poppins', sans-serif;
          color: var(--text-dark);
          background: #fff;
          line-height: 1.5;
          overflow-x: hidden;
        }

        /* Container - matches global */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* Section spacing - matches global .sec */
        .sec {
          padding: 72px 48px;
        }

        /* Hero Section (reduced top space) */
        .about-hero {
          position: relative;
          background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
          color: white;
          padding: 0 48px;
          padding-top: 42px;           /* Reduced from 62px */
          text-align: center;
          overflow: hidden;
          /* Removed min-height: 100vh and flex centering for tighter top */
          display: block;               /* Changed from flex to block */
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
          width: 100%;
          padding: 20px 0;             /* Reduced padding */
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
          margin-bottom: 1rem;         /* Reduced from 1.5rem */
          opacity: 0.95;
        }

        .hero-description {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.2rem;
          line-height: 1.6;
          background: rgba(0,0,0,0.15);
          padding: 1rem 1.5rem;        /* Slightly reduced padding */
          border-radius: 60px;
          backdrop-filter: blur(4px);
          font-weight: 400;
        }

        /* Cards base animation (unchanged) */
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

        /* Vision & Mission Cards */
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

        /* Company Profile / About Grid */
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

        /* Values Section */
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

        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 35px rgba(106, 155, 90, 0.15), var(--shadow-hover);
          border-color: var(--primary-accent);
          background: linear-gradient(to bottom, #ffffff, #fafff7);
        }

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
.chip {
  display: inline-block;
  text-align: center;
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

.sec-title {
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  color: var(--primary-dark);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.sec-sub {
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-gray);
  max-width: 700px;
  margin: 0 auto 3rem auto;
  font-weight: 400;
}
        /* CTA Section */
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
        @media (max-width: 1100px) {
          .sec {
            padding: 60px 24px;
          }
          .about-hero {
            padding: 0 20px;
            padding-top: 36px;         /* Reduced from 56px */
          }
          .hero-content h1 {
            font-size: 3.2rem;
          }
          .hero-tagline {
            font-size: 1.4rem;
          }
          .hero-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .sec {
            padding: 48px 20px;
          }
          .hero-content h1 {
            font-size: 2.8rem;
          }
          .hero-tagline {
            font-size: 1.3rem;
          }
          .hero-description {
            font-size: 0.95rem;
            padding: 1rem;
          }
          .vm-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .vm-card {
            padding: 2rem;
          }
          .profile-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          .profile-content h2:after {
            left: 50%;
            transform: translateX(-50%);
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
          .hero-content h1 {
            font-size: 2.2rem;
          }
          .hero-tagline {
            font-size: 1.1rem;
          }
          .profile-content h2 {
            font-size: 1.8rem;
          }
          .vm-card h3 {
            font-size: 1.5rem;
          }
          .value-card h3 {
            font-size: 1.3rem;
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
        <div className="sec section-white">
          <div className="container">
            <div className="chip">Our Compass</div>
            <h2 className="sec-title">Vision & Mission</h2>
            <p className="sec-sub">
              Guided by purpose, driven by impact — shaping the future of logistics.
            </p>
            <div className="vm-grid">
              <div
                className="vm-card"
                ref={(el) => (vmCardsRef.current[0] = el)}
              >
                <div className="vm-icon">
                  <FaBullseye />
                </div>
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
                <div className="vm-icon">
                  <FaEye />
                </div>
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
        <div className="sec section-light">
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
        <div className="sec section-white">
          <div className="container">
            <div className="chip">Our Principles</div>
            <h2 className="sec-title">Core Values</h2>
            <p className="sec-sub">
              The principles that define our culture and guide every decision.
            </p>
            <div className="values-grid">
              <div
                className="value-card"
                ref={(el) => (valueCardsRef.current[0] = el)}
              >
                <div className="value-icon">
                  <FaBolt />
                </div>
                <h3>Operational Excellence</h3>
                <p>Precision, efficiency, and continuous improvement in every process.</p>
              </div>
              <div
                className="value-card"
                ref={(el) => (valueCardsRef.current[1] = el)}
              >
                <div className="value-icon">
                  <FaHandshake />
                </div>
                <h3>Integrity & Trust</h3>
                <p>Honest partnerships, transparency, and accountability at all levels.</p>
              </div>
              <div
                className="value-card"
                ref={(el) => (valueCardsRef.current[2] = el)}
              >
                <div className="value-icon">
                  <FaGlobe />
                </div>
                <h3>Global Mindset</h3>
                <p>Connecting markets with culturally aware, borderless logistics.</p>
              </div>
              <div
                className="value-card"
                ref={(el) => (valueCardsRef.current[3] = el)}
              >
                <div className="value-icon">
                  <FaRocket />
                </div>
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