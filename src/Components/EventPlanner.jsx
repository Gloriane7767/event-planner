import React, {
    useState,
    useEffect,
    useMemo,
    useCallback,
    useContext,
    useReducer,
  } from 'react';
  import './EventPlanner.css';
  import Footer from './Footer';
  import CategoryCard from './CategoryCard';
  import FeatureCard from './FeatureCard';
  import TestimonialCard from './TestimonialCard';
  import ContactForm from './ContactForm';
  import EventForm from './EventForm';
  import { ThemeContext } from './ThemeContext';
  
  /* ---------- Data (outside the component, created once) ---------- */
  const eventCategories = [
    {
      id: 1,
      icon: '🎉',
      title: 'Social Events',
      events: ['Birthday parties', 'Anniversary celebrations', 'Wedding receptions',
               'Baby showers', 'Graduation parties', 'Family reunions'],
    },
    {
      id: 2,
      icon: '🎤',
      title: 'Entertainment Events',
      events: ['Concerts', 'Music festivals', 'Film screenings',
               'Comedy shows', 'Art exhibitions', 'Cultural events'],
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Community Events',
      events: ['Fundraising events', 'Charity galas', 'Volunteer drives',
               'Neighborhood block parties', 'Community festivals', 'Cultural celebrations'],
    },
  ];
  
  const features = [
    { id: 1, icon: '📅', title: 'Easy Scheduling', description: 'Pick dates, set reminders and never double-book again.' },
    { id: 2, icon: '👥', title: 'Guest Management', description: 'Create guest lists, send invites and track who is coming.' },
    { id: 3, icon: '💰', title: 'Budget Tracking', description: 'Keep every expense in one place and stay within budget.' },
    { id: 4, icon: '✅', title: 'Task Checklists', description: 'Break your event into small tasks and tick them off.' },
  ];
  
  const testimonials = [
    { id: 1, name: 'Amina K.', text: 'Event Planner made my wedding stress-free. Everything was on time!' },
    { id: 2, name: 'Lars P.', text: 'We organized our company conference in half the usual time.' },
    { id: 3, name: 'Sofia R.', text: "The guest list tool saved me hours for my daughter's birthday." },
  ];
  
  /* ---------- Reducer (the "secretary" with the rules) ---------- */
  function eventsReducer(state, action) {
    switch (action.type) {
      case 'ADD':
        return [...state, action.payload];
      case 'DELETE':
        return state.filter((ev) => ev.id !== action.payload);
      case 'CLEAR':
        return [];
      default:
        return state;
    }
  }
  
  /* ---------- Component ---------- */
  const EventPlanner = () => {
    /* Context: read the theme */
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    /* State */
    const [showPlanner, setShowPlanner] = useState(false);
    const [clicks, setClicks] = useState(0);
    const [search, setSearch] = useState('');
    const [events, dispatch] = useReducer(eventsReducer, []);
  
    /* Callbacks */
    const handleAddEvent = useCallback((newEvent) => {
      dispatch({ type: 'ADD', payload: newEvent });
    }, []);
  
    const handleDelete = (id) => {
      dispatch({ type: 'DELETE', payload: id });
    };
  
    const handleClear = () => {
      dispatch({ type: 'CLEAR' });
    };
  
    /* useMemo: remembered calculations */
    const filteredEvents = useMemo(() => {
      return events.filter((ev) =>
        ev.name.toLowerCase().includes(search.toLowerCase())
      );
    }, [events, search]);
  
    const birthdayCount = useMemo(() => {
      return events.filter((ev) => ev.category === 'Birthday parties').length;
    }, [events]);
  
    /* useEffect: update the browser tab title */
    useEffect(() => {
      document.title = `Event Planner (${events.length} ${events.length === 1 ? 'event' : 'events'})`;
    }, [events]);
  
    return (
      <div className={`event-planner-container ${theme}`}>
        {/* 1. Header */}
        <header>
          <h1>Welcome to Event Planner</h1>
          <button className="get-started-button" onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
          </button>
        </header>
  
        {/* 2. Description + planner box */}
        <section className="description">
          <p>
            Plan and organize your events effortlessly with Event Planner. From
            birthdays to corporate meetings, we've got you covered.
          </p>
  
          <button
            className="get-started-button"
            onClick={() => {
              setShowPlanner(!showPlanner);
              setClicks(clicks + 1);
            }}
          >
            {showPlanner ? 'Hide Planner' : 'Get Started'}
          </button>
  
          <p>Clicked {clicks} {clicks === 1 ? 'time' : 'times'}</p>
  
          <button className="reset-button" onClick={() => setClicks(0)}>
            Reset counter
          </button>
  
          {showPlanner && (
            <div className="planner-box">
              <h3>🎉 Your Event Planner</h3>
  
              <EventForm onAddEvent={handleAddEvent} categories={eventCategories} />
  
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
                      <span>
                        {ev.name} ({ev.category})
                      </span>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(ev.id)}
                      >
                        ❌
                      </button>
                    </li>
                  ))}
                </ul>
              )}
  
              {events.length > 0 && (
                <button className="reset-button" onClick={handleClear}>
                  Clear all events
                </button>
              )}
            </div>
          )}
        </section>
  
        {/* 3. Categories */}
        <section className="events_categories">
          <h2 className="section-title">Categories</h2>
          {eventCategories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              events={category.events}
            />
          ))}
        </section>
  
        {/* 4. Features */}
        <section className="features">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
  
        {/* 5. Testimonials */}
        <section className="testimonials">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} name={t.name} text={t.text} />
            ))}
          </div>
        </section>
  
        {/* 6. Contact */}
        <section className="contact">
          <h2 className="section-title">Contact Us</h2>
          <ContactForm />
        </section>
  
        {/* 7. Footer */}
        <Footer />
      </div>
    );
  };
  
  export default EventPlanner;