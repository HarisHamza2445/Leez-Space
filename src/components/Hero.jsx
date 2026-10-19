import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { DEALS, FEATURES, HERO_IMAGE, LOCATION_SUGGESTIONS, PROPERTY_TYPES } from '../data.js';
import { useClickOutside, useScrollY, reduceMotion } from '../hooks.js';

const WORDS = ['Rent', 'Buy', 'Sell'];

/** "For Rent, Buy & Sell" with each verb lighting up in turn. */
function CyclingVerbs() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduceMotion()) return;
    const t = setInterval(() => setI((n) => (n + 1) % WORDS.length), 1800);
    return () => clearInterval(t);
  }, []);
  const word = (n) => <span className={`verb ${n === i ? 'on' : ''}`}>{WORDS[n]}</span>;
  return <>For {word(0)}, {word(1)} &amp; {word(2)}</>;
}

function SearchBar({ onSearch }) {
  const [deal, setDeal] = useState('Rent');
  const [query, setQuery] = useState('');
  const [type, setType] = useState('Residential');
  const [locOpen, setLocOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const locRef = useRef(null);
  const typeRef = useRef(null);

  useClickOutside(locRef, useCallback(() => setLocOpen(false), []));
  useClickOutside(typeRef, useCallback(() => setTypeOpen(false), []));

  const matches = LOCATION_SUGGESTIONS.filter((s) => s.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 6);

  const pick = (value) => {
    setQuery(value);
    setLocOpen(false);
  };

  const onKeyDown = (e) => {
    if (!locOpen || !matches.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlight((h) => (h + 1) % matches.length); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setHighlight((h) => (h - 1 + matches.length) % matches.length); }
    if (e.key === 'Enter' && matches[highlight]) { e.preventDefault(); pick(matches[highlight]); }
    if (e.key === 'Escape') setLocOpen(false);
  };

  const submit = (e) => {
    e.preventDefault();
    onSearch(`Searching ${type.toLowerCase()} properties to ${deal.toLowerCase()}${query ? ` in ${query}` : ' across Noida'}…`);
  };

  return (
    <form className="search" onSubmit={submit} role="search">
      <div className="search-tabs" role="tablist" aria-label="Deal type">
        {DEALS.map((d) => (
          <button key={d} type="button" role="tab" aria-selected={deal === d} className={deal === d ? 'on' : ''} onClick={() => setDeal(d)}>
            {d}
          </button>
        ))}
        <span className="search-tab-pill" style={{ transform: `translateX(${DEALS.indexOf(deal) * 100}%)` }} />
      </div>
      <div className="search-bar">
        <div className="search-field" ref={locRef}>
          <Icon name="pin" size={26} className="search-icon" />
          <label>
            <span>Search by location</span>
            <input
              value={query}
              placeholder="Noida, Sector 63…"
              onChange={(e) => { setQuery(e.target.value); setLocOpen(true); setHighlight(0); }}
              onFocus={() => setLocOpen(true)}
              onKeyDown={onKeyDown}
              autoComplete="off"
              aria-autocomplete="list"
              aria-expanded={locOpen}
            />
          </label>
          {locOpen && matches.length > 0 && (
            <ul className="dropdown" role="listbox">
              {matches.map((m, n) => (
                <li key={m} role="option" aria-selected={n === highlight} className={n === highlight ? 'hl' : ''} onMouseEnter={() => setHighlight(n)} onMouseDown={() => pick(m)}>
                  <Icon name="pin" size={16} /> {m}
                </li>
              ))}
            </ul>
          )}
        </div>
        <span className="search-divider" />
        <div className="search-field search-type" ref={typeRef}>
          <Icon name="building" size={26} className="search-icon" />
          <button type="button" className="search-select" onClick={() => setTypeOpen((o) => !o)} aria-expanded={typeOpen}>
            <span>Property Type</span>
            <strong>{type}</strong>
            <Icon name="chevronDown" size={20} className={`chev ${typeOpen ? 'up' : ''}`} />
          </button>
          {typeOpen && (
            <ul className="dropdown" role="listbox">
              {PROPERTY_TYPES.map((t) => (
                <li key={t} role="option" aria-selected={t === type} className={t === type ? 'hl' : ''} onMouseDown={() => { setType(t); setTypeOpen(false); }}>
                  {t === type && <Icon name="check" size={16} />} {t}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit" className="btn btn-primary search-btn">
          <Icon name="search" size={22} /> <span>Search</span>
        </button>
      </div>
    </form>
  );
}

export default function Hero({ onSearch }) {
  const y = useScrollY();
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <div className="hero-bg" style={{ transform: `translate3d(0, ${y * 0.35}px, 0)` }}>
          <img src={HERO_IMAGE} alt="" fetchpriority="high" />
        </div>
        <div className="hero-shade" />
        <div className="hero-glow" />
      </div>

      <div className="container hero-inner">
        <p className="hero-kicker anim-fade" style={{ '--d': '100ms' }}>
          Find <i>•</i> Compare <i>•</i> Connect
        </p>
        <h1 className="hero-title">
          <span className="line anim-rise" style={{ '--d': '200ms' }}>India’s Smart</span>
          <span className="line anim-rise" style={{ '--d': '320ms' }}>
            <span className="shimmer">Property</span> Platform
          </span>
        </h1>
        <p className="hero-sub anim-rise" style={{ '--d': '440ms' }}>
          <CyclingVerbs />
        </p>

        <ul className="hero-points">
          {FEATURES.map((f, n) => (
            <li key={f.title} className="anim-rise" style={{ '--d': `${560 + n * 90}ms` }}>
              <span className="ring-icon"><Icon name={f.icon} size={24} /></span>
              <span>{f.lines[0]}<br />{f.lines[1]}</span>
            </li>
          ))}
        </ul>

        <div className="anim-rise" style={{ '--d': '900ms' }}>
          <SearchBar onSearch={onSearch} />
        </div>
      </div>

      <svg className="hero-script" viewBox="0 0 260 150" aria-label="Your perfect space awaits">
        <text x="10" y="40" transform="rotate(-14 130 75)">Your</text>
        <text x="10" y="82" transform="rotate(-14 130 75)">Perfect Space</text>
        <text x="60" y="124" transform="rotate(-14 130 75)">Awaits</text>
        <path d="M70 140 C 130 128, 190 112, 250 92" />
      </svg>

      <div className="hero-float hero-float-a">
        <span className="dot-live" /> 128 new listings today
      </div>
      <div className="hero-float hero-float-b">
        <Icon name="star" size={16} fill="currentColor" /> 4.8 rated by 18k+ users
      </div>
    </section>
  );
}
