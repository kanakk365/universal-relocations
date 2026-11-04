// One authored icon set: 24px grid, 1.6 stroke, square caps to match the printed form.
type IconName = "arrow" | "phone" | "video" | "calculator" | "menu" | "close" | "external";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  external: <path d="M7 17 17 7M9 7h8v8" />,
  phone: (
    <path d="M5 3.5h3.5l1.8 4.6-2.3 1.5a11 11 0 0 0 6.4 6.4l1.5-2.3 4.6 1.8V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.1A1.5 1.5 0 0 1 5 3.5Z" />
  ),
  video: (
    <>
      <rect x="2.5" y="6" width="13" height="12" />
      <path d="m15.5 10.5 6-3.5v10l-6-3.5" />
    </>
  ),
  calculator: (
    <>
      <rect x="4.5" y="2.5" width="15" height="19" />
      <path d="M8 6.5h8v3H8zM8 13h1M11.5 13h1M15 13h1M8 17h1M11.5 17h1M15 16v2" />
    </>
  ),
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  close: <path d="m5.5 5.5 13 13M18.5 5.5l-13 13" />,
};

export function Icon({ name, size = 20, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
