// // import React, { useState, useEffect, useRef } from 'react';
// // import { Link } from 'react-router-dom';

// // /* ── Data ─────────────────────────────────────────────────── */
// // const services = [
// //   {
// //     title: 'Air Imports & Exports',
// //     desc: 'Swift, reliable air freight with real-time tracking and priority handling across 150+ destinations.',
// //     icon: (
// //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //         <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
// //       </svg>
// //     ),
// //     path: '/services/air-freight',
// //   },
// //   {
// //     title: 'Ocean Imports & Exports',
// //     desc: 'Secure, cost-effective ocean shipping — FCL and LCL options with full-route visibility.',
// //     icon: (
// //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //         <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1"/>
// //         <path d="M4 18l1.5-7.5h13L20 18M8 11V6l3-3 3 3v5"/>
// //       </svg>
// //     ),
// //     path: '/services/ocean-freight',
// //   },
// //   {
// //     title: 'Customs Clearance',
// //     desc: 'Expert documentation and compliance handling for smooth, hassle-free border transitions.',
// //     icon: (
// //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //         <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
// //         <rect x="9" y="3" width="6" height="4" rx="2"/>
// //         <path d="m9 12 2 2 4-4"/>
// //       </svg>
// //     ),
// //     path: '/services/custom-clearance',
// //   },
// //   {
// //     title: 'Consolidation Services',
// //     desc: 'Streamline multiple shipments into a single consignment — reducing costs without compromising speed.',
// //     icon: (
// //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //         <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
// //         <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
// //         <line x1="12" y1="22.08" x2="12" y2="12"/>
// //       </svg>
// //     ),
// //     path: '/services/warehousing',
// //   },
// //   {
// //     title: 'Warehousing & 3PL',
// //     desc: 'End-to-end supply chain management — storage, fulfilment, and last-mile delivery under one roof.',
// //     icon: (
// //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //         <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
// //         <polyline points="9 22 9 12 15 12 15 22"/>
// //       </svg>
// //     ),
// //     path: '/services/supply-chain',
// //   },
// //   {
// //     title: 'Project Logistics',
// //     desc: 'Specialised handling for oversized, high-value, and complex cargo requiring custom engineering.',
// //     icon: (
// //       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //         <circle cx="12" cy="12" r="3"/>
// //         <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
// //         <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
// //       </svg>
// //     ),
// //     path: '/services/project-logistics',
// //   },
// // ];

// // const industries = [
// //   { name: 'Automotive',         icon: '🚗', path: '/industries/automotive' },
// //   { name: 'Aviation & Defence', icon: '✈️', path: '/industries/aerospace' },
// //   { name: 'Pharma & Healthcare',icon: '💊', path: '/industries/healthcare' },
// //   { name: 'Retail & E-Commerce',icon: '🛍️', path: '/industries/retail' },
// //   { name: 'Renewable Energy',   icon: '⚡', path: '/industries/renewable-energy' },
// //   { name: 'High-Tech',          icon: '💻', path: '/industries/high-tech' },
// //   { name: 'Engineering',        icon: '⚙️', path: '/industries/engineering' },
// //   { name: 'Luxury',             icon: '💎', path: '/industries/luxury' },
// //   { name: 'Oil & Gas',          icon: '🛢️', path: '/industries/oil-gas' },
// // ];

// // const stats = [
// //   { value: '70+',   label: 'Years of Excellence' },
// //   { value: '150+',  label: 'Global Destinations' },
// //   { value: '5000+', label: 'Clients Worldwide' },
// //   { value: '24/7',  label: 'Customer Support' },
// // ];

