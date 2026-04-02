import React from 'react';

const WhyRobinsons = () => {
  const reasons = [
    {
      num: '01',
      title: 'End-to-End Solutions',
      text: 'Air & ocean freight to warehousing and last-mile distribution — all under one trusted roof with seamless handoffs.',
    },
    {
      num: '02',
      title: 'Global Reach, Local Depth',
      text: '120+ international partners combined with 15 Indian offices providing 24/7 direct support and local expertise.',
    },
    {
      num: '03',
      title: 'Certified & Compliant',
      text: 'AEO-LO, GDP, IATA, FIATA, ISO 9001 & ISO 14001 — among India\'s earliest AEO-LO holders and oldest CHA licensees.',
    },
    {
      num: '04',
      title: 'Customer-Centric Culture',
      text: 'Long-term partnerships built on trust, accuracy, and reliability. Dedicated sector specialists for personalised support.',
    },
  ];

  const associations = [
    'Air Cargo Agents Association of India (since 1978)',
    'Assoc. of Multimodal Transport Operations of India',
    'Indo American Chamber of Commerce',
    'Indo Australian Chamber of Commerce',
    'Indo French Chamber of Commerce',
    'Indian Space Association (since 2021)',
    'MSME India',
    'FICCI',
    'World Air Cargo Organization (since 1996)',
    'WCA Interglobal (since 2022, ID: 98952)',
  ];

  return (
    <section className="sec">
      <div className="why-grid">
        <div className="wy-l sr-l">
          <div className="chip">Why Robinsons</div>
          <h2 className="sec-title">
            The Case for <span className="hl">Partnership</span>
          </h2>
          <div className="why-list">
            {reasons.map((reason, idx) => (
              <div key={idx} className="wr">
                <div className="wr-num">{reason.num}</div>
                <div className="wr-body">
                  <div className="wr-ttl">{reason.title}</div>
                  <div className="wr-txt">{reason.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="wy-r sr-r">
          <div className="chip">Our Associations</div>
          <h2 className="sec-title">
            Industry <span className="hl">Memberships</span>
          </h2>
          <div className="assoc-grid sr d1">
            {associations.map((assoc, idx) => (
              <div key={idx} className="ag">
                <div className="ag-name">{assoc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRobinsons;