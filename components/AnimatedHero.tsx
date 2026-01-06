"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShaderBackground from "./ShaderBackground";

function AnimatedHero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["Innovators", "Builders", "Cloud Architects", "Future Leaders"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2500);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

            {/* WebGL Shader Background */}
            <ShaderBackground />

            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>

            {/* Hero Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center justify-center gap-8 py-20">

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center text-white drop-shadow-2xl">
                        AWS Cloud Club PWR
                    </h1>

                    {/* Animated "We are..." Text - Perfectly Centered */}
                    <div className="flex items-center justify-center gap-3 my-4 min-h-[60px] md:min-h-[80px]">
                        <span className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white/90 drop-shadow-lg">
                            We are
                        </span>

                        {/* Animated Word - Positioned Relative to Center */}
                        <div className="relative h-full flex items-center justify-center min-w-[200px] md:min-w-[300px] lg:min-w-[400px]">
                            {titles.map((title, index) => (
                                <motion.span
                                    key={index}
                                    className="absolute text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)] whitespace-nowrap"
                                    initial={{ opacity: 0, y: -100 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 20
                                    }}
                                    animate={
                                        titleNumber === index
                                            ? {
                                                y: 0,
                                                opacity: 1,
                                            }
                                            : {
                                                y: titleNumber > index ? -150 : 150,
                                                opacity: 0,
                                            }
                                    }
                                >
                                    {title}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 max-w-3xl text-center px-4 mt-2 drop-shadow-lg">
                        Empowering students to become cloud technology leaders.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Button
                            size="lg"
                            className="gap-3 bg-amber-500 text-white hover:bg-amber-600 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all transform hover:scale-105 rounded-full px-10 py-6 font-bold text-lg"
                        >
                            <Users className="w-5 h-5" />
                            Join the Community
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="gap-3 border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-purple-900 transition-all rounded-full px-10 py-6 font-bold text-lg"
                        >
                            <Calendar className="w-5 h-5" />
                            Upcoming Events
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { AnimatedHero };
