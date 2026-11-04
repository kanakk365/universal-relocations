"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

/*
 * CobeGlobe: the site's dotted Earth (cobe v2, adapted from the team's Rivals
 * landing globe), shaded in the brand's blues. The ocean is a lit royal blue,
 * land is pale blue-white dots, offices are orange markers and hub corridors
 * are orange arcs. It turns slowly; given a `focus`, it eases round to face it.
 */

type LatLon = [number, number];
export type GlobeMarker = { location: LatLon; size: number; id?: string };
export type GlobeArc = { from: LatLon; to: LatLon; id?: string };

const TAU = Math.PI * 2;
const toAngles = ([lat, lon]: LatLon): [number, number] => [
  Math.PI - ((lon * Math.PI) / 180 - Math.PI / 2),
  (lat * Math.PI) / 180,
];

export function CobeGlobe({
  className = "",
  markers,
  arcs,
  labels = [],
  focus = null,
  start = [25, 10],
  theta = 0.3,
  speed = 0.0018,
  interactive = true,
}: {
  className?: string;
  markers: GlobeMarker[];
  arcs: GlobeArc[];
  labels?: { id: string; label: string; location: LatLon; below?: boolean }[];
  /** When set, the globe stops drifting and turns to face this point. */
  focus?: LatLon | null;
  /** Where the globe faces when it first appears. */
  start?: LatLon;
  theta?: number;
  speed?: number;
  interactive?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const focusRef = useRef(focus);
  focusRef.current = focus;
  const drag = useRef<{ start: number | null; delta: number }>({ start: null, delta: 0 });
  const labelRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const labelsRef = useRef(labels);
  labelsRef.current = labels;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = canvas.offsetWidth;
    const ro = new ResizeObserver(() => {
      width = canvas.offsetWidth;
    });
    ro.observe(canvas);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let [phi, th] = toAngles(focusRef.current ?? start);
    th = focusRef.current ? Math.max(0.1, Math.min(0.6, th * 0.6)) : theta;

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi,
      theta: th,
      // Partly dark: lit blue ocean (light mode) with bright land dots (dark mode).
      dark: 0.62,
      diffuse: 1.25,
      mapSamples: 20000,
      mapBrightness: 5.5,
      mapBaseBrightness: 0.04,
      baseColor: [0.27, 0.34, 1],
      markerColor: [1, 0.66, 0.06],
      glowColor: [0.33, 0.42, 1],
      opacity: 0.96,
      markers,
      markerElevation: 0.02,
      arcs,
      arcColor: [1, 0.66, 0.06],
      arcWidth: 1.2,
      arcHeight: 0.28,
    });
    globeRef.current = globe;

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e?.isIntersecting ?? true));
    io.observe(canvas);

    let raf = 0;
    const tick = () => {
      if (visible) {
        const f = focusRef.current;
        if (f && drag.current.start === null) {
          const [fp, ft] = toAngles(f);
          // shortest way round
          let d = (fp - phi) % TAU;
          if (d > Math.PI) d -= TAU;
          if (d < -Math.PI) d += TAU;
          phi += reduced ? d : d * 0.06;
          const tt = Math.max(0.1, Math.min(0.6, ft * 0.6));
          th += reduced ? tt - th : (tt - th) * 0.06;
        } else if (drag.current.start === null && !reduced) {
          phi += speed;
        }
        const ph = phi + drag.current.delta / 220;
        globe.update({ phi: ph, theta: th, width: width * dpr, height: width * dpr });
        // Hide a label once its city turns away from us (cobe's own flag lingers at the limb).
        const cLon = (Math.PI * 1.5 - ph) % TAU;
        const cx = Math.cos(th) * Math.cos(cLon);
        const cy = Math.cos(th) * Math.sin(cLon);
        const cz = Math.sin(th);
        for (const l of labelsRef.current) {
          const el = labelRefs.current[l.id];
          if (!el) continue;
          const la = (l.location[0] * Math.PI) / 180;
          const lo = (l.location[1] * Math.PI) / 180;
          const dot = Math.cos(la) * Math.cos(lo) * cx + Math.cos(la) * Math.sin(lo) * cy + Math.sin(la) * cz;
          el.style.visibility = dot > 0.18 ? "visible" : "hidden";
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const fade = window.setTimeout(() => {
      canvas.style.opacity = "1";
    }, 100);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fade);
      io.disconnect();
      ro.disconnect();
      globe.destroy();
      globeRef.current = null;
    };
    // The globe is created once; markers/arcs updates go through globe.update below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    globeRef.current?.update({ markers, arcs });
  }, [markers, arcs]);

  const down = (x: number) => {
    drag.current.start = x - drag.current.delta;
  };
  const up = () => {
    drag.current.start = null;
  };
  const move = (x: number) => {
    if (drag.current.start !== null) drag.current.delta = x - drag.current.start;
  };

  return (
    <div className={`cobe-globe ${className}`} aria-hidden="true" data-interactive={interactive}>
      <div className="cobe-atmo" />
      <canvas
        ref={canvasRef}
        {...(interactive
          ? {
              onPointerDown: (e: React.PointerEvent) => down(e.clientX),
              onPointerUp: up,
              onPointerOut: up,
              onPointerMove: (e: React.PointerEvent) => move(e.clientX),
            }
          : {})}
      />
      {labels.map((m) => (
        <span
          key={m.id}
          ref={(el) => {
            labelRefs.current[m.id] = el;
          }}
          className={m.below ? "cobe-label cobe-label-below" : "cobe-label"}
          style={
            {
              positionAnchor: `--cobe-${m.id}`,
              opacity: `var(--cobe-visible-${m.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 6px))`,
            } as React.CSSProperties
          }
        >
          {m.label}
        </span>
      ))}
    </div>
  );
}
