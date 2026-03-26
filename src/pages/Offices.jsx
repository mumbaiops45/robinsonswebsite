// // // import React from 'react';
// // // import './Offices.css';

// // // const Offices = () => {
// // //   const offices = [
// // //     {
// // //       city: 'Mumbai — HQ',
// // //       address: '15/17 Adi Marzban Path, Canara Bank Building 1st Floor, Ballard Estate, Mumbai – 400001',
// // //       phone: '+91 (22) 6288 7777 · info@robinsonsglobal.com',
// // //       isHq: true,
// // //     },
// // //     {
// // //       city: 'New Delhi',
// // //       address: '249/1 & 250/1A, Ground Floor, Mahipalpur Extension, National Highway No. 8, New Delhi – 110037',
// // //       phone: '+91 11 4660 3700',
// // //       isHq: false,
// // //     },
// // //     {
// // //       city: 'Bengaluru',
// // //       address: 'HAL Airport Extension Road, Bengaluru – 560017, Karnataka',
// // //       phone: '+91 80 2522 9824',
// // //       isHq: false,
// // //     },
// // //     {
// // //       city: 'Chennai',
// // //       address: 'No. 5/5A, 3rd Floor Wellingdon Estate, No. 24 Commander-in-Chief Road, Chennai – 600105',
// // //       phone: '+91 98416 33408',
// // //       isHq: false,
// // //     },
// // //     {
// // //       city: 'Hyderabad',
// // //       address: '2B, 2nd Floor, Lumbini Arcade, Airport Road, Begumpet, Hyderabad – 500016',
// // //       phone: '+91 40 2776 7799',
// // //       isHq: false,
// // //     },
// // //     {
// // //       city: 'Pune',
// // //       address: '341, Clover Centre, D-1 Wing, 3rd Floor, 7 Moledina Road, Pune – 411001',
// // //       phone: '+91 80079 93200',
// // //       isHq: false,
// // //     },
// // //     {
// // //       city: 'Kolkata',
// // //       address: 'Azimganj House, 2nd Floor, Room 205, 7 Camac Street, Kolkata – 700017',
// // //       phone: '+91 33 2282 3751',
// // //       isHq: false,
// // //     },
// // //     {
// // //       city: 'Ahmedabad',
// // //       address: 'Unit No. 7, 2nd Floor, Sakar III, Off High Court Road, Ahmedabad – 380009',
// // //       phone: '+91 79 2754 1204',
// // //       isHq: false,
// // //     },
// // //     {
// // //       city: 'Kochi',
// // //       address: 'G.A. Building, 48/1717 C, Deshabhimani Road, Elamakara, Kochi – 682206',
// // //       phone: '+91 80783 3751',
// // //       isHq: false,
// // //     },
// // //     {
// // //       city: 'Tuticorin',
// // //       address: 'No. 4, First Floor, Chidambaranagar, 2nd Street West, Tuticorin – 628008',
// // //       phone: '+91 99940 36263',
// // //       isHq: false,
// // //     },
// // //     {
// // //       city: 'Mumbai Ops.',
// // //       address: 'Adarsh Industrial Estate, Unit No. 4 & 5, Sahar Road Chakala, Andheri (East), Mumbai – 400099',
// // //       phone: '+91 22 6230 7222',
// // //       isHq: false,
// // //     },
// // //     {
// // //       city: '+ More Cities',
// // //       address: 'Jaipur · Tirupur · Aurangabad · Nasik · Ludhiana · Baroda + 2 back offices for 24/7 support',
// // //       phone: '',
// // //       isMore: true,
// // //     },
// // //   ];

// // //   return (
// // //     <section id="offices" className="sec">
// // //       <div className="sr">
// // //         <div className="chip">Our Network</div>
// // //         <h2 className="sec-title">
// // //           15 Offices Across <span className="hl">India</span>
// // //         </h2>
// // //         <p className="sec-sub">Strategically located offices enabling direct contact and 24/7 support for clients nationwide.</p>
// // //       </div>
// // //       <div className="off-grid sr d2">
// // //         {offices.map((office, index) => (
// // //           <div
// // //             key={index}
// // //             className={`oc ${office.isHq ? 'oc-hq' : ''} ${office.isMore ? 'oc-more' : ''}`}
// // //           >
// // //             <div className="oc-city">{office.city}</div>
// // //             <div className="oc-addr">{office.address}</div>
// // //             {office.phone && <div className="oc-tel">{office.phone}</div>}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Offices;

