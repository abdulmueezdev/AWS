"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Blogs', href: '#blogs' },
        { name: 'Members', href: '#members' },
        { name: 'Contact Us', href: '#contact' },
    ];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-50 px-4">
            {/* Container: Floating pill-shaped */}
            <div className="bg-white dark:bg-navy-purple rounded-full shadow-xl px-6 py-4 flex items-center justify-between transition-colors duration-300 relative border border-gray-100 dark:border-navy-card">

                {/* Left: Logo Placeholder */}
                <div className="flex items-center shrink-0">
                    <div className="w-32 h-8 bg-gray-200 dark:bg-card-dark rounded flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400">
                        AWS Cloud Club
                    </div>
                </div>

                {/* Center: Navigation Links (Desktop) */}
                <div className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-brand-dark dark:text-text-light hover:text-brand dark:hover:text-royal-purple font-medium text-sm transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right: Join Us Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <ThemeToggle />
                    <button className="bg-black dark:bg-royal-purple text-white px-6 py-2.5 rounded-full font-medium hover:scale-105 transition-transform duration-200 text-sm">
                        Join US
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-brand-dark dark:text-text-light p-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Content */}
            {isOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-full px-4 lg:hidden">
                    <div className="bg-white dark:bg-navy-purple rounded-3xl shadow-2xl p-6 flex flex-col gap-4 border border-gray-100 dark:border-navy-card">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-brand-dark dark:text-text-light font-medium text-lg text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="bg-black dark:bg-royal-purple text-white w-full py-3 rounded-full font-medium mt-2">
                            Join US
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
