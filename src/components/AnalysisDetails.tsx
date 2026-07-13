"use client";

import React from "react";
import { Card, Chip } from "@heroui/react";
import {
    TrendingUp,
    Clock,
    BarChart2,
    ShieldAlert,
    Zap,
    CalendarDays
} from "lucide-react";
import Image from "next/image";

interface AnalysisData {
    _id: string;
    title: string;
    currentCondition: string;
    description: string;
    pair: string;
    strategy: string;
    timeframe: string;
    marketBias: string;
    confidence: string;
    tradingType: string;
    image: string;
    authorName: string;
    createdAt: string
}

interface AnalysisDetailsProps {
    details: AnalysisData;
}

const AnalysisDetails = ({ details }: AnalysisDetailsProps) => {
    // Elegant Date Formatting
    const formattedDate = new Date(details.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    const isBullish = details.marketBias.toLowerCase()
    // === "bullish";

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">

            {/* LEFT SIDE: Big Eye-Catching Image Section */}
            <div className="lg:col-span-7 xl:col-span-8 w-full">
                <Card className="border border-slate-800 bg-[#1E293B]/40 backdrop-blur-md overflow-hidden rounded-2xl shadow-2xl p-2">
                    <Card.Content className="p-0">
                        <div className="relative group overflow-hidden rounded-xl">
                            <Image
                                src={details.image}
                                alt={details.title}
                                width={1000}
                                height={700}
                                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
                            />
                            {/* Floating Pair Tag over Image */}
                            <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white px-4 py-2 rounded-xl font-bold shadow-lg text-sm">
                                {details.pair}
                            </div>
                        </div>
                    </Card.Content>
                </Card>

                {/* Description & Current Condition Below Image */}
                <div className="mt-8 space-y-6 px-1">
                    <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                        <h3 className="text-lg font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                            <Zap size={18} /> Current Market Condition
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            {details.currentCondition}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-slate-200">Detailed Analysis</h3>
                        <p className="text-slate-400 text-base leading-relaxed whitespace-pre-line">
                            {details.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Information Dashboard */}
            <div className="lg:col-span-5 xl:col-span-4 w-full sticky top-28">
                <Card className="border border-slate-800 bg-[#1E293B]/60 backdrop-blur-md rounded-2xl shadow-xl p-5">

                    {/* Technical Badges Header */}
                    <Card.Header className="flex flex-row items-center justify-between border-b border-slate-800/80 pb-4 p-0">
                        <div>
                            <Card.Description className="text-xs text-slate-500 uppercase font-medium">Trading Pair</Card.Description>
                            <Card.Title className="text-xl font-black text-white tracking-wide mt-0.5">{details.pair}</Card.Title>
                        </div>
                        <Chip
                            className={`text-xs font-bold px-2 uppercase ${isBullish === "bullish"
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : isBullish === "bearish" ? "bg-rose-500/20 text-rose-400 border border-rose-500/30" : "bg-yellow-500/20 text-amber-400 border border-yellow-500/30"
                                }`}
                            size="md"
                        >
                            {details.marketBias}
                        </Chip>
                    </Card.Header>

                    {/* Analysis Parameters Grid */}
                    <Card.Content className="space-y-6 pt-5 p-0">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
                                <span className="text-slate-500 text-sm flex items-center gap-1.5 mb-1">
                                    <Clock size={13} /> Timeframe
                                </span>
                                <p className="text-md font-semibold text-slate-200">{details.timeframe}</p>
                            </div>

                            <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
                                <span className="text-slate-500 text-sm flex items-center gap-1.5 mb-1">
                                    <ShieldAlert size={13} /> Confidence
                                </span>
                                <p className="text-sm font-semibold text-amber-400">{details.confidence}</p>
                            </div>

                            <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
                                <span className="text-slate-500 text-sm flex items-center gap-1.5 mb-1">
                                    <BarChart2 size={13} /> Strategy
                                </span>
                                <p className="text-sm font-semibold text-slate-200 truncate" title={details.strategy}>
                                    {details.strategy}
                                </p>
                            </div>

                            <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
                                <span className="text-slate-500 text-sm flex items-center gap-1.5 mb-1">
                                    <TrendingUp size={13} /> Setup Type
                                </span>
                                <p className="text-sm font-semibold text-indigo-400 truncate" title={details.tradingType}>
                                    {details.tradingType}
                                </p>
                            </div>
                        </div>
                    </Card.Content>

                    {/* Author & Publication Meta Metadata */}
                    <Card.Footer className="border-t border-slate-800/80 mt-4 pt-4 flex flex-col items-start gap-3 p-0">
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 font-bold text-sm">
                                {details.authorName.charAt(0)}
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Analyst</p>
                                <p className="text-sm font-medium text-slate-200">{details.authorName}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-slate-500 pl-1 pt-1">
                            <CalendarDays size={14} className="text-slate-600" />
                            <span>Published on {formattedDate}</span>
                        </div>
                    </Card.Footer>

                </Card>
            </div>

        </div>
    );
};

export default AnalysisDetails;