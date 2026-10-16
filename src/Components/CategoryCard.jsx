import React from 'react';

const CategoryCard = ({ icon, title, events }) => {
  return (
    <div className="category-card">
      <h2>{icon} {title}</h2>
      <ul>
        {events.map((eventName) => (
          <li key={eventName}>{eventName}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCard;