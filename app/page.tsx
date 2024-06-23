'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from './logo.png';
import bg from './bgimg.jpeg';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen pb-20 px-4 bg-gray-900">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-75"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center space-y-12 text-center text-white">
        {/* Header */}
        <header className="flex items-center justify-between w-full py-8 px-4 md:px-0">
          <div className="flex items-center space-x-4">
            <div className="w-32 h-16 bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center overflow-hidden">
              <Image
                src={logo}
                alt="Maaott Logo"
                width={128}
                height={64}
                layout="responsive"
                objectFit="contain"
                className="rounded-md"
                priority
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              Where All OTTs Meet
            </h1>
          </div>
          <div className="flex space-x-4">
            <Link href="/signup">
              <span className="btn-primary">Sign Up</span>
            </Link>
            <Link href="/login">
              <span className="btn-secondary">Log In</span>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center space-y-8">
          <h2 className="text-4xl font-bold">
            Your Gateway to Premium OTT Content
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover a world of entertainment with Maaott, where you can access multiple OTT platforms at affordable prices.
          </p>
          <div className="flex space-x-4">
            <Link href="/pricing">
              <span className="btn-primary">View Pricing</span>
            </Link>
            <Link href="/features">
              <span className="btn-secondary">Explore Features</span>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Box 1 */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4">
            <Image
              src="/feature1.svg"
              alt="Feature 1"
              width={120}
              height={120}
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Unlimited Streaming
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Stream unlimited movies and series on any device, anytime.
            </p>
          </div>
          {/* Feature Box 2 */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4">
            <Image
              src="/feature2.svg"
              alt="Feature 2"
              width={120}
              height={120}
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              High-Quality Playback
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Enjoy high-definition streaming with adaptive bitrate technology.
            </p>
          </div>
          {/* Feature Box 3 */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4">
            <Image
              src="/feature3.svg"
              alt="Feature 3"
              width={120}
              height={120}
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Personalized Recommendations
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Get personalized recommendations based on your watch history.
            </p>
          </div>
          {/* Feature Box 4 */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4">
            <Image
              src="/feature4.svg"
              alt="Feature 4"
              width={120}
              height={120}
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Offline Viewing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Download your favorites to watch offline on the go.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 flex flex-col items-center space-y-4">
          <h2 className="text-4xl font-bold text-center">
            Ready to Explore Maaott?
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Join thousands of users who are already enjoying our platform.
          </p>
          <Link href="/signup">
            <span className="btn-primary">Get Started</span>
          </Link>
        </section>

        {/* Footer */}
        <footer className="w-full mt-16 py-8 border-t border-gray-300 dark:border-gray-700 flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Maaott. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/terms">
              <span className="hover:underline">Terms of Service</span>
            </Link>
            <Link href="/privacy">
              <span className="hover:underline">Privacy Policy</span>
            </Link>
          </div>
        </footer>
      </div>
      <style jsx>{`
        .btn-primary {
          @apply bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300;
        }
        .btn-secondary {
          @apply bg-gray-600 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700 transition duration-300;
        }
      `}</style>
    </main>
  );
}
