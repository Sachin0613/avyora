
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto" }) => {
  return (
    <svg 
      viewBox="0 0 400 400" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Rings */}
      <circle cx="200" cy="200" r="190" stroke="black" strokeWidth="2" />
      <circle cx="200" cy="200" r="184" stroke="black" strokeWidth="1" />
      
      {/* Interlocking Monogram AV */}
      <g transform="translate(162, 105) scale(0.75)">
        <path 
          d="M50 0L100 130H80L50 50L20 130H0L50 0Z" 
          fill="black" 
        />
        <path 
          d="M30 30L80 160H100L50 30L0 160H20L30 30Z" 
          fill="black"
          opacity="0.9"
        />
      </g>
      
      {/* Brand Name Text */}
      <text 
        x="200" 
        y="255" 
        textAnchor="middle" 
        className="font-heading"
        style={{ 
          fontSize: '62px', 
          fontWeight: '300', 
          letterSpacing: '0.15em',
          fill: 'black'
        }}
      >
        AVYORA
      </text>
      
      {/* Footer Line */}
      <line 
        x1="140" 
        y1="280" 
        x2="260" 
        y2="280" 
        stroke="black" 
        strokeWidth="1.5" 
      />
    </svg>
  );
};

export default Logo;
