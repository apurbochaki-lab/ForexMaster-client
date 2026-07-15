const AnalysisDetailsLoading = () => {
    return (
        <div className="min-h-screen bg-[#0b1326] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* টপ ব্যাজ এবং টাইটেল স্কেলেটন */}
                <div className="space-y-3 animate-pulse">
                    <div className="h-6 w-32 bg-[#10b981]/15 border border-[#10b981]/20 rounded-full" />
                    <div className="h-10 w-72 bg-white/15 rounded-xl" />
                </div>

                {/* মেইন গ্রিড লেআউট (চার্ট + সাইডবার) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* বাম পাশের বড় চার্ট এরিয়া */}
                    <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.02] p-4 h-[300px] sm:h-[400px] md:h-[480px] flex items-center justify-center animate-pulse">
                        <div className="w-full h-full bg-white/5 rounded-2xl relative overflow-hidden">
                            {/* চার্ট গ্রিড লাইনের একটি হালকা ফিল দেওয়ার জন্য */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
                        </div>
                    </div>

                    {/* ডান পাশের ইনফরমেশন সাইডবার কার্ড */}
                    <div className="lg:col-span-1 rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-6 flex flex-col justify-between animate-pulse">

                        {/* টপ রো: পেয়ার নেম এবং বুলিশ/বেয়ারিশ ব্যাজ */}
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <div className="h-3 w-24 bg-white/10 rounded" />
                                <div className="h-7 w-44 bg-white/15 rounded-lg" />
                            </div>
                            <div className="h-6 w-20 bg-white/10 rounded-full" />
                        </div>

                        {/* ২x২ প্যারামিটার গ্রিড (Timeframe, Confidence, Strategy, Setup) */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#0b1326]/50 rounded-2xl p-4 border border-white/5 space-y-2">
                                <div className="h-3 w-16 bg-white/10 rounded" />
                                <div className="h-5 w-12 bg-white/15 rounded-md" />
                            </div>
                            <div className="bg-[#0b1326]/50 rounded-2xl p-4 border border-white/5 space-y-2">
                                <div className="h-3 w-16 bg-white/10 rounded" />
                                <div className="h-5 w-16 bg-white/15 rounded-md" />
                            </div>
                            <div className="bg-[#0b1326]/50 rounded-2xl p-4 border border-white/5 space-y-2">
                                <div className="h-3 w-16 bg-white/10 rounded" />
                                <div className="h-5 w-24 bg-white/15 rounded-md" />
                            </div>
                            <div className="bg-[#0b1326]/50 rounded-2xl p-4 border border-white/5 space-y-2">
                                <div className="h-3 w-16 bg-white/10 rounded" />
                                <div className="h-5 w-24 bg-white/15 rounded-md" />
                            </div>
                        </div>

                        {/* অ্যানালিস্ট এবং পাবলিশ ডেট সেকশন */}
                        <div className="space-y-4 pt-4 border-t border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-white/10" />
                                <div className="space-y-1.5">
                                    <div className="h-3 w-12 bg-white/10 rounded" />
                                    <div className="h-4 w-28 bg-white/15 rounded-md" />
                                </div>
                            </div>
                            <div className="h-4 w-48 bg-white/10 rounded-md" />
                        </div>

                    </div>
                </div>

                {/* কারেন্ট মার্কেট কন্ডিশন সেকশন */}
                <div className="space-y-3 animate-pulse">
                    <div className="h-6 w-52 bg-white/15 rounded-lg" />
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
                        <div className="h-4 w-full bg-white/10 rounded" />
                        <div className="h-4 w-3/4 bg-white/10 rounded" />
                    </div>
                </div>

                {/* ডিটেইলড অ্যানালাইসিস সেকশন */}
                <div className="space-y-3 animate-pulse">
                    <div className="h-6 w-40 bg-white/15 rounded-lg" />
                    <div className="space-y-2">
                        <div className="h-4 w-full bg-white/10 rounded" />
                        <div className="h-4 w-5/6 bg-white/10 rounded" />
                        <div className="h-4 w-4/6 bg-white/10 rounded" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AnalysisDetailsLoading;