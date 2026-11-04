"use client";

import { useEffect, useState } from "react";

import { hubs } from "@/lib/content";

import { Phone } from "./icons";
import s from "./Cta.module.css";

export function CtaHubs() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 20_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={s.card}>
      <p className={s.cardTitle}>Talk to a move manager</p>
      <ul className={s.hubList}>
        {hubs.map((h) => (
          <li key={h.code}>
            <a href={`tel:${h.phone.tel}`} className={s.hubRow}>
              <span className={`${s.code} data`}>{h.code}</span>
              <span className={s.hubText}>
                <b className="tabular">{h.phone.number}</b>
                <span>
                  {h.name} ·{" "}
                  <span className="tabular">
                    {now
                      ? now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: h.tz })
                      : "--:--"}
                  </span>{" "}
                  in {h.tzLabel}
                </span>
              </span>
              <span className={s.call} aria-hidden="true">
                <Phone size={18} />
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className={s.cardNote}>All three numbers are toll free.</p>
    </div>
  );
}
