import React from "react";

interface Option {
  name: string; // Displayed text
  value: PricingDuration; // Value stored in state
}

interface ToggleGroupProps {
  options: Option[]; // Array of options with name and value
  selectedValue: PricingDuration; // Currently selected value
  onSelect: (value: PricingDuration) => void; // Callback function when an option is selected
}

const ToggleGroup: React.FC<ToggleGroupProps> = ({
  options,
  selectedValue,
  onSelect,
}) => {
  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-4 py-2 text-white ${
            selectedValue === option.value ? "bg-gray-800" : "bg-gray-600"
          } hover:bg-blue-600 rounded-md`}
          onClick={() => onSelect(option.value)}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default ToggleGroup;
