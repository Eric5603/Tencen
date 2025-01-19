import React from 'react'
import Link from "next/link";
export default function Hero() {
  return (
    <section>
    <div className="custom-screen py-28 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                Build and scale your next business idea faster
            </h1>
            <p className="max-w-xl mx-auto">
                Blinder making it simple for you to build and grow your SaaS applications, or any business idea.
            </p>
            <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                <Link
                    href="/get-started"
                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg  md:inline-flex "
                >
                    Start building
                </Link>
                <Link
                    href="#cta"
                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg  md:inline-flex"
                    scroll={false}
                >
                    Learn more
                </Link>
            </div>
        </div>
    </div>
</section>
  )
}