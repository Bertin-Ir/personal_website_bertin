import { useEffect, useRef, useState } from 'react';

/** Precision–recall tradeoff: threshold slider updates P, R, F1 bars.
    Higher threshold → precision ↑, recall ↓; F1 balances both. */
export default function PrecisionRecallTradeoff() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [threshold, setThreshold] = useState(50);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const w = svg.clientWidth || 400;
    const h = 160;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    const t = threshold / 100;
    // Conceptual: precision ↑ as threshold ↑; recall ↑ as threshold ↓.
    const precision = 0.3 + 0.6 * (1 - t);
    const recall = 0.2 + 0.7 * t;
    const f1 = 2 * (precision * recall) / (precision + recall) || 0;

    const barW = (w - 80) / 3;
    const maxH = 100;
    const drawBar = (x: number, value: number, label: string, color: string) => {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', String(x));
      rect.setAttribute('y', String(h - 30 - value * maxH));
      rect.setAttribute('width', String(barW - 8));
      rect.setAttribute('height', String(value * maxH));
      rect.setAttribute('fill', color);
      rect.setAttribute('rx', '2');
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', String(x + (barW - 8) / 2));
      text.setAttribute('y', String(h - 8));
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('font-size', '11');
      text.setAttribute('fill', 'var(--ink)');
      text.textContent = label;
      const valText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      valText.setAttribute('x', String(x + (barW - 8) / 2));
      valText.setAttribute('y', String(h - 35 - value * maxH));
      valText.setAttribute('text-anchor', 'middle');
      valText.setAttribute('font-size', '10');
      valText.setAttribute('fill', 'var(--ink)');
      valText.textContent = value.toFixed(2);
      return { rect, text, valText };
    };

    const g = svg.querySelector('g#pr-bars');
    if (!g) return;
    g.innerHTML = '';
    const colorP = '#00BFA6';
    const colorR = '#1E90FF';
    const colorF1 = 'var(--ink)';
    const b1 = drawBar(20, precision, 'Precision', colorP);
    const b2 = drawBar(20 + barW + 10, recall, 'Recall', colorR);
    const b3 = drawBar(20 + 2 * (barW + 10), f1, 'F1', colorF1);
    [b1, b2, b3].forEach(({ rect, text, valText }) => {
      g.appendChild(rect);
      g.appendChild(valText);
      g.appendChild(text);
    });
  }, [threshold]);

  return (
    <div className="rounded-lg border border-[var(--ink)]/15 p-4 bg-[var(--surface)]">
      <p className="text-sm font-mono text-[var(--accent)] mb-2">Precision–recall tradeoff</p>
      <p className="text-xs text-[var(--ink)]/80 mb-3">
        Raising the decision threshold usually increases precision and lowers recall (and vice versa). F1 balances both; choose the metric that matches the decision cost.
      </p>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs text-[var(--ink)]/70">Threshold</span>
        <input
          type="range"
          min="10"
          max="90"
          value={threshold}
          onInput={(e) => setThreshold(Number((e.target as HTMLInputElement).value))}
          className="flex-1 h-2 rounded accent-[var(--accent)]"
        />
        <span className="text-xs font-mono">{(threshold / 100).toFixed(2)}</span>
      </div>
      <svg ref={svgRef} className="w-full h-[160px]" aria-hidden="true">
        <g id="pr-bars" />
      </svg>
    </div>
  );
}
