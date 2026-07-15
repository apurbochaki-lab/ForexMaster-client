import { getMyAnalysis } from "@/lib/api/analysis";
import { getSession } from "@/lib/core/session";
import Image from "next/image";
import Link from "next/link";
import {
    Calendar,
    Envelope,
    ChartAreaStacked,
    ChevronRight,
    Person,
    ShieldCheck
} from "@gravity-ui/icons";

const ProfilePage = async () => {
    const user = await getSession();

    if (!user) {
        return (
            <div className="min-h-screen bg-[#0b1326] flex items-center justify-center px-6 text-white pt-24">
                <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 max-w-md">
                    <p className="text-red-400 mb-4 font-semibold">Access Denied</p>
                    <p className="text-[#bbcabf] mb-6">Please log in to view your profile dashboard.</p>
                    <Link href="/auth/login" className="px-6 py-2.5 rounded-xl bg-[#10b981] text-[#00422b] font-bold hover:scale-105 transition-all inline-block">
                        Login Now
                    </Link>
                </div>
            </div>
        );
    }

    const myAnalysis = await getMyAnalysis(user?.id);
    const myAnalysisCount = myAnalysis?.totalData || 0;


    const getInitials = (name: string | null | undefined): string => {
        if (!name) return "FM";
        return name
            .split(" ")
            .map((n: string) => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();
    };

    const formattedDate = user?.createdAt
        ? new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(user.createdAt))
        : "N/A";

    return (
        <div className="min-h-screen bg-[#0b1326] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* প্রোফাইল হিরো কার্ড */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:p-10 backdrop-blur-2xl">

                    {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#10b981]/15 blur-[80px]" />
                    <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#ffb95f]/10 blur-[80px]" />

                    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">

                        {/* প্রোফাইল ইমেজ / অ্যাভাটার */}
                        <div className="relative group">
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#10b981] to-[#ffb95f] opacity-70 blur-sm transition duration-1000 group-hover:opacity-100"></div>
                            <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-2 border-white/20 bg-[#16223f] flex items-center justify-center">
                                {user?.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name || "User Profile"}
                                        fill
                                        sizes="(max-w-728px) 112px, 128px"
                                        className="object-cover"
                                        priority
                                    />
                                ) : (
                                    <span className="text-3xl font-extrabold bg-gradient-to-tr from-[#4edea3] to-[#ffb95f] bg-clip-text text-transparent">
                                        {getInitials(user?.name)}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* ইউজার ডিটেইলস */}
                        <div className="flex-1 text-center md:text-left space-y-4">
                            <div>
                                <div className="flex flex-col sm:flex-row items-center gap-2 justify-center md:justify-start">
                                    <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                                        {user?.name}
                                    </h1>
                                    <span className="flex items-center gap-1 bg-[#10b981]/10 text-[#4edea3] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#10b981]/20">
                                        <ShieldCheck className="size-3.5" /> Verified Trader
                                    </span>
                                </div>
                                <p className="text-[#bbcabf] text-sm sm:text-base mt-1 flex items-center justify-center md:justify-start gap-2">
                                    <Envelope className="size-4 text-[#ffb95f]" /> {user?.email}
                                </p>
                            </div>

                            {/* কুইক মেটা ইনফো */}
                            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0 pt-2">
                                <div className="bg-[#0b1326]/50 rounded-2xl p-4 border border-white/5 text-center md:text-left">
                                    <p className="text-xs text-[#bbcabf]/70 uppercase tracking-wider font-semibold">Total Analysis</p>
                                    <p className="text-2xl font-black text-[#4edea3] mt-1">{myAnalysisCount}</p>
                                </div>
                                <div className="bg-[#0b1326]/50 rounded-2xl p-4 border border-white/5 text-center md:text-left">
                                    <p className="text-xs text-[#bbcabf]/70 uppercase tracking-wider font-semibold">Joined ForexMaster</p>
                                    <p className="text-sm font-bold text-white mt-2 flex items-center justify-center md:justify-start gap-1.5">
                                        <Calendar className="size-4 text-[#ffb95f]" /> {formattedDate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* কুইক অ্যাকশন বা ড্যাশবোর্ড সেকশন */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* বাম পাশের বক্স: আপনার অ্যানালাইসিস ম্যানেজ করার লিঙ্ক */}
                    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 hover:border-[#10b981]/30 transition-all group">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <div className="h-10 w-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#4edea3]">
                                    <ChartAreaStacked className="size-5" />
                                </div>
                                <h3 className="text-lg font-bold">My Analysis Market</h3>
                                <p className="text-sm text-[#bbcabf] leading-relaxed">
                                    You have published {myAnalysisCount} market analysis. Edit, update or check community reviews on them.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Link href="/analysis/manage" className="inline-flex items-center gap-2 text-sm font-bold text-[#4edea3] group-hover:text-[#ffb95f] transition-colors">
                                Manage Posts <ChevronRight className="size-4" />
                            </Link>
                        </div>
                    </div>

                    {/* ডান পাশের বক্স: নতুন অ্যানালাইসিস পাবলিশের কুইক লিঙ্ক */}
                    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 hover:border-[#ffb95f]/30 transition-all group">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <div className="h-10 w-10 rounded-xl bg-[#ffb95f]/10 flex items-center justify-center text-[#ffb95f]">
                                    <Person className="size-5" />
                                </div>
                                <h3 className="text-lg font-bold">Share Setup</h3>
                                <p className="text-sm text-[#bbcabf] leading-relaxed">
                                    Got a new technical chart or fundamental update? Share it with the community now.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Link href="/analysis/add" className="inline-flex items-center gap-2 text-sm font-bold text-[#ffb95f] group-hover:text-[#4edea3] transition-colors">
                                Create New Post <ChevronRight className="size-4" />
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfilePage;