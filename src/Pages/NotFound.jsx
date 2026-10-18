import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section>
    <h2 className="section-title">Page not found</h2>
    <p>Sorry, that page does not exist.</p>
    <Link to="/">Go back home</Link>
  </section>
);

export default NotFound;