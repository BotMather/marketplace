"use client";

import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  blurAmount?: number;
}

export function BlurText({
  children,
  className = "",
  delay = 0,
  blurAmount = 10,
}: BlurTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsLoaded(true), delay);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        filter: isLoaded
          ? "blur(0px)"
          : isVisible
            ? `blur(${blurAmount}px)`
            : `blur(${blurAmount}px)`,
        opacity: isLoaded ? 1 : isVisible ? 0.5 : 0,
        transition: "filter 0.8s ease-out, opacity 0.8s ease-out",
      }}
    >
      {children}
    </div>
  );
}
