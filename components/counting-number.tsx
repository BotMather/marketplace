"use client";

import { useEffect, useRef, useState } from "react";

interface CountingNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export function CountingNumber({
  value,
  suffix = "",
  duration = 2000,
  className = "",
  decimals = 0,
}: CountingNumberProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
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
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = value * easeOut;

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, value, duration]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      const millions = num / 1000000;
      return millions.toFixed(decimals).replace(/\.0+$/, "") + "M";
    } else if (num >= 1000) {
      const thousands = num / 1000;
      return thousands.toFixed(decimals).replace(/\.0+$/, "") + "K";
    }
    return Math.floor(num).toLocaleString();
  };

  // Format the display value
  let displayValue: string;
  if (value >= 1000000) {
    // For millions, show formatted value during animation
    const millions = count / 1000000;
    displayValue = millions.toFixed(decimals).replace(/\.0+$/, "") + "M";
  } else if (value >= 1000) {
    // For thousands, show formatted value during animation
    const thousands = count / 1000;
    displayValue = thousands.toFixed(decimals).replace(/\.0+$/, "") + "K";
  } else {
    // For regular numbers, show integer with commas
    displayValue = Math.floor(count).toLocaleString();
  }

  return (
    <div ref={ref} className={className}>
      {displayValue}
      {suffix}
    </div>
  );
}
