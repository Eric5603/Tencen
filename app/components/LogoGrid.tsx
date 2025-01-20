import Image from 'next/image';
import Link from 'next/link';

const StatsSection = () => {
  const logos = [
    { src: '/logos/todoist.svg', alt: 'Todoist Logo' },
    { src: '/logos/slack-icon.svg', alt: 'Slack Logo' },
    { src: '/logos/typeform.svg', alt: 'Typeform Logo' },
    { src: '/logos/algolia.svg', alt: 'Algolia Logo' },
    { src: '/logos/postcss.svg', alt: 'Postcss Logo' },
    { src: '/logos/tailwindcss.svg', alt: 'TailwindCSS Logo' },
    { src: '/logos/discord.svg', alt: 'Discord Logo' },
    { src: '/logos/vimeo.svg', alt: 'Vimeo Logo' },
    { src: '/logos/campfire.svg', alt: 'Campfire Logo' },
    { src: '/logos/android.svg', alt: 'Android Logo' },
    { src: '/logos/atlassian.svg', alt: 'Atlassian Logo' },
    { src: '/logos/apple.svg', alt: 'Apple Logo' },
    { src: '/logos/google.svg', alt: 'Google Logo' },
    { src: '/logos/zeplin.svg', alt: 'Zeplin Logo' },
    { src: '/logos/visual-studio-code.svg', alt: 'VSCode Logo' },
    { src: '/logos/ycombinator.svg', alt: 'Ycombinator Logo' },
  ];

  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
        {logos.map(({ src, alt }, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image src={src} alt={alt} className="object-contain h-12" width={48} height={48} />
          </div>
        ))}
      </div>
      <p className="mt-16 text-base font-medium text-center text-gray-500">
        From startups to Fortune 500s, the world's best teams use our tool to power their internal apps.
        <Link href="#">
          <a className="inline-flex items-center justify-center text-primary hover:text-primary-dark">
            Our customers
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline w-3 h-3 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </Link>
      </p>
    </section>
  );
};

export default StatsSection;
