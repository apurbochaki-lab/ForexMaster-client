import React from 'react';
import {
    TrendingUp,
    BarChart3,
    BellRing,
    ShieldCheck,
    Layers,
    BookOpen,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

// কেন ForexMaster সেরা তার ডেটা অ্যারে
const features = [
    {
        icon: <TrendingUp className="text-[#4edea3] w-6 h-6" />,
        borderColor: 'hover:border-[#4edea3]/30',
        iconBg: 'bg-[#4edea3]/10',
        title: 'Pure Price Action Strategy',
        description: 'Identify institutional liquidity zones and raw market momentum without lagging indicators.'
    },
    {
        icon: <BarChart3 className="text-[#ffb95f] w-6 h-6" />,
        borderColor: 'hover:border-[#ffb95f]/30',
        iconBg: 'bg-[#ffb95f]/10',
        title: 'Multi-Timeframe Analysis',
        description: 'Sync high-timeframe direction with low-timeframe entries for maximum precision.'
    },
    {
        icon: <BellRing className="text-[#4edea3] w-6 h-6" />,
        borderColor: 'hover:border-[#4edea3]/30',
        iconBg: 'bg-[#4edea3]/10',
        title: 'Real-Time Market Updates',
        description: 'Receive instant mobile alerts when critical institutional order blocks are breached.'
    },
    {
        icon: <ShieldCheck className="text-[#ffb95f] w-6 h-6" />,
        borderColor: 'hover:border-[#ffb95f]/40 border-[#ffb95f]/20',
        iconBg: 'bg-[#ffb95f]/10',
        title: 'Risk Management First',
        description: 'Professional position sizing calculators and R:R parameters built into every setup.'
    },
    {
        icon: <Layers className="text-[#4edea3] w-6 h-6" />,
        borderColor: 'hover:border-[#4edea3]/30',
        iconBg: 'bg-[#4edea3]/10',
        title: 'Institutional Structure',
        description: 'Learn to decode the footprint of major banks and market makers to trade alongside them.'
    },
    {
        icon: <BookOpen className="text-[#4edea3] w-6 h-6" />,
        borderColor: 'hover:border-[#4edea3]/30',
        iconBg: 'bg-[#4edea3]/10',
        title: 'Beginner Friendly',
        description: 'Master complex market mechanics through simplified, actionable video guides.'
    }
];

export default function WhyChooseUs() {
    return (
        <div className="relative bg-[#0b1326] text-[#dae2fd] overflow-hidden font-sans antialiased min-h-screen">

            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute top-20 left-10 w-64 h-96 bg-[#4edea3] filter blur-[80px] opacity-15 z-0 pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ffb95f] filter blur-[80px] opacity-15 z-0 pointer-events-none" />

            {/* Hero / Section: Why Choose Us */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
                <section className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:items-center">

                    {/* Left Column (40%) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#4edea3]/20 text-[#4edea3] text-xs font-semibold uppercase tracking-wider">
                            <CheckCircle2 className="w-4 h-4 mr-1.5" />
                            <span className="w-2 h-2 rounded-full bg-[#4edea3] mr-2 animate-pulse"></span>
                            Trusted by Modern Traders
                        </div>

                        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                            Why Thousands of Traders Choose ForexMaster
                        </h1>

                        <p className="text-[#bbcabf] text-base lg:text-lg max-w-lg leading-relaxed">
                            We strip away the noise to provide institutional-grade analysis. Master pure price action and advanced risk management through our high-performance trading ecosystem.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/analysis">
                                <button className="bg-[#4edea3] hover:bg-[#4edea3]/90 text-[#003824] px-8 py-4 rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-200 hover:scale-105 active:scale-95">
                                    Explore Analysis
                                </button>
                            </Link>
                            <Link href="/blog">
                                <button className="border-2 border-[#ffb95f] text-[#ffb95f] hover:bg-[#ffb95f]/10 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 active:scale-95">
                                    Learn More
                                </button>
                            </Link>
                        </div>

                        <div className="pt-8 flex items-center gap-8 border-t border-white/5">
                            <div>
                                <div className="text-white font-bold text-2xl lg:text-3xl">98%</div>
                                <div className="text-[#bbcabf] text-xs font-medium tracking-wide">Signal Accuracy</div>
                            </div>
                            <div>
                                <div className="text-white font-bold text-2xl lg:text-3xl">50k+</div>
                                <div className="text-[#bbcabf] text-xs font-medium tracking-wide">Active Traders</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (60%) */}
                    <div className="lg:col-span-7 relative">
                        <div className="absolute -inset-10 bg-gradient-to-tr from-[#4edea3]/10 via-transparent to-[#ffb95f]/5 blur-[100px] rounded-full opacity-50 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className={`backdrop-blur-xl bg-slate-800/70 border border-white/5 p-5 rounded-xl group transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 ${item.borderColor}`}
                                >
                                    <div className={`w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-[#bbcabf] text-sm leading-snug">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Stats Section */}
                <section className="mt-10">
                    <div className="backdrop-blur-xl bg-slate-800/70 border border-white/10 p-8 lg:p-12 rounded-[2rem] flex flex-col md:flex-row justify-around items-center gap-8 text-center hover:shadow-2xl hover:shadow-black/30 transition-shadow">
                        <div className="space-y-2">
                            <div className="text-[#4edea3] font-bold text-4xl lg:text-5xl">$2.4B+</div>
                            <div className="text-[#bbcabf] text-xs font-semibold uppercase tracking-widest">Monthly Volume Analyzed</div>
                        </div>

                        <div className="w-px h-16 bg-white/10 hidden md:block" />

                        <div className="space-y-2">
                            <div className="text-[#ffb95f] font-bold text-4xl lg:text-5xl">0.02s</div>
                            <div className="text-[#bbcabf] text-xs font-semibold uppercase tracking-widest">Execution Latency</div>
                        </div>

                        <div className="w-px h-16 bg-white/10 hidden md:block" />

                        <div className="space-y-2">
                            <div className="text-[#4edea3] font-bold text-4xl lg:text-5xl">180+</div>
                            <div className="text-[#bbcabf] text-xs font-semibold uppercase tracking-widest">Countries Supported</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}