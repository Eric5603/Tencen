import React from 'react';
import Image from 'next/image';

type Testimonial = {
  avatar: string;
  name: string;
  title: string;
  quote: string;
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      avatar: "/images/Reviews/Peter-Brighton.jpg",
      name: "Peter Brighton",
      title: "AI Engineer",
      quote: "Tencen AI solutions have transformed our business strategy, enabling unprecedented growth and efficiency."
    },
    {
      avatar: "/images/Reviews/Simon-Adrew.jpg",
      name: "Simon Andrew", 
      title: "Senior Software Engineer",
      quote: "The development process tools and frameworks provided are cutting-edge and dramatically improve our team's productivity."
    },
    {
      avatar: "/images/Reviews/Rene-Wells.jpg",
      name: "Michael Worin",
      title: "Product Design Lead", 
      quote: "Innovative design solutions that seamlessly blend user experience with advanced technological capabilities."
    }
  ];

  return (
    <section className="relative py-14">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full mb-4">
            Customer Success Stories
          </div>
          <p className="mt-3 text-gray-800 text-2xl font-semibold sm:text-3xl">
            Trusted by 23,000 Innovative Companies
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <li 
                key={index} 
                className="bg-white rounded-xl border shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  {/* Quote Section */}
                  <div className="mb-4">
                    <svg 
                      className="w-9 h-9 text-gray-300 mb-3" 
                      viewBox="0 0 35 35" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.47895 14.5833C9.15374 14.5833 8.84166 14.6329 8.53103 14.6781C8.63166 14.3398 8.7352 13.9956 8.90145 13.6865C9.0677 13.2373 9.32728 12.8479 9.58541 12.4556C9.80124 12.0312 10.1819 11.7439 10.4619 11.3808C10.755 11.0279 11.1546 10.7931 11.471 10.5C11.7817 10.1937 12.1885 10.0406 12.5123 9.82478C12.8506 9.63082 13.1452 9.41645 13.4602 9.31437L14.2462 8.99062L14.9375 8.70332L14.2302 5.87708L13.3596 6.08707C13.081 6.15707 12.7412 6.23874 12.3548 6.33645C11.9596 6.40937 11.5381 6.60916 11.0685 6.79145C10.6048 6.99853 10.0681 7.13853 9.56937 7.47103C9.0677 7.78895 8.48874 8.05437 7.97833 8.4802C7.48395 8.91916 6.88749 9.29978 6.44708 9.85833C5.96583 10.3804 5.49041 10.9287 5.12145 11.5529C4.69416 12.1479 4.40395 12.8012 4.0977 13.4473C3.82062 14.0933 3.59749 14.754 3.4152 15.3956C3.06958 16.6819 2.91499 17.904 2.8552 18.9496C2.80562 19.9967 2.83478 20.8673 2.89603 21.4973C2.91791 21.7948 2.95874 22.0835 2.98791 22.2833L3.02437 22.5283L3.06228 22.5196C3.32167 23.7312 3.91877 24.8446 4.78452 25.7311C5.65028 26.6175 6.7493 27.2408 7.95447 27.5287C9.15963 27.8166 10.4217 27.7575 11.5946 27.3581C12.7676 26.9587 13.8035 26.2354 14.5825 25.2719C15.3616 24.3083 15.8519 23.1439 15.9969 21.9133C16.1418 20.6828 15.9353 19.4363 15.4014 18.3181C14.8675 17.2 14.028 16.2558 12.9799 15.5949C11.9318 14.934 10.718 14.5832 9.47895 14.5833Z" fill="currentColor" />
                    </svg>
                    <p className="text-gray-700 italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center mt-6">
                    <div className="mr-6">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        width={64} 
                        height={48} 
                        className="rounded-full object-cover w-16 h-16 border-2 border-indigo-500" 
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-indigo-600">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div 
        className="absolute top-0 w-full h-[350px]" 
        style={{ 
          background: "linear-gradient(152.92deg, rgba(245, 242, 247, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" 
        }}
      ></div>
    </section>
  );
};

export default Testimonials;