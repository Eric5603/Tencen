'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface NavigationItem {
    title: string;
    path: string;
}

const Navbar: React.FC = () => {
    const [state, setState] = useState<boolean>(false);

    const navigation: NavigationItem[] = [
        { title: "Services", path: "/services" },
        { title: "Company", path: "/company" },
        { title: "Blogs", path: "/blogs" },
    ];

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".menu-btn")) setState(false);
        };

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <nav
            className={`bg-gray-10 pb-5 md:text-sm font-sans ${
                state
                    ? "shadow-xl rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
                    : ""
            }`}
        >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <Link href="/" className="flex items-center space-x-2">
                        <svg
                            className="w-20 h-20"
                            viewBox="0 -10.5 256 256"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                        >
                            <g>
                                <path
                                    d="M246.7735,71.523 C240.8505,57.487 232.3675,44.902 221.5635,34.119 C199.5105,12.11 170.1585,0 138.8815,0 L138.6405,0 C117.7525,0.041 96.7735,6.078 77.9725,17.457 C60.2255,28.198 45.4255,43.298 36.3005,59.977 C35.5265,61.392 36.0465,63.167 37.4615,63.941 C38.8775,64.715 40.6505,64.195 41.4245,62.78 C50.0625,46.991 64.1165,32.669 80.9965,22.453 C98.8895,11.624 118.8265,5.879 138.6525,5.84 L138.8805,5.84 C168.5985,5.84 196.4885,17.346 217.4385,38.253 C238.5395,59.312 250.1595,87.404 250.1595,117.354 C250.1595,147.14 238.5605,175.143 217.4985,196.205 C196.4365,217.267 168.4335,228.867 138.6465,228.867 C118.8945,228.867 99.4885,223.635 82.5275,213.738 C66.0635,204.131 52.2375,190.375 42.5465,173.958 C41.7265,172.568 39.9355,172.108 38.5465,172.927 C37.1585,173.747 36.6975,175.538 37.5175,176.926 C47.7135,194.2 62.2605,208.674 79.5845,218.783 C97.4375,229.2 117.8605,234.707 138.6465,234.707 C169.9925,234.707 199.4625,222.5 221.6275,200.335 C243.7935,178.169 256.0005,148.7 256.0005,117.354 C256.0005,101.449 252.8965,86.03 246.7735,71.523"
                                />
                            </g>
                        </svg>
                        <span className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                            Tencen
                        </span>
                    </Link>

                    <div className="md:hidden">
                        <button
                            className="menu-btn text-gray-900 hover:text-gray-600"
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                        state ? "block" : "hidden"
                    }`}
                >
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {navigation.map((item, idx) => (
                            <li key={idx} className="text-gray-900 font-semibold text-base  hover:text-gray-600">
                                <Link href={item.path} className="block">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                        <Link
                            href="/contact"
                            className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-bold bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg md:inline-flex"
                        >
                            Contact Us
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
