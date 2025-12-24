import Layout from "@/components/Layout";

const SystemicIntervention = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 bg-primary">
        <div className="container-custom section-padding">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-4 animate-fade-in">
            <span>Capabilities</span>
            <span>/</span>
            <span className="text-primary-foreground">Systemic Intervention</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Systemic Intervention and Strategic Investment
          </h1>
          
          <p className="text-primary-foreground/80 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Executing interventions to stabilise environments, mobilise capital and technology, and convert gaps into engines of prosperity.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl text-primary mb-8 animate-fade-in">
              Our Capabilities
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              ISII designs and executes systemic interventions that address structural challenges at their root. We mobilise capital, technology, and expertise to transform environments and create sustainable prosperity.
            </p>
            
            <p className="text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our strategic investment approach identifies opportunities where targeted capital deployment can catalyse broader transformation, converting gaps in markets, infrastructure, and institutions into engines of growth and stability.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SystemicIntervention;
