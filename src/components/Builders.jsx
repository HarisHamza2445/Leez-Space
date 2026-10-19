import { useRef } from 'react';
import Icon from './Icon.jsx';
import { Eyebrow, Reveal, SectionTitle } from './ui.jsx';
import { BUILDERS } from '../data.js';

const BADGES = [
  { icon: 'shield', label: ['Trusted', 'Developers'] },
  { icon: 'building', label: ['Verified', 'Projects'] },
  { icon: 'handshake', label: ['Wide Range', 'of Options'] },
];

function Wordmark({ b }) {
  return (
    <div className={`wordmark wm-${b.style}`}>
      <strong>{b.name}</strong>
      <small>{b.sub}</small>
    </div>
  );
}

export default function Builders() {
  const marqueeRef = useRef(null);

  // Arrow buttons nudge the marquee by shifting its animation clock.
  const nudge = (dir) => {
    const anim = marqueeRef.current?.getAnimations?.()[0];
    if (!anim) return;
    const step = (anim.effect.getTiming().duration / BUILDERS.length) * dir;
    anim.currentTime = (anim.currentTime ?? 0) + step;
  };

  return (
    <section className="section builders" id="about">
      <div className="container">
        <div className="builders-head">
          <Reveal className="section-head">
            <Eyebrow>Associated With Leading Builders</Eyebrow>
            <SectionTitle lead="Top Noida Based" accent="Builders" />
            <p className="section-lead">
              We work with trusted and reputed builders in Noida and Greater Noida to help you find the best commercial
              and residential properties.
            </p>
          </Reveal>
          <Reveal className="builder-badges" delay={150}>
            {BADGES.map((b) => (
              <div key={b.icon}>
                <span className="soft-icon lg"><Icon name={b.icon} size={28} /></span>
                <span>{b.label[0]}<br />{b.label[1]}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="marquee-shell" variant="zoom">
          <button className="round-btn prev" onClick={() => nudge(-1)} aria-label="Previous builders"><Icon name="chevronLeft" /></button>
          <div className="marquee">
            <div className="marquee-track" ref={marqueeRef}>
              {[...BUILDERS, ...BUILDERS].map((b, n) => (
                <div className="builder-tile" key={n} aria-hidden={n >= BUILDERS.length}>
                  <Wordmark b={b} />
                </div>
              ))}
            </div>
          </div>
          <button className="round-btn next" onClick={() => nudge(1)} aria-label="Next builders"><Icon name="chevronRight" /></button>
        </Reveal>

        <Reveal className="center-row">
          <a href="#about" className="btn btn-primary btn-lg">View All Builders <Icon name="arrowRight" size={20} className="nudge" /></a>
        </Reveal>
      </div>
    </section>
  );
}
