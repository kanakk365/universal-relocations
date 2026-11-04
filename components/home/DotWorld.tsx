"use client";

import { useEffect, useRef } from "react";

import { project, type View } from "@/lib/geo";
import { landPoints } from "@/lib/world-dots";

/*
 * DotWorld: a quiet flat world in pale dots, used as texture behind the
 * closing band. Drawn once per resize on a 2D canvas; no animation.
 */
const VIEW: View = { lon0: -150, lon1: 150, lat0: -48, lat1: 78 };

export function DotWorld({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const land = landPoints();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;
      canvas.width = Math.max(1, Math.floor(W * dpr));
      canvas.height = Math.max(1, Math.floor(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const lonSpan = VIEW.lon1 - VIEW.lon0;
      const latSpan = (lonSpan / Math.max(1, W)) * H;
      const c = 22;
      const view = { ...VIEW, lat0: c - latSpan / 2, lat1: c + latSpan / 2 };
      const cell = (1.5 / lonSpan) * W;
      const r = Math.max(0.9, Math.min(2.2, cell * 0.26));
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(170, 180, 255, 0.3)";
      for (const [lon, lat] of land) {
        const p = project(view, lon, lat, W, H);
        if (p.y < -4 || p.y > H + 4) continue;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
