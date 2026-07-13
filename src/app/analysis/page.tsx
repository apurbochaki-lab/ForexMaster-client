import AnalysisCard from "@/components/AnalysisCard";
import { getAnalysis } from "@/lib/api/analysis";
import { BarChart2, RefreshCw } from "lucide-react"; // Import Lucide Icons
import Link from "next/link";

const AnalysisPage = async () => {
    const analysis = await getAnalysis() || [];

    // Fixed Clean Empty State UI using lucide-react
    if (analysis.length === 0) {
        return (
            <main className="min-h-screen bg-[#0b1326] text-white pt-24 pb-16 px-4 flex items-center justify-center">
                <div className="max-w-md w-full text-center p-8 rounded-2xl border border-white/5 bg-[#11192e]/60 backdrop-blur-md flex flex-col items-center shadow-2xl">

                    {/* Lucide Vector Icon Container */}
                    <div className="w-16 h-16 bg-[#ffb95f]/10 text-[#ffb95f] rounded-2xl flex items-center justify-center mb-6 border border-[#ffb95f]/20 shadow-inner">
                        <BarChart2 className="w-8 h-8 stroke-[1.5] animate-pulse" />
                    </div>

                    {/* Content Header */}
                    <h2 className="text-2xl font-bold tracking-tight text-white mb-2 sans-serif">
                        No Analysis Found
                    </h2>

                    <p className="text-[#bbcabf]/80 text-sm leading-relaxed mb-8 max-w-xs sans-serif">
                        The market feed is currently quiet. Our analysts are scanning the charts for high-probability setups. Please check back shortly.
                    </p>

                    {/* Operational Action Button */}
                    <div className="w-full space-y-4">
                        <Link
                            href="/analysis"
                            className="w-full inline-flex items-center justify-center bg-[#4edea3] text-[#003824] hover:bg-[#6ffbbe] py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg active:scale-[0.98] cursor-pointer"
                        >
                            <RefreshCw className="w-4 h-4 mr-2 stroke-[2.5]" />
                            <span>Refresh Feed</span>
                        </Link>

                        <div className="text-[10px] font-bold text-[#bbcabf]/30 uppercase tracking-widest pt-2">
                            System Status: Operational
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#0b1326] text-white pt-24 pb-30 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-10">

                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/20 text-[#4edea3] text-xs font-semibold uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse" />
                            Live Market Feed
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                            Technical <span className="text-[#4edea3]">Analysis</span> Hub
                        </h1>

                        <p className="text-[#bbcabf] text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
                            Explore professional-grade market insights, data-driven charts, and strategic trading setups curated in real-time.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 bg-[#11192e] border border-white/5 p-4 rounded-xl self-start md:self-auto min-w-[180px]">
                        <div className="w-10 h-10 bg-[#4edea3]/10 text-[#4edea3] rounded-lg flex items-center justify-center">
                            <BarChart2 className="w-5 h-5 stroke-[2]" />
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-[#bbcabf]/60 uppercase tracking-widest">Total Insights</p>
                            <h3 className="text-2xl font-bold text-white leading-tight">
                                {String(analysis.length).padStart(2, '0')}
                            </h3>
                        </div>
                    </div>
                </header>

                <section className="w-full">
                    <AnalysisCard analysis={analysis} />
                </section>

            </div>
        </main>
    );
};

export default AnalysisPage;