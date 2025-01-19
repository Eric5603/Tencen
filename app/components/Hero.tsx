import React from 'react'
import Link from "next/link";
export default function Hero() {
  return (
    <section>
    <div className="custom-screen py-28 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                Transform Your Business with Intelligent SaaS & AI Agents
            </h1>
            <p className="max-w-xl mx-auto">
                 Unlock the power of AI-driven solutions with Tencen. Build smarter SaaS applications and deploy intelligent agents that enhance automation, improve customer experiences, and accelerate growth.
            </p>
            <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                <Link
                    href="/contact"
                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg  md:inline-flex "
                >
                    Send Quotes
                </Link>
                <Link
                    href="/services"
                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg  md:inline-flex"
                    scroll={false}
                >
                    Our Services 
                </Link>
            </div>
        </div>
    </div>
</section>
  )
}