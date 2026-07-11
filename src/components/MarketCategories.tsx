import React from 'react';

export default function MarketCategories() {
    return (
        <section className="relative w-full py-12 md:py-24 overflow-hidden bg-[#0F172A] text-[#dae2fd]">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#4edea3]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffb95f]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-[2px] bg-[#4edea3]"></div>
                        <span className="text-[#4edea3] text-xs font-semibold tracking-widest uppercase">
                            Market Coverage
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Explore Global Markets
                    </h2>
                    <p className="text-[#CBD5E1] text-lg max-w-2xl">
                        Access professional market analysis across forex pairs, precious metals, commodities, and digital assets with institutional-grade data precision.
                    </p>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1: Major Pairs */}
                    <div className="glass-card rounded-xl p-5 flex flex-col h-full group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-12 h-12 rounded-lg bg-[#4edea3]/20 flex items-center justify-center text-[#4edea3] border border-[#4edea3]/20">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    currency_exchange
                                </span>
                            </div>
                            <span className="bg-[#4edea3]/10 text-[#4edea3] text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1.5 border border-[#4edea3]/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] pulse-live"></span>
                                LIVE
                            </span>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">Major Pairs</h3>
                        <p className="text-[#CBD5E1] text-sm mb-6">
                            Trade the world's most liquid currency markets including EUR/USD and GBP/USD with tight spreads.
                        </p>
                        {/* Chart: Upward Trend */}
                        <div className="mb-8 px-2">
                            <svg className="sparkline-svg" preserveAspectRatio="none" viewBox="0 0 100 30">
                                <path className="sparkline-path stroke-[#4edea3]" d="M0,25 L10,22 L20,24 L30,18 L40,20 L50,12 L60,15 L70,8 L80,10 L90,2 L100,5"></path>
                            </svg>
                        </div>
                        <div className="pt-6 border-t border-white/5 flex justify-between items-center mt-auto">
                            <span className="text-[#4edea3] text-xs font-semibold">32 Instruments Available</span>
                            <a className="text-[#CBD5E1] group-hover:text-[#4edea3] transition-colors flex items-center gap-1 text-sm" href="#">
                                View Analysis <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Minor Pairs */}
                    <div className="glass-card rounded-xl p-5 flex flex-col h-full group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-12 h-12 rounded-lg bg-[#4edea3]/20 flex items-center justify-center text-[#4edea3] border border-[#4edea3]/20">
                                <span className="material-symbols-outlined">payments</span>
                            </div>
                            <span className="bg-[#2d3449] text-[#bbcabf] text-[10px] font-semibold px-2 py-1 rounded-full border border-white/5">
                                ACTIVE
                            </span>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">Minor Pairs</h3>
                        <p className="text-[#CBD5E1] text-sm mb-6">
                            Explore cross currency opportunities with lower correlation exposure and professional technical insights.
                        </p>
                        {/* Chart: Stable Trend */}
                        <div className="mb-8 px-2">
                            <svg className="sparkline-svg" preserveAspectRatio="none" viewBox="0 0 100 30">
                                <path className="sparkline-path stroke-[#4edea3]" d="M0,15 L10,14 L20,16 L30,15 L40,14 L50,15 L60,16 L70,15 L80,14 L90,15 L100,16"></path>
                            </svg>
                        </div>
                        <div className="pt-6 border-t border-white/5 flex justify-between items-center mt-auto">
                            <span className="text-[#4edea3] text-xs font-semibold">48 Instruments Available</span>
                            <a className="text-[#CBD5E1] group-hover:text-[#4edea3] transition-colors flex items-center gap-1 text-sm" href="#">
                                View Analysis <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 3: Exotic Pairs */}
                    <div className="glass-card rounded-xl p-5 flex flex-col h-full group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-12 h-12 rounded-lg bg-[#4edea3]/20 flex items-center justify-center text-[#4edea3] border border-[#4edea3]/20">
                                <span className="material-symbols-outlined">public</span>
                            </div>
                            <span className="bg-[#ffb95f]/10 text-[#ffb95f] text-[10px] font-semibold px-2 py-1 rounded-full border border-[#ffb95f]/20">
                                TRENDING
                            </span>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">Exotic Pairs</h3>
                        <p className="text-[#CBD5E1] text-sm mb-6">
                            Access emerging market currencies with unique volatility profiles and deep fundamental context.
                        </p>
                        {/* Chart: Volatile Trend */}
                        <div className="mb-8 px-2">
                            <svg className="sparkline-svg" preserveAspectRatio="none" viewBox="0 0 100 30">
                                <path className="sparkline-path stroke-[#4edea3]" d="M0,25 L10,5 L20,28 L30,10 L40,25 L50,5 L60,28 L70,10 L80,25 L90,5 L100,15"></path>
                            </svg>
                        </div>
                        <div className="pt-6 border-t border-white/5 flex justify-between items-center mt-auto">
                            <span className="text-[#4edea3] text-xs font-semibold">24 Instruments Available</span>
                            <a className="text-[#CBD5E1] group-hover:text-[#4edea3] transition-colors flex items-center gap-1 text-sm" href="#">
                                View Analysis <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 4: Gold (XAU/USD) */}
                    <div className="glass-card glass-card-amber rounded-xl p-5 flex flex-col h-full group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-12 h-12 rounded-lg bg-[#ffb95f]/20 flex items-center justify-center text-[#ffb95f] border border-[#ffb95f]/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    diamond
                                </span>
                            </div>
                            <span className="bg-[#ffb95f]/10 text-[#ffb95f] text-[10px] font-semibold px-2 py-1 rounded-full border border-[#ffb95f]/20">
                                PREMIUM
                            </span>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">Gold (XAU/USD)</h3>
                        <p className="text-[#CBD5E1] text-sm mb-6">
                            Professional analysis for XAU/USD and precious metal markets including silver and platinum hedging.
                        </p>
                        {/* Chart: Gold Upward Trend */}
                        <div className="mb-8 px-2">
                            <svg className="sparkline-svg" preserveAspectRatio="none" viewBox="0 0 100 30">
                                <path className="sparkline-path stroke-[#ffb95f]" d="M0,28 L10,25 L20,22 L30,24 L40,18 L50,15 L60,10 L70,12 L80,5 L90,8 L100,2"></path>
                            </svg>
                        </div>
                        <div className="pt-6 border-t border-white/5 flex justify-between items-center mt-auto">
                            <span className="text-[#ffb95f] text-xs font-semibold">Premium Signals Only</span>
                            <a className="text-[#CBD5E1] group-hover:text-[#ffb95f] transition-colors flex items-center gap-1 text-sm" href="#">
                                View Analysis <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 5: Crypto CFDs */}
                    <div className="glass-card glass-card-amber rounded-xl p-5 flex flex-col h-full group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-12 h-12 rounded-lg bg-[#ffb95f]/20 flex items-center justify-center text-[#ffb95f] border border-[#ffb95f]/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                <span className="material-symbols-outlined">currency_bitcoin</span>
                            </div>
                            <span className="bg-[#4edea3]/10 text-[#4edea3] text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1.5 border border-[#4edea3]/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] pulse-live"></span>
                                LIVE
                            </span>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">Crypto CFDs</h3>
                        <p className="text-[#CBD5E1] text-sm mb-6">
                            Trade high-volatility digital asset opportunities including BTC, ETH, and Solana with leveraged CFDs.
                        </p>
                        {/* Chart: High-Volatility Orange Trend */}
                        <div className="mb-8 px-2">
                            <svg className="sparkline-svg" preserveAspectRatio="none" viewBox="0 0 100 30">
                                <path className="sparkline-path stroke-[#ffb95f]" d="M0,15 L10,28 L20,2 L30,25 L40,5 L50,22 L60,8 L70,18 L80,5 L90,28 L100,10"></path>
                            </svg>
                        </div>
                        <div className="pt-6 border-t border-white/5 flex justify-between items-center mt-auto">
                            <span className="text-[#ffb95f] text-xs font-semibold">High Volatility Alert</span>
                            <a className="text-[#CBD5E1] group-hover:text-[#ffb95f] transition-colors flex items-center gap-1 text-sm" href="#">
                                View Analysis <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 6: Commodities */}
                    <div className="glass-card rounded-xl p-5 flex flex-col h-full group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-12 h-12 rounded-lg bg-[#4edea3]/20 flex items-center justify-center text-[#4edea3] border border-[#4edea3]/20">
                                <span className="material-symbols-outlined">oil_barrel</span>
                            </div>
                            <span className="bg-[#2d3449] text-[#bbcabf] text-[10px] font-semibold px-2 py-1 rounded-full border border-white/5">
                                ACTIVE
                            </span>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">Commodities</h3>
                        <p className="text-[#CBD5E1] text-sm mb-6">
                            Monitor WTI oil, natural gas, and global soft commodity trends for strategic macro positioning.
                        </p>
                        {/* Chart: Steady Trend */}
                        <div className="mb-8 px-2">
                            <svg className="sparkline-svg" preserveAspectRatio="none" viewBox="0 0 100 30">
                                <path className="sparkline-path stroke-[#4edea3]" d="M0,20 L10,18 L20,19 L30,17 L40,18 L50,16 L60,17 L70,15 L80,16 L90,14 L100,15"></path>
                            </svg>
                        </div>
                        <div className="pt-6 border-t border-white/5 flex justify-between items-center mt-auto">
                            <span className="text-[#4edea3] text-xs font-semibold">12 Instruments Available</span>
                            <a className="text-[#CBD5E1] group-hover:text-[#4edea3] transition-colors flex items-center gap-1 text-sm" href="#">
                                View Analysis <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}