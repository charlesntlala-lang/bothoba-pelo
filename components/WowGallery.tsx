'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StoryGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { id: 1, url: '/images/bot/IMG-20251029-WA0273.jpg', title: 'Community Outreach' },
        { id: 2, url: '/images/bot/IMG-20251029-WA0274.jpg', title: 'Foundation Activities' },
        { id: 3, url: '/images/bot/IMG-20251029-WA0275.jpg', title: 'Community Support' },
        { id: 4, url: '/images/bot/IMG-20251029-WA0276.jpg', title: 'Empowerment Programs' },
        { id: 5, url: '/images/bot/IMG-20251029-WA0277.jpg', title: 'Community Engagement' },
        { id: 6, url: '/images/bot/IMG-20251029-WA0278.jpg', title: 'Social Impact' },
        { id: 7, url: '/images/bot/IMG-20251029-WA0279.jpg', title: 'Community Development' },
        { id: 8, url: '/images/bot/IMG-20251029-WA0280.jpg', title: 'Foundation Work' },
        { id: 9, url: '/images/bot/IMG-20251029-WA0281.jpg', title: 'Community Service' },
        { id: 10, url: '/images/bot/IMG-20251029-WA0282.jpg', title: 'Outreach Programs' },
        { id: 11, url: '/images/bot/IMG-20251029-WA0283.jpg', title: 'Community Building' },
        { id: 12, url: '/images/bot/IMG-20251029-WA0284.jpg', title: 'Social Programs' },
        { id: 13, url: '/images/bot/IMG-20251029-WA0285.jpg', title: 'Community Care' },
        { id: 14, url: '/images/bot/IMG-20251029-WA0286.jpg', title: 'Foundation Events' },
        { id: 15, url: '/images/bot/IMG-20251029-WA0287.jpg', title: 'Community Projects' },
        { id: 16, url: '/images/bot/IMG-20251029-WA0288.jpg', title: 'Volunteer Work' },
        { id: 17, url: '/images/bot/IMG-20251029-WA0289.jpg', title: 'Community Initiatives' },
        { id: 18, url: '/images/bot/IMG-20251029-WA0290.jpg', title: 'Support Programs' },
        { id: 19, url: '/images/bot/IMG-20251029-WA0291.jpg', title: 'Community Wellness' },
        { id: 20, url: '/images/bot/IMG-20251029-WA0292.jpg', title: 'Foundation Mission' },
        { id: 21, url: '/images/bot/IMG-20251029-WA0293.jpg', title: 'Community Empowerment' },
        { id: 22, url: '/images/bot/IMG-20251029-WA0294.jpg', title: 'Social Change' },
        { id: 23, url: '/images/bot/IMG-20251029-WA0295.jpg', title: 'Community Growth' },
        { id: 24, url: '/images/bot/IMG-20251029-WA0296.jpg', title: 'Foundation Impact' },
        { id: 25, url: '/images/bot/IMG-20251029-WA0297.jpg', title: 'Community Collaboration' },
        { id: 26, url: '/images/bot/IMG-20251029-WA0298.jpg', title: 'Outreach Efforts' },
        { id: 27, url: '/images/bot/IMG-20251029-WA0299.jpg', title: 'Community Transformation' },
        { id: 28, url: '/images/bot/IMG-20251029-WA0300.jpg', title: 'Foundation Vision' },
        { id: 29, url: '/images/bot/IMG-20251029-WA0301.jpg', title: 'Community Unity' },
        { id: 30, url: '/images/bot/IMG-20251029-WA0302.jpg', title: 'Social Responsibility' },
        { id: 31, url: '/images/bot/IMG-20251029-WA0303.jpg', title: 'Community Strength' },
        { id: 32, url: '/images/bot/IMG-20251029-WA0304.jpg', title: 'Foundation Goals' },
        { id: 33, url: '/images/bot/IMG-20251029-WA0305.jpg', title: 'Community Progress' },
        { id: 34, url: '/images/bot/IMG-20251029-WA0306.jpg', title: 'Volunteer Efforts' },
        { id: 35, url: '/images/bot/IMG-20251029-WA0307.jpg', title: 'Community Hope' },
        { id: 36, url: '/images/bot/IMG-20251029-WA0308.jpg', title: 'Foundation Values' },
        { id: 37, url: '/images/bot/IMG-20251029-WA0309.jpg', title: 'Community Resilience' },
        { id: 38, url: '/images/bot/IMG-20251029-WA0310.jpg', title: 'Social Upliftment' },
        { id: 39, url: '/images/bot/IMG-20251029-WA0311.jpg', title: 'Community Spirit' },
        { id: 40, url: '/images/bot/IMG-20251029-WA0312.jpg', title: 'Foundation Dedication' },
        { id: 41, url: '/images/bot/IMG-20251029-WA0313.jpg', title: 'Community Harmony' },
        { id: 42, url: '/images/bot/IMG-20251029-WA0314.jpg', title: 'Outreach Success' },
        { id: 43, url: '/images/bot/IMG-20251029-WA0315.jpg', title: 'Community Partnership' },
        { id: 44, url: '/images/bot/IMG-20251029-WA0316.jpg', title: 'Foundation Commitment' },
        { id: 45, url: '/images/bot/IMG-20251029-WA0317.jpg', title: 'Community Excellence' },
        { id: 46, url: '/images/bot/IMG-20251029-WA0318.jpg', title: 'Social Innovation' },
        { id: 47, url: '/images/bot/IMG-20251029-WA0319.jpg', title: 'Community Leadership' },
        { id: 48, url: '/images/bot/IMG-20251029-WA0320.jpg', title: 'Foundation Legacy' },
        { id: 49, url: '/images/bot/IMG-20251029-WA0321.jpg', title: 'Community Achievement' },
        { id: 50, url: '/images/bot/IMG-20251029-WA0322.jpg', title: 'Volunteer Impact' },
        { id: 51, url: '/images/bot/IMG-20251029-WA0323.jpg', title: 'Community Inspiration' },
        { id: 52, url: '/images/bot/IMG-20251029-WA0324.jpg', title: 'Foundation Purpose' },
        { id: 53, url: '/images/bot/IMG-20251029-WA0325.jpg', title: 'Community Dedication' },
        { id: 54, url: '/images/bot/IMG-20251029-WA0326.jpg', title: 'Social Betterment' },
        { id: 55, url: '/images/bot/IMG-20251029-WA0327.jpg', title: 'Community Action' },
        { id: 56, url: '/images/bot/IMG-20251029-WA0328.jpg', title: 'Foundation Journey' },
        { id: 57, url: '/images/bot/IMG-20251029-WA0329.jpg', title: 'Community Passion' },
        { id: 58, url: '/images/bot/IMG-20251029-WA0330.jpg', title: 'Outreach Vision' },
        { id: 59, url: '/images/bot/IMG-20251029-WA0331.jpg', title: 'Community Future' },
        { id: 60, url: '/images/bot/IMG-20251029-WA0332.jpg', title: 'Foundation Heart' },
    ];

    // 3 seconds per image for storytelling
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">

            {/* Home Button */}
            <Link
                href="/"
                className="absolute top-6 left-6 z-50 bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all"
            >
                Home
            </Link>

            {/* Background Image with Zoom Effect */}
            <img
                key={currentIndex}
                src={images[currentIndex].url}
                alt={images[currentIndex].title}
                className="absolute inset-0 w-full h-full object-cover animate-zoomFade"
            />

            {/* Warm Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>

            {/* Story Content */}
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white z-10 max-w-5xl">

                <p className="uppercase tracking-[0.3em] text-sm text-white/70 mb-4">
                    Our Story
                </p>

                <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6 animate-fadeUp">
                    {images[currentIndex].title}
                </h2>

                <p className="text-white/80 max-w-2xl text-lg font-light animate-fadeUp delay-200">
                    Through compassion, commitment, and collaboration, we continue to uplift communities,
                    inspire change, and bring sustainable development to those we serve.
                </p>

                {/* Progress Line */}
                <div className="mt-8 w-full h-[2px] bg-white/30">
                    <div
                        className="h-full bg-white transition-all duration-[3000ms] ease-linear"
                        style={{ width: '100%' }}
                    ></div>
                </div>

            </div>

            <style jsx>{`
        @keyframes zoomFade {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-zoomFade {
          animation: zoomFade 3s ease-in-out;
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
        </div>
    );
}
