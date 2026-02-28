'use client';
import React from 'react';
import ProductDetail from '@/components/ProductDetail';

const PRODUCTS: Record<string, { name: string; price: string; images: string[] }> = {
    '1': { name: 'Black Glossy Fur Hood Puffer Jacket', price: '980', images: ['https://via.placeholder.com/1000x1250/000000/FFFFFF?text=PK-01'] },
    '2': { name: 'Black Bomber Jacket', price: '420', images: ['https://via.placeholder.com/1000x1250/000000/FFFFFF?text=JC-10'] },
    '3': { name: 'Black Utility Jacket', price: '450', images: ['https://via.placeholder.com/1000x1250/000000/FFFFFF?text=JC-11'] },
    '4': { name: 'Black Ankle Boot', price: '320', images: ['https://via.placeholder.com/1000x1250/000000/FFFFFF?text=SL-03'] },
    '5': { name: 'Black Slip On Shoe', price: '210', images: ['https://via.placeholder.com/1000x1250/000000/FFFFFF?text=BL-01'] },
    '6': { name: 'Black Rectangular Sunglasses', price: '180', images: ['https://via.placeholder.com/1000x1250/000000/FFFFFF?text=SG-03'] },
    '7': { name: 'Black Backpack', price: '260', images: ['https://via.placeholder.com/1000x1250/000000/FFFFFF?text=BP-02'] },
    '8': { name: 'Grey Camo Puffer with White Hood', price: '980', images: ['https://via.placeholder.com/1000x1250/808080/FFFFFF?text=PK-01'] },
    '9': { name: 'Grey Jeans', price: '150', images: ['https://via.placeholder.com/1000x1250/808080/FFFFFF?text=WD-02'] },
    '10': { name: 'Grey Slide', price: '60', images: ['https://via.placeholder.com/1000x1250/808080/FFFFFF?text=SL-01'] },
    '11': { name: 'Beige Long Coat', price: '650', images: ['https://via.placeholder.com/1000x1250/D2B48C/FFFFFF?text=CT-01'] },
    '12': { name: 'Green Duffel Bag', price: '220', images: ['https://via.placeholder.com/1000x1250/008000/FFFFFF?text=BG-03'] },
};

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = PRODUCTS[params.id] || { name: '[Unknown Product]', price: '0', images: ['https://via.placeholder.com/1000x1250/cccccc/000000?text=No+Image'] };

    return <ProductDetail name={product.name} price={product.price} images={product.images} />;
}
