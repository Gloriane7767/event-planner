import React from 'react';

const CategoryGroup = ({ title, events }) => {
  return (
    <div className="category-group">
      <h2>{title}:</h2>
      <ul>
        {events.map((eventName) => (
          <li key={eventName}>{eventName}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryGroup;