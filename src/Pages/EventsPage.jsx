import React from 'react';
import EventForm from '../Components/EventForm';
import { useEvents } from '../Components/EventsContext';
import { eventCategories } from '../data/eventCategories';

const EventsPage = () => {
  const {
    events, filteredEvents, birthdayCount,
    search, setSearch,
    addEvent, deleteEvent, clearEvents,
  } = useEvents();

  return (
    <section className="description">
      <h2 className="section-title">Your Event Planner</h2>

      <div className="planner-box">
        <EventForm onAddEvent={addEvent} categories={eventCategories} />

        <p>Total events: {events.length}</p>
        <p>🎂 Birthday events: {birthdayCount}</p>

        <input
          className="search-input"
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {events.length === 0 ? (
          <p>No events yet. Add your first one!</p>
        ) : filteredEvents.length === 0 ? (
          <p>No events match "{search}".</p>
        ) : (
          <ul className="event-list">
            {filteredEvents.map((ev) => (
              <li key={ev.id}>
                <span>{ev.name} ({ev.category})</span>
                <button className="delete-button" onClick={() => deleteEvent(ev.id)}>❌</button>
              </li>
            ))}
          </ul>
        )}

        {events.length > 0 && (
          <button className="reset-button" onClick={clearEvents}>Clear all events</button>
        )}
      </div>
    </section>
  );
};

export default EventsPage;