// // // .off-grid {
// // //   display: grid;
// // //   grid-template-columns: repeat(4, 1fr);
// // //   gap: 0;
// // //   background: var(--bd);
// // //   border: 1px solid var(--bd);
// // //   margin-top: 36px;
// // // }

// // // .oc {
// // //   background: var(--w);
// // //   padding: 22px 18px;
// // //   border-right: 1px solid var(--bd);
// // //   border-bottom: 1px solid var(--bd);
// // //   transition: all 0.28s;
// // //   cursor: default;
// // //   position: relative;
// // // }

// // // .oc:hover {
// // //   background: var(--n);
// // //   z-index: 1;
// // // }

// // // .oc-city {
// // //   display: flex;
// // //   align-items: center;
// // //   gap: 6px;
// // //   font-size: 0.86rem;
// // //   font-weight: 700;
// // //   color: var(--n);
// // //   margin-bottom: 7px;
// // //   transition: color 0.28s;
// // // }

// // // .oc:hover .oc-city {
// // //   color: #fff;
// // // }

// // // .oc-city::before {
// // //   content: '';
// // //   width: 6px;
// // //   height: 6px;
// // //   border-radius: 50%;
// // //   background: var(--g3);
// // //   flex-shrink: 0;
// // //   transition: box-shadow 0.28s;
// // // }

// // // .oc:hover .oc-city::before {
// // //   box-shadow: 0 0 6px var(--g3);
// // // }

// // // .oc-addr {
// // //   font-size: 0.73rem;
// // //   color: var(--ts);
// // //   line-height: 1.6;
// // //   transition: color 0.28s;
// // // }

// // // .oc:hover .oc-addr {
// // //   color: rgba(255, 255, 255, 0.45);
// // // }

// // // .oc-tel {
// // //   font-size: 0.71rem;
// // //   color: var(--g);
// // //   font-weight: 600;
// // //   margin-top: 5px;
// // //   transition: color 0.28s;
// // // }

// // // .oc:hover .oc-tel {
// // //   color: var(--g3);
// // // }

// // // .oc-hq {
// // //   background: var(--n) !important;
// // // }

// // // .oc-hq .oc-city {
// // //   color: #fff !important;
// // // }

// // // .oc-hq .oc-addr {
// // //   color: rgba(255, 255, 255, 0.44) !important;
// // // }

// // // .oc-hq .oc-tel {
// // //   color: var(--g3) !important;
// // // }

// // // .oc-more {
// // //   background: linear-gradient(135deg, var(--g), var(--g2)) !important;
// // // }

// // // .oc-more .oc-city {
// // //   color: #fff !important;
// // // }

// // // .oc-more .oc-city::before {
// // //   background: #fff !important;
// // // }

// // // .oc-more .oc-addr {
// // //   color: rgba(255, 255, 255, 0.75) !important;
// // // }

// // import React from 'react';

