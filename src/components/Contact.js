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
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-container-inner">
        <div className="section-header">
          <span className="section-tag">Say Hello</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a question, some feedback on my work, or just want to talk about tech? Feel free to reach out anytime.
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
              <span>Thanks for reaching out! I've received your note and will get back to you soon.</span>
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
                placeholder="What's your name?"
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
                placeholder="Where can I reply to you?"
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
              rows={4}
              placeholder="What would you like to say or ask?"
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
