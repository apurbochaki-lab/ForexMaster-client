'use client';

export default function Loading() {
    // Rendring exactly 4 cards to match the dashboard screenshot
    const skeletonCards = Array.from({ length: 4 });

    return (
        <>
            {/* Injecting Fonts to align text shapes */}
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

            {/* Mother Container with Forced Custom Theme Dark Background Wrapper */}
            <div className="w-full min-h-screen bg-[#0b1326] text-white p-6 sm:p-8 font-['Outfit']">

                {/* Max-width wrapper to perfectly center content like your main layout */}
                <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-8">

                    {/* Top Heading Text & Insights Panel Section */}
                    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 custom-pulse">
                        <div className="flex flex-col gap-2">
                            {/* Live Badge Placeholder */}
                            <div className="w-32 h-6 bg-[#172544] border border-[#223663] rounded-full" />
                            {/* Main Hub Title Header Placeholder */}
                            <div className="w-80 sm:w-[450px] h-10 bg-[#1e294b] rounded-xl mt-1" />
                            {/* Tagline Subtext Placeholder */}
                            <div className="w-full max-w-xl h-4 bg-[#151f38] rounded-md mt-2" />
                        </div>

                        {/* Total Insights Panel Indicator Card Placeholder */}
                        <div className="w-44 h-20 bg-[#11192e] border border-white/5 rounded-2xl p-4 flex items-center justify-between" />
                    </div>

                    {/* Search & Filter Control Panel Bar Skeleton */}
                    <div className="w-full p-5 rounded-2xl border border-white/5 bg-[#11192e]/80 backdrop-blur-md flex flex-col lg:flex-row items-center gap-4 justify-between custom-pulse">
                        {/* Search Input Box */}
                        <div className="w-full lg:max-w-md h-[46px] bg-[#090f1d] border border-white/10 rounded-xl" />

                        {/* Select Dropdowns Wrapper */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                            <div className="w-full sm:w-44 h-[42px] bg-[#090f1d] border border-white/10 rounded-xl" />
                            <div className="w-full sm:w-44 h-[42px] bg-[#090f1d] border border-white/10 rounded-xl" />
                        </div>
                    </div>

                    {/* Dynamic Cards Grid Node */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
                        {skeletonCards.map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col rounded-2xl overflow-hidden bg-[#171f33] border border-white/5 h-full custom-pulse shadow-xl"
                            >
                                {/* Media Container (Exact Graphic Box Height from your Design) */}
                                <div className="relative h-[220px] w-full bg-[#131b2e] overflow-hidden">
                                    {/* Bottom gradient overlay to blend map images */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#171f33] via-transparent to-transparent opacity-95" />

                                    {/* Inner image container mimic block */}
                                    <div className="w-full h-full bg-[#1e2c4a]/30" />

                                    {/* Pair Tag Placeholder */}
                                    <div className="absolute top-4 left-4 w-20 h-5 bg-[#1a3832] rounded" />

                                    {/* Date Tag Placeholder */}
                                    <div className="absolute top-4 right-4 w-24 h-6 bg-[#0b1326]/60 border border-white/5 rounded-lg" />
                                </div>

                                {/* Core Card Content Body Payload (No transparent color to prevent white leak) */}
                                <div className="p-6 flex flex-col flex-grow bg-[#171f33] gap-3">
                                    {/* Title Text Layout Mimic */}
                                    <div className="space-y-2">
                                        <div className="h-5 bg-[#202c4f] rounded-md w-11/12" />
                                        <div className="h-5 bg-[#202c4f] rounded-md w-8/12" />
                                    </div>

                                    {/* Content/Description Text Lines */}
                                    <div className="space-y-2 mt-2 mb-4">
                                        <div className="h-3.5 bg-[#1a2544] rounded-md w-full" />
                                        <div className="h-3.5 bg-[#1a2544] rounded-md w-10/12" />
                                    </div>

                                    {/* Bottom Action Section Block Layout */}
                                    <div className="mt-auto pt-4 border-t border-white/5 w-full">
                                        <div className="flex items-center justify-between mb-5">
                                            {/* Bias status tag placeholder */}
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 bg-[#202c4f] rounded-sm" />
                                                <div className="w-16 h-3 bg-[#202c4f] rounded" />
                                            </div>
                                            {/* Timeframe placeholder text wrapper */}
                                            <div className="w-10 h-3 bg-[#1a2544] rounded" />
                                        </div>

                                        {/* Main Details CTA Action Button Skeleton */}
                                        <div className="w-full h-11 bg-[#1a3a33] border border-emerald-900/20 rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Custom Optimized Low-Glow Deep Dark Animation Curve */}
            <style jsx global>{`
                @keyframes customDarkPulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.55; }
                }
                .custom-pulse {
                    animation: customDarkPulse 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
            `}</style>
        </>
    );
}