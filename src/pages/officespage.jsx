// import React from 'react';

// const OfficesPage = () => {
//   const offices = [
//     {
//       city: 'Mumbai — HQ',
//       addr: '15/17 Adi Marzban Path, Canara Bank Building 1st Floor, Ballard Estate, Mumbai – 400001',
//       tel: '+91 (22) 6288 7777',
//       email: 'info@robinsonsglobal.com',
//       isHq: true,
//     },
//     {
//       city: 'New Delhi',
//       addr: '249/1 & 250/1A, Ground Floor, Mahipalpur Extension, National Highway No. 8, New Delhi – 110037',
//       tel: '+91 11 4660 3700',
//     },
//     {
//       city: 'Bengaluru',
//       addr: 'HAL Airport Extension Road, Bengaluru – 560017, Karnataka',
//       tel: '+91 80 2522 9824',
//     },
//     {
//       city: 'Chennai',
//       addr: 'No. 5/5A, 3rd Floor Wellingdon Estate, No. 24 Commander-in-Chief Road, Chennai – 600105',
//       tel: '+91 98416 33408',
//     },
//     {
//       city: 'Hyderabad',
//       addr: '2B, 2nd Floor, Lumbini Arcade, Airport Road, Begumpet, Hyderabad – 500016',
//       tel: '+91 40 2776 7799',
//     },
//     {
//       city: 'Pune',
//       addr: '341, Clover Centre, D-1 Wing, 3rd Floor, 7 Moledina Road, Pune – 411001',
//       tel: '+91 80079 93200',
//     },
//     {
//       city: 'Kolkata',
//       addr: 'Azimganj House, 2nd Floor, Room 205, 7 Camac Street, Kolkata – 700017',
//       tel: '+91 33 2282 3751',
//     },
//     {
//       city: 'Ahmedabad',
//       addr: 'Unit No. 7, 2nd Floor, Sakar III, Off High Court Road, Ahmedabad – 380009',
//       tel: '+91 79 2754 1204',
//     },
//     {
//       city: 'Kochi',
//       addr: 'G.A. Building, 48/1717 C, Deshabhimani Road, Elamakara, Kochi – 682206',
//       tel: '+91 80783 3751',
//     },
//     {
//       city: 'Tuticorin',
//       addr: 'No. 4, First Floor, Chidambaranagar, 2nd Street West, Tuticorin – 628008',
//       tel: '+91 99940 36263',
//     },
//     {
//       city: 'Mumbai Ops.',
//       addr: 'Adarsh Industrial Estate, Unit No. 4 & 5, Sahar Road Chakala, Andheri (East), Mumbai – 400099',
//       tel: '+91 22 6230 7222',
//     },
//     {
//       city: '+ More Cities',
//       addr: 'Jaipur · Tirupur · Aurangabad · Nasik · Ludhiana · Baroda + 2 back offices for 24/7 support',
//       isMore: true,
//     },
//   ];

//   return (
//     <>
//       <style>{`
//         .offices-page {
//           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//           color: #1a2a3a;
//           background: #ffffff;
//           line-height: 1.5;
//         }

//         /* Hero section */
//         .offices-hero {
//           background: linear-gradient(135deg, #0b2e3e 0%, #1b4d6e 100%);
//           color: white;
//           padding: 100px 24px 80px;
//           text-align: center;
//           margin-top: 62px;
//         }
//         @media (max-width: 768px) {
//           .offices-hero {
//             margin-top: 56px;
//             padding: 80px 20px 60px;
//           }
//         }
//         .offices-hero h1 {
//           font-size: 3rem;
//           margin-bottom: 1rem;
//           font-weight: 700;
//           letter-spacing: -0.02em;
//         }
//         .offices-hero .tagline {
//           font-size: 1.5rem;
//           font-weight: 400;
//           opacity: 0.9;
//           margin-bottom: 1.5rem;
//         }
//         .offices-hero .description {
//           max-width: 800px;
//           margin: 0 auto;
//           font-size: 1.125rem;
//           line-height: 1.6;
//           opacity: 0.9;
//         }

//         .container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 24px;
//         }

