import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer'; // include
import CategoryCard from './CategoryCard';   // was CategoryGroup
import FeatureCard from './FeatureCard';
import TestimonialCard from './TestimonialCard';
import ContactForm from './ContactForm';

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
  {
    id: 1,
    icon: '📅',
    title: 'Easy Scheduling',
    description: 'Pick dates, set reminders and never double-book again.',
  },
  {
    id: 2,
    icon: '👥',
    title: 'Guest Management',
    description: 'Create guest lists, send invites and track who is coming.',
  },
  {
    id: 3,
    icon: '💰',
    title: 'Budget Tracking',
    description: 'Keep every expense in one place and stay within budget.',
  },
  {
    id: 4,
    icon: '✅',
    title: 'Task Checklists',
    description: 'Break your event into small tasks and tick them off.',
  },
];

const testimonials = [
  { id: 1, name: 'Amina K.', text: 'Event Planner made my wedding stress-free. Everything was on time!' },
  { id: 2, name: 'Lars P.', text: 'We organized our company conference in half the usual time.' },
  { id: 3, name: 'Sofia R.', text: 'The guest list tool saved me hours for my daughter\'s birthday.' },
];

const EventPlanner = () => {
    return (
        <div className="event-planner-container">

    {/* Page Header */}
    <header>
        <h1>Welcome to Event Planner</h1>
    </header>

    {/* Section for describing the purpose or overview of the app */}
    <section className="description">
        {/* Description content goes here */}
        <p>
        Plan and organize your events effortlessly with Event Planner. From
        birthdays to corporate meetings, we've got you covered.
    </p>
    {/* Primary call-to-action button */}
    <button className="get-started-button">Get Started</button>
    </section>

	{/* Section to list or categorize different types of events */}
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

    {/* Section to showcase user reviews or testimonials */}
    <section className="testimonials">
  <h2 className="section-title">What Our Clients Say</h2>
  <div className="testimonials-grid">
    {testimonials.map((t) => (
      <TestimonialCard key={t.id} name={t.name} text={t.text} />
    ))}
  </div>
</section>

    {/* Section to provide contact information or a contact form */}
    <section className="contact">
  <h2 className="section-title">Contact Us</h2>
  <ContactForm />
</section>

{/* Footer */}
<Footer />   {/* 👈 new */}
</div>

    );
};

export default EventPlanner;
