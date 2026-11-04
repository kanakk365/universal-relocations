"use client";

import { useState } from "react";

import { reviews } from "@/lib/content";

import { ArrowUpRight, Quote, Star } from "./icons";
import { Reveal } from "./motion";
import s from "./Testimonial.module.css";

const GOOGLE_REVIEWS = "https://search.google.com/local/reviews?placeid=ChIJ232HC1gfDTkRFGIkfTgGTus";

const Stars = () => (
  <span className={s.stars} aria-hidden="true">
    {[0, 1, 2, 3, 4].map((k) => (
      <Star key={k} size={15} />
    ))}
  </span>
);

export function Testimonial() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const initials = (n: string) =>
    n
      .split(" ")
      .map((p) => p[0])
      .join("");

  return (
    <section id="reviews" className={`section ${s.section}`} aria-labelledby="reviews-title">
      <div className="shell">
        <Reveal className={s.wrap}>
          <h2 id="reviews-title" className="visually-hidden">
            What people say after the boxes are unpacked
          </h2>

          <figure className={s.quote}>
            <Quote className={s.mark} size={48} />
            {/* Every review sits in the same grid cell, so the block always has the
                height of the longest one and switching never moves the page. */}
            <div className={s.quoteBody} aria-live="polite">
              {reviews.map((q, k) => (
                <blockquote key={q.name} data-on={k === i} aria-hidden={k !== i}>
                  <p>{q.quote}</p>
                </blockquote>
              ))}
            </div>
            <figcaption className={s.people}>
              <span className="visually-hidden">Review by {r.name}. </span>
              <div role="group" aria-label="Choose a review" className={s.tabs}>
                {reviews.map((p, k) => (
                  <button
                    key={p.name}
                    type="button"
                    aria-pressed={k === i}
                    data-on={k === i}
                    className={s.person}
                    onClick={() => setI(k)}
                  >
                    <span className={s.avatar} aria-hidden="true">
                      {initials(p.name)}
                    </span>
                    <span className={s.who}>
                      <b>{p.name}</b>
                      <span>Google review</span>
                    </span>
                  </button>
                ))}
              </div>
            </figcaption>
          </figure>

          <div className={s.bar}>
            <div className={s.rating}>
              <span className={s.score}>4.5</span>
              <span className={s.ratingText}>
                <Stars />
                <span>Trustpilot · 2,000+ reviews</span>
              </span>
            </div>
            <div className={s.rating}>
              <span className={s.score}>4.4</span>
              <span className={s.ratingText}>
                <Stars />
                <span>Google reviews</span>
              </span>
            </div>
            <a className={s.more} href={GOOGLE_REVIEWS}>
              Read more reviews
              <span className={s.moreChip} aria-hidden="true">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