//         /* Offices grid */
//         .offices-section {
//           padding: 80px 0;
//           background: #fff;
//         }
//         .off-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
//           gap: 32px;
//           margin-top: 40px;
//         }
//         .office-card {
//           background: white;
//           border-radius: 1.25rem;
//           padding: 1.75rem;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//           transition: all 0.3s ease;
//           border: 1px solid #eef2f6;
//           position: relative;
//           overflow: hidden;
//         }
//         .office-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.12);
//           border-color: #dce5ec;
//         }
//         .office-card.hq {
//           background: linear-gradient(135deg, #0b2e3e 0%, #1b4d6e 100%);
//           color: white;
//           border: none;
//         }
//         .office-card.more {
//           background: linear-gradient(135deg, #6a9b5a, #8cb27f);
//           color: white;
//           border: none;
//         }
//         .office-card h3 {
//           font-size: 1.4rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }
//         .office-card.hq h3::before {
//           content: '⭐';
//           font-size: 1.2rem;
//         }
//         .office-card.more h3::before {
//           content: '📍';
//           font-size: 1.2rem;
//         }
//         .office-address {
//           font-size: 0.9rem;
//           line-height: 1.5;
//           margin-bottom: 1rem;
//           color: #4a627a;
//         }
//         .office-card.hq .office-address,
//         .office-card.more .office-address {
//           color: rgba(255, 255, 255, 0.85);
//         }
//         .office-detail {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-size: 0.85rem;
//           margin-top: 0.75rem;
//           color: #6a9b5a;
//         }
//         .office-card.hq .office-detail,
//         .office-card.more .office-detail {
//           color: rgba(255, 255, 255, 0.9);
//         }
//         .office-icon {
//           font-size: 1rem;
//           min-width: 20px;
//         }
//         .office-detail i {
//           font-style: normal;
//           font-weight: 500;
//         }

//         @media (max-width: 768px) {
//           .offices-hero h1 {
//             font-size: 2.2rem;
//           }
//           .offices-hero .tagline {
//             font-size: 1.2rem;
//           }
//           .offices-section {
//             padding: 60px 20px;
//           }
//           .off-grid {
//             grid-template-columns: 1fr;
//             gap: 24px;
//           }
//           .office-card {
//             padding: 1.5rem;
//           }
//           .office-card h3 {
//             font-size: 1.25rem;
//           }
//         }
//         @media (max-width: 480px) {
//           .offices-hero h1 {
//             font-size: 1.8rem;
//           }
//           .office-card h3 {
//             font-size: 1.2rem;
//           }
//         }
//       `}</style>

//       <div className="offices-page">
//         <div className="offices-hero">
//           <div className="container">
//             <h1>Our Offices</h1>
//             <div className="tagline">Strategically Located Across India</div>
//             <div className="description">
//               With 15 offices and a nationwide network, we ensure direct contact and 24/7 support for our clients. From Mumbai to Tirupur, our team is always close to your business.
//             </div>
//           </div>
//         </div>

//         <div className="offices-section">
//           <div className="container">
//             <div className="off-grid">
//               {offices.map((office, idx) => (
//                 <div
//                   key={idx}
//                   className={`office-card ${office.isHq ? 'hq' : ''} ${office.isMore ? 'more' : ''}`}
//                 >
//                   <h3>{office.city}</h3>
//                   <div className="office-address">{office.addr}</div>
//                   {office.tel && (
//                     <div className="office-detail">
//                       <span className="office-icon">📞</span>
//                       <i>{office.tel}</i>
//                     </div>
//                   )}
//                   {office.email && (
//                     <div className="office-detail">
//                       <span className="office-icon">✉️</span>
//                       <i>{office.email}</i>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OfficesPage;



// import React, { useEffect, useRef } from 'react';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaStar, FaGlobe } from 'react-icons/fa';

