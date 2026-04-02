// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, 
//   FaPaperPlane, FaCheckCircle, FaBuilding, FaGlobe 
// } from 'react-icons/fa';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const sectionRef = useRef(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fade-up');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // Google Maps function
//   const openGoogleMaps = () => {
//     const address = encodeURIComponent(
//       "Robinsons Cargo and Logistics Pvt Ltd, 15/17 Adi Marzban Path, Canara Bank Building 1st Floor, Ballard Estate, Mumbai 400001, India"
//     );
//     window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
//   };

//   const validateField = (name, value) => {
//     switch (name) {
//       case 'firstName':
//         if (!value.trim()) return 'First name is required';
//         if (value.trim().length < 2) return 'Must be at least 2 characters';
//         if (!/^[A-Za-z\s]+$/.test(value.trim())) return 'Only letters and spaces';
//         return '';
//       case 'lastName':
//         if (!value.trim()) return 'Last name is required';
//         if (value.trim().length < 2) return 'Must be at least 2 characters';
//         if (!/^[A-Za-z\s]+$/.test(value.trim())) return 'Only letters and spaces';
//         return '';
//       case 'email':
//         if (!value.trim()) return 'Email is required';
//         const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
//         if (!emailRegex.test(value.trim())) return 'Enter a valid email address';
//         return '';
//       case 'phone':
//         const digits = value.replace(/\D/g, '');
//         if (!digits) return 'Phone number is required';
//         if (digits.length !== 10) return 'Must be exactly 10 digits';
//         return '';
//       case 'message':
//         if (!value.trim()) return 'Message is required';
//         if (value.trim().length < 10) return 'Message must be at least 10 characters';
//         return '';
//       default:
//         return '';
//     }
//   };

