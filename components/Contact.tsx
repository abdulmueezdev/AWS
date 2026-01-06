"use client";

import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Instagram, Users } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-section-gray dark:bg-navy-purple transition-colors duration-300">
            <div className="max-w-6xl mx-auto">

                <div className="bg-white dark:bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">

                    {/* Left: Form */}
                    <div className="flex-1 p-8 md:p-12 lg:p-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
                        <p className="text-gray-500 mb-10">Fill out the form below and we'll get back to you soon.</p>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Name*</label>
                                <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email*</label>
                                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Phone number*</label>
                                <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                                <textarea rows={4} placeholder="Enter your description" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"></textarea>
                            </div>

                            <button type="button" className="w-full bg-navy-purple text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-opacity">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right: Info Panel */}
                    <div className="bg-navy-purple lg:w-[45%] p-12 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                        {/* Illustration Placeholder */}
                        <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm relative z-10">
                            <div className="text-6xl">🎧</div>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center justify-center gap-3">
                                <Phone size={20} />
                                <span>+91 7262825258</span>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <MapPin size={20} />
                                <span>PICT, Pune</span>
                            </div>

                            <div className="flex justify-center gap-6 mt-8">
                                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                                    <Users size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Decorative Circles */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-royal-purple/30 rounded-full blur-3xl"></div>
                        <div className="absolute top-12 left-12 w-32 h-32 bg-royal-purple/30 rounded-full blur-2xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
