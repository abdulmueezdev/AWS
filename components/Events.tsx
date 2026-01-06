"use client";

import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Events = () => {
    const [upcomingEvent, setUpcomingEvent] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    // Specific RSS Fetch URL as requested
    const RSS_URL = "https://api.rss2json.com/v1/api.json?rss_url=https://www.meetup.com/aws-cloud-club-at-nuces/events/rss/";
    const PAST_EVENTS_URL = "https://www.meetup.com/aws-cloud-club-at-nuces/events/?type=past";

    // Past Events Array - Actual event data
    const pastEvents = [
        {
            id: "312619914",
            title: "AWS Workshop Event",
            date: "December 2024",
            link: "https://www.meetup.com/aws-cloud-club-at-nuces/events/312619914/"
        },
        {
            id: "312034873",
            title: "AWS Workshop Event",
            date: "November 2024",
            link: "https://www.meetup.com/aws-cloud-club-at-nuces/events/312034873/"
        },
        {
            id: "311685625",
            title: "AWS Workshop Event",
            date: "November 2024",
            link: "https://www.meetup.com/aws-cloud-club-at-nuces/events/311685625/"
        },
        {
            id: "309203407",
            title: "AWS Workshop Event",
            date: "October 2024",
            link: "http://meetup.com/aws-cloud-club-at-nuces/events/309203407/"
        },
        {
            id: "300406674",
            title: "AWS Workshop Event",
            date: "May 2024",
            link: "https://www.meetup.com/aws-cloud-club-at-nuces/events/300406674/"
        },
        {
            id: "297638630",
            title: "AWS Workshop Event",
            date: "March 2024",
            link: "https://www.meetup.com/aws-cloud-club-at-nuces/events/297638630/"
        }
    ];

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(RSS_URL);
                const data = await response.json();

                if (data.status === 'ok' && data.items && data.items.length > 0) {
                    const event = data.items[0];
                    const pubDate = new Date(event.pubDate);

                    setUpcomingEvent({
                        title: event.title,
                        date: pubDate.toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }),
                        time: pubDate.toLocaleTimeString(undefined, {
                            hour: '2-digit',
                            minute: '2-digit',
                        }),
                        link: event.link,
                        thumbnail: event.thumbnail,
                        description: "Join us for our next community gathering!"
                    });
                } else {
                    setUpcomingEvent(null);
                }
            } catch (error) {
                console.error("Failed to fetch events:", error);
                setUpcomingEvent(null);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <section id="events" className="py-20 px-4 bg-white dark:bg-navy-purple transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                <SectionTitle title="Events" />

                {/* Dynamic Spotlight Section */}
                {loading ? (
                    <div className="flex items-center justify-center h-64 text-gray-500">
                        Loading upcoming events...
                    </div>
                ) : upcomingEvent ? (
                    <div className="bg-section-gray dark:bg-card-dark rounded-3xl p-6 md:p-10 mb-20 shadow-xl border border-transparent dark:border-navy-card overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                            {/* Left: Poster */}
                            <div className="relative w-full aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-gray-300 dark:bg-navy-purple group">
                                {upcomingEvent.thumbnail ? (
                                    /* eslint-disable-next-line @next/next/no-img-element */
                                    <img
                                        src={upcomingEvent.thumbnail}
                                        alt={upcomingEvent.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-500 p-4 text-center">
                                        <span className="font-bold">
                                            AWS Cloud Club Event
                                        </span>
                                    </div>
                                )}
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Right: Details */}
                            <div className="space-y-6">
                                <div className="inline-block px-4 py-1 rounded-full bg-brand/10 dark:bg-royal-purple/20 text-brand dark:text-royal-purple font-bold text-sm">
                                    Upcoming Event
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold text-brand-dark dark:text-white leading-tight">
                                    {upcomingEvent.title}
                                </h3>

                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                                        <Calendar className="text-brand dark:text-royal-purple" />
                                        <span className="font-medium">{upcomingEvent.date}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                                        <Clock className="text-brand dark:text-royal-purple" />
                                        <span className="font-medium">{upcomingEvent.time}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                                        <MapPin className="text-brand dark:text-royal-purple" />
                                        <span className="font-medium">Check link for details</span>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <a
                                        href={upcomingEvent.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-brand dark:bg-royal-purple text-white md:text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all group"
                                    >
                                        Register Now
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Fallback Message (No Grid)
                    <div className="text-center py-10 mb-10">
                        <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
                            No upcoming events scheduled. Check out our past activities below!
                        </h3>
                    </div>
                )}

                {/* Past Events Grid */}
                <div>
                    <h3 className="text-3xl font-bold text-center text-brand-dark dark:text-white mb-10">
                        Previous Events
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {pastEvents.map((event) => (
                            <a
                                key={event.id}
                                href={event.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-section-gray dark:bg-card-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                            >
                                {/* Event Image Placeholder */}
                                <div className="relative aspect-video bg-gray-300 dark:bg-gray-700 overflow-hidden">
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
                                    <h4 className="text-xl font-bold text-brand-dark dark:text-white mb-2 group-hover:text-brand dark:group-hover:text-royal-purple transition-colors">
                                        {event.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        {event.date}
                                    </p>
                                    <div className="flex items-center gap-2 text-brand dark:text-royal-purple font-medium text-sm">
                                        View Event
                                        <ExternalLink size={16} />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* View Full Archive Button */}
                    <div className="text-center">
                        <a
                            href={PAST_EVENTS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-brand-dark dark:border-white text-brand-dark dark:text-white font-bold hover:bg-brand-dark hover:text-white dark:hover:bg-white dark:hover:text-navy-purple transition-all"
                        >
                            View Full Event Archive
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Events;
