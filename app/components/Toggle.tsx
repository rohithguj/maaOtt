// components/Toggle.tsx

import React from "react";

interface ToggleProps {
  isOn: boolean;
  toggle: () => void;
  children?: React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ isOn, toggle, children }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center">
        <button
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
            isOn ? "bg-green-500" : "bg-gray-400"
          } focus:outline-none`}
          onClick={toggle}
        >
          <span
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isOn ? "translate-x-full" : "translate-x-0"
            }`}
          ></span>
        </button>
      </div>
      {isOn && <div className="ml-4">{children}</div>}
    </div>
  );
};

export default Toggle;
