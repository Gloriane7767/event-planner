import React, {
  createContext, useContext, useReducer, useState,
  useMemo, useCallback, useEffect,
} from 'react';

const EventsContext = createContext();

/* The reducer (the "secretary") */
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

export const EventsProvider = ({ children }) => {
  /* State: load saved events at the start */
  const [events, dispatch] = useReducer(eventsReducer, [], (initial) => {
    try {
      const saved = localStorage.getItem('events');
      return saved ? JSON.parse(saved) : initial;
    } catch (error) {
      return initial;
    }
  });
  const [search, setSearch] = useState('');

  /* Save events every time they change */
  useEffect(() => {
    try {
      localStorage.setItem('events', JSON.stringify(events));
    } catch (error) {
      console.log('Could not save', error);
    }
  }, [events]);

  /* Tab title */
  useEffect(() => {
    document.title = `Event Planner (${events.length} ${events.length === 1 ? 'event' : 'events'})`;
  }, [events]);

  /* Remembered calculations */
  const filteredEvents = useMemo(
    () => events.filter((ev) => ev.name.toLowerCase().includes(search.toLowerCase())),
    [events, search]
  );

  const birthdayCount = useMemo(
    () => events.filter((ev) => ev.category === 'Birthday parties').length,
    [events]
  );

  /* Actions */
  const addEvent = useCallback((newEvent) => {
    dispatch({ type: 'ADD', payload: newEvent });
  }, []);

  const deleteEvent = (id) => dispatch({ type: 'DELETE', payload: id });
  const clearEvents = () => dispatch({ type: 'CLEAR' });

  /* Everything pages may need */
  const value = {
    events, filteredEvents, birthdayCount,
    search, setSearch,
    addEvent, deleteEvent, clearEvents,
  };

  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
};

/* A tiny custom hook so pages only write useEvents() */
export const useEvents = () => useContext(EventsContext);