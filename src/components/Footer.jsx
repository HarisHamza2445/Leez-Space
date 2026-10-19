import Icon from './Icon.jsx';
import { Logo } from './ui.jsx';

const COLS = [
  { title: 'Properties', links: ['Flats & Apartments', 'Office Space', 'Shops & Showrooms', 'Warehouses', 'Residential Plots'] },
  { title: 'Company', links: ['About Us', 'Builders', 'Careers', 'Blog', 'Contact'] },
  { title: 'Support', links: ['Help Centre', 'List Your Property', 'Privacy Policy', 'Terms of Use'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-skyline" aria-hidden="true" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>India’s smart property platform to rent, buy and sell verified homes and commercial spaces across Noida, Greater Noida and Ghaziabad.</p>
          <div className="footer-contact">
            <a href="tel:+919999999999"><Icon name="phone" size={16} /> +91 99999 99999</a>
            <a href="mailto:hello@leezspace.in"><Icon name="mail" size={16} /> hello@leezspace.in</a>
            <span><Icon name="pin" size={16} /> Sector 63, Noida, Uttar Pradesh</span>
          </div>
        </div>
        {COLS.map((c) => (
          <div key={c.title} className="footer-col">
            <h4>{c.title}</h4>
            <ul>{c.links.map((l) => <li key={l}><a href="#top">{l}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Leez Space. All rights reserved.</span>
        <span>Made with care in Noida</span>
      </div>
    </footer>
  );
}
