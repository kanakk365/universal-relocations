"use client";

import { useEffect, useRef, useState } from "react";

import { licences } from "@/lib/content";

import { Check, Phone, Video } from "./icons";
import { Mark, Reveal } from "./motion";
import s from "./Why.module.css";

const ITEMS = [
  {
    title: "Our own hubs, not a relay of agents",
    body: "We run our own offices in the USA, India and the UAE. On those corridors the team that packs your home is the same company that receives it at the other end.",
  },
  {
    title: "Licensed for the shipment, not just the truck",
    body: "Universal is licensed by the US Federal Maritime Commission as an Ocean Transportation Intermediary, and runs NVOCC services for household goods to and from the USA.",
  },
  {
    title: "One move manager from survey to delivery",
    body: "You get one person who knows your inventory, your dates and your paperwork, reachable by phone, email or video call.",
  },
  {
    title: "Customs paperwork, handled at both ends",
    body: "We prepare the export documents, issue the bill of lading and clear your goods on arrival, so you are not chasing forms across time zones.",
  },
  {
    title: "Trusted with moves since 1998",
    body: "We started by moving diplomats and corporate expatriates, and many of them still move with us today.",
  },
];

function Visual({ i }: { i: number }) {
  if (i === 0)
    return (
      <div className={s.vChain}>
        {[
          { code: "USA", city: "New Jersey" },
          { code: "UAE", city: "Dubai" },
          { code: "IND", city: "Chennai" },
        ].map((h, k) => (
          <div key={h.code} className={s.vNode}>
            <span className={s.vCode}>{h.code}</span>
            <span className={s.vCity}>{h.city}</span>
            <span className={s.vOwn}>
              <Check size={14} /> Universal office
            </span>
            {k < 2 && <i className={s.vLink} aria-hidden="true" />}
          </div>
        ))}
      </div>
    );
  if (i === 1)
    return (
      <ul className={s.vLic}>
        {licences.map((l) => (
          <li key={l.name}>
            <span>{l.name}</span>
            <b className="data">{l.value}</b>
          </li>
        ))}
      </ul>
    );
  if (i === 2)
    return (
      <div className={s.vManager}>
        <div className={s.vManagerTop}>
          <span className={s.vAvatar} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7">
              <circle cx="12" cy="8.5" r="3.5" />
              <path d="M5 20c1.2-3.6 3.8-5.5 7-5.5s5.8 1.9 7 5.5" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <b>Your move manager</b>
            <span>Assigned when you book</span>
          </div>
        </div>
        <ul>
          <li>
            <Phone size={17} /> Toll-free in the USA, India and the UAE
          </li>
          <li>
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
              <path d="m4 7 8 6 8-6" strokeLinejoin="round" />
            </svg>{" "}
            contact@universalrelocations.com
          </li>
          <li>
            <Video size={17} /> Video survey and check-ins
          </li>
        </ul>
      </div>
    );
  if (i === 3)
    return (
      <ul className={s.vDocs}>
        {["Packing inventory", "Export declaration", "Bill of lading", "Import customs clearance", "Delivery receipt"].map(
          (d, k) => (
            <li key={d} style={{ ["--k" as string]: k }}>
              <span className={s.vTick}>
                <Check size={14} />
              </span>
              {d}
              <span className={s.vBy}>Universal</span>
            </li>
          ),
        )}
      </ul>
    );
  return (
    <ol className={s.vTime}>
      {[
        { when: "1998", what: "First international moves, for diplomats and corporate expatriates" },
        { when: "USA", what: "Offices in New Jersey, Maryland, Georgia, Texas and California" },
        { when: "India", what: "Chennai, Bangalore, Hyderabad, Mumbai and New Delhi" },
        { when: "UAE", what: "Our Dubai office for the Gulf corridor" },
      ].map((e) => (
        <li key={e.when}>
          <span className={s.vWhen}>{e.when}</span>
          <span className={s.vWhat}>{e.what}</span>
        </li>
      ))}
    </ol>
  );
}

export function Why() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" aria-labelledby="why-title">
      <div className="shell">
        <Reveal className={s.head}>
          <h2 id="why-title" className="h2">
            Why families, diplomats and companies <Mark>choose</Mark> Universal
          </h2>
        </Reveal>

        <div className={s.grid}>
          <div className={s.stickyCol}>
            <div className={s.panel} aria-hidden="true">
              {ITEMS.map((_, k) => (
                <div key={k} className={s.layer} data-on={k === active}>
                  <Visual i={k} />
                </div>
              ))}
            </div>
          </div>

          <ol className={s.list}>
            {ITEMS.map((it, k) => (
              <li
                key={it.title}
                ref={(el) => {
                  refs.current[k] = el;
                }}
                data-i={k}
                data-on={k === active}
                className={s.item}
              >
                <h3 className={s.itemTitle}>{it.title}</h3>
                <p>{it.body}</p>
                <div className={s.inline} aria-hidden="true">
                  <Visual i={k} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
