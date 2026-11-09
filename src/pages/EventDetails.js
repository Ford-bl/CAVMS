import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { events } from '../data/events';

function EventDetails() {
  const { id } = useParams();
  const event = events.find((item) => item.id === id);
  const [registered, setRegistered] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedRegistrations = JSON.parse(localStorage.getItem('cavmsRegistrations') || '[]');
    setRegistered(savedRegistrations.some((item) => item.eventId === id));
  }, [id]);

  function handleRegister() {
    const savedRegistrations = JSON.parse(localStorage.getItem('cavmsRegistrations') || '[]');
    if (savedRegistrations.some((item) => item.eventId === id)) {
      setMessage('You have already registered for this event.');
      return;
    }
    const registration = { eventId: id, eventTitle: event.title, registeredAt: new Date().toISOString() };
    localStorage.setItem('cavmsRegistrations', JSON.stringify([...savedRegistrations, registration]));
    setRegistered(true);
    setMessage('Your registration has been saved successfully in this browser.');
  }

  if (!event) {
    return <section className="container page-section"><h1 className="page-title">Event not found</h1><p className="lead">The event you are looking for does not exist.</p><Link to="/services" className="button">Browse events</Link></section>;
  }

  return (
    <section className="container page-section">
      <Link to="/services" className="back-link">← Back to events</Link>
      <div className="detail-layout">
        <img className="detail-image" src={event.image} alt={event.title} />
        <div className="detail-content">
          <span className="tag">{event.category}</span>
          <h1 className="page-title">{event.title}</h1>
          <p className="lead">{event.description}</p>
          <div className="detail-facts"><p><strong>Date:</strong> {event.date}</p><p><strong>Time:</strong> {event.time}</p><p><strong>Location:</strong> {event.location}</p><p><strong>Available places:</strong> {event.seats}</p></div>
          <button className="button" onClick={handleRegister} disabled={registered}>{registered ? 'Already registered' : 'Register for this event'}</button>
          {message && <p className="form-feedback" role="status">{message}</p>}
          <p className="demo-note">Demo note: registration is saved locally in your browser; it is not sent to a university server.</p>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;