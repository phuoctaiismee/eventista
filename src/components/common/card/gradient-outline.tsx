"use client";
import { FC, HTMLAttributes, useState, useEffect, useRef } from "react";

type GradientOutlineProps = {
  children: React.ReactNode;
  strokeWidth?: number;
  borderRadius?: number;
  gradientColors?: string[];
  hoverGradientColors?: string[];
  gradientAngle?: number;
  allowHover?: boolean;
  className?: string;
  id: string;
  onClick?: () => void;
} & HTMLAttributes<HTMLDivElement>;

const GradientOutline: FC<GradientOutlineProps> = ({
  children,
  id,
  allowHover = true,
  strokeWidth = 1.5,
  borderRadius = 24,
  hoverGradientColors = ["#E6CAA4", "#E9B84E"],
  gradientColors = [
    "rgba(255, 255, 255, 0.08)",
    "rgba(255, 255, 255, 0.4)",
    "rgba(255, 255, 255, 0)",
    "rgba(255, 255, 255, 0)",
    "rgba(255, 255, 255, 0.1)",
  ],
  gradientAngle = 45,
  className = "",
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 });

  // Cập nhật kích thước sau khi render
  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  const colors = isHovered ? hoverGradientColors : gradientColors;

  return (
    <div
      ref={containerRef}
      id={id}
      onClick={onClick}
      onMouseEnter={() => allowHover && setIsHovered(true)}
      onMouseLeave={() => allowHover && setIsHovered(false)}
      className={`relative inline-block overflow-hidden ${className}`}
      style={{ borderRadius }}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
      <svg
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1={Math.cos((gradientAngle * Math.PI) / 180)}
            y1={Math.sin((gradientAngle * Math.PI) / 180)}
            x2={1 - Math.cos((gradientAngle * Math.PI) / 180)}
            y2={1 - Math.sin((gradientAngle * Math.PI) / 180)}
          >
            {colors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (colors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>
        <rect
          x={strokeWidth / 2}
          y={strokeWidth / 2}
          width={dimensions.width - strokeWidth}
          height={dimensions.height - strokeWidth}
          rx={borderRadius}
          ry={borderRadius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="none"
        />
      </svg>
    </div>
  );
};

export default GradientOutline;
