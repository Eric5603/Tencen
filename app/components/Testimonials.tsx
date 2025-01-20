import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
    const testimonials = [
        {
            image: "/images/testimonial1.jpg",
            name: "Alex Wonderson",
            title: "Founder of Lyconf",
            quote: "As a small business owner, I was doing everything and my workload was increasing. With this startup, I was able to save time so I could focus on the things that matter most: my clients and my family."
        },
        {
            image: "/images/testimonial2.jpg",
            name: "Karim Ahmed",
            title: "DevOps Engineer",
            quote: "My company's software now is easy to use, saves time and money, and is loved by a lot of users. One customer saved $10k over the course of 3 years and another saves 8 hours per week! Thanks to Blinder."
        },
        {
            image: "/images/testimonial3.jpg",
            name: "Lysa Stian",
            title: "System Manager",
            quote: "My business was in a dire situation. I had no idea what to do, and I felt like I was losing hope. Then I found this Startup and everything changed. It helped me create automated sales."
        },
        {
            image: "/images/testimonial4.jpg",
            name: "Angela Stian",
            title: "Product Designer",
            quote: "One day, my company was about to go under and I had no idea what to do. I found Blinder and it helped me get my business back on track. Now, my company is flourishing and I see new opportunities."
        },
        {
            image: "/images/testimonial5.jpg",
            name: "Jurica Koletic",
            title: "Founder of Let’s Code",
            quote: "In these difficult economic times, doing business is tough. Funding is hard to come by and many entrepreneurs are struggling to keep their doors open. But when I found this startup everything changed."
        },
        {
            image: "/images/testimonial6.jpg",
            name: "Kavi Laron",
            title: "Full Stack Engineer",
            quote: "We all know how costly it is to find good help. I was faced with this problem when I lost my data entry staff and my business was on the brink of going under. Thankfully, Blinder saved the day."
        },
    ];

    return (
        <div className="py-28">
            <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        See what others are saying about us
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Listen to what the experts around the world are saying about us.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((item, idx) => (
                            <li key={idx} className="bg-white border p-4 rounded-xl">
                                <figure>
                                    <div className="flex items-center gap-x-4">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={50}
                                            height={50}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <span className="block text-gray-800 font-semibold">{item.name}</span>
                                            <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                        </div>
                                    </div>
                                    <blockquote>
                                        <p className="mt-6 text-gray-700">
                                            {item.quote}
                                        </p>
                                    </blockquote>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
