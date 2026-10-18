import React from 'react';
import useFetch from '../Components/useFetch';

const IdeasPage = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );

  if (loading) {
    return <p className="status-message">⏳ Loading ideas...</p>;
  }

  if (error) {
    return <p className="status-message error">⚠️ Could not load ideas: {error}</p>;
  }

  return (
    <section>
      <h2 className="section-title">Event Ideas</h2>
      <div className="ideas-grid">
        {data.map((idea) => (
          <div key={idea.id} className="idea-card">
            <h3>{idea.title}</h3>
            <p>{idea.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IdeasPage;
