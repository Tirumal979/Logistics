import React from "react";
import "../App.css";

// Correct name: privacySections (not Privacypolicy)
const privacySections = [
  {
    img: "https://img.icons8.com/ios-filled/100/ff7a00/company.png",
    title: "Who We Are",
    content:
      "Logestic is India's leading logistics management platform connecting 10,000+ businesses with real-time shipment tracking and client status updates.",
  },
  {
    img: "https://img.icons8.com/ios-filled/100/ff7a00/data-in-both-directions.png",
    title: "Data We Collect",
    list: [
      "Contact details (name, email, phone)",
      "Tracking IDs & shipment numbers",
      "Application data for careers",
      "Device & browser analytics",
    ],
  },
  {
    img: "https://img.icons8.com/ios-filled/100/ff7a00/lock-2.png",
    title: "How We Protect Data",
    content: "Bank-level 256-bit encryption, GDPR compliant, zero data selling policy.",
  },
  {
    img: "https://cdn-icons-png.freepik.com/512/15340/15340482.png",
    title: "Your Rights",
    list: [
      "Access your data anytime",
      "Request deletion within 30 days",
      "Download your data export",
      "Opt-out of all tracking",
    ],
  },
  {
    img: "https://as2.ftcdn.net/v2/jpg/00/75/43/79/1000_F_75437996_kJChfVPjGCc7h6Zg1m6LEDbaTK0sSRh3.jpg",
    title: "Legal Compliance",
    content:
      "Compliant with DPDP Act 2023, GDPR, and all Indian data protection laws. Last updated: Nov 28, 2025.",
  },
];

// Now the REAL component (this will render correctly)
const Privacypolicy = () => {
  return (
    <div className="privacy-wrapper">
      {privacySections.map((section, i) => (
        <div
          key={i}
          className={`privacy-section ${i % 2 === 0 ? "img-left" : "img-right"}`}
        >
          <div className="privacy-image">
            <img src={section.img} alt={section.title} />
          </div>

          <div className="privacy-card">
            <h3>{section.title}</h3>

            {section.content && <p>{section.content}</p>}

            {section.list && (
              <ul>
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}

      {/* Contact Card */}
      <div className="privacy-contact">
        <div className="contact-card">
          <h3>Contact Us</h3>
          <p>
            Have questions or need assistance regarding your data? Our Data Protection Officer is here to help.
          </p>
          <a href="/contact" className="contact-link">
            Go to Contact Page
          </a>
        </div>
      </div>
    </div>
  );
};

// Correct export (component, not array)
export default Privacypolicy;
