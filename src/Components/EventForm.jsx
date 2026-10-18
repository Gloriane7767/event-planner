import React, { useState, useRef, memo } from 'react';

const EventForm = ({ onAddEvent, categories = [] }) => {
  const [name, setName] = useState('');
  const [eventType, setEventType] = useState('');
  const nameInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !eventType) return;

    onAddEvent({ id: Date.now(), name: name, category: eventType });

    setName('');
    setEventType('');
    nameInputRef.current.focus();
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input
        ref={nameInputRef}
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

export default memo(EventForm);