// // const whyUs = [
// //   {
// //     title: 'End-to-End Solutions',
// //     desc: 'From air and ocean freight to warehousing and last-mile delivery — every step covered.',
// //   },
// //   {
// //     title: 'Global Reach, Local Expertise',
// //     desc: 'An extensive worldwide network combined with deep local market knowledge for tailored outcomes.',
// //   },
// //   {
// //     title: 'Industry Specialists',
// //     desc: 'Dedicated teams with sector-specific expertise across automotive, pharma, aerospace, and more.',
// //   },
// //   {
// //     title: 'Customer-Centric Approach',
// //     desc: 'Personalised support, transparent communication, and partnerships built on trust since 1954.',
// //   },
// // ];

// // const certifications = ['IATA', 'FIATA', 'ISO 9001', 'ISO 14001', 'GDP', 'ACAAI', 'AMTOI', 'IACC'];

// // /* ── Animated counter hook ───────────────────────────────── */
// // function useCountUp(target, duration = 1800, start = false) {
// //   const [count, setCount] = useState(0);
// //   useEffect(() => {
// //     if (!start) return;
// //     const numeric = parseInt(target.replace(/\D/g, ''), 10);
// //     if (!numeric) return;
// //     let startTime = null;
// //     const step = (timestamp) => {
// //       if (!startTime) startTime = timestamp;
// //       const progress = Math.min((timestamp - startTime) / duration, 1);
// //       setCount(Math.floor(progress * numeric));
// //       if (progress < 1) requestAnimationFrame(step);
// //     };
// //     requestAnimationFrame(step);
// //   }, [start, target, duration]);
// //   return count;
// // }

// // function StatCard({ value, label }) {
// //   const ref = useRef(null);
// //   const [visible, setVisible] = useState(false);
// //   const count = useCountUp(value, 1600, visible);
// //   const suffix = value.replace(/[0-9]/g, '');

// //   useEffect(() => {
// //     const obs = new IntersectionObserver(
// //       ([e]) => { if (e.isIntersecting) setVisible(true); },
// //       { threshold: 0.4 }
// //     );
// //     if (ref.current) obs.observe(ref.current);
// //     return () => obs.disconnect();
// //   }, []);

// //   return (
// //     <div className="stat-card" ref={ref}>
// //       <span className="stat-value">{visible ? `${count}${suffix}` : `0${suffix}`}</span>
// //       <span className="stat-label">{label}</span>
// //     </div>
// //   );
// // }

// // /* ── Component ───────────────────────────────────────────── */
// // const Home = () => {
// //   const [activeIndustry, setActiveIndustry] = useState(null);
// //   const [imageLoaded, setImageLoaded] = useState(false);

// //   return (
// //     <div className="home">

// //       {/* ══ HERO ══════════════════════════════════════════════ */}
// //       <section className="hero">

// //         {/* Background layer */}
// //         <div className="hero-bg">

// //           {/* Spinner shown while image loads */}
// //           {!imageLoaded && (
// //             <div className="hero-loader">
// //               <div className="hero-loader-spinner" />
// //             </div>
// //           )}

// //           {/* Background image */}
// //           <img
// //             src="/air-freight.jpg"
// //             alt="Robinsons logistics"
// //             className="hero-bg-img"
// //             style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
// //             onLoad={() => setImageLoaded(true)}
// //             onError={(e) => {
// //               e.target.onerror = null;
// //               e.target.src = 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
// //               setImageLoaded(true);
// //             }}
// //           />

// //           {/* Dark overlay — critical for text readability */}
// //           <div className="hero-overlay" />
// //         </div>

// //         {/* ── Hero Content ── */}
// //         <div className="hero-content">

// //           {/* Badge - Animated */}
// //           <div className="hero-badge animate-badge">
// //             <span className="badge-dot"></span>
// //             Est. 1954 · Trusted Worldwide
// //           </div>

// //           {/* Heading with animation - each line animates separately */}
// //           <h1 className="hero-heading">
// //             <span className="hero-heading-line animate-line1">
// //               <span className="hero-heading-accent">Seamless Connections,</span>
// //             </span>
// //             <br />
// //             <span className="hero-heading-line animate-line2">
// //               Global Reach,{' '}
// //               <span className="hero-heading-accent">Unmatched Reliability</span>
// //             </span>
// //           </h1>

