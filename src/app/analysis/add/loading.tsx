'use client';

export default function Loading() {
    return (
        <>
            {/* Injecting Fonts to match layout scale */}
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

            {/* Main Page Background Container */}
            <div className="w-full min-h-screen bg-[#0b1326] text-white p-6 sm:p-8 font-['Outfit']">

                {/* Form layout structural wrapper to block off layout shifts */}
                <div className="max-w-[1000px] mx-auto w-full flex flex-col items-center pt-6 custom-pulse">

                    {/* Top Header Section */}
                    <div className="flex flex-col items-center text-center gap-3 mb-12 w-full">
                        {/* Trader Dashboard Top Pill Badge */}
                        <div className="w-36 h-6 bg-[#172544] border border-[#223663] rounded-full" />
                        {/* Big Page Title Header Placeholder */}
                        <div className="w-full max-w-xl h-12 bg-[#1e294b] rounded-xl mt-1" />
                        {/* Subtitle Under the Header */}
                        <div className="w-3/4 max-w-md h-4 bg-[#151f38] rounded-md mt-1" />
                    </div>

                    {/* Main Transparent Border Glass Form Card Component Wrapper */}
                    <div className="w-full rounded-2xl border border-white/5 bg-[#11192e]/65 p-6 sm:p-10 flex flex-col items-center shadow-xl">

                        {/* Upper Icon Box Indicator Mock */}
                        <div className="w-14 h-14 bg-[#14233a] border border-[#223a5e]/30 rounded-xl flex items-center justify-center mb-4" />
                        {/* Section Title "Add New Analysis" block */}
                        <div className="w-48 h-6 bg-[#202c4f] rounded-md mb-2" />
                        {/* Minimal helper caption block below section header */}
                        <div className="w-64 h-3.5 bg-[#151f38] rounded-md mb-10" />

                        {/* Input Dynamic Payload Group - Row by Row */}
                        <div className="w-full flex flex-col gap-6">

                            {/* Form Item: Analysis Title */}
                            <div className="w-full flex flex-col gap-2">
                                <div className="w-24 h-4 bg-[#1e294b] rounded" /> {/* Label */}
                                <div className="w-full h-12 bg-[#090f1d] border border-white/10 rounded-xl" /> {/* Input Box */}
                            </div>

                            {/* Form Item: Current Market Condition */}
                            <div className="w-full flex flex-col gap-2">
                                <div className="w-36 h-4 bg-[#1e294b] rounded" /> {/* Label */}
                                <div className="w-full h-24 bg-[#090f1d] border border-white/10 rounded-xl" /> {/* Textarea */}
                            </div>

                            {/* Form Item: Full Analysis Description */}
                            <div className="w-full flex flex-col gap-2">
                                <div className="w-36 h-4 bg-[#1e294b] rounded" /> {/* Label */}
                                <div className="w-full h-28 bg-[#090f1d] border border-white/10 rounded-xl" /> {/* Large Textarea */}
                            </div>

                            {/* Multi-Column Dropdowns Container (Currency, Strategy, Timeframe Grid) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-2">
                                {/* Dropdown Selector 1 */}
                                <div className="flex flex-col gap-2">
                                    <div className="w-24 h-4 bg-[#1e294b] rounded" />
                                    <div className="w-full h-12 bg-[#090f1d] border border-white/10 rounded-xl" />
                                </div>
                                {/* Dropdown Selector 2 */}
                                <div className="flex flex-col gap-2">
                                    <div className="w-20 h-4 bg-[#1e294b] rounded" />
                                    <div className="w-full h-12 bg-[#090f1d] border border-white/10 rounded-xl" />
                                </div>
                                {/* Dropdown Selector 3 */}
                                <div className="flex flex-col gap-2">
                                    <div className="w-24 h-4 bg-[#1e294b] rounded" />
                                    <div className="w-full h-12 bg-[#090f1d] border border-white/10 rounded-xl" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Custom Low-Glow Pulse Curve for Deep Dark Form Styling */}
            <style jsx global>{`
                @keyframes formDarkPulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.55; }
                }
                .custom-pulse {
                    animation: formDarkPulse 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
            `}</style>
        </>
    );
}