// const OfficesPage = () => {
//   const offices = [
//     {
//       city: 'Mumbai — HQ',
//       addr: '15/17 Adi Marzban Path, Canara Bank Building 1st Floor, Ballard Estate, Mumbai – 400001',
//       tel: '+91 (22) 6288 7777',
//       email: 'info@robinsonsglobal.com',
//       isHq: true,
//     },
//     {
//       city: 'New Delhi',
//       addr: '249/1 & 250/1A, Ground Floor, Mahipalpur Extension, National Highway No. 8, New Delhi – 110037',
//       tel: '+91 11 4660 3700',
//     },
//     {
//       city: 'Bengaluru',
//       addr: 'HAL Airport Extension Road, Bengaluru – 560017, Karnataka',
//       tel: '+91 80 2522 9824',
//     },
//     {
//       city: 'Chennai',
//       addr: 'No. 5/5A, 3rd Floor Wellingdon Estate, No. 24 Commander-in-Chief Road, Chennai – 600105',
//       tel: '+91 98416 33408',
//     },
//     {
//       city: 'Hyderabad',
//       addr: '2B, 2nd Floor, Lumbini Arcade, Airport Road, Begumpet, Hyderabad – 500016',
//       tel: '+91 40 2776 7799',
//     },
//     {
//       city: 'Pune',
//       addr: '341, Clover Centre, D-1 Wing, 3rd Floor, 7 Moledina Road, Pune – 411001',
//       tel: '+91 80079 93200',
//     },
//     {
//       city: 'Kolkata',
//       addr: 'Azimganj House, 2nd Floor, Room 205, 7 Camac Street, Kolkata – 700017',
//       tel: '+91 33 2282 3751',
//     },
//     {
//       city: 'Ahmedabad',
//       addr: 'Unit No. 7, 2nd Floor, Sakar III, Off High Court Road, Ahmedabad – 380009',
//       tel: '+91 79 2754 1204',
//     },
//     {
//       city: 'Kochi',
//       addr: 'G.A. Building, 48/1717 C, Deshabhimani Road, Elamakara, Kochi – 682206',
//       tel: '+91 80783 3751',
//     },
//     {
//       city: 'Tuticorin',
//       addr: 'No. 4, First Floor, Chidambaranagar, 2nd Street West, Tuticorin – 628008',
//       tel: '+91 99940 36263',
//     },
//     {
//       city: 'Mumbai Ops.',
//       addr: 'Adarsh Industrial Estate, Unit No. 4 & 5, Sahar Road Chakala, Andheri (East), Mumbai – 400099',
//       tel: '+91 22 6230 7222',
//     },
//     {
//       city: '+ More Cities',
//       addr: 'Jaipur · Tirupur · Aurangabad · Nasik · Ludhiana · Baroda + 2 back offices for 24/7 support',
//       isMore: true,
//     },
//   ];

//   const cardsRef = useRef([]);
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
//     cardsRef.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });
//     return () => observer.disconnect();
//   }, []);

//   // Helper to strip non‑digits for tel: links
//   const getTelLink = (phone) => {
//     const digits = phone.replace(/\D/g, '');
//     return `tel:${digits}`;
//   };

//   return (
//     <>
//       <style>{`
//         .offices-page {
//           font-family: 'Inter', system-ui, -apple-system, sans-serif;
//           background: linear-gradient(135deg, #f9fafc 0%, #ffffff 100%);
//           overflow-x: hidden;
//         }

//         .offices-hero {
//           position: relative;
//           background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
//           color: white;
//           padding: 20px 24px 60px;
//           text-align: center;
//           overflow: hidden;
//           margin-top: 62px;
//         }
//         .offices-hero::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
//           background-repeat: repeat;
//           background-size: 40px;
//           opacity: 0.2;
//           pointer-events: none;
//         }
//         .offices-hero::after {
//           content: '';
//           position: absolute;
//           bottom: -80px;
//           left: -80px;
//           width: 300px;
//           height: 300px;
//           background: radial-gradient(circle, rgba(106,155,90,0.2), transparent 70%);
//           border-radius: 50%;
//           filter: blur(60px);
//         }
//         .hero-content {
//           position: relative;
//           z-index: 2;
//           max-width: 800px;
//           margin: 0 auto;
//         }
//         .hero-content h1 {
//           font-size: 2.8rem;
//           font-weight: 800;
//           letter-spacing: -0.02em;
//           margin-bottom: 0.75rem;
//           animation: fadeUp 0.8s ease;
//         }
//         .hero-tagline {
//           font-size: 1.2rem;
//           font-weight: 400;
//           opacity: 0.95;
//           margin-bottom: 1rem;
//           animation: fadeUp 0.8s ease 0.1s both;
//         }
//         .hero-description {
//           font-size: 1rem;
//           line-height: 1.5;
//           max-width: 620px;
//           margin: 0 auto;
//           opacity: 0.9;
//           animation: fadeUp 0.8s ease 0.2s both;
//         }
//         .hero-stats {
//           display: flex;
//           justify-content: center;
//           gap: 1.5rem;
//           margin-top: 1.5rem;
//           flex-wrap: wrap;
//           animation: fadeUp 0.8s ease 0.3s both;
//         }
//         .stat {
//           background: rgba(255,255,255,0.1);
//           backdrop-filter: blur(4px);
//           padding: 0.4rem 1.2rem;
//           border-radius: 40px;
//           font-weight: 500;
//           font-size: 0.85rem;
//         }

