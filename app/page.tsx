import { About } from "./components/about";
import { Cta } from "./components/cta";
import { Faq } from "./components/faq";
import { Hero } from "./components/hero";
import { LogoMarquee } from "./components/logo-marquee";
import { Process } from "./components/process";
import { Results } from "./components/results";
import { Services } from "./components/services";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";
import { Suburbs } from "./components/suburbs";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <LogoMarquee />
        <About />
        <Services />
        <Process />
        <Results />
        <Testimonials />
        <Cta />
        <Suburbs />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
