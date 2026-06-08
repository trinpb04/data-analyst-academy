import React, { useState, useEffect } from 'react';
import AppHeader from './views/AppHeader';
import AtlasView from './views/AtlasView';
import PathsView from './views/PathsView';
import LessonsView from './views/LessonsView';
import ReviseView from './views/ReviseView';

function App() {
  const [tab, setTab] = useState('atlas');
  const [theme, setTheme] = useState(() => localStorage.getItem('daa-theme') || 'light');
  const [targetModule, setTargetModule] = useState(null);
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('daa-theme', theme);
  }, [theme]);
  
  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

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
    <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', background: 'var(--surface-page)', overflow: 'hidden' }}>
      <AppHeader tab={tab} onTab={setTab} theme={theme} onToggleTheme={toggleTheme} />
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <View 
          onNavigateToModule={navigateToModule} 
          targetModule={targetModule} 
          onModuleScrolled={() => setTargetModule(null)} 
        />
      </div>
    </div>
  );
}

export default App;
