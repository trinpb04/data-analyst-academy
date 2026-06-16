import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const get = () => typeof window !== 'undefined' && window.matchMedia(query).matches;
  const [match, setMatch] = useState(get);
  useEffect(() => {
    const m = window.matchMedia(query);
    const on = () => setMatch(m.matches);
    on();
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, [query]);
  return match;
}

export const useIsMobile = () => useMediaQuery('(max-width: 480px)');
export const useIsTablet = () => useMediaQuery('(max-width: 768px)');
