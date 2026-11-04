// One authored icon set: 24px grid, 1.7 stroke, round caps and joins.
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 20, children, ...rest }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: P) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);
export const ArrowUpRight = (p: P) => (
  <Svg {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Svg>
);
export const ArrowLeft = (p: P) => (
  <Svg {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Svg>
);
export const Phone = (p: P) => (
  <Svg {...p}>
    <path d="M5 4h3.5l1.8 4.6-2.3 1.4a11 11 0 0 0 6 6l1.4-2.3L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
  </Svg>
);
export const Pin = (p: P) => (
  <Svg {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </Svg>
);
export const Flag = (p: P) => (
  <Svg {...p}>
    <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
  </Svg>
);
export const Calendar = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Svg>
);
export const Check = (p: P) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Svg>
);
export const Box = (p: P) => (
  <Svg {...p}>
    <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9Z" />
    <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
  </Svg>
);
export const Ship = (p: P) => (
  <Svg {...p}>
    <path d="M3 15.5 5 20h14l2-4.5H3Z" />
    <path d="M6 15.5V10h12v5.5M9 10V6h6v4" />
  </Svg>
);
export const Shield = (p: P) => (
  <Svg {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6L12 3Z" />
    <path d="m8.8 12 2.2 2.2 4.3-4.4" />
  </Svg>
);
export const Home = (p: P) => (
  <Svg {...p}>
    <path d="M4 11 12 4l8 7M6 9.5V20h12V9.5" />
    <path d="M10 20v-5h4v5" />
  </Svg>
);
export const Video = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="6" width="13" height="12" rx="2.5" />
    <path d="m16 10.5 5-3v9l-5-3" />
  </Svg>
);
export const Calculator = (p: P) => (
  <Svg {...p}>
    <rect x="5" y="3" width="14" height="18" rx="2.5" />
    <path d="M8.5 7h7M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01M8.5 15h.01M12 15h.01M15.5 15h.01M8.5 18h.01M12 18h3.5" />
  </Svg>
);
export const Menu = (p: P) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);
export const Close = (p: P) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);
export const Star = ({ size = 16, ...rest }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...rest}>
    <path
      fill="currentColor"
      d="m12 2.8 2.75 5.9 6.45.75-4.77 4.4 1.27 6.37L12 17.05 6.3 20.22l1.27-6.37L2.8 9.45l6.45-.75L12 2.8Z"
    />
  </svg>
);
export const Quote = ({ size = 40, ...rest }: P) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" {...rest}>
    <path
      fill="currentColor"
      d="M8 36V25.5C8 17 12.6 11.4 20.4 10l1.4 3.6c-4.3 1.4-6.6 4.4-6.9 8.4H21V36H8Zm19 0V25.5C27 17 31.6 11.4 39.4 10l1.4 3.6c-4.3 1.4-6.6 4.4-6.9 8.4H40V36H27Z"
    />
  </svg>
);

/** The underline stroke drawn under an emphasised word on a light ground. */
export const MarkStroke = () => (
  <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
    <path
      d="M3 14.5C46 6.5 108 4.5 197 9"
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      pathLength={1}
    />
  </svg>
);
