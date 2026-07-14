import React from 'react';
import { Check, HelpCircle, Zap, ShieldCheck, Crown } from 'lucide-react';
import Link from 'next/link';

const tiers = [
    {
        name: 'Starter Tier',
        price: 'Free',
        description: 'Perfect for beginners exploring pure price action basics.',
        features: [
            'Access to Free Daily Analysis',
            'Basic Price Action Guide',
            'Weekly Market Overview',
            'Community Chat Access',
        ],
        notIncluded: [
            'Real-time Order Block Alerts',
            'Institutional Liquidity Heatmaps',
            '1-on-1 Mentorship Sessions',
        ],
        buttonText: 'Get Started',
        href: '/register',
        popular: false,
        borderColor: 'hover:border-[#4edea3]/30 border-white/5',
        accentColor: '#4edea3',
        icon: <Zap className="text-[#4edea3] w-5 h-5" />,
    },
    {
        name: 'Pro Trader',
        price: '$49',
        period: '/month',
        description: 'Built for serious traders looking for institutional edges.',
        features: [
            'Everything in Starter Plan',
            'Real-time Order Block Alerts',
            'Multi-Timeframe Entry Setups',
            'Risk Management Calculator Access',
            'Priority Discord Channel',
        ],
        notIncluded: [
            '1-on-1 Mentorship Sessions',
        ],
        buttonText: 'Go Pro Now',
        href: '/checkout/pro',
        popular: true, // Highlights this card
        borderColor: 'border-[#4edea3]/50 shadow-[0_0_30px_rgba(16,185,129,0.15)]',
        accentColor: '#4edea3',
        icon: <ShieldCheck className="text-[#4edea3] w-5 h-5" />,
    },
    {
        name: 'Institutional VIP',
        price: '$149',
        period: '/month',
        description: 'Full footprint access with direct elite mentorship.',
        features: [
            'Everything in Pro Plan',
            'Institutional Liquidity Heatmaps',
            'Weekly 1-on-1 Live Mentorship',
            'Custom Risk Management Audits',
            'Lifetime Masterclass Access',
        ],
        notIncluded: [],
        buttonText: 'Join Elite Circle',
        href: '/checkout/vip',
        popular: false,
        borderColor: 'hover:border-[#ffb95f]/30 border-white/5',
        accentColor: '#ffb95f',
        icon: <Crown className="text-[#ffb95f] w-5 h-5" />,
    },
];

export default function Pricing() {
    return (
        <div className="relative bg-[#0b1326] text-[#dae2fd] overflow-hidden font-sans antialiased min-h-screen border-t border-white/5">

            {/* Background elements matched with WhyChooseUs */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute top-40 right-10 w-80 h-80 bg-[#4edea3] filter blur-[100px] opacity-10 z-0 pointer-events-none" />
            <div className="absolute bottom-40 left-10 w-80 h-80 bg-[#ffb95f] filter blur-[100px] opacity-10 z-0 pointer-events-none" />

            <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#ffb95f]/10 border border-[#ffb95f]/20 text-[#ffb95f] text-xs font-semibold uppercase tracking-wider">
                        Transparent Pricing
                    </div>
                    <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                        Predictable Plans for Every Stage of Your Trading Journey
                    </h2>
                    <p className="text-[#bbcabf] text-base lg:text-lg leading-relaxed">
                        Choose the access level that matches your trading goals. No hidden fees. Cancel or upgrade anytime.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative backdrop-blur-xl bg-slate-800/70 border p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${tier.borderColor}`}
                        >
                            {/* Popular Badge */}
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4edea3] to-[#10b981] text-[#003824] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                                    Most Popular
                                </div>
                            )}

                            <div>
                                {/* Tier Title & Icon */}
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-white font-bold text-xl">{tier.name}</h3>
                                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                                        {tier.icon}
                                    </div>
                                </div>

                                <p className="text-[#bbcabf] text-sm mb-6 leading-relaxed">{tier.description}</p>

                                {/* Price Display */}
                                <div className="flex items-baseline mb-8">
                                    <span className="text-white text-5xl font-extrabold tracking-tight">{tier.price}</span>
                                    {tier.period && <span className="text-[#bbcabf] text-lg ml-1 font-medium">{tier.period}</span>}
                                </div>

                                <div className="w-full h-px bg-white/5 mb-8" />

                                {/* Features List */}
                                <ul className="space-y-4 mb-8">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm">
                                            <Check className="w-5 h-5 text-[#4edea3] mr-3 shrink-0 mt-0.5" />
                                            <span className="text-[#dae2fd]">{feature}</span>
                                        </li>
                                    ))}
                                    {tier.notIncluded?.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm opacity-40">
                                            <Check className="w-5 h-5 text-[#dae2fd]/30 mr-3 shrink-0 mt-0.5 invisible" />
                                            {/* cross or transparent look for non-included features */}
                                            <span className="text-[#dae2fd] line-through">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Call to Action Button */}
                            <div className="mt-auto pt-4">
                                <Link href={tier.href} className="w-full block">
                                    <button
                                        className={`w-full py-4 rounded-xl text-md font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${tier.popular
                                                ? 'bg-[#4edea3] text-[#003824] shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:bg-[#4edea3]/90'
                                                : 'border-2 border-white/10 text-white hover:bg-white/5 hover:border-white/20'
                                            }`}
                                        style={!tier.popular && tier.name === 'Institutional VIP' ? { borderColor: '#ffb95f', color: '#ffb95f' } : {}}
                                    >
                                        {tier.buttonText}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Microcopy / Trust Footer */}
                <div className="mt-12 text-center flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-[#bbcabf]">
                    <div className="flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-[#4edea3]" /> Secure 256-bit SSL Encrypted Checkout
                    </div>
                    <div className="hidden sm:block text-white/10">•</div>
                    <div className="flex items-center gap-1">
                        <HelpCircle className="w-4 h-4 text-[#ffb95f]" /> 14-Day Risk-Free Money-Back Guarantee
                    </div>
                </div>

            </main>
        </div>
    );
}