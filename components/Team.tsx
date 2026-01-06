"use client";

import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Team = () => {
    const [filter, setFilter] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const categories = ['All', 'Captain', 'Core', 'Tech & Dev', 'Outreach', 'Events', 'Content', 'Media'];

    const members = [
        // Captain (1 person)
        { name: 'Captain Name', role: 'Club Captain', category: 'Captain', image: '' },

        // Core (5 members)
        { name: 'Core Member 1', role: 'Core Team', category: 'Core', image: '' },
        { name: 'Core Member 2', role: 'Core Team', category: 'Core', image: '' },
        { name: 'Core Member 3', role: 'Core Team', category: 'Core', image: '' },
        { name: 'Core Member 4', role: 'Core Team', category: 'Core', image: '' },
        { name: 'Core Member 5', role: 'Core Team', category: 'Core', image: '' },

        // Tech & Dev (5 members)
        { name: 'Tech Member 1', role: 'Tech & Dev Team', category: 'Tech & Dev', image: '' },
        { name: 'Tech Member 2', role: 'Tech & Dev Team', category: 'Tech & Dev', image: '' },
        { name: 'Tech Member 3', role: 'Tech & Dev Team', category: 'Tech & Dev', image: '' },
        { name: 'Tech Member 4', role: 'Tech & Dev Team', category: 'Tech & Dev', image: '' },
        { name: 'Tech Member 5', role: 'Tech & Dev Team', category: 'Tech & Dev', image: '' },

        // Outreach (5 members)
        { name: 'Outreach Member 1', role: 'Outreach Team', category: 'Outreach', image: '' },
        { name: 'Outreach Member 2', role: 'Outreach Team', category: 'Outreach', image: '' },
        { name: 'Outreach Member 3', role: 'Outreach Team', category: 'Outreach', image: '' },
        { name: 'Outreach Member 4', role: 'Outreach Team', category: 'Outreach', image: '' },
        { name: 'Outreach Member 5', role: 'Outreach Team', category: 'Outreach', image: '' },

        // Events (5 members)
        { name: 'Events Member 1', role: 'Events Team', category: 'Events', image: '' },
        { name: 'Events Member 2', role: 'Events Team', category: 'Events', image: '' },
        { name: 'Events Member 3', role: 'Events Team', category: 'Events', image: '' },
        { name: 'Events Member 4', role: 'Events Team', category: 'Events', image: '' },
        { name: 'Events Member 5', role: 'Events Team', category: 'Events', image: '' },

        // Content (5 members)
        { name: 'Content Member 1', role: 'Content Team', category: 'Content', image: '' },
        { name: 'Content Member 2', role: 'Content Team', category: 'Content', image: '' },
        { name: 'Content Member 3', role: 'Content Team', category: 'Content', image: '' },
        { name: 'Content Member 4', role: 'Content Team', category: 'Content', image: '' },
        { name: 'Content Member 5', role: 'Content Team', category: 'Content', image: '' },

        // Media (5 members)
        { name: 'Media Member 1', role: 'Media Team', category: 'Media', image: '' },
        { name: 'Media Member 2', role: 'Media Team', category: 'Media', image: '' },
        { name: 'Media Member 3', role: 'Media Team', category: 'Media', image: '' },
        { name: 'Media Member 4', role: 'Media Team', category: 'Media', image: '' },
        { name: 'Media Member 5', role: 'Media Team', category: 'Media', image: '' },
    ];

    const filteredMembers = filter === 'All'
        ? members
        : members.filter(m => m.category === filter);

    // Limit to 8 members initially
    const displayedMembers = showAll ? filteredMembers : filteredMembers.slice(0, 8);
    const hasMoreMembers = filteredMembers.length > 8;

    return (
        <section id="members" className="py-20 px-4 bg-section-gray dark:bg-navy-purple transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                <SectionTitle title="Meet the Team" />

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setFilter(cat);
                                setShowAll(false); // Reset to collapsed when changing filters
                            }}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat
                                ? 'bg-black dark:bg-royal-purple text-white shadow-lg scale-105'
                                : 'bg-white dark:bg-card-dark text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-card'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                    {displayedMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            {/* Avatar */}
                            <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-card-dark mb-4 overflow-hidden border-4 border-white dark:border-navy-card shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                                {/* Placeholder for Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 font-bold text-2xl">
                                    {member.name.charAt(0)}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-1">{member.name}</h3>
                            <p className="text-sm text-brand/80 dark:text-royal-purple font-medium mb-3">{member.role}</p>

                            {/* Socials */}
                            <div className="flex gap-4">
                                <a href="#" className="text-gray-400 hover:text-brand dark:hover:text-royal-purple transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-brand dark:hover:text-royal-purple transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Members Button */}
                {hasMoreMembers && (
                    <div className="text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3 rounded-full border-2 border-brand-dark dark:border-royal-purple bg-transparent text-brand-dark dark:text-royal-purple font-bold hover:bg-brand-dark hover:text-white dark:hover:bg-royal-purple dark:hover:text-white transition-all duration-300"
                        >
                            {showAll ? 'Show Less' : 'View All Members'}
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Team;
