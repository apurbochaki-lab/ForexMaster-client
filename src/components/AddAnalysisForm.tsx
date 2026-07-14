"use client";

import { FormEvent, useState, ChangeEvent } from "react";
import {
    Button,
    Card,
    Input,
    Label,
    ListBox,
    Select,
    TextArea,
    TextField,
} from "@heroui/react";

import {
    ArrowUpFromLine,
    ChartColumn,
    Image as ImageIcon,
    X,
    FileText,
} from "lucide-react";
import Image from "next/image";
import { imageUpload } from "@/lib/core/imgUpload";
import { postAnalysis } from "@/lib/actions/analysis";
import toast from "react-hot-toast";
import { getSession } from "@/lib/core/session";

const currencyPairOptions = [
    "EURUSD",
    "GBPUSD",
    "USDJPY",
    "AUDUSD",
    "USDCAD",
    "NZDUSD",
    "USDCHF",
    "XAUUSD (GOLD)",
    "BTCUSD",
];

const strategyOptions = [
    "Price Action",
    "Support & Resistance",
    "Trendline",
    "Breakout",
    "Supply & Demand",
    "Multi-Timeframe Analysis",
];

const timeframeOptions = [
    "M15",
    "M30",
    "H1",
    "H4",
    "D1",
    "W1",
];

const marketBiasOptions = [
    "Bullish",
    "Bearish",
    "Neutral",
];

const confidenceOptions = [
    "Low",
    "Medium",
    "High",
];

const tradingTypeOptions = [
    "Scalping Trading",
    "Intraday Trading",
    "Swing Trading",
    "Position Trading",
    "Momentum Trading",
    "Breakout Trading",
    "⚠️ News Trading"
]


type AnalysisFormProps = {
    user: Awaited<ReturnType<typeof getSession>>;
};