//         .container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 24px;
//         }

//         .offices-section {
//           padding: 60px 0 80px;
//         }
//         .off-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
//           gap: 32px;
//         }
//         .office-card {
//           background: white;
//           border-radius: 1.5rem;
//           padding: 1.8rem;
//           transition: all 0.35s cubic-bezier(0.2, 0, 0, 1);
//           border: 1px solid rgba(0,0,0,0.05);
//           box-shadow: 0 10px 25px -8px rgba(0,0,0,0.05);
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s, border-color 0.2s;
//           position: relative;
//           overflow: hidden;
//         }
//         .office-card.card-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .office-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 25px 40px -12px rgba(0,0,0,0.2);
//           border-color: rgba(106,155,90,0.3);
//         }
//         .office-card::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           border-radius: 1.5rem;
//           padding: 2px;
//           background: linear-gradient(135deg, transparent 30%, #6a9b5a, #C9A24D);
//           mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//           -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           opacity: 0;
//           transition: opacity 0.3s;
//           pointer-events: none;
//         }
//         .office-card:hover::after {
//           opacity: 1;
//         }

//         .office-card.hq {
//           background: linear-gradient(135deg, #0b2e3e 0%, #1b4d6e 100%);
//           color: white;
//           border: none;
//         }
//         .office-card.more {
//           background: linear-gradient(135deg, #6a9b5a 0%, #8cb27f 100%);
//           color: white;
//           border: none;
//         }
//         .office-card.hq::after, .office-card.more::after {
//           background: linear-gradient(135deg, #fff, #C9A24D);
//         }

//         .card-header {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 1.2rem;
//         }
//         .card-header h3 {
//           font-size: 1.5rem;
//           font-weight: 700;
//           letter-spacing: -0.01em;
//           margin: 0;
//         }
//         .hq-icon, .more-icon {
//           font-size: 1.3rem;
//         }
//         .office-address {
//           font-size: 0.9rem;
//           line-height: 1.55;
//           margin-bottom: 1.2rem;
//           color: #2c3e4e;
//         }
//         .office-card.hq .office-address,
//         .office-card.more .office-address {
//           color: rgba(255,255,255,0.85);
//         }
//         .office-detail {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           font-size: 0.85rem;
//           margin-top: 0.7rem;
//           color: #6a9b5a;
//           font-weight: 500;
//         }
//         .office-card.hq .office-detail,
//         .office-card.more .office-detail {
//           color: rgba(255,255,255,0.9);
//         }
//         .office-detail svg {
//           flex-shrink: 0;
//         }
//         /* Clickable link styles */
//         .clickable-link {
//           color: inherit;
//           text-decoration: none;
//           transition: opacity 0.2s;
//           cursor: pointer;
//         }
//         .clickable-link:hover {
//           text-decoration: underline;
//           opacity: 0.85;
//         }
//         .office-card.hq .clickable-link,
//         .office-card.more .clickable-link {
//           color: inherit;
//         }

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

//         @media (max-width: 968px) {
//           .offices-hero {
//             padding: 60px 20px 50px;
//             margin-top: 56px;
//           }
//           .hero-content h1 {
//             font-size: 2.2rem;
//           }
//           .hero-tagline {
//             font-size: 1rem;
//           }
//           .hero-description {
//             font-size: 0.9rem;
//           }
//           .off-grid {
//             gap: 24px;
//           }
//           .office-card {
//             padding: 1.5rem;
//           }
//           .card-header h3 {
//             font-size: 1.3rem;
//           }
//         }
//         @media (max-width: 640px) {
//           .offices-hero {
//             padding: 50px 16px 40px;
//           }
//           .hero-content h1 {
//             font-size: 1.8rem;
//           }
//           .hero-stats {
//             gap: 0.8rem;
//             margin-top: 1rem;
//           }
//           .stat {
//             padding: 0.3rem 0.8rem;
//             font-size: 0.7rem;
//           }
//           .off-grid {
//             grid-template-columns: 1fr;
//           }
//           .offices-section {
//             padding: 40px 0 60px;
//           }
//         }
//       `}</style>