// // const Offices = () => {
// //   const offices = [
// //     {
// //       city: 'Mumbai — HQ',
// //       address: '15/17 Adi Marzban Path, Canara Bank Building 1st Floor, Ballard Estate, Mumbai – 400001',
// //       phone: '+91 (22) 6288 7777 · info@robinsonsglobal.com',
// //       isHq: true,
// //     },
// //     {
// //       city: 'New Delhi',
// //       address: '249/1 & 250/1A, Ground Floor, Mahipalpur Extension, National Highway No. 8, New Delhi – 110037',
// //       phone: '+91 11 4660 3700',
// //       isHq: false,
// //     },
// //     {
// //       city: 'Bengaluru',
// //       address: 'HAL Airport Extension Road, Bengaluru – 560017, Karnataka',
// //       phone: '+91 80 2522 9824',
// //       isHq: false,
// //     },
// //     {
// //       city: 'Chennai',
// //       address: 'No. 5/5A, 3rd Floor Wellingdon Estate, No. 24 Commander-in-Chief Road, Chennai – 600105',
// //       phone: '+91 98416 33408',
// //       isHq: false,
// //     },
// //     {
// //       city: 'Hyderabad',
// //       address: '2B, 2nd Floor, Lumbini Arcade, Airport Road, Begumpet, Hyderabad – 500016',
// //       phone: '+91 40 2776 7799',
// //       isHq: false,
// //     },
// //     {
// //       city: 'Pune',
// //       address: '341, Clover Centre, D-1 Wing, 3rd Floor, 7 Moledina Road, Pune – 411001',
// //       phone: '+91 80079 93200',
// //       isHq: false,
// //     },
// //     {
// //       city: 'Kolkata',
// //       address: 'Azimganj House, 2nd Floor, Room 205, 7 Camac Street, Kolkata – 700017',
// //       phone: '+91 33 2282 3751',
// //       isHq: false,
// //     },
// //     {
// //       city: 'Ahmedabad',
// //       address: 'Unit No. 7, 2nd Floor, Sakar III, Off High Court Road, Ahmedabad – 380009',
// //       phone: '+91 79 2754 1204',
// //       isHq: false,
// //     },
// //     {
// //       city: 'Kochi',
// //       address: 'G.A. Building, 48/1717 C, Deshabhimani Road, Elamakara, Kochi – 682206',
// //       phone: '+91 80783 3751',
// //       isHq: false,
// //     },
// //     {
// //       city: 'Tuticorin',
// //       address: 'No. 4, First Floor, Chidambaranagar, 2nd Street West, Tuticorin – 628008',
// //       phone: '+91 99940 36263',
// //       isHq: false,
// //     },
// //     {
// //       city: 'Mumbai Ops.',
// //       address: 'Adarsh Industrial Estate, Unit No. 4 & 5, Sahar Road Chakala, Andheri (East), Mumbai – 400099',
// //       phone: '+91 22 6230 7222',
// //       isHq: false,
// //     },
// //     {
// //       city: '+ More Cities',
// //       address: 'Jaipur · Tirupur · Aurangabad · Nasik · Ludhiana · Baroda + 2 back offices for 24/7 support',
// //       phone: '',
// //       isMore: true,
// //     },
// //   ];

// //   return (
// //     <section id="offices" className="sec">
// //       <div className="sr">
// //         <div className="chip">Our Network</div>
// //         <h2 className="sec-title">
// //           15 Offices Across <span className="hl">India</span>
// //         </h2>
// //         <p className="sec-sub">Strategically located offices enabling direct contact and 24/7 support for clients nationwide.</p>
// //       </div>
// //       <div className="off-grid sr d2">
// //         {offices.map((office, index) => (
// //           <div
// //             key={index}
// //             className={`oc ${office.isHq ? 'oc-hq' : ''} ${office.isMore ? 'oc-more' : ''}`}
// //           >
// //             <div className="oc-city">{office.city}</div>
// //             <div className="oc-addr">{office.address}</div>
// //             {office.phone && <div className="oc-tel">{office.phone}</div>}
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Offices;

// // // Inject styles into document head
// // if (typeof document !== 'undefined') {
// //   const styleSheet = document.createElement("style");
// //   styleSheet.textContent = `
// //     .off-grid {
// //       display: grid;
// //       grid-template-columns: repeat(4, 1fr);
// //       gap: 0;
// //       background: var(--bd);
// //       border: 1px solid var(--bd);
// //       margin-top: 36px;
// //     }

// //     .oc {
// //       background: var(--w);
// //       padding: 22px 18px;
// //       border-right: 1px solid var(--bd);
// //       border-bottom: 1px solid var(--bd);
// //       transition: all 0.28s;
// //       cursor: default;
// //       position: relative;
// //     }

// //     .oc:hover {
// //       background: var(--n);
// //       z-index: 1;
// //     }

// //     .oc-city {
// //       display: flex;
// //       align-items: center;
// //       gap: 6px;
// //       font-size: 0.86rem;
// //       font-weight: 700;
// //       color: var(--n);
// //       margin-bottom: 7px;
// //       transition: color 0.28s;
// //     }

// //     .oc:hover .oc-city {
// //       color: #fff;
// //     }

// //     .oc-city::before {
// //       content: '';
// //       width: 6px;
// //       height: 6px;
// //       border-radius: 50%;
// //       background: var(--g3);
// //       flex-shrink: 0;
// //       transition: box-shadow 0.28s;
// //     }

// //     .oc:hover .oc-city::before {
// //       box-shadow: 0 0 6px var(--g3);
// //     }

// //     .oc-addr {
// //       font-size: 0.73rem;
// //       color: var(--ts);
// //       line-height: 1.6;
// //       transition: color 0.28s;
// //     }

// //     .oc:hover .oc-addr {
// //       color: rgba(255, 255, 255, 0.45);
// //     }

// //     .oc-tel {
// //       font-size: 0.71rem;
// //       color: var(--g);
// //       font-weight: 600;
// //       margin-top: 5px;
// //       transition: color 0.28s;
// //     }

