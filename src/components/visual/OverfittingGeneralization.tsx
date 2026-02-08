import { useEffect, useRef, useState } from 'react';

/** Overfitting vs generalization: fitted polynomial (solid) vs true function (dashed).
    Low degree underfits; high degree overfits. Teaches model capacity tradeoff. */
export default function OverfittingGeneralization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [degree, setDegree] = useState(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1; // Sharp rendering on retina displays.
    const w = canvas.clientWidth;
    const h = 180;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const train = [
      [0.1, 0.3], [0.25, 0.5], [0.5, 0.4], [0.7, 0.7], [0.9, 0.6],
    ];
    const trueCurve = (x: number) => 0.4 + 0.35 * Math.sin(x * Math.PI);
    const poly = (x: number, deg: number) => {
      let v = 0;
      const coefs = [0.5, 0.8, -1.2, 0.6, -0.2].slice(0, deg + 1);
      coefs.forEach((c, i) => { v += c * Math.pow(x, i); });
      return Math.max(0, Math.min(1, v));
    };

    ctx.clearRect(0, 0, w, h);
    const margin = 20;
    const plotW = w - 2 * margin;
    const plotH = h - 2 * margin;

    const toX = (x: number) => margin + x * plotW;
    const toY = (y: number) => margin + (1 - y) * plotH;

    ctx.strokeStyle = 'var(--ink)';
    ctx.setLineDash([2, 2]);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let x = 0; x <= 1; x += 0.02) {
      const y = trueCurve(x);
      if (x === 0) ctx.moveTo(toX(x), toY(y));
      else ctx.lineTo(toX(x), toY(y));
    }
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.strokeStyle = 'var(--accent)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x <= 1; x += 0.02) {
      const y = poly(x, degree);
      if (x === 0) ctx.moveTo(toX(x), toY(y));
      else ctx.lineTo(toX(x), toY(y));
    }
    ctx.stroke();

    ctx.fillStyle = 'var(--accent)';
    train.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(toX(x), toY(y), 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [degree]);

  return (
    <div className="rounded-lg border border-[var(--ink)]/15 p-4 bg-[var(--surface)]">
      <p className="text-sm font-mono text-[var(--accent)] mb-2">Overfitting vs generalization</p>
      <p className="text-xs text-[var(--ink)]/80 mb-3">
        Dots: training data. Dashed: true function. Solid: fitted polynomial. Low degree underfits; high degree overfits. Generalization = good performance on unseen data.
      </p>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs text-[var(--ink)]/70">Polynomial degree</span>
        <input
          type="range"
          min="1"
          max="4"
          value={degree}
          onInput={(e) => setDegree(Number((e.target as HTMLInputElement).value))}
          className="flex-1 h-2 rounded accent-[var(--accent)]"
        />
        <span className="text-xs font-mono">{degree}</span>
      </div>
      <canvas ref={canvasRef} className="w-full rounded" width={400} height={180} style={{ height: '180px' }} aria-hidden="true" />
    </div>
  );
}
