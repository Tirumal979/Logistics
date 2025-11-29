import React from "react";
import "../App.css";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>
          Get in <span>Touch</span>
        </h1>
        <p>
          We're ready to assist you. Contact our dedicated team for any inquiries or support.
        </p>
      </div>

      {/* Info Boxes */}
      <div className="contact-info">
        <div className="info-box">
          <h4>Email Us</h4>
          <p>info@logistic-valmodealer.in</p>
          <small>Reach out via email anytime — we’re here to help.</small>
        </div>
        <div className="info-box">
          <h4>Call Us</h4>
          <p>+91 9881751859</p>
          <small>Available Mon–Fri, 9 AM to 6 PM.</small>
        </div>
        <div className="info-box">
          <h4>Visit Us</h4>
          <p>
            Bangalore City SIDA Office, Bangalore, Karnataka (KA), India, PIN Code: 560002
          </p>
          <small>We welcome visitors during business hours.</small>
        </div>
        <div className="info-box">
          <h4>Live Chat</h4>
          <p>Start a live conversation</p>
          <small>24/7 real-time support for your convenience.</small>
        </div>
      </div>

      {/* Contact Form + Why Contact */}
      <div className="contact-main-container">
        {/* Form */}
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form>
            <div className="row">
              <input type="text" placeholder="First Name *" required />
              <input type="text" placeholder="Last Name *" required />
            </div>
            <div className="row">
              <input type="email" placeholder="Email Address *" required />
              <input type="text" placeholder="Phone Number" />
            </div>
            <select required>
              <option value="">Select Subject *</option>
              <option value="general">General Inquiry</option>
              <option value="support">Customer Support</option>
              <option value="partnership">Partnership Opportunities</option>
            </select>
            <textarea placeholder="Your Message *" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Why Contact */}
        <div className="contact-description">
          <h3>Why Contact Us?</h3>
          <p>
            We are dedicated to providing prompt, reliable, and expert assistance for all your logistic needs. Whether you have questions, need support, or want to explore business partnerships, we’re just a message away.
          </p>
          <ul>
            <li>Response within 24–48 hours</li>
            <li>Expert and friendly customer support</li>
            <li>Multiple communication channels</li>
            <li>Dedicated account managers for partners</li>
          </ul>

          <div className="contact-extra-cards">
            <div className="card emergency">
              <h4>Emergency Number</h4>
              <p>For urgent matters, please call immediately.</p>
              <p>+91 9881751859</p>
            </div>
            <div className="card whatsapp">
              <h4>WhatsApp Support</h4>
              <p>Chat with our support team instantly on WhatsApp.</p>
              <p>+91 9881751859</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}