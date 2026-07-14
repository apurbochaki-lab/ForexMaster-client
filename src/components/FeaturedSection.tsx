import { getFeatured } from "@/lib/api/featured";
import FeaturedCard from "./FeaturedCard";

interface FeaturedItem {
    _id: string;
    image: string;
    title: string;
    description: string;
    pair: string;
    tradingType: string;
}

const FeaturedSection = async () => {
    const featuredData: FeaturedItem[] = await getFeatured();

    return (
        <section className="relative overflow-hidden bg-[#020617] py-18 text-white">

            <div className="absolute top-0 left-0 right-0 -z-10 h-full w-full bg-[linear-gradient(to_bottom,rgba(2,6,23,0)_20%,rgba(16,185,129,0.08)_50%,rgba(2,6,23,0)_80%)]" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-green-600/10 blur-[130px]" />
            <div className="absolute bottom-20 right-20 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                <div className="text-center max-w-4xl mx-auto mb-20 space-y-5">
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-br from-white via-slate-200 to-green-300 bg-clip-text text-transparent leading-[1.1] pb-1">
                        Premium Analysis with Accurate Key Levels
                    </h2>
                    <p className="mt-5 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                        We strip away the noise to provide institutional-grade analysis. Master pure price action, horizontal key levels, and advanced market structure through our high-performance trading ecosystem.
                    </p>
                </div>


                {featuredData && featuredData.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {featuredData.slice(0, 6).map((item) => (
                            <FeaturedCard key={item._id} data={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 text-slate-500 rounded-3xl bg-slate-900 border border-white/5">
                        <p className="text-lg font-medium">No premium structural analysis available right now.</p>
                        <p className="mt-2 text-sm">Please check back later for high-bias market setups.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturedSection;