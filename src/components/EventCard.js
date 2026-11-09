import { Link } from 'react-router-dom';

function EventCard({ event }) {
  const date = new Date('${event.date}T12:00:00');
  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <article className="event-card">
      <img src={event.image} alt={event.title} />
      <div className="event-card-content">
        <span className="tag">{event.category}</span>
        <h3>{event.title}</h3>
        <p className="event-meta">{formattedDate} · {event.time}</p>
        <p>{event.description}</p>
        <Link className="text-link" to={'/events/${event.id}'}>View details <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}

export default EventCard;