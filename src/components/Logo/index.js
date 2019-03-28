import React from "react";

const Logo = ({ color }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.0748 5.81108C12.1972 5.81108 5.81108 12.1972 5.81108 20.0748C5.81108 27.9524 12.1972 34.3385 20.0748 34.3385C27.9524 34.3385 34.3385 27.9524 34.3385 20.0748C34.3385 12.1972 27.9524 5.81108 20.0748 5.81108ZM20.0748 8.60185C17.0981 8.60185 14.6174 13.7385 14.6174 20.0748C14.6174 26.4112 17.2841 31.5478 20.0748 31.5478C26.4112 31.5478 31.5478 26.4112 31.5478 20.0748C31.5478 13.7385 26.4112 8.60185 20.0748 8.60185Z"
          fill={color}
        />
        <circle cx="2.47249" cy="20" r="2.33699" fill={color} />
        <circle cx="37.5274" cy="20" r="2.33699" fill={color} />
        <circle
          cx="20"
          cy="2.47261"
          r="2.33699"
          transform="rotate(90 20 2.47261)"
          fill={color}
        />
        <circle
          cx="20"
          cy="37.5274"
          r="2.33699"
          transform="rotate(90 20 37.5274)"
          fill={color}
        />
        <circle
          cx="7.60615"
          cy="32.3938"
          r="2.33699"
          transform="rotate(-45 7.60615 32.3938)"
          fill={color}
        />
        <circle
          cx="32.3936"
          cy="7.6062"
          r="2.33699"
          transform="rotate(-45 32.3936 7.6062)"
          fill={color}
        />
        <circle
          cx="7.6062"
          cy="7.60622"
          r="2.33699"
          transform="rotate(45 7.6062 7.60622)"
          fill={color}
        />
        <circle
          cx="32.3938"
          cy="32.3938"
          r="2.33699"
          transform="rotate(45 32.3938 32.3938)"
          fill={color}
        />
        <circle
          cx="3.83556"
          cy="26.7768"
          r="2.33699"
          transform="rotate(-22.7457 3.83556 26.7768)"
          fill={color}
        />
        <circle
          cx="36.1642"
          cy="13.2232"
          r="2.33699"
          transform="rotate(-22.7457 36.1642 13.2232)"
          fill={color}
        />
        <circle
          cx="13.2231"
          cy="3.83568"
          r="2.33699"
          transform="rotate(67.2543 13.2231 3.83568)"
          fill={color}
        />
        <circle
          cx="26.7768"
          cy="36.1644"
          r="2.33699"
          transform="rotate(67.2543 26.7768 36.1644)"
          fill={color}
        />
        <circle
          cx="13.3619"
          cy="36.2218"
          r="2.33699"
          transform="rotate(-67.7457 13.3619 36.2218)"
          fill={color}
        />
        <circle
          cx="26.6379"
          cy="3.77818"
          r="2.33699"
          transform="rotate(-67.7457 26.6379 3.77818)"
          fill={color}
        />
        <circle
          cx="3.7781"
          cy="13.3621"
          r="2.33699"
          transform="rotate(22.2543 3.7781 13.3621)"
          fill={color}
        />
        <circle
          cx="36.2218"
          cy="26.6379"
          r="2.33699"
          transform="rotate(22.2543 36.2218 26.6379)"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
