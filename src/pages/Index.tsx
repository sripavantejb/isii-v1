import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CapabilityCard from "@/components/CapabilityCard";
import { Brain, Shield, TrendingUp } from "lucide-react";
import whiteHouseHero from "@/assets/white-house-hero.jpg";

const Index = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "Pivotal Thinking",
      description: "Generating strategic intelligence to understand transitions, shocks, inflection points across geopolitics, technology, economics, climate and society.",
      buttonText: "ALL PIVOTAL THINKING",
      buttonLink: "/capabilities/pivotal-thinking",
    },
    {
      icon: Shield,
      title: "Strategic Counsel",
      description: "Supporting governments, blocs and institutions as they navigate structural change.",
      buttonText: "SEE OUR MANDATES",
      buttonLink: "/capabilities/strategic-counsel",
    },
    {
      icon: TrendingUp,
      title: "Systemic Intervention and Strategic Investment",
      description: "Executing interventions to stabilise environments, mobilise capital and technology, and convert gaps into engines of prosperity.",
      buttonText: "EXPLORE CAPABILITIES",
      buttonLink: "/capabilities/systemic-intervention",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${whiteHouseHero})` }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(27, 49, 91, 0.7), rgba(27, 49, 91, 0.9))'
            }}
          />
        </div>
        
        <div className="relative z-10 container-custom section-padding py-24">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl text-accent mb-4 animate-fade-in">
              ISII
            </h1>
            <h2 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Institute for Strategic Intelligence and Intervention
            </h2>
            <p className="text-primary-foreground/90 leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              The Institute for Strategic Intelligence and Intervention (ISII) exists to understand and shape the system-level transitions, major events, and strategic turning points affecting nations, regions, and global structures. Its mission is to generate the strategic intelligence required for high-stakes decision-making, and to design and execute interventions that stabilise environments, reposition sovereigns, mobilise capital and technology, and enable societies to transition securely and prosperously into the Information Era.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">About us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="relative py-24 bg-navy-dark">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${whiteHouseHero})` }}
        />
        <div className="relative z-10 container-custom section-padding">
          <span className="inline-block bg-primary px-4 py-1 text-xs text-primary-foreground uppercase tracking-wider mb-6">
            Our Latest Pivotal Thinking
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4 max-w-xl">
            America the Merchant Power, The National Security Strategy 2025
          </h2>
          <Button variant="outline-light" asChild>
            <Link to="/capabilities/pivotal-thinking">Read More</Link>
          </Button>
        </div>
        
        {/* Scrolling ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary/50 py-3 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            <span className="text-primary-foreground/60 text-sm mx-8">Signs of the Times</span>
            <span className="text-primary-foreground/80 text-sm italic mx-8">
              America the Merchant Power, The National Security Strategy 2025
            </span>
            <span className="text-primary-foreground/60 text-sm mx-8">Signs of the Times</span>
            <span className="text-primary-foreground/80 text-sm italic mx-8">
              America the Merchant Power, The National Security Strategy 2025
            </span>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-gray-light">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-16 font-bold">
            Our Capabilities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.title} {...capability} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
