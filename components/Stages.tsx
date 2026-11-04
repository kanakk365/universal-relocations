"use client";

import { useEffect, useRef } from "react";
import { stages } from "@/lib/content";
import { SealStamp } from "./Stamp";
import p from "./Part.module.css";
import s from "./Stages.module.css";

// The six handoffs as the particulars table. Each row is countersigned with the
// Universal seal as it scrolls into view, in order.
export function Stages() {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const rows = Array.from(listRef.current?.querySelectorAll<HTMLElement>("[data-row]") ?? []);
    if (!("IntersectionObserver" in window)) {
      rows.forEach((r) => (r.dataset.stamped = "true"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          (e.target as HTMLElement).dataset.stamped = "true";
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.35 }
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section id="stages" className={p.part} aria-labelledby="stages-title">
      <div className={p.bar}>
        <h2 id="stages-title">Six stages. One company signs for every one.</h2>
        <span className={p.barNote}>Particulars of carriage</span>
      </div>

      <div className={s.head} aria-hidden="true">
        <span>Stage</span>
        <span>Status</span>
        <span>What happens</span>
        <span>Handled by</span>
      </div>

      <ol ref={listRef} className={s.rows}>
        {stages.map((st, i) => (
          <li key={st.word} className={s.row} data-row>
            <span className={s.no}>{i + 1}</span>
            <span className={s.word}>{st.word}</span>
            <div className={s.what}>
              <h3>{st.title}</h3>
              <p>{st.body}</p>
            </div>
            <div className={s.by}>
              <span className={s.byName}>Universal Relocations</span>
              <span className={s.seal}>
                <SealStamp label="UR" impression={i} />
              </span>
            </div>
          </li>
        ))}
      </ol>

      <p className={s.foot}>
        One move manager, one contract and one point of contact across every stage.
      </p>
    </section>
  );
}
