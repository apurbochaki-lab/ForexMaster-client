'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
// Lucide React standard icons import
import { Shield, TrendingUp, Coins, Award, Activity, TrendingDown } from 'lucide-react';

export default function HeroSectionThree() {
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

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 20 },
        },
    };

    const cardContainerVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 },
        },
    };

    const floatingCardLeftVariants: Variants = {
        hidden: { opacity: 0, x: -30, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 80, damping: 15, delay: 0.7 },
        },
    };

    const floatingCardRightVariants: Variants = {
        hidden: { opacity: 0, x: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 80, damping: 15, delay: 0.8 },
        },
    };


    return (
        <div className="bg-[#0b1326] text-[#dae2fd] font-['Outfit',sans-serif] overflow-x-hidden min-h-screen pb-12">
            <style>{`
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

                .glow-orange {
                    background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%);
                    transition: transform 0.1s ease-out;
                }

                .glow-cyan {
                    background: radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%);
                }
            `}</style>

            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />

            {/* Hero Section */}
            <main className="relative min-h-[65vh] pt-32 pb-20 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 grid-pattern opacity-30 -z-10"></div>
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <div ref={glowRef} className="absolute top-1/4 -left-20 w-[600px] h-[600px] glow-orange"></div>
                    <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] glow-cyan"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center">
                    {/* Left Column Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-6"
                    >
                        {/* Trust Badge */}
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#222a3d] px-4 py-2 rounded-full w-fit">
                            <Shield className="w-4 h-4 text-[#f97316]" />
                            <span className="text-[12px] font-semibold tracking-wider text-[#CBD5E1]">Advanced Crypto & Bitcoin Analytics</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-2">
                            <h1 className="text-[40px] md:text-[64px] font-bold leading-tight tracking-tight">
                                <span className="text-[#dae2fd]">Trade the Cycle with</span> <br />
                                <span className="text-[#f97316]">BTC / USD</span> <span className="text-[#dae2fd]">Precision Signals</span>
                            </h1>
                            <h2 className="text-[36px] font-semibold leading-tight text-[#f97316]">
                                Master Bitcoin Volatility.
                            </h2>
                        </motion.div>

                        {/* Subheading */}
                        <motion.p variants={itemVariants} className="text-[18px] leading-relaxed text-[#CBD5E1] max-w-[600px]">
                            Get real-time blockchain indicators, liquidity sweeps, and high-precision Bitcoin breakout signals curated for professional crypto traders.
                        </motion.p>

                        {/* CTA Group */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link href="/analysis">
                                <button className="px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-[#1c0800] text-[18px] font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] active:scale-95 transition-all">
                                    Analyze Bitcoin Now
                                    <TrendingUp className="w-5 h-5" />
                                </button>
                            </Link>

                            <Link href="/blog">
                                <button className="border-2 border-[#dae2fd]/30 text-[#dae2fd] hover:bg-white/10 hover:border-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 active:scale-95">
                                    Learn Forex
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column Content */}
                    <div className="relative flex justify-center items-center mt-12 md:mt-0">
                        {/* Market Dashboard Card */}
                        <motion.div
                            variants={cardContainerVariants}
                            initial="hidden"
                            animate="visible"
                            className="glass-card w-full max-w-[420px] p-6 rounded-2xl relative animate-float shadow-2xl z-10"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex flex-col">
                                    <span className="text-[12px] font-semibold tracking-wider text-[#b8c2cc]">Active Crypto Signal</span>
                                    <span className="text-[28px] font-bold text-white">BTC / USD</span>
                                </div>
                                <span className="bg-[#f97316]/20 text-[#f97316] px-3 py-1 rounded-full text-[12px] font-bold flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse"></span>
                                    BULLISH BREAKOUT
                                </span>
                            </div>

                            {/* Mini Chart Visualization */}
                            <div className="h-32 w-full mb-6 relative">
                                <svg className="w-full h-full" viewBox="0 0 400 100">
                                    <path className="animate-[pulse-line_5s_ease-in-out_infinite]" d="M0 95 L 60 85 L 120 40 L 180 65 L 240 25 L 310 50 L 400 10" fill="none" stroke="#f97316" strokeLinecap="round" strokeWidth="3.5" style={{ strokeDasharray: 1000 }}></path>
                                    <circle className="animate-pulse" cx="400" cy="10" fill="#f97316" r="5"></circle>
                                </svg>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#f97316]/10 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Trade Details */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="p-3 bg-[#171f33] rounded-lg border border-white/5">
                                    <span className="text-[12px] font-semibold tracking-wider text-[#b8c2cc] block mb-1">Entry Trigger</span>
                                    <span className="text-[14px] font-bold text-white">$ 98,250.00</span>
                                </div>
                                <div className="p-3 bg-[#171f33] rounded-lg border border-white/5">
                                    <span className="text-[12px] font-semibold tracking-wider text-[#b8c2cc] block mb-1">Leverage Rec.</span>
                                    <span className="text-[14px] font-bold text-white">10x Max</span>
                                </div>
                                <div className="p-3 bg-[#171f33] rounded-lg border border-white/5">
                                    <span className="text-[12px] font-semibold tracking-wider text-[#b8c2cc] block mb-1">Stop Loss</span>
                                    <span className="text-[14px] font-bold text-[#ff988f]">$ 96,100.00</span>
                                </div>
                                <div className="p-3 bg-[#171f33] rounded-lg border border-white/5">
                                    <span className="text-[12px] font-semibold tracking-wider text-[#b8c2cc] block mb-1">Take Profit</span>
                                    <span className="text-[14px] font-bold text-[#4edea3]">$ 102,500.00</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-[12px] font-semibold tracking-wider">
                                <span className="text-[#b8c2cc]">Risk/Reward Ratio</span>
                                <span className="text-[#f97316] font-bold">1:2.0</span>
                            </div>
                        </motion.div>

                        {/* Floating Mini Cards */}
                        <motion.div
                            variants={floatingCardRightVariants}
                            initial="hidden"
                            animate="visible"
                            className="absolute -top-10 -right-4 md:-right-8 glass-card p-4 rounded-xl shadow-xl animate-float-delayed z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#f97316]/10 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-[#f97316]" />
                                </div>
                                <div>
                                    <span className="text-[12px] font-semibold tracking-wider text-[#b8c2cc] block">Monthly ROI</span>
                                    <span className="text-[28px] font-semibold text-[#f97316]">+24.8%</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={floatingCardLeftVariants}
                            initial="hidden"
                            animate="visible"
                            className="absolute -bottom-10 -left-4 md:-left-8 glass-card p-4 rounded-xl shadow-xl animate-float z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                                    <Activity className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <span className="text-[12px] font-semibold tracking-wider text-[#b8c2cc] block">Active Traders</span>
                                    <span className="text-[28px] font-semibold text-cyan-400">8.4k+</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
}