"use client";

import { useEffect, useRef, useState } from "react";
import { homeSizes, phones, places, ratings } from "@/lib/content";
import { Icon } from "./Icon";
import { ReceivedStamp } from "./Stamp";
import s from "./QuoteSheet.module.css";

type Fields = {
  from: string;
  to: string;
  month: string;
  size: string;
  name: string;
  email: string;
  phone: string;
};

type Errors = Partial<Record<keyof Fields | "contact", string>>;

const empty: Fields = { from: "", to: "", month: "", size: "", name: "", email: "", phone: "" };

function formatDate(d: Date) {
  return d
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();
}

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.from.trim()) e.from = "Enter the city or country you're moving from.";
  if (!f.to.trim()) e.to = "Enter the city or country you're moving to.";
  if (!f.name.trim()) e.name = "Enter your name so your move manager knows who to ask for.";
  const email = f.email.trim();
  const phone = f.phone.trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Check the email address, for example name@example.com.";
  if (phone && phone.replace(/[^\d]/g, "").length < 7) e.phone = "Check the phone number, including the country code.";
  if (!email && !phone) e.contact = "Add an email or a phone number so we can send your quote.";
  return e;
}

export function QuoteSheet() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const [issued, setIssued] = useState("");
  const [reference, setReference] = useState("");
  const [months, setMonths] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const done = status === "done";

  useEffect(() => {
    const now = new Date();
    setIssued(formatDate(now));
    const list: string[] = [];
    for (let i = 0; i < 12; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
      list.push(d.toLocaleDateString("en-GB", { month: "short", year: "numeric" }));
    }
    setMonths(list);
  }, []);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const v = e.target.value;
    setFields((f) => ({ ...f, [k]: v }));
    if (errors[k] || ((k === "email" || k === "phone") && errors.contact)) {
      setErrors((old) => {
        const next = { ...old };
        delete next[k];
        if (k === "email" || k === "phone") delete next.contact;
        return next;
      });
    }
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0] === "contact" ? "email" : Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as { reference: string };
      setReference(data.reference);
      setStatus("done");
    } catch {
      setStatus("failed");
    }
  }

  function reset() {
    setFields(empty);
    setErrors({});
    setReference("");
    setStatus("idle");
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>('[name="from"]')?.focus());
  }

  const describe = (k: keyof Errors) => (errors[k] ? `err-${k}` : undefined);

  return (
    <section id="quote" className={s.sheet} data-done={done} aria-labelledby="quote-title">
      <div className={s.titleRow}>
        <div className={s.titleBox}>
          <h1 id="quote-title" className={s.title}>
            Your whole move, on one bill&nbsp;of&nbsp;lading.
          </h1>
          <p className={s.lede}>
            Survey, packing, freight, customs and delivery, all handled by one company since 1998. Fill in
            boxes 01 to 07 for a free, no-obligation quote.
          </p>
        </div>

        <div className={s.side}>
          <dl className={s.refBox}>
            <div>
              <dt>Form</dt>
              <dd>UR-Q · Request for quote</dd>
            </div>
            <div>
              <dt>Date of issue</dt>
              <dd className={s.typed}>{issued || " "}</dd>
            </div>
            <div>
              <dt>Reference</dt>
              <dd className={s.typed}>{reference || "Assigned on receipt"}</dd>
            </div>
          </dl>
          <div className={s.stampBox}>
            {!done && <span className={s.stampLabel}>Received stamp · office use</span>}
            {done && (
              <div className={s.stamp}>
                <ReceivedStamp date={issued} reference={reference} />
              </div>
            )}
          </div>
        </div>
      </div>

      <form ref={formRef} className={s.form} onSubmit={onSubmit} noValidate aria-describedby="form-note">
        <p id="form-note" className="visually-hidden">
          Boxes 01, 02 and 05 are required, plus an email or phone number.
        </p>

        <div className={`${s.box} ${s.fFrom}`} data-error={!!errors.from}>
          <label htmlFor="q-from" className={s.label}>
            <span className={s.num}>01</span> Moving from <span className={s.sub}>Place of receipt</span>
          </label>
          <input
            id="q-from"
            name="from"
            list="q-places"
            autoComplete="off"
            placeholder="City, country"
            value={fields.from}
            onChange={set("from")}
            readOnly={done}
            aria-invalid={!!errors.from}
            aria-describedby={describe("from")}
            className={s.input}
          />
          {errors.from && <p id="err-from" className={s.err}>{errors.from}</p>}
        </div>

        <div className={`${s.box} ${s.fTo}`} data-error={!!errors.to}>
          <label htmlFor="q-to" className={s.label}>
            <span className={s.num}>02</span> Moving to <span className={s.sub}>Place of delivery</span>
          </label>
          <input
            id="q-to"
            name="to"
            list="q-places"
            autoComplete="off"
            placeholder="City, country"
            value={fields.to}
            onChange={set("to")}
            readOnly={done}
            aria-invalid={!!errors.to}
            aria-describedby={describe("to")}
            className={s.input}
          />
          {errors.to && <p id="err-to" className={s.err}>{errors.to}</p>}
        </div>

        <datalist id="q-places">
          {places.map((p) => (
            <option key={p} value={p} />
          ))}
        </datalist>

        <div className={`${s.box} ${s.fMonth}`}>
          <label htmlFor="q-month" className={s.label}>
            <span className={s.num}>03</span> Move month
          </label>
          <select
            id="q-month"
            name="month"
            value={fields.month}
            onChange={set("month")}
            disabled={done}
            className={`${s.input} ${s.select}`}
          >
            <option value="">Not sure</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div className={`${s.box} ${s.fSize}`} role="radiogroup" aria-labelledby="q-size-label">
          <span id="q-size-label" className={s.label}>
            <span className={s.num}>04</span> Home size
          </span>
          <div className={s.ticks}>
            {homeSizes.map((h) => (
              <label key={h} className={s.tick}>
                <input
                  type="radio"
                  name="size"
                  value={h}
                  checked={fields.size === h}
                  onChange={set("size")}
                  disabled={done}
                />
                <span className={s.tickBox} aria-hidden="true" />
                {h}
              </label>
            ))}
          </div>
        </div>

        <div className={`${s.box} ${s.fName}`} data-error={!!errors.name}>
          <label htmlFor="q-name" className={s.label}>
            <span className={s.num}>05</span> Full name <span className={s.sub}>Shipper</span>
          </label>
          <input
            id="q-name"
            name="name"
            autoComplete="name"
            placeholder="As on your passport"
            value={fields.name}
            onChange={set("name")}
            readOnly={done}
            aria-invalid={!!errors.name}
            aria-describedby={describe("name")}
            className={s.input}
          />
          {errors.name && <p id="err-name" className={s.err}>{errors.name}</p>}
        </div>

        <div className={`${s.box} ${s.fEmail}`} data-error={!!(errors.email || errors.contact)}>
          <label htmlFor="q-email" className={s.label}>
            <span className={s.num}>06</span> Email
          </label>
          <input
            id="q-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="name@example.com"
            value={fields.email}
            onChange={set("email")}
            readOnly={done}
            aria-invalid={!!(errors.email || errors.contact)}
            aria-describedby={errors.email ? "err-email" : describe("contact")}
            className={s.input}
          />
          {errors.email && <p id="err-email" className={s.err}>{errors.email}</p>}
          {errors.contact && <p id="err-contact" className={s.err}>{errors.contact}</p>}
        </div>

        <div className={`${s.box} ${s.fPhone}`} data-error={!!(errors.phone || errors.contact)}>
          <label htmlFor="q-phone" className={s.label}>
            <span className={s.num}>07</span> Phone
          </label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+1 555 0100"
            value={fields.phone}
            onChange={set("phone")}
            readOnly={done}
            aria-invalid={!!(errors.phone || errors.contact)}
            aria-describedby={errors.phone ? "err-phone" : describe("contact")}
            className={s.input}
          />
          {errors.phone && <p id="err-phone" className={s.err}>{errors.phone}</p>}
        </div>

        <div className={`${s.actionBox} ${s.fAction}`} aria-live="polite">
          {done ? (
            <div className={s.doneNote}>
              <div className={s.stampInline}>
                <ReceivedStamp date={issued} reference={reference} />
              </div>
              <p>
                <strong>Request received.</strong> Your move manager will contact you with your free quote.
              </p>
              <button type="button" className={s.again} onClick={reset}>
                Start another request
              </button>
            </div>
          ) : (
            <button type="submit" className={s.submit} disabled={status === "sending"} aria-busy={status === "sending"}>
              <span>{status === "sending" ? "Sending your request…" : "Issue my free quote"}</span>
              <Icon name="arrow" size={26} />
            </button>
          )}
          {status === "failed" && (
            <p className={s.failed} role="alert">
              We couldn&apos;t send your request. Try again, or call{" "}
              <a href={`tel:${phones[0].tel}`}>{phones[0].number}</a>.
            </p>
          )}
        </div>
      </form>

      <dl className={s.proof} aria-label="Ratings and credentials">
        <div className={s.proofBox}>
          <dt className={s.label}>
            <span className={s.num}>08</span> Ratings
          </dt>
          {ratings.map((r) => (
            <dd key={r.source} className={s.proofValue}>
              {`${r.source} ${r.score}/5`}
            </dd>
          ))}
          <dd className={s.proofNote}>Trustpilot, based on 2,000+ reviews</dd>
        </div>
        <div className={s.proofBox}>
          <dt className={s.label}>
            <span className={s.num}>09</span> Established
          </dt>
          <dd className={s.proofValue}>1998</dd>
          <dd className={s.proofNote}>Corporate expatriates and diplomats first</dd>
        </div>
        <div className={s.proofBox}>
          <dt className={s.label}>
            <span className={s.num}>10</span> Own hubs
          </dt>
          <dd className={s.proofValue}>USA · India · UAE</dd>
          <dd className={s.proofNote}>11 locations across the three</dd>
        </div>
        <div className={s.proofBox}>
          <dt className={s.label}>
            <span className={s.num}>11</span> FMC licence
          </dt>
          <dd className={s.proofValue}>OTI NF025083</dd>
          <dd className={s.proofNote}>Licensed NVOCC for household goods</dd>
        </div>
      </dl>
    </section>
  );
}
