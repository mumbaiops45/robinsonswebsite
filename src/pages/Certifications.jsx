import React from 'react';

const Certifications = () => {
  const certifications = [
    { logo: '/WACO.png', name: 'WACO' },
    { logo: '/SEO.png', name: 'SEO' },
    { logo: '/mto-logo.png', name: 'MTO' },
    { logo: '/ISO.png', name: 'ISO 9001' },
    { logo: '/ISO14001-2015.jpg', name: 'ISO 14001' },
    { logo: '/IATA.png', name: 'IATA' },
    { logo: '/GDP.png', name: 'GDP' },
    { logo: '/fmc.png', name: 'FMC' },
    { logo: '/FIATA.png', name: 'FIATA' },
    { logo: '/custom-department.jpg', name: 'Customs Dept' },
    { logo: '/AMTOI.png', name: 'AMTOI' },
    { logo: '/Acaai.png', name: 'ACAAI' },
  ];

  // Duplicate the array for seamless scrolling
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <section className="certifications-slider">
      <div className="container">
        <div className="certifications-header">
          <span className="certifications-badge">Trusted & Accredited</span>
          <h2 className="certifications-title">Our Certifications</h2>
          <p className="certifications-subtitle">
            Industry recognition that validates our commitment to quality, safety, and excellence
          </p>
        </div>
        
        <div className="slider-container">
          <div className="slider-track">
            {duplicatedCertifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="certification-logo-wrapper-circle">
                  <img 
                    src={cert.logo} 
                    alt={cert.name}
                    className="certification-logo-circle"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      const fallback = document.createElement('span');
                      fallback.className = 'certification-fallback-circle';
                      fallback.textContent = cert.name.charAt(0);
                      e.target.parentElement.appendChild(fallback);
                    }}
                  />
                </div>
                <p className="certification-name">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;