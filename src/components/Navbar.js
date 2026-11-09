import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container">
        <Link to="/" className="brand" aria-label="CAVMS home">
          <span className="brand-mark">C</span>
          <span>CAVMS<small>Campus Activities</small></span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Events & Volunteer</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <Link to="/services" className="button button-small nav-cta">Explore Events</Link>
      </nav>
    </header>
  );
}

export default Navbar;