"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ShaderBackground from './ShaderBackground';

const Hero = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">

            {/* WebGL Shader Background */}
            <ShaderBackground />

            {/* Content Overlay */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
                >
                    AWS Cloud Club PWR
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-200 mb-10 drop-shadow-md"
                >
                    Empowering students to become cloud technology leaders.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="bg-brand text-brand-dark px-8 py-3 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,153,0,0.5)] transition-all transform hover:scale-105">
                        Join the Community
                    </button>

                    <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-navy-purple transition-all flex items-center justify-center gap-2 group">
                        Upcoming Events
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
