import React from 'react';

const CTA = () => {
  return (
    <section id="contact" className="cta">
      <div className="cta-shape"></div>
      <div className="chip sr" style={{ justifyContent: 'center' }}>
        Ready to Ship
      </div>
      <div className="cta-title sr d1">
        Move Your Cargo
        <br />
        <em>With Confidence.</em>
      </div>
      <p className="cta-sub sr d2">
        Speak with our logistics specialists today. Whether air, ocean, or project cargo — we have the expertise and network to deliver anywhere in the world.
      </p>
      <div className="cta-btns sr d3">
        <a href="mailto:info@robinsonsglobal.com" className="btn-primary">
          <span>Email Us Now</span>
        </a>
        <a href="tel:+912262887777" className="btn-sec">
          +91 (22) 6288 7777
        </a>
      </div>
      <div className="cta-info sr d4">
        info@robinsonsglobal.com &nbsp;·&nbsp; www.robinsonsglobal.com &nbsp;·&nbsp; Ballard Estate, Mumbai – 400001
      </div>
    </section>
  );
};

export default CTA;