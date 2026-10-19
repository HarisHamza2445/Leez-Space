import { useInView } from '../hooks.js';

/** Fades/slides children in when scrolled into view. */
export function Reveal({ as: Tag = 'div', delay = 0, variant = 'up', className = '', style, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? 'is-in' : ''} ${className}`}
      style={{ ...style, '--d': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, center = false }) {
  return (
    <p className={`eyebrow ${center ? 'eyebrow-center' : ''}`}>
      {center && <span className="eyebrow-line" />}
      <span>{children}</span>
      <span className="eyebrow-line" />
    </p>
  );
}

/** Heading where `accent` gets the teal gradient treatment. */
export function SectionTitle({ lead, accent, as: Tag = 'h2', className = '' }) {
  return (
    <Tag className={`section-title ${className}`}>
      {lead} <span className="accent-text">{accent}</span>
    </Tag>
  );
}

export function Logo({ light = false }) {
  return (
    <a href="#top" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Leez Space home">
      <span className="logo-mark">
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="19" />
          <path d="M14 9v17c0 3 1.6 4.5 4.5 4.5H28" />
        </svg>
      </span>
      <span className="logo-word">
        eez<small>Space</small>
      </span>
    </a>
  );
}
