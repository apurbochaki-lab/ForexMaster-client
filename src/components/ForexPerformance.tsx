'use client';

import { TrendingUp, BarChart2, Users, Globe, Shield, Layers } from 'lucide-react';
import * as motion from "framer-motion/client";
import { Variants } from "framer-motion";

export default function ForexPerformance() {
    const kpis = [
        {
            icon: <TrendingUp size={30} className="text-[#4edea3]" />,
            label: 'Win Rate',
            value: '95%',
            sub: 'Verified accuracy',
            bg: 'bg-[#4edea3]/10 border-[#4edea3]/20',
        },
        {
            icon: <BarChart2 size={30} className="text-[#ffb95f]" />,
            label: 'Signals Published',
            value: '12,500+',
            sub: 'Market analyses',
            bg: 'bg-[#ffb95f]/10 border-[#ffb95f]/20',
        },
        {
            icon: <Users size={30} className="text-[#4edea3]" />,
            label: 'Active Traders',
            value: '5,000+',
            sub: 'Global community',
            bg: 'bg-[#4edea3]/10 border-[#4edea3]/20',
        },
        {
            icon: <Globe size={30} className="text-[#ffb95f]" />,
            label: 'Tradable Markets',
            value: '20+',
            sub: 'Forex & Commodities',
            bg: 'bg-[#ffb95f]/10 border-[#ffb95f]/20',
        },
    ];

    const bars = [
        { label: 'EURUSD', code: 'EU', val: '35.2%', width: '85%', isHighlight: true, bg: 'bg-blue-500/20' },
        { label: 'GBPUSD', code: 'GU', val: '22.1%', width: '65%', isHighlight: false, bg: 'bg-red-500/20' },
        { label: 'GOLD', code: 'XU', val: '15.8%', width: '45%', isHighlight: false, bg: 'bg-yellow-500/20' },
        { label: 'USDJPY', code: 'UJ', val: '12.5%', width: '30%', isHighlight: false, bg: 'bg-purple-500/20' },
        { label: 'BTCUSD', code: 'BTC', val: '8.4%', width: '15%', isHighlight: false, bg: 'bg-orange-500/20' },
    ];

    // Explicitly typed Framer Motion variants
    const fadeInUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const childItemVariants: Variants = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    const dashboardCardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    return (
        <main className="flex-grow pt-18 pb-12 px-6 relative z-10 bg-[#0b1326] text-[#dae2fd] min-h-screen font-sans overflow-x-hidden">

            {/* Background Glows & Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4edea3]/10 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#ffb95f]/5 rounded-full blur-[150px] opacity-40 mix-blend-screen"></div>
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUpVariants}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/20 text-[#4edea3] text-xs font-semibold tracking-wider mb-6 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                        Performance Overview
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Proven Performance.<br />
                        <span className="text-zinc-400">Trusted by Traders.</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Deep market insights. Accurate analyses. Consistent results.<br />
                        See how ForexMaster delivers real performance for traders worldwide.
                    </p>
                </motion.div>

                {/* KPI Row */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                >
                    {kpis.map((kpi, index) => (
                        <motion.div
                            key={index}
                            variants={childItemVariants}
                            className="bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-xl p-5 flex items-center gap-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:-translate-y-0.5 group"
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 border group-hover:scale-110 transition-transform ${kpi.bg}`}>
                                {kpi.icon}
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-zinc-400 mb-0.5 tracking-wider uppercase">{kpi.label}</p>
                                <p className={`text-2xl font-bold ${index % 2 === 0 ? 'text-[#4edea3]' : 'text-[#ffb95f]'}`}>{kpi.value}</p>
                                <p className="text-[11px] text-zinc-500 mt-0.5">{kpi.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Analytics Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">

                    {/* Left: Line Chart */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        variants={dashboardCardVariants}
                        className="bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col min-h-[400px]"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <TrendingUp size={20} className="text-[#4edea3]" />
                                <h3 className="text-base font-semibold text-white">Monthly Win Rate</h3>
                            </div>
                            <div className="bg-zinc-800/50 border border-white/5 rounded-md px-3 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-zinc-800 transition-colors">
                                <span className="text-xs text-zinc-400 font-medium">Last 12 Months</span>
                                <span className="text-zinc-500 text-xs">▼</span>
                            </div>
                        </div>

                        <div
                            className="flex-grow rounded-lg relative overflow-hidden flex items-end border border-white/5"
                            style={{
                                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                                backgroundSize: '20px 20px'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#4edea3]/10 to-transparent opacity-30"></div>

                            {/* Y Axis */}
                            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-zinc-500 pr-2 border-r border-white/10 z-10 w-9 bg-[#0b1326]/80 backdrop-blur-sm pl-1 py-1">
                                <span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span>
                            </div>

                            {/* X Axis */}
                            <div className="absolute left-9 right-0 bottom-0 flex justify-between text-[10px] text-zinc-500 pt-2 border-t border-white/10 z-10 px-4 bg-[#0b1326]/80 backdrop-blur-sm">
                                <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Dec</span>
                            </div>

                            {/* Seamless SVG Path without breaking syntax */}
                            <div className="absolute left-9 right-0 top-0 bottom-8 z-20">
                                <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                                        d="M 0 60 C 10 40, 10 40, 20 50 C 30 60, 30 30, 40 30 C 50 30, 50 45, 60 45 C 70 45, 70 20, 80 20 C 90 20, 90 25, 100 25"
                                        fill="none"
                                        stroke="#10b981"
                                        strokeWidth="2"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                    {/* Perfectly sync'd dots mapped with the new bezier curve nodes */}
                                    <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="animate-pulse" cx="40" cy="30" fill="#10b981" r="3" />
                                    <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} className="animate-pulse" cx="80" cy="20" fill="#10b981" r="3" />
                                    <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }} cx="100" cy="25" fill="#10b981" r="4" stroke="#0b1326" strokeWidth="2" />
                                </svg>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.4, duration: 0.3 }}
                                    className="absolute right-2 top-4 bg-[#4edea3] text-[#003824] font-mono text-[10px] px-2 py-0.5 rounded shadow-lg font-bold"
                                >
                                    95.2%
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Bar Chart */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        variants={dashboardCardVariants}
                        className="bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col min-h-[400px]"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-2">
                                <BarChart2 size={20} className="text-[#ffb95f]" />
                                <h3 className="text-base font-semibold text-white">Signals by Market</h3>
                            </div>
                            <div className="bg-zinc-800/50 border border-white/5 rounded-md px-3 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-zinc-800 transition-colors">
                                <span className="text-xs text-zinc-400 font-medium">All Markets</span>
                                <span className="text-zinc-500 text-xs">▼</span>
                            </div>
                        </div>

                        <div className="flex-grow flex flex-col justify-around">
                            {bars.map((bar, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-20 text-xs font-semibold text-white flex items-center gap-2 tracking-wide">
                                        <span className={`w-5 h-5 rounded-full ${bar.bg} flex items-center justify-center text-[9px] font-bold text-zinc-300`}>
                                            {bar.code}
                                        </span>
                                        {bar.label}
                                    </div>
                                    <div className="flex-grow h-2 bg-zinc-800 rounded-full overflow-hidden relative">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${bar.width}` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
                                            className={`absolute top-0 left-0 h-full ${bar.isHighlight ? 'bg-[#ffb95f] shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-[#4edea3] opacity-80'} rounded-full`}
                                        />
                                    </div>
                                    <div className={`w-12 text-right font-mono text-xs font-medium ${bar.isHighlight ? 'text-[#ffb95f]' : 'text-zinc-400'}`}>
                                        {bar.val}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

                {/* Trust Indicators Row */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10px" }}
                    variants={containerVariants}
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                >
                    <motion.div variants={childItemVariants} className="bg-slate-800/40 backdrop-blur-xl px-6 py-3 rounded-full flex items-center gap-3 border border-white/10 border-t-[#4edea3]/30">
                        <TrendingUp size={16} className="text-[#4edea3]" />
                        <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Price Action Strategy Only</span>
                    </motion.div>
                    <motion.div variants={childItemVariants} className="bg-slate-800/40 backdrop-blur-xl px-6 py-3 rounded-full flex items-center gap-3 border border-white/10 border-t-[#ffb95f]/30">
                        <Layers size={16} className="text-[#ffb95f]" />
                        <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Multi-Timeframe Analysis</span>
                    </motion.div>
                    <motion.div variants={childItemVariants} className="bg-slate-800/40 backdrop-blur-xl px-6 py-3 rounded-full flex items-center gap-3 border border-white/10 border-t-[#4edea3]/30">
                        <Shield size={16} className="text-[#4edea3]" />
                        <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Risk Management Focused</span>
                    </motion.div>
                </motion.div>

            </div>
        </main>
    );
}