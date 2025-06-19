
import React from 'react';

interface ProgressDonutProps {
  progress: number;
  size?: number;
}

const ProgressDonut: React.FC<ProgressDonutProps> = ({ progress, size = 32 }) => {
  const radius = (size - 4) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="3"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#0066cc"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-300"
        />
      </svg>
      <span className="absolute text-xs font-medium text-gray-700">
        {progress}%
      </span>
    </div>
  );
};

export default ProgressDonut;
