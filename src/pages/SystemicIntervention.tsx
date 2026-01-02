import Layout from "@/components/Layout";

const heroBackground = "https://res.cloudinary.com/dqataciy5/image/upload/v1767363392/Frame_1707483125_1_hsfyqs.png";
const heroBackgroundMobile = "https://res.cloudinary.com/dqataciy5/image/upload/v1767368695/Frame_1707483148_fddy7f.png";

// Card data array
const interventionCards = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dqataciy5/image/upload/v1767363176/Rectangle_3463579_3_ezsfgj.png",
    alt: "Mass Financial Inclusion",
    heading: "Mass financial (inclusion) services, focused on the financial systems layer, internationalisation of mass inclusion",
    description: "A.I. enabled growth (development) bank through the roll-up of NBFCs to build a global financial institution through targeted acquisitions and partnerships beginning in India to roll out of mass financial inclusion platforms and solutions",
    path: "Path: India → Global South → Global North"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dqataciy5/image/upload/v1767363176/Rectangle_3463579_3_ezsfgj.png",
    alt: "Digital Technologies for Mass Liberation",
    heading: "Digital technologies for mass liberation, focused on the cognitive systems layer for experiences, education, entertainment",
    description: "Delivering mass education, experiences and enlightenment to liberate minds and raise human consciousness, the enlightenment of the 21st century combining eastern and western definitions",
    path: "Path: Narrow → Broad → Open"
  }
];

const SystemicIntervention = () => {
  return (
    <Layout>
      {/* Hero Section - Small Banner */}
      <section className="relative h-[120px] md:h-[220px] overflow-hidden">
        {/* Mobile Banner Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{ backgroundImage: `url(${heroBackgroundMobile})` }}
        />
        {/* Desktop Banner Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#f4f6f7' }}>
        <div className="container-custom section-padding">
          {/* Prioritized Label - Centered above cards */}
          <div className="max-w-[1240px] mx-auto mt-2 md:mt-3 mb-10 md:mb-14 flex justify-start">
            <span 
              className="inline-block px-5 py-2 text-sm font-medium rounded-full shadow-sm"
              style={{ 
                backgroundColor: '#FFFFFF',
                color: '#7a7a7a'
              }}
            >
              Prioritized
            </span>
          </div>

          {/* Cards Container */}
          <div className="max-w-[1240px] mx-auto space-y-6 md:space-y-8">
            {interventionCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg p-6 md:p-8 border border-gray-200"
                style={{
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Image - Left side */}
                  <div className="w-full md:w-[38%] flex-shrink-0">
                    <img 
                      src={card.image} 
                      alt={card.alt}
                      className="w-full rounded-lg"
                      style={{ aspectRatio: '16 / 9', objectFit: 'cover', maxHeight: '180px' }}
                    />
                  </div>
                  
                  {/* Content - Right side */}
                  <div className="w-full md:w-[62%] flex-1">
                    <h2 
                      className="font-serif text-xl md:text-2xl lg:text-2xl font-bold mb-3 leading-tight"
                      style={{ color: '#1b315b' }}
                    >
                      {card.heading}
                    </h2>
                    <p 
                      className="leading-relaxed mb-3 text-base md:text-lg"
                      style={{ color: '#4a4a4a', fontWeight: 400 }}
                    >
                      {card.description}
                    </p>
                    <p 
                      className="text-sm md:text-sm"
                      style={{ color: '#4a4a4a', fontWeight: 500 }}
                    >
                      {card.path}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SystemicIntervention;

