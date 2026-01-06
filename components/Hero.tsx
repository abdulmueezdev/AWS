"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const { theme } = useTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Canvas Animation Logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off walls
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                // Theme-based colors
                ctx.fillStyle = theme === 'dark'
                    ? 'rgba(96, 81, 155, 0.5)' // Faint Royal Purple
                    : 'rgba(150, 150, 150, 0.5)'; // Faint Gray
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth / 15, 100); // Responsive count
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();

                // Connect particles
                particles.forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = theme === 'dark'
                            ? `rgba(96, 81, 155, ${1 - distance / 150})`
                            : `rgba(150, 150, 150, ${1 - distance / 150})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Initial setup
        handleResize();
        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Re-run when theme changes to update colors

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-navy-purple transition-colors duration-300">

            {/* Background Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
            />

            {/* Content Overlay */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-brand-dark dark:text-white"
                >
                    AWS Cloud Club PWR
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10"
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

                    <button className="bg-transparent border-2 border-brand-dark dark:border-white text-brand-dark dark:text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-brand-dark hover:text-white dark:hover:bg-white dark:hover:text-navy-purple transition-all flex items-center justify-center gap-2 group">
                        Upcoming Events
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
