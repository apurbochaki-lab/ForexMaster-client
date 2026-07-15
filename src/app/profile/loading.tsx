const ProfileLoading = () => {
    return (
        <div className="min-h-screen bg-[#0b1326] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* প্রোফাইল হিরো কার্ড স্কেলেটন */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:p-10 backdrop-blur-2xl">
                    <div className="animate-pulse flex flex-col md:flex-row items-center md:items-start gap-8">

                        {/* গোল্ডেন-গ্রিন অ্যাভাটার গ্লো প্লেসহোল্ডার */}
                        <div className="relative">
                            <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                                <div className="h-full w-full rounded-full bg-white/5" />
                            </div>
                        </div>

                        {/* ইউজার ডিটেইলস প্লেসহোল্ডার */}
                        <div className="flex-1 w-full flex flex-col items-center md:items-start space-y-4">
                            <div className="space-y-3 w-full flex flex-col items-center md:items-start">
                                {/* নাম এবং ভেরিফাইড ব্যাজ প্লেসহোল্ডার */}
                                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start w-full">
                                    <div className="h-8 w-48 bg-white/15 rounded-lg" />
                                    <div className="h-6 w-28 bg-white/10 rounded-full" />
                                </div>
                                {/* ইমেইল প্লেসহোল্ডার */}
                                <div className="h-4 w-40 bg-white/10 rounded-md" />
                            </div>

                            {/* মেটা ইনফো গ্রিড প্লেসহোল্ডার */}
                            <div className="grid grid-cols-2 gap-4 w-full max-w-md pt-2">
                                <div className="bg-[#0b1326]/50 rounded-2xl p-4 border border-white/5 space-y-2">
                                    <div className="h-3 w-20 bg-white/10 rounded" />
                                    <div className="h-8 w-12 bg-white/15 rounded-lg" />
                                </div>
                                <div className="bg-[#0b1326]/50 rounded-2xl p-4 border border-white/5 space-y-2">
                                    <div className="h-3 w-28 bg-white/10 rounded" />
                                    <div className="h-5 w-24 bg-white/15 rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* নিচের কার্ড সেকশন প্লেসহোল্ডার */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* বাম পাশের কার্ড */}
                    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 space-y-4 animate-pulse">
                        <div className="h-10 w-10 rounded-xl bg-white/10" />
                        <div className="space-y-2">
                            <div className="h-5 w-36 bg-white/15 rounded-lg" />
                            <div className="h-3 w-full bg-white/10 rounded" />
                            <div className="h-3 w-5/6 bg-white/10 rounded" />
                        </div>
                        <div className="pt-2">
                            <div className="h-4 w-24 bg-white/10 rounded" />
                        </div>
                    </div>

                    {/* ডান পাশের কার্ড */}
                    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 space-y-4 animate-pulse">
                        <div className="h-10 w-10 rounded-xl bg-white/10" />
                        <div className="space-y-2">
                            <div className="h-5 w-28 bg-white/15 rounded-lg" />
                            <div className="h-3 w-full bg-white/10 rounded" />
                            <div className="h-3 w-4/5 bg-white/10 rounded" />
                        </div>
                        <div className="pt-2">
                            <div className="h-4 w-28 bg-white/10 rounded" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfileLoading;