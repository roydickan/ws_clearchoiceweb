import {
  Hero,
  StatsBar,
  ServicesGrid,
  OpportunitySection,
  WhyChooseUs,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero
        headline="Don't Watch the Manufacturing Boom Pass You By"
        subheadline="North Carolina's $60+ billion manufacturing renaissance is creating once-in-a-generation opportunities. Toyota, Wolfspeed, and other industry giants are actively seeking qualified suppliers—right now. The question isn't whether you can afford to transform. It's whether you can afford not to."
        primaryCTA={{ text: "Claim Your Free Assessment", href: "/contact" }}
        secondaryCTA={{ text: "See Our Results", href: "#results" }}
      />
      <StatsBar />
      <OpportunitySection />
      <ServicesGrid />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
