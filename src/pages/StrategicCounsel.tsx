import Layout from "@/components/Layout";

const StrategicCounsel = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 bg-primary">
        <div className="container-custom section-padding">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-4 animate-fade-in">
            <span>Capabilities</span>
            <span>/</span>
            <span className="text-primary-foreground">Strategic Counsel</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Strategic Counsel
          </h1>
          
          <p className="text-primary-foreground/80 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Supporting governments, blocs and institutions as they navigate structural change.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl text-primary mb-8 animate-fade-in">
              Our Mandates
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              ISII provides strategic counsel to governments, regional blocs, and major institutions facing complex transitions. Our advisory practice is built on deep expertise in geopolitics, economics, technology, and societal transformation.
            </p>
            
            <p className="text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We work with decision-makers at the highest levels to navigate uncertainty, identify strategic opportunities, and design pathways through periods of profound structural change.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StrategicCounsel;
