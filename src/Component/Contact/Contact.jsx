import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import "./Contact.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "aadityatrivedi31244@gmail.com", href: "mailto:aadityatrivedi31244@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9340458559", href: "tel:+919340458559" },
    { icon: MapPin, label: "Location", value: "Indore, Madhya Pradesh, India", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/AadityaT123" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aaditya-trivedi-16196524b/" },
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Ready to start your next project? Let's discuss how I can help bring your ideas to life.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-info-items">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="contact-item">
                    <div className="contact-icon"><Icon /></div>
                    <div>
                      <p className="contact-label">{info.label}</p>
                      {info.href !== "#" ? (
                        <a href={info.href} className="contact-value">{info.value}</a>
                      ) : (
                        <p className="contact-value">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <h4>Follow Me</h4>
            <div className="social-links">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <label>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div>
                <label>Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div className="message" >
                <label>Message</label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
              </div>

              <button type="submit" className="submit-button">
                <Send className="send-icon" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
