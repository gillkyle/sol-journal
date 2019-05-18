import React from "react"

const Logo = ({ color }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0546 4.63124C9.29788 4.63124 4.63112 9.29801 4.63112 15.0548C4.63112 20.8115 9.29789 25.4783 15.0546 25.4783C20.8114 25.4783 25.4781 20.8115 25.4781 15.0548C25.4781 9.29801 20.8114 4.63124 15.0546 4.63124ZM15.0548 6.67064C12.8794 6.67064 11.0666 10.4243 11.0666 15.0548C11.0666 19.6852 13.0154 23.4389 15.0548 23.4389C19.6852 23.4389 23.4389 19.6852 23.4389 15.0548C23.4389 10.4243 19.6852 6.67064 15.0548 6.67064Z"
          fill={color}
        />
        <circle cx="2.19157" cy="15.0001" r="1.70781" fill={color} />
        <circle cx="27.8086" cy="15.0001" r="1.70781" fill={color} />
        <circle
          cx="15.0001"
          cy="2.19157"
          r="1.70781"
          transform="rotate(90 15.0001 2.19157)"
          fill={color}
        />
        <circle
          cx="15.0001"
          cy="27.8086"
          r="1.70781"
          transform="rotate(90 15.0001 27.8086)"
          fill={color}
        />
        <circle
          cx="5.94291"
          cy="24.0571"
          r="1.70781"
          transform="rotate(-45 5.94291 24.0571)"
          fill={color}
        />
        <circle
          cx="24.0569"
          cy="5.94305"
          r="1.70781"
          transform="rotate(-45 24.0569 5.94305)"
          fill={color}
        />
        <circle
          cx="5.94312"
          cy="5.9431"
          r="1.70781"
          transform="rotate(45 5.94312 5.9431)"
          fill={color}
        />
        <circle
          cx="24.057"
          cy="24.0572"
          r="1.70781"
          transform="rotate(45 24.057 24.0572)"
          fill={color}
        />
        <circle
          cx="3.18757"
          cy="19.9524"
          r="1.70781"
          transform="rotate(-22.7457 3.18757 19.9524)"
          fill={color}
        />
        <circle
          cx="26.8123"
          cy="10.0478"
          r="1.70781"
          transform="rotate(-22.7457 26.8123 10.0478)"
          fill={color}
        />
        <circle
          cx="10.0477"
          cy="3.18769"
          r="1.70781"
          transform="rotate(67.2543 10.0477 3.18769)"
          fill={color}
        />
        <circle
          cx="19.9523"
          cy="26.8125"
          r="1.70781"
          transform="rotate(67.2543 19.9523 26.8125)"
          fill={color}
        />
        <circle
          cx="10.1491"
          cy="26.8546"
          r="1.70781"
          transform="rotate(-67.7457 10.1491 26.8546)"
          fill={color}
        />
        <circle
          cx="19.8509"
          cy="3.14565"
          r="1.70781"
          transform="rotate(-67.7457 19.8509 3.14565)"
          fill={color}
        />
        <circle
          cx="3.14561"
          cy="10.1493"
          r="1.70781"
          transform="rotate(22.2543 3.14561 10.1493)"
          fill={color}
        />
        <circle
          cx="26.8546"
          cy="19.851"
          r="1.70781"
          transform="rotate(22.2543 26.8546 19.851)"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Logo
