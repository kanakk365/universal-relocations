import { press } from "@/lib/content";

import s from "./Press.module.css";

export function Press() {
  const row = [...press, ...press];
  return (
    <section className={s.press} aria-labelledby="press-title">
      <p id="press-title" className={s.title}>
        Universal Relocations in the press
      </p>
      <div className={s.marquee}>
        <ul className={s.track}>
          {row.map((p, i) => {
            const aspect = p.w / p.h;
            const h = Math.min(30, 46 / Math.sqrt(aspect));
            return (
              <li key={`${p.name}-${i}`} aria-hidden={i >= press.length ? "true" : undefined}>
                <span
                  role="img"
                  aria-label={i < press.length ? p.name : undefined}
                  className={s.logo}
                  style={{
                    height: `${h}px`,
                    width: `${h * aspect}px`,
                    WebkitMaskImage: `url(${p.src})`,
                    maskImage: `url(${p.src})`,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
