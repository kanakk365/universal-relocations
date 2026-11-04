"use client";

import { useEffect, useMemo, useState } from "react";

import { hubs } from "@/lib/content";
import { HUB_LABELS, HUB_LL, arcsFrom, officeMarkers } from "@/lib/globe-data";

import { CobeGlobe } from "./CobeGlobe";
import { Phone } from "./icons";
import { Reveal } from "./motion";
import s from "./Hubs.module.css";

type Code = "USA" | "IND" | "UAE";

export function Hubs() {
  const [active, setActive] = useState<Code>("USA");
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 20_000);
    return () => window.clearInterval(id);
  }, []);

  const markers = useMemo(() => officeMarkers(active), [active]);
  const arcs = useMemo(() => arcsFrom(active), [active]);

  return (
    <section id="hubs" className={s.wrap} aria-labelledby="hubs-title">
      <div className={`${s.band} on-navy`}>
        <div className={s.glow} aria-hidden="true" />
        <div className={`shell ${s.inner}`}>
          <div className={s.left}>
            <Reveal>
              <h2 id="hubs-title" className={`h2 ${s.title}`}>
                Our own people at <span className={s.em}>both ends</span> of your move
              </h2>
              <p className={s.lede}>
                Universal began in 1998 moving diplomats and corporate expatriates. Today our own offices in the
                USA, India and the UAE pack, clear and deliver, so your shipment never changes hands to a stranger
                between continents.
              </p>
            </Reveal>

            <ul className={s.hubs}>
              {hubs.map((h) => {
                const code = h.code as Code;
                const on = active === code;
                return (
                  <li key={h.code} className={s.hub} data-on={on}>
                    <button
                      type="button"
                      aria-pressed={on}
                      className={s.hubBtn}
                      onClick={() => setActive(code)}
                      onMouseEnter={() => setActive(code)}
                      onFocus={() => setActive(code)}
                    >
                      <span className={s.hubName}>{h.name}</span>
                      <span className={`${s.clock} data`}>
                        {now
                          ? now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: h.tz })
                          : "--:--"}{" "}
                        in {h.tzLabel}
                      </span>
                    </button>
                    <div className={s.hubBody}>
                      <div>
                        <p className={s.offices}>{h.cities.join(" · ")}</p>
                        <a href={`tel:${h.phone.tel}`} className={s.tel}>
                          <Phone size={16} />
                          <span className="tabular">{h.phone.number}</span>
                          <span className={s.free}>toll free</span>
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={s.globe}>
            <CobeGlobe markers={markers} arcs={arcs} labels={HUB_LABELS} focus={HUB_LL[active]} />
          </div>
        </div>
      </div>
    </section>
  );
}
