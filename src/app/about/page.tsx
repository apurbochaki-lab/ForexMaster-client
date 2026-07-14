import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0F172A] text-[#dae2fd] antialiased selection:bg-[#10B981]/30">
            {/* Google Font Link */}
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

            {/* Hero Section */}
            <header className="relative py-24 border-b border-slate-800/50 bg-gradient-to-b from-[#0b1326] to-[#0F172A] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#10B981] rounded-full blur-[140px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#4285F4] rounded-full blur-[140px]"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <span className="text-[#10B981] text-sm font-bold uppercase tracking-widest bg-[#10B981]/10 px-5 py-2 rounded-full border border-[#10B981]/20">
                        Our Story &amp; Philosophy
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#dae2fd] mt-6 mb-6 leading-tight">
                        Democratizing The Art of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#6EE7B7]">
                            Financial Freedom
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#bbcabf] max-w-3xl mx-auto leading-relaxed font-light">
                        We don&apos;t just build trading tools. We forge disciplined minds, stable emotions, and independent market masters.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 py-20 space-y-28 font-['Outfit']">

                {/* Section 1: The Vision */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-xl text-[#bbcabf] leading-loose text-justify font-light">
                        <h2 className="text-3xl font-bold text-[#dae2fd] text-left">
                            The Genesis of <span className="text-[#10B981]">ForexMaster</span>
                        </h2>
                        <p>
                            ForexMaster was born out of a profound realization: the global financial markets are ruthlessly efficient, yet the systems designed to teach retail traders are fundamentally broken. Most platforms overcomplicate the charts while completely ignoring the human element—the psychology, the nerves, and the internal chaos.
                        </p>
                        <p>
                            We envisioned an ecosystem where advanced technical capabilities seamlessly blend with professional risk management protocols. Our mission is to transform amateur market participants into high-probability institutional thinkers by giving them the exact blueprint used by elite prop firms.
                        </p>
                    </div>
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                            alt="Our Vision and Team Collaboration"
                            fill
                            className="object-cover"
                        />
                    </div>
                </section>

                <hr className="border-slate-800/40" />

                {/* Section 2: Core Philosophy Cards */}
                <section className="space-y-12">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#dae2fd]">
                            The Three Pillars of Our Philosophy
                        </h2>
                        <p className="text-xl text-[#bbcabf] font-light">
                            True mastery in the markets stands firmly on three non-negotiable foundations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-[#222a3d]/20 backdrop-blur-md p-8 rounded-2xl border border-slate-800/80 hover:border-[#10B981]/30 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] font-bold text-xl mb-6 group-hover:bg-[#10B981] group-hover:text-[#0F172A] transition-all">
                                01
                            </div>
                            <h3 className="text-2xl font-bold text-[#dae2fd] mb-4">Precision Analysis</h3>
                            <p className="text-lg text-[#bbcabf] leading-relaxed font-light">
                                Merging macro-fundamental realities with microscopic price action to map high-probability market directions.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-[#222a3d]/20 backdrop-blur-md p-8 rounded-2xl border border-slate-800/80 hover:border-[#10B981]/30 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] font-bold text-xl mb-6 group-hover:bg-[#10B981] group-hover:text-[#0F172A] transition-all">
                                02
                            </div>
                            <h3 className="text-2xl font-bold text-[#dae2fd] mb-4">Mathematical Shield</h3>
                            <p className="text-lg text-[#bbcabf] leading-relaxed font-light">
                                Enforcing strict Risk-to-Reward parameters to ensure that long-term profitability remains mathematically guaranteed.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-[#222a3d]/20 backdrop-blur-md p-8 rounded-2xl border border-slate-800/80 hover:border-[#10B981]/30 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] font-bold text-xl mb-6 group-hover:bg-[#10B981] group-hover:text-[#0F172A] transition-all">
                                03
                            </div>
                            <h3 className="text-2xl font-bold text-[#dae2fd] mb-4">Mental Stillness</h3>
                            <p className="text-lg text-[#bbcabf] leading-relaxed font-light">
                                Cultivating absolute emotional neutrality, enabling traders to execute plans effortlessly without fear or greed.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-800/40" />

                {/* Section 3: The Experiential Quote */}
                <section className="relative bg-[#222a3d]/10 backdrop-blur-md p-10 md:p-14 rounded-3xl border border-[#10B981]/20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#4285F4]/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                        <p className="text-2xl md:text-3xl text-[#dae2fd] leading-loose font-light italic">
                            &ldquo;The market is a mirror reflecting your inner state. If you are chaotic inside, your charts will look chaotic. True trading is not about beating the market; it is about completely conquering your own ego.&rdquo;
                        </p>
                        <div className="space-y-1">
                            <p className="text-[#10B981] font-semibold text-lg tracking-widest uppercase">The Master Trader</p>
                            <p className="text-sm text-[#bbcabf]/50 font-light">Founder, ForexMaster Ecosystem</p>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="py-16 border-t border-slate-800/50 bg-[#0b1326] text-center">
                <p className="text-base text-[#bbcabf]/60 uppercase tracking-widest font-light">
                    ForexMaster Ecosystem &copy; 2026 | All Rights Reserved
                </p>
            </footer>
        </div>
    );
}