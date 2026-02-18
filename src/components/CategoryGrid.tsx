'use client';

import React, { useState } from 'react';

interface CategoryCard {
  id: string;
  image: string;
  buttonText: string;
  onClick?: () => void;
}

interface CategoryGridProps {
  categories: CategoryCard[];
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#f5f5f5] py-[80px] md:py-[80px] px-5 md:px-20">
      {/* Desktop Grid Layout (≥768px) */}
      <div className="hidden md:block max-w-[1400px] mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.buttonText}
                className="w-full h-full object-cover transition-transform duration-300"
                style={{
                  transform: hoveredId === category.id ? 'scale(1.05)' : 'scale(1)',
                }}
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

              {/* CTA Button */}
              <button
                className="absolute bottom-5 left-5 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:opacity-85 transition-opacity duration-200 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  category.onClick?.();
                }}
              >
                {category.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Horizontal Scroll Layout (<768px) */}
      <div className="md:hidden max-w-[1400px] mx-auto">
        <div
          className="flex overflow-x-auto gap-4 px-5 pb-4"
          style={{
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 relative overflow-hidden group cursor-pointer"
              style={{
                width: '80vw',
                aspectRatio: '4/5',
                scrollSnapAlign: 'start',
              }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.buttonText}
                className="w-full h-full object-cover"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

              {/* CTA Button */}
              <button
                className="absolute bottom-5 left-5 px-4 py-2 bg-white text-black rounded-full text-sm font-medium active:opacity-85 transition-opacity duration-200 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  category.onClick?.();
                }}
              >
                {category.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;