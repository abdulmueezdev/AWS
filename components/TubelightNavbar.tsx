"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Info, Calendar, BookOpen, Users, Mail, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

interface NavItem {
    name: string;
    href: string;
    icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}

const TubelightNavbar = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems: NavItem[] = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '#about', icon: Info },
        { name: 'Events', href: '#events', icon: Calendar },
        { name: 'Blogs', href: '#blogs', icon: BookOpen },
        { name: 'Members', href: '#members', icon: Users },
        { name: 'Contact Us', href: '#contact', icon: Mail },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-50 px-4">
                {/* Main Navbar Container */}
                <div className="bg-white/80 dark:bg-navy-purple/80 backdrop-blur-lg rounded-full shadow-xl px-6 py-3 flex items-center justify-between transition-colors duration-300 border border-gray-200 dark:border-navy-card">

                    {/* Left: Logo */}
                    <div className="flex items-center shrink-0">
                        <div className="px-4 py-2 bg-gray-100 dark:bg-card-dark rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-brand-dark dark:text-white whitespace-nowrap">
                                AWS Cloud Club
                            </span>
                        </div>
                    </div>

                    {/* Center: Tubelight Navigation Links (Desktop) */}
                    <div className="hidden lg:flex items-center gap-2 mx-4">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.name;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setActiveTab(item.name)}
                                    className={cn(
                                        "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300",
                                        "text-brand-dark dark:text-gray-300",
                                        isActive && "text-brand dark:text-royal-purple",
                                        // Light mode: Elevation shadow
                                        isActive && "shadow-[0_2px_8px_rgba(0,0,0,0.15)]",
                                        // Dark mode: Orange glow
                                        isActive && "dark:shadow-[0_0_20px_rgba(255,153,0,0.6)]"
                                    )}
                                >
                                    {item.name}

                                    {/* Tubelight Effect */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="tubelight"
                                            className={cn(
                                                "absolute inset-0 rounded-full -z-10 transition-colors duration-300",
                                                // Light mode: Faint orange tint
                                                "bg-[#FFF5E5]",
                                                // Dark mode: Purple tint
                                                "dark:bg-royal-purple/10"
                                            )}
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        >
                                            {/* Top Glow - Only visible in dark mode */}
                                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-transparent dark:bg-royal-purple rounded-t-full opacity-0 dark:opacity-100 transition-opacity">
                                                <div className="absolute w-12 h-6 bg-royal-purple/30 rounded-full blur-md -top-2 -left-2" />
                                                <div className="absolute w-8 h-6 bg-royal-purple/40 rounded-full blur-md -top-1" />
                                                <div className="absolute w-4 h-4 bg-royal-purple/50 rounded-full blur-sm top-0 left-2" />
                                            </div>
                                        </motion.div>
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right: Theme Toggle + Join Us Button (Desktop) */}
                    <div className="hidden lg:flex items-center gap-3 shrink-0">
                        <ThemeToggle />
                        <button className="bg-black dark:bg-royal-purple text-white px-6 py-2.5 rounded-full font-medium hover:scale-105 transition-transform duration-200 text-sm whitespace-nowrap">
                            Join US
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden text-brand-dark dark:text-white p-1"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-3 lg:hidden">
                        <div className="bg-white dark:bg-navy-purple rounded-3xl shadow-2xl p-6 mx-4 border border-gray-200 dark:border-navy-card">
                            <div className="flex flex-col gap-4">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => {
                                                setActiveTab(item.name);
                                                setIsMenuOpen(false);
                                            }}
                                            className="flex items-center gap-3 text-brand-dark dark:text-white font-medium text-lg py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-card-dark transition-colors"
                                        >
                                            <Icon size={20} />
                                            {item.name}
                                        </Link>
                                    );
                                })}

                                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <ThemeToggle />
                                    <button className="bg-black dark:bg-royal-purple text-white px-6 py-3 rounded-full font-medium">
                                        Join US
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default TubelightNavbar;
