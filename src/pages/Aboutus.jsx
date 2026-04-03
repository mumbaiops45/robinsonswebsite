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
    vmCardsRef.current.forEach((card) => { if (card) observer.observe(card); });
    if (profileImageRef.current) observer.observe(profileImageRef.current);
    valueCardsRef.current.forEach((card) => { if (card) observer.observe(card); });
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        /* ── Page wrapper ── */
        .about-page {
          font-family: 'Poppins', sans-serif;
          color: var(--t, #093e5d);
          background: #fff;
          line-height: 1.5;
          overflow-x: hidden;
        }

        /* ── Hero ── */
        .about-hero {
          position: relative;
          background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
          color: white;
          padding: 0 48px;
          padding-top: 62px;
          text-align: center;
          overflow: hidden;
          display: block;
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
        .ab-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
          padding: 40px 0 60px;
          animation: abFadeUp 0.8s ease;
        }
        .ab-hero-content h1 {
          font-size: clamp(2.4rem, 4.8vw, 4.6rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 1rem;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
          color: #fff;
        }
        .ab-hero-tagline {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          opacity: 0.9;
          color: #fff;
        }
        .ab-hero-desc {
          max-width: 720px;
          margin: 0 auto;
          font-size: 1.05rem;
          line-height: 1.7;
          background: rgba(0,0,0,0.2);
          padding: 1rem 1.5rem;
          border-radius: 8px;
          backdrop-filter: blur(4px);
          font-weight: 400;
          color: rgba(255,255,255,0.9);
        }

        /* ── Section wrapper ── */
        .ab-sec {
          padding: 72px 48px;
          box-sizing: border-box;
          width: 100%;
        }
        .ab-sec-light {
          background: var(--w2, #f7f9fc);
        }
        .ab-sec-white {
          background: var(--w, #ffffff);
        }
        .ab-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .ab-divider {
          border: none;
          border-top: 1px solid var(--bd, #d8e4ed);
          margin: 0;
        }

        /* ── Chip — matches global ── */
        .ab-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.67rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--g, #6a9b5a);
          margin-bottom: 10px;
        }
        .ab-chip::before {
          content: '';
          width: 16px;
          height: 2px;
          background: var(--g, #6a9b5a);
          border-radius: 2px;
          flex-shrink: 0;
        }

        /* ── Section titles — matches global ── */
        .ab-title {
          font-size: clamp(1.8rem, 4.5vw, 2.8rem);
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.3;
          color: var(--n, #093e5d);
          margin-bottom: 8px;
        }
        .ab-title .hl {
          color: var(--g, #6a9b5a);
        }
        .ab-sub {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--ts, #3a6680);
          max-width: 560px;
          margin-bottom: 2rem;
        }

        /* ── Card reveal animation ── */
        .vm-card,
        .ab-value-card,
        .ab-profile-img,
        .ab-cta {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .vm-card.card-visible,
        .ab-value-card.card-visible,
        .ab-profile-img.card-visible,
        .ab-cta.card-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .ab-value-card:nth-child(1) { transition-delay: 0s; }
        .ab-value-card:nth-child(2) { transition-delay: 0.08s; }
        .ab-value-card:nth-child(3) { transition-delay: 0.16s; }
        .ab-value-card:nth-child(4) { transition-delay: 0.24s; }

        /* ── Vision & Mission grid ── */
        .ab-vm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: var(--bd, #d8e4ed);
          border: 1px solid var(--bd, #d8e4ed);
          margin-top: 1.5rem;
        }
        .vm-card {
          background: var(--w, #ffffff);
          padding: 2rem;
          border-right: 1px solid var(--bd, #d8e4ed);
          transition: all 0.3s ease, opacity 0.6s ease, transform 0.6s ease;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .vm-card:last-child {
          border-right: none;
        }
        .vm-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--g, #6a9b5a), var(--g3, #8cb27f));
          transform: scaleX(0);
          transition: transform 0.35s ease;
        }
        .vm-card:hover {
          background: var(--w2, #f7f9fc);
          padding-left: 2.4rem;
        }
        .vm-card:hover::before {
          transform: scaleX(1);
        }
        .ab-vm-icon {
          font-size: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          background: var(--w2, #f7f9fc);
          border: 1px solid var(--bd, #d8e4ed);
          border-radius: 6px;
          color: var(--g, #6a9b5a);
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }
        .vm-card:hover .ab-vm-icon {
          background: var(--n, #093e5d);
          color: var(--g3, #8cb27f);
          border-color: var(--n, #093e5d);
        }
        .vm-card h3 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--n, #093e5d);
          margin-bottom: 0.6rem;
          letter-spacing: -0.01em;
          transition: color 0.3s;
        }
        .vm-card p {
          color: var(--ts, #3a6680);
          font-size: 0.84rem;
          line-height: 1.75;
          transition: color 0.3s;
        }

        /* ── Company Profile ── */
        .ab-profile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-top: 1.5rem;
        }
        .ab-profile-text p {
          font-size: 0.88rem;
          color: var(--ts, #3a6680);
          line-height: 1.85;
          margin-bottom: 1rem;
        }
        .ab-profile-text p:last-child {
          margin-bottom: 0;
        }
        .ab-profile-img {
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid var(--bd, #d8e4ed);
          box-shadow: 0 8px 32px rgba(11,29,58,0.08);
          transition: all 0.3s ease, opacity 0.6s ease, transform 0.6s ease;
        }
        .ab-profile-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .ab-profile-img:hover img {
          transform: scale(1.03);
        }

        /* ── Core Values grid ── */
        .ab-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          background: var(--bd, #d8e4ed);
          border: 1px solid var(--bd, #d8e4ed);
          margin-top: 1.5rem;
        }
        .ab-value-card {
          background: var(--w, #ffffff);
          padding: 2rem 1.5rem;
          border-right: 1px solid var(--bd, #d8e4ed);
          transition: all 0.32s ease, opacity 0.6s ease, transform 0.6s ease;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .ab-value-card:last-child {
          border-right: none;
        }
        .ab-value-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--g, #6a9b5a), var(--g3, #8cb27f));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .ab-value-card:hover {
          background: var(--n, #093e5d);
          z-index: 1;
        }
        .ab-value-card:hover::after {
          transform: scaleX(1);
        }
        .ab-value-icon {
          font-size: 1.6rem;
          display: block;
          margin-bottom: 0.75rem;
          color: var(--g, #6a9b5a);
          transition: transform 0.28s ease;
        }
        .ab-value-card:hover .ab-value-icon {
          transform: scale(1.1);
          color: var(--g3, #8cb27f);
        }
        .ab-value-card h3 {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--n, #093e5d);
          margin-bottom: 0.4rem;
          letter-spacing: -0.01em;
          line-height: 1.4;
          transition: color 0.3s;
        }
        .ab-value-card:hover h3 {
          color: #fff;
        }
        .ab-value-card p {
          color: var(--ts, #3a6680);
          font-size: 0.78rem;
          line-height: 1.65;
          transition: color 0.3s;
        }
        .ab-value-card:hover p {
          color: rgba(255,255,255,0.5);
        }

        /* ── CTA ── */
        .ab-cta-wrap {
          padding: 0 48px 80px;
          max-width: 1280px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .ab-cta {
          background: linear-gradient(135deg, var(--n, #093e5d), var(--g, #6a9b5a));
          color: white;
          text-align: center;
          padding: 70px 20px;
          border-radius: 48px;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ab-cta h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          color: #fff;
        }
        .ab-cta p {
          font-size: 1rem;
          opacity: 0.85;
          max-width: 520px;
          margin: 0 auto 2rem;
          line-height: 1.75;
          color: #fff;
        }
        .ab-cta-btn {
          display: inline-block;
          background: #fff;
          color: var(--n, #093e5d);
          padding: 13px 32px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.85rem;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          letter-spacing: 0.01em;
        }
        .ab-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
          background: #f0f4f8;
        }

        /* ── Keyframes ── */
        @keyframes abFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .about-hero {
            padding: 0 20px;
            padding-top: 62px;
          }
          .ab-sec {
            padding: 60px 24px;
          }
          .ab-cta-wrap {
            padding: 0 24px 60px;
          }
          .ab-vm-grid {
            grid-template-columns: 1fr;
          }
          .vm-card {
            border-right: none;
            border-bottom: 1px solid var(--bd, #d8e4ed);
          }
          .vm-card:last-child {
            border-bottom: none;
          }
          .ab-profile-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .ab-values-grid {
            grid-template-columns: 1fr 1fr;
          }
          .ab-value-card:nth-child(2) { border-right: none; }
          .ab-value-card:nth-child(1),
          .ab-value-card:nth-child(2) { border-bottom: 1px solid var(--bd, #d8e4ed); }
          .ab-value-card:nth-child(3) { border-right: 1px solid var(--bd, #d8e4ed); }
          .ab-value-card:last-child { border-right: none; }
        }

        @media (max-width: 768px) {
          .about-hero {
            padding-top: 56px;
          }
          .ab-sec {
            padding: 48px 20px;
          }
          .ab-cta-wrap {
            padding: 0 20px 48px;
          }
          .ab-hero-content {
            padding: 30px 0 50px;
          }
          .ab-hero-tagline {
            font-size: 1.2rem;
          }
          .ab-hero-desc {
            font-size: 0.95rem;
            padding: 0.85rem 1rem;
          }
          .ab-cta {
            border-radius: 24px;
            padding: 50px 20px;
          }
          .ab-cta h3 {
            font-size: 1.6rem;
          }
          .vm-card {
            padding: 1.5rem;
          }
          .ab-value-card {
            padding: 1.5rem 1.2rem;
          }
        }

        @media (max-width: 540px) {
          .ab-values-grid {
            grid-template-columns: 1fr;
          }
          .ab-value-card {
            border-right: none !important;
            border-bottom: 1px solid var(--bd, #d8e4ed) !important;
          }
          .ab-value-card:last-child {
            border-bottom: none !important;
          }
          .ab-value-card:hover {
            transform: none;
          }
        }

        @media (max-width: 480px) {
          .ab-hero-tagline {
            font-size: 1rem;
          }
          .ab-hero-desc {
            font-size: 0.88rem;
          }
          .ab-cta h3 {
            font-size: 1.4rem;
          }
          .ab-cta-btn {
            padding: 11px 24px;
            font-size: 0.8rem;
          }
        }
      `}</style>

      <div className="about-page">

        {/* ── Hero ── */}
        <div className="about-hero">
          <div className="ab-hero-content">
            <h1>About Us</h1>
            <div className="ab-hero-tagline">Powering Logistics Excellence</div>
            <div className="ab-hero-desc">
              Robinsons Cargo and Logistics — a leader in air, sea, and supply chain solutions.
              We drive innovation and deliver unmatched customer experiences through tailored,
              end‑to‑end logistics.
            </div>
          </div>
        </div>

        {/* ── Vision & Mission ── */}
        <div className="ab-sec ab-sec-white">
          <div className="ab-container">
            <div className="ab-chip">Our Compass</div>
            <h2 className="ab-title">
              Vision & <span className="hl">Mission</span>
            </h2>
            <p className="ab-sub">
              Guided by purpose, driven by impact — shaping the future of logistics.
            </p>
            <div className="ab-vm-grid">
              <div className="vm-card" ref={(el) => (vmCardsRef.current[0] = el)}>
                <div className="ab-vm-icon"><FaBullseye /></div>
                <h3>Our Mission</h3>
                <p>To deliver exceptional, reliable logistics solutions through operational excellence, cutting-edge technology, and a customer-first approach. We empower businesses to thrive by making supply chains seamless, sustainable, and scalable.</p>
              </div>
              <div className="vm-card" ref={(el) => (vmCardsRef.current[1] = el)}>
                <div className="ab-vm-icon"><FaEye /></div>
                <h3>Our Vision</h3>
                <p>To be the world's most trusted and innovative logistics partner — connecting economies, enabling growth, and setting new standards in integrated cargo and supply chain management with integrity and foresight.</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="ab-divider" />

        {/* ── Company Profile ── */}
        <div className="ab-sec ab-sec-light">
          <div className="ab-container">
            <div className="ab-chip">Our Story</div>
            <h2 className="ab-title">
              Company <span className="hl">Profile</span>
            </h2>
            <div className="ab-profile-grid">
              <div className="ab-profile-text">
                <p>For over six decades, Robinsons Cargo and Logistics has stood as a pillar of reliability in the logistics industry. Founded in 1954 with a vision to simplify complex supply chains, we now offer integrated solutions spanning air freight, ocean freight, warehousing, and supply chain management.</p>
                <p>Our nationwide presence, combined with modern technology and deep industry expertise, ensures your goods move efficiently from origin to destination — on time, every time. We don't just move cargo; we build partnerships that drive success.</p>
              </div>
              <div className="ab-profile-img" ref={profileImageRef}>
                <img
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Robinsons Cargo logistics operations"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="ab-divider" />

        {/* ── Core Values ── */}
        <div className="ab-sec ab-sec-white">
          <div className="ab-container">
            <div className="ab-chip">Our Principles</div>
            <h2 className="ab-title">
              Core <span className="hl">Values</span>
            </h2>
            <p className="ab-sub">
              The principles that define our culture and guide every decision.
            </p>
            <div className="ab-values-grid">
              <div className="ab-value-card" ref={(el) => (valueCardsRef.current[0] = el)}>
                <span className="ab-value-icon"><FaBolt /></span>
                <h3>Operational Excellence</h3>
                <p>Precision, efficiency, and continuous improvement in every process.</p>
              </div>
              <div className="ab-value-card" ref={(el) => (valueCardsRef.current[1] = el)}>
                <span className="ab-value-icon"><FaHandshake /></span>
                <h3>Integrity & Trust</h3>
                <p>Honest partnerships, transparency, and accountability at all levels.</p>
              </div>
              <div className="ab-value-card" ref={(el) => (valueCardsRef.current[2] = el)}>
                <span className="ab-value-icon"><FaGlobe /></span>
                <h3>Global Mindset</h3>
                <p>Connecting markets with culturally aware, borderless logistics.</p>
              </div>
              <div className="ab-value-card" ref={(el) => (valueCardsRef.current[3] = el)}>
                <span className="ab-value-icon"><FaRocket /></span>
                <h3>Customer-Centric Innovation</h3>
                <p>Forward-thinking solutions tailored to unique business needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="ab-cta-wrap">
          <div className="ab-cta" ref={ctaRef}>
            <h3>Ready to transform your supply chain?</h3>
            <p>Partner with Robinsons Cargo and Logistics for seamless, scalable solutions.</p>
            <a href="/contact" className="ab-cta-btn">Get in Touch</a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Aboutus;