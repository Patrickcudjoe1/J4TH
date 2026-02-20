'use client';

import PremiumNavBar from '@/components/PremiumNavBar';
import HeroSection from '@/components/HeroSection';
import SplitPromo from '@/components/SplitPromo';
import CategoryGrid from '@/components/CategoryGrid';
import heroImageMobile from '@/assets/J4-12.jpg';
import heroImageDesktop from '@/assets/J4-8.png';
import promoLeftImage from '@/assets/J4-9.jpg';
import promoRightImage from '@/assets/J4-13.jpg';
import categoryImage1 from '@/assets/J4-17.jpg';
import categoryImage2 from '@/assets/J4-10.jpg';
import categoryImage3 from '@/assets/J4-14.jpg';

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

      {/* Category Grid Section */}
      <CategoryGrid
        categories={[
          {
            id: 'fruitful',
            image: categoryImage1.src,
            buttonText: 'Shop Fruitful',
            onClick: () => console.log('Fruitful clicked')
          },
          {
            id: 'esse',
            image: categoryImage2.src,
            buttonText: 'Shop Esse',
            onClick: () => console.log('Esse clicked')
          },
          {
            id: 'divine-speed',
            image: categoryImage3.src,
            buttonText: 'Shop Divine Speed',
            onClick: () => console.log('Divine Speed clicked')
          }
        ]}
      />

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">J4TH</h3>
            <p className="text-sm text-gray-400">Premium sportswear and lifestyle products.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">SHOP</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">All Products</a></li>
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition">Collections</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">LEGAL</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 J4TH. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
