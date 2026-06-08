import React from 'react';
import { Icons } from './icons.jsx';
import { ATLAS } from './data.js';
import * as DS from '../components/index.js';
/* AppHeader — brand lockup, view switcher, module legend. */
function AppHeader({ tab, onTab, theme, onToggleTheme }) {
  const { SegmentedTabs, IconButton } = DS;
  const I = Icons;
  const items = [
    { id: 'atlas', label: 'Atlas', icon: <I.Map/> },
    { id: 'paths', label: 'Paths', icon: <I.Route/> },
    { id: 'lessons', label: 'Lessons', icon: <I.List/> },
    { id: 'revise', label: 'Revise', icon: <I.Refresh/> },
  ];
  return (
    <header style={{
      height: 'var(--header-h)', flexShrink: 0, zIndex: 10, position: 'relative',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 20px', background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)',
    }}>
      {/* Lockup */}
      <div className="daa-lockup" style={{ minWidth: 200 }}>
        <img src={theme === 'dark' ? `${import.meta.env.BASE_URL}logo-mark-dark.png` : `${import.meta.env.BASE_URL}logo-mark-light.png`} alt="" style={{ width: 34, height: 34 }}/>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="daa-lockup__name">Data Analyst</span>
          <span className="daa-lockup__eyebrow">Encyclopedia</span>
        </div>
      </div>

      {/* View switcher */}
      <SegmentedTabs value={tab} onChange={onTab} items={items}/>

      {/* Right cluster: theme toggle + legend */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 200, justifyContent: 'flex-end' }}>
        <div className="daa-legend" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {ATLAS.modules.map(m => (
            <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 9, height: 9, borderRadius: 9999, background: m.color }}/>
              <span style={{ font: 'var(--type-meta)', color: 'var(--text-muted)' }}>{m.label.split(' ')[0]}</span>
            </div>
          ))}
        </div>
        <IconButton variant="outline" aria-label={theme === 'dark' ? 'Chế độ sáng' : 'Chế độ tối'} onClick={onToggleTheme}>
          {theme === 'dark' ? <I.Sun/> : <I.Moon/>}
        </IconButton>
      </div>
    </header>
  );
}
export default AppHeader;
