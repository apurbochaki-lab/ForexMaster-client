'use client';

import { LogoFacebook, LogoLinkedin, CirclePlayFill } from '@gravity-ui/icons';
import {
    ShieldAlert,
    ArrowRight,
    TrendingUp,
    ChevronRight,
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Twitter
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const quickLinks: string[] = ['Home', 'Explore Signals', 'Market Insights', 'About Us', 'Contact'];
    const platformLinks: string[] = ['Add Analysis', 'Manage Analysis', 'FAQ', 'Terms & Conditions', 'Privacy Policy'];

    return (
        <footer className="bg-[#0F172A] w-full py-16 border-t border-white/10 relative z-10 overflow-hidden font-sans">

            {/* Background subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4edea3]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-20">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Brand */}
                    <div className="flex flex-col space-y-6 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <div className="w-8 h-8 rounded bg-[#4edea3]/10 flex items-center justify-center border border-[#4edea3]/30">
                                <TrendingUp size={18} className="text-[#10B981] font-bold" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">ForexMaster</span>
                        </div>
                        <p className="text-sm text-[#CBD5E1] leading-relaxed">
                            Professional forex market analysis platform providing price action based trade ideas, market insights, and educational resources for traders.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
                            {
                                [
                                    { icon: <LogoFacebook />, link: '#' },
                                    { icon: <LogoLinkedin />, link: '#' },
                                    { icon: <CirclePlayFill />, link: '#' },
                                    { icon: <Send />, link: '#' },
                                ].map((social, idx) => (
                                    <Link
                                        key={idx}
                                        href={social.link}
                                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#CBD5E1] hover:bg-[#10B981] hover:text-white hover:border-[#10B981] transition-all duration-300"
                                    >
                                        {social.icon}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col space-y-4 text-center md:text-left">
                        <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link href="#" className="text-sm text-[#CBD5E1] hover:text-[#10B981] transition-colors flex items-center justify-center md:justify-start gap-2">
                                        <ChevronRight size={14} className="text-[#10B981]/50 hover:text-[#10B981]" /> {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Platform */}
                    <div className="flex flex-col space-y-4 text-center md:text-left">
                        <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Platform</h4>
                        <ul className="space-y-3">
                            {platformLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-sm text-[#CBD5E1] hover:text-[#10B981] transition-colors flex items-center justify-center md:justify-start gap-2">
                                        <ChevronRight size={14} className="text-[#10B981]/50" /> {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="flex flex-col space-y-4 text-center md:text-left">
                        <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Contact Information</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start justify-center md:justify-start gap-3">
                                <Mail size={18} className="text-[#10B981] mt-0.5 shrink-0" />
                                <span className="text-sm text-[#CBD5E1]">support@forexmaster.com</span>
                            </li>
                            <li className="flex items-start justify-center md:justify-start gap-3">
                                <Phone size={18} className="text-[#10B981] mt-0.5 shrink-0" />
                                <span className="text-sm text-[#CBD5E1]">+1 (800) 555-0198</span>
                            </li>
                            <li className="flex items-start justify-center md:justify-start gap-3">
                                <MapPin size={18} className="text-[#10B981] mt-0.5 shrink-0" />
                                <span className="text-sm text-[#CBD5E1]">100 Wall Street, Suite 500<br />New York, NY 10005</span>
                            </li>
                            <li className="flex items-start justify-center md:justify-start gap-3">
                                <Clock size={18} className="text-[#10B981] mt-0.5 shrink-0" />
                                <span className="text-sm text-[#CBD5E1]">Mon-Fri: 24/5 Support</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Risk Disclaimer */}
                <div className="bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 mb-8 border-l-4 border-l-[#F59E0B] border-t border-r border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0">
                        <ShieldAlert size={20} className="text-[#F59E0B]" />
                    </div>
                    <div className="flex-grow">
                        <p className="text-sm leading-relaxed">
                            <strong className="text-[#F59E0B] font-semibold">Risk Warning: </strong>
                            <span className="text-[#CBD5E1]">Forex trading involves substantial risk and may not be suitable for all investors. Past performance does not guarantee future results. Please ensure you fully understand the risks involved.</span>
                        </p>
                    </div>
                    <button className="shrink-0 bg-transparent border border-white/10 hover:border-[#F59E0B] text-[#CBD5E1] hover:text-[#F59E0B] transition-colors text-xs font-semibold px-4 py-2 rounded flex items-center gap-2">
                        Read Full Disclaimer
                        <ChevronRight size={14} />
                    </button>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[#CBD5E1] text-center md:text-left">
                        © 2026 ForexMaster. All Rights Reserved.
                    </p>
                    <p className="text-xs text-center md:text-right text-[#CBD5E1]/70 flex items-center gap-1">
                        Built with <span className="text-[#F59E0B] font-medium">Next.js, TypeScript, Express.js and MongoDB</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}