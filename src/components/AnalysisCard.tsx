'use client';

import { Analysis } from '@/app/analysis/manage/page';
import Link from 'next/link';
import { useState, useMemo } from 'react';
// Lucide icons ইম্পোর্ট করা হলো
import {
    Search,
    X,
    ArrowUpRight,
    ChevronDown,
    FileSearch,
    BarChart2,
    ArrowRight
} from 'lucide-react';

interface AnalysisItem {
    _id: string;
    title: string;
    currentCondition: string;
    description?: string;
    pair: string;
    strategy?: string;
    timeframe?: string;
    marketBias?: string;
    confidence?: string;
    tradingType?: string;
    image: string;
    authorId?: string;
    authorName?: string;
    createdAt: {
        $date: string;
    };
}

interface AnalysisCardProps {
    analysis: Analysis[]
}

export default function AnalysisCard({ analysis }: AnalysisCardProps) {
    // Search & Filter States
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBias, setSelectedBias] = useState('ALL');
    const [selectedPair, setSelectedPair] = useState('ALL');

    // Dynamic extractors for unique Pairs and Biases from incoming data to populate dropdowns
    const uniquePairs = useMemo(() => {
        const pairs = analysis.map((item) => item.pair?.toUpperCase()).filter(Boolean);
        return ['ALL', ...Array.from(new Set(pairs))];
    }, [analysis]);

    const uniqueBiases = useMemo(() => {
        const biases = analysis.map((item) => item.marketBias?.toUpperCase()).filter(Boolean);
        return ['ALL', ...Array.from(new Set(biases))];
    }, [analysis]);

    // High-performance filtering engine
    const filteredAnalysis = useMemo(() => {
        return analysis.filter((item) => {
            const matchesSearch =
                item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.currentCondition?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.pair?.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesBias = selectedBias === 'ALL' || item.marketBias?.toUpperCase() === selectedBias;
            const matchesPair = selectedPair === 'ALL' || item.pair?.toUpperCase() === selectedPair;

            return matchesSearch && matchesBias && matchesPair;
        });
    }, [analysis, searchQuery, selectedBias, selectedPair]);

    // Date formatting helper
    const formatDisplayDate = (dateString: string) => {
        try {
            const options: Intl.DateTimeFormatOptions = {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            };
            return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
        } catch (e) {
            return 'OCT 24, 2024';
        }
    };

    return (
        <>
            {/* এক্সটার্নাল ম্যাটেরিয়াল আইকন ফন্ট লিংক সম্পূর্ণ রিমুভ করা হয়েছে */}
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

            <div className="w-full flex flex-col gap-8 bg-transparent">

                {/* Search & Filter Control Panel Bar */}
                <div className="w-full p-5 rounded-2xl border border-white/5 bg-[#11192e]/80 backdrop-blur-md flex flex-col lg:flex-row items-center gap-4 justify-between">

                    {/* Search Input Box */}
                    <div className="relative w-full lg:max-w-md flex items-center">
                        <Search className="absolute left-4 text-white/40 pointer-events-none w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by title, condition or pair..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-[#090f1d] border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4edea3]/50 transition-colors font-['Inter']"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 text-white/40 hover:text-white transition-colors cursor-pointer flex items-center"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Select Dropdowns Wrapper */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">

                        {/* Filter by Pair */}
                        <div className="relative w-full sm:w-44 flex items-center">
                            <ArrowUpRight className="absolute left-3.5 text-white/40 pointer-events-none w-4 h-4" />
                            <select
                                value={selectedPair}
                                onChange={(e) => setSelectedPair(e.target.value)}
                                className="w-full pl-10 pr-8 py-3 bg-[#090f1d] border border-white/10 rounded-xl text-white text-xs font-semibold appearance-none focus:outline-none focus:border-[#4edea3]/50 tracking-wide font-['Outfit'] cursor-pointer uppercase"
                            >
                                {uniquePairs.map((pair) => (
                                    <option key={pair} value={pair} className="bg-[#090f1d] text-white">
                                        {pair === 'ALL' ? 'ALL PAIRS' : pair}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 text-white/40 pointer-events-none w-4 h-4" />
                        </div>

                        {/* Filter by Market Bias */}
                        <div className="relative w-full sm:w-44 flex items-center">
                            <BarChart2 className="absolute left-3.5 text-white/40 pointer-events-none w-4 h-4 rotate-90" />
                            <select
                                value={selectedBias}
                                onChange={(e) => setSelectedBias(e.target.value)}
                                className="w-full pl-10 pr-8 py-3 bg-[#090f1d] border border-white/10 rounded-xl text-white text-xs font-semibold appearance-none focus:outline-none focus:border-[#4edea3]/50 tracking-wide font-['Outfit'] cursor-pointer uppercase"
                            >
                                {uniqueBiases.map((bias) => (
                                    <option key={bias} value={bias} className="bg-[#090f1d] text-white">
                                        {bias === 'ALL' ? 'ALL BIASES' : bias}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 text-white/40 pointer-events-none w-4 h-4" />
                        </div>
                    </div>

                </div>

                {/* Dynamic Cards Grid Node */}
                {filteredAnalysis.length === 0 ? (
                    /* Empty Fallback UI */
                    <div className="w-full flex flex-col items-center justify-center py-24 px-6 text-center border border-dashed border-white/10 rounded-2xl bg-[#11192e]/40">
                        <div className="w-16 h-16 bg-[#171f33] rounded-full flex items-center justify-center mb-4">
                            <FileSearch className="w-7 h-7 text-[#ffb95f]" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1 font-['Outfit']">No results match your filters</h3>
                        <p className="text-[#bbcabf] text-xs max-w-xs font-['Inter']">Try adjusting your search keywords or switching dropdown filter selectors.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full bg-transparent">
                        {filteredAnalysis.map((item) => {
                            const uniqueId = item?._id;
                            const targetDate = item.createdAt || new Date().toISOString();

                            return (
                                <article
                                    key={uniqueId}
                                    className="glass-card flex flex-col rounded-2xl overflow-hidden group h-full"
                                >
                                    {/* Media Wrapper */}
                                    <div className="relative h-[220px] w-full overflow-hidden bg-[#131b2e]">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${item.image}')` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-95 pointer-events-none" />

                                        {/* Pair Tag */}
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="bg-[#4edea3] text-[#003824] text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-widest font-['Outfit'] shadow-md">
                                                {item.pair}
                                            </span>
                                        </div>

                                        {/* Date Tag */}
                                        <div className="absolute top-4 right-4 z-10">
                                            <div className="backdrop-blur-md bg-[#0b1326]/40 border border-white/10 px-3 py-1 rounded-lg text-[11px] font-semibold text-white/90 tracking-wider font-['Outfit']">
                                                {formatDisplayDate(targetDate)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Core Content Payload */}
                                    <div className="p-6 flex flex-col flex-grow bg-transparent">
                                        <h3 className="font-['Outfit'] text-[20px] font-bold text-white mb-3 line-clamp-2 leading-tight tracking-tight group-hover:text-[#4edea3] transition-colors duration-300">
                                            {item.title}
                                        </h3>

                                        <p className="font-['Inter'] text-[#bbcabf] text-sm line-clamp-2 mb-6 leading-relaxed font-normal">
                                            {item.currentCondition}
                                        </p>

                                        {/* Bottom Action Footer */}
                                        <div className="mt-auto pt-4 border-t border-white/5 w-full">
                                            <div className="flex items-center justify-between mb-5">
                                                <div className="flex items-center text-[#4edea3] gap-2">
                                                    <BarChart2 className="w-4 h-4" />
                                                    <span className="text-[11px] font-bold uppercase tracking-widest font-['Outfit']">
                                                        {item.marketBias || 'Live Feed'}
                                                    </span>
                                                </div>
                                                <span className="text-xs font-semibold text-green-300 font-['Inter']">
                                                    {item.timeframe || 'H1 View'}
                                                </span>
                                            </div>

                                            {/* CTA Button */}
                                            <Link href={`/analysis/details/${uniqueId}`} className="block w-full">
                                                <button
                                                    type="button"
                                                    className="w-full bg-[#4edea3] text-[#003824] hover:bg-[#6ffbbe] py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.97] shadow-sm font-['Outfit'] cursor-pointer"
                                                >
                                                    <span>View Details</span>
                                                    <ArrowRight className="w-4 h-4 font-bold" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Styled JSX Custom Layout Animations Injector */}
            <style jsx global>{`
                .glass-card {
                  backdrop-filter: blur(20px);
                  background: rgba(23, 31, 51, 0.65);
                  border: 1px solid rgba(255, 255, 255, 0.06);
                  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .glass-card:hover {
                  transform: translateY(-6px);
                  border-color: rgba(78, 222, 163, 0.4);
                  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.7), 0 10px 15px -5px rgba(78, 222, 163, 0.05);
                }
            `}</style>
        </>
    );
}