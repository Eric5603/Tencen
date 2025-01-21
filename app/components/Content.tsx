import { FC, ReactNode } from "react";

type Feature = {
  icon: ReactNode;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.035-.259a3.375 3.375 0 002.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
    title: "Advanced AI Solutions",
    desc: "Cutting-edge machine learning and deep learning models tailored to solve complex business challenges."
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.193-2.717.379-5.548.576-8.378.576s-5.661-.197-8.378-.576c-1.085-.157-1.872-1.1-1.872-2.193v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.202-7.64-.572.269-.355.67-.57 1.14-.57h6.114a3 3 0 013 3v1.146z"
        />
      </svg>
    ),
    title: "Custom AI Consulting",
    desc: "Strategic AI implementation and advisory services to transform your business processes."
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 4.756 10.25 10.25 10.25 5.592 0 10.25-4.758 10.25-10.25 0-1.31-.24-2.564-.675-3.734h-.75c-3.464 0-6.579-1.732-8.825-4.434z"
        />
      </svg>
    ),
    title: "AI Product Development",
    desc: "End-to-end AI product creation, from concept to deployment, leveraging state-of-the-art technologies."
  }
];

const FeaturesSection: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Transform Your Business with AI
          </h1>
          <p className="text-lg text-gray-500">
            We provide innovative AI solutions to help you unlock new opportunities, drive growth, and stay ahead of the competition.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-gray-50 hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
