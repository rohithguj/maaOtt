// components/CommissionPopup.tsx

import React from 'react';

interface CommissionPopupProps {
  commissionRate: string;
  onClose: () => void;
}

const CommissionPopup: React.FC<CommissionPopupProps> = ({ commissionRate, onClose }) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-white mb-4">
          Commission Rates & Offers
        </h2>
        <h3 className="text-xl font-bold text-white m-4">
          Get 5 subscribers to get free ott as long as they are subscribed
        </h3>
        <p className="text-gray-400 mb-2">Commission Rate: {commissionRate}</p>
        <p className="text-gray-400">For more than 10 subscribers, you get a commission:</p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>20% for 10+ connections</li>
          <li>30% for 20+ connections</li>
          <li>40% for 50+ connections</li>
          <li>50% for 100+ connections</li>
        </ul>
        <p className="text-gray-400">
          Contact us at:{" "}
          <a href="tel:+919347011103" className="text-blue-500 hover:underline">
            +91 9347011103
          </a>
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CommissionPopup;
