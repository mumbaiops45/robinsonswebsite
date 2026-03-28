import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // First Name – required, no numbers
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (/\d/.test(formData.firstName)) {
      newErrors.firstName = 'First name cannot contain numbers';
    }

    // Last Name – required, no numbers
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (/\d/.test(formData.lastName)) {
      newErrors.lastName = 'Last name cannot contain numbers';
    }

    // Email – required, valid email format
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone – exactly 10 digits, no spaces
    const phoneDigits = formData.phone.replace(/\s/g, '');
    if (!phoneDigits) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phoneDigits)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    // Message – at least 10 characters
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Here you would send the data to your backend
      console.log('Form submitted:', formData);
      alert('Thank you! We will get back to you soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <>
      <style>{`
        .contact-page {
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #1a2a3a;
          background: #ffffff;
          line-height: 1.5;
        }

        /* Hero section */
        .contact-hero {
          background: linear-gradient(135deg, #0b2e3e 0%, #1b4d6e 100%);
          color: white;
          padding: 100px 24px 80px;
          text-align: center;
          margin-top: 62px;
        }
        @media (max-width: 768px) {
          .contact-hero {
            margin-top: 56px;
            padding: 80px 20px 60px;
          }
        }
        .contact-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .contact-hero .tagline {
          font-size: 1.5rem;
          font-weight: 400;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }
        .contact-hero .description {
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

        /* Contact section */
        .contact-section {
          padding: 80px 0;
          background: #fff;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        /* Form styles */
        .contact-form h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0b2e3e;
          margin-bottom: 1.5rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #2c3e4e;
          margin-bottom: 0.5rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #d8e4ed;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #6a9b5a;
        }
        .error-message {
          color: #e74c3c;
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }
        .btn-submit {
          background: #0b2e3e;
          color: white;
          padding: 12px 28px;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-submit:hover {
          background: #6a9b5a;
        }

        /* Contact info */
        .contact-info h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0b2e3e;
          margin-bottom: 1.5rem;
        }
        .info-card {
          background: #f8fafc;
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .info-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          align-items: flex-start;
        }
        .info-icon {
          font-size: 1.2rem;
          min-width: 30px;
        }
        .info-text {
          color: #4a627a;
          line-height: 1.5;
        }
        .info-text strong {
          color: #1b4d6e;
        }

        @media (max-width: 768px) {
          .contact-hero h1 { font-size: 2.2rem; }
          .contact-hero .tagline { font-size: 1.2rem; }
          .contact-section { padding: 60px 20px; }
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
          .form-row { grid-template-columns: 1fr; gap: 0; }
        }
        @media (max-width: 480px) {
          .contact-hero h1 { font-size: 1.8rem; }
        }
      `}</style>

      <div className="contact-page">
        <div className="contact-hero">
          <div className="container">
            <h1>Get in Touch</h1>
            <div className="tagline">We'd Love to Hear from You</div>
            <div className="description">
              Whether you have a question about our services, need a quote, or want to explore partnership opportunities – our team is ready to assist you.
            </div>
          </div>
        </div>

        <div className="contact-section">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contact-form">
                <h2>Send us a message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && <div className="error-message">{errors.firstName}</div>}
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                    />
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                  </div>
                  <div className="form-group">
                    <label>Your Message *</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <div className="error-message">{errors.message}</div>}
                  </div>
                  <button type="submit" className="btn-submit">Send Message</button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="contact-info">
                <h2>Contact Information</h2>
                <div className="info-card">
                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-text">
                      <strong>Head Office</strong><br />
                      Robinsons Cargo and Logistics Pvt Ltd,<br />
                      15/17 Adi Marzban Path,<br />
                      Canara Bank Building 1st Floor,<br />
                      Ballard Estate, Mumbai – 400001, India.

                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div className="info-text">
                      <strong>Phone</strong><br />
                      +91 (22) 6288 7777
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">✉️</div>
                    <div className="info-text">
                      <strong>Email</strong><br />
                      info@robinsonsglobal.com
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">🕒</div>
                    <div className="info-text">
                      <strong>Business Hours</strong><br />
                      Monday – Friday: 9:00 AM – 6:00 PM<br />
                      Saturday – Sunday: Closed (Emergency support available)
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-text" style={{ textAlign: 'center' }}>
                    <strong>📢 Need urgent support?</strong><br />
                    Our 24/7 customer service is always available for critical shipments.
                  </div>
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