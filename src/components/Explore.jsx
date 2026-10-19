import { useState } from 'react';
import Icon from './Icon.jsx';
import { Eyebrow, Reveal, SectionTitle } from './ui.jsx';
import { CATEGORIES, FEATURES, STATS } from '../data.js';
import { useCountUp, useInView } from '../hooks.js';

export function FeatureStrip() {
  return (
    <div className="container">
      <Reveal className="feature-strip" variant="up">
        {FEATURES.map((f, n) => (
          <div className="feature" key={f.title} style={{ '--i': n }}>
            <span className="soft-icon"><Icon name={f.icon} size={26} /></span>
            <div>
              <strong>{f.title}</strong>
              <small>{f.text}</small>
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

function Stat({ value, suffix, label, start }) {
  const n = useCountUp(value, start);
  return (
    <div className="stat">
      <strong>{n.toLocaleString('en-IN')}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

export function Stats() {
  const [ref, inView] = useInView();
  return (
    <div className="container">
      <div className="stats" ref={ref}>
        {STATS.map((s) => <Stat key={s.label} {...s} start={inView} />)}
      </div>
    </div>
  );
}

function CategoryCard({ cat, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -8, y: ((e.clientX - r.left) / r.width - 0.5) * 8 });
  };
  return (
    <Reveal delay={(index % 5) * 80} variant="zoom">
      <a
        href="#properties"
        className="cat-card"
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="cat-media">
          <img src={cat.image} alt="" loading="lazy" />
          <span className="cat-count">{cat.count.toLocaleString('en-IN')} listings</span>
        </div>
        <div className="cat-body">
          <span className="cat-icon"><Icon name={cat.icon} size={22} /></span>
          <span className="cat-title">{cat.title}</span>
          <span className="cat-arrow"><Icon name="arrowRight" size={16} /></span>
        </div>
      </a>
    </Reveal>
  );
}

export default function Explore() {
  return (
    <section className="section explore" id="properties">
      <div className="wave-bg" aria-hidden="true" />
      <div className="container">
        <Reveal className="section-head center">
          <Eyebrow center>Explore Properties</Eyebrow>
          <SectionTitle lead="Find Your Ideal Space on" accent="Leez Space" />
          <p className="section-lead">
            From homes and apartments to offices, warehouses, shops and plots, explore verified properties based on
            your requirement, location and budget.
          </p>
        </Reveal>
        <div className="cat-panel">
          <div className="cat-grid">
            {CATEGORIES.map((c, n) => <CategoryCard key={c.title} cat={c} index={n} />)}
          </div>
        </div>
        <Reveal className="center-row">
          <a href="#properties" className="btn btn-outline">
            <Icon name="grid" size={20} /> View All Categories <Icon name="arrowRight" size={18} className="nudge" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
