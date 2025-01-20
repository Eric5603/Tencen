import React from 'react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-16 relative bg-gradient-to-r from-white to-gray-50">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <p className="text-gray-800 text-4xl font-bold sm:text-5xl">
            Build the future with us
          </p>
          <p className="text-gray-600 mt-3">
            Ready to leverage AI and SaaS to drive your business forward? Tencen is here to help you build, scale, and grow smarter.
          </p>
        </div>
        <div className="mt-6">
          <Link href="/contact" className="flex items-center justify-center py-3 px-6 text-white font-semibold bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg shadow-md transform transition-all duration-200 ease-in-out md:inline-flex">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