// //     .oc:hover .oc-tel {
// //       color: var(--g3);
// //     }

// //     .oc-hq {
// //       background: var(--n) !important;
// //     }

// //     .oc-hq .oc-city {
// //       color: #fff !important;
// //     }

// //     .oc-hq .oc-addr {
// //       color: rgba(255, 255, 255, 0.44) !important;
// //     }

// //     .oc-hq .oc-tel {
// //       color: var(--g3) !important;
// //     }

// //     .oc-more {
// //       background: linear-gradient(135deg, var(--g), var(--g2)) !important;
// //     }

// //     .oc-more .oc-city {
// //       color: #fff !important;
// //     }

// //     .oc-more .oc-city::before {
// //       background: #fff !important;
// //     }

// //     .oc-more .oc-addr {
// //       color: rgba(255, 255, 255, 0.75) !important;
// //     }

// //     @media (max-width: 1100px) {
// //       .off-grid {
// //         grid-template-columns: repeat(2, 1fr);
// //       }
// //     }
// //   `;
// //   document.head.appendChild(styleSheet);
// // }
// // src/components/Home/Offices.jsx



// import React from 'react';

// const Offices = () => {
//   const offices = [
//     { city: 'Mumbai — HQ', addr: '15/17 Adi Marzban Path, Canara Bank Building 1st Floor, Ballard Estate, Mumbai – 400001', tel: '+91 (22) 6288 7777 · info@robinsonsglobal.com', isHq: true },
//     { city: 'New Delhi', addr: '249/1 & 250/1A, Ground Floor, Mahipalpur Extension, National Highway No. 8, New Delhi – 110037', tel: '+91 11 4660 3700' },
//     { city: 'Bengaluru', addr: 'HAL Airport Extension Road, Bengaluru – 560017, Karnataka', tel: '+91 80 2522 9824' },
//     { city: 'Chennai', addr: 'No. 5/5A, 3rd Floor Wellingdon Estate, No. 24 Commander-in-Chief Road, Chennai – 600105', tel: '+91 98416 33408' },
//     { city: 'Hyderabad', addr: '2B, 2nd Floor, Lumbini Arcade, Airport Road, Begumpet, Hyderabad – 500016', tel: '+91 40 2776 7799' },
//     { city: 'Pune', addr: '341, Clover Centre, D-1 Wing, 3rd Floor, 7 Moledina Road, Pune – 411001', tel: '+91 80079 93200' },
//     { city: 'Kolkata', addr: 'Azimganj House, 2nd Floor, Room 205, 7 Camac Street, Kolkata – 700017', tel: '+91 33 2282 3751' },
//     { city: 'Ahmedabad', addr: 'Unit No. 7, 2nd Floor, Sakar III, Off High Court Road, Ahmedabad – 380009', tel: '+91 79 2754 1204' },
//     { city: 'Kochi', addr: 'G.A. Building, 48/1717 C, Deshabhimani Road, Elamakara, Kochi – 682206', tel: '+91 80783 3751' },
//     { city: 'Tuticorin', addr: 'No. 4, First Floor, Chidambaranagar, 2nd Street West, Tuticorin – 628008', tel: '+91 99940 36263' },
//     { city: 'Mumbai Ops.', addr: 'Adarsh Industrial Estate, Unit No. 4 & 5, Sahar Road Chakala, Andheri (East), Mumbai – 400099', tel: '+91 22 6230 7222' },
//     { city: '+ More Cities', addr: 'Jaipur · Tirupur · Aurangabad · Nasik · Ludhiana · Baroda + 2 back offices for 24/7 support', isMore: true },
//   ];

//   return (
//     <section id="offices" className="sec">
//       <div className="sr">
//         <div className="chip">Our Network</div>
//         <h2 className="sec-title">
//           15 Offices Across <span className="hl">India</span>
//         </h2>
//         <p className="sec-sub">Strategically located offices enabling direct contact and 24/7 support for clients nationwide.</p>
//       </div>
//       <div className="off-grid sr d2">
//         {offices.map((office, idx) => (
//           <div
//             key={idx}
//             className={`oc ${office.isHq ? 'oc-hq' : ''} ${office.isMore ? 'oc-more' : ''}`}
//           >
//             <div className="oc-city">{office.city}</div>
//             <div className="oc-addr">{office.addr}</div>
//             {office.tel && <div className="oc-tel">{office.tel}</div>}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Offices;

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