import React from 'react';
import { Icons } from './icons.jsx';
import { ATLAS } from '../content/index.js';
import * as DS from '../components/index.js';
import LessonContent from './LessonContent.jsx';
import { useLang, pick, UI } from '../i18n.jsx';
/* LessonsView — module-grouped lesson library, with a reading view. */
function LessonsView({ targetModule, onModuleScrolled }) {
  const { Card, ModuleTag, Button, Badge, Input } = DS;
  const I = Icons;
  const A = ATLAS;
  const lang = useLang();
  const T = (f) => pick(f, lang);
  const [reading, setReading] = React.useState(null);

  React.useEffect(() => {
    if (targetModule) {
      const el = document.getElementById(`module-${targetModule}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (onModuleScrolled) onModuleScrolled();
    }
  }, [targetModule, onModuleScrolled]);

  if (reading) {
    const entry = A.lessons[reading.id];
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--surface-page)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 24px', background: 'var(--surface-card)', borderBottom: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ModuleTag module={reading.m}/>
            <h2 style={{ font: 'var(--type-h2)', color: 'var(--text-strong)' }}>{reading.t}</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Button variant="secondary" size="sm" onClick={() => setReading(null)}>{T(UI.backToLessons)}</Button>
            <Button size="sm" icon={<I.Check/>}>{T(UI.markLearned)}</Button>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '40px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', background: 'var(--surface-card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', padding: 36 }}>
            {entry && <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', marginBottom: 24,
              paddingLeft: 14, borderLeft: `3px solid ${A.modules.find(m=>m.id===reading.m).color}` }}>{T(entry.summary)}</p>}
            <LessonContent entry={entry} accent={A.modules.find(m=>m.id===reading.m).color}/>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: 'var(--surface-page)', padding: '40px 32px' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ font: 'var(--type-h2)', color: 'var(--text-strong)', marginBottom: 10 }}>{T(UI.lessonsTitle)}</h2>
          <p style={{ font: 'var(--type-body)', color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto 20px' }}>
            {T(UI.lessonsDesc)}
          </p>
          <div style={{ maxWidth: 380, margin: '0 auto' }}>
            <Input icon={<I.Search/>} placeholder={T(UI.searchPh)}/>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {A.modules.map(mod => {
            const nodes = A.nodes.filter(n => n.m === mod.id);
            return (
              <div key={mod.id} id={`module-${mod.id}`} style={{ scrollMarginTop: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid var(--border)',
                  paddingBottom: 8, marginBottom: 16 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 9999, background: mod.color }}/>
                  <h3 style={{ font: 'var(--type-h3)', color: 'var(--text-strong)' }}>{mod.label}</h3>
                  <Badge tone="neutral">{nodes.length} {T(UI.lessonsUnit)}</Badge>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 14 }}>
                  {nodes.map(node => {
                    const hasContent = !!A.lessons[node.id];
                    return (
                      <Card key={node.id} interactive padding={18} onClick={() => setReading(node)}
                            style={{ display: 'flex', flexDirection: 'column', minHeight: 124 }}>
                        <h4 style={{ font: 'var(--type-title)', color: 'var(--text-strong)', marginBottom: 6 }}>{node.t}</h4>
                        <p style={{ font: 'var(--type-meta)', color: 'var(--text-muted)', flex: 1 }}>
                          {hasContent ? T(A.lessons[node.id].summary).slice(0, 64) + '…' : T(UI.openToView)}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14 }}>
                          <ModuleTag module={mod.id}/>
                          <span style={{ font: 'var(--type-meta)', color: 'var(--text-link)' }}>{T(UI.read)}</span>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default LessonsView;
