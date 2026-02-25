'use client';

import React, { useState } from 'react';

interface Product {
    id: string;
    image: string;
    code: string;
}

const ProductGrid: React.FC = () => {
    const products: Product[] = [
        { id: '1', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=PR-01', code: 'PR-01' },
        { id: '2', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=PR-02', code: 'PR-02' },
        { id: '3', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=PR-03', code: 'PR-03' },
        { id: '4', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=PR-04', code: 'PR-04' },
        { id: '5', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=PR-05', code: 'PR-05' },
        { id: '6', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=PR-06', code: 'PR-06' },
        { id: '7', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=PR-07', code: 'PR-07' },
        { id: '8', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=PR-08', code: 'PR-08' },
        { id: '9', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=PR-09', code: 'PR-09' },
        { id: '10', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=PR-10', code: 'PR-10' },
        { id: '11', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=PR-11', code: 'PR-11' },
        { id: '12', image: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=PR-12', code: 'PR-12' },
    ];

    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoomClick = () => {
        setIsZoomed((prev) => !prev);
    };

    const getGridClasses = () => {
        const mobileClass = isZoomed ? 'grid-cols-1' : 'grid-cols-3';
        const desktopClass = isZoomed ? 'md:grid-cols-3' : 'md:grid-cols-6';
        return `${mobileClass} ${desktopClass}`;
    };

    return (
        <section className="w-full bg-white py-8 md:py-12">
            {/* Header with Zoom Button */}
            <div className="flex items-center justify-between px-4 md:px-8 mb-6">
                <button
                    onClick={handleZoomClick}
                    className="text-2xl font-light text-gray-800 hover:text-gray-600 transition-colors"
                    aria-label="Toggle grid zoom"
                >
                    {isZoomed ? '<' : '+'}
                </button>
                <h2 className="text-sm uppercase tracking-wider text-gray-600">Products</h2>
                <div className="w-6" /> {/* Spacer */}
            </div>

            {/* Product Grid */}
            <div
                className={`grid gap-4 md:gap-6 px-4 md:px-8 transition-all duration-300 ease-in-out ${getGridClasses()}`}
            >
                {products.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        {/* Product Image */}
                        <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
                            <img
                                src={product.image}
                                alt={product.code}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        {/* Product Code */}
                        <p className="text-center text-xs uppercase tracking-wider text-gray-800 mt-2 font-light">
                            {product.code}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;