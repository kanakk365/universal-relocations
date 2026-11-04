"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { homeSizes, phones } from "@/lib/content";
import { PLACES, resolvePlace, type Place } from "@/lib/geo";

import { ArrowLeft, ArrowUpRight, Box, Calendar, Check, Flag, Home, Phone, Pin, Ship, Shield } from "./icons";
import { RouteMap } from "./RouteMap";
import s from "./Planner.module.css";

type Fields = { from: string; to: string; month: string; size: string; name: string; email: string; phone: string };
type Errors = Partial<Record<keyof Fields | "contact", string>>;

const EXAMPLE_FROM = PLACES[0];
const EXAMPLE_TO = PLACES[6];

const CLOCKS = [
  { code: "NJ", tz: "America/New_York" },
  { code: "MAA", tz: "Asia/Kolkata" },
  { code: "DXB", tz: "Asia/Dubai" },
];

function useClocks() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 20_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

function monthOptions() {
  const out: string[] = [];
  const d = new Date();
  d.setDate(1);
  for (let i = 0; i < 12; i++) {
    out.push(d.toLocaleString("en-US", { month: "long", year: "numeric" }));
    d.setMonth(d.getMonth() + 1);
  }
  return out;
}

export function Planner() {
  const [f, setF] = useState<Fields>({ from: "", to: "", month: "", size: "", name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reference, setReference] = useState("");
  const [months, setMonths] = useState<string[]>([]);
  const now = useClocks();
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMonths(monthOptions()), []);

  const fromPlace = useMemo(() => resolvePlace(f.from), [f.from]);
  const toPlace = useMemo(() => resolvePlace(f.to), [f.to]);
  const live = Boolean(fromPlace && toPlace && fromPlace.code !== toPlace.code);
  const mapFrom: Place = live ? fromPlace! : (fromPlace ?? EXAMPLE_FROM);
  const mapTo: Place = live ? toPlace! : mapFrom.code === EXAMPLE_TO.code ? EXAMPLE_FROM : EXAMPLE_TO;

  const domestic = live && mapFrom.hub === "USA" && mapTo.hub === "USA";
  const fromCity = live ? mapFrom.name.split(",")[0] : "your home";
  const toCity = live ? mapTo.name.split(",")[0] : "your new home";

  const legs = [
    { icon: Box, title: "Survey & packing", body: `In-home or video survey, then export packing in ${fromCity}` },
    domestic
      ? { icon: Ship, title: "Licensed transport", body: `Interstate road move to ${toCity}` }
      : { icon: Ship, title: "Freight", body: `Ocean, air or groupage to ${toCity}` },
    domestic
      ? { icon: Shield, title: "Covered", body: "US DOT 2428388 · transit insurance" }
      : { icon: Shield, title: "Customs", body: "Paperwork cleared at both ends" },
    { icon: Home, title: "Delivery", body: `Delivered and unpacked in ${toCity}` },
  ];

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setF((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k] || (errors.contact && (k === "email" || k === "phone")))
      setErrors((p) => ({ ...p, [k]: undefined, contact: undefined }));
  };

  const focusFirst = (errs: Errors) => {
    const order: (keyof Errors)[] = ["from", "to", "name", "contact", "email"];
    const first = order.find((k) => errs[k]);
    if (!first) return;
    const id = first === "contact" ? "q-email" : `q-${first}`;
    document.getElementById(id)?.focus();
  };

  const next = () => {
    const errs: Errors = {};
    if (!f.from.trim()) errs.from = "Tell us where you're moving from.";
    if (!f.to.trim()) errs.to = "Tell us where you're moving to.";
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirst(errs);
    setStep(2);
    window.setTimeout(() => document.getElementById("q-name")?.focus(), 60);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) return next();
    const errs: Errors = {};
    if (!f.name.trim()) errs.name = "Add the name we should ask for.";
    if (!f.email.trim() && !f.phone.trim()) errs.contact = "Add an email or a phone number so we can send your quote.";
    if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
      errs.email = "That email address looks incomplete.";
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirst(errs);

    setPending(true);
    setFailed(false);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as { reference: string };
      setReference(data.reference);
      setStep(3);
      window.setTimeout(() => stepRef.current?.focus(), 60);
    } catch {
      setFailed(true);
    } finally {
      setPending(false);
    }
  };

  const hubPhone = (live && mapFrom.hub ? phones.find((p) => p.hub === mapFrom.hub) : null) ?? phones[0];

  return (
    <div className={s.panel} id="quote">
      <div className={s.top}>
        <div className={s.title}>
          <span className={s.dot} aria-hidden="true" />
          <h2>Free moving quote</h2>
        </div>
        <ol className={s.steps} aria-label="Quote steps">
          <li data-on={step >= 1} aria-current={step === 1 ? "step" : undefined}>
            <span>1</span> Your route
          </li>
          <li data-on={step >= 2} aria-current={step === 2 ? "step" : undefined}>
            <span>2</span> Your details
          </li>
        </ol>
        <p className={`${s.clocks} data`} aria-label="Local time at our hubs">
          {CLOCKS.map((c) => (
            <span key={c.code}>
              <b>{c.code}</b>{" "}
              {now
                ? now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: c.tz })
                : "--:--"}
            </span>
          ))}
        </p>
      </div>

      <div className={s.body}>
        <div className={s.mapCol}>
          <div className={s.map}>
            <RouteMap from={mapFrom} to={mapTo} example={!live} />
            <p className={s.mapTag} aria-live="polite">
              {live ? (
                <>
                  <i className={s.liveDot} aria-hidden="true" /> Your route
                </>
              ) : fromPlace ? (
                "Now add where you're moving to"
              ) : (
                "Example route · type yours"
              )}
            </p>
          </div>
          <ol className={s.legs} aria-label="What we handle on this route">
            {legs.map((l, i) => (
              <li key={l.title}>
                <span className={s.legIcon} aria-hidden="true">
                  <l.icon size={18} />
                </span>
                <span className={s.legText}>
                  <b>{l.title}</b>
                  <span>{l.body}</span>
                </span>
                {i < legs.length - 1 && <i className={s.legLine} aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </div>

        <form className={s.form} onSubmit={submit} noValidate aria-describedby="q-note">
          {step === 1 && (
            <div className={s.stepBody} key="s1">
              <Field id="q-from" label="Moving from" icon={<Pin size={18} />} error={errors.from}>
                <input
                  id="q-from"
                  name="from"
                  list="q-places"
                  autoComplete="address-level2"
                  placeholder="City or state, e.g. New Jersey"
                  value={f.from}
                  onChange={set("from")}
                  aria-invalid={Boolean(errors.from)}
                  aria-describedby={errors.from ? "q-from-err" : undefined}
                />
              </Field>
              <Field id="q-to" label="Moving to" icon={<Flag size={18} />} error={errors.to}>
                <input
                  id="q-to"
                  name="to"
                  list="q-places"
                  placeholder="City or country, e.g. Chennai"
                  value={f.to}
                  onChange={set("to")}
                  aria-invalid={Boolean(errors.to)}
                  aria-describedby={errors.to ? "q-to-err" : undefined}
                />
              </Field>
              <datalist id="q-places">
                {PLACES.map((p) => (
                  <option key={p.code} value={p.name} />
                ))}
              </datalist>
              <Field id="q-month" label="Moving month" icon={<Calendar size={18} />}>
                <select id="q-month" name="month" value={f.month} onChange={set("month")}>
                  <option value="">Not sure yet</option>
                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </Field>
              <div className={s.sizes} role="radiogroup" aria-label="Home size">
                <span className={s.sizesLabel}>Home size</span>
                <div className={s.sizeRow}>
                  {homeSizes.map((h) => (
                    <label key={h} className={s.size} data-on={f.size === h}>
                      <input type="radio" name="size" value={h} checked={f.size === h} onChange={set("size")} />
                      {h}
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className={`btn ${s.submit}`}>
                Continue
                <span className="chip" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </button>
            </div>
          )}

          {step === 2 && (
            <div className={s.stepBody} key="s2">
              <button type="button" className={s.back} onClick={() => setStep(1)}>
                <ArrowLeft size={16} />
                <span>
                  {f.from} <span aria-hidden="true">→</span>
                  <span className="visually-hidden"> to </span> {f.to}
                </span>
              </button>
              <Field id="q-name" label="Your name" error={errors.name}>
                <input
                  id="q-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Full name"
                  value={f.name}
                  onChange={set("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "q-name-err" : undefined}
                />
              </Field>
              <Field id="q-email" label="Email" error={errors.email ?? errors.contact}>
                <input
                  id="q-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={f.email}
                  onChange={set("email")}
                  aria-invalid={Boolean(errors.email || errors.contact)}
                  aria-describedby={errors.email || errors.contact ? "q-email-err" : undefined}
                />
              </Field>
              <Field id="q-phone" label="Phone" hint="optional if you add an email">
                <input
                  id="q-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 555 0100"
                  value={f.phone}
                  onChange={set("phone")}
                />
              </Field>
              <button type="submit" className={`btn ${s.submit}`} disabled={pending}>
                {pending ? "Sending…" : "Get my free quote"}
                <span className="chip" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </button>
              {failed && (
                <p className={s.failed} role="alert">
                  We couldn&rsquo;t send that just now. Try again, or call{" "}
                  <a href={`tel:${hubPhone.tel}`}>{hubPhone.number}</a>.
                </p>
              )}
            </div>
          )}

          {step === 3 && (
            <div className={`${s.stepBody} ${s.done}`} key="s3" ref={stepRef} tabIndex={-1} aria-live="polite">
              <span className={s.doneIcon} aria-hidden="true">
                <Check size={26} />
              </span>
              <h3>Request received, {f.name.split(" ")[0]}.</h3>
              <p>
                A move manager will contact you about your move from {f.from} to {f.to} with your free quote.
              </p>
              <p className={`${s.ref} data`}>
                Reference <b>{reference}</b>
              </p>
              <a href={`tel:${hubPhone.tel}`} className={s.call}>
                <Phone size={17} /> Prefer to talk now? Call {hubPhone.number}
              </a>
            </div>
          )}

          <p id="q-note" className={s.note}>
            Free and with no obligation. We only use your details to prepare your quote.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  hint,
  icon,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  icon?: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={s.field} data-error={Boolean(error)}>
      <label htmlFor={id}>
        {label}
        {hint && <span> · {hint}</span>}
      </label>
      <div className={s.control}>
        {icon && <span className={s.fieldIcon}>{icon}</span>}
        {children}
      </div>
      {error && (
        <p className={s.error} id={`${id}-err`}>
          {error}
        </p>
      )}
    </div>
  );
}
