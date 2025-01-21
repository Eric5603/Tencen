import React, { FC } from 'react';

// Type definition for Feature
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// SVG Icons as separate components for better modularity
const AIIcon: FC = () => (
  <svg width="40px" height="40px" fill="blue" viewBox="0 0 24 24">
    <path d="M11.26,6.86l-3.39-2a.75.75,0,1,1,.78-1.28l3.36,2Z" fill="#aecbfa" fillRule="evenodd" />
    <path d="M11.52,10.31,4.69,6.36a.75.75,0,0,1,.75-1.3l6.08,3.52Z" fill="#aecbfa" fillRule="evenodd" />
    <path d="M19.6,5.33a.76.76,0,0,0-1-.27L12.75,8.4V6.85l3.39-2a.74.74,0,0,0,.25-1,.75.75,0,0,0-1-.25L11.65,5.78a.79.79,0,0,0-.39.68V21a.75.75,0,1,0,1.49,0V10.14l6.57-3.78A.76.76,0,0,0,19.6,5.33Z" fill="#669df6" fillRule="evenodd" />
    <circle cx="12.01" cy="3.09" r="0.84" fill="#669df6" />
  </svg>
);

const WebIcon: FC = () => (
  <svg width="40px" height="40px" viewBox="0 0 64 64" strokeWidth="3" stroke="blue" fill="none">
    {/* Existing web icon SVG paths */}
  </svg>
);

const AutomationIcon: FC = () => (
  <svg width="40px" height="40px" fill="blue" viewBox="0 0 24 24">
    <path d="M21 13.293V3h-8V1H8v2H3v4h1V4h4v2h5V4h7v9.293L17.707 11l-.707.707 3.5 3.5 3.5-3.5-.707-.707zM12 5H9V2h3zm8 15h-3v-2h-5v2H4v-9.293L6.293 13 7 12.293l-3.5-3.5-3.5 3.5.707.707L3 10.707V21h9v2h5v-2h4v-4h-1zm-4 2h-3v-3h3z" />
  </svg>
);

const ChatbotIcon: FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    fill="none"
    stroke="blue"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Existing chatbot icon SVG paths */}
  </svg>
);

const Features: FC = () => {
  // Centralized features configuration
  const FEATURES: Feature[] = [
    {
      icon: <AIIcon />,
      title: 'AI Development',
      description: 'Create intelligent agents that automate processes, engage customers, and drive personalized experiences.',
    },
    {
      icon: <WebIcon />,
      title: 'Web & SaaS Solutions',
      description: 'Build and scale SaaS applications with ease. Our solutions grow with your business.',
    },
    {
      icon: <AutomationIcon />,
      title: 'Automation',
      description: 'Automate your operations with our AI-powered platform. Save time and money, and focus on growth.',
    },
    {
      icon: <ChatbotIcon />,
      title: 'Chatbot Development',
      description: 'Enhance your website or app with chatbots that engage users and streamline customer support.',
    }
  ];

  return (
    <section 
      className="py-16 bg-gray-50" 
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="features-heading" 
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Transformative Technology Solutions
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
              data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex justify-center mb-4 text-blue-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
