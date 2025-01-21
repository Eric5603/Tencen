// components/FAQSection.tsx
"use client";

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      id: 'faq1',
      question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
    },
    {
        id: 'faq1',
        question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
    },
    {
        id: 'faq1',
        question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
    },
    {
      id: 'faq2',
      question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <details 
              key={faq.id} 
              className="group [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
              >
                <h2 className="font-medium">{faq.question}</h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>
            Didn't find the answer you were looking for? 
            <a 
              href="/contact" 
              className="ml-1 text-blue-600 hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
