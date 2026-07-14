'use client';

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (glowRef.current) {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                glowRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="bg-[#0b1326] text-[#dae2fd] font-['Outfit',sans-serif] overflow-x-hidden min-h-screen">
            <style>{`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
        }

        .glass-card {
            backdrop-filter: blur(20px);
            background: rgba(30, 41, 59, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }

        @keyframes pulse-line {
            0% { stroke-dashoffset: 1000; opacity: 0.5; }
            50% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0.5; }
        }

        .animate-float {
            animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
            animation: float 8s ease-in-out infinite;
            animation-delay: 1s;
        }

        .grid-pattern {
            background-image: radial-gradient(circle, #1e293b 1px, transparent 1px);
            background-size: 40px 40px;
        }

        .glow-green {
            background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
            transition: transform 0.1s ease-out;
        }

        .glow-gold {
            background: radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%);
        }
      `}</style>

            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />


            {/* Hero Section */}
            <main className="relative min-h-[65vh] pt-32 pb-20 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 grid-pattern opacity-30 -z-10"></div>
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <div ref={glowRef} className="absolute top-1/4 -left-20 w-[600px] h-[600px] glow-green"></div>
                    <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] glow-gold"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center">
                    {/* Left Column Content */}
                    <div className="flex flex-col gap-6">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#222a3d] px-4 py-2 rounded-full w-fit">
                            <span className="material-symbols-outlined text-[#4edea3]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                            <span className="text-[12px] font-semibold tracking-wider text-[#CBD5E1]">Trusted by Forex Traders Worldwide</span>
                        </div>

                        {/* Headline */}
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[40px] md:text-[64px] font-bold leading-tight tracking-tight">
                                <span className="text-[#dae2fd]">Master the Market with</span> <br />
                                <span className="text-[#4edea3]">Professional</span> <span className="text-[#dae2fd]">Forex Analysis</span>
                            </h1>
                            <h2 className="text-[36px] font-semibold leading-tight">
                                Trade <span className="text-[#4edea3]">Smarter</span>, Not Harder.
                            </h2>
                        </div>

                        {/* Subheading */}
                        <p className="text-[18px] leading-relaxed text-[#CBD5E1] max-w-[600px]">
                            Access institutional-grade market analysis, trade ideas, risk management insights, and high-quality forex signals designed for modern traders.
                        </p>

                        {/* CTA Group */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link href="/analysis">
                                <button className="px-8 py-4 bg-[#10b981] text-[#00422b] text-[18px] font-semibold rounded-xl flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all">
                                    Explore Analysis
                                    <span className="material-symbols-outlined">trending_up</span>
                                </button>
                            </Link>
                            {/* <button className="px-8 py-4 border border-[#ffb95f] text-[#ffb95f] text-[18px] font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#ffb95f]/10 active:scale-95 transition-all">
                                Learn More
                            </button> */}
                        </div>
                    </div>

                    {/* Right Column Content */}
                    <div className="relative flex justify-center items-center mt-12 md:mt-0">
                        {/* Market Dashboard Card */}
                        <div className="glass-card w-full max-w-[420px] p-6 rounded-2xl relative animate-float shadow-2xl z-10">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex flex-col">
                                    <span className="text-[12px] font-semibold tracking-wider text-[#bbcabf]">Active Signal</span>
                                    <span className="text-[28px] font-semibold text-white">EUR / USD</span>
                                </div>
                                <span className="bg-[#10b981]/20 text-[#4edea3] px-3 py-1 rounded-full text-[12px] font-bold flex items-center gap-1">
                                    <span className="w-2 h-2 bg-[#4edea3] rounded-full animate-pulse"></span>
                                    BUY
                                </span>
                            </div>

                            {/* Mini Chart Visualization */}
                            <div className="h-32 w-full mb-6 relative">
                                <svg className="w-full h-full" viewBox="0 0 400 100">
                                    <path className="animate-[pulse-line_5s_ease-in-out_infinite]" d="M0 80 Q 50 20, 100 70 T 200 40 T 300 80 T 400 30" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="3" style={{ strokeDasharray: 1000 }}></path>
                                    <circle className="animate-pulse" cx="400" cy="30" fill="#10b981" r="4"></circle>
                                </svg>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4edea3]/10 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Trade Details */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="p-3 bg-[#171f33] rounded-lg border border-white/5">
                                    <span className="text-[12px] font-semibold tracking-wider text-[#bbcabf] block mb-1">Entry Price</span>
                                    <span className="text-[14px] font-medium text-white">1.1745</span>
                                </div>
                                <div className="p-3 bg-[#171f33] rounded-lg border border-white/5">
                                    <span className="text-[12px] font-semibold tracking-wider text-[#bbcabf] block mb-1">Timeframe</span>
                                    <span className="text-[14px] font-medium text-white">H1</span>
                                </div>
                                <div className="p-3 bg-[#171f33] rounded-lg border border-white/5">
                                    <span className="text-[12px] font-semibold tracking-wider text-[#bbcabf] block mb-1">Stop Loss</span>
                                    <span className="text-[14px] font-medium text-[#ffb4ab]">1.1710</span>
                                </div>
                                <div className="p-3 bg-[#171f33] rounded-lg border border-white/5">
                                    <span className="text-[12px] font-semibold tracking-wider text-[#bbcabf] block mb-1">Take Profit</span>
                                    <span className="text-[14px] font-medium text-[#4edea3]">1.1810</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-[12px] font-semibold tracking-wider">
                                <span className="text-[#bbcabf]">Risk/Reward</span>
                                <span className="text-[#ffb95f] font-bold">1:2.5</span>
                            </div>
                        </div>

                        {/* Floating Mini Cards */}
                        <div className="absolute -top-10 -right-4 md:-right-8 glass-card p-4 rounded-xl shadow-xl animate-float-delayed z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#4edea3]/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#4edea3]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                </div>
                                <div>
                                    <span className="text-[12px] font-semibold tracking-wider text-[#bbcabf] block">Win Rate</span>
                                    <span className="text-[28px] font-semibold text-[#4edea3]">87%</span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-10 -left-4 md:-left-8 glass-card p-4 rounded-xl shadow-xl animate-float z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#ffb95f]/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#ffb95f]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                                </div>
                                <div>
                                    <span className="text-[12px] font-semibold tracking-wider text-[#bbcabf] block">Monthly Signals</span>
                                    <span className="text-[28px] font-semibold text-[#ffb95f]">420+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}