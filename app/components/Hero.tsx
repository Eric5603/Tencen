import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden font-sans">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-gradient-to-b from-white via-gray-50 to-gray-100"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(13,110,253,0.08) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      <div className="custom-screen py-32 px-4 sm:px-6 lg:px-8 text-gray-600 relative">
        <div className="space-y-6 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 tracking-tight leading-tight">
            Empower Your Agency with Intelligent SaaS & AI Solutions
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
            Discover cutting-edge AI-powered solutions with Tencen. Build innovative SaaS platforms and deploy intelligent agents that redefine automation, enhance customer engagement, and drive growth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              aria-label="Work with us"
              className="flex items-center justify-center gap-x-2 py-3 px-6 text-white font-semibold bg-blue-600 hover:bg-blue-500 hover:shadow-lg active:scale-95 rounded-lg shadow-md transition-all duration-200"
            >
              Work with us
            </Link>
            <Link
              href="/services"
              aria-label="Our Services"
              scroll={false}
              className="flex items-center justify-center gap-x-2 py-3 px-6 text-blue-600 font-semibold bg-blue-100 hover:bg-blue-200 hover:shadow-lg active:bg-blue-300 rounded-lg shadow-md transition-all duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
