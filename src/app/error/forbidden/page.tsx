import Link from "next/link";
import { ShieldX, ArrowLeft, Home } from "lucide-react";

const ForbiddenPage = () => {
    return (
        <div className="min-h-screen bg-[#0b1326] text-white flex items-center justify-center px-6 relative overflow-hidden">

            {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্টস */}
            <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#ffb95f]/10 blur-[120px] pointer-events-none" />
            <div className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-[#10b981]/5 blur-[120px] pointer-events-none" />

            <div className="max-w-md w-full text-center relative z-10 space-y-8">

                {/* রেস্ট্রিক্টেড শিল্ড আইকন বক্স */}
                <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#ffb95f] to-[#10b981] opacity-20 blur-lg" />
                    <div className="relative w-20 h-20 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-[#ffb95f]">
                        <ShieldX className="size-10 text-[#ffb95f]" />
                    </div>
                </div>

                {/* টেক্সট কন্টেন্ট */}
                <div className="space-y-3">
                    <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-white via-white to-[#bbcabf] bg-clip-text text-transparent">
                        403 - Forbidden Area
                    </h1>
                    <p className="text-[#bbcabf] text-base leading-relaxed">
                        Hold on, Trader! You don't have the required permissions to access this page. Even with a valid key, this high-security zone is restricted for your account role.
                    </p>
                </div>

                {/* অ্যাকশন বাটনসমূহ */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#10b981] to-[#4edea3] text-[#00422b] font-bold shadow-lg shadow-[#10b981]/20 hover:scale-105 hover:shadow-[#10b981]/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        <Home className="size-4" /> Go to Dashboard
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
                    Need elevated access? Contact your ForexMaster Administrator.
                </p>
            </div>
        </div>
    );
};

export default ForbiddenPage;