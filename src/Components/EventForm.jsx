import React, { useState } from 'react';

const EventForm = ({ onAddEvent, categories = [] }) => {
  const [name, setName] = useState('');
  const [eventType, setEventType] = useState('');   // starts empty

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !eventType) return;         // need a name AND a type

    onAddEvent({ id: Date.now(), name: name, category: eventType });

    setName('');
    setEventType('');
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
        <option value="">Choose event type</option>

        {categories.map((cat) => (
          <optgroup key={cat.id} label={cat.title}>
            {cat.events.map((eventName) => (
              <option key={eventName} value={eventName}>
                {eventName}
              </option>
            ))}
          </optgroup>
        ))}
      </select>

      <button type="submit" className="get-started-button">
        Add Event
      </button>
    </form>
  );
};

export default EventForm;