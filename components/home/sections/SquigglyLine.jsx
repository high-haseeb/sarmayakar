'use client'
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
const SquigglyLine = ({ path, viewBox }) => {
  const [isInView, setIsInView] = useState(false);
  const [pathLength, setPathLength] = useState(0);
  const ref = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      pathRef.current.style.setProperty('--path-length', length);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && ref.current) {
      // Force reflow to restart animation
      ref.current.style.animation = "none";
      ref.current.offsetHeight; // Trigger reflow
      ref.current.style.animation = "";
    }
  }, [isInView]);

  return (
    <div className="absolute inset-0">
      <svg
        ref={ref}
        className="w-screen h-screen"
        preserveAspectRatio="xMidYMid meet"
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
      >
        <path
          ref={pathRef}
          d={path}
          stroke="#0B72B7"
          strokeWidth="10"
          fill="none"
          className={classNames("", {
            "animate-draw": isInView,
          })}
        />
      </svg>
    </div>
  );
};
export default SquigglyLine;
