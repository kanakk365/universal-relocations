import { HeroActions } from "./HeroActions";
import { ALL_ARCS, HUB_LABELS, officeMarkers } from "@/lib/globe-data";

import { CobeGlobe } from "./CobeGlobe";
import { Planner } from "./Planner";
import { Star } from "./icons";
import s from "./Hero.module.css";

const HEADLINE = ["One", "company", "for", "every", "mile", "of", "your", "move"];
const EMPHASIS = new Set([3, 4]);

export function Hero() {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className={`${s.banner} on-navy`}>
        <div className={s.glow} aria-hidden="true" />
        <div className={s.inner}>
        <div className={s.copy}>
          <h1 id="hero-title" className={`h1 ${s.title}`}>
            {HEADLINE.map((w, i) => (
              <span key={`${w}-${i}`}>
                <span className="mask-word">
                  <span className={EMPHASIS.has(i) ? s.em : undefined} style={{ ["--d" as string]: `${120 + i * 60}ms` }}>
                    {w}
                  </span>
                </span>
                {i < HEADLINE.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <p className={`lead soft-in ${s.lede}`} style={{ ["--d" as string]: "620ms" }}>
            International, interstate and corporate moves since 1998, handled end to end by our own teams in the
            USA, India and the UAE.
          </p>
          <HeroActions />
          <p className={`soft-in ${s.proof}`} style={{ ["--d" as string]: "900ms" }}>
            <span className={s.stars} aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={15} />
              ))}
            </span>
            <span>
              <b>4.5</b> on Trustpilot from 2,000+ reviews
            </span>
            <span className={s.sep} aria-hidden="true" />
            <span>
              <b>4.4</b> on Google
            </span>
          </p>
        </div>
        <div className={`${s.globeCol} soft-in`} style={{ ["--d" as string]: "300ms" }}>
          <CobeGlobe markers={officeMarkers()} arcs={ALL_ARCS} labels={HUB_LABELS} start={[30, 12]} />
        </div>
        </div>
      </div>

      <div className={`${s.stage} stage-in`} style={{ ["--d" as string]: "500ms" }}>
        <Planner />
      </div>
    </section>
  );
}
