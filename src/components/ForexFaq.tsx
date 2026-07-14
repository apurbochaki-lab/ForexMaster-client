'use client';

import { useState } from 'react';
import { ShieldCheck, Users, ArrowUpRight, RefreshCw, TrendingUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

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

    // Left Column Fade-in Variants with explicit type
    const leftContainerVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Staggered list layout for FAQs with explicit type
    const listVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    // Fixed item variants using 'as const' to resolve TypeScript string literal issue
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring" as const, 
                stiffness: 100, 
                damping: 15 
            }
        }
    };

    return (
        <section className="pb-20 bg-[#0b1326] relative overflow-hidden">
            {/* Subtle glow background element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#4edea3]/5 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="w-full text-[#dae2fd] py-16 lg:py-24 font-sans relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left Column: Branding & Trust */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={leftContainerVariants}
                            className="lg:col-span-5 space-y-8 lg:sticky lg:top-24"
                        >
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
                            <div className="border border-zinc-800 bg-zinc-900/40 p-6 rounded-xl grid grid-cols-2 gap-6 shadow-xl backdrop-blur-sm">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="space-y-1 group cursor-default">
                                        <div className="flex items-center gap-2">
                                            <div className="transition-transform duration-300 group-hover:scale-110">
                                                {stat.icon}
                                            </div>
                                            <span className="text-white font-bold text-xl tracking-tight">{stat.value}</span>
                                        </div>
                                        <p className="text-zinc-500 text-[11px] uppercase tracking-wider font-semibold">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column: Accordion */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={listVariants}
                            className="lg:col-span-7 space-y-3.5"
                        >
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className={`border rounded-xl transition-colors duration-300 overflow-hidden bg-zinc-900/20 ${
                                            isOpen ? 'border-[#4edea3] bg-zinc-900/40 shadow-[0_0_15px_rgba(78,222,163,0.05)]' : 'border-zinc-800/80 hover:border-zinc-700'
                                        }`}
                                    >
                                        <button
                                            className="w-full flex justify-between items-center p-5 text-left transition-colors group relative z-10"
                                            onClick={() => toggleAccordion(index)}
                                            aria-expanded={isOpen}
                                        >
                                            <span className={`text-[15px] font-medium transition-colors duration-200 pr-4 ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                size={18}
                                                className={`text-zinc-500 transition-transform duration-300 shrink-0 ${
                                                    isOpen ? 'transform rotate-180 text-[#4edea3]' : 'group-hover:text-zinc-300'
                                                }`}
                                            />
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    key="content"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                                                    className="border-t border-zinc-800/50"
                                                >
                                                    <div className="p-5 text-zinc-400 text-sm leading-relaxed bg-zinc-950/20 font-light">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}