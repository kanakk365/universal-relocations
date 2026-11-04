"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { licences, nav, phones } from "@/lib/content";
import { Icon } from "./Icon";
import s from "./Masthead.module.css";

export function Masthead() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className={s.strip}>
        <p className={s.licence}>
          <span>Universal Relocations Inc.</span>
          {licences.slice(0, 3).map((l) => (
            <span key={l.name} className={s.lic}>
              {l.name} {l.value}
            </span>
          ))}
        </p>
        <ul className={s.phones} aria-label="Toll-free numbers">
          {phones.map((p) => (
            <li key={p.hub}>
              <a href={`tel:${p.tel}`}>
                <span className={s.hub}>{p.hub}</span>
                {p.number}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <header className={s.mast}>
        <a href="#top" className={s.brand} aria-label="Universal Relocations, home">
          <Image src="/brand/logo.png" alt="" width={2142} height={487} priority className={s.logo} />
        </a>

        <nav aria-label="Primary" className={s.nav}>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={s.actions}>
          <a className={s.quote} href="#quote">
            Get a free quote
            <Icon name="arrow" size={18} />
          </a>
          <button
            type="button"
            className={s.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
            <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>

        <div id="mobile-nav" className={s.drawer} data-open={open} hidden={!open}>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className={s.drawerPhones}>
            {phones.map((p) => (
              <li key={p.hub}>
                <a href={`tel:${p.tel}`}>
                  <span className={s.hub}>{p.label}</span>
                  {p.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
