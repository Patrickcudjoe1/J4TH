'use client';

import PremiumNavBar from '@/components/PremiumNavBar';
import HeroSection from '@/components/HeroSection';
import SplitPromo from '@/components/SplitPromo';
import ProductGrid from '@/components/ProductGrid';
import heroImageMobile from '@/assets/J4-19.png';
import heroImageDesktop from '@/assets/J4-8.png';
import promoLeftImage from '@/assets/J4-9.jpg';
import promoRightImage from '@/assets/J4-13.jpg';

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Premium Navigation Bar */}
      <PremiumNavBar
        onSearchClick={() => console.log('Search clicked')}
        onAccountClick={() => console.log('Account clicked')}
        onCartClick={() => console.log('Cart clicked')}
        cartCount={0}
      />

      {/* Hero Section */}
      <HeroSection
        backgroundImageMobile={heroImageMobile.src}
        backgroundImageDesktop={heroImageDesktop.src}
        title="JUNE FORTH*"
        subtitle="faith driven premium wear."
      // scriptureRef="HABAKKUK 2:2"
      // scriptureText="AND THE LORD ANSWERED ME AND SAID WRITE THE VISION AND MAKE IT PLAIN, THAT HE MAY RUN THAT READETH IT..."
      // thumbnailImage={heroImageMobile.src}
      />

      {/* Split Promotional Section */}
      <SplitPromo
        leftPromo={{
          backgroundImage: promoLeftImage.src,
          label: "June Forth",
          headline: "Mono Black Esse Tee",
          buttonText: "Shop",
          onClick: () => console.log('Left promo clicked')
        }}
        rightPromo={{
          backgroundImage: promoRightImage.src,
          label: "Just In",
          headline: "June & Co OG Jersey",
          buttonText: "Shop",
          onClick: () => console.log('Right promo clicked')
        }}
      />

      {/* Product Section */}
      <ProductGrid />

      {/* Compact Footer (white background, black text) */}
      <footer className="bg-white text-black py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-black transition">Instagram</a>
            <a href="#" className="hover:text-black transition">Twitter</a>
          </div>

          <div className="flex items-center gap-4 text-gray-600">
            <span>&copy; 2026</span>
            <a href="#" className="hover:text-black transition">Privacy</a>
            <a href="#" className="hover:text-black transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
