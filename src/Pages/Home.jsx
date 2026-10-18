import React from 'react';
import CategoryCard from '../Components/CategoryCard';
import FeatureCard from '../Components/FeatureCard';
import TestimonialCard from '../Components/TestimonialCard';
import { eventCategories } from '../data/eventCategories';
import { features } from '../data/features';
import { testimonials } from '../data/testimonials';

const Home = () => (
  <>
    <section className="events_categories">
      <h2 className="section-title">Categories</h2>
      {eventCategories.map((c) => (
        <CategoryCard key={c.id} icon={c.icon} title={c.title} events={c.events} />
      ))}
    </section>

    <section className="features">
      <h2 className="section-title">Features</h2>
      <div className="features-grid">
        {features.map((f) => (
          <FeatureCard key={f.id} icon={f.icon} title={f.title} description={f.description} />
        ))}
      </div>
    </section>

    <section className="testimonials">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} name={t.name} text={t.text} />
        ))}
      </div>
    </section>
  </>
);

export default Home;
