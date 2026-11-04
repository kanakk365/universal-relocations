"use client";

import { ArrowUpRight, Calculator } from "./icons";
import { focusQuote } from "./Nav";
import s from "./Hero.module.css";

export function HeroActions() {
  return (
    <div className={`soft-in ${s.actions}`} style={{ ["--d" as string]: "760ms" }}>
      <button type="button" className="btn" onClick={focusQuote}>
        Get a free quote
        <span className="chip" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </button>
      <a href="https://www.universalrelocations.com/moving-calculator/" className="btn-ghost on-navy">
        <Calculator size={19} />
        Moving calculator
      </a>
    </div>
  );
}