//       <div className="offices-page">
//         <div className="offices-hero">
//           <div className="hero-content">
//             <h1>Our Offices</h1>
//             <div className="hero-tagline">Strategically Located Across India</div>
//             <div className="hero-description">
//               With 15 offices and a nationwide network, we ensure direct contact and 24/7 support for our clients.
//               From Mumbai to Tirupur, our team is always close to your business.
//             </div>
//             <div className="hero-stats">
//               <div className="stat">📍 15+ Locations</div>
//               <div className="stat">🚚 24/7 Logistics Support</div>
//               <div className="stat">⭐ 40+ Years of Trust</div>
//             </div>
//           </div>
//         </div>

//         <div className="offices-section">
//           <div className="container">
//             <div className="off-grid">
//               {offices.map((office, idx) => (
//                 <div
//                   key={idx}
//                   className={`office-card ${office.isHq ? 'hq' : ''} ${office.isMore ? 'more' : ''}`}
//                   ref={(el) => (cardsRef.current[idx] = el)}
//                 >
//                   <div className="card-header">
//                     {office.isHq && <FaStar className="hq-icon" color="#C9A24D" />}
//                     {office.isMore && <FaGlobe className="more-icon" />}
//                     {!office.isHq && !office.isMore && <FaMapMarkerAlt color="#e53e3e" size={20} />}
//                     <h3>{office.city}</h3>
//                   </div>
//                   <div className="office-address">{office.addr}</div>
//                   {office.tel && (
//                     <div className="office-detail">
//                       <FaPhoneAlt size={14} />
//                       <a href={getTelLink(office.tel)} className="clickable-link">
//                         {office.tel}
//                       </a>
//                     </div>
//                   )}
//                   {office.email && (
//                     <div className="office-detail">
//                       <FaEnvelope size={14} />
//                       <a href={`mailto:${office.email}`} className="clickable-link">
//                         {office.email}
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OfficesPage;


