import React from 'react';

const contactInfo = [
  { id: 1, icon: '📍', text: '123 Celebration Street, Stockholm' },
  { id: 2, icon: '📞', text: '+46 8 123 456' },
  { id: 3, icon: '✉️', text: 'hello@eventplanner.com' },
];

const socialLinks = [
  { id: 1, name: 'Facebook', url: 'https://facebook.com' },
  { id: 2, name: 'Instagram', url: 'https://instagram.com' },
  { id: 3, name: 'Twitter', url: 'https://twitter.com' },
];

const Footer = () => {
  return (
    <footer className="footer">
      {/* Section 1: About */}
      <section className="footer-section">
        <h3>Event Planner Inc.</h3>
        <p>
          We help you plan birthdays, weddings and corporate events
          without the stress.
        </p>
      </section>

      {/* Section 2: Contact (uses map) */}
      <section className="footer-section">
        <h3>Contact Us</h3>
        {contactInfo.map((item) => (
          <p key={item.id}>
            {item.icon} {item.text}
          </p>
        ))}
      </section>

      {/* Section 3: Opening hours */}
      <section className="footer-section">
        <h3>Opening Hours</h3>
        <div>
          <p>Mon - Fri: 9:00 - 18:00</p>
          <p>Saturday: 10:00 - 14:00</p>
          <p>Sunday: Closed</p>
        </div>
      </section>

      {/* Section 4: Follow Us (uses map) */}
      <section className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>

      {/* Bottom bar (automatic year) */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Event Planner Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;