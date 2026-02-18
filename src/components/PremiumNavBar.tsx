'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, ShoppingBag, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PremiumNavBarProps {
    logo?: string;
    onSearchClick?: () => void;
    onAccountClick?: () => void;
    onCartClick?: () => void;
    cartCount?: number;
}

export const PremiumNavBar: React.FC<PremiumNavBarProps> = ({
    logo = 'J4TH',
    onSearchClick,
    onAccountClick,
    onCartClick,
    cartCount = 0,
}) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileDropdowns, setMobileDropdowns] = useState({
        featured: false,
        collections: false,
        newArrivals: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileDropdown = (dropdown: 'featured' | 'collections' | 'newArrivals') => {
        setMobileDropdowns((prev) => ({
            ...prev,
            [dropdown]: !prev[dropdown],
        }));
    };

    const textColor = scrolled ? 'text-black' : 'text-white';
    const bgColor = scrolled ? 'bg-white' : 'bg-transparent';

    const menuItems = [
        {
            label: 'FEATURED',
            id: 'featured',
            subItems: [
                { label: 'CAPS', href: '#' },
                { label: 'TOTE BAGS', href: '#' },
            ],
        },
        {
            label: 'COLLECTIONS',
            id: 'collections',
            subItems: [
                { label: 'PRESENCE', href: '#' },
                { label: 'TRINITY', href: '#' },
            ],
        },
        {
            label: 'NEW ARRIVALS',
            id: 'newArrivals',
            subItems: [
                { label: 'HOODIES', href: '#' },
                { label: 'JERSEYS', href: '#' },
            ],
        },
    ];

    return (
        <>
            {/* DESKTOP & TABLET NAVBAR */}
            <nav
                className={`fixed top-0 left-0 right-0 w-full z-[60] transition-all duration-300 ${bgColor} ${scrolled ? 'shadow-md' : 'shadow-none'
                    }`}
            >
                <div className="max-w-full px-4 sm:px-6 md:px-12 py-2 md:py-2.5">
                    <div className="flex items-center justify-between h-10 md:h-12 relative">
                        {/* LEFT - DESKTOP MENU */}
                        <div className="hidden md:flex items-center gap-10">
                            {menuItems.map((item) => (
                                <div key={item.id} className="relative group flex items-center h-full">
                                    {/* Backdrop overlay on hover */}
                                    <div
                                        className={`fixed inset-0 z-40 pointer-events-none
                      opacity-0 invisible transition-all duration-300 ease-out
                      group-hover:opacity-100 group-hover:visible
                      backdrop-blur-xl
                      ${scrolled ? 'bg-black/20' : 'bg-white/20'}
                    `}
                                    />

                                    {/* Menu button */}
                                    <button
                                        className={`font-light uppercase transition-colors whitespace-nowrap relative z-50 flex items-center h-full text-sm tracking-wider hover:opacity-60 ${textColor}`}
                                    >
                                        {item.label}
                                    </button>

                                    {/* Dropdown */}
                                    <div
                                        className={`absolute left-0 top-full mt-6 w-48 z-50
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-200 ease-out
                      backdrop-blur-md
                      ${scrolled ? 'bg-white/90 text-black' : 'bg-black/80 text-white'}
                    `}
                                    >
                                        <div className="flex flex-col px-4 py-3 space-y-3">
                                            {item.subItems.map((subItem) => (
                                                <a
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity"
                                                >
                                                    {subItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CENTER LOGO */}
                        <div className="flex items-center justify-center">
                            <div className={`text-2xl md:text-xl font-bold tracking-widest ${textColor}`}>
                                {logo}
                            </div>
                        </div>

                        {/* RIGHT - MOBILE HAMBURGER */}
                        <button
                            className={`md:hidden p-2 transition-colors ${textColor}`}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* RIGHT - DESKTOP ICONS */}
                        <div className="hidden md:flex items-center gap-6">
                            <button
                                onClick={onSearchClick}
                                className={`hover:opacity-60 transition-opacity flex items-center justify-center ${textColor}`}
                                aria-label="Search"
                            >
                                <Search size={20} />
                            </button>

                            <button
                                onClick={onAccountClick}
                                className={`hover:opacity-60 transition-opacity flex items-center justify-center ${textColor}`}
                                aria-label="Account"
                            >
                                <User size={20} />
                            </button>

                            <button
                                onClick={onCartClick}
                                className={`hover:opacity-60 relative transition-opacity flex items-center justify-center ${textColor}`}
                                aria-label="Shopping cart"
                            >
                                <ShoppingBag size={20} />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center font-bold">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </div>

                        {/* RIGHT - MOBILE ICONS */}
                        <div className="md:hidden absolute right-12 flex items-center gap-4">
                            <button
                                onClick={onSearchClick}
                                className={`hover:opacity-60 transition-opacity flex items-center justify-center ${textColor}`}
                                aria-label="Search"
                            >
                                <Search size={20} />
                            </button>

                            <button
                                onClick={onCartClick}
                                className={`hover:opacity-60 relative transition-opacity flex items-center justify-center ${textColor}`}
                                aria-label="Shopping cart"
                            >
                                <ShoppingBag size={20} />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center font-bold">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="md:hidden fixed inset-0 z-[45] backdrop-blur-sm bg-black/30"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-50 bg-white overflow-y-auto pt-16"
                        >
                            {/* Close Button */}
                            <div className="flex justify-end p-6 pt-4">
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="text-black hover:opacity-60 transition-opacity"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <div className="px-6 pb-4 space-y-2">
                                {menuItems.map((item) => (
                                    <div key={item.id}>
                                        <button
                                            onClick={() => toggleMobileDropdown(item.id as 'featured' | 'collections' | 'newArrivals')}
                                            className="w-full flex items-center justify-between py-3 text-sm tracking-wider uppercase font-light text-black hover:opacity-60 transition-opacity"
                                        >
                                            <span>{item.label}</span>
                                            <motion.div
                                                animate={{
                                                    rotate: mobileDropdowns[item.id as 'featured' | 'collections' | 'newArrivals'] ? 90 : 0,
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronRight size={16} />
                                            </motion.div>
                                        </button>

                                        {/* Dropdown Items */}
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: mobileDropdowns[item.id as 'featured' | 'collections' | 'newArrivals']
                                                    ? 'auto'
                                                    : 0,
                                                opacity: mobileDropdowns[item.id as 'featured' | 'collections' | 'newArrivals'] ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pb-2 space-y-2 bg-gray-50">
                                                {item.subItems.map((subItem) => (
                                                    <a
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block py-2 text-xs tracking-widest uppercase text-gray-700 hover:text-black transition-colors"
                                                    >
                                                        {subItem.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer Links */}
                            <div className="border-t border-gray-200 mt-6 pt-6 px-6 pb-8 space-y-4">
                                <a
                                    href="#"
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-sm tracking-wider uppercase font-light text-black hover:opacity-60 transition-opacity"
                                >
                                    Account
                                </a>
                                <a
                                    href="#"
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-sm tracking-wider uppercase font-light text-black hover:opacity-60 transition-opacity"
                                >
                                    Contact
                                </a>
                                <a
                                    href="#"
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-sm tracking-wider uppercase font-light text-black hover:opacity-60 transition-opacity"
                                >
                                    Help & Support
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default PremiumNavBar;
