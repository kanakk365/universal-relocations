import { Footer } from "@/components/Footer";
import { Hubs } from "@/components/Hubs";
import { Masthead } from "@/components/Masthead";
import { QuoteSheet } from "@/components/QuoteSheet";
import { Close, Declarations, Endorsements, Goods, StartOptions } from "@/components/Sections";
import { Stages } from "@/components/Stages";
import s from "./page.module.css";

export default function Home() {
  return (
    <>
      <a href="#quote" className="skip-link">
        Skip to the quote form
      </a>
      <Masthead />
      <main id="top" className={s.sheet}>
        <QuoteSheet />
        <Stages />
        <Goods />
        <StartOptions />
        <Hubs />
        <Endorsements />
        <Declarations />
        <Close />
        <div className={s.formFoot} aria-hidden="true">
          <span>Form UR-Q · Request for quote · Rev. 2026</span>
          <span>Original · Page 1 of 1</span>
        </div>
      </main>
      <Footer />
    </>
  );
}