//   const validateAll = () => {
//     const newErrors = {};
//     Object.keys(formData).forEach(field => {
//       const error = validateField(field, formData[field]);
//       if (error) newErrors[field] = error;
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let newValue = value;
//     if (name === 'phone') {
//       newValue = value.replace(/\D/g, '').slice(0, 10);
//     }
//     setFormData(prev => ({ ...prev, [name]: newValue }));
//     if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched(prev => ({ ...prev, [name]: true }));
//     const error = validateField(name, value);
//     setErrors(prev => ({ ...prev, [name]: error }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const allTouched = {};
//     Object.keys(formData).forEach(field => { allTouched[field] = true; });
//     setTouched(allTouched);
//     if (validateAll()) {
//       setIsSubmitting(true);
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       console.log('Form submitted:', formData);
//       setSubmitSuccess(true);
//       setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
//       setErrors({});
//       setTouched({});
//       setTimeout(() => setSubmitSuccess(false), 5000);
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .contact-page {
//           font-family: 'Inter', system-ui, -apple-system, sans-serif;
//           background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
//         }

//         /* Hero */
//         .contact-hero {
//           position: relative;
//           background: linear-gradient(135deg, #0b2e3e 0%, #1b4d6e 50%, #2c6e4f 100%);
//           color: white;
//           padding: 120px 24px 100px;
//           text-align: center;
//           overflow: hidden;
//         }
//         .contact-hero::before {
//           content: '';
//           position: absolute;
//           top: -100px;
//           right: -100px;
//           width: 300px;
//           height: 300px;
//           background: rgba(255,255,255,0.1);
//           border-radius: 50%;
//           filter: blur(80px);
//         }
//         .contact-hero::after {
//           content: '';
//           position: absolute;
//           bottom: -100px;
//           left: -100px;
//           width: 300px;
//           height: 300px;
//           background: rgba(201,162,77,0.15);
//           border-radius: 50%;
//           filter: blur(80px);
//         }
//         .hero-content {
//           position: relative;
//           z-index: 2;
//           max-width: 800px;
//           margin: 0 auto;
//         }
//         .hero-content h1 {
//           font-size: 3.5rem;
//           font-weight: 800;
//           margin-bottom: 1rem;
//           letter-spacing: -0.02em;
//           animation: fadeInUp 0.8s ease;
//         }
//         .hero-content p {
//           font-size: 1.25rem;
//           opacity: 0.95;
//           margin-bottom: 1.5rem;
//           animation: fadeInUp 0.8s ease 0.1s both;
//         }
//         .hero-badges {
//           display: flex;
//           justify-content: center;
//           gap: 1rem;
//           flex-wrap: wrap;
//           animation: fadeInUp 0.8s ease 0.2s both;
//         }
//         .badge {
//           background: rgba(255,255,255,0.1);
//           backdrop-filter: blur(4px);
//           padding: 0.5rem 1.25rem;
//           border-radius: 40px;
//           font-size: 0.875rem;
//           font-weight: 500;
//         }

//         /* Container */
//         .container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 24px;
//         }

//         /* Main section */
//         .contact-main {
//           padding: 80px 0;
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.7s ease;
//         }
//         .contact-main.animate-fade-up {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .two-columns {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 3rem;
//         }

//         /* Cards */
//         .form-card, .info-card {
//           background: white;
//           border-radius: 1.5rem;
//           box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1);
//           padding: 2rem;
//           border: 1px solid #eef2f6;
//         }
//         .card-header {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           margin-bottom: 2rem;
//         }
//         .card-header .icon-bg {
//           background: rgba(106,155,90,0.15);
//           padding: 0.75rem;
//           border-radius: 1rem;
//         }
//         .card-header h2 {
//           font-size: 1.75rem;
//           font-weight: 700;
//           color: #0b2e3e;
//         }

//         /* Form */
//         .form-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 1.25rem;
//         }
//         .form-group {
//           margin-bottom: 1.25rem;
//         }
//         .form-group label {
//           display: block;
//           font-size: 0.875rem;
//           font-weight: 600;
//           color: #1e2f3e;
//           margin-bottom: 0.5rem;
//         }
//         .form-group input,
//         .form-group textarea {
//           width: 100%;
//           padding: 0.75rem 1rem;
//           border: 1px solid #e2e8f0;
//           border-radius: 0.75rem;
//           font-size: 1rem;
//           transition: all 0.2s;
//           background: white;
//         }
//         .form-group input:focus,
//         .form-group textarea:focus {
//           outline: none;
//           border-color: #6a9b5a;
//           box-shadow: 0 0 0 3px rgba(106,155,90,0.2);
//         }
//         .form-group input.error-input,
//         .form-group textarea.error-input {
//           border-color: #ef4444;
//           background-color: #fef2f2;
//         }
//         .error-text {
//           color: #ef4444;
//           font-size: 0.75rem;
//           margin-top: 0.25rem;
//         }
//         .btn-submit {
//           width: 100%;
//           background: linear-gradient(135deg, #0b2e3e, #1b4d6e);
//           color: white;
//           padding: 0.875rem;
//           border: none;
//           border-radius: 0.75rem;
//           font-size: 1rem;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.5rem;
//           margin-top: 1rem;
//         }
//         .btn-submit:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 10px 20px -5px rgba(0,0,0,0.2);
//           background: linear-gradient(135deg, #1b4d6e, #2c6e4f);
//         }
//         .btn-submit:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//           transform: none;
//         }
//         .success-message {
//           background: #ecfdf5;
//           border: 1px solid #a7f3d0;
//           border-radius: 0.75rem;
//           padding: 1rem;
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           color: #047857;
//           margin-bottom: 1.5rem;
//         }
//         .success-message svg {
//           color: #6a9b5a;
//         }

//         /* Info section */
//         .info-card {
//           margin-bottom: 1.5rem;
//         }
//         .info-item {
//           display: flex;
//           gap: 1rem;
//           margin-bottom: 1.5rem;
//         }
//         .info-icon {
//           color: #6a9b5a;
//           flex-shrink: 0;
//           margin-top: 0.2rem;
//         }
//         .info-item h4 {
//           font-weight: 700;
//           color: #0b2e3e;
//           margin-bottom: 0.25rem;
//         }
//         .info-item p {
//           color: #4b5565;
//           line-height: 1.5;
//         }
//         /* Make address clickable */
//         .clickable-address {
//           cursor: pointer;
//           transition: color 0.2s;
//         }
//         .clickable-address:hover {
//           color: #6a9b5a;
//           text-decoration: underline;
//         }
//         .emergency-card {
//           background: linear-gradient(135deg, #0b2e3e, #1b4d6e);
//           color: white;
//           border-radius: 1.5rem;
//           padding: 1.5rem;
//           margin-bottom: 1.5rem;
//         }
//         .emergency-card .flex {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           margin-bottom: 1rem;
//         }
//         .emergency-card h3 {
//           font-size: 1.25rem;
//           font-weight: 700;
//         }
//         .emergency-card p {
//           margin-bottom: 1rem;
//           opacity: 0.9;
//         }
//         .emergency-phone {
//           background: rgba(255,255,255,0.1);
//           backdrop-filter: blur(4px);
//           padding: 0.75rem;
//           border-radius: 0.75rem;
//           text-align: center;
//           font-family: monospace;
//           font-size: 1.1rem;
//           letter-spacing: 0.5px;
//         }
//         .map-placeholder {
//           background: #e2e8f0;
//           border-radius: 1.5rem;
//           overflow: hidden;
//           height: 240px;
//           cursor: pointer;
//           position: relative;
//           transition: transform 0.2s, box-shadow 0.2s;
//         }
//         .map-placeholder:hover {
//           transform: scale(1.01);
//           box-shadow: 0 10px 25px -5px rgba(0,0,0,0.15);
//         }
//         .map-placeholder iframe {
//           width: 100%;
//           height: 100%;
//           filter: grayscale(0.3);
//           transition: filter 0.3s;
//           pointer-events: none; /* so click goes to parent div */
//         }
//         .map-placeholder:hover iframe {
//           filter: grayscale(0);
//         }
//         /* Optional overlay hint */
//         .map-hint {
//           position: absolute;
//           bottom: 12px;
//           right: 12px;
//           background: rgba(0,0,0,0.6);
//           color: white;
//           font-size: 0.7rem;
//           padding: 4px 8px;
//           border-radius: 20px;
//           backdrop-filter: blur(4px);
//           pointer-events: none;
//           z-index: 1;
//         }

//         /* Animations */
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* Responsive */
//         @media (max-width: 968px) {
//           .two-columns {
//             grid-template-columns: 1fr;
//             gap: 2rem;
//           }
//           .hero-content h1 {
//             font-size: 2.5rem;
//           }
//           .hero-content p {
//             font-size: 1rem;
//           }
//           .contact-hero {
//             padding: 80px 20px 70px;
//           }
//           .contact-main {
//             padding: 60px 0;
//           }
//           .form-row {
//             grid-template-columns: 1fr;
//             gap: 0;
//           }
//         }
//         @media (max-width: 640px) {
//           .form-card, .info-card {
//             padding: 1.5rem;
//           }
//           .card-header h2 {
//             font-size: 1.5rem;
//           }
//         }
//       `}</style>

//       <div className="contact-page">
//         <div className="contact-hero">
//           <div className="hero-content">
//             <h1>Let's Connect</h1>
//             <p>Whether it's a question, a quote, or a partnership – we're just a message away.</p>
//             <div className="hero-badges">
//               <span className="badge">📍 24/7 Support</span>
//               <span className="badge">🚀 Global Logistics</span>
//             </div>
//           </div>
//         </div>

//         <div className="contact-main" ref={sectionRef}>
//           <div className="container">
//             <div className="two-columns">
//               {/* Form Column */}
//               <div className="form-card">
//                 <div className="card-header">
//                   <div className="icon-bg">
//                     <FaPaperPlane size={24} color="#6a9b5a" />
//                   </div>
//                   <h2>Send a Message</h2>
//                 </div>

//                 {submitSuccess && (
//                   <div className="success-message">
//                     <FaCheckCircle size={20} color="#6a9b5a" />
//                     <span>Thank you! We'll get back to you soon.</span>
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} noValidate>
//                   <div className="form-row">
//                     <div className="form-group">
//                       <label>First Name *</label>
//                       <input
//                         type="text"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={touched.firstName && errors.firstName ? 'error-input' : ''}
//                       />
//                       {touched.firstName && errors.firstName && (
//                         <div className="error-text">{errors.firstName}</div>
//                       )}
//                     </div>
//                     <div className="form-group">
//                       <label>Last Name *</label>
//                       <input
//                         type="text"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={touched.lastName && errors.lastName ? 'error-input' : ''}
//                       />
//                       {touched.lastName && errors.lastName && (
//                         <div className="error-text">{errors.lastName}</div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label>Email Address *</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={touched.email && errors.email ? 'error-input' : ''}
//                     />
//                     {touched.email && errors.email && (
//                       <div className="error-text">{errors.email}</div>
//                     )}
//                   </div>

