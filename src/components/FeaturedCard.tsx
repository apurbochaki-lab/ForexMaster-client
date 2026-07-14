import Image from "next/image";
import { Button } from "@heroui/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface FeaturedCardProps {
    data: {
        _id: string;
        image: string;
        title: string;
        description: string;
        pair: string;
        tradingType: string;
    };
}

export default function FeaturedCard({ data }: FeaturedCardProps) {
    return (
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(74,222,128,0.25)] active:-translate-y-1 active:border-green-500/50 active:shadow-[0_0_30px_rgba(74,222,128,0.25)]">

            <div className="absolute -left-20 -top-20 -z-10 h-40 w-40 rounded-full bg-green-600/10 blur-[80px] transition-all duration-500 group-hover:bg-green-500/20 group-active:bg-green-500/20" />
            <div className="absolute -right-20 -bottom-20 -z-10 h-40 w-40 rounded-full bg-blue-600/10 blur-[80px] transition-all duration-500 group-hover:bg-blue-500/20 group-active:bg-blue-500/20" />

            <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-800 border border-white/5">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        priority={false}
                    />
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="inline-block rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400 border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.15)]">
                        {data.pair}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                        {data.tradingType}
                    </span>
                </div>

                <h3 className="mt-4 line-clamp-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-green-400">
                    {data.title}
                </h3>

                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
                    {data.description}
                </p>
            </div>

            {/* HeroUI CTA Trigger Action structure alignment theme context check active logic map area dynamic transform alignment standard parameters context data alignment triggers context parameters map standard processing filtering alignment parameters base parameter Filtering align context dynamic alignment parameters Filtering alignment triggers parameters filtering data context data standard Mapping align data transform standard */}
            <div className="mt-6 pt-3">
                <Link href={`/analysis/details/${data._id}`}>
                    <Button
                        // radius="lg"
                        className="w-full h-12 font-semibold tracking-wide bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-slate-950 shadow-xl shadow-green-500/20"
                    >
                        Explore Details <ArrowUpRight size={18} />
                    </Button>
                </Link>
            </div>
        </div>
    );
}