// //           {/* Subtext - Animated */}
// //           <p className="hero-sub animate-sub">
// //             With 70+ years of logistics excellence, we deliver your cargo across
// //             150+ destinations with precision, care, and unwavering commitment.
// //           </p>

// //           {/* CTA Buttons - Animated */}
// //           <div className="hero-actions animate-buttons">
// //             <Link to="/services" className="hero-btn-primary">
// //               Explore Our Capabilities
// //             </Link>
// //             <Link to="/about/our-story" className="hero-btn-outline">
// //               Our Legacy
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Scroll hint */}
// //         <div className="hero-scroll-hint">
// //           <span>Scroll</span>
// //           <div className="scroll-line" />
// //         </div>

// //       </section>

// //       {/* ══ STATS STRIP ═══════════════════════════════════════ */}
// //       <section className="stats-strip">
// //         {stats.map((s) => <StatCard key={s.label} value={s.value} label={s.label} />)}
// //       </section>

// //       {/* ══ ABOUT TEASER ══════════════════════════════════════ */}
// //       <section className="about-teaser section">
// //         <div className="container">
// //           <div className="about-teaser-grid">
// //             <div className="about-teaser-visual">
// //               <div className="about-img-wrap">
// //                 <img
// //                   src="/images/about-warehouse.jpg"
// //                   alt="Robinsons logistics operations"
// //                   onError={(e) => {
// //                     e.target.onerror = null;
// //                     e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
// //                   }}
// //                 />
// //                 <div className="about-img-badge">
// //                   <span className="about-img-badge-num">70+</span>
// //                   <span className="about-img-badge-text">Years of Excellence</span>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="about-teaser-copy">
// //               <p className="section-eyebrow">About Robinsons</p>
// //               <h2 className="section-heading">Powering Logistics Excellence Since 1954</h2>
// //               <p className="section-body">
// //                 Robinsons Cargo and Logistics is a leader in the industry, specialising in air, sea,
// //                 and supply chain logistics services. We drive supply chain innovation and deliver
// //                 unparalleled customer experiences through comprehensive, tailored solutions.
// //               </p>
// //               <p className="section-body">
// //                 With deep roots in India and a global footprint spanning over 150 destinations, we
// //                 combine the agility of a local partner with the reach of an international operator.
// //               </p>
// //               <Link to="/about/our-story" className="btn-link">
// //                 Know More
// //                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //                   <path d="M5 12h14M12 5l7 7-7 7"/>
// //                 </svg>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ══ SERVICES ══════════════════════════════════════════ */}
// //       <section className="services-section section">
// //         <div className="container">
// //           <div className="section-header">
// //             <p className="section-eyebrow">What We Do</p>
// //             <h2 className="section-heading">Our Services</h2>
// //             <p className="section-sub">Comprehensive logistics solutions crafted for reliability, speed, and scale.</p>
// //           </div>
// //           <div className="services-grid">
// //             {services.map((s) => (
// //               <Link to={s.path} key={s.title} className="service-card">
// //                 <div className="service-icon">{s.icon}</div>
// //                 <h3 className="service-title">{s.title}</h3>
// //                 <p className="service-desc">{s.desc}</p>
// //                 <span className="service-arrow">
// //                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //                     <path d="M5 12h14M12 5l7 7-7 7"/>
// //                   </svg>
// //                 </span>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ══ WHY ROBINSONS ═════════════════════════════════════ */}
// //       <section className="why-section section">
// //         <div className="container">
// //           <div className="why-grid">
// //             <div className="why-copy">
// //               <p className="section-eyebrow">Why Choose Us</p>
// //               <h2 className="section-heading">The Robinsons Difference</h2>
// //               <p className="section-body">
// //                 Experience unparalleled logistics expertise with our global reach, proven track
// //                 record, and relentless focus on customer success.
// //               </p>
// //               <Link to="/about/mission-values" className="btn-link">
// //                 Learn More
// //                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //                   <path d="M5 12h14M12 5l7 7-7 7"/>
// //                 </svg>
// //               </Link>
// //             </div>
// //             <div className="why-cards">
// //               {whyUs.map((w, i) => (
// //                 <div className="why-card" key={w.title}>
// //                   <div className="why-card-num">0{i + 1}</div>
// //                   <div>
// //                     <h4 className="why-card-title">{w.title}</h4>
// //                     <p className="why-card-desc">{w.desc}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ══ INDUSTRIES ════════════════════════════════════════ */}
// //       <section className="industries-section section">
// //         <div className="container">
// //           <div className="section-header">
// //             <p className="section-eyebrow">Sectors We Serve</p>
// //             <h2 className="section-heading">Industries We Serve</h2>
// //           </div>
// //           <div className="industries-grid">
// //             {industries.map((ind) => (
// //               <Link
// //                 to={ind.path}
// //                 key={ind.name}
// //                 className={`industry-pill ${activeIndustry === ind.name ? 'industry-pill-active' : ''}`}
// //                 onMouseEnter={() => setActiveIndustry(ind.name)}
// //                 onMouseLeave={() => setActiveIndustry(null)}
// //               >
// //                 <span className="industry-pill-icon">{ind.icon}</span>
// //                 <span>{ind.name}</span>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ══ CERTIFICATIONS ════════════════════════════════════ */}
// //       <section className="certs-section">
// //         <div className="container">
// //           <p className="section-eyebrow text-center">Trusted & Accredited</p>
// //           <div className="certs-track-wrap">
// //             <div className="certs-track">
// //               {[...certifications, ...certifications].map((c, i) => (
// //                 <div className="cert-badge" key={i}>{c}</div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ══ CTA BANNER ════════════════════════════════════════ */}
// //       <section className="cta-banner">
// //         <div className="cta-banner-bg" />
// //         <div className="container cta-banner-inner">
// //           <div className="cta-banner-copy">
// //             <h2 className="cta-banner-heading">Ready to Move Your Cargo?</h2>
// //             <p className="cta-banner-sub">Talk to our experts and get a tailored logistics solution today.</p>
// //           </div>
// //           <Link to="/contact" className="cta-banner-btn">Get in Touch</Link>
// //         </div>
// //       </section>

