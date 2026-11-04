"use client";

import { ArrowUpRight, Video } from "./icons";
import { focusQuote } from "./Nav";
import s from "./Cta.module.css";

export function CtaActions() {
  return (
    <div className={s.actions}>
      <button type="button" className="btn" onClick={focusQuote}>
        Get a free quote
        <span className="chip" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </button>
      <a href="https://www.universalrelocations.com/contact-us/" className="btn-ghost on-navy">
        <Video size={19} />
        Book a video survey
      </a>
    </div>
  );
}
