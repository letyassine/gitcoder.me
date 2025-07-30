"use client";

import React, { useState, useRef } from "react";

interface ImageSpotlightEffectProps {
  src: string;
  alt: string;
}

export const ImageSpotlightEffect: React.FC<ImageSpotlightEffectProps> = ({
  src,
  alt,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  return (
    <div
      className="relative cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      ref={imageRef}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          filter: isHovered
            ? "grayscale(0%)"
            : "grayscale(100%) brightness(0.7)",
          maskImage: isHovered
            ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, black 20%, transparent 60%)`
            : "none",
          WebkitMaskImage: isHovered
            ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, black 20%, transparent 60%)`
            : "none",
        }}
        className="select-none"
      />

      {/* Spotlight overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, transparent 10%, rgba(0,0,0,0.8) 50%)`,
            mixBlendMode: "multiply",
          }}
        />
      )}
    </div>
  );
};
