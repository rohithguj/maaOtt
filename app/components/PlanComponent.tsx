import { ottData } from "../appData/ott";

// Interface for a single feature item
export interface PlanProps {
  src?: string;
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
  planDuration,
}) => {
  const priceObj = pricing.find((price) => price.duration === planDuration);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center space-y-4 transform transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">
        {description}
      </p>
      <div className="flex flex-col items-start mt-auto">
        {/* Display pricing details */}
        {priceObj && (
          <div className="flex flex-col items-start mt-auto">
            <div className="flex justify-between">
              <p className="text-gray-700 dark:text-gray-400">
                <strong>{priceObj.duration.toUpperCase()}</strong> - Our
                Price: Rs {priceObj.ourPrice}
              </p>
            </div>
          </div>
        )}
        {/* Display OTT services */}
        {ottCodes.length > 0 && (
          <div className="w-full">
            <div className="mt-2 grid grid-cols-3 gap-2">
              {ottCodes.map((code, index) => {
                const ottService = ottData.find((ott) => ott.code === code);
                if (!ottService) return null;
                return (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={ottService.logoSrc}
                      alt={ottService.name}
                      className="w-24 h-10 object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// PlanComponent
const PlanComponent: React.FC<{
  plans: PlanProps[];
  planDuration: PricingDuration;
}> = ({ plans, planDuration }) => {

  return (
    <div className="w-full mt-16">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <PlanBox planDuration={planDuration} key={index} {...plan} />
        ))}
      </section>
    </div>
  );
};

export default PlanComponent;
