import HeroUIPagination from "@/components/HeroUIPagination";
import ManageCard from "@/components/ManageCard";
import { getMyAnalysis } from "@/lib/api/analysis";
import { getSession } from "@/lib/core/session";

// This interface used from multiple pages (Don't remove this)
export interface Analysis {
    _id: string;
    title: string;
    currentCondition: string;
    description: string;
    pair: string;
    strategy: string;
    timeframe: string;
    marketBias: string;
    confidence: string;
    tradingType: string;
    image: string;
    authorId: string;
    authorName: string;
    createdAt: string;
}

export interface AnalysisResponse {
    data: Analysis[];
    page: number;
    totalPages: number;
    totalData: number;
}

const ManagePage = async ({
    searchParams
}: {
    searchParams: Promise<{ page?: string }>
}) => {
    const params = await searchParams;

    const user = await getSession();
    const authorId = user?.id;

    // user posted analysis
    const analysisData = await getMyAnalysis(authorId, params.page) || [];
    const myAnalysis = analysisData?.data;

    const page = analysisData?.page;
    const totalPages = analysisData?.totalPages


    return (
        <div className="min-h-screen bg-[#0F172A] text-white pt-28 pb-30 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Part with Premium Style */}
                <div className="border-b border-slate-800 pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                            Trader Dashboard
                        </span>
                        <h1 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight text-slate-100">
                            Manage your posted analysis
                        </h1>
                        <p className="text-slate-400 text-sm mt-2 max-w-xl">
                            Review, optimize, or delete your published forex analysis to keep your feed up-to-date.
                        </p>
                    </div>

                    <div className="bg-[#1E293B]/50 border border-slate-800 px-5 py-3 rounded-2xl flex flex-col items-center justify-center min-w-[150px]">
                        <span className="text-xs text-slate-500 uppercase font-medium">Total Analysis</span>
                        <span className="text-3xl font-black text-emerald-400 mt-1">{analysisData?.totalData}</span>
                    </div>
                </div>

                {/* Empty State vs List Component Grid */}
                {myAnalysis.length === 0 ? (
                    <div className="text-center py-20 px-4 rounded-3xl bg-[#1E293B]/20 border border-slate-800/80 max-w-md mx-auto shadow-xl">
                        <h3 className="text-xl font-bold text-slate-300 mb-2">No Analysis Posted Yet</h3>
                        <p className="text-slate-500 text-sm mb-6">You haven&apos;t shared any forex analysis. Start analyzing the market and post one today!</p>
                    </div>
                ) : (
                    <ManageCard myAnalysis={myAnalysis} />
                    // <div></div>
                )}

                <div>
                    <HeroUIPagination
                        currentPage={page}
                        totalPages={totalPages}
                    />
                </div>
            </div>
        </div>
    );
};

export default ManagePage;