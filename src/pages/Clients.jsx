import React, { useState } from 'react';

const Clients = () => {
  const [activeTab, setActiveTab] = useState('lux');

  const tabs = [
    { id: 'lux', label: 'Luxury' },
    { id: 'auto', label: 'Automotive & Eng.' },
    { id: 'aero', label: 'Aerospace & Defense' },
    { id: 'pharma', label: 'Pharma & Biotech' },
    { id: 'other', label: 'Others' },
  ];

  const clientData = {
    lux: ['ROLEX', 'BVLGARI', 'CARTIER', 'CHOPARD GENÈVE', 'BREITLING 1884', 'ETHOS WATCH', 'RIMOWA', 'FRANCK MULLER', 'RICHEMONT', '+More Luxury'],
    auto: ['TIMKEN', 'WIPRO INFRA ENG.', 'HILTI', 'MARUTI SUZUKI', 'BERGEN PIPE', 'ANDRITZ', 'RICE LAKE', 'ASHIRVAD PIPES', 'HAGER', 'OERLIKON BALZERS'],
    aero: ['FOXCONN', 'PEGATRON', 'TATA ELECTRONICS', 'PIXXEL', 'GALAXEYE', 'DHRUVA SPACE', 'PARAS DEFENCE', 'NAVAL GROUP', 'DIGANTARA', 'ETHEREAL X'],
    pharma: ['AUROBINDO', 'TRANSASIA', 'CIPLA', 'UNICEF', 'MEDREICH', 'BIOCON', 'VIATRIS', 'WORLD HEALTH ORG.', 'MEIJI GROUP', '+More'],
    other: ['NEILSOFT', 'SOGEFI GROUP', 'LENSKART', 'ADVIK HI-TECH', 'POTAIN', 'SÉCHERON', 'MEPHISTO', 'CLYDE INDUSTRIES', 'AVANTOR', 'TARA RELAYS'],
  };

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .clients-section {
          padding: 60px 24px;
          background: #ffffff;
          font-family: 'Poppins',sans-serif;
        }
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .chip {
          display: inline-block;
          background: #eef2ff;
          color: #0b2e3e;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 30px;
          margin-bottom: 1rem;
        }
        .sec-title {
          font-size: 2rem;
          font-weight: 700;
          color: #0b2e3e;
          margin: 0;
        }
        .sec-title .hl {
          color: #6a9b5a;
        }

        /* Tabs */
        .tab-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
        }
        .tab-btn {
          background: transparent;
          border: none;
          padding: 10px 24px;
          font-size: 1rem;
          font-weight: 600;
          color: #4a627a;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 40px;
          position: relative;
        }
        .tab-btn:hover {
          color: #0b2e3e;
          background: #f0f4f9;
        }
        .tab-btn.active {
          color: #0b2e3e;
          background: #e6edf5;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 20%;
          width: 60%;
          height: 2px;
          background: #6a9b5a;
          border-radius: 2px;
        }

        /* Client grid */
        .client-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 20px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .client-card {
          background: white;
          border: 1px solid #eef2f5;
          border-radius: 16px;
          padding: 20px 12px;
          text-align: center;
          transition: all 0.25s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
          cursor: default;
        }
        .client-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 20px -12px rgba(0,0,0,0.1);
          border-color: #dce5ec;
          background: #fefefe;
        }
        .client-card span {
          font-size: 0.95rem;
          font-weight: 500;
          color: #1a2a3a;
          letter-spacing: -0.01em;
        }

        /* Panel animation */
        .cpanel {
          transition: opacity 0.2s ease;
        }
        .cpanel.on {
          display: block;
        }
        .cpanel:not(.on) {
          display: none;
        }

        @media (max-width: 768px) {
          .clients-section {
            padding: 40px 20px;
          }
          .sec-title {
            font-size: 1.8rem;
          }
          .tab-bar {
            gap: 8px;
          }
          .tab-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
          .client-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 16px;
          }
          .client-card {
            padding: 16px 8px;
          }
        }
        @media (max-width: 480px) {
          .client-grid {
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          }
        }
      `}</style>

      <section className="clients-section">
        <div className="section-header">
          <div className="chip">Trusted By</div>
          <h2 className="sec-title">
            Clients Across <span className="hl">Every Sector</span>
          </h2>
        </div>

        <div className="tab-bar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cpanel ${activeTab === tab.id ? 'on' : ''}`}
          >
            <div className="client-grid">
              {clientData[tab.id].map((client, idx) => (
                <div key={idx} className="client-card">
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Clients;