//                   <div className="form-group">
//                     <label>Phone Number *</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="10-digit number"
//                       className={touched.phone && errors.phone ? 'error-input' : ''}
//                     />
//                     {touched.phone && errors.phone && (
//                       <div className="error-text">{errors.phone}</div>
//                     )}
//                   </div>

//                   <div className="form-group">
//                     <label>Your Message *</label>
//                     <textarea
//                       name="message"
//                       rows="5"
//                       value={formData.message}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={touched.message && errors.message ? 'error-input' : ''}
//                     />
//                     {touched.message && errors.message && (
//                       <div className="error-text">{errors.message}</div>
//                     )}
//                   </div>

//                   <button type="submit" className="btn-submit" disabled={isSubmitting}>
//                     {isSubmitting ? (
//                       <>
//                         <div className="spinner" style={{width:'18px',height:'18px',border:'2px solid white',borderTopColor:'transparent',borderRadius:'50%',animation:'spin 0.6s linear infinite'}}></div>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <FaPaperPlane size={18} />
//                         Send Message
//                       </>
//                     )}
//                   </button>
//                 </form>
//               </div>

//               {/* Info Column */}
//               <div>
//                 <div className="info-card">
//                   <div className="card-header">
//                     <div className="icon-bg">
//                       <FaBuilding size={24} color="#6a9b5a" />
//                     </div>
//                     <h2>Contact Info</h2>
//                   </div>
//                   <div className="info-item">
//                     <div className="info-icon"><FaMapMarkerAlt size={20} /></div>
//                     <div>
//                       <h4>Head Office</h4>
//                       <p 
//                         className="clickable-address"
//                         onClick={openGoogleMaps}
//                         onKeyDown={(e) => e.key === 'Enter' && openGoogleMaps()}
//                         role="button"
//                         tabIndex={0}
//                       >
//                         Robinsons Cargo and Logistics Pvt Ltd,<br />
//                         15/17 Adi Marzban Path, Canara Bank Building 1st Floor,<br />
//                         Ballard Estate, Mumbai – 400001, India.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="info-item">
//                     <div className="info-icon"><FaPhoneAlt size={18} /></div>
//                     <div>
//                       <h4>Phone</h4>
//                       <p>+91 (22) 6288 7777</p>
//                     </div>
//                   </div>
//                   <div className="info-item">
//                     <div className="info-icon"><FaEnvelope size={18} /></div>
//                     <div>
//                       <h4>Email</h4>
//                       <p>info@robinsonsglobal.com</p>
//                     </div>
//                   </div>
//                   <div className="info-item">
//                     <div className="info-icon"><FaClock size={18} /></div>
//                     <div>
//                       <h4>Business Hours</h4>
//                       <p>
//                         Monday – Friday: 9:00 AM – 6:00 PM<br />
//                         Saturday – Sunday: Closed (Emergency support available)
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="emergency-card">
//                   <div className="flex">
//                     <FaGlobe size={24} color="#6a9b5a" />
//                     <h3>24/7 Emergency Support</h3>
//                   </div>
//                   <p>Critical shipments don't wait. Our dedicated team is always on standby to assist you.</p>
//                   <div className="emergency-phone">
//                     📞 +91 98765 43210 (Emergency)
//                   </div>
//                 </div>

