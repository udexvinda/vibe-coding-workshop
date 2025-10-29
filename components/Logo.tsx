import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vibe Coding Workshop Logo"
    >
      <circle cx="26" cy="26" r="25" fill="white" stroke="black" strokeWidth="2" />
      <path
        d="M17 18L31 26L17 34"
        stroke="#3B82F6" // A vibrant blue, Tailwind's blue-500
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="35"
        y1="18"
        x2="35"
        y2="34"
        stroke="#34D399" // A vibrant green, Tailwind's emerald-400
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