import React, { useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaStar, FaGlobe } from 'react-icons/fa';

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

  const cardsRef = useRef([]);
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
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  // Helper to strip non‑digits for tel: links
  const getTelLink = (phone) => {
    const digits = phone.replace(/\D/g, '');
    return `tel:${digits}`;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .offices-page {
          font-family: 'Poppins', system-ui, -apple-system, sans-serif;
          background: linear-gradient(135deg, #f9fafc 0%, #ffffff 100%);
          overflow-x: hidden;
        }

        /* Hero Section (matches Aboutus & ClientPage) */
        .offices-hero {
          position: relative;
          background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
          color: white;
          padding: 40px 24px 100px;
          text-align: center;
          margin-top: 52px;
          overflow: hidden;
        }
        .offices-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 40px;
          opacity: 0.2;
          pointer-events: none;
        }
        .offices-hero::after {
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
        }

        .chip {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 30px;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          animation: fadeUp 0.8s ease;
        }

        .hero-content h1 {
          font-size: 4rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          text-shadow: 0 2px 10px rgba(0,0,0,0.1);
          animation: fadeUp 0.8s ease 0.1s both;
        }

        .hero-tagline {
          font-size: 1.8rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          opacity: 0.95;
          animation: fadeUp 0.8s ease 0.2s both;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          background: rgba(0,0,0,0.15);
          padding: 1.2rem 2rem;
          border-radius: 60px;
          backdrop-filter: blur(4px);
          font-weight: 400;
          animation: fadeUp 0.8s ease 0.3s both;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
          flex-wrap: wrap;
          animation: fadeUp 0.8s ease 0.4s both;
        }

        .stat {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          padding: 0.4rem 1.2rem;
          border-radius: 40px;
          font-weight: 500;
          font-size: 0.9rem;
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

        /* Container & Grid */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .offices-section {
          padding: 70px 0 90px;
        }

        .off-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
        }

        /* Card Styles with green border hover */
        .office-card {
          background: white;
          border-radius: 1.5rem;
          padding: 1.8rem;
          transition: all 0.35s cubic-bezier(0.2, 0, 0, 1);
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 25px -8px rgba(0,0,0,0.05);
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s, border-color 0.2s;
          position: relative;
          overflow: hidden;
        }

        .office-card.card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hover effect: green border & glow */
        .office-card:hover {
          transform: translateY(-8px);
          border-color: #6a9b5a;
          box-shadow: 0 20px 35px -12px rgba(106, 155, 90, 0.25), 0 4px 12px rgba(0,0,0,0.05);
        }

        /* Decorative gradient border on hover (kept from original) */
        .office-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          padding: 2px;
          background: linear-gradient(135deg, transparent 30%, #6a9b5a, #C9A24D);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .office-card:hover::after {
          opacity: 1;
        }

        /* HQ & More cities cards (preserve their gradient backgrounds) */
        .office-card.hq {
          background: linear-gradient(135deg, #0b2e3e 0%, #1b4d6e 100%);
          color: white;
          border: none;
        }
        .office-card.more {
          background: linear-gradient(135deg, #6a9b5a 0%, #8cb27f 100%);
          color: white;
          border: none;
        }
        .office-card.hq::after, .office-card.more::after {
          background: linear-gradient(135deg, #fff, #C9A24D);
        }

        /* Keep existing interior styles */
        .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.2rem;
        }
        .card-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .hq-icon, .more-icon {
          font-size: 1.3rem;
        }
        .office-address {
          font-size: 0.9rem;
          line-height: 1.55;
          margin-bottom: 1.2rem;
          color: #2c3e4e;
        }
        .office-card.hq .office-address,
        .office-card.more .office-address {
          color: rgba(255,255,255,0.85);
        }
        .office-detail {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          margin-top: 0.7rem;
          color: #6a9b5a;
          font-weight: 500;
        }
        .office-card.hq .office-detail,
        .office-card.more .office-detail {
          color: rgba(255,255,255,0.9);
        }
        .office-detail svg {
          flex-shrink: 0;
        }
        .clickable-link {
          color: inherit;
          text-decoration: none;
          transition: opacity 0.2s;
          cursor: pointer;
        }
        .clickable-link:hover {
          text-decoration: underline;
          opacity: 0.85;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .offices-hero {
            padding: 100px 20px 80px;
            margin-top: 56px;
          }
          .hero-content h1 {
            font-size: 2.8rem;
          }
          .hero-tagline {
            font-size: 1.3rem;
          }
          .hero-description {
            font-size: 1rem;
            padding: 1rem;
            border-radius: 32px;
          }
          .off-grid {
            gap: 24px;
          }
          .office-card {
            padding: 1.5rem;
          }
          .card-header h3 {
            font-size: 1.3rem;
          }
        }
        @media (max-width: 640px) {
          .offices-hero {
            padding: 80px 16px 60px;
          }
          .hero-content h1 {
            font-size: 2.2rem;
          }
          .hero-tagline {
            font-size: 1.1rem;
          }
          .hero-description {
            font-size: 0.9rem;
          }
          .hero-stats {
            gap: 0.8rem;
          }
          .stat {
            padding: 0.3rem 0.8rem;
            font-size: 0.7rem;
          }
          .off-grid {
            grid-template-columns: 1fr;
          }
          .offices-section {
            padding: 50px 0 70px;
          }
        }
      `}</style>

      <div className="offices-page">
        <div className="offices-hero">
          <div className="hero-content">
            <div className="chip">Our Presence</div>
            <h1>Our Offices</h1>
            <div className="hero-tagline">Strategically Located Across India</div>
            <div className="hero-description">
              With 15 offices and a nationwide network, we ensure direct contact and 24/7 support for our clients.
              From Mumbai to Tirupur, our team is always close to your business.
            </div>
            <div className="hero-stats">
              <div className="stat">📍 15+ Locations</div>
              <div className="stat">🚚 24/7 Logistics Support</div>
              <div className="stat">⭐ 40+ Years of Trust</div>
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
                  ref={(el) => (cardsRef.current[idx] = el)}
                >
                  <div className="card-header">
                    {office.isHq && <FaStar className="hq-icon" color="#C9A24D" />}
                    {office.isMore && <FaGlobe className="more-icon" />}
                    {!office.isHq && !office.isMore && <FaMapMarkerAlt color="#e53e3e" size={20} />}
                    <h3>{office.city}</h3>
                  </div>
                  <div className="office-address">{office.addr}</div>
                  {office.tel && (
                    <div className="office-detail">
                      <FaPhoneAlt size={14} />
                      <a href={getTelLink(office.tel)} className="clickable-link">
                        {office.tel}
                      </a>
                    </div>
                  )}
                  {office.email && (
                    <div className="office-detail">
                      <FaEnvelope size={14} />
                      <a href={`mailto:${office.email}`} className="clickable-link">
                        {office.email}
                      </a>
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