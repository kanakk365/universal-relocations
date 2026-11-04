import { useId } from "react";

// A rubber stamp in orange ink: double-ruled frame, distressed by an SVG turbulence mask
// so the ink reads pressed rather than drawn.
export function ReceivedStamp({ date, reference }: { date: string; reference: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 320 170" role="img" aria-label={`Received ${date}, reference ${reference}`}>
      <defs>
        <filter id={`ink-${id}`} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="grain" />
          <feColorMatrix
            in="grain"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.5 1.42"
            result="speckle"
          />
          <feComposite in="SourceGraphic" in2="speckle" operator="in" result="pressed" />
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="3" result="warp" />
          <feDisplacementMap in="pressed" in2="warp" scale="3.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter={`url(#ink-${id})`} fill="var(--stamp)" stroke="var(--stamp)">
        <rect x="6" y="6" width="308" height="158" rx="10" fill="none" strokeWidth="7" />
        <rect x="18" y="18" width="284" height="134" rx="5" fill="none" strokeWidth="2.5" />
        <text
          x="160"
          y="86"
          textAnchor="middle"
          textLength={262}
          lengthAdjust="spacingAndGlyphs"
          stroke="none"
          style={{ fontFamily: "var(--font-print)", fontWeight: 800, fontSize: 54 }}
        >
          RECEIVED
        </text>
        <line x1="40" y1="104" x2="280" y2="104" strokeWidth="2.5" />
        <text
          x="160"
          y="134"
          textAnchor="middle"
          textLength={244}
          lengthAdjust="spacingAndGlyphs"
          stroke="none"
          style={{ fontFamily: "var(--font-typed)", fontWeight: 700, fontSize: 19 }}
        >
          {date} · {reference}
        </text>
      </g>
    </svg>
  );
}

// The small circular signature stamp used in the stages table. Each impression
// gets its own grain seed and ink load so six stamps never look pasted.
export function SealStamp({ label = "UR", impression = 0 }: { label?: string; impression?: number }) {
  const id = useId().replace(/:/g, "");
  const load = [1.4, 1.25, 1.5, 1.3, 1.45, 1.2][impression % 6];
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        {/* top arc runs left to right over the top; bottom arc runs left to right underneath,
            so both lines of lettering read the right way up */}
        <path id={`top-${id}`} d="M10.5 32a21.5 21.5 0 0 1 43 0" />
        <path id={`bot-${id}`} d="M7 32a25 25 0 0 0 50 0" />
        <filter id={`seal-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="1" seed={11 + impression * 7} result="g" />
          <feColorMatrix
            in="g"
            type="matrix"
            values={`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.3 ${load}`}
            result="s"
          />
          <feComposite in="SourceGraphic" in2="s" operator="in" />
        </filter>
      </defs>
      <g filter={`url(#seal-${id})`} fill="currentColor" stroke="currentColor">
        <circle cx="32" cy="32" r="29.5" fill="none" strokeWidth="2.6" />
        <circle cx="32" cy="32" r="14" fill="none" strokeWidth="1.4" />
        <text stroke="none" style={{ fontFamily: "var(--font-print)", fontWeight: 800, fontSize: 6.4 }}>
          <textPath
            href={`#top-${id}`}
            startOffset="50%"
            textAnchor="middle"
            textLength={60}
            lengthAdjust="spacingAndGlyphs"
          >
            UNIVERSAL RELOCATIONS
          </textPath>
        </text>
        <text stroke="none" style={{ fontFamily: "var(--font-print)", fontWeight: 800, fontSize: 6.4 }}>
          <textPath href={`#bot-${id}`} startOffset="50%" textAnchor="middle">
            SIGNED
          </textPath>
        </text>
        <circle cx="12.6" cy="40" r="1.1" stroke="none" />
        <circle cx="51.4" cy="40" r="1.1" stroke="none" />
        <text
          x="32"
          y="36.4"
          textAnchor="middle"
          stroke="none"
          style={{ fontFamily: "var(--font-print)", fontWeight: 800, fontSize: 12 }}
        >
          {label}
        </text>
      </g>
    </svg>
  );
}
