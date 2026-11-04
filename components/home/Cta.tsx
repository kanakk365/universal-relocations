import { CtaActions } from "./CtaActions";
import { CtaHubs } from "./CtaHubs";
import { DotWorld } from "./DotWorld";
import s from "./Cta.module.css";

export function Cta() {
  return (
    <section className={s.wrap} aria-labelledby="cta-title">
      <div className={`${s.band} on-navy`}>
        <div className={s.glow} aria-hidden="true" />
        <DotWorld className={s.world} />
        <div className={s.inner}>
          <div className={s.copy}>
            <h2 id="cta-title" className={`h2 ${s.title}`}>
              Ready when <span className={s.em}>you</span> are
            </h2>
            <p className={s.lede}>
              Tell us where you&rsquo;re going and roughly when. A move manager will come back to you with a free,
              itemised quote, wherever you are starting from.
            </p>
            <CtaActions />
          </div>
          <CtaHubs />
        </div>
      </div>
    </section>
  );
}
