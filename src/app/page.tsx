import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { FrameStory } from "@/components/sections/FrameStory";
import Hero from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { PromiseBar } from "@/components/sections/PromiseBar";
import { SampleCta } from "@/components/sections/SampleCta";
import Services from "@/components/sections/Services";
import Transformation from "@/components/sections/Transformation";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PromiseBar />
        <Transformation />
        <Services />
        <FrameStory />
        <Portfolio />
        <Process />
        <About />
        <Industries />
        <SampleCta />
      </main>
      <Footer />
    </>
  );
}
