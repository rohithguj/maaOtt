"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Example OTT logos - replace with actual images
import PlanComponent from "./components/PlanComponent";
import { planData } from "./appData/plans";
import ToggleGroup from "./components/ToggleGroup";
import { durationOptions } from "./appData/toggleGroupOptions";
import { topOttPlatform } from "./appData/ott";
import { useAppStore } from "./useAppStore";
import router from "next/navigation";
import { Bounce, ToastContainer, toast } from "react-toastify";
import TopComponent from "./components/TopComponent";
import BgImg from "./components/BgImg";

export default function Home(ref?: any) {
  const referal = ref.searchParams.ref;

  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState<PricingDuration | null>(
    "1m"
  );

  const handleSelect = (value: PricingDuration) => {
    setSelectedValue(value);
  };

  const [setReferral, isLoggedIn, redirectedFromAuth, setRedirectedFromAuth] =
    useAppStore((s) => [
      s.setReferral,
      s.loggedIn,
      s.redirectedFromAuth,
      s.setRedirectedFromAuth,
    ]);

  useEffect(() => {
    setLoading(false);
    setReferral(referal ? (referal as string) : null);

    console.log(redirectedFromAuth);
    if (redirectedFromAuth) {
      toast("Details saved sucefully. Our team will contact you", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      // setRedirectedFromAuth(false);
    }
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen pb-20 px-4">
      {/* Background Image with Blur Effect */}
      <BgImg />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center space-y-12 text-center text-white">
        {/* Header */}
        <TopComponent />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Bounce}
          className="text-3xl"
        />
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center space-y-8 pb-10">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight">
              Where All OTTs Meet
            </h1>
            <h2 className="text-4xl font-bold animate-fadeIn">
              Your Gateway to Premium OTT Content
            </h2>
            <p className="text-lg max-w-2xl mx-auto animate-slideIn">
              Discover a world of entertainment with Maaott, where you can
              access multiple OTT platforms at affordable prices.
            </p>
          </div>
          <div className="space-y-8 pt-10">
            <h2 className="text-3xl font-bold animate-fadeIn">
              Your can now became a promoter or a Collaborator / Prommotor
            </h2>
            <h2 className="text-3xl font-bold animate-fadeIn">
              to win exciting offers, free ott subscriptions & commisions.
            </h2>
            <div className="flex space-x-4 animate-bounce justify-center items-center">
              <Link href="/collaborators">
                <h2 className="text-4xl btn-primary cursor-pointer text-lg bg-gray-600 p-4 rounded-lg text-white hover:bg-gray-800">
                  Become a Collaborator / Prommotor
                </h2>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <div>
          <ToggleGroup
            options={durationOptions}
            selectedValue={selectedValue as PricingDuration}
            onSelect={handleSelect}
          />
        </div>
        <PlanComponent
          plans={planData}
          planDuration={selectedValue as PricingDuration}
        />
        <section className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Box 1
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 transform transition-transform hover:scale-105">
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
          {/*
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 transform transition-transform hover:scale-105">
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
          {/*
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 transform transition-transform hover:scale-105">
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
          {/*
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 transform transition-transform hover:scale-105">
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
          </div> */}
        </section>

        <div className="flex space-x-4 animate-bounce">
          <Link href="/signup">
            <h2 className="text-4xl btn-primary cursor-pointer text-lg bg-gray-600 p-4 rounded-lg text-white hover:bg-gray-800">
              Register Now
            </h2>
          </Link>
        </div>

        {/* Call to Action */}
        <section className="mt-16 flex flex-col items-center space-y-4">
          <h2 className="text-4xl font-bold text-center">
            Promote & Collaborate With Us
          </h2>
          <h2 className="text-4xl font-bold text-center">
            Get Exciting Rewards & Offers
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Join thousands of users who are already enjoying the benifits.
          </p>
          {/* <Link href="/colab">
            <span className="btn-primary cursor-pointer">Get Started</span>
          </Link> */}
        </section>

        <section className="w-full mt-16">
          <h2 className="text-4xl font-bold mb-8">Top Platforms Available</h2>
          <div className="flex flex-wrap justify-center items-center space-x-8 text-lg">
            {topOttPlatform.map((platform, index) => (
              <div
                key={index}
                className="relative w-36 h-36 transform transition-transform hover:scale-110 hover:rotate-6"
              >
                {/* <Image
                  src={platform.logoSrc}
                  height={70}
                  width={70}
                  alt={platform.name}
                  // layout="fill"
                  objectFit="contain"
                /> */}
                {platform.name}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full mt-16 py-8 border-t border-gray-300 dark:border-gray-700 flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Maaott. All rights reserved.</p>
          <div className="flex space-x-4">
            {/* <Link href="/terms">
              <span className="hover:underline cursor-pointer">
                Terms of Service
              </span>
            </Link>
            <Link href="/privacy">
              <span className="hover:underline cursor-pointer">
                Privacy Policy
              </span>
            </Link> */}
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideIn {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out;
        }
        .animate-slideIn {
          animation: slideIn 2s ease-in-out;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </main>
  );
}
