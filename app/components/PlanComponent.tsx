'use client'

import { useState } from "react";
import { ottData } from "../appData/ott";

// Interface for a single feature item



export interface PlanProps {
    src: string;
    alt?: string;
    title: string;
    description: string;
    pricing: {
      duration: PricingDuration;
      ourPrice: number;
      originalPrice: number;
    }[];
    ottCodes: ottCode[]; // Array of OTT codes
  }
  
  // Interface for the FeaturesComponent props
  interface PlanComponentProps {
    features: PlanProps[];
  }

  interface PlanData {
    src: string;
    alt: string;
    title: string;
    description: string;
  }
  

  const PlanBox: React.FC<PlanProps & { planDuration: PricingDuration }> = ({
    src,
    alt,
    title,
    description,
    pricing,
    ottCodes,
    planDuration
  })  => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const priceObj = pricing.find(price => price.duration === planDuration);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 transform transition-transform hover:scale-105">
      <img src={src} alt={alt || title} className="w-24 h-24 object-contain" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
      <div className="flex flex-col items-start mt-auto">
        {/* Display pricing details */}
        {/* <div className="flex flex-col">
          {pricing.map((price, index) => (
            <div key={index} className="flex justify-between">
              <p className="text-gray-700 dark:text-gray-400"><strong>{price.duration.toUpperCase()}</strong> - Our Price: ${price.ourPrice}</p>
              <p className="text-gray-700 dark:text-gray-400">Original Price: ${price.originalPrice}</p>
            </div>
          ))}
        </div> */}
        {priceObj && (
        <div className="flex flex-col items-start mt-auto">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="text-gray-700 dark:text-gray-400">
                <strong>{priceObj.duration.toUpperCase()}</strong> - Our Price: ${priceObj.ourPrice}
              </p>
              <p className="text-gray-700 dark:text-gray-400">
                Original Price: ${priceObj.originalPrice}
              </p>
            </div>
          </div>
        </div>
      )}
        {/* Display OTT services */}
        {ottCodes.length > 0 && (
          <div>
            <button
              className="text-blue-500 hover:text-blue-700 underline mt-2"
              onClick={toggleDetails}
            >
              {showDetails ? 'Hide OTT Services' : 'View OTT Services'}
            </button>
            {showDetails && (
              <div className="mt-2 grid grid-cols-3 gap-2">
                {ottCodes.map((code, index) => {
                  const ottService = ottData.find(ott => ott.code === code);
                  if (!ottService) return null;
                  return (
                    <img key={index} src={ottService.logoSrc} alt={ottService.name} className="w-12 h-12 object-contain" />
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// PlanComponent
const PlanComponent: React.FC<{ plans: PlanProps[], planDuration: PricingDuration }> = ({ plans, planDuration }) => {
  const [showAll, setShowAll] = useState(false);

  // Toggle between showing all features and showing only the first 4
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-full mt-16">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plans, index) => (
          <PlanBox planDuration={planDuration} key={index} {...plans} />
        ))}
      </section>
      {/* Centered button container */}
      {plans.length > 4 && <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 text-white bg-black shadow-md rounded-md opacity-90"
          onClick={toggleShowAll}
        >
          {showAll ? 'View Less' : 'View All'}
        </button>
      </div>}
    </div>
  );
};

export default PlanComponent;