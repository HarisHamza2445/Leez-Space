import { useCallback, useEffect, useRef, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Explore, { FeatureStrip, Stats } from './components/Explore.jsx';
import Roi from './components/Roi.jsx';
import Builders from './components/Builders.jsx';
import Locations from './components/Locations.jsx';
import AppDownload from './components/AppDownload.jsx';
import Enquiry from './components/Enquiry.jsx';
import Footer from './components/Footer.jsx';
import Icon from './components/Icon.jsx';
import { useScrollY } from './hooks.js';

function Toast({ message }) {
  return (
    <div className={`toast ${message ? 'show' : ''}`} role="status" aria-live="polite">
      <Icon name="check" size={18} /> {message}
    </div>
  );
}

export default function App() {
  const [toast, setToast] = useState('');
  const timer = useRef();
  const y = useScrollY();

  const showToast = useCallback((msg) => {
    setToast(msg);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(''), 2800);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <div id="top">
      <Header onLogin={() => showToast('Login is coming soon — enquire below and we’ll call you')} />
      <main>
        <Hero onSearch={showToast} />
        <FeatureStrip />
        <Explore />
        <Stats />
        <Roi onToast={showToast} />
        <Builders />
        <Locations onToast={showToast} />
        <AppDownload />
        <Enquiry />
      </main>
      <Footer />
      <Toast message={toast} />
      <a href="#top" className={`to-top ${y > 900 ? 'show' : ''}`} aria-label="Back to top">
        <Icon name="chevronDown" size={22} style={{ transform: 'rotate(180deg)' }} />
      </a>
    </div>
  );
}
