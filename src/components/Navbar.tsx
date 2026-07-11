const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/60 backdrop-blur-xl border-b border-white/10">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <span className="text-[28px] font-bold text-[#dae2fd]">
                        ForexMaster
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#"
                        className="text-[#4edea3] font-bold border-b-2 border-[#4edea3] pb-1"
                    >
                        Markets
                    </a>

                    <a
                        href="#"
                        className="text-[#bbcabf] hover:text-[#ffb95f] transition-colors duration-300"
                    >
                        Signals
                    </a>

                    <a
                        href="#"
                        className="text-[#bbcabf] hover:text-[#ffb95f] transition-colors duration-300"
                    >
                        Analysis
                    </a>

                    <a
                        href="#"
                        className="text-[#bbcabf] hover:text-[#ffb95f] transition-colors duration-300"
                    >
                        Academy
                    </a>

                    <a
                        href="#"
                        className="text-[#bbcabf] hover:text-[#ffb95f] transition-colors duration-300"
                    >
                        Pricing
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-6 py-2 rounded-lg border-2 border-[#ffb95f] text-[#ffb95f] font-bold hover:bg-[#ffb95f]/10 active:scale-95 transition-all">
                        Login
                    </button>

                    <button className="px-6 py-2 rounded-lg bg-[#10b981] text-[#00422b] font-bold hover:scale-105 active:scale-95 transition-all">
                        Register
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;