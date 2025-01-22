import Image from "next/image";
import React from "react";

const features: string[] = [
  "Streamline project collaboration",
  "Enhance team productivity",
  "Simplify complex workflows",
];

const Banner: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 font-inter">
      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold text-gray-900 leading-tight tracking-[-0.02em]">
            Our founding story.
          </h1>

          <p className="text-[0.5rem] md:text-[1rem] text-gray-600 leading-relaxed tracking-[-0.01em]">
            Tencen emerged with a visionary goal to redefine task management using AI-driven solutions. Our platform is built to empower developers and organizations with intelligent, adaptive tools that simplify complex processes, boost efficiency, and enable smarter decision-making in AI development workflows.
          </p>

          {/* Feature Highlights */}
          <div className="space-y-3 text-left text-[0.95rem] text-gray-700">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <div className="relative max-w-[600px] w-full group">
            <Image
              src="/images/Company-Image/Our-story7.jpg"
              alt="Tencen Journey"
              className="w-full h-auto rounded-xl object-cover shadow-lg transition-transform group-hover:scale-[1.02]"
              width={600}
              height={400}
              unoptimized
            />
            <div className="absolute inset-0 bg-blue-500/10 rounded-xl -z-10 group-hover:rotate-1 transition-transform"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
