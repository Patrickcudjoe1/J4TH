'use client';

import React from 'react';

interface HeroProps {
    backgroundImageMobile?: string;
    backgroundImageDesktop?: string;
    backgroundImage?: string;
    title: string;
    subtitle: string;
    scriptureText?: string;
    scriptureRef?: string;
    thumbnailImage?: string;
}

export const HeroSection: React.FC<HeroProps> = ({
    backgroundImageMobile,
    backgroundImageDesktop,
    backgroundImage,
    title,
    subtitle,
    scriptureText,
    scriptureRef,
    thumbnailImage,
}) => {
    // Use separate mobile/desktop images if provided, otherwise fall back to single image
    const mobileImage = backgroundImageMobile || backgroundImage;
    const desktopImage = backgroundImageDesktop || backgroundImage;

    return (
        <div className="h-screen w-full overflow-hidden relative flex-shrink-0">
            {/* Mobile Background Image */}
            <div
                className="absolute inset-0 md:hidden bg-cover bg-center"
                style={{
                    backgroundImage: `url('${mobileImage}')`,
                    filter: 'contrast(1.05) brightness(0.98)',
                }}
            />
            {/* Desktop Background Image */}
            <div
                className="hidden md:block absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${desktopImage}')`,
                    filter: 'contrast(1.02) brightness(0.95)',
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

            {/* Content Container */}
            <div className="relative h-full flex items-center justify-between px-8 md:px-16">
                {/* Left Side - Headline */}
                <div className="mt-20 md:mt-0 z-10 flex-1">
                    <h1 className="text-white uppercase leading-[0.85] tracking-tighter">
                        <div className="text-[clamp(3rem,12vw,9rem)] font-black">{title.split(' ')[0]}</div>
                        <div className="text-[clamp(3rem,12vw,9rem)] font-black">{title.split(' ')[1]}</div>
                    </h1>
                    <p className="text-white/80 mt-6 max-w-sm text-sm md:text-base">{subtitle}</p>
                </div>

                {/* Right Side - Card */}
                {scriptureText && (
                    <div className="hidden md:flex absolute bottom-12 right-12 z-10 items-end gap-4">
                        {/* Text Block */}
                        <div className="text-white text-xs uppercase leading-relaxed max-w-[200px]">
                            <span className="text-[#E07E3F] font-bold">{scriptureRef}</span>
                            <br />
                            {scriptureText}
                        </div>

                        {/* Thumbnail Image */}
                        {thumbnailImage && (
                            <div className="relative">
                                <div className="w-40 h-48 bg-gray-900 overflow-hidden">
                                    <img
                                        src={thumbnailImage}
                                        alt="Thumbnail"
                                        className="h-full w-full object-cover grayscale"
                                    />
                                </div>
                                <div className="text-white text-xs mt-2">06 / 04</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeroSection;
