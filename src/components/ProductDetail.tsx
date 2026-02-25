'use client';

import React, { useState, useRef } from 'react';

interface ProductDetailProps {
  name?: string;
  price?: string;
  images?: string[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  name = '[Insert Product Name]',
  price = '[Insert Price]',
  images = [
    'https://via.placeholder.com/800x1000/000000/ffffff?text=Image+1',
    'https://via.placeholder.com/800x1000/111111/ffffff?text=Image+2',
    'https://via.placeholder.com/800x1000/222222/ffffff?text=Image+3',
  ],
}) => {
  const [index, setIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = [
    { id: 'blk', label: 'Black', swatch: '#000' },
    { id: 'gry', label: 'Grey', swatch: '#8b8b8b' },
    { id: 'bei', label: 'Beige', swatch: '#d2b48c' },
  ];

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  let touchStartX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 40) prev();
    if (dx < -40) next();
  };

  return (
    <div className="w-full bg-white text-black min-h-screen">
      {/* Mobile: full-width carousel; Desktop: sticky left gallery */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 px-4 md:px-8 py-6">

        {/* Gallery / Carousel */}
        <div className="md:w-1/2 md:sticky md:top-6">
          <div
            ref={carouselRef}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="relative w-full overflow-hidden bg-neutral-100 rounded-lg"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src={images[index]}
              alt={`${name} ${index + 1}`}
              className="w-full h-full object-contain transition-transform duration-300"
            />

            {/* Controls */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-black rounded-full w-9 h-9 flex items-center justify-center shadow-sm"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-black rounded-full w-9 h-9 flex items-center justify-center shadow-sm"
            >
              ›
            </button>

            {/* Swipe indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === index ? 'bg-black' : 'bg-black/20'}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop thumbnail strip */}
          <div className="hidden md:flex gap-3 mt-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-20 h-28 rounded overflow-hidden border ${i === index ? 'ring-1 ring-black' : 'border-transparent'}`}
              >
                <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{name}</h1>
            <div className="flex items-center gap-3 mt-2">
              <div className="text-xl font-semibold">${price}</div>
              <div className="text-sm text-gray-600">4.8/5 ★</div>
            </div>
          </div>

          {/* Selections */}
          <div className="flex flex-col gap-3">
            <div>
              <div className="text-xs uppercase text-gray-600 mb-2">Size</div>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-3 py-2 rounded-full border ${selectedSize === s ? 'bg-black text-white' : 'bg-white text-black'} text-sm`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase text-gray-600 mb-2">Color</div>
              <div className="flex gap-3">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedColor(c.id)}
                    aria-label={c.label}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border ${selectedColor === c.id ? 'ring-2 ring-black' : ''}`}
                    style={{ background: c.swatch }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Read more accordion (mobile) / full details (desktop) */}
          <div className="mt-2">
            <div className="md:hidden">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="text-sm text-gray-700"
              >
                {expanded ? 'Hide' : 'Read More'}
              </button>
              {expanded && (
                <div className="mt-2 text-sm text-gray-700">
                  Long product description, benefits and materials go here. Minimal, focused copy.
                </div>
              )}
            </div>

            <div className="hidden md:grid md:grid-cols-2 md:gap-6 md:mt-4 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">Benefits</h3>
                <p>Performance fabric, water resistant finish, clean tailoring.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technical Specs</h3>
                <ul className="list-disc pl-5">
                  <li>Material: 100% recycled polyester</li>
                  <li>Weight: 420g</li>
                  <li>Care: Machine wash cold</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social proof & Reviews */}
          <div className="mt-4">
            <h4 className="text-sm font-semibold">Customer Reviews</h4>
            <div className="mt-2 text-sm text-gray-700">4.8/5 average • Verified buyers</div>

            {/* Photo upload / gallery placeholder */}
            <div className="mt-3 flex gap-3 items-center">
              <div className="grid grid-cols-4 gap-2">
                {/* Placeholder thumbs */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-16 h-16 bg-gray-100 rounded overflow-hidden" />
                ))}
              </div>
              <label className="ml-3 text-sm text-gray-600 cursor-pointer">
                <input type="file" accept="image/*" className="hidden" />
                Upload photo
              </label>
            </div>
          </div>

        </div>
      </div>

      {/* Sticky add-to-cart on mobile */}
      <div className="fixed bottom-0 left-0 right-0 md:static md:mt-6 bg-white border-t md:border-none py-3 md:py-0 px-4 md:px-0">
        <div className="max-w-6xl mx-auto md:flex md:justify-center">
          <button className="w-full md:w-1/2 bg-black text-white py-3 rounded-full font-semibold">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
