import AnalysisDetails from "@/components/AnalysisDetails";
import { getAnalysisById } from "@/lib/api/analysis";


type ParamsProp = {
    params: Promise<{
        id: string;
    }>;
};

const AnalysisDetailsPage = async ({ params }: ParamsProp) => {
    const { id } = await params;
    const details = await getAnalysisById(id) || [];

    // Initial check jodi data na thake
    if (!details || Object.keys(details).length === 0) {
        return (
            <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center p-6">
                <div className="text-center p-8 rounded-2xl bg-[#1E293B] border border-slate-800 max-w-md shadow-xl">
                    <h2 className="text-2xl font-bold text-slate-400 mb-2">No Details Found</h2>
                    <p className="text-slate-500 text-sm">The forex analysis you are looking for might have been removed or is temporarily unavailable.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0F172A] text-white pb-40">
            {/* Header section with clean design */}
            <div className="max-w-7xl mx-auto px-4 pt-25 md:pt-28">
                <div className="border-b border-slate-800 pb-6">
                    <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                        Market Analysis
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100 mt-3 max-w-4xl">
                        {details.title}
                    </h1>
                </div>
            </div>

            {/* Main Content Component */}
            <div className="max-w-7xl mx-auto px-4">
                <AnalysisDetails details={details} />
            </div>
        </div>
    );
};

export default AnalysisDetailsPage;