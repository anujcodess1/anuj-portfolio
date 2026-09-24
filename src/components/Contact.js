import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 400);
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-container-inner">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I'm currently learning, experimenting and building my way into web development.
          </p>
        </div>

        <div className="contact-links-grid">
          <a
            href="https://wa.me/916283030002"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <img src="/images/icons/whatsapp.svg" alt="WhatsApp" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/mxrc.ik"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <img src="/images/icons/instagram.svg" alt="Instagram" />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:anujgotmoney@gmail.com"
            className="contact-button"
          >
            <img src="/images/icons/email.svg" alt="Email" />
            <span>Email</span>
          </a>
        </div>

        <form className="simple-contact-form" onSubmit={handleFormSubmit}>
          {formSubmitted && (
            <div className="form-submit-alert">
              <img src="/images/icons/check.svg" alt="Success" />
              <span>Thanks for reaching out! Your message was submitted.</span>
            </div>
          )}

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message..."
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
