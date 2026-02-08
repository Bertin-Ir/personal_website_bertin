import { useEffect, useRef, useState } from 'react';

/** Bias–variance tradeoff: E[error] = Bias² + Variance + σ².
    Slider controls complexity; curves show Bias² (teal), Variance (blue), Total (dashed). */
export default function BiasVarianceTradeoff() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [complexity, setComplexity] = useState(50);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const w = svg.clientWidth || 400;
    const h = 200;
    const margin = 20;
    const plotW = w - 2 * margin;
    const plotH = h - 2 * margin;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    const toX = (t: number) => margin + (t / 100) * plotW;
    const toY = (v: number) => margin + (1 - v) * plotH;
    // Conceptual curves: Bias² ↓ as complexity ↑; Variance ↑ as complexity ↑.
    const bias2 = (t: number) => Math.pow(1 - t / 100, 2);
    const variance = (t: number) => 0.8 * (t / 100);
    const noise = 0.12;
    const total = (t: number) => bias2(t) + variance(t) + noise;

    const pts = 50;
    let pathBias = '';
    let pathVar = '';
    let pathTotal = '';
    for (let i = 0; i <= pts; i++) {
      const t = (i / pts) * 100;
      const x = toX(t);
      pathBias += (i === 0 ? 'M' : 'L') + ` ${x} ${toY(Math.min(1, bias2(t)))}`;
      pathVar += (i === 0 ? 'M' : 'L') + ` ${x} ${toY(Math.min(1, variance(t)))}`;
      pathTotal += (i === 0 ? 'M' : 'L') + ` ${x} ${toY(Math.min(1, total(t)))}`;
    }

    const g = svg.querySelector('g#bv-curves');
    if (!g) return;
    g.innerHTML = '';
    [
      { d: pathBias, stroke: '#00BFA6' },
      { d: pathVar, stroke: '#1E90FF' },
      { d: pathTotal, stroke: 'var(--ink)', dash: '4 2' },
    ].forEach(({ d, stroke, dash }) => {
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('d', d);
      p.setAttribute('fill', 'none');
      p.setAttribute('stroke', stroke);
      p.setAttribute('stroke-width', '2');
      if (dash) p.setAttribute('stroke-dasharray', dash);
      g.appendChild(p);
    });
    const cx = toX(complexity);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', String(cx));
    line.setAttribute('y1', String(margin));
    line.setAttribute('x2', String(cx));
    line.setAttribute('y2', String(h - margin));
    line.setAttribute('stroke', 'var(--accent)');
    line.setAttribute('stroke-width', '1');
    line.setAttribute('stroke-opacity', '0.7');
    g.appendChild(line);
  }, [complexity]);

  return (
    <div className="rounded-lg border border-[var(--ink)]/15 p-4 bg-[var(--surface)]">
      <p className="text-sm font-mono text-[var(--accent)] mb-2">Bias–variance tradeoff</p>
      <p className="text-xs text-[var(--ink)]/80 mb-3">
        E[error] = Bias² + Variance + σ². Low complexity → high bias; high complexity → high variance. One idea: find the complexity that minimizes total error.
      </p>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs text-[var(--ink)]/70">Model complexity</span>
        <input
          type="range"
          min="5"
          max="95"
          value={complexity}
          onInput={(e) => setComplexity(Number((e.target as HTMLInputElement).value))}
          className="flex-1 h-2 rounded accent-[var(--accent)]"
        />
      </div>
      <svg ref={svgRef} className="w-full h-[200px]" aria-hidden="true">
        <g id="bv-curves" />
      </svg>
      <p className="text-xs text-[var(--ink)]/60 mt-1">Teal: Bias² · Blue: Variance · Dashed: Total (conceptually).</p>
    </div>
  );
}
