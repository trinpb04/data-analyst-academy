import React from 'react';
/* LessonContent — renders a structured encyclopedia entry. Supports:
   {h, p} heading+prose · {p} prose · {list:[[term,def]]} glossary ·
   {code, lang} code block · {formula, caption} equation card ·
   {calc, steps:[]} worked calculation · {note} callout/quote ·
   {img, caption} image from PDF with caption. */
function LessonContent({ entry, accent = 'var(--brand)' }) {
  if (!entry) {
    return (
      <p style={{ font: 'var(--type-body)', color: 'var(--text-muted)' }}>
        Nội dung bài học đang được biên soạn. Chọn một node khác trên Atlas để bắt đầu học.
      </p>
    );
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {entry.body.map((blk, i) => {
        if (blk.code) {
          return (
            <div key={i} style={{ position: 'relative' }}>
              {blk.lang && (
                <span style={{ position: 'absolute', top: 10, right: 12, font: 'var(--type-meta)',
                  fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--slate-400)' }}>{blk.lang}</span>
              )}
              <pre style={{ margin: 0, background: 'var(--slate-950)', color: '#e2e8f0',
                padding: '16px 18px', borderRadius: 'var(--radius-lg)', font: 'var(--type-code)',
                fontSize: 13, lineHeight: 1.65, overflowX: 'auto', whiteSpace: 'pre' }}
                dangerouslySetInnerHTML={{ __html: highlightCode(blk.code) }} />
            </div>
          );
        }
        if (blk.formula) {
          return (
            <div key={i} style={{ background: 'var(--surface-sunken)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ font: 'var(--fw-medium) 19px/1.5 var(--font-mono)', color: 'var(--text-strong)', whiteSpace: 'pre-wrap' }}>{blk.formula}</div>
              {blk.caption && <div style={{ font: 'var(--type-meta)', color: 'var(--text-muted)', marginTop: 10 }}>{blk.caption}</div>}
            </div>
          );
        }
        if (blk.calc) {
          return (
            <div key={i} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ padding: '8px 14px', background: 'var(--surface-sunken)', borderBottom: '1px solid var(--border)',
                font: 'var(--fw-semibold) 12px/1 var(--font-sans)', color: 'var(--text-strong)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {blk.calc}
              </div>
              <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {blk.steps.map((s, j) => (
                  <div key={j} style={{ font: 'var(--type-code)', color: j === blk.steps.length - 1 ? 'var(--text-strong)' : 'var(--text-body)',
                    fontWeight: j === blk.steps.length - 1 ? 600 : 400 }}>{s}</div>
                ))}
              </div>
            </div>
          );
        }
        if (blk.img) {
          return (
            <div key={i} style={{ margin: '4px 0' }}>
              <img
                src={blk.img}
                alt={blk.caption || 'Hình minh họa từ PDF'}
                style={{
                  width: '100%', borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                  display: 'block',
                }}
              />
              {blk.caption && (
                <p style={{
                  font: 'var(--type-meta)', color: 'var(--text-faint)',
                  textAlign: 'center', marginTop: 6, fontStyle: 'italic',
                  fontSize: 12,
                }}>{blk.caption}</p>
              )}
            </div>
          );
        }
        if (blk.note) {
          return (
            <div key={i} style={{ background: 'var(--brand-soft)', borderLeft: `3px solid ${accent}`,
              borderRadius: '0 var(--radius-md) var(--radius-md) 0', padding: '12px 16px' }}>
              <p style={{ font: 'var(--fw-medium) 14px/1.6 var(--font-sans)', color: 'var(--note-text)' }}>{blk.note}</p>
            </div>
          );
        }
        if (blk.list) {
          return (
            <ul key={i} style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {blk.list.map(([term, def], j) => (
                <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                  <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: 9999, background: accent, transform: 'translateY(-2px)' }} />
                  <span>
                    <span style={{ font: 'var(--fw-semibold) 14px/1.5 var(--font-sans)', color: 'var(--text-strong)' }}>{term}</span>
                    {def ? <span style={{ font: 'var(--type-body)', fontSize: 14, color: 'var(--text-body)' }} dangerouslySetInnerHTML={{ __html: ' — ' + def.replace(/`([^`]+)`/g, '<code style="background:var(--surface-sunken);padding:1px 5px;border-radius:4px;font-family:var(--font-mono);font-size:12.5px;color:var(--text-strong)">$1</code>') }} /> : null}
                  </span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <div key={i}>
            {blk.h && <h3 style={{ font: 'var(--type-h3)', color: 'var(--text-strong)', marginBottom: 8 }}>{blk.h}</h3>}
            {blk.p && <p style={{ font: 'var(--type-body)', fontSize: 15, color: 'var(--text-body)' }}>{blk.p}</p>}
          </div>
        );
      })}
      {entry.source && <p style={{ font: 'var(--type-meta)', color: 'var(--text-faint)', fontStyle: 'italic', marginTop: 4 }}>{entry.source}</p>}
    </div>
  );
}

/* Lightweight SQL/Python/DAX keyword highlighter for the dark code blocks.
   Single-pass tokenizer so inserted markup is never re-processed. */
function highlightCode(code) {
  const esc = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const token = /(--[^\n]*|#[^\n]*)|('[^']*'|"[^"]*")|\b(SELECT|FROM|WHERE|GROUP BY|ORDER BY|HAVING|JOIN|LEFT|RIGHT|INNER|FULL|OUTER|ON|AS|AND|OR|NOT|IN|DESC|ASC|OVER|PARTITION BY|WITH|CASE|WHEN|THEN|ELSE|END|import|def|return|for|in|if|else|None|True|False|CALCULATE|SUMX|AVERAGEX|FILTER|DIVIDE|VAR|RETURN|SAMEPERIODLASTYEAR|SUM|COUNT|AVG|RANK|REFERENCES)\b/g;
  return esc.replace(token, (m, comment, str, kw) => {
    if (comment) return '<span style="color:#64748b">' + comment + '</span>';
    if (str) return '<span style="color:#f2c811">' + str + '</span>';
    if (kw) return '<span style="color:#5fd3ba">' + kw + '</span>';
    return m;
  });
}
export default LessonContent;
