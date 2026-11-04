import { company, fmcStatement, footerColumns, legalLinks, licences, phones } from "@/lib/content";

import s from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <div className={`shell ${s.top}`}>
        <div className={s.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo.png" alt="Universal Relocations" width={2142} height={487} className={s.logo} />
          <p>The one-stop relocation service for international, interstate and intrastate moves, since 1998.</p>
          <a href={`mailto:${company.email}`} className={s.mail}>
            {company.email}
          </a>
          <ul className={s.phones}>
            {phones.map((p) => (
              <li key={p.hub}>
                <span>{p.label}</span>
                <a href={`tel:${p.tel}`} className="tabular">
                  {p.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {footerColumns.map((c) => (
          <nav key={c.title} aria-label={c.title} className={s.col}>
            <h2>{c.title}</h2>
            <ul>
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#top">{l}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className={`shell ${s.legal}`}>
        <ul className={s.lic}>
          {licences.map((l) => (
            <li key={l.name}>
              {l.name} <span className="tabular">#{l.value}</span>
            </li>
          ))}
        </ul>
        <p className={s.fmc}>{fmcStatement}</p>
        <div className={s.bottom}>
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <ul>
            {legalLinks.map((l) => (
              <li key={l}>
                <a href="#top">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
