"use client";

import React from 'react';
import { User } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Blogs = () => {
    const blogs = [
        {
            category: 'WEB',
            color: 'bg-pink-500',
            title: 'Build a Serverless URL Shortener App',
            author: 'Amey Joshi',
            date: '2024-06-05',
        },
        {
            category: 'AI/ML',
            color: 'bg-purple-500',
            title: 'Online Pathology Platform using React and DynamoDB',
            author: 'Girish Kale',
            date: '2024-07-14',
        }
    ];

    return (
        <section id="blogs" className="py-20 px-4 bg-white dark:bg-navy-purple transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Blogs" />

                {/* Category Tags */}
                <div className="flex justify-center gap-4 mb-12">
                    {['WEB', 'AI/ML', 'AWS', 'AI'].map(tag => (
                        <span key={tag} className="px-4 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-xs text-gray-500 dark:text-gray-400">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {blogs.map((blog, idx) => (
                        <div key={idx} className="group rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-card-dark border border-gray-100 dark:border-navy-card/50 hover:-translate-y-2 transition-transform duration-300">
                            {/* Thumbnail */}
                            <div className="h-64 bg-gray-200 dark:bg-navy-purple relative group-hover:scale-105 transition-transform duration-500">
                                {/* Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    Blog Thumbnail
                                </div>
                            </div>

                            <div className="p-8">
                                <span className={`${blog.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                                    {blog.category}
                                </span>
                                <h3 className="text-2xl font-bold text-brand-dark dark:text-white mt-4 mb-6 leading-tight group-hover:text-brand dark:group-hover:text-royal-purple transition-colors">
                                    {blog.title}
                                </h3>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                        <User size={20} className="text-gray-500 dark:text-gray-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-brand-dark dark:text-white">{blog.author}</p>
                                        <p className="text-xs text-gray-400">{blog.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow">
                        See All Blogs
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Blogs;
