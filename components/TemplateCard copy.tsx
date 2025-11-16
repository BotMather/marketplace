"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Template {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  sales: number;
}

interface TemplateCardProps {
  id: number;
  name: string;
  category: string;
  price: number | string;
  originalPrice?: number | string;
  image?: string | null;
  rating: number | string;
  sales: number;
}

export default function TemplateCard({
  id,
  name,
  category,
  price,
  originalPrice,
  image,
  rating,
  sales,
}: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !id) {
    return (
      <div className="h-96 animate-pulse rounded-xl border border-white/10 bg-white/5" />
    );
  }

  const priceNum = typeof price === "string" ? parseFloat(price) : price;
  const ratingNum = typeof rating === "string" ? parseFloat(rating) : rating;

  return (
    <Link href={`/templates/${id}`}>
      <div
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 transition-all duration-500 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10" />

        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem]" />

          {/* Placeholder Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`transition-all duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
            >
              <svg
                className="h-20 w-20 text-blue-400/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
            {category}
          </div>

          {/* Rating Badge */}
          <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
            <svg
              className="h-3 w-3 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {ratingNum.toFixed(1)}
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          <h3 className="mb-2 text-xl font-bold text-white">{name}</h3>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <div>
              {originalPrice && (
                <div className="text-xs text-gray-500 line-through">
                  $
                  {typeof originalPrice === "string"
                    ? parseFloat(originalPrice).toFixed(2)
                    : originalPrice.toFixed(2)}
                </div>
              )}
              <div className="text-2xl font-bold text-white">
                ${priceNum.toFixed(2)}
              </div>
              <div className="text-xs text-gray-400">{sales} sales</div>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2.5 text-center font-medium text-white">
              View Details
            </div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-blue-500/0 transition-all duration-300 group-hover:border-blue-500/50" />
      </div>
    </Link>
  );
}
