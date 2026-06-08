/* Lucide-style icons used across the Encyclopedia UI kit.
   The real product uses lucide-react; these mirror the same glyphs. */
const _S = (children, extra = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%" {...extra}>
    {children}
  </svg>
);

const Icons = {
  Map: () => _S(<><path d="m9 4 6 2 5-2v14l-5 2-6-2-5 2V6z"/><path d="M9 4v14M15 6v14"/></>),
  Route: () => _S(<><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H14a3.5 3.5 0 0 0 0-7H10a3.5 3.5 0 0 1 0-7h5.5"/></>),
  List: () => _S(<><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/></>),
  Refresh: () => _S(<><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/></>),
  Book: () => _S(<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>),
  X: () => _S(<path d="M18 6 6 18M6 6l12 12"/>),
  Search: () => _S(<><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>),
  Arrow: () => _S(<path d="M5 12h14M13 6l6 6-6 6"/>),
  Compass: () => _S(<><circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.9 6.5-6.5 2.9 2.9-6.5z"/></>),
  Sheet: () => _S(<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></>),
  Database: () => _S(<><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></>),
  Code: () => _S(<><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></>),
  Chart: () => _S(<><path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/></>),
  Trend: () => _S(<><path d="M22 7 13.5 15.5l-5-5L2 17"/><path d="M16 7h6v6"/></>),
  Flame: () => _S(<path d="M12 2c1 4 5 5 5 9a5 5 0 0 1-10 0c0-1.5.6-2.6 1.4-3.5C9 9 9.5 7 9 5c2 .5 2.5 2 3 3 .5-2 0-4 0-6z"/>),
  Check: () => _S(<path d="M20 6 9 17l-5-5"/>),
  Lock: () => _S(<><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>),
  Star: () => _S(<path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 17.8 6.2 20.8l1.1-6.4L2.6 9.8l6.5-.9z"/>),
  Play: () => _S(<path d="M6 4v16l13-8z" fill="currentColor" stroke="none"/>),
  Sun: () => _S(<><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>),
  Moon: () => _S(<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>),
};
export { Icons };
