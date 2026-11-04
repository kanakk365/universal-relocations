import { fmcStatement, licences, phones, press, reviews, services, startOptions } from "@/lib/content";
import { Icon } from "./Icon";
import p from "./Part.module.css";
import s from "./Sections.module.css";

export function Goods() {
  const half = Math.ceil(services.length / 2);
  const columns = [services.slice(0, half), services.slice(half)];
  return (
    <section id="goods" className={p.part} aria-labelledby="goods-title">
      <div className={p.bar}>
        <h2 id="goods-title">Everything we move, and how.</h2>
        <span className={p.barNote}>Description of goods</span>
      </div>
      <div className={s.goods}>
        {columns.map((col, ci) => (
          <table key={ci} className={s.goodsTable}>
            <thead>
              <tr>
                <th scope="col">Mark</th>
                <th scope="col">Service</th>
              </tr>
            </thead>
            <tbody>
              {col.map((sv) => (
                <tr key={sv.code}>
                  <td className={s.mark}>{sv.code}</td>
                  <td>
                    <a href="#goods" className={s.goodsLink}>
                      <span>
                        <strong>{sv.name}</strong>
                        <span className={s.goodsBody}>{sv.body}</span>
                      </span>
                      <Icon name="arrow" size={20} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </section>
  );
}

export function StartOptions() {
  return (
    <section id="start" className={p.part} aria-labelledby="start-title">
      <div className={s.startHead}>
        <h2 id="start-title">Prefer to start another way?</h2>
        <p>The quote form is the quickest route. These work just as well.</p>
      </div>
      <table className={s.startTable}>
        <thead>
          <tr>
            <th scope="col">Method</th>
            <th scope="col">Particulars</th>
            <th scope="col">
              <span className="visually-hidden">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {startOptions.map((o) => (
            <tr key={o.title}>
              <th scope="row" className={s.startMethod}>
                <Icon name={o.icon} size={22} />
                {o.title}
              </th>
              <td className={s.startBody}>{o.body}</td>
              <td className={s.startAction}>
                <a href={o.href} className={p.textLink}>
                  {o.action}
                  <Icon name="arrow" size={16} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export function Endorsements() {
  return (
    <section id="endorsements" className={p.part} aria-labelledby="endorse-title">
      <div className={p.bar}>
        <h2 id="endorse-title">Signed off by the people we&apos;ve moved.</h2>
        <span className={p.barNote}>Endorsements</span>
      </div>

      <div className={`${p.grid} ${s.endorse}`}>
        {reviews.map((r) => (
          <figure key={r.name} className={`${p.cell} ${s.review}`}>
            <span className={p.label}>Remarks · Google review</span>
            <blockquote className={`${p.typed} ${s.quote}`}>
              <p>&ldquo;{r.quote}&rdquo;</p>
            </blockquote>
            <figcaption className={s.signed}>
              <span className={s.signedLabel}>Signed</span>
              <span className={s.signedName}>{r.name}</span>
            </figcaption>
          </figure>
        ))}
        <div className={`${p.cell} ${s.moreRemarks}`}>
          <span className={p.label}>Further remarks</span>
          <p>These remarks are from our Google reviews. Read the rest, in customers' own words.</p>
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJ232HC1gfDTkRFGIkfTgGTus"
            className={p.textLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our Google reviews
            <Icon name="external" size={16} />
          </a>
        </div>
      </div>

      <div className={s.press}>
        <span className={`${p.label} ${s.pressLabel}`}>As reported by</span>
        <ul className={s.pressList}>
          {press.map((x) => (
            <li key={x.name}>
              <span
                role="img"
                aria-label={x.name}
                className={s.pressLogo}
                style={{
                  maskImage: `url(${x.src})`,
                  WebkitMaskImage: `url(${x.src})`,
                  aspectRatio: `${x.w} / ${x.h}`,
                  maxHeight: `${Math.round(58 / Math.sqrt(x.w / x.h))}px`,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Declarations() {
  return (
    <section id="licences" className={p.part} aria-labelledby="licences-title">
      <div className={s.declHead}>
        <h2 id="licences-title">Licences and declarations</h2>
      </div>
      <div className={`${p.grid} ${s.decl}`}>
        <div className={`${p.cell} ${s.fmc}`}>
          <span className={p.label}>US Federal Maritime Commission</span>
          <p>{fmcStatement}</p>
        </div>
        <dl className={s.licences}>
          {licences.map((l) => (
            <div key={l.name} className={`${p.cell} ${s.licence}`}>
              <dt className={p.label}>{l.name}</dt>
              <dd className={p.typed}>{l.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Close() {
  return (
    <section className={`${p.part} ${s.close}`} aria-labelledby="close-title">
      <div className={s.closeMain}>
        <h2 id="close-title">Ready when you are.</h2>
        <p>
          Fill in boxes 01 to 07 and your move manager takes it from there. Or call the hub nearest you;
          every number is toll free.
        </p>
        <a href="#quote" className={s.closeCta}>
          Back to the quote form
          <Icon name="arrow" size={22} />
        </a>
      </div>
      <div className={s.closeSide}>
        <ul className={s.closePhones}>
          {phones.map((ph) => (
            <li key={ph.hub}>
              <span className={p.label}>{ph.label}</span>
              <a href={`tel:${ph.tel}`} className={p.typed}>
                {ph.number}
              </a>
            </li>
          ))}
        </ul>
        <div className={s.signLine} aria-hidden="true">
          <span className={s.signX}>X</span>
          <span className={s.signRule} />
          <span className={p.label}>Shipper&apos;s signature</span>
        </div>
      </div>
    </section>
  );
}
