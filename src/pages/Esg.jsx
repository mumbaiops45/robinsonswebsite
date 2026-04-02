import React, { useEffect, useRef } from 'react';

const ESG = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.pb-fill');
            fills.forEach((fill) => {
              fill.style.width = fill.dataset.w + '%';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (progressRef.current) observer.observe(progressRef.current);

    return () => observer.disconnect();
  }, []);

  const esgItems = [
    { icon: '🌳', title: 'Reforestation & Tree Planting', text: 'Active reforestation drives and tree planting initiatives to offset carbon emissions and restore biodiversity across India.' },
    { icon: '♻️', title: 'Circular Economy', text: 'Implementing the 3Rs — Reduce, Reuse, Recycle — across operations and embedded in every logistics workflow.' },
    { icon: '🤝', title: 'NGO Partnerships', text: 'Active NGO partnerships, beach clean-up drives, and community engagement programmes creating positive impact.' },
    { icon: '⚖️', title: 'Gender Equality', text: 'Committed to SDG 5 — a diverse, equitable workplace with fair treatment and equal opportunity for all.' },
    { icon: '🌏', title: 'Biodiversity Conservation', text: 'Collaboration for biodiversity conservation and governance frameworks aligned with international standards.' },
    { icon: '📊', title: 'Sustainability Reporting', text: 'Transparent ESG disclosures reinforcing accountability to employees, clients, and communities.' },
  ];

  const sdgs = [
    { num: '5', label: 'Gender Equality', class: 's1' },
    { num: '9', label: 'Industry & Innovation', class: 's2' },
    { num: '12', label: 'Responsible Consumption', class: 's3' },
    { num: '13', label: 'Climate Action', class: 's4' },
    { num: '17', label: 'Partnerships for Goals', class: 's5' },
  ];

  return (
    <section id="esg">
      <div className="esg-top sr">
        <div className="esg-tl">
          <div className="chip chip-w">Sustainability</div>
          <h2 className="sec-title" style={{ color: '#fff' }}>
            Environmental, Social <span style={{ color: 'var(--g3)' }}>&amp; Governance</span>
          </h2>
          <p className="sec-sub" style={{ color: 'rgba(255,255,255,.55)', marginTop: '10px' }}>
            Our commitment to UN SDGs is embedded at the core of our strategy — from green logistics to community impact. ISO 14001 certified since 2024.
          </p>
        </div>
        <div className="esg-tr sr d2">
          <div className="pbar-block" ref={progressRef}>
            <div className="pb-row">
              <div className="pb-head">
                <span className="pb-lbl">Carbon Reduction Efforts</span>
                <span className="pb-val">78%</span>
              </div>
              <div className="pb-track">
                <div className="pb-fill" data-w="78"></div>
              </div>
            </div>
            <div className="pb-row">
              <div className="pb-head">
                <span className="pb-lbl">Green Packaging Adoption</span>
                <span className="pb-val">85%</span>
              </div>
              <div className="pb-track">
                <div className="pb-fill" data-w="85"></div>
              </div>
            </div>
            <div className="pb-row">
              <div className="pb-head">
                <span className="pb-lbl">Waste Reduction (3Rs)</span>
                <span className="pb-val">70%</span>
              </div>
              <div className="pb-track">
                <div className="pb-fill" data-w="70"></div>
              </div>
            </div>
            <div className="pb-row">
              <div className="pb-head">
                <span className="pb-lbl">Gender Diversity in Teams</span>
                <span className="pb-val">60%</span>
              </div>
              <div className="pb-track">
                <div className="pb-fill" data-w="60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="esg-grid sr d1">
        {esgItems.map((item, idx) => (
          <div key={idx} className="ec">
            <span className="ec-ico">{item.icon}</span>
            <div className="ec-ttl">{item.title}</div>
            <div className="ec-txt">{item.text}</div>
          </div>
        ))}
      </div>
      <div className="sdg-strip sr">
        {sdgs.map((sdg, idx) => (
          <div key={idx} className={`sdg-it ${sdg.class}`}>
            <div className="sdg-num">{sdg.num}</div>
            <div className="sdg-lbl">{sdg.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ESG;