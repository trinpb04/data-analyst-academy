import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { Icons } from './icons.jsx';
import { ATLAS } from '../content/index.js';
import * as DS from '../components/index.js';
import LessonContent from './LessonContent.jsx';
import { useLang, pick, UI } from '../i18n.jsx';
import { useIsMobile, useIsTablet } from '../useMediaQuery.js';

const ATLAS_UI = {
  hint: { vi: 'Cuộn để Zoom • Kéo để Di chuyển • Nhấn vào Node để học', en: 'Scroll to zoom • Drag to pan • Click a node to learn' },
  close: { vi: 'Đóng', en: 'Close' },
};

// helper: hex + alpha → rgba()
function hexA(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

function lighten(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.min(255, ((n >> 16) & 255) + amt * 255),
    g = Math.min(255, ((n >> 8) & 255) + amt * 255),
    b = Math.min(255, (n & 255) + amt * 255);
  return `rgb(${r | 0},${g | 0},${b | 0})`;
}

function darken(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const r = ((n >> 16) & 255) * (1 - amt),
    g = ((n >> 8) & 255) * (1 - amt),
    b = (n & 255) * (1 - amt);
  return `rgb(${r | 0},${g | 0},${b | 0})`;
}

/* AtlasView — the knowledge graph canvas + sliding encyclopedia sidebar. */
function AtlasView() {
  const { IconButton, ModuleTag, Button } = DS;
  const I = Icons;
  const A = ATLAS;
  const lang = useLang();
  const T = (f) => pick(f, lang);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const [active, setActive] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [draggedNode, setDraggedNode] = useState(null);
  const focusNode = draggedNode || hoveredNode || active;
  const fgRef = useRef(null);
  const wrapRef = useRef(null);
  const isDragging = useRef(false);
  const returnAnimRef = useRef(null); // rAF id for return animation
  const dragAnimRef = useRef(null);   // rAF id for continuous drag-follow loop
  const dragNodeRef = useRef(null);   // live reference to dragged node
  const [size, setSize] = useState({ w: 800, h: 600 });
  const [themeTick, setThemeTick] = useState(0);

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  const colorOf = (m) => A.modules.find(x => x.id === m).color;
  const entry = active ? A.lessons[active.id] : null;

  const data = useMemo(() => ({
    nodes: A.nodes.map(n => ({ id: n.id, title: n.t, moduleId: n.m, val: n.v, color: colorOf(n.m), initialX: n.x, initialY: n.y, x: n.x, y: n.y })),
    links: A.links.map(([source, target]) => ({ source, target })),
  }), []);

  // Pre-compute full adjacency map for instant neighbor lookup during drag
  const adjacencyMap = useMemo(() => {
    const map = new Map();
    data.links.forEach(l => {
      const s = typeof l.source === 'object' ? l.source.id : l.source;
      const t = typeof l.target === 'object' ? l.target.id : l.target;
      if (!map.has(s)) map.set(s, new Set());
      if (!map.has(t)) map.set(t, new Set());
      map.get(s).add(t);
      map.get(t).add(s);
    });
    return map;
  }, [data.links]);

  // Build neighbor set for hover/drag highlight
  const neighborSet = useMemo(() => {
    if (!focusNode) return null;
    const set = new Set([focusNode.id]);
    const neighbors = adjacencyMap.get(focusNode.id);
    if (neighbors) neighbors.forEach(id => set.add(id));
    return set;
  }, [focusNode, adjacencyMap]);

  // Stars for space mode
  const stars = useMemo(() =>
    Array.from({ length: 220 }, () => ({
      x: (Math.random() - 0.5) * 2000,
      y: (Math.random() - 0.5) * 2000,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random() * 0.6 + 0.2,
      tw: Math.random() * Math.PI * 2,
    })), []);

  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver(([e]) => {
      const r = e.contentRect;
      setSize({ w: r.width, h: r.height });
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (fgRef.current && isTablet) {
      // Small delay to ensure the graph has rendered
      setTimeout(() => {
        if (fgRef.current) fgRef.current.zoomToFit(400, 40);
      }, 50);
    }
  }, [size, isTablet]);

  // Set up physics: disable ALL d3 forces, pin nodes at initial positions
  useEffect(() => {
    const fg = fgRef.current;
    if (!fg) return;
    fg.d3Force('charge', null);
    fg.d3Force('link', null);
    fg.d3Force('center', null);
    // Pin every node at its designed position
    data.nodes.forEach(n => { n.fx = n.initialX; n.fy = n.initialY; });
  }, []);

  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => setThemeTick(t => t + 1));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  // DARK MODE PRE-RENDER (Stars + Nebula)
  const renderPreDark = useCallback((ctx, scale) => {
    const t = performance.now() / 1000;

    // 1) Nebula mờ cho từng cụm
    const graphNodes = data.nodes;
    for (const m of A.modules) {
      const ns = graphNodes.filter(n => n.moduleId === m.id && typeof n.x === 'number' && !isNaN(n.x));
      if (!ns.length) continue;
      const cx = ns.reduce((s, n) => s + n.x, 0) / ns.length;
      const cy = ns.reduce((s, n) => s + n.y, 0) / ns.length;
      const R = 180;

      if (isNaN(cx) || isNaN(cy)) continue;

      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
      g.addColorStop(0, hexA(m.color, 0.18));
      g.addColorStop(1, hexA(m.color, 0));
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2 * Math.PI); ctx.fill();
    }

    // 2) Sao lấp lánh
    for (const s of stars) {
      const a = s.a * (0.6 + 0.4 * Math.sin(t * 2 + s.tw));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fill();
    }
  }, [stars, data.nodes]);

  // LIGHT MODE PRE-RENDER (Very soft nebula only)
  const renderPreLight = useCallback((ctx, scale) => {
    const graphNodes = data.nodes;
    for (const m of A.modules) {
      const ns = graphNodes.filter(n => n.moduleId === m.id && typeof n.x === 'number' && !isNaN(n.x));
      if (!ns.length) continue;
      const cx = ns.reduce((s, n) => s + n.x, 0) / ns.length;
      const cy = ns.reduce((s, n) => s + n.y, 0) / ns.length;
      const R = 150;

      if (isNaN(cx) || isNaN(cy)) continue;

      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
      g.addColorStop(0, hexA(m.color, 0.10)); // Very subtle
      g.addColorStop(1, hexA(m.color, 0));
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2 * Math.PI); ctx.fill();
    }
  }, [data.nodes]);

  // DARK MODE PLANET PAINT
  const paintPlanetDark = useCallback((node, ctx, scale) => {
    if (typeof node.x !== 'number' || isNaN(node.x) || typeof node.y !== 'number' || isNaN(node.y)) return;

    // Hover dim logic
    const dimmed = neighborSet && !neighborSet.has(node.id);
    const isHovered = focusNode && focusNode.id === node.id;
    const isNeighbor = neighborSet && neighborSet.has(node.id) && !isHovered;
    const alpha = dimmed ? 0.12 : 1;

    ctx.globalAlpha = alpha;

    const r = (node.val || 4) * 1.4 * (isHovered ? 1.25 : 1);

    // Space mode glow
    ctx.shadowColor = isHovered ? '#ffffff' : node.color;
    ctx.shadowBlur = isHovered ? 30 : (isNeighbor ? 22 : 18);

    // Thân hành tinh: gradient từ sáng → màu module
    const g = ctx.createRadialGradient(node.x - r * 0.3, node.y - r * 0.3, r * 0.1, node.x, node.y, r);
    g.addColorStop(0, '#ffffff');
    g.addColorStop(0.25, lighten(node.color, 0.35));
    g.addColorStop(1, node.color);
    ctx.beginPath(); ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
    ctx.fillStyle = g; ctx.fill();

    ctx.shadowBlur = 0;

    // Highlight ring for hovered or neighbor
    if (isHovered) {
      ctx.beginPath(); ctx.arc(node.x, node.y, r + 5 / scale, 0, 2 * Math.PI);
      ctx.lineWidth = 2 / scale;
      ctx.strokeStyle = 'rgba(255,255,255,0.8)';
      ctx.stroke();
    } else if (isNeighbor) {
      ctx.beginPath(); ctx.arc(node.x, node.y, r + 3 / scale, 0, 2 * Math.PI);
      ctx.lineWidth = 1.5 / scale;
      ctx.strokeStyle = 'rgba(255,255,255,0.45)';
      ctx.stroke();
    }

    // Vành mỏng hành tinh
    ctx.lineWidth = 1 / scale;
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.beginPath(); ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
    ctx.stroke();

    // Nhãn chữ
    if (scale > 0.5) {
      const fs = 11 / scale;
      ctx.font = `500 ${fs}px Inter, sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillStyle = isHovered ? 'rgba(255,255,255,1)' : 'rgba(226,232,240,0.92)';
      ctx.fillText(node.title, node.x, node.y + r + 3 / scale);
    }

    ctx.globalAlpha = 1;
  }, [themeTick, focusNode, neighborSet]);

  // LIGHT MODE NODE PAINT ("Star Map on Paper")
  const paintNodeLight = useCallback((node, ctx, scale) => {
    if (typeof node.x !== 'number' || isNaN(node.x) || typeof node.y !== 'number' || isNaN(node.y)) return;

    // Hover dim logic
    const dimmed = neighborSet && !neighborSet.has(node.id);
    const isHovered = focusNode && focusNode.id === node.id;
    const isNeighbor = neighborSet && neighborSet.has(node.id) && !isHovered;
    const alpha = dimmed ? 0.12 : 1;

    ctx.globalAlpha = alpha;

    const r = (node.val || 4) * 1.4 * (isHovered ? 1.25 : 1);

    // BÓNG ĐỔ MỀM ấm (tạo chiều sâu trên giấy)
    ctx.shadowColor = isHovered ? darken(node.color, 0.3) : 'rgba(120,100,60,0.28)';
    ctx.shadowBlur = isHovered ? 16 : 8;
    ctx.shadowOffsetY = isHovered ? 0 : 2.5 / scale;

    // đĩa màu module, gradient rất nhẹ
    const g = ctx.createLinearGradient(node.x, node.y - r, node.x, node.y + r);
    g.addColorStop(0, lighten(node.color, 0.18));
    g.addColorStop(1, node.color);
    ctx.beginPath(); ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
    ctx.fillStyle = g; ctx.fill();

    ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;

    // Highlight ring for hovered node
    if (isHovered) {
      ctx.beginPath(); ctx.arc(node.x, node.y, r + 4 / scale, 0, 2 * Math.PI);
      ctx.lineWidth = 2 / scale;
      ctx.strokeStyle = darken(node.color, 0.25);
      ctx.stroke();
    } else if (isNeighbor) {
      ctx.beginPath(); ctx.arc(node.x, node.y, r + 2.5 / scale, 0, 2 * Math.PI);
      ctx.lineWidth = 1.5 / scale;
      ctx.strokeStyle = darken(node.color, 0.15);
      ctx.stroke();
    }

    // vành trong đậm hơn
    ctx.lineWidth = 1.2 / scale;
    ctx.strokeStyle = darken(node.color, 0.18);
    ctx.beginPath(); ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
    ctx.stroke();

    // highlight mảnh phía trên
    ctx.beginPath();
    ctx.arc(node.x, node.y - r * 0.28, r * 0.55, Math.PI * 1.15, Math.PI * 1.85);
    ctx.lineWidth = 1 / scale;
    ctx.strokeStyle = 'rgba(255,255,255,0.55)';
    ctx.stroke();

    // NHÃN
    if (scale > 0.5) {
      const fs = 11 / scale;
      ctx.font = `500 ${fs}px Inter, sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      const ty = node.y + r + 3 / scale;

      ctx.lineWidth = 3 / scale;
      ctx.strokeStyle = 'rgba(253,246,227,0.9)';
      ctx.strokeText(node.title, node.x, ty);

      ctx.fillStyle = isHovered ? 'rgba(20,40,50,1)' : 'rgba(60,72,79,0.95)';
      ctx.fillText(node.title, node.x, ty);
    }

    ctx.globalAlpha = 1;
  }, [themeTick, focusNode, neighborSet]);

  return (
    <div ref={wrapRef} style={{ flex: 1, position: 'relative', overflow: 'hidden', background: isDark ? '#05070f' : '#f4ecd8' }}>

      {/* Light Mode Layer: Dot grid + Warm Vignette overlay */}
      {!isDark && (
        <React.Fragment>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
            backgroundSize: '26px 26px', opacity: 0.7, pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse at center, transparent 55%, rgba(120,100,60,0.10) 100%)'
          }} />
        </React.Fragment>
      )}

      <ForceGraph2D
        ref={fgRef}
        width={size.w}
        height={size.h}
        graphData={data}
        backgroundColor={isDark ? '#05070f' : 'rgba(0,0,0,0)'}
        onRenderFramePre={isDark ? renderPreDark : renderPreLight}
        nodeRelSize={1}
        nodeCanvasObject={isDark ? paintPlanetDark : paintNodeLight}
        nodeCanvasObjectMode={() => 'replace'}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(node.x, node.y, ((node.val || 4) * 1.4) + 4, 0, 2 * Math.PI);
          ctx.fill();
        }}
        linkColor={(link) => {
          if (!focusNode || !neighborSet) {
            return isDark ? 'rgba(160,180,210,0.18)' : 'rgba(120,110,90,0.28)';
          }
          const s = typeof link.source === 'object' ? link.source.id : link.source;
          const t = typeof link.target === 'object' ? link.target.id : link.target;
          const isConnected = (s === focusNode.id || t === focusNode.id);
          if (isConnected) {
            return isDark ? 'rgba(200,220,255,0.75)' : 'rgba(80,60,20,0.70)';
          }
          return isDark ? 'rgba(160,180,210,0.04)' : 'rgba(120,110,90,0.06)';
        }}
        linkCurvature={isDark ? 0 : 0.12}
        linkWidth={(link) => {
          if (!focusNode || !neighborSet) return 1;
          const s = typeof link.source === 'object' ? link.source.id : link.source;
          const t = typeof link.target === 'object' ? link.target.id : link.target;
          return (s === focusNode.id || t === focusNode.id) ? 2.5 : 0.5;
        }}
        linkDirectionalParticles={isDark ? 2 : 1}
        linkDirectionalParticleSpeed={isDark ? 0.001 : 0.0006}
        linkDirectionalParticleWidth={1.8}
        linkDirectionalParticleColor={() => isDark ? 'rgba(255,255,255,0.8)' : 'rgba(180,140,40,0.6)'}
        onNodeClick={(node) => {
          if (isDragging.current) return;
          if (fgRef.current) {
            fgRef.current.centerAt(node.x, node.y, 800);
            fgRef.current.zoom(2.2, 800);
          }
          setActive(A.nodes.find(n => n.id === node.id));
        }}
        onNodeHover={(node) => setHoveredNode(node || null)}
        onNodeDrag={(node) => {
          isDragging.current = true;
          setDraggedNode(node);
          dragNodeRef.current = node;
          if (returnAnimRef.current) { cancelAnimationFrame(returnAnimRef.current); returnAnimRef.current = null; }
          // Start continuous drag-follow loop (runs even when cursor is still)
          if (!dragAnimRef.current) {
            const dragTick = () => {
              const dn = dragNodeRef.current;
              if (!dn || !isDragging.current) { dragAnimRef.current = null; return; }
              const neighbors = adjacencyMap.get(dn.id);
              if (neighbors) {
                data.nodes.forEach(n => {
                  if (n.id === dn.id || !neighbors.has(n.id)) return;
                  const ropeLen = Math.hypot(n.initialX - dn.initialX, n.initialY - dn.initialY);
                  const dx = n.initialX - dn.x;
                  const dy = n.initialY - dn.y;
                  const dist = Math.hypot(dx, dy);
                  let targetX, targetY;
                  if (dist > ropeLen) {
                    const ratio = ropeLen / dist;
                    targetX = dn.x + dx * ratio;
                    targetY = dn.y + dy * ratio;
                  } else {
                    targetX = n.initialX;
                    targetY = n.initialY;
                  }
                  const currentX = n.fx ?? n.initialX;
                  const currentY = n.fy ?? n.initialY;
                  n.fx = currentX + (targetX - currentX) * 0.06;
                  n.fy = currentY + (targetY - currentY) * 0.06;
                });
              }
              dragAnimRef.current = requestAnimationFrame(dragTick);
            };
            dragAnimRef.current = requestAnimationFrame(dragTick);
          }
        }}
        onNodeDragEnd={(node) => {
          // Stop the continuous drag loop
          if (dragAnimRef.current) { cancelAnimationFrame(dragAnimRef.current); dragAnimRef.current = null; }
          dragNodeRef.current = null;
          // Set hover to the dropped node BEFORE clearing drag, so focusNode never flickers null
          setHoveredNode(node);
          setDraggedNode(null);
          setTimeout(() => { isDragging.current = false; }, 100);
          // Library clears fx/fy on the dragged node — re-pin it at its current position
          const droppedX = node.x;
          const droppedY = node.y;
          node.fx = droppedX;
          node.fy = droppedY;
          // Snapshot all displaced nodes (including the dragged one)
          const moved = [];
          data.nodes.forEach(n => {
            const cx = n.fx ?? n.x;
            const cy = n.fy ?? n.y;
            if (Math.abs(cx - n.initialX) > 0.5 || Math.abs(cy - n.initialY) > 0.5) {
              moved.push({ n, sx: cx, sy: cy });
            }
          });
          if (!moved.length) { node.fx = node.initialX; node.fy = node.initialY; return; }
          // Reheat simulation so the canvas keeps rendering during the animation
          if (fgRef.current) fgRef.current.d3ReheatSimulation();
          // Smooth return animation — slow & heavy like drifting through thick space
          const startTime = performance.now();
          const duration = 1800; // ms — slow drift back
          const tick = () => {
            const elapsed = performance.now() - startTime;
            const t = Math.min(1, elapsed / duration);
            // Ease-in-out quartic: slow start (friction), smooth middle, gentle landing
            const ease = t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
            moved.forEach(({ n, sx, sy }) => {
              n.fx = sx + (n.initialX - sx) * ease;
              n.fy = sy + (n.initialY - sy) * ease;
            });
            if (t < 1) {
              returnAnimRef.current = requestAnimationFrame(tick);
            } else {
              // Snap to exact home + re-pin
              moved.forEach(({ n }) => { n.fx = n.initialX; n.fy = n.initialY; });
              returnAnimRef.current = null;
            }
          };
          returnAnimRef.current = requestAnimationFrame(tick);
        }}
        enableNodeDrag={true}
        enableZoomInteraction={true}
        enablePanInteraction={true}
        d3VelocityDecay={0.4}
        cooldownTime={Infinity}
      />

      {/* hint */}
      <div style={{
        position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)',
        font: 'var(--type-meta)', color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(120,100,60,0.6)', pointerEvents: 'none',
        letterSpacing: '0.02em'
      }}>
        {T(ATLAS_UI.hint)}
      </div>

      {/* Encyclopedia sidebar */}
      <div style={{
        position: 'absolute', top: 0, right: 0, height: '100%', width: isMobile ? '100%' : 'var(--sidebar-w)', maxWidth: isMobile ? '100%' : '92%',
        background: 'var(--surface-card)', borderLeft: '1px solid var(--border)', boxShadow: 'var(--shadow-2xl)',
        transform: active ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform var(--dur-slow) var(--ease-out)',
        display: 'flex', flexDirection: 'column', zIndex: 20,
      }}>
        {active && (
          <React.Fragment>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 16px', borderBottom: '1px solid var(--border)', background: 'var(--surface-sunken)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <span style={{ width: 18, height: 18, color: colorOf(active.m), display: 'inline-flex' }}><I.Book /></span>
                <span style={{ font: 'var(--type-title)', color: 'var(--text-strong)' }}>{active.t}</span>
              </div>
              <IconButton aria-label={T(ATLAS_UI.close)} onClick={() => setActive(null)}><I.X /></IconButton>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <ModuleTag module={active.m} />
                {entry && <span style={{ font: 'var(--type-meta)', color: 'var(--text-faint)' }}>{entry.cluster}</span>}
              </div>
              {entry && <p style={{
                font: 'var(--type-body)', color: 'var(--text-body)', marginBottom: 20,
                paddingLeft: 12, borderLeft: `3px solid ${colorOf(active.m)}`
              }}>{T(entry.summary)}</p>}
              <LessonContent entry={entry} accent={colorOf(active.m)} />
              {entry && (
                <div style={{ display: 'flex', gap: 10, marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                  <Button fullWidth icon={<I.Check />}>{T(UI.markLearned)}</Button>
                  <Button variant="outline" icon={<I.Star />} aria-label="Bookmark"></Button>
                </div>
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default AtlasView;
