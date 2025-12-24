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
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4 animate-fade-in">
            Engage
          </h1>
          <p className="text-muted-foreground max-w-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Connect with ISII to explore strategic partnerships and collaboration opportunities.
          </p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-24 bg-background">
        <div className="container-custom section-padding text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-primary mb-6 animate-fade-in">
            Get in Touch
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Whether you represent a sovereign entity, institution, or organisation navigating complex transitions, we welcome the opportunity to explore how ISII can support your strategic objectives.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button variant="default" size="lg" asChild>
              <Link to="mailto:contact@isii.org" className="flex items-center gap-2">
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
          <h2 className="font-serif text-2xl md:text-3xl text-primary text-center mb-12 animate-fade-in">
            Areas of Engagement
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {engagementAreas.map((area, index) => (
              <div key={area.title} style={{ animationDelay: `${index * 0.1}s` }}>
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
