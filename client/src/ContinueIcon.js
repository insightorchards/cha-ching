const ContinueIcon = ({ color }) => {
  return (
    <svg
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_248_229)">
        <circle
          cx="32.5"
          cy="28.5"
          r="25.5"
          transform="rotate(-90 32.5 28.5)"
          stroke={color}
          strokeWidth="6"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter1_d_248_229)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.0234 28.7375L25.5599 41.6488L25.5602 41.6485L28.9359 45.125L44.8484 28.7375L28.9359 12.35L25.5598 15.8269L25.5594 15.8264L13.0234 28.7375ZM25.5598 15.8269L13.0234 28.7375L25.5602 41.6485L38.0967 28.7379L25.5598 15.8269Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_248_229"
          x="0"
          y="0"
          width="65"
          height="65"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_248_229"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_248_229"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_248_229"
          x="9.02344"
          y="12.3501"
          width="39.8281"
          height="40.7749"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_248_229"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_248_229"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ContinueIcon;
