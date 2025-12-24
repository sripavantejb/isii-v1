import Layout from "@/components/Layout";
import PersonCard from "@/components/PersonCard";

const About = () => {
  const people = [
    {
      category: "Economic & Climate Transition",
      name: "Phoebe Koundouri",
      title: "Prof School of Economics & Director Research, Athens University; Director, AE4RIA",
      description: "Direct the economic, environmental and climate strategy for the transition",
      image: "https://res.cloudinary.com/dqataciy5/image/upload/v1766565203/unnamed_nnjx6n.png",
      drawingOn: [
        "SDSN network of 1,700 members in 144 countries",
        "200 multi-disciplinary sustainability scholars"
      ],
    },
    {
      category: "Peace and Social Transition",
      name: "Garry Jacobs",
      title: "President, CEO, World Academy of Art & Science; Chairman, World University Consortium",
      description: "Direct the key aspects of the social transition plan for delivering human security for all",
      drawingOn: [
        "800 leading scientists and scholars",
        "5 key programmes of peaceful social change"
      ],
    },
    {
      category: "Global Transition Architecture",
      name: "Ketan Patel",
      title: "Chair, Force for Good; CEO, Greater Pacific Capital; Former Head, Strategic Group, Goldman Sachs",
      description: "Direct delivery and management of the strategy and blueprint for the global transition",
      image: "https://res.cloudinary.com/dqataciy5/image/upload/v1766565195/unnamed_1_ih4miy.png",
      drawingOn: [
        "100 leading financial institutions strategies",
        "125 leading technology company strategies",
        "International network in key geographies"
      ],
    },
    {
      category: "Media & Technology Transition",
      name: "Jon Miller",
      title: "CEO of Integrated Media, Former Chairman and CEO of AOL; NewsCorp Online Media Group",
      description: "Direct the media strategy for mass population mobilisation for the transition",
      image: "https://res.cloudinary.com/dqataciy5/image/upload/v1766565190/unnamed_2_jkokbt.png",
      drawingOn: [
        "Major mass mobilisation platforms",
        "Leading new media platforms",
        "Leading AI companies"
      ],
    },
    {
      category: "Tech Security Transition",
      name: "Glenn Gaffney",
      title: "Former Director, Science and Technology, CIA; EVP, IQT; Founder NobleReach",
      description: "Direct the international science & technology strategy and roll-out plan for the transition",
      image: "https://res.cloudinary.com/dqataciy5/image/upload/v1766565187/unnamed_3_vjxsqa.png",
      drawingOn: [
        "Major US science and technology labs and experts",
        "International network of science and tech expertise"
      ],
    },
    {
      category: "Development Transition",
      name: "Shaurya Doval",
      title: "Founder India Foundation, Zeus Capital, Morgan Stanley, GE",
      description: "Direct the development agenda for the rise of Global South and lower income populations",
      image: "https://res.cloudinary.com/dqataciy5/image/upload/v1766565185/unnamed_lwetam.jpg",
      drawingOn: [
        "Development and social economics work",
        "Asia and Middle East network"
      ],
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
