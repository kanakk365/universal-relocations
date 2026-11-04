import { Cta } from "@/components/home/Cta";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import { Hubs } from "@/components/home/Hubs";
import { Lifecycle } from "@/components/home/Lifecycle";
import { Nav } from "@/components/home/Nav";
import { Press } from "@/components/home/Press";
import { Services } from "@/components/home/Services";
import { Testimonial } from "@/components/home/Testimonial";
import { Why } from "@/components/home/Why";

export default function Home() {
  return (
    <>
      <a href="#quote" className="skip-link">
        Skip to the quote form
      </a>
      <Nav />
      <main id="top">
        <Hero />
        <Press />
        <Lifecycle />
        <Testimonial />
        <Services />
        <Hubs />
        <Why />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
