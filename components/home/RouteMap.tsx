"use client";

import { useEffect, useRef } from "react";

import { frameRoute, OFFICES, project, type Place, type View } from "@/lib/geo";
import { landPoints } from "@/lib/world-dots";

/*
 * RouteMap: the planner's map. Land is a field of pale dots; the visitor's
 * origin and destination get pins, and an arc grows from one to the other
 * with a pulse travelling along it. When the route changes, the view glides
 * to frame the new pair and the arc draws again.
 */

type Props = { from: Place; to: Place; example: boolean };

const ease = (t: number) => 1 - Math.pow(1 - t, 4);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpView = (a: View, b: View, t: number): View => ({
  lon0: lerp(a.lon0, b.lon0, t),
  lon1: lerp(a.lon1, b.lon1, t),
  lat0: lerp(a.lat0, b.lat0, t),
  lat1: lerp(a.lat1, b.lat1, t),
});

export function RouteMap({ from, to, example }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const state = useRef({ from, to, example, changedAt: 0 });

  useEffect(() => {
    const st = state.current;
    if (st.from !== from || st.to !== to || st.example !== example) {
      state.current = { from, to, example, changedAt: performance.now() };
    }
  }, [from, to, example]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const land = landPoints();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const family = getComputedStyle(document.body).fontFamily;
    const probe = document.createElement("span");
    probe.style.fontFamily = "var(--font-mono)";
    document.body.appendChild(probe);
    const mono = getComputedStyle(probe).fontFamily || "monospace";
    probe.remove();
    let W = 0;
    let H = 0;
    let view: View | null = null;
    let fromView: View | null = null;
    let lastKey = "";
    let visible = true;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = Math.max(1, Math.floor(W * dpr));
      canvas.height = Math.max(1, Math.floor(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      view = null;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e?.isIntersecting ?? true));
    io.observe(canvas);

    const pill = (x: number, y: number, code: string, name: string, tone: "navy" | "orange", above: boolean) => {
      ctx.font = `600 13px ${family}`;
      const nameW = ctx.measureText(name).width;
      ctx.font = `600 11px ${mono}`;
      const codeW = ctx.measureText(code).width;
      const w = codeW + nameW + 34;
      const h = 30;
      let bx = x - w / 2;
      bx = Math.max(8, Math.min(W - w - 8, bx));
      const by = above ? y - h - 16 : y + 16;
      ctx.save();
      ctx.shadowColor = "rgba(17,20,61,0.18)";
      ctx.shadowBlur = 14;
      ctx.shadowOffsetY = 4;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.roundRect(bx, by, w, h, 999);
      ctx.fill();
      ctx.restore();
      ctx.fillStyle = tone === "navy" ? "#00056e" : "#fea70e";
      ctx.beginPath();
      ctx.roundRect(bx + 4, by + 4, codeW + 14, h - 8, 999);
      ctx.fill();
      ctx.fillStyle = tone === "navy" ? "#ffffff" : "#11143d";
      ctx.font = `600 11px ${mono}`;
      ctx.textBaseline = "middle";
      ctx.fillText(code, bx + 11, by + h / 2 + 0.5);
      ctx.fillStyle = "#11143d";
      ctx.font = `600 13px ${family}`;
      ctx.fillText(name, bx + codeW + 24, by + h / 2 + 0.5);
    };

    const start = performance.now();
    let raf = 0;

    const draw = () => {
      const now = performance.now();
      const { from: a, to: b, example: ex, changedAt } = state.current;
      const key = `${a.code}-${b.code}`;
      const target = frameRoute(a, b, W / Math.max(1, H));
      if (!view) {
        view = target;
        fromView = target;
        lastKey = key;
      }
      if (key !== lastKey) {
        fromView = view;
        lastKey = key;
      }
      const since = reduced ? 1e6 : now - (changedAt || start);
      const vt = ease(Math.min(1, since / 1100));
      view = lerpView(fromView!, target, vt);
      const v = view;

      ctx.clearRect(0, 0, W, H);

      // Land
      const cellPx = (1.5 / (v.lon1 - v.lon0)) * W;
      const r = Math.max(0.9, Math.min(2.6, cellPx * 0.26));
      ctx.fillStyle = "#c9cde8";
      for (const [lon, lat] of land) {
        if (lon < v.lon0 - 2 || lon > v.lon1 + 2 || lat < v.lat0 - 2 || lat > v.lat1 + 2) continue;
        const p = project(v, lon, lat, W, H);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Universal offices
      ctx.fillStyle = "#8c92c9";
      for (const o of OFFICES) {
        const p = project(v, o.lon, o.lat, W, H);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r + 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      const pa = project(v, a.lon, a.lat, W, H);
      const pb = project(v, b.lon, b.lat, W, H);
      const dx = pb.x - pa.x;
      const dy = pb.y - pa.y;
      const dist = Math.hypot(dx, dy);
      // Control point lifted perpendicular to the chord, always upward.
      let nx = -dy / (dist || 1);
      let ny = dx / (dist || 1);
      if (ny > 0) {
        nx = -nx;
        ny = -ny;
      }
      const lift = Math.min(dist * 0.32, H * 0.36);
      const cx = (pa.x + pb.x) / 2 + nx * lift;
      const cy = (pa.y + pb.y) / 2 + ny * lift;
      const at = (t: number) => ({
        x: (1 - t) * (1 - t) * pa.x + 2 * (1 - t) * t * cx + t * t * pb.x,
        y: (1 - t) * (1 - t) * pa.y + 2 * (1 - t) * t * cy + t * t * pb.y,
      });

      const drawT = reduced ? 1 : ease(Math.max(0, Math.min(1, (since - 350) / 1300)));
      // Arc: faint full path, then the drawn portion
      ctx.lineCap = "round";
      ctx.setLineDash([2, 7]);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(0,5,110,0.22)";
      ctx.beginPath();
      ctx.moveTo(pa.x, pa.y);
      ctx.quadraticCurveTo(cx, cy, pb.x, pb.y);
      ctx.stroke();
      ctx.setLineDash([]);
      if (drawT > 0) {
        const grad = ctx.createLinearGradient(pa.x, pa.y, pb.x, pb.y);
        grad.addColorStop(0, "#00056e");
        grad.addColorStop(1, "#fb8e28");
        ctx.strokeStyle = ex ? "rgba(0,5,110,0.45)" : grad;
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        const steps = 64;
        for (let i = 0; i <= steps * drawT; i++) {
          const p = at(i / steps);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        const end = at(drawT);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      }

      // Travelling pulse once drawn
      if (drawT >= 1 && !reduced) {
        const tt = ((now - start) / 2600) % 1;
        const p = at(tt);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 12);
        g.addColorStop(0, "rgba(254,167,14,0.9)");
        g.addColorStop(1, "rgba(254,167,14,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#fea70e";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Pins
      const ring = reduced ? 0.4 : ((now - start) / 1800) % 1;
      const pinAt = (p: { x: number; y: number }, color: string, pulse: boolean) => {
        if (pulse) {
          ctx.strokeStyle = `rgba(251,142,40,${0.7 * (1 - ring)})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 7 + ring * 16, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
      };
      pinAt(pa, "#00056e", false);
      pinAt(pb, "#fb8e28", drawT >= 1);

      const aAbove = pa.y > H * 0.35;
      const bAbove = pb.y > H * 0.35;
      pill(pa.x, pa.y, a.code, a.name.split(",")[0], "navy", aAbove);
      if (drawT > 0.6) {
        ctx.globalAlpha = Math.min(1, (drawT - 0.6) / 0.4);
        pill(pb.x, pb.y, b.code, b.name.split(",")[0], "orange", bAbove);
        ctx.globalAlpha = 1;
      }
    };

    const loop = () => {
      if (visible) draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="route-map" aria-hidden="true" style={{ width: "100%", height: "100%" }} />;
}
