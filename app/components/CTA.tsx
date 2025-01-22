import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 bg-slate-50 text-black overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="bg-[radial-gradient(circle_at_top_right,_rgba(0,0,0,0.1),_transparent)] w-[300px] h-[300px] rounded-full blur-3xl opacity-50 top-10 left-10 transform translate-x-1/4"></div>
        <div className="bg-[radial-gradient(circle_at_bottom_left,_rgba(0,0,0,0.05),_transparent)] w-[400px] h-[400px] rounded-full blur-3xl opacity-50 bottom-10 right-10 transform -translate-x-1/4"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 text-center">
        {/* Header Text */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Build the Future with Us
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 opacity-90">
            Ready to leverage AI and SaaS to drive your business forward? <span className="font-semibold text-black">Tencen</span> is here to help you build, scale, and grow smarter.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8">
          <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500 transform transition-transform duration-200 hover:scale-105 active:scale-95">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
