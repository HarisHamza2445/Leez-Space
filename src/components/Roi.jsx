import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { Eyebrow, Reveal, SectionTitle } from './ui.jsx';
import { ROI_BENEFITS, ROI_PROPERTIES } from '../data.js';
import { useInView, reduceMotion } from '../hooks.js';

function GrowthArt() {
  const [ref, inView] = useInView();
  const bars = [28, 40, 52, 66, 82, 100];
  return (
    <div className={`growth-art ${inView ? 'is-in' : ''}`} ref={ref} aria-hidden="true">
      <div className="growth-bars">
        {bars.map((h, n) => <span key={n} style={{ '--h': `${h}%`, '--i': n }} />)}
      </div>
      <svg viewBox="0 0 300 160" className="growth-line">
        <path d="M10 140 C 70 130, 110 110, 150 90 S 230 40, 280 14" />
        <path className="growth-head" d="M262 10 L284 12 L276 32" />
      </svg>
    </div>
  );
}

function YieldMeter({ min, max, active }) {
  return (
    <div className="yield">
      <div className="yield-track">
        <span style={{ left: `${(min / 15) * 100}%`, width: active ? `${((max - min) / 15) * 100}%` : 0 }} />
      </div>
    </div>
  );
}

function RoiCard({ p, saved, onSave, active }) {
  return (
    <article className="roi-card">
      <div className="roi-media">
        <img src={p.image} alt={p.name} loading="lazy" />
        <span className="roi-badge">{p.badge}</span>
        <button className={`heart ${saved ? 'on' : ''}`} onClick={onSave} aria-pressed={saved} aria-label={saved ? `Remove ${p.name} from saved` : `Save ${p.name}`}>
          <Icon name="heart" size={20} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <span className="roi-type"><Icon name={p.typeIcon} size={18} /> {p.type}</span>
      </div>
      <div className="roi-body">
        <h3>{p.name}</h3>
        <p className="roi-loc"><Icon name="pin" size={18} /> {p.location}</p>
        <div className="roi-specs">
          <span><Icon name="building" size={20} /> {p.size}</span>
          <span>
            <Icon name="rupee" size={20} />
            <span><b>{p.yieldMin}% – {p.yieldMax}%</b><small>Est. Rental Yield</small></span>
          </span>
        </div>
        <YieldMeter min={p.yieldMin} max={p.yieldMax} active={active} />
        <div className="roi-foot">
          <p className="roi-price"><b>{p.price}</b><small>Onwards</small></p>
          <a href="#enquiry" className="btn btn-outline btn-sm">View Details <Icon name="arrowRight" size={16} className="nudge" /></a>
        </div>
      </div>
    </article>
  );
}

export default function Roi({ onToast }) {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [paused, setPaused] = useState(false);
  const [saved, setSaved] = useState(() => new Set());
  const [inViewRef, inView] = useInView();

  const measure = () => {
    const el = trackRef.current;
    if (!el) return;
    setPages(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)));
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  };

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const go = (n) => {
    const el = trackRef.current;
    const target = (n + pages) % pages;
    el.scrollTo({ left: target * el.clientWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    if (paused || !inView || reduceMotion()) return;
    const t = setInterval(() => go(page + 1), 4500);
    return () => clearInterval(t);
  }, [paused, inView, page, pages]);

  const toggleSave = (p) => {
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(p.name) ? next.delete(p.name) : next.add(p.name);
      onToast(next.has(p.name) ? `Saved ${p.name} to your shortlist` : `Removed ${p.name}`);
      return next;
    });
  };

  return (
    <section className="section roi">
      <div className="container">
        <div className="roi-head">
          <Reveal className="section-head">
            <Eyebrow>Invest Smart</Eyebrow>
            <SectionTitle lead="Best for ROI" accent="Properties" className="xl" />
            <p className="section-lead">
              Explore high-potential properties in prime locations, ideal for long-term growth and better rental returns.
            </p>
          </Reveal>
          <GrowthArt />
        </div>

        <div className="carousel" ref={inViewRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <button className="round-btn prev" onClick={() => go(page - 1)} aria-label="Previous properties"><Icon name="chevronLeft" /></button>
          <div className="carousel-track" ref={trackRef} onScroll={measure}>
            {ROI_PROPERTIES.map((p, n) => (
              <Reveal key={p.name} delay={(n % 4) * 90} className="carousel-item">
                <RoiCard p={p} saved={saved.has(p.name)} onSave={() => toggleSave(p)} active={inView} />
              </Reveal>
            ))}
          </div>
          <button className="round-btn next" onClick={() => go(page + 1)} aria-label="Next properties"><Icon name="chevronRight" /></button>
        </div>
        <div className="dots" role="tablist" aria-label="Carousel pages">
          {Array.from({ length: pages }, (_, n) => (
            <button key={n} className={n === page ? 'on' : ''} onClick={() => go(n)} aria-label={`Page ${n + 1}`} aria-selected={n === page} role="tab" />
          ))}
        </div>

        <Reveal className="benefits">
          {ROI_BENEFITS.map((b) => (
            <div className="benefit" key={b.title}>
              <span className="soft-icon lg"><Icon name={b.icon} size={28} /></span>
              <div><strong>{b.title}</strong><small>{b.text}</small></div>
            </div>
          ))}
        </Reveal>
        <Reveal className="center-row">
          <a href="#properties" className="btn btn-primary btn-lg">View All ROI Properties <Icon name="arrowRight" size={20} className="nudge" /></a>
        </Reveal>
      </div>
    </section>
  );
}
