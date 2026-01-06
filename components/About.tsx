"use client";

import React from 'react';
import { Users, Calendar, Target, Award, Heart } from 'lucide-react';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 bg-section-gray dark:bg-navy-purple transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                <SectionTitle title="About AWS Cloud Club" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Mission & Stats */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-brand-dark dark:text-text-light mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                AWS Cloud Club ISIMS is dedicated to helping students learn about cloud computing and AWS services.
                                We provide hands-on experience, workshops, and certification preparation to help members build
                                valuable skills for their future careers.
                            </p>
                            <br />
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                We organize regular meetups, hackathons, and project collaborations that connect students with industry professionals.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 mt-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white dark:bg-card-dark rounded-xl shadow-md text-brand dark:text-royal-purple">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-xl text-brand-dark dark:text-white">100+</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Members</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white dark:bg-card-dark rounded-xl shadow-md text-brand dark:text-royal-purple">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-xl text-brand-dark dark:text-white">Monthly</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Workshops</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Card 1: Vision - Spans 2 cols on mobile/small if needed, or just flow */}
                        <div className="bg-white dark:bg-card-dark p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-navy-card/50 hover:-translate-y-1 transition-transform duration-300 sm:col-span-1">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-navy-purple rounded-full flex items-center justify-center text-brand dark:text-royal-purple mb-4">
                                <Target size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-brand-dark dark:text-white mb-2">Vision</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Empower students to become cloud technology leaders
                            </p>
                        </div>

                        {/* Card 2: Excellence */}
                        <div className="bg-white dark:bg-card-dark p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-navy-card/50 hover:-translate-y-1 transition-transform duration-300 sm:col-span-1">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-navy-purple rounded-full flex items-center justify-center text-brand dark:text-royal-purple mb-4">
                                <Award size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-brand-dark dark:text-white mb-2">Excellence</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Promote excellence in cloud computing education
                            </p>
                        </div>

                        {/* Card 3: Community - Spans full width */}
                        <div className="bg-white dark:bg-card-dark p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-navy-card/50 hover:-translate-y-1 transition-transform duration-300 sm:col-span-2">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-navy-purple rounded-full flex items-center justify-center text-brand dark:text-royal-purple mb-4">
                                <Heart size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-brand-dark dark:text-white mb-2">Community</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Build a passionate community of cloud enthusiasts
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
