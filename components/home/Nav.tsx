"use client";

import { useEffect, useState } from "react";

import { phones } from "@/lib/content";

import { ArrowUpRight, Close, Menu, Phone } from "./icons";
import s from "./Nav.module.css";

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how" },
  { label: "Hubs", href: "#hubs" },
  { label: "Reviews", href: "#reviews" },
];

export function focusQuote() {
  const el = document.getElementById("q-from") as HTMLInputElement | null;
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => el?.focus({ preventScroll: true }), 450);
}

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const usa = phones[0];

  return (
    <header className={s.wrap} data-solid={solid || open ? "true" : "false"}>
      <div className={s.bar}>
        <a href="#top" className={s.brand} aria-label="Universal Relocations, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-reversed.png" alt="" className={`${s.logo} ${s.logoRev}`} width={2142} height={487} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo.png" alt="" className={`${s.logo} ${s.logoInk}`} width={2142} height={487} />
        </a>

        <nav aria-label="Main" className={s.links}>
          <ul>
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={s.actions}>
          <a href={`tel:${usa.tel}`} className={s.phone}>
            <Phone size={17} />
            <span className="tabular">{usa.number}</span>
          </a>
          <button type="button" className={`btn ${s.cta}`} onClick={focusQuote}>
            Get a free quote
            <span className="chip" aria-hidden="true">
              <ArrowUpRight size={17} />
            </span>
          </button>
          <button
            type="button"
            className={s.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={s.sheet} data-open={open ? "true" : "false"} hidden={!open}>
        <ul>
          {NAV.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className={s.sheetPhones}>
          {phones.map((p) => (
            <li key={p.hub}>
              <a href={`tel:${p.tel}`}>
                <span>{p.label}</span>
                <span className="tabular">{p.number}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
