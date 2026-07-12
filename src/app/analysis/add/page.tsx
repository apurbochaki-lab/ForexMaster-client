import AnalysisForm from "@/components/AddAnalysisForm";
import { getSession } from "@/lib/core/session";

export const metadata = {
    title: "Create Forex Market Analysis | ForexMaster",
    description: "Share your professional market analysis, chart setups, and trading bias with the community.",
};

export default async function AddAnalysisPage() {

    const user = await getSession()
    console.log(user)

    return (
        <section className="min-h-screen bg-[#0F172A] py-16 pt-25 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Eye-catching Heading Part */}
                <div className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-medium tracking-wide uppercase border border-[#10B981]/20">
                        ⚡ Trader Dashboard
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Share Your <span className="text-[#10B981]">Market Intelligence</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-base text-slate-400">
                        Publish high-probability setups, technical forecasts, and precise breakdowns for the global trading community.
                    </p>
                </div>

                {/* Client Analysis Form */}
                <AnalysisForm user={user} />
            </div>
        </section>
    );
}