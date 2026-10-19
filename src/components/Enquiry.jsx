import { useState } from 'react';
import Icon from './Icon.jsx';
import { Eyebrow, Reveal } from './ui.jsx';
import { CITIES, ENQUIRY_IMAGE, PROPERTY_TYPES } from '../data.js';

const PERKS = [
  { icon: 'building', label: ['Verified', 'Properties'] },
  { icon: 'pin', label: ['Best', 'Locations'] },
  { icon: 'headset', label: ['Expert', 'Assistance'] },
  { icon: 'bolt', label: ['Quick', 'Response'] },
];

const BUDGETS = ['Under ₹25 Lakh', '₹25 – 50 Lakh', '₹50 Lakh – 1 Cr', '₹1 – 3 Cr', '₹3 Cr+', 'Rent under ₹50k / mo', 'Rent ₹50k – 2 Lakh / mo'];
const TIMELINES = ['Immediately', 'Within 1 month', '1 – 3 months', '3 – 6 months', 'Just exploring'];
const LOCATIONS = [...CITIES.filter((c) => c.live).map((c) => c.name), 'Greater Noida', 'Greater Noida West', 'Noida Expressway'];

const EMPTY = { name: '', mobile: '', email: '', type: '', location: '', budget: '', when: '', notes: '' };

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = 'Please enter your name';
  if (!/^[6-9]\d{9}$/.test(f.mobile.replace(/\D/g, '').slice(-10)) || f.mobile.replace(/\D/g, '').length < 10) e.mobile = 'Enter a valid 10-digit mobile number';
  if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'That email doesn’t look right';
  if (!f.type) e.type = 'Choose a property type';
  if (!f.location) e.location = 'Choose a location';
  return e;
}

function Field({ icon, error, children, wide }) {
  return (
    <label className={`field ${error ? 'has-error' : ''} ${wide ? 'wide' : ''}`}>
      <Icon name={icon} size={20} className="field-icon" />
      {children}
      {error && <span className="field-error">{error}</span>}
    </label>
  );
}

function Select({ value, onChange, placeholder, options }) {
  return (
    <>
      <select value={value} onChange={onChange} className={value ? '' : 'placeholder'}>
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      <Icon name="chevronDown" size={18} className="field-chev" />
    </>
  );
}

export default function Enquiry() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus('sending');
    setTimeout(() => setStatus('done'), 1300);
  };

  return (
    <section className="section enquiry" id="enquiry">
      <div className="container enquiry-card">
        <div className="enquiry-media" style={{ backgroundImage: `url(${ENQUIRY_IMAGE})` }} />
        <div className="enquiry-copy">
          <Reveal>
            <Eyebrow>Enquiry</Eyebrow>
            <h2 className="section-title">Looking for the<br /><span className="accent-text">Right Space?</span></h2>
            <p className="section-lead">Tell us your requirements and our team will help you find the best properties in Noida, Greater Noida and Ghaziabad.</p>
          </Reveal>
          <Reveal className="perks" delay={120}>
            {PERKS.map((p) => (
              <div key={p.icon}><span className="soft-icon lg"><Icon name={p.icon} size={28} /></span><span>{p.label[0]}<br />{p.label[1]}</span></div>
            ))}
          </Reveal>
        </div>

        <Reveal className="form-card" variant="left" delay={100}>
          {status === 'done' ? (
            <div className="form-success">
              <svg viewBox="0 0 80 80" className="success-check" aria-hidden="true">
                <circle cx="40" cy="40" r="34" />
                <path d="M25 41l10 10 20-22" />
              </svg>
              <h3>Thanks, {form.name.split(' ')[0]}!</h3>
              <p>Our property expert will call you on <b>{form.mobile}</b> shortly with {form.type.toLowerCase()} options in {form.location}.</p>
              <button className="btn btn-outline" onClick={() => { setForm(EMPTY); setStatus('idle'); }}>Send another enquiry</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h3>Send Us Your Enquiry</h3>
              <p className="form-sub">Our property experts will get back to you shortly.</p>
              <div className="form-grid">
                <Field icon="user" error={errors.name}>
                  <input value={form.name} onChange={set('name')} placeholder="Full Name *" autoComplete="name" />
                </Field>
                <Field icon="phone" error={errors.mobile}>
                  <input value={form.mobile} onChange={set('mobile')} placeholder="Mobile Number *" inputMode="tel" autoComplete="tel" maxLength={14} />
                </Field>
                <Field icon="mail" error={errors.email} wide>
                  <input value={form.email} onChange={set('email')} placeholder="Email Address" type="email" autoComplete="email" />
                </Field>
                <Field icon="building" error={errors.type}>
                  <Select value={form.type} onChange={set('type')} placeholder="Property Type *" options={PROPERTY_TYPES} />
                </Field>
                <Field icon="pin" error={errors.location}>
                  <Select value={form.location} onChange={set('location')} placeholder="Preferred Location *" options={LOCATIONS} />
                </Field>
                <Field icon="wallet">
                  <Select value={form.budget} onChange={set('budget')} placeholder="Budget (Optional)" options={BUDGETS} />
                </Field>
                <Field icon="calendar">
                  <Select value={form.when} onChange={set('when')} placeholder="When do you need? (Optional)" options={TIMELINES} />
                </Field>
                <Field icon="doc" wide>
                  <textarea value={form.notes} onChange={set('notes')} placeholder="Additional Requirements (Optional)" rows={3} />
                </Field>
              </div>
              <button type="submit" className={`btn btn-primary btn-block ${status === 'sending' ? 'loading' : ''}`} disabled={status === 'sending'}>
                {status === 'sending' ? <><span className="spinner" /> Sending…</> : <>Submit Enquiry <Icon name="arrowRight" size={20} className="nudge" /></>}
              </button>
              <p className="form-note"><Icon name="lock" size={14} /> Your information is safe with us and will only be used for property assistance.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