// //       {/* Add animation styles */}
// //       <style>{`
// //         @keyframes spin {
// //           0% { transform: rotate(0deg); }
// //           100% { transform: rotate(360deg); }
// //         }

// //         @keyframes fadeUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         @keyframes fadeInLeft {
// //           from {
// //             opacity: 0;
// //             transform: translateX(-30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }

// //         @keyframes fadeInRight {
// //           from {
// //             opacity: 0;
// //             transform: translateX(30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }

// //         @keyframes pulse {
// //           0%, 100% {
// //             transform: scale(1);
// //             opacity: 0.6;
// //           }
// //           50% {
// //             transform: scale(1.2);
// //             opacity: 1;
// //           }
// //         }

// //         /* Badge Animation */
// //         .animate-badge {
// //           animation: fadeUp 0.6s ease-out forwards;
// //         }

// //         /* Heading Line 1 Animation */
// //         .animate-line1 {
// //           display: inline-block;
// //           animation: fadeInLeft 0.7s ease-out forwards;
// //         }

// //         /* Heading Line 2 Animation */
// //         .animate-line2 {
// //           display: inline-block;
// //           animation: fadeInRight 0.7s ease-out 0.2s forwards;
// //           opacity: 0;
// //           animation-fill-mode: forwards;
// //         }

// //         /* Subtext Animation */
// //         .animate-sub {
// //           animation: fadeUp 0.6s ease-out 0.4s forwards;
// //           opacity: 0;
// //           animation-fill-mode: forwards;
// //         }

