import { StitchDivider } from "@/components/cinematic/Ambient";
import { CinematicCta } from "@/components/cinematic/CinematicCta";
import { Coverflow } from "@/components/cinematic/Coverflow";
import { TestimonialBand } from "@/components/cinematic/KineticMarquee";
import { StatStrip } from "@/components/cinematic/Odometer";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { CheapVsPro } from "@/components/sections/CheapVsPro";
import { DigitizingCompare } from "@/components/sections/DigitizingCompare";
import { FrameStory } from "@/components/sections/FrameStory";
import HeroPoster from "@/components/sections/HeroPoster";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { PromiseBar } from "@/components/sections/PromiseBar";
import Services from "@/components/sections/Services";
import Transformation from "@/components/sections/Transformation";
import { ArrowUpRight } from "@/components/ui/Icons";
import { accountPages, links, portfolio } from "@/lib/content";

const homeStats = [
  { value: "2017", label: "Serving since" },
  { value: "400+", label: "Customers served" },
  { value: "50,000+", label: "Designs delivered" },
  { value: "4–6h", label: "Standard turnaround" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroPoster />
        <PromiseBar />
        <Transformation />
        <DigitizingCompare />
        <CheapVsPro />
        <Services />
        <FrameStory />
        <Coverflow
          id="portfolio"
          eyebrow="Our work"
          word="Portfolio"
          script="Real results."
          items={portfolio.map((p) => ({ src: p.image, alt: p.alt, caption: p.caption }))}
          aside={
            <a href={links.portfolio} className="btn btn-outline btn-sm mr-2 hidden sm:inline-flex">
              Full Portfolio <ArrowUpRight className="size-3.5" />
            </a>
          }
        />
        <Process />
        <StatStrip stats={homeStats} />
        <About />
        <Industries />
        <TestimonialBand />
        <StitchDivider />
        <CinematicCta
          id="sample"
          word="Ready?"
          script="Let's stitch."
          text="Your artwork, our next great stitch. Send one design, tell us what you're making and judge the file on your own machine."
          primary={{ label: "Request Your Free Sample", href: links.sampleMail }}
          secondary={{ label: "Order Now", href: accountPages.order }}
        />
      </main>
      <Footer />
    </>
  );
}
