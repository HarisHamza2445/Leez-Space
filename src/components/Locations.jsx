import Icon from './Icon.jsx';
import { Eyebrow, Reveal, SectionTitle } from './ui.jsx';
import { CITIES } from '../data.js';
import { useInView } from '../hooks.js';

function CityCard({ c, index, onNotify }) {
  return (
    <Reveal delay={index * 100} variant="up" className={`city ${c.live ? 'live' : 'soon'}`}>
      <a href={c.live ? '#properties' : undefined} onClick={c.live ? undefined : (e) => { e.preventDefault(); onNotify(c.name); }} className="city-link">
        <div className="city-media">
          <img src={c.image} alt={c.name} loading="lazy" />
          <span className={`city-tag ${c.live ? '' : 'muted'}`}>
            <Icon name={c.live ? 'pin' : 'clock'} size={16} /> {c.live ? 'Available' : 'Coming Soon'}
          </span>
        </div>
        <div className="city-body">
          <Icon name="building" size={30} className="city-icon" />
          <div>
            <strong>{c.name}</strong>
            <small>{c.tags}</small>
          </div>
          <span className="city-go">{c.live ? <Icon name="arrowRight" size={18} /> : <Icon name="bell" size={16} />}</span>
        </div>
      </a>
    </Reveal>
  );
}

function Route() {
  const [ref, inView] = useInView();
  return (
    <div className={`route ${inView ? 'is-in' : ''}`} ref={ref}>
      <svg viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M60 30 C 160 60, 200 0, 300 30 S 450 60, 520 30 S 650 0, 740 30 S 880 60, 940 30" />
      </svg>
      <ol>
        {CITIES.map((c, n) => (
          <li key={c.name} className={c.live ? 'live' : ''} style={{ '--i': n }}>
            <Icon name="pin" size={34} fill="currentColor" stroke={1.2} />
            <span>{c.name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Locations({ onToast }) {
  return (
    <section className="section locations" id="blog">
      <div className="container">
        <Reveal className="section-head center">
          <Eyebrow center>Locations</Eyebrow>
          <SectionTitle lead="Where We Are" accent="Available" />
          <p className="section-lead">Find the best properties in Noida and nearby cities. We are expanding to more cities soon.</p>
        </Reveal>
        <div className="city-grid">
          {CITIES.map((c, n) => (
            <CityCard key={c.name} c={c} index={n} onNotify={(name) => onToast(`We'll let you know when Leez Space launches in ${name}`)} />
          ))}
        </div>
        <Route />
      </div>
    </section>
  );
}
