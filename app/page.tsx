import { About } from "./components/about";
import { Cta } from "./components/cta";
import { Faq } from "./components/faq";
import { Hero } from "./components/hero";
import { Process } from "./components/process";
import { ProofBar } from "./components/proof-bar";
import { Results } from "./components/results";
import { Services } from "./components/services";
import { Suburbs } from "./components/suburbs";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Services />
      <About />
      <Results />
      <Process />
      <Testimonials />
      <Faq />
      <Cta />
      <Suburbs />
    </>
  );
}