// //         /* Buttons Animation */
// //         .animate-buttons {
// //           animation: fadeUp 0.6s ease-out 0.6s forwards;
// //           opacity: 0;
// //           animation-fill-mode: forwards;
// //         }

// //         /* Badge dot pulse */
// //         .badge-dot {
// //           display: inline-block;
// //           width: 6px;
// //           height: 6px;
// //           background: #00C9A7;
// //           border-radius: 50%;
// //           margin-right: 8px;
// //           animation: pulse 1.5s ease-in-out infinite;
// //         }

// //         /* Hero content initial state */
// //         .hero-heading-line {
// //           opacity: 0;
// //         }
// //       `}</style>

// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <section className="hero">

//       {/* ── Background ── */}
//       <div className="hero-bg">
//         {!imageLoaded && (
//           <div className="hero-loader">
//             <div className="hero-loader-spinner" />
//           </div>
//         )}
//         <img
//           src="/air-freight.jpg"
//           alt="Robinsons logistics"
//           className="hero-bg-img"
//           style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
//           onLoad={() => setImageLoaded(true)}
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
//             setImageLoaded(true);
//           }}
//         />
//         {/* Dark overlay — required for readability */}
//         <div className="hero-overlay" />
//       </div>

//       {/* ── Content ── */}
//       <div className="hero-content">

//         <div className="hero-badge animate-badge">
//           <span className="badge-dot" />
//           Est. 1954 · Trusted Worldwide
//         </div>

//         <h1 className="hero-heading">
//           <span className="hero-heading-line animate-line1">
//             Seamless Connections,
//           </span>
//           <span className="hero-heading-line animate-line2">
//             Global Reach,{' '}
//             <span className="hero-heading-accent">Unmatched Reliability</span>
//           </span>
//         </h1>

//         <p className="hero-sub animate-sub">
//           With 70+ years of logistics excellence, we deliver your cargo across
//           150+ destinations with precision, care, and unwavering commitment.
//         </p>

//         <div className="hero-actions animate-buttons">
//           <Link to="/services" className="hero-btn-primary">
//             Explore Our Capabilities
//           </Link>
//           <Link to="/about/our-story" className="hero-btn-outline">
//             Our Legacy
//           </Link>
//         </div>
//       </div>

//       {/* ── Scroll hint ── */}
//       <div className="hero-scroll-hint">
//         <span>Scroll</span>
//         <div className="scroll-line" />
//       </div>

//     </section>
//   );
// };

// export default Hero;...



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="hero">

      {/* Background */}
      <div className="hero-bg">
        {!imageLoaded && (
          <div className="hero-loader">
            <div className="hero-loader-spinner" />
          </div>
        )}
        <img
          src="/air-freight.jpg"
          alt="Robinsons logistics"
          className="hero-bg-img"
          style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
            setImageLoaded(true);
          }}
        />
        {/* ★ CRITICAL: Dark overlay — without this text is unreadable */}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">

        <div className="hero-badge animate-badge">
          <span className="badge-dot" />
          Est. 1954 · Trusted Worldwide
        </div>

        <h1 className="hero-heading">
          <span className="hero-heading-line animate-line1">
            Seamless Connections,
          </span>
          <span className="hero-heading-line animate-line2">
            Global Reach,{' '}
            <span className="hero-heading-accent">Unmatched Reliability</span>
          </span>
        </h1>

        <p className="hero-sub animate-sub">
          With 70+ years of logistics excellence, we deliver your cargo across
          150+ destinations with precision, care, and unwavering commitment.
        </p>

        <div className="hero-actions animate-buttons">
          <Link to="/services" className="hero-btn-primary">
            Explore Our Capabilities
          </Link>
          <Link to="/about/our-story" className="hero-btn-outline">
            Our Legacy
          </Link>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>

    </section>
  );
};

export default Hero;