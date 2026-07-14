'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bars, House, ChartAreaStacked, ArrowShapeTurnUpLeft, LayoutCells, FileText, CircleInfoFill } from "@gravity-ui/icons";
import { Button, Drawer, Spinner } from "@heroui/react";
import { useMemo, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter()

    // Drawer-এর স্টেট কন্ট্রোল
    const [isOpen, setIsOpen] = useState(false);

    // Better auth session user (Demo)
    // const user: boolean = false;

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    // console.log(user, "Loading -->", isPending)

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/auth/login");
                },
            },
        });
    }

    const navLinks = useMemo(() => {
        const links = [
            { label: "Home", href: "/", icon: House },
            { label: "Analysis", href: "/analysis", icon: ChartAreaStacked },
            { label: "Blog", href: "/blog", icon: FileText },
            { label: "About", href: "/about", icon: CircleInfoFill },
        ];

        if (user) {
            links.push(
                { label: "Add Analysis", href: "/analysis/add", icon: ArrowShapeTurnUpLeft },
                { label: "Manage Analysis", href: "/analysis/manage", icon: LayoutCells }
            );
        }
        return links;
    }, [user]);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/60 backdrop-blur-xl border-b border-white/10 text-white">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                {/* Brand Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Image
                            src="/nav-logo-1.png"
                            alt="ForexMaster Brand Logo"
                            width={220}
                            height={200}
                        />
                    </Link>
                </div>

                {/* ================= DESKTOP VIEW ================= */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathName === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    isActive
                                        ? "text-[#4edea3] font-bold border-b-2 border-[#4edea3] pb-1"
                                        : "text-[#bbcabf] hover:text-[#ffb95f] transition-colors duration-300"
                                }
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">

                    {isPending ?
                        <div className="flex flex-col items-center gap-2">
                            <Spinner color="success" />
                            <span className="text-xs text-muted">Loading</span>
                        </div>
                        : user ? (
                            <button onClick={handleLogout} className="px-6 py-2 rounded-lg border-2 border-red-500 text-red-500 font-bold hover:bg-red-500/10 active:scale-95 transition-all">
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link href="/auth/login">
                                    <button className="px-6 py-2 rounded-lg border-2 border-[#ffb95f] text-[#ffb95f] font-bold hover:bg-[#ffb95f]/10 active:scale-95 transition-all">
                                        Login
                                    </button>
                                </Link>
                                <Link href="/auth/register">
                                    <button className="px-6 py-2 rounded-lg bg-[#10b981] text-[#00422b] font-bold hover:scale-105 active:scale-95 transition-all">
                                        Register
                                    </button>
                                </Link>
                            </>
                        )}
                </div>


                {/* ================= MOBILE VIEW (HeroUI Drawer) ================= */}
                <div className="md:hidden">
                    {/* Trigger Button - এটা সবসময় ড্রয়ারের বাইরে থাকবে */}
                    <Button
                        isIconOnly
                        onPress={() => setIsOpen(true)}
                        className="bg-[#0b1326]/40 text-[#dae2fd] border border-white/10 hover:bg-white/10 min-w-0 p-2 rounded-xl"
                    >
                        <Bars className="size-6" />
                    </Button>

                    {/* ফিক্স: কন্ডিশনাল রেন্ডারিং। isOpen true হলেই কেবল ড্রয়ার ডম-এ আসবে, নয়তো পুরোপুরি রিমুভ হয়ে যাবে */}
                    {isOpen && (
                        <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
                            <Drawer.Backdrop />

                            <Drawer.Content
                                placement="left"
                                className="bg-[#0b1326] text-white border-r border-white/10 w-[280px] h-full"
                            >
                                <Drawer.Dialog className="bg-[#0b1326] h-full flex flex-col m-0 rounded-none">
                                    <Drawer.CloseTrigger
                                        onPress={() => setIsOpen(false)}
                                        className="text-red-500 bg-red-100 hover:text-white top-4 right-4 absolute z-50"
                                    />
                                    <Drawer.Header className="border-b border-white/5 px-6 py-5">
                                        <Drawer.Heading className="mt-5"
                                            onClick={() => setIsOpen(false)}>
                                            <Link href="/" >
                                                <Image
                                                    src="/nav-logo-1.png"
                                                    alt="ForexMaster Brand Logo"
                                                    width={200}
                                                    height={200}
                                                />
                                            </Link>
                                        </Drawer.Heading>
                                    </Drawer.Header>

                                    <Drawer.Body className="flex flex-col justify-between py-6 px-4 h-full overflow-y-auto bg-[#0b1326]">
                                        {/* Mobile Navigation Links */}
                                        <nav className="flex flex-col gap-2">
                                            {navLinks.map((link) => {
                                                const isActive = pathName === link.href;
                                                const Icon = link.icon;
                                                return (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        onClick={() => setIsOpen(false)} // ক্লিক করলে ড্রয়ার বন্ধ হবে
                                                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all ${isActive
                                                            ? "bg-[#4edea3]/10 text-[#4edea3] font-bold border-l-4 border-[#4edea3]"
                                                            : "text-[#bbcabf] hover:bg-white/5 hover:text-[#ffb95f]"
                                                            }`}
                                                    >
                                                        <Icon className="size-5" />
                                                        {link.label}
                                                    </Link>
                                                );
                                            })}
                                        </nav>

                                        {/* Mobile Conditional Auth Buttons */}
                                        <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-white/10 bg-[#0b1326]">
                                            {user ? (
                                                <button onClick={handleLogout} className="w-full px-6 py-3 rounded-xl border-2 border-red-500 text-red-500 font-bold hover:bg-red-500/10 active:scale-95 transition-all text-center">
                                                    Logout
                                                </button>
                                            ) : (
                                                <>
                                                    <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                                                        <button className="w-full px-6 py-3 rounded-xl border-2 border-[#ffb95f] text-[#ffb95f] font-bold hover:bg-[#ffb95f]/10 active:scale-95 transition-all text-center">
                                                            Login
                                                        </button>
                                                    </Link>
                                                    <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                                                        <button className="w-full px-6 py-3 rounded-xl bg-[#10b981] text-[#00422b] font-bold hover:opacity-90 active:scale-95 transition-all text-center">
                                                            Register
                                                        </button>
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                    </Drawer.Body>
                                </Drawer.Dialog>
                            </Drawer.Content>
                        </Drawer>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;