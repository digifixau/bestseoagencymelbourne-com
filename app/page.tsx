import { About } from "./components/about";
import { BlogPreview } from "./components/blog-preview";
import { Cta } from "./components/cta";
import { Faq } from "./components/faq";
import { Hero } from "./components/hero";
import { LogoMarquee } from "./components/logo-marquee";
import { Process } from "./components/process";
import { Results } from "./components/results";
import { Services } from "./components/services";
import { Suburbs } from "./components/suburbs";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <About />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <BlogPreview />
      <Cta />
      <Suburbs />
      <Faq />
    </>
  );
}