export default function AnalysisForm({ user }: AnalysisFormProps) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const removeSelectedImage = () => {
        setSelectedFile(null);
        setImagePreview(null);
    };


    // --------------------------------------------------------------


    const handleAddAnalysis = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        // Default Image
        let imgUrl = "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"

        // If Image not selected validation
        // if (data.image && data.image.size > 0) {
        //     const uploadedImg = await imageUpload(data.image)

        //     if (uploadedImg?.url) {
        //         imgUrl = uploadedImg?.url
        //     }
        // }

        if (selectedFile) {
            const uploadedImg = await imageUpload(selectedFile);

            if (uploadedImg?.url) {
                imgUrl = uploadedImg.url;
            }
        }

        const newData = {
            ...data,
            image: imgUrl,
            authorId: user?.id,
            authorName: user?.name
        }

        // POST data to the database
        const res = await postAnalysis(newData)

        if (res?.insertedId) {
            toast.success("Analysis Posted")

            // Clear form
            // e.target.reset();
            form.reset();
            setImagePreview(null);
            setSelectedFile(null);
        }
    };



    return (
        <Card className="bg-[#1E293B]/70 backdrop-blur-md border border-slate-700/50 rounded-3xl shadow-2xl p-6 sm:p-8 mb-20">
            <Card.Header className="flex items-center gap-4 border-b border-slate-700/50 pb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 flex items-center justify-center border border-[#10B981]/20">
                    <ChartColumn size={24} className="text-[#10B981]" />
                </div>

                <div>
                    <Card.Title className="text-2xl font-bold text-white text-center">
                        Add New Analysis
                    </Card.Title>
                    <Card.Description className="text-slate-400 text-sm mt-0.5">
                        Provide the details below to forecast your chart setup.
                    </Card.Description>
                </div>
            </Card.Header>

            <Card.Content className="pt-8">
                <form onSubmit={handleAddAnalysis} className="space-y-6">
                    {/* Title */}
                    <TextField name="title" className="w-full">
                        <Label className="text-sm font-medium text-slate-300 mb-2 block">
                            Analysis Title
                        </Label>
                        <Input
                            placeholder="EURUSD Shows Bullish Momentum Near Support Zone"
                            className="w-full bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 rounded-xl focus:border-[#10B981] transition-all h-12 px-4"
                        />
                    </TextField>

                    {/* Current Condition */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="currentCondition" className="text-sm font-medium text-slate-300">
                            Current Market Condition
                        </Label>
                        <TextArea
                            id="currentCondition"
                            name="currentCondition"
                            rows={3}
                            placeholder="Describe current market condition..."
                            className="w-full bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 rounded-xl focus:border-[#10B981] transition-all p-4"
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="description" className="text-sm font-medium text-slate-300">
                            Full Analysis Description
                        </Label>
                        <TextArea
                            id="description"
                            name="description"
                            rows={5}
                            placeholder="Explain your analysis in detail..."
                            className="w-full bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 rounded-xl focus:border-[#10B981] transition-all p-4"
                        />
                    </div>

                    {/* Grid Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {/* Currency Pair (Modified to Select) */}
                        <Select
                            name="pair"
                            className="w-full"
                            placeholder="Select pair"
                        >
                            <Label className="text-sm font-medium text-slate-300 mb-2 block">Currency Pair</Label>
                            <Select.Trigger className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl h-12 px-4 flex items-center justify-between">
                                <Select.Value />
                                <Select.Indicator className="text-slate-400" />
                            </Select.Trigger>
                            <Select.Popover className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl mt-1">
                                <ListBox className="p-1">
                                    {currencyPairOptions.map((item) => (
                                        <ListBox.Item
                                            key={item}
                                            id={item}
                                            textValue={item}
                                            className="text-slate-200 hover:bg-[#10B981] hover:text-white px-3 py-2 rounded-lg cursor-pointer transition-colors"
                                        >
                                            {item}
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    ))}
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        {/* Strategy */}
                        <Select
                            name="strategy"
                            className="w-full"
                            placeholder="Select strategy"
                        >
                            <Label className="text-sm font-medium text-slate-300 mb-2 block">Strategy</Label>
                            <Select.Trigger className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl h-12 px-4 flex items-center justify-between">
                                <Select.Value />
                                <Select.Indicator className="text-slate-400" />
                            </Select.Trigger>
                            <Select.Popover className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl mt-1">
                                <ListBox className="p-1">
                                    {strategyOptions.map((item) => (
                                        <ListBox.Item
                                            key={item}
                                            id={item}
                                            textValue={item}
                                            className="text-slate-200 hover:bg-[#10B981] hover:text-white px-3 py-2 rounded-lg cursor-pointer transition-colors"
                                        >
                                            {item}
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    ))}
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        {/* Timeframe */}
                        <Select
                            name="timeframe"
                            className="w-full"
                            placeholder="Select timeframe"
                        >
                            <Label className="text-sm font-medium text-slate-300 mb-2 block">Timeframe</Label>
                            <Select.Trigger className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl h-12 px-4 flex items-center justify-between">
                                <Select.Value />
                                <Select.Indicator className="text-slate-400" />
                            </Select.Trigger>
                            <Select.Popover className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl mt-1">
                                <ListBox className="p-1">
                                    {timeframeOptions.map((item) => (
                                        <ListBox.Item
                                            key={item}
                                            id={item}
                                            textValue={item}
                                            className="text-slate-200 hover:bg-[#10B981] hover:text-white px-3 py-2 rounded-lg cursor-pointer transition-colors"
                                        >
                                            {item}
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    ))}
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        {/* Market Bias */}
                        <Select
                            name="marketBias"
                            className="w-full"
                            placeholder="Select bias"
                        >
                            <Label className="text-sm font-medium text-slate-300 mb-2 block">Market Bias</Label>
                            <Select.Trigger className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl h-12 px-4 flex items-center justify-between">
                                <Select.Value />
                                <Select.Indicator className="text-slate-400" />
                            </Select.Trigger>
                            <Select.Popover className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl mt-1">
                                <ListBox className="p-1">
                                    {marketBiasOptions.map((item) => (
                                        <ListBox.Item
                                            key={item}
                                            id={item}
                                            textValue={item}
                                            className="text-slate-200 hover:bg-[#10B981] hover:text-white px-3 py-2 rounded-lg cursor-pointer transition-colors"
                                        >
                                            {item}
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    ))}
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        {/* Confidence */}
                        <Select
                            name="confidence"
                            className="w-full"
                            placeholder="Select confidence"
                        >
                            <Label className="text-sm font-medium text-slate-300 mb-2 block">Confidence</Label>
                            <Select.Trigger className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl h-12 px-4 flex items-center justify-between">
                                <Select.Value />
                                <Select.Indicator className="text-slate-400" />
                            </Select.Trigger>
                            <Select.Popover className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl mt-1">
                                <ListBox className="p-1">
                                    {confidenceOptions.map((item) => (
                                        <ListBox.Item
                                            key={item}
                                            id={item}
                                            textValue={item}
                                            className="text-slate-200 hover:bg-[#10B981] hover:text-white px-3 py-2 rounded-lg cursor-pointer transition-colors"
                                        >
                                            {item}
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    ))}
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        {/* Trading Type */}
                        <Select
                            name="tradingType"
                            className="w-full"
                            placeholder="Select confidence"
                        >
                            <Label className="text-sm font-medium text-slate-300 mb-2 block">Trading Type</Label>
                            <Select.Trigger className="w-full bg-slate-900/50 border border-slate-700 text-white rounded-xl h-12 px-4 flex items-center justify-between">
                                <Select.Value />
                                <Select.Indicator className="text-slate-400" />
                            </Select.Trigger>
                            <Select.Popover className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl mt-1">
                                <ListBox className="p-1">
                                    {tradingTypeOptions.map((item) => (
                                        <ListBox.Item
                                            key={item}
                                            id={item}
                                            textValue={item}
                                            className="text-slate-200 hover:bg-[#10B981] hover:text-white px-3 py-2 rounded-lg cursor-pointer transition-colors"
                                        >
                                            {item}
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    ))}
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Enhanced Image Upload Section */}
                    <div className="space-y-3 relative">
                        <Label htmlFor="image" className="text-sm font-medium text-slate-300">
                            Analysis Chart Image
                        </Label>

                        {/* ইনপুটটিকে কন্ডিশনের বাইরে নিয়ে আসা হয়েছে যাতে ইমেজ প্রিভিউ হলেও ফাইল ডেটা গায়েব না হয় */}
                        <input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="absolute w-0 h-0 opacity-0 pointer-events-none"
                        />

                        {!imagePreview ? (
                            <label
                                htmlFor="image"
                                className="border-2 border-dashed border-slate-700 hover:border-[#10B981] rounded-2xl bg-slate-900/40 transition-all duration-300 cursor-pointer p-8 flex flex-col items-center justify-center gap-3 dynamic-glow"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20">
                                    <ImageIcon size={22} className="text-[#10B981]" />
                                </div>

                                <div className="text-center">
                                    <h3 className="text-base font-semibold text-white flex items-center justify-center gap-2">
                                        <ArrowUpFromLine size={16} />
                                        Upload Chart Screenshot
                                    </h3>
                                    <p className="text-xs text-slate-400 mt-1">
                                        PNG, JPG, JPEG supported
                                    </p>
                                </div>
                            </label>
                        ) : (
                            /* Selected File Name & Image Preview Box */
                            <div className="border border-slate-700 bg-slate-900/60 rounded-2xl p-4 space-y-4 relative">
                                <div className="flex items-center justify-between bg-slate-800/80 p-3 rounded-xl border border-slate-700/50">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <FileText size={20} className="text-[#10B981] shrink-0" />
                                        <span className="text-sm text-slate-200 font-medium truncate">
                                            {selectedFile?.name}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={removeSelectedImage}
                                        className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                <div className="overflow-hidden rounded-xl border border-slate-700/60 max-h-[350px] bg-slate-950 flex justify-center items-center">
                                    <Image
                                        src={imagePreview}
                                        width={500}
                                        height={500}
                                        alt="Chart Preview"
                                        className="object-contain w-full h-full max-h-[350px]"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full h-12 bg-[#10B981] hover:bg-[#0EA371] text-white text-base font-semibold rounded-xl shadow-lg shadow-[#10B981]/10 transition-all active:scale-[0.99]"
                    >
                        Publish Analysis
                    </Button>
                </form>
            </Card.Content>
        </Card>
    );
}