import React from 'react';
import { Users, BarChart3, Target, Globe, ArrowUpRight } from 'lucide-react';

interface StatCardProps {
    icon: React.ReactNode;
    value: string;
    label: string;
    subText: string;
    isAccent?: boolean;
}

// রিইউজেবল মিনিমাল স্ট্যাটস কার্ড
const StatCard = ({ icon, value, label, subText, isAccent = false }: StatCardProps) => (
    <div className="border border-zinc-800 bg-zinc-900/40 p-6 rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-zinc-700">
        <div className="space-y-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isAccent ? 'bg-[#ffb95f]/10 text-[#ffb95f]' : 'bg-[#4edea3]/10 text-[#4edea3]'}`}>
                {icon}
            </div>
            <div>
                <h3 className="text-3xl font-bold tracking-tight text-white mb-1">{value}</h3>
                <p className="text-zinc-400 text-xs uppercase tracking-wider font-semibold">{label}</p>
            </div>
        </div>
        <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-[11px] text-zinc-500">
            <span className={`w-1.5 h-1.5 rounded-full ${isAccent ? 'bg-[#ffb95f]' : 'bg-[#4edea3]'}`} />
            {subText}
        </div>
    </div>
);

export default function TrustedByTraders() {
    const markets = [
        { name: 'EUR/USD', type: 'forex' },
        { name: 'GBP/USD', type: 'forex' },
        { name: 'USD/JPY', type: 'forex' },
        { name: 'XAU/USD', type: 'commodity' },
        { name: 'BTC/USD', type: 'crypto' },
    ];

    const testimonials = [
        { name: 'David Miller', role: 'Institutional Trader', text: '"The signal accuracy on XAU/USD has completely changed my monthly PnL."' },
        { name: 'Elena Rodriguez', role: 'Private Equity', text: '"Cleanest UI for market data I\'ve used. Highly functional approach."' },
        { name: 'Marcus Chen', role: 'Day Trader', text: '"Finally, a platform that respects data density without overwhelming the eyes."' },
    ];

    return (
        <section className="relative w-full bg-[#0b1326] text-[#dae2fd] py-16 lg:py-20 overflow-hidden font-sans">
            {/* মিনিমাল ডট ব্যাকগ্রাউন্ড */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* হেডার সেকশন */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
                        Global Trading Community
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
                        Trusted By <span className="text-[#4edea3]">Thousands of Forex Traders</span>
                    </h1>
                    <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        ForexMaster helps traders analyze markets with confidence using institutional-grade data, AI-driven signals, and a globally verified performance tracker.
                    </p>
                </div>

                {/* স্ট্যাটস গ্রিড */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    <StatCard
                        icon={<Users size={20} />}
                        value="5,000+"
                        label="Active Traders"
                        subText="Globally verified accounts"
                    />
                    <StatCard
                        icon={<BarChart3 size={20} />}
                        value="25,000+"
                        label="Analyses Published"
                        subText="Expert market breakdowns"
                    />
                    <StatCard
                        icon={<Target size={20} />}
                        value="95%"
                        label="Satisfaction"
                        subText="Based on 4,800+ reviews"
                        isAccent
                    />
                    <StatCard
                        icon={<Globe size={20} />}
                        value="20+"
                        label="Markets Covered"
                        subText="Forex, indices, commodities"
                    />
                </div>

                {/* মার্কেট ব্যাজ লেয়ার */}
                <div className="flex flex-col items-center mb-20 border-t border-zinc-900 pt-5">
                    <span className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4">Markets We Analyze</span>
                    <div className="flex flex-wrap justify-center gap-2">
                        {markets.map((market) => (
                            <span
                                key={market.name}
                                className="px-4 py-1.5 rounded-md bg-zinc-900/60 border border-zinc-800 text-zinc-300 text-xs font-mono flex items-center gap-2 hover:border-zinc-700 transition-colors cursor-default"
                            >
                                <span className={`w-1.5 h-1.5 rounded-full ${market.type === 'commodity' ? 'bg-sky-400' : market.type === 'crypto' ? 'bg-[#ffb95f]' : 'bg-[#4edea3]'}`} />
                                {market.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* মিনিমাল রিভিউ গ্রিড (Marquee-র বদলে একটি ক্লিন ৩-কলাম লেআউট) */}
                <div className="border-t border-zinc-900 pt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-900 flex flex-col justify-between">
                                <p className="text-zinc-300 text-sm italic leading-relaxed mb-6">{t.text}</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-white text-xs font-semibold">{t.name}</h4>
                                        <p className="text-zinc-500 text-[11px]">{t.role}</p>
                                    </div>
                                    <ArrowUpRight size={14} className="text-zinc-600" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}