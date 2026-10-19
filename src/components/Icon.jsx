// Lightweight line icons (24px grid, stroke-based) so the app has no icon dependency.
const paths = {
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" /><circle cx="17" cy="9" r="2.5" /><path d="M16 13.6c2.9 0 5 1.9 5 4.9" /></>,
  doc: <><path d="M7 3h7l5 5v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  building: <><path d="M5 21V4a1 1 0 011-1h8a1 1 0 011 1v17M15 9h3a1 1 0 011 1v11M3 21h18" /><path d="M8 7h1M11 7h1M8 11h1M11 11h1M8 15h1M11 15h1" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>,
  chevronDown: <path d="M6 9l6 6 6-6" />,
  chevronLeft: <path d="M15 6l-6 6 6 6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></>,
  home: <><path d="M3 11l9-7 9 7" /><path d="M5 10v10h5v-6h4v6h5V10" /></>,
  tree: <><path d="M12 3l5 7h-3l4 6H6l4-6H7l5-7z" /><path d="M12 16v5" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 13h18" /></>,
  store: <><path d="M4 9l1.5-5h13L20 9" /><path d="M4 9a2.7 2.7 0 005.3 0 2.7 2.7 0 005.4 0A2.7 2.7 0 0020 9" /><path d="M5 11v9h14v-9M10 20v-5h4v5" /></>,
  warehouse: <><path d="M3 20V9l9-5 9 5v11" /><path d="M7 20v-8h10v8M7 15h10" /></>,
  hotel: <><path d="M4 21V5a2 2 0 012-2h12a2 2 0 012 2v16M2 21h20" /><path d="M8 7h2M14 7h2M8 11h2M14 11h2M10 21v-5h4v5" /></>,
  grid: <><rect x="4" y="4" width="6" height="6" rx="1.5" /><rect x="14" y="4" width="6" height="6" rx="1.5" /><rect x="4" y="14" width="6" height="6" rx="1.5" /><rect x="14" y="14" width="6" height="6" rx="1.5" /></>,
  heart: <path d="M12 20s-7.5-4.6-9.2-9.3C1.7 7.4 3.8 4 7.2 4c2 0 3.6 1.1 4.8 2.8C13.2 5.1 14.8 4 16.8 4c3.4 0 5.5 3.4 4.4 6.7C19.5 15.4 12 20 12 20z" />,
  rupee: <><circle cx="12" cy="12" r="9" /><path d="M8.5 7.5h7M8.5 10.5h7M10 7.5c4 0 4 6-1.5 6L14 17" /></>,
  area: <><rect x="4" y="4" width="16" height="16" rx="1.5" /><path d="M4 9h3M4 14h3M9 4v3M14 4v3M9 20l11-11" /></>,
  chart: <><path d="M4 20V10M10 20V6M16 20v-8M22 20H2" /></>,
  trend: <><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z" />,
  coins: <><path d="M12 3v2M12 19v2" /><path d="M16 7.5c-.7-1.2-2.2-2-4-2-2.2 0-4 1.2-4 3s1.8 2.6 4 3 4 1.3 4 3-1.8 3-4 3c-1.8 0-3.3-.8-4-2" /></>,
  bell: <><path d="M6 16V11a6 6 0 0112 0v5l2 2H4l2-2z" /><path d="M10 20a2 2 0 004 0" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4" /></>,
  crown: <><path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8z" /></>,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  headset: <><path d="M4 14v-2a8 8 0 0116 0v2" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M19 19c0 1.5-2 2.5-5 2.5" /></>,
  handshake: <><path d="M2 11l4-4 4 2 3-2 3 1 4 3" /><path d="M6 7v6l5 5c.8.8 2 .8 2.8 0l4.7-4.7M9 14l2 2M11 12l2.5 2.5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  sofa: <><path d="M5 11V8a2 2 0 012-2h10a2 2 0 012 2v3" /><path d="M3 12a2 2 0 014 0v2h10v-2a2 2 0 014 0v5H3v-5zM5 17v2M19 17v2" /></>,
  bed: <><path d="M3 18V7M3 13h18v5M21 13a3 3 0 00-3-3h-7v3" /><circle cx="7" cy="10.5" r="1.8" /></>,
  wallet: <><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18M16 15h2" /></>,
  sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />,
  quote: <path d="M7 7h4v4c0 3-1.5 5-4 6M15 7h4v4c0 3-1.5 5-4 6" />,
};

export default function Icon({ name, size = 22, stroke = 1.9, fill = 'none', className = '', ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
