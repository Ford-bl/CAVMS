import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div><h3>CAVMS</h3><p>Bringing students together through activities and volunteering.</p></div>
        <div className="footer-links"><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/services">Events</Link><Link to="/contact">Contact</Link></div>
        <p className="copyright">© {new Date().getFullYear()} CAVMS. Student project demonstration.</p>
      </div>
    </footer>
  );
}

export default Footer;