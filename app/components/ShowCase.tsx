import React, { useMemo } from 'react';
import Image from 'next/image';
interface ShowcaseSectionProps {
  imageSrc: string;
  title: string;
  features: string[];
}

const CheckIcon: React.FC = () => (
  <svg 
    className="shrink-0 size-3.5" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const FeatureListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-x-3">
    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
      <CheckIcon />
    </span>
    <div className="grow">
      <span className="text-sm sm:text-base text-gray-500">{children}</span>
    </div>
  </li>
);

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ 
  imageSrc, 
  title,
  features
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-full max-w-xs mx-auto">
      <img 
        className="object-cover object-center w-full h-48" 
        src={imageSrc} 
        alt={title} 
      />
      <div className="p-4">
        <h2 className="title-font sm:text-xl text-lg mb-2 font-bold text-gray-900">
          {title}
        </h2>
        
        <ul className="space-y-2 sm:space-y-4 mb-4">
          {features.map((feature, index) => (
            <FeatureListItem key={index}>
              {feature}
            </FeatureListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Showcase: React.FC = () => {
  const sections: ShowcaseSectionProps[] = useMemo(() => [
    {
      imageSrc: "/images/Service-Image/Ai-developer.jpg", 
      title: "AI Development",
      features: [
        "Custom AI model development",
        "Machine learning solutions",
        "Predictive analytics integration"
      ]
    },
    {
      imageSrc: "/images/Service-Image/Web&SaaS-Solutions.jpg", 
      title: "Web & SaaS Solutions",
      features: [
        "Scalable web applications",
        "Cloud-based SaaS platforms",
        "Responsive design & UX"
      ]
    },
    {
      imageSrc: "/images/Service-Image/Advanced-Automation.jpg", 
      title: "Automation Solutions",
      features: [
        "Process workflow optimization",
        "Robotic process automation",
        "Enterprise integration"
      ]
    },
    {
      imageSrc: "/images/Service-Image/chatbot-development.jpg", 
      title: "Chatbot Development",
      features: [
        "AI-powered conversational interfaces",
        "Multi-platform support",
        "Natural language processing"
      ]
    }
  ], []);

  return (
    <section className="container mx-auto px-5 py-24">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-gray-800">
          Our Technology Services
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Innovative solutions designed to transform your business through cutting-edge technology
        </p>
      </header>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sections.map((section, index) => (
          <ShowcaseSection 
            key={index} 
            imageSrc={section.imageSrc} 
            title={section.title}
            features={section.features}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Reach out to us!
        </h2>
        <p className="text-gray-600 mb-6 inline-block">
          Have a project in mind or need more information? 
          <a 
            href="/contact" 
            className="ml-2 text-indigo-600 hover:text-indigo-800 hover:underline transition duration-300"
          >
            Contact Us 
          </a>
        </p>
      </div>
    </section>
  );
};

export default React.memo(Showcase);
