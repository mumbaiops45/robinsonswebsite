import React from 'react';

const Offices = () => {
  const offices = [
    { city: 'Mumbai — HQ', addr: '15/17 Adi Marzban Path, Canara Bank Building 1st Floor, Ballard Estate, Mumbai – 400001', tel: '+91 (22) 6288 7777 · info@robinsonsglobal.com', isHq: true },
    { city: 'New Delhi', addr: '249/1 & 250/1A, Ground Floor, Mahipalpur Extension, National Highway No. 8, New Delhi – 110037', tel: '+91 11 4660 3700' },
    { city: 'Bengaluru', addr: 'HAL Airport Extension Road, Bengaluru – 560017, Karnataka', tel: '+91 80 2522 9824' },
    { city: 'Chennai', addr: 'No. 5/5A, 3rd Floor Wellingdon Estate, No. 24 Commander-in-Chief Road, Chennai – 600105', tel: '+91 98416 33408' },
    { city: 'Hyderabad', addr: '2B, 2nd Floor, Lumbini Arcade, Airport Road, Begumpet, Hyderabad – 500016', tel: '+91 40 2776 7799' },
    { city: 'Pune', addr: '341, Clover Centre, D-1 Wing, 3rd Floor, 7 Moledina Road, Pune – 411001', tel: '+91 80079 93200' },
    { city: 'Kolkata', addr: 'Azimganj House, 2nd Floor, Room 205, 7 Camac Street, Kolkata – 700017', tel: '+91 33 2282 3751' },
    { city: 'Ahmedabad', addr: 'Unit No. 7, 2nd Floor, Sakar III, Off High Court Road, Ahmedabad – 380009', tel: '+91 79 2754 1204' },
    { city: 'Kochi', addr: 'G.A. Building, 48/1717 C, Deshabhimani Road, Elamakara, Kochi – 682206', tel: '+91 80783 3751' },
    { city: 'Tuticorin', addr: 'No. 4, First Floor, Chidambaranagar, 2nd Street West, Tuticorin – 628008', tel: '+91 99940 36263' },
    { city: 'Mumbai Ops.', addr: 'Adarsh Industrial Estate, Unit No. 4 & 5, Sahar Road Chakala, Andheri (East), Mumbai – 400099', tel: '+91 22 6230 7222' },
    { city: '+ More Cities', addr: 'Jaipur · Tirupur · Aurangabad · Nasik · Ludhiana · Baroda + 2 back offices for 24/7 support', isMore: true },
  ];

  return (
    <>
      <style>{`
        /* Responsive adjustments for offices section */
        @media (max-width: 1100px) {
          .off-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .off-grid {
            grid-template-columns: 1fr !important;
          }
          .sec {
            padding: 48px 20px;
          }
        }

        @media (max-width: 480px) {
          .oc {
            padding: 18px 16px;
          }
          .oc-city {
            font-size: 0.8rem;
          }
          .oc-addr {
            font-size: 0.7rem;
          }
          .oc-tel {
            font-size: 0.65rem;
          }
        }
      `}</style>

      <section id="offices" className="sec">
        <div className="section-header">
          <div className="chip">Our Network</div>
          <h2 className="sec-title">
            15 Offices Across <span className="hl">India</span>
          </h2>
          <p className="sec-sub">
            Strategically located offices enabling direct contact and 24/7 support for clients nationwide.
          </p>
        </div>
        <div className="off-grid sr d2">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className={`oc ${office.isHq ? 'oc-hq' : ''} ${office.isMore ? 'oc-more' : ''}`}
            >
              <div className="oc-city">{office.city}</div>
              <div className="oc-addr">{office.addr}</div>
              {office.tel && <div className="oc-tel">{office.tel}</div>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Offices;