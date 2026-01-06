/*
 * PastEvents Component - Manual Event Management
 * 
 * TO ADD A NEW EVENT:
 * 1. Copy the event object structure below
 * 2. Paste it at the TOP of the pastEvents array (Index 0)
 * 3. Update the id, title, date, link, and image fields
 * 4. This will automatically push older events down
 * 
 * Example:
 * {
 *   id: "NEW_EVENT_ID",
 *   title: "Your Event Name",
 *   date: "Month DD, YYYY",
 *   link: "https://www.meetup.com/aws-cloud-club-at-nuces/events/EVENT_ID/",
 *   image: DEFAULT_EVENT_IMAGE
 * }
 */

"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';

// Default placeholder image path
const DEFAULT_EVENT_IMAGE = "/images/default-event.jpg";

const PastEvents = () => {
    // Past Events Array - NEWEST FIRST
    const pastEvents = [
        // PASTE NEW EVENTS HERE (At the top)
        {
            id: "312619914",
            title: "AWS Workshop Event", // Update this manually
            date: "December 2024", // Update this manually
            link: "https://www.meetup.com/aws-cloud-club-at-nuces/events/312619914/",
            image: DEFAULT_EVENT_IMAGE
        },
        {
            id: "312034873",
            title: "AWS Workshop Event",
            date: "November 2024",
            link: "https://www.meetup.com/aws-cloud-club-at-nuces/events/312034873/",
            image: DEFAULT_EVENT_IMAGE
        },
        {
            id: "311685625",
            title: "AWS Workshop Event",
            date: "November 2024",
            link: "https://www.meetup.com/aws-cloud-club-at-nuces/events/311685625/",
            image: DEFAULT_EVENT_IMAGE
        },
        {
            id: "309203407",
            title: "AWS Workshop Event",
            date: "October 2024",
            link: "http://meetup.com/aws-cloud-club-at-nuces/events/309203407/",
            image: DEFAULT_EVENT_IMAGE
        },
        {
            id: "300406674",
            title: "AWS Workshop Event",
            date: "May 2024",
            link: "https://www.meetup.com/aws-cloud-club-at-nuces/events/300406674/",
            image: DEFAULT_EVENT_IMAGE
        },
        {
            id: "297638630",
            title: "AWS Workshop Event",
            date: "March 2024",
            link: "https://www.meetup.com/aws-cloud-club-at-nuces/events/297638630/",
            image: DEFAULT_EVENT_IMAGE
        }
    ];

    return (
        <section className="py-20 px-4 bg-white dark:bg-navy-purple transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-dark dark:from-royal-purple dark:to-white mb-2">
                        Past Events
                    </h2>
                    <div className="w-20 h-1 bg-brand dark:bg-royal-purple mx-auto rounded-full"></div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pastEvents.map((event) => (
                        <a
                            key={event.id}
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-section-gray dark:bg-card-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                            {/* Event Image */}
                            <div className="relative aspect-video bg-gray-300 dark:bg-gray-700 overflow-hidden">
                                {/* Placeholder for image - replace with actual image when available */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                                    <span className="text-sm font-medium">Event Photo</span>
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ExternalLink className="text-white" size={32} />
                                </div>
                            </div>

                            {/* Event Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-2 group-hover:text-brand dark:group-hover:text-royal-purple transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    {event.date}
                                </p>
                                <div className="flex items-center gap-2 text-brand dark:text-royal-purple font-medium text-sm">
                                    View Details
                                    <ExternalLink size={16} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PastEvents;
