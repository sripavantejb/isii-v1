import Layout from "@/components/Layout";
import PersonCard from "@/components/PersonCard";

const About = () => {
  const people = [
    {
      category: "Economic & Climate Transition",
      name: "Phoebe Koundouri",
      title: "Prof School of Economics & Director Research, Athens University; Director, AE4RIA",
      description: "Direct the economic, environmental and climate strategy for the transition",
    },
    {
      category: "Peace and Social Transition",
      name: "Garry Jacobs",
      title: "President, CEO, World Academy of Art & Science; Chairman, World University Consortium",
      description: "Direct the key aspects of the social transition plan for delivering human security for all",
    },
    {
      category: "Global Transition",
      name: "Ketan Patel",
      title: "Chair, Force for Good; CEO, Greater Pacific Capital; Former Head, Strategic Group, Goldman Sachs",
      description: "Direct delivery and management of the strategy and blueprint for the global transition",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: '#f2f5f7' }}>
        <div className="container-custom section-padding">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2 animate-fade-in">
            About Us
          </h1>
          <p className="font-serif text-base text-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Our Mission
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="pt-16 pb-24 bg-background">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8 animate-fade-in">
            Mission Statement
          </h2>
          
          <p className="font-serif text-base text-foreground leading-relaxed max-w-4xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            The Institute for Strategic Intelligence and Intervention (ISII) exists to understand and shape the system-level transitions, major events, and strategic turning points affecting nations, regions, and global structures. Its mission is to generate the strategic intelligence required for high-stakes decision-making, and to design and execute interventions that stabilise environments, reposition sovereigns, mobilise capital and technology, and enable societies to transition securely and prosperously into the Information Era.
          </p>
        </div>
      </section>

      {/* People Section */}
      <section className="py-24 bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 animate-fade-in">
            People
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {people.map((person, index) => (
              <div key={person.name} className="flex" style={{ animationDelay: `${index * 0.1}s` }}>
                <PersonCard {...person} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
