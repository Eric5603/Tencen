import React from 'react'

export default function CTA() {
  return (
<section className="py-28 relative bg-white">
    <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Build the future with us
            </p>
            <p className="text-gray-500 mt-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
            </p>
        </div>
        <div className="mt-4">
            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg  md:inline-flex">
                Get started
            </a>
        </div>
    </div>
</section>

  )
}