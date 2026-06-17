import React, { useState, useEffect } from 'react';
import AppHeader from './views/AppHeader';
import AtlasView from './views/AtlasView';
import PathsView from './views/PathsView';
import LessonsView from './views/LessonsView';
import ReviseView from './views/ReviseView';
import { LangContext } from './i18n.jsx';

function App() {
  const [tab, setTab] = useState(() => (typeof window !== 'undefined' && window.matchMedia('(max-width: 480px)').matches) ? 'lessons' : 'atlas');
  const [theme, setTheme] = useState(() => localStorage.getItem('daa-theme') || 'light');
  const [lang, setLang] = useState(() => localStorage.getItem('daa-lang') || 'en');
  const [targetModule, setTargetModule] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('daa-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('daa-lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  const toggleLang = () => setLang(l => (l === 'vi' ? 'en' : 'vi'));

  const navigateToModule = (modId) => {
    setTab('lessons');
    // Set a slight timeout so that the view has time to mount before scrolling
    setTimeout(() => setTargetModule(modId), 10);
  };

  let View;
  switch(tab) {
    case 'atlas': View = AtlasView; break;
    case 'paths': View = PathsView; break;
    case 'lessons': View = LessonsView; break;
    case 'revise': View = ReviseView; break;
    default: View = AtlasView;
  }

  return (
    <LangContext.Provider value={lang}>
      <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', background: 'var(--surface-page)', overflow: 'hidden' }}>
        <AppHeader tab={tab} onTab={setTab} theme={theme} onToggleTheme={toggleTheme} lang={lang} onToggleLang={toggleLang} />
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          <View
            onNavigateToModule={navigateToModule}
            targetModule={targetModule}
            onModuleScrolled={() => setTargetModule(null)}
          />
        </div>
      </div>
    </LangContext.Provider>
  );
}

export default App;
