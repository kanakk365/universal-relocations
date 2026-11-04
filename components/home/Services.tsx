import { services } from "@/lib/content";

import { ArrowRight } from "./icons";
import { Mark, Reveal } from "./motion";
import s from "./Services.module.css";

const byCode = Object.fromEntries(services.map((x) => [x.code, x]));

const GROUPS = [
  { title: "For you and your family", codes: ["INT", "DOM", "PET", "AUT", "BAG"] },
  { title: "For companies", codes: ["CRP", "OFC", "HSP"] },
  { title: "Storage, cover and care", codes: ["STO", "INS", "ART", "GRP"] },
];

export function Services() {
  return (
    <section id="services" className={`section ${s.section}`} aria-labelledby="services-title">
      <div className={`shell ${s.grid}`}>
        <Reveal className={s.side}>
          <h2 id="services-title" className="h2">
            Everything that <Mark>moves</Mark> with you
          </h2>
          <p className="lead">
            Twelve services under one roof, so your pet, your car and a framed painting can travel on the same booking as your
            boxes, with one point of contact for all of it.
          </p>
          <a className="btn btn-navy" href="#quote">
            Start with a free quote
            <span className="chip" aria-hidden="true">
              <ArrowRight size={18} />
            </span>
          </a>
        </Reveal>

        <div className={s.groups}>
          {GROUPS.map((g, gi) => (
            <Reveal key={g.title} className={s.group} delay={gi * 0.06}>
              <h3 className={s.groupTitle}>{g.title}</h3>
              <ul>
                {g.codes.map((c) => {
                  const svc = byCode[c];
                  return (
                    <li key={c}>
                      <a href="#quote" className={s.row}>
                        <span className={s.name}>{svc.name}</span>
                        <span className={s.body}>{svc.body}</span>
                        <span className={s.go} aria-hidden="true">
                          <ArrowRight size={18} />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
