import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import MandateCard from "@/components/MandateCard";

// Cloudinary URLs for images
const heroImage = "https://res.cloudinary.com/dqataciy5/image/upload/v1767362733/Frame_1707483135_mis0te.png";
const heroImageMobile = "https://res.cloudinary.com/dqataciy5/image/upload/v1767364371/Frame_1707483125_2_aosqli.png";
const mandateImage1 = "https://res.cloudinary.com/dqataciy5/image/upload/v1767362594/Rectangle_3463579_zpi2mc.png";
const mandateImage2 = "https://res.cloudinary.com/dqataciy5/image/upload/v1767362661/Rectangle_3463579_1_d7dslx.png";
const mandateImage3 = "https://res.cloudinary.com/dqataciy5/image/upload/v1767362666/Rectangle_3463579_2_pabgfw.png";

const StrategicCounsel = () => {
  const mandates = [
    {
      image: mandateImage1,
      title: (
        <>
          <span className="font-bold">Growth and prosperity</span>, and capital allocation for global themes
        </>
      ),
      description: "",
      buttonLink: "#",
    },
    {
      image: mandateImage2,
      title: (
        <>
          <span className="font-bold">Sovereignty, AI, strategic technologies,</span> and strategic international coalitions
        </>
      ),
      description: "",
      buttonLink: "#",
    },
    {
      image: mandateImage3,
      title: (
        <>
          <span className="font-bold">Strategy and mobilisation</span> for the transition to the Information Era
        </>
      ),
      description: "",
      buttonLink: "#",
    },
  ];

  const problems = [
    "Transition the Nation to the Information Era (The National Transition Project)",
    "Build Engines of Enterprise, Growth and Share (The Prosperity Initiative)",
    "Guard and Protect Sovereignty Across All Domains (The National Sovereignty Security Programme)",
    "Create a Global Investment Boom by Turning Needs Into Opportunities via Systems of Enterprise, Growth and Shared Prosperity (The World Investment Plan)",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Mobile Image - shown only on screens smaller than md (768px) */}
        <img 
          src={heroImageMobile}
          alt="Strategic Counsel Banner"
          className="block md:hidden w-full h-auto"
          style={{ maxHeight: '384px', objectFit: 'contain', objectPosition: 'center' }}
        />
        {/* Desktop Image - shown only on md screens and larger (768px+) */}
        <img 
          src={heroImage}
          alt="Strategic Counsel Banner"
          className="hidden md:block w-full h-auto"
          style={{ maxHeight: '384px', objectFit: 'contain', objectPosition: 'center' }}
        />
      </section>

      {/* Targeted Strategic Mandates Section */}
      <section className="pt-10 md:pt-11 pb-8" style={{ backgroundColor: '#F3F5F7' }}>
        <div className="container-custom section-padding">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary mb-4 md:mb-8 font-bold">
            Targeted Strategic Mandates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {mandates.map((mandate, index) => (
              <MandateCard key={index} {...mandate} />
            ))}
          </div>
        </div>
      </section>

      {/* Intractable Problems Section */}
      <section className="pt-0 pb-6 md:pb-12" style={{ backgroundColor: '#F3F5F7' }}>
        <div className="container-custom section-padding">
          <div className="border-t border-b border-border py-4 md:py-6">
            <p className="font-sans text-base md:text-lg text-primary leading-relaxed font-bold">
              Intractable Problems
            </p>
          </div>
          {problems.map((problem, index) => (
            <div key={index} className={`border-t ${index === problems.length - 1 ? '' : 'border-b'} border-border py-4 md:py-6`}>
              <p className="font-sans text-base md:text-lg text-primary leading-relaxed font-bold">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default StrategicCounsel;