//                 {/* Clickable Map */}
//                 <div 
//                   className="map-placeholder"
//                   onClick={openGoogleMaps}
//                   onKeyDown={(e) => e.key === 'Enter' && openGoogleMaps()}
//                   role="button"
//                   tabIndex={0}
//                   aria-label="Open office location in Google Maps"
//                 >
//                   <iframe
//                     title="office map preview"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.106950386575!2d72.842725!3d18.933478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e1e1e1e1e1e1%3A0x0!2zMTjCsDU2JzAwLjUiTiA3MsKwNTAnMzMuMCJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
//                     allowFullScreen=""
//                     loading="lazy"
//                   ></iframe>
//                   <div className="map-hint">Click to open full map →</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Contact;

import React, { useState, useEffect, useRef } from 'react';
import { 
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, 
  FaPaperPlane, FaCheckCircle, FaBuilding, FaGlobe 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Google Maps function
  const openGoogleMaps = () => {
    const address = encodeURIComponent(
      "Robinsons Cargo and Logistics Pvt Ltd, 15/17 Adi Marzban Path, Canara Bank Building 1st Floor, Ballard Estate, Mumbai 400001, India"
    );
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.trim().length < 2) return 'Must be at least 2 characters';
        if (!/^[A-Za-z\s]+$/.test(value.trim())) return 'Only letters and spaces';
        return '';
      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        if (value.trim().length < 2) return 'Must be at least 2 characters';
        if (!/^[A-Za-z\s]+$/.test(value.trim())) return 'Only letters and spaces';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Enter a valid email address';
        return '';
      case 'phone':
        const digits = value.replace(/\D/g, '');
        if (!digits) return 'Phone number is required';
        if (digits.length !== 10) return 'Must be exactly 10 digits';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === 'phone') {
      newValue = value.replace(/\D/g, '').slice(0, 10);
    }
    setFormData(prev => ({ ...prev, [name]: newValue }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = {};
    Object.keys(formData).forEach(field => { allTouched[field] = true; });
    setTouched(allTouched);
    if (validateAll()) {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setErrors({});
      setTouched({});
      setTimeout(() => setSubmitSuccess(false), 5000);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-dark: #0a2b3e;
          --primary-accent: #6a9b5a;
          --text-dark: #1f2e3a;
          --text-gray: #4b5f6e;
          --bg-gray: #f9fbfd;
          --shadow-sm: 0 4px 20px rgba(0, 0, 0, 0.05);
          --shadow-md: 0 10px 30px rgba(0, 0, 0, 0.08);
          --shadow-hover: 0 20px 35px rgba(0, 0, 0, 0.1);
          --transition: all 0.3s ease;
        }

        .contact-page {
        
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          overflow-x: hidden;
        }

        /* Hero section (matching Aboutus/Offices) */
        .contact-hero {
          position: relative;
          background: linear-gradient(105deg, #0b2e3e 0%, #1b4d6e 70%, #2c6e4f 100%);
          color: white;
          padding: 40px 24px 100px;
          text-align: center;
          margin-top: 62px;
          overflow: hidden;
        }

        .contact-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='rgba(255,255,255,0.03)' d='M0,0 L800,0 L800,800 L0,800 Z M200,200 L600,200 L600,600 L200,600 Z'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 40px;
          opacity: 0.2;
          pointer-events: none;
        }

        .contact-hero::after {
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

        .hero-content p {
          font-size: 1.2rem;
          opacity: 0.95;
          margin-bottom: 1.5rem;
          animation: fadeUp 0.8s ease 0.2s both;
        }

        .hero-badges {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          animation: fadeUp 0.8s ease 0.3s both;
        }

        .badge {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          padding: 0.4rem 1.2rem;
          border-radius: 40px;
          font-size: 0.9rem;
          font-weight: 500;
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

        /* Container */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Main section */
        .contact-main {
          padding: 80px 0;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.7s ease;
        }
        .contact-main.animate-fade-up {
          opacity: 1;
          transform: translateY(0);
        }

        .two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        /* Cards with green border hover */
        .form-card, .info-card, .emergency-card, .map-placeholder {
          transition: var(--transition);
        }

        .form-card, .info-card {
          background: white;
          border-radius: 1.5rem;
          box-shadow: var(--shadow-sm);
          padding: 2rem;
          border: 1px solid #eef2f6;
        }

        .form-card:hover, .info-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-accent);
          box-shadow: 0 20px 35px -12px rgba(106, 155, 90, 0.25), var(--shadow-sm);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .card-header .icon-bg {
          background: rgba(106,155,90,0.15);
          padding: 0.75rem;
          border-radius: 1rem;
        }

        .card-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--primary-dark);
        }

        /* Form */
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .form-group {
          margin-bottom: 1.25rem;
        }
        .form-group label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          font-size: 1rem;
          transition: all 0.2s;
          background: white;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-accent);
          box-shadow: 0 0 0 3px rgba(106,155,90,0.2);
        }
        .form-group input.error-input,
        .form-group textarea.error-input {
          border-color: #ef4444;
          background-color: #fef2f2;
        }
        .error-text {
          color: #ef4444;
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }
        .btn-submit {
          width: 100%;
          background: linear-gradient(135deg, var(--primary-dark), #1b4d6e);
          color: white;
          padding: 0.875rem;
          border: none;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(0,0,0,0.2);
          background: linear-gradient(135deg, #1b4d6e, var(--primary-accent));
        }
        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        .success-message {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          border-radius: 0.75rem;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #047857;
          margin-bottom: 1.5rem;
        }
        .success-message svg {
          color: var(--primary-accent);
        }

        /* Info section */
        .info-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .info-icon {
          color: var(--primary-accent);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .info-item h4 {
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 0.25rem;
        }
        .info-item p {
          color: var(--text-gray);
          line-height: 1.5;
        }
        .clickable-address {
          cursor: pointer;
          transition: color 0.2s;
        }
        .clickable-address:hover {
          color: var(--primary-accent);
          text-decoration: underline;
        }

        .emergency-card {
          background: linear-gradient(135deg, var(--primary-dark), #1b4d6e);
          color: white;
          border-radius: 1.5rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .emergency-card .flex {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .emergency-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }
        .emergency-card p {
          margin-bottom: 1rem;
          opacity: 0.9;
        }
        .emergency-phone {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(4px);
          padding: 0.75rem;
          border-radius: 0.75rem;
          text-align: center;
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.5px;
        }

        .map-placeholder {
          background: #e2e8f0;
          border-radius: 1.5rem;
          overflow: hidden;
          height: 240px;
          cursor: pointer;
          position: relative;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .map-placeholder:hover {
          transform: scale(1.01);
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.15);
          border-color: var(--primary-accent);
        }
        .map-placeholder iframe {
          width: 100%;
          height: 100%;
          filter: grayscale(0.3);
          transition: filter 0.3s;
          pointer-events: none;
        }
        .map-placeholder:hover iframe {
          filter: grayscale(0);
        }
        .map-hint {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(0,0,0,0.6);
          color: white;
          font-size: 0.7rem;
          padding: 4px 8px;
          border-radius: 20px;
          backdrop-filter: blur(4px);
          pointer-events: none;
          z-index: 1;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 968px) {
          .two-columns {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-content h1 {
            font-size: 2.8rem;
          }
          .hero-content p {
            font-size: 1rem;
          }
          .contact-hero {
            padding: 40px 20px 80px;
            margin-top: 56px;
          }
          .contact-main {
            padding: 60px 0;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
        @media (max-width: 640px) {
          .form-card, .info-card {
            padding: 1.5rem;
          }
          .card-header h2 {
            font-size: 1.5rem;
          }
          .hero-content h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <div className="contact-page">
        <div className="contact-hero">
          <div className="hero-content">
            <div className="chip">Get in Touch</div>
            <h1>Let's Connect</h1>
            <p>Whether it's a question, a quote, or a partnership – we're just a message away.</p>
            <div className="hero-badges">
              <span className="badge">📍 24/7 Support</span>
              <span className="badge">🚀 Global Logistics</span>
            </div>
          </div>
        </div>

        <div className="contact-main" ref={sectionRef}>
          <div className="container">
            <div className="two-columns">
              {/* Form Column */}
              <div className="form-card">
                <div className="card-header">
                  <div className="icon-bg">
                    <FaPaperPlane size={24} color="#6a9b5a" />
                  </div>
                  <h2>Send a Message</h2>
                </div>

                {submitSuccess && (
                  <div className="success-message">
                    <FaCheckCircle size={20} color="#6a9b5a" />
                    <span>Thank you! We'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.firstName && errors.firstName ? 'error-input' : ''}
                      />
                      {touched.firstName && errors.firstName && (
                        <div className="error-text">{errors.firstName}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.lastName && errors.lastName ? 'error-input' : ''}
                      />
                      {touched.lastName && errors.lastName && (
                        <div className="error-text">{errors.lastName}</div>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.email && errors.email ? 'error-input' : ''}
                    />
                    {touched.email && errors.email && (
                      <div className="error-text">{errors.email}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="10-digit number"
                      className={touched.phone && errors.phone ? 'error-input' : ''}
                    />
                    {touched.phone && errors.phone && (
                      <div className="error-text">{errors.phone}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Your Message *</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.message && errors.message ? 'error-input' : ''}
                    />
                    {touched.message && errors.message && (
                      <div className="error-text">{errors.message}</div>
                    )}
                  </div>

                  <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div style={{width:'18px',height:'18px',border:'2px solid white',borderTopColor:'transparent',borderRadius:'50%',animation:'spin 0.6s linear infinite'}}></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Info Column */}
              <div>
                <div className="info-card">
                  <div className="card-header">
                    <div className="icon-bg">
                      <FaBuilding size={24} color="#6a9b5a" />
                    </div>
                    <h2>Contact Info</h2>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><FaMapMarkerAlt size={20} /></div>
                    <div>
                      <h4>Head Office</h4>
                      <p 
                        className="clickable-address"
                        onClick={openGoogleMaps}
                        onKeyDown={(e) => e.key === 'Enter' && openGoogleMaps()}
                        role="button"
                        tabIndex={0}
                      >
                        Robinsons Cargo and Logistics Pvt Ltd,<br />
                        15/17 Adi Marzban Path, Canara Bank Building 1st Floor,<br />
                        Ballard Estate, Mumbai – 400001, India.
                      </p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><FaPhoneAlt size={18} /></div>
                    <div>
                      <h4>Phone</h4>
                      <p>+91 (22) 6288 7777</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><FaEnvelope size={18} /></div>
                    <div>
                      <h4>Email</h4>
                      <p>info@robinsonsglobal.com</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><FaClock size={18} /></div>
                    <div>
                      <h4>Business Hours</h4>
                      <p>
                        Monday – Friday: 9:00 AM – 6:00 PM<br />
                        Saturday – Sunday: Closed (Emergency support available)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="emergency-card">
                  <div className="flex">
                    <FaGlobe size={24} color="#6a9b5a" />
                    <h3>24/7 Emergency Support</h3>
                  </div>
                  <p>Critical shipments don't wait. Our dedicated team is always on standby to assist you.</p>
                  <div className="emergency-phone">
                    📞 +91 98765 43210 (Emergency)
                  </div>
                </div>

                {/* Clickable Map */}
                <div 
                  className="map-placeholder"
                  onClick={openGoogleMaps}
                  onKeyDown={(e) => e.key === 'Enter' && openGoogleMaps()}
                  role="button"
                  tabIndex={0}
                  aria-label="Open office location in Google Maps"
                >
                  <iframe
                    title="office map preview"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.106950386575!2d72.842725!3d18.933478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e1e1e1e1e1e1%3A0x0!2zMTjCsDU2JzAwLjUiTiA3MsKwNTAnMzMuMCJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                  <div className="map-hint">Click to open full map →</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;