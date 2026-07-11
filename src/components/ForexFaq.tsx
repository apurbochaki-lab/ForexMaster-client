'use client';

import { useState } from 'react';
import { ShieldCheck, Users, ArrowUpRight, RefreshCw, TrendingUp, ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

export default function ForexFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const stats = [
        { icon: <Users size={18} className="text-[#ffb95f]" />, value: '5000+', label: 'Active Traders' },
        { icon: <ArrowUpRight size={18} className="text-[#ffb95f]" />, value: '20+', label: 'Currency Pairs' },
        { icon: <RefreshCw size={18} className="text-[#ffb95f]" />, value: 'Daily', label: 'Market Updates' },
        { icon: <TrendingUp size={18} className="text-[#ffb95f]" />, value: 'Pro', label: 'Price Action' },
    ];

    const faqs: FAQItem[] = [
        {
            question: "Is ForexMaster suitable for beginners?",
            answer: "Yes, while our tools are professional-grade, we provide extensive educational resources. Our analysis breaks down complex market movements into understandable price action patterns, making it an excellent learning environment for developing traders."
        },
        {
            question: "How often are market analyses published?",
            answer: "We provide high-frequency updates. Major currency pairs are analyzed during London and New York session opens, with intra-day updates provided when high-probability price action setups occur."
        },
        {
            question: "Do you provide win-rate guarantees?",
            answer: "In professional trading, there are no guarantees. We focus on positive expectancy and high-probability setups. Our methodology prioritizes strict risk management (1:2 minimum Risk/Reward) rather than chasing unrealistic win rates."
        },
        {
            question: "Which asset classes do you cover?",
            answer: "Beyond our core 20+ Forex pairs, we provide institutional-grade analysis for Commodities (Gold, Silver, Oil), major Indices (S&P 500, NASDAQ, DAX), and high-liquidity Cryptocurrencies (BTC, ETH)."
        },
        {
            question: "Is ForexMaster compatible with all brokers?",
            answer: "Yes. Our technical analysis and signals are broker-independent. You can apply our insights on any platform, including MetaTrader 4/5, cTrader, or TradingView with any regulated broker of your choice."
        },
        {
            question: "What is your primary trading strategy?",
            answer: "We utilize a 'Pure Price Action' approach combined with Supply and Demand zones and Market Structure analysis. We do not rely on lagging indicators, focusing instead on real-time order flow and institutional footprints."
        }
    ];

    return (
        <section className="w-full bg-[#0b1326] text-[#dae2fd] py-16 lg:py-24 font-sans">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Branding & Trust */}
                    <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/20 text-[#4edea3] text-xs font-medium uppercase tracking-wider">
                            <ShieldCheck size={14} />
                            Frequently Asked Questions
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                Everything Traders <br />
                                <span className="text-[#4edea3]">Want to Know</span>
                            </h1>
                            <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-md">
                                ForexMaster provides professional market analysis using price action strategies, risk management principles, and multi-timeframe confirmation for the serious institutional trader.
                            </p>
                        </div>

                        {/* Trust Statistics Card */}
                        <div className="border border-zinc-800 bg-zinc-900/40 p-6 rounded-xl grid grid-cols-2 gap-6 shadow-xl">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        {stat.icon}
                                        <span className="text-white font-bold text-xl tracking-tight">{stat.value}</span>
                                    </div>
                                    <p className="text-zinc-500 text-[11px] uppercase tracking-wider font-semibold">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7 space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`border rounded-xl transition-all duration-300 bg-zinc-900/20 ${isOpen ? 'border-[#4edea3] bg-zinc-900/40' : 'border-zinc-800/80 hover:border-zinc-700'}`}
                                >
                                    <button
                                        className="w-full flex justify-between items-center p-5 text-left transition-colors group"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className={`text-[15px] font-medium transition-colors ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            size={18}
                                            className={`text-zinc-500 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'transform rotate-180 text-[#4edea3]' : ''}`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] border-t border-zinc-800/50' : 'max-h-0'}`}
                                    >
                                        <p className="p-5 text-zinc-400 text-sm leading-relaxed bg-zinc-950/20">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}