import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer'; // include
import CategoryCard from './CategoryCard';   // was CategoryGroup
import FeatureCard from './FeatureCard';

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
    <h2>Categories</h2>
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
  <h2>Features</h2>
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
		{/* Section heading */}
		<h2>Testimonials</h2>
		{/* Individual testimonial block */}
		<div className="testimonial">
			<p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
			<p className="author">- Emily Johnson</p>
		</div>
		{/* Another testimonial block */}
		<div className="testimonial">
			<p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
			<p className="author">- John Smith</p>
		</div>
	</section>


    {/* Section to provide contact information or a contact form */}
    <section className="contact">
    {/* Section heading */}
    <h2>Contact Us</h2>
    {/* Contact form */}
    <form>
        {/* Name input field */}
        <input type="text" placeholder="Name" />
        {/* Email input field */}
        <input type="email" placeholder="Email" />
        {/* Message textarea */}
        <textarea placeholder="Message"></textarea>
        {/* Submit button */}
        <button className="submit-button">Send</button>
    </form>
</section>

{/* Footer */}
<Footer />   {/* 👈 new */}
</div>

    );
};

export default EventPlanner;
