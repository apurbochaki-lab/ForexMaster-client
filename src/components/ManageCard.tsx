"use client";

import { useState } from "react";
import { Card, Chip, Button, AlertDialog } from "@heroui/react";
import { Eye, Trash2, CalendarDays, DollarSign } from "lucide-react";
import Link from "next/link";
import { Analysis } from "@/app/analysis/manage/page";
import Image from "next/image";
import { deleteAnalysis } from "@/lib/api/analysis";
import toast from "react-hot-toast";
import { refreshPage } from "@/lib/core/refreshPage";

interface ManageCardProps {
    myAnalysis: Analysis[];
}

const ManageCard = ({ myAnalysis }: ManageCardProps) => {
    const [items, setItems] = useState<Analysis[]>(myAnalysis);

    const handleDelete = async (analysisId: string) => {

        try {
            // TODO: integrate your actual delete API route here
            const res = await deleteAnalysis(analysisId)

            if (res?.deletedCount > 0) {
                refreshPage("/analysis/manage")
                toast.success("Deleted successfully")
            } else {
                toast.error("Something went wrong!")
            }
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Internal error 500")
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {myAnalysis.map((item) => {
                const formattedDate = new Date(item.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                });

                return (
                    <Card
                        key={item._id}
                        className="border border-slate-800/80 bg-[#1E293B]/40 hover:bg-[#1E293B]/60 transition-all duration-300 rounded-2xl shadow-lg flex flex-col overflow-hidden group w-full h-full justify-between"
                    >
                        {/* Perfect Image section directly using stable dynamic layout wrapper */}
                        <div className="relative w-full h-48 overflow-hidden bg-slate-900 border-b border-slate-800/60">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Trading Type Pill */}
                            <div className="absolute top-3 left-3 z-10">
                                <Chip
                                    className="bg-slate-900/90 backdrop-blur-md text-slate-300 font-semibold border border-slate-800 text-xs px-2 py-0.5"
                                    size="sm"
                                >
                                    {item.tradingType}
                                </Chip>
                            </div>
                        </div>

                        {/* Text Content area - Spacing problem perfectly solved */}
                        <div className="p-5 flex-grow flex flex-col items-start justify-start space-y-2">
                            <div className="flex items-center gap-1 text-xs text-emerald-400 font-mono tracking-wider font-bold">
                                <DollarSign size={14} />
                                {item.pair}
                            </div>

                            <h3 className="text-base font-bold text-slate-100 leading-snug line-clamp-2">
                                {item.title}
                            </h3>

                            <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                                {item.currentCondition}
                            </p>
                        </div>

                        {/* Action buttons footer with minimal uniform spacing gaps */}
                        <div className="p-5 pt-0 flex flex-col space-y-3 mt-auto">
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 w-full pl-0.5 border-t border-slate-800/60 pt-3">
                                <CalendarDays size={14} className="text-slate-600" />
                                <span>Published: {formattedDate}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-3 w-full">
                                <Link href={`/analysis/details/${item._id}`} className="w-full">
                                    <Button
                                        className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all py-2"
                                    >
                                        <Eye size={14} />
                                        View
                                    </Button>
                                </Link>

                                {/* <Button
                                    onPress={() => handleDelete(item._id)}
                                    className="w-full bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/20 font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all py-2"
                                >
                                    <Trash2 size={14} />
                                    Delete
                                </Button> */}

                                <AlertDialog>
                                    <Button
                                        // onPress={() => handleDelete(item._id)}
                                        className="w-full bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/20 font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all py-2"
                                    >
                                        <Trash2 size={14} />
                                        Delete
                                    </Button>

                                    <AlertDialog.Backdrop>
                                        <AlertDialog.Container>
                                            <AlertDialog.Dialog className="sm:max-w-[400px] bg-[#0F172A]">
                                                <AlertDialog.CloseTrigger className="text-white bg-red-700" />
                                                <AlertDialog.Header>
                                                    <AlertDialog.Icon status="danger" className="text-red-400" />
                                                    <AlertDialog.Heading className="text-white">
                                                        Delete this analysis permanently?
                                                    </AlertDialog.Heading>
                                                </AlertDialog.Header>
                                                <AlertDialog.Body>
                                                    <p className="text-zinc-300/90">
                                                        This will permanently delete <strong>your posted analysis</strong> and all of its
                                                        data. This action cannot be undone.
                                                    </p>
                                                </AlertDialog.Body>
                                                <AlertDialog.Footer>
                                                    <Button slot="close" variant="tertiary">
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        onClick={() => handleDelete(item._id)}
                                                        slot="close"
                                                        variant="danger">
                                                        Delete Analysis
                                                    </Button>
                                                </AlertDialog.Footer>
                                            </AlertDialog.Dialog>
                                        </AlertDialog.Container>
                                    </AlertDialog.Backdrop>
                                </AlertDialog>
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};

export default ManageCard;