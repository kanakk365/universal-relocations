import Image from "next/image";
import { company, footerColumns, legalLinks, phones } from "@/lib/content";
import s from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.brand}>
          <Image src="/brand/logo.png" alt="Universal Relocations" width={2142} height={487} className={s.logo} />
          <p>The one-stop relocation service for international, interstate and intrastate moves since 1998.</p>
          <a href={`mailto:${company.email}`} className={s.mail}>
            {company.email}
          </a>
          <ul className={s.phones}>
            {phones.map((p) => (
              <li key={p.hub}>
                <span>{p.label}</span>
                <a href={`tel:${p.tel}`}>{p.number}</a>
              </li>
            ))}
          </ul>
        </div>
        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title} className={s.col}>
            <h2>{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#top">{l}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className={s.legal}>
        <p>
          © {new Date().getFullYear()} {company.legalName} All rights reserved.
        </p>
        <ul>
          {legalLinks.map((l) => (
            <li key={l}>
              <a href="#top">{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
