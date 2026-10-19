import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './EventPlanner.css';
import Footer from './Footer';
import Navbar from './Navbar';
import ProtectedRoute from './ProtectedRoute';
import { ThemeContext } from './ThemeContext';
import Home from '../Pages/Home';
import EventsPage from '../Pages/EventsPage';
import IdeasPage from '../Pages/IdeasPage';
import LoginPage from '../Pages/LoginPage';
import ContactPage from '../Pages/ContactPage';
import NotFound from '../Pages/NotFound';

const EventPlanner = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`event-planner-container ${theme}`}>
      <header>
        <h1>Welcome to Event Planner</h1>
        <button className="get-started-button" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
      </header>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <EventsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default EventPlanner;
