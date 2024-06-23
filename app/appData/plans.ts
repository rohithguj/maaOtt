import { PlanProps } from "../components/PlanComponent";

export const planData: PlanProps[] = [
    {
      src: "/plan1_image.png",
      title: "Standard Plan",
      description: "Standard HD plan with access to SonyLIV, ETV Win, Hotstar, ZEE5, Amazon Prime Video, and Netflix.",
      pricing: [
        { duration: '1m', ourPrice: 12.99, originalPrice: 14.99 },
        { duration: '3m', ourPrice: 34.99, originalPrice: 39.99 },
        { duration: '6m', ourPrice: 64.99, originalPrice: 74.99 },
        { duration: '1y', ourPrice: 119.99, originalPrice: 149.99 }
      ],
      ottCodes: ['snyliv', 'etvwin', 'hotstar', 'zee5', 'amazonprime', 'netflix'] // Array of OTT codes for this plan
    },
    {
      src: "/plan2_image.png",
      title: "Premium Plan",
      description: "Premium 4K plan with access to SonyLIV, Hotstar, Amazon Prime Video, and Netflix.",
      pricing: [
        { duration: '1m', ourPrice: 19.99, originalPrice: 24.99 },
        { duration: '3m', ourPrice: 49.99, originalPrice: 59.99 },
        { duration: '6m', ourPrice: 89.99, originalPrice: 109.99 },
        { duration: '1y', ourPrice: 169.99, originalPrice: 199.99 }
      ],
      ottCodes: ['snyliv', 'hotstar', 'amazonprime', 'netflix'] // Array of OTT codes for this plan
    },
    // Add more plan objects as needed
  ];