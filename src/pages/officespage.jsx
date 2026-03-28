import React from 'react';

const OfficesPage = () => {
  const offices = [
    {
      city: 'Mumbai — HQ',
      addr: '15/17 Adi Marzban Path, Canara Bank Building 1st Floor, Ballard Estate, Mumbai – 400001',
      tel: '+91 (22) 6288 7777',
      email: 'info@robinsonsglobal.com',
      isHq: true,
    },
    {
      city: 'New Delhi',
      addr: '249/1 & 250/1A, Ground Floor, Mahipalpur Extension, National Highway No. 8, New Delhi – 110037',
      tel: '+91 11 4660 3700',
    },
    {
      city: 'Bengaluru',
      addr: 'HAL Airport Extension Road, Bengaluru – 560017, Karnataka',
      tel: '+91 80 2522 9824',
    },
    {
      city: 'Chennai',
      addr: 'No. 5/5A, 3rd Floor Wellingdon Estate, No. 24 Commander-in-Chief Road, Chennai – 600105',
      tel: '+91 98416 33408',
    },
    {
      city: 'Hyderabad',
      addr: '2B, 2nd Floor, Lumbini Arcade, Airport Road, Begumpet, Hyderabad – 500016',
      tel: '+91 40 2776 7799',
    },
    {
      city: 'Pune',
      addr: '341, Clover Centre, D-1 Wing, 3rd Floor, 7 Moledina Road, Pune – 411001',
      tel: '+91 80079 93200',
    },
    {
      city: 'Kolkata',
      addr: 'Azimganj House, 2nd Floor, Room 205, 7 Camac Street, Kolkata – 700017',
      tel: '+91 33 2282 3751',
    },
    {
      city: 'Ahmedabad',
      addr: 'Unit No. 7, 2nd Floor, Sakar III, Off High Court Road, Ahmedabad – 380009',
      tel: '+91 79 2754 1204',
    },
    {
      city: 'Kochi',
      addr: 'G.A. Building, 48/1717 C, Deshabhimani Road, Elamakara, Kochi – 682206',
      tel: '+91 80783 3751',
    },
    {
      city: 'Tuticorin',
      addr: 'No. 4, First Floor, Chidambaranagar, 2nd Street West, Tuticorin – 628008',
      tel: '+91 99940 36263',
    },
    {
      city: 'Mumbai Ops.',
      addr: 'Adarsh Industrial Estate, Unit No. 4 & 5, Sahar Road Chakala, Andheri (East), Mumbai – 400099',
      tel: '+91 22 6230 7222',
    },
    {
      city: '+ More Cities',
      addr: 'Jaipur · Tirupur · Aurangabad · Nasik · Ludhiana · Baroda + 2 back offices for 24/7 support',
      isMore: true,
    },
  ];

  return (
    <>
      <style>{`
        .offices-page {
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #1a2a3a;
          background: #ffffff;
          line-height: 1.5;
        }

        /* Hero section */
        .offices-hero {
          background: linear-gradient(135deg, #0b2e3e 0%, #1b4d6e 100%);
          color: white;
          padding: 100px 24px 80px;
          text-align: center;
          margin-top: 62px;
        }
        @media (max-width: 768px) {
          .offices-hero {
            margin-top: 56px;
            padding: 80px 20px 60px;
          }
        }
        .offices-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .offices-hero .tagline {
          font-size: 1.5rem;
          font-weight: 400;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }
        .offices-hero .description {
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

        /* Offices grid */
        .offices-section {
          padding: 80px 0;
          background: #fff;
        }
        .off-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 40px;
        }
        .office-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #eef2f6;
        }
        .office-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.1);
        }
        .office-card.hq {
          background: linear-gradient(135deg, #0b2e3e 0%, #1b4d6e 100%);
          color: white;
          border: none;
        }
        .office-card.more {
          background: linear-gradient(135deg, #6a9b5a, #8cb27f);
          color: white;
          border: none;
        }
        .office-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .office-card.hq h3::before {
          content: '⭐';
          font-size: 1rem;
        }
        .office-card.more h3::before {
          content: '📍';
          font-size: 1rem;
        }
        .office-address {
          font-size: 0.85rem;
          line-height: 1.5;
          margin-bottom: 0.75rem;
          color: #4a627a;
        }
        .office-card.hq .office-address,
        .office-card.more .office-address {
          color: rgba(255,255,255,0.8);
        }
        .office-detail {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          margin-top: 0.5rem;
          color: #6a9b5a;
        }
        .office-card.hq .office-detail,
        .office-card.more .office-detail {
          color: rgba(255,255,255,0.9);
        }
        .office-detail i {
          font-style: normal;
          font-weight: 500;
        }
        .office-icon {
          font-size: 1rem;
          min-width: 20px;
        }

        @media (max-width: 768px) {
          .offices-hero h1 {
            font-size: 2.2rem;
          }
          .offices-hero .tagline {
            font-size: 1.2rem;
          }
          .offices-section {
            padding: 60px 20px;
          }
          .off-grid {
            gap: 24px;
          }
          .office-card {
            padding: 1.25rem;
          }
          .office-card h3 {
            font-size: 1.1rem;
          }
        }
        @media (max-width: 480px) {
          .offices-hero h1 {
            font-size: 1.8rem;
          }
          .off-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="offices-page">
        <div className="offices-hero">
          <div className="container">
            <h1>Our Offices</h1>
            <div className="tagline">Strategically Located Across India</div>
            <div className="description">
              With 15 offices and a nationwide network, we ensure direct contact and 24/7 support for our clients. From Mumbai to Tirupur, our team is always close to your business.
            </div>
          </div>
        </div>

        <div className="offices-section">
          <div className="container">
            <div className="off-grid">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className={`office-card ${office.isHq ? 'hq' : ''} ${office.isMore ? 'more' : ''}`}
                >
                  <h3>{office.city}</h3>
                  <div className="office-address">{office.addr}</div>
                  {office.tel && (
                    <div className="office-detail">
                      <span className="office-icon">📞</span>
                      <i>{office.tel}</i>
                    </div>
                  )}
                  {office.email && (
                    <div className="office-detail">
                      <span className="office-icon">✉️</span>
                      <i>{office.email}</i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficesPage;