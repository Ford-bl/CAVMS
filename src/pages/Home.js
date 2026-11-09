import { Link } from 'react-router-dom';
import { events } from '../data/events';
import EventCard from '../components/EventCard';

function Home() {
  const featuredEvents = events.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow">YOUR CAMPUS. YOUR COMMUNITY.</span>
          <h1>Make campus life<br /><span>more meaningful.</span></h1>
          <p>Discover events, meet new people, and make a difference through volunteering at your university.</p>
          <div className="hero-actions">
            <Link to="/services" className="button">Explore Activities</Link>
            <Link to="/about" className="button button-outline">Learn About Us</Link>
          </div>
          <div className="hero-note"><span className="status-dot" /> Discover. Participate. Make an impact.</div>
        </div>
      </section>

      <section className="container stats">
        <div><strong>Campus</strong><span>Activities</span></div>
        <div><strong>Student</strong><span>Community</span></div>
        <div><strong>Real</strong><span>Impact</span></div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div><span className="eyebrow">WHAT'S HAPPENING</span><h2>Featured events</h2><p>Find something exciting to take part in.</p></div>
          <Link to="/services" className="text-link">View all events →</Link>
        </div>
        <div className="event-grid">
          {featuredEvents.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </section>

      <section className="impact-banner">
        <div className="container impact-content">
          <div><span className="eyebrow">BE PART OF SOMETHING GOOD</span><h2>Your time can make<br />a real difference.</h2><p>Join a volunteer opportunity and help strengthen your campus community.</p></div>
          <Link to="/services#volunteer" className="button button-light">Find volunteer opportunities</Link>
        </div>
      </section>
    </>
  );
}

export default Home;