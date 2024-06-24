"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import bg from "../bgimg.jpeg";
import logo from "../logo.png";
import { useAppStore } from "../useAppStore";
import CommissionPopup from "../commision/page"; // Import the new popup component

interface CollaboratorDashboardProps {
  collaboratorName: string;
  affiliateLink: string;
  subscriberCount: number;
  commissionRate: string;
}

const CollaboratorDashboard: React.FC<CollaboratorDashboardProps> = ({
  collaboratorName,
  affiliateLink,
  subscriberCount,
  commissionRate,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn] = useAppStore((s) => [s.loggedIn]);
  const router = useRouter();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  console.log(isLoggedIn)
  if (!isLoggedIn) {
    const currentPagePath = usePathname();
    const [setRedirect] = useAppStore((s) => [s.setRedirect]);
    setRedirect(currentPagePath);
    router.push('/login');
    return null;
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen pb-20 px-4 bg-gray-900">
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

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center space-y-12 text-center text-white">
        <header className="flex items-center justify-between w-full py-8 px-4 md:px-0">
          <div className="flex items-center space-x-4">
            <div className="w-32 h-16 rounded-md flex items-center justify-center overflow-hidden">
              <Link href={"./"}>
                <Image
                  src={logo}
                  alt="Maaott Logo"
                  width={156}
                  height={128}
                  layout="responsive"
                  objectFit="contain"
                  className="rounded-md"
                  priority
                />
              </Link>
            </div>
          </div>
        </header>

        <section className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-md p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex flex-col w-full md:w-auto">
            <h2 className="text-2xl font-semibold text-gray-200 mb-2">
              Welcome, {collaboratorName}
            </h2>
            <div className="bg-gray-700 rounded-lg p-4 mb-4">
              <p className="text-gray-400">
                Affiliate Link:{" "}
                <a
                  href={affiliateLink}
                  className="text-blue-400 hover:underline"
                >
                  {affiliateLink}
                </a>
              </p>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 mb-4 md:ml-4">
            <p className="text-gray-400">
              Subscribers Brought: {subscriberCount}
            </p>
          </div>
        </section>
        <p className="text-gray-400">
          Contact us at:{" "}
          <a href="tel:+919347011103" className="text-blue-500 hover:underline">
            +91 9347011103
          </a>
        </p>

        <div className="mt-4 md:mt-0">
          <button
            type="button"
            className="text-white bg-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-900"
            onClick={togglePopup}
          >
            Commission Breakup
          </button>
        </div>

        {showPopup && (
          <CommissionPopup
            commissionRate={commissionRate}
            onClose={togglePopup}
          />
        )}

        <footer className="w-full mt-16 py-8 border-t border-gray-300 dark:border-gray-700 flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Maaott. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/terms">
              <span className="hover:underline cursor-pointer">
                Terms of Service
              </span>
            </Link>
            <Link href="/privacy">
              <span className="hover:underline cursor-pointer">
                Privacy Policy
              </span>
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

        @media (max-width: 768px) {
          .max-w-4xl {
            max-width: 100%;
          }
          .flex-col-reverse {
            flex-direction: column-reverse;
          }
          .md\:ml-4 {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CollaboratorDashboard;
