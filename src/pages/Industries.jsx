import React from 'react';

const Industries = () => {
  const industries = [
    { icon: '🚗', name: 'Automotive' },
    { icon: '✈️', name: 'Aviation & Defense' },
    { icon: '⚙️', name: 'Engineering' },
    { icon: '💻', name: 'Hi-Tech' },
    { icon: '💎', name: 'Luxury Goods' },
    { icon: '💊', name: 'Pharma & Healthcare' },
    { icon: '🏗️', name: 'Project Logistics' },
    { icon: '🌿', name: 'Renewable Energy' },
    { icon: '🛒', name: 'Retail / E-Commerce' },
    { icon: '🛸', name: 'Space & Avionics' },
    { icon: '🌡️', name: 'Cold Chain' },
    { icon: '🏭', name: 'Industrial & MSME' },
  ];

  return (
    <section id="industries" className="sec" style={{ background: 'var(--w2)', paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="section-header">
        <div className="chip">Sector Expertise</div>
        <h2 className="sec-title">
          Industries <span className="hl">We Serve</span>
        </h2>
        <p className="sec-sub">Specialised teams with deep sector knowledge delivering customised logistics for the most demanding cargo categories.</p>
      </div>
      <div className="ind-grid sr d2">
        {industries.map((ind, idx) => (
          <div key={idx} className="ip">
            <span className="ip-ico">{ind.icon}</span>
            <span className="ip-name">{ind.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;