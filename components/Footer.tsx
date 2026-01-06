"use client";

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark dark:bg-navy-purple text-white py-8 border-t border-gray-800 dark:border-navy-card">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                    © 2026 AWS Cloud Club ISIMS. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
