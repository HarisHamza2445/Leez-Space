import { useMemo, useState } from 'react';
import Icon from './Icon.jsx';
import { Eyebrow, Reveal } from './ui.jsx';
import { APP_FEATURES, ROI_PROPERTIES } from '../data.js';

const MINI = [
  { icon: 'search', label: ['Verified', 'Listings'] },
  { icon: 'bell', label: ['Instant', 'Updates'] },
  { icon: 'calendar', label: ['Book', 'Visits'] },
  { icon: 'building', label: ['Direct', 'Connect'] },
];

// Decorative QR-style pattern (deterministic so it doesn't change between renders).
function QrArt() {
  const cells = useMemo(() => {
    const out = [];
    let seed = 7;
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) {
      const finder = (x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12);
      if (!finder && rnd() > 0.52) out.push([x, y]);
    }
    return out;
  }, []);
  const Finder = ({ x, y }) => (
    <g>
      <rect x={x} y={y} width="7" height="7" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x={x + 2} y={y + 2} width="3" height="3" rx=".6" />
    </g>
  );
  return (
    <svg viewBox="-0.5 -0.5 22 22" className="qr" aria-hidden="true">
      {cells.map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" rx=".2" />)}
      <Finder x={0} y={0} /><Finder x={14} y={0} /><Finder x={0} y={14} />
    </svg>
  );
}

function StoreBadge({ store }) {
  const play = store === 'play';
  return (
    <a href="#download" className="store-badge" aria-label={play ? 'Get it on Google Play' : 'Download on the App Store'}>
      {play ? (
        <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
          <path d="M4 2.5l10.5 9.5L4 21.5c-.4-.2-.6-.6-.6-1.1V3.6c0-.5.2-.9.6-1.1z" fill="#00d7fe" />
          <path d="M14.5 12L4 2.5c.3-.2.8-.2 1.2 0L17.8 9.6 14.5 12z" fill="#00f076" />
          <path d="M14.5 12l3.3 2.4L5.2 21.5c-.4.2-.9.2-1.2 0L14.5 12z" fill="#ff3a44" />
          <path d="M17.8 9.6l3 1.7c.8.5.8 1.3 0 1.8l-3 1.7-3.3-2.8 3.3-2.4z" fill="#ffd400" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff" aria-hidden="true">
          <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.2 1-4 2.5-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.4-.9-2.4-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.9-1.4z" />
        </svg>
      )}
      <span>
        <small>{play ? 'GET IT ON' : 'Download on the'}</small>
        <strong>{play ? 'Google Play' : 'App Store'}</strong>
      </span>
    </a>
  );
}

function PhoneHome() {
  const featured = ROI_PROPERTIES[0];
  return (
    <div className="phone phone-front">
      <div className="phone-notch" />
      <div className="screen">
        <div className="scr-top">
          <span className="scr-logo">Leez<small>SPACE</small></span>
          <span className="scr-bell"><Icon name="bell" size={16} /><i /></span>
        </div>
        <p className="scr-h">Find Your Next Space</p>
        <div className="scr-search"><Icon name="search" size={13} /> <span className="typing">Search location, property type…</span></div>
        <div className="scr-cats">
          {[['building', 'Office'], ['warehouse', 'Warehouse'], ['store', 'Shop'], ['home', 'Flat']].map(([i, l]) => (
            <span key={l}><b><Icon name={i} size={18} /></b>{l}</span>
          ))}
        </div>
        <div className="scr-skyline" />
        <div className="scr-card">
          <div className="scr-row"><b>Featured Properties</b><em>View All</em></div>
          <div className="scr-img" style={{ backgroundImage: `url(${featured.image})` }}><span><Icon name="heart" size={12} fill="currentColor" /></span></div>
          <b>Office Space for Rent</b>
          <small><Icon name="pin" size={11} /> Sector 62, Noida</small>
          <div className="scr-row small"><span>5,000 Sq. Ft.</span><b>₹1.8 Lakh<small>/mo</small></b></div>
        </div>
        <nav className="scr-nav">
          {[['home', 'Home'], ['search', 'Search'], ['heart', 'Saved'], ['user', 'Profile']].map(([i, l], n) => (
            <span key={l} className={n === 0 ? 'on' : ''}><Icon name={i} size={15} />{l}</span>
          ))}
        </nav>
      </div>
    </div>
  );
}

function PhoneDetail() {
  return (
    <div className="phone phone-back">
      <div className="phone-notch" />
      <div className="screen">
        <div className="scr-top"><Icon name="chevronLeft" size={16} /><b>Property Details</b><Icon name="heart" size={16} fill="currentColor" className="teal" /></div>
        <div className="scr-hero" style={{ backgroundImage: `url(${ROI_PROPERTIES[4].image})` }} />
        <div className="scr-detail">
          <b>Office Space for Rent</b>
          <small><Icon name="pin" size={11} /> Sector 62, Noida</small>
          <div className="scr-specs">
            <span><Icon name="area" size={15} />5,000<br />Sq. Ft.</span>
            <span><Icon name="sofa" size={15} />Furnished</span>
            <span><Icon name="calendar" size={15} />Ready<br />to Move</span>
          </div>
          <p className="scr-price">₹1.8 Lakh <small>per month</small></p>
          <span className="scr-btn"><Icon name="calendar" size={13} /> Book a Visit</span>
          <span className="scr-btn ghost"><Icon name="phone" size={13} /> Request Callback</span>
        </div>
      </div>
    </div>
  );
}

export default function AppDownload() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <section className="section app" id="download">
      <div className="container app-card">
        <div className="app-copy">
          <Reveal>
            <Eyebrow>Download App</Eyebrow>
            <h2 className="section-title">Find Your Next Space<br />on <span className="accent-text">Leez Space App</span></h2>
            <p className="section-lead">Search, explore and connect with verified properties for rent, lease and sale in Noida and nearby locations.</p>
          </Reveal>
          <Reveal className="mini-features" delay={120}>
            {MINI.map((m) => (
              <div key={m.icon}><span className="soft-icon"><Icon name={m.icon} size={24} /></span><span>{m.label[0]}<br />{m.label[1]}</span></div>
            ))}
          </Reveal>
          <Reveal className="download-row" delay={220}>
            <div className="qr-box"><QrArt /><small>Scan to Download</small></div>
            <div className="store-col"><StoreBadge store="play" /><StoreBadge store="apple" /></div>
          </Reveal>
        </div>

        <div
          className="phones"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setTilt({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
          }}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{ '--tx': tilt.x, '--ty': tilt.y }}
        >
          <span className="phones-glow" />
          <PhoneDetail />
          <PhoneHome />
        </div>

        <ul className="app-features">
          {APP_FEATURES.map((f, n) => (
            <Reveal as="li" key={f.title} delay={n * 110} variant="left">
              <span className="soft-icon lg"><Icon name={f.icon} size={28} /></span>
              <div><strong>{f.title}</strong><small>{f.text}</small></div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
