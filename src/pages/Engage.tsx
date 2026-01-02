import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import EngagementCard from "@/components/EngagementCard";

const Engage = () => {
  const engagementAreas = [
    {
      title: "Strategic Intelligence",
      description: "Access pivotal thinking and analysis on global transitions, geopolitics, and emerging trends.",
    },
    {
      title: "Advisory Services",
      description: "Strategic counsel for governments, institutions, and organisations navigating systemic change.",
    },
    {
      title: "Investment Partnerships",
      description: "Collaborative opportunities in systemic interventions and strategic investments.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: '#f4f4f6' }}>
        <div className="container-custom section-padding">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in" style={{ willChange: "opacity, transform" }}>
            Engage
          </h1>
          <p className="text-muted-foreground animate-fade-in" style={{ willChange: "opacity, transform" }}>
            Connect with ISII to explore strategic partnerships and collaboration opportunities.
          </p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-24 bg-background">
        <div className="container-custom section-padding text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6 animate-fade-in" style={{ willChange: "opacity, transform" }}>
            Get in Touch
          </h2>
          
          <p className="text-muted-foreground mb-8 animate-fade-in" style={{ willChange: "opacity, transform" }}>
            Whether you represent a sovereign entity, institution, or organisation navigating complex transitions, we welcome the opportunity to explore how ISII can support your strategic objectives.
          </p>
          
          <div className="animate-fade-in" style={{ willChange: "opacity, transform" }}>
            <Button variant="default" size="lg" asChild>
              <Link to="mailto:test@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Areas of Engagement */}
      <section className="py-24 bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-center mb-12 animate-fade-in" style={{ willChange: "opacity, transform" }}>
            Areas of Engagement
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {engagementAreas.map((area) => (
              <div key={area.title}>
                <EngagementCard {...area} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Engage;
