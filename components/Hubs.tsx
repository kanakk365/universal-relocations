"use client";

import { useEffect, useState } from "react";
import { hubs } from "@/lib/content";
import { Icon } from "./Icon";
import p from "./Part.module.css";
import s from "./Hubs.module.css";

function useClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 20_000);
    return () => clearInterval(t);
  }, []);
  return now;
}

export function Hubs() {
  const now = useClock();
  return (
    <section id="hubs" className={p.part} aria-labelledby="hubs-title">
      <div className={p.bar}>
        <h2 id="hubs-title">Our own offices at both ends of the move.</h2>
        <span className={p.barNote}>Ports and offices</span>
      </div>
      <div className={`${p.grid} ${s.hubs}`}>
        {hubs.map((h) => (
          <article key={h.code} className={s.hub} aria-labelledby={`hub-${h.code}`}>
            <header className={s.top}>
              <h3 id={`hub-${h.code}`} className={s.code}>
                <span aria-hidden="true">{h.code}</span>
                <span className="visually-hidden">{h.name}</span>
              </h3>
              <div className={s.time}>
                <span className={p.label}>{h.tzLabel} time</span>
                <time className={p.typed} suppressHydrationWarning>
                  {now
                    ? new Intl.DateTimeFormat("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        timeZone: h.tz,
                      }).format(now)
                    : " "}
                </time>
              </div>
            </header>
            <p className={s.blurb}>{h.blurb}</p>
            <div className={s.offices}>
              <span className={p.label}>Offices</span>
              <ul>
                {h.cities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <footer className={s.foot}>
              <a href={`tel:${h.phone.tel}`} className={s.tel}>
                <Icon name="phone" size={18} />
                <span className={p.typed}>{h.phone.number}</span>
              </a>
              <a href="#hubs" className={p.textLink}>
                {h.code === "IND" ? "India" : h.code} hub
                <Icon name="arrow" size={16} />
              </a>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
