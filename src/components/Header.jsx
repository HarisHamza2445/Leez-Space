import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { Logo } from './ui.jsx';
import { NAV } from '../data.js';
import { useScrollY } from '../hooks.js';

export default function Header({ onLogin }) {
  const y = useScrollY();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const solid = y > 40 || open;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const progress = typeof document !== 'undefined'
    ? Math.min(1, y / Math.max(1, document.documentElement.scrollHeight - window.innerHeight))
    : 0;

  return (
    <header className={`header ${solid ? 'header-solid' : ''}`}>
      <div className="container header-inner">
        <Logo light={!solid} />
        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`nav-link ${active === item ? 'active' : ''}`}
              onClick={() => setActive(item)}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="#enquiry" className="btn btn-ghost-light header-cta">List Property</a>
          <button className="btn btn-outline-light" onClick={onLogin}>
            <Icon name="user" size={18} /> Login
          </button>
          <button
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {NAV.map((item, i) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{ '--i': i }} onClick={() => { setActive(item); setOpen(false); }}>
            {item} <Icon name="arrowRight" size={18} />
          </a>
        ))}
        <a href="#enquiry" style={{ '--i': NAV.length }} onClick={() => setOpen(false)}>
          List Property <Icon name="arrowRight" size={18} />
        </a>
      </div>
      <span className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}
