"use client";

import React, { useEffect, useRef, useState } from "react";

// Utility function to concatenate class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NeonGradientCard = ({
  className,
  children,
  ...props
}) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [children]);

  return (
    <div
      ref={containerRef}
      style={{
        "--card-width": `${dimensions.width}px`,
        "--card-height": `${dimensions.height}px`,
      }}
      className={cn(
        "relative z-10 h-full w-full",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "before:absolute before:-z-10 before:block",
          "before:h-[var(--card-height)] before:w-[var(--card-width)] before:content-['']",
          "after:absolute after:-z-10 after:block",
          "after:h-[var(--card-height)] after:w-[var(--card-width)] after:blur-[var(--after-blur)] after:content-['']",
          "dark:bg-neutral-900"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export { NeonGradientCard };
