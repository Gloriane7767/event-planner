import React, { useState } from 'react';

const ContactForm = () => {
  // One state box per thing we want to remember
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from refreshing
    console.log({ name, email, message }); // later this could go to a server
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  // If the form was sent, show a thank-you instead of the form
  if (submitted) {
    return (
      <div className="thank-you">
        <p>🎉 Thanks, we received your message and will reply soon!</p>
        <button className="submit-button" onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit" className="submit-button">Send Message</button>
    </form>
  );
};

export default ContactForm;