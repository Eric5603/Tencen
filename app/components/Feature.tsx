import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg width="40px" height="40px" fill="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.26,6.86l-3.39-2a.75.75,0,1,1,.78-1.28l3.36,2Z" fill="#aecbfa" fillRule="evenodd" />
          <path d="M11.52,10.31,4.69,6.36a.75.75,0,0,1,.75-1.3l6.08,3.52Z" fill="#aecbfa" fillRule="evenodd" />
          <path d="M19.6,5.33a.76.76,0,0,0-1-.27L12.75,8.4V6.85l3.39-2a.74.74,0,0,0,.25-1,.75.75,0,0,0-1-.25L11.65,5.78a.79.79,0,0,0-.39.68V21a.75.75,0,1,0,1.49,0V10.14l6.57-3.78A.76.76,0,0,0,19.6,5.33Z" fill="#669df6" fillRule="evenodd" />
          <circle cx="12.01" cy="3.09" r="0.84" fill="#669df6" />
        </svg>
      ),
      title: 'AI Development',
      desc: 'Create intelligent agents that automate processes, engage customers, and drive personalized experiences.',
    },
    {
      icon: (
        <svg width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="blue" fill="none">
            <circle cx="34.52" cy="11.43" r="5.82" />
            <circle cx="53.63" cy="31.6" r="5.82" />
            <circle cx="34.52" cy="50.57" r="5.82" />
            <circle cx="15.16" cy="42.03" r="5.82" />
            <circle cx="15.16" cy="19.27" r="5.82" />
            <circle cx="34.51" cy="29.27" r="4.7" />
            <line x1="20.17" y1="16.3" x2="28.9" y2="12.93" />
            <line x1="38.6" y1="15.59" x2="49.48" y2="27.52" />
            <line x1="50.07" y1="36.2" x2="38.67" y2="46.49" />
            <line x1="18.36" y1="24.13" x2="30.91" y2="46.01" />
            <line x1="20.31" y1="44.74" x2="28.7" y2="48.63" />
            <line x1="17.34" y1="36.63" x2="31.37" y2="16.32" />
            <line x1="20.52" y1="21.55" x2="30.34" y2="27.1" />
            <line x1="39.22" y1="29.8" x2="47.81" y2="30.45" />
            <line x1="34.51" y1="33.98" x2="34.52" y2="44.74" />
      </svg>

      ),
      title: 'Web & SaaS Solutions',
      desc: 'Build and scale SaaS applications with ease. Our solutions grow with your business.',
    },
    {
      icon: (
        <svg width="40px" height="40px" fill="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 13.293V3h-8V1H8v2H3v4h1V4h4v2h5V4h7v9.293L17.707 11l-.707.707 3.5 3.5 3.5-3.5-.707-.707zM12 5H9V2h3zm8 15h-3v-2h-5v2H4v-9.293L6.293 13 7 12.293l-3.5-3.5-3.5 3.5.707.707L3 10.707V21h9v2h5v-2h4v-4h-1zm-4 2h-3v-3h3z" />
        </svg>
      ),
      title: 'Automation',
      desc: 'Automate your operations with our AI-powered platform. Save time and money, and focus on growth.',
    },
    {
      icon: (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="blue"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" y1="16" x2="8" y2="16" />
            <line x1="16" y1="16" x2="16" y2="16" />
        </svg>
      ),
      title: 'Chatbot Development',
      desc: 'Enhance your website or app with chatbots that engage users and streamline customer support.',
    },
  ];

  return (
    <section className="py-10">
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <div key={index} className="max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 flex items-center gap-4">
              <div className="text-blue-500">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-normal text-gray-600">{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
