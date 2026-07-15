import Link from "next/link";
import { Compass, ArrowLeft, Search } from "lucide-react";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-[#0b1326] text-white flex items-center justify-center px-6 relative overflow-hidden">

            {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্টস */}
            <div className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-[#10b981]/10 blur-[120px] pointer-events-none" />
            <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#ffb95f]/5 blur-[120px] pointer-events-none" />

            <div className="max-w-md w-full text-center relative z-10 space-y-8">

                {/* কম্পাস আইকন বক্স */}
                <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#10b981] to-[#ffb95f] opacity-20 blur-lg" />
                    <div className="relative w-20 h-20 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-[#ffb95f]">
                        <Compass className="size-10 animate-[spin_8s_linear_infinite]" />
                        <div className="absolute -bottom-1 -right-1 bg-[#10b981] rounded-full p-1 border-2 border-[#0b1326]">
                            <Search className="size-3 text-white" />
                        </div>
                    </div>
                </div>

                {/* টেক্সট কন্টেন্ট */}
                <div className="space-y-3">
                    <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-white via-white to-[#bbcabf] bg-clip-text text-transparent">
                        404 - Lost in Market
                    </h1>
                    <p className="text-[#bbcabf] text-base leading-relaxed">
                        Oops! The chart pattern or page you are looking for has deviated from its trend. It either got deleted, renamed, or never existed in the first place.
                    </p>
                </div>

                {/* অ্যাকশন বাটনসমূহ */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#10b981] to-[#4edea3] text-[#00422b] font-bold shadow-lg shadow-[#10b981]/20 hover:scale-105 hover:shadow-[#10b981]/30 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        Back to Dashboard
                    </Link>
                    {/* <Link
                        href="javascript:history.back()"
                        className="px-6 py-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" /> Go Back
                    </Link> */}
                </div>

                {/* ফুটনোট */}
                <p className="text-xs text-[#bbcabf]/50 pt-6 border-t border-white/5">
                    Need help finding something? Use the main navigation bar.
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;