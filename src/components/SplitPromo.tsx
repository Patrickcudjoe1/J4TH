'use client';

import React, { useState } from 'react';

interface PromoBlockProps {
  backgroundImage: string;
  label: string;
  headline: string;
  buttonText: string;
  onClick?: () => void;
}

const PromoBlock: React.FC<PromoBlockProps> = ({
  backgroundImage,
  label,
  headline,
  buttonText,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden cursor-pointer group transition-transform duration-300"
      style={{
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          objectFit: 'cover',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 md:p-12 p-6 text-white max-w-full">
        {/* Label */}
        <p className="text-sm md:text-sm font-medium opacity-80 mb-0">
          {label}
        </p>

        {/* Headline */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2 mb-5">
          {headline}
        </h2>

        {/* Button */}
        <button
          className="inline-block px-5 py-2.5 bg-white text-black rounded-full font-medium text-sm transition-opacity duration-200 hover:opacity-85"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

interface SplitPromoProps {
  leftPromo: {
    backgroundImage: string;
    label: string;
    headline: string;
    buttonText: string;
    onClick?: () => void;
  };
  rightPromo: {
    backgroundImage: string;
    label: string;
    headline: string;
    buttonText: string;
    onClick?: () => void;
  };
}

export const SplitPromo: React.FC<SplitPromoProps> = ({
  leftPromo,
  rightPromo,
}) => {
  return (
    <section className="w-full">
      {/* Desktop Layout - 2 Columns */}
      <div className="hidden md:flex h-[90vh] lg:h-screen">
        <div className="w-1/2">
          <PromoBlock
            backgroundImage={leftPromo.backgroundImage}
            label={leftPromo.label}
            headline={leftPromo.headline}
            buttonText={leftPromo.buttonText}
            onClick={leftPromo.onClick}
          />
        </div>
        <div className="w-1/2">
          <PromoBlock
            backgroundImage={rightPromo.backgroundImage}
            label={rightPromo.label}
            headline={rightPromo.headline}
            buttonText={rightPromo.buttonText}
            onClick={rightPromo.onClick}
          />
        </div>
      </div>

      {/* Mobile Layout - Stacked */}
      <div className="md:hidden flex flex-col">
        <PromoBlock
          backgroundImage={leftPromo.backgroundImage}
          label={leftPromo.label}
          headline={leftPromo.headline}
          buttonText={leftPromo.buttonText}
          onClick={leftPromo.onClick}
        />
        <PromoBlock
          backgroundImage={rightPromo.backgroundImage}
          label={rightPromo.label}
          headline={rightPromo.headline}
          buttonText={rightPromo.buttonText}
          onClick={rightPromo.onClick}
        />
      </div>
    </section>
  );
};

export default SplitPromo;