import { ArrowRight, Box, Check, Home, Ship, Shield, Video } from "./icons";
import { Mark, Reveal } from "./motion";
import s from "./Lifecycle.module.css";

const ROOMS = [
  { room: "Living room", items: 14, cuft: 240 },
  { room: "Main bedroom", items: 9, cuft: 180 },
  { room: "Second bedroom", items: 7, cuft: 120 },
  { room: "Kitchen & dining", items: 11, cuft: 90 },
  { room: "Packed boxes", items: 40, cuft: 160 },
];
const TOTAL = ROOMS.reduce((n, r) => n + r.cuft, 0);
// A 20 ft container holds roughly 1,170 cubic feet.
const FILL = Math.round((TOTAL / 1170) * 100);

const TRACK = [
  { icon: Box, title: "Packed and loaded", where: "New Jersey, USA", state: "done" },
  { icon: Shield, title: "Export customs cleared", where: "Port of New York and New Jersey", state: "done" },
  { icon: Ship, title: "At sea", where: "Ocean freight to Chennai", state: "now" },
  { icon: Shield, title: "Import customs", where: "Chennai, India", state: "next" },
  { icon: Home, title: "Delivered and unpacked", where: "Your new home", state: "next" },
] as const;

export function Lifecycle() {
  return (
    <section id="how" className={`section ${s.section}`} aria-labelledby="how-title">
      <div className="shell">
        <Reveal className={s.head}>
          <h2 id="how-title" className="h2">
            Know the cost before you move. <Mark>Track it</Mark> all the way.
          </h2>
          <p className="lead">
            One company runs both halves of your move, so the person who surveys your home is on the same team
            that clears your shipment and hands you the keys to your boxes.
          </p>
        </Reveal>

        <Reveal className={s.rail} aria-hidden="true">
          <span>Before you move</span>
          <i />
          <b>Booked</b>
          <i />
          <span>Until it&rsquo;s unpacked</span>
        </Reveal>

        <div className={s.cards}>
          <Reveal className={s.card} delay={0.05}>
            <div className={s.cardText}>
              <h3 className="h3">Plan with real numbers</h3>
              <p>
                Book an in-home or video pre-move survey, or add your rooms to the moving calculator. You get an
                itemised, complimentary estimate before you commit to anything.
              </p>
              <div className={s.links}>
                <a className="link-arrow" href="https://www.universalrelocations.com/moving-calculator/">
                  Open the moving calculator <ArrowRight size={18} />
                </a>
                <a className="link-arrow" href="https://www.universalrelocations.com/contact-us/">
                  <Video size={18} /> Book a video survey
                </a>
              </div>
            </div>

            <figure className={s.viz}>
              <div className={s.vizTop}>
                <span>Volume estimate</span>
                <span className={s.tag}>Example</span>
              </div>
              <ul className={s.rooms}>
                {ROOMS.map((r) => (
                  <li key={r.room}>
                    <span>{r.room}</span>
                    <span className={s.items}>{r.items} items</span>
                    <span className={`${s.cuft} tabular`}>{r.cuft} cu ft</span>
                  </li>
                ))}
              </ul>
              <div className={s.total}>
                <div>
                  <span className={s.totalLabel}>Estimated volume</span>
                  <span className={`${s.totalValue} tabular`}>{TOTAL.toLocaleString("en-US")} cu ft</span>
                </div>
                <div className={s.fit}>
                  <span className={s.fitBar}>
                    <i style={{ width: `${FILL}%` }} />
                  </span>
                  <span className={s.fitText}>
                    Fits a 20 ft container, about {FILL}% full
                  </span>
                </div>
              </div>
            </figure>
          </Reveal>

          <Reveal className={s.card} delay={0.15}>
            <div className={s.cardText}>
              <h3 className="h3">Follow it door to door</h3>
              <p>
                One move manager and one shipment record from pickup to delivery, with real-time tracking and
                support around the clock in every time zone you&rsquo;re moving across.
              </p>
              <div className={s.links}>
                <a className="link-arrow" href="tel:+18883237356">
                  Talk to a move manager <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <figure className={s.viz}>
              <div className={s.vizTop}>
                <span className="data">
                  NJ <span aria-hidden="true">→</span> MAA
                </span>
                <span className={s.tag}>Example shipment</span>
              </div>
              <ol className={s.track}>
                {TRACK.map((t) => (
                  <li key={t.title} data-state={t.state}>
                    <span className={s.trackIcon}>{t.state === "done" ? <Check size={16} /> : <t.icon size={16} />}</span>
                    <span className={s.trackText}>
                      <b>{t.title}</b>
                      <span>{t.where}</span>
                    </span>
                    {t.state === "now" && (
                      <span className={s.progress} aria-hidden="true">
                        <i />
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
