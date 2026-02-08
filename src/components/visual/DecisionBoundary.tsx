import { useEffect, useRef, useState } from 'react';

/** Decision boundary demo: linear vs RBF kernel in 2D.
    Colors show class regions; boundary is where score crosses zero. */
export default function DecisionBoundary() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [kernel, setKernel] = useState<'linear' | 'rbf'>('linear');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = 220;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const margin = 25;
    const plotW = w - 2 * margin;
    const plotH = h - 2 * margin;
    const toX = (x: number) => margin + (x + 1) * 0.5 * plotW;
    const toY = (y: number) => margin + (1 - (y + 1) * 0.5) * plotH;

    const classA: [number, number][] = [[-0.6, -0.4], [-0.3, 0.2], [0, -0.2], [0.2, 0.5]];
    const classB: [number, number][] = [[0.4, 0.3], [0.6, -0.2], [0.8, 0.1], [-0.2, -0.7]];

    // Grid: color each cell by predicted class score (teal vs blue).
    for (let i = 0; i < plotW; i += 4) {
      for (let j = 0; j < plotH; j += 4) {
        const x = (i / plotW) * 2 - 1;
        const y = -((j / plotH) * 2 - 1);
        let score: number;
        if (kernel === 'linear') {
          score = 0.5 * x + 0.8 * y + 0.1;
        } else {
          const rbf = (a: number, b: number, ax: number, ay: number) =>
            Math.exp(-((a - ax) ** 2 + (b - ay) ** 2) / 0.5);
          score = classA.reduce((s, [ax, ay]) => s + rbf(x, y, ax, ay), 0) - classB.reduce((s, [ax, ay]) => s + rbf(x, y, ax, ay), 0);
        }
        const alpha = Math.min(1, Math.abs(score) * 0.5 + 0.1);
        ctx.fillStyle = score >= 0 ? `rgba(0, 191, 166, ${alpha * 0.25})` : `rgba(30, 144, 255, ${alpha * 0.25})`;
        ctx.fillRect(margin + i, margin + j, 5, 5);
      }
    }

    ctx.strokeStyle = 'var(--ink)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    if (kernel === 'linear') {
      ctx.beginPath();
      for (let x = -1; x <= 1; x += 0.05) {
        const y = -(0.5 * x + 0.1) / 0.8;
        if (y >= -1 && y <= 1) {
          if (x === -1) ctx.moveTo(toX(x), toY(y));
          else ctx.lineTo(toX(x), toY(y));
        }
      }
      ctx.stroke();
    }
    ctx.setLineDash([]);

    ctx.fillStyle = 'var(--accent)';
    classA.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(toX(x), toY(y), 5, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillStyle = '#1E90FF';
    classB.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(toX(x), toY(y), 5, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [kernel]);

  return (
    <div className="rounded-lg border border-[var(--ink)]/15 p-4 bg-[var(--surface)]">
      <p className="text-sm font-mono text-[var(--accent)] mb-2">Decision boundaries</p>
      <p className="text-xs text-[var(--ink)]/80 mb-3">
        Two classes in 2D. Left: linear boundary (one hyperplane). Right: non-linear (e.g. RBF kernel). The boundary is where the model switches prediction; shape depends on model capacity and kernel.
      </p>
      <div className="flex gap-4 mb-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="kernel"
            checked={kernel === 'linear'}
            onChange={() => setKernel('linear')}
            className="accent-[var(--accent)]"
          />
          <span className="text-xs">Linear</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="kernel"
            checked={kernel === 'rbf'}
            onChange={() => setKernel('rbf')}
            className="accent-[var(--accent)]"
          />
          <span className="text-xs">RBF (non-linear)</span>
        </label>
      </div>
      <canvas ref={canvasRef} className="w-full rounded" width={400} height={220} style={{ height: '220px' }} aria-hidden="true" />
    </div>
  );
}
