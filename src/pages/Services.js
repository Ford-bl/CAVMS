import { useState } from 'react';
import { events, volunteerOpportunities } from '../data/events';
import EventCard from '../components/EventCard';

function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Campus', 'Volunteering', 'Academic', 'Sports'];
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || event.category === category;
    return matchesSearch && matchesCategory;
  });

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <section className="container page-section">
      <span className="eyebrow">EXPLORE & PARTICIPATE</span>
      <h1 className="page-title">Events and opportunities</h1>
      <p className="lead">Discover what's happening on campus and find a way to get involved.</p>

      <div className="filter-bar">
        <input type="search" placeholder="Search events..." value={searchTerm} onChange={handleSearch} aria-label="Search events" />
        <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category">
          {categories.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </div>

      <div className="event-grid">
        {filteredEvents.length > 0
          ? filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
          : <p className="empty-state">No events match your search. Try another keyword or category.</p>}
      </div>

      <div id="volunteer" className="volunteer-section">
        <span className="eyebrow">GIVE YOUR TIME</span>
        <h2>Volunteer opportunities</h2>
        <p className="section-intro">Small actions can create a big impact. Find an opportunity that fits you.</p>
        <div className="opportunity-grid">
          {volunteerOpportunities.map((item) => (
            <article className="opportunity-card" key={item.id}>
              <span className="tag">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="commitment">Time commitment: {item.commitment}</span>
              <a className="text-link" href="/contact">Ask about volunteering →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;