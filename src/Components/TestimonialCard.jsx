import React from 'react';

const TestimonialCard = ({ name, text }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">"{text}"</p>
      <p className="testimonial-name">- {name}</p>
    </div>
  );
};

export default TestimonialCard;