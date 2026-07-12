"use client";

import { FormEvent } from "react";
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
    Image,
} from "lucide-react";

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

export default function AddAnalysisForm() {
    const handleAddAnalysis = (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const data = Object.fromEntries(
            formData.entries()
        );

        console.log(data);
    };

    return (
        <section className="min-h-screen bg-[#0F172A] py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <Card className="bg-[#1E293B] border border-white/10 rounded-3xl shadow-xl">
                    <Card.Header className="flex items-center gap-4 border-b border-white/10 pb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#10B981]/15 flex items-center justify-center">
                            <ChartColumn
                                size={28}
                                className="text-[#10B981]"
                            />
                        </div>

                        <div>
                            <Card.Title className="text-3xl font-bold text-white">
                                Add New Analysis
                            </Card.Title>

                            <Card.Description className="text-[#CBD5E1] mt-1">
                                Publish your forex market analysis for traders.
                            </Card.Description>
                        </div>
                    </Card.Header>

                    <Card.Content className="pt-8">
                        <form
                            onSubmit={handleAddAnalysis}
                            className="space-y-6"
                        >
                            {/* Title */}
                            <TextField
                                name="title"
                                className="w-full"
                            >
                                <Label>Analysis Title</Label>
                                <Input placeholder="EURUSD Shows Bullish Momentum Near Support Zone" />
                            </TextField>

                            {/* Current Condition */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="currentCondition">
                                    Current Market Condition
                                </Label>

                                <TextArea
                                    id="currentCondition"
                                    name="currentCondition"
                                    rows={3}
                                    placeholder="Describe current market condition..."
                                />
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="description">
                                    Full Analysis Description
                                </Label>

                                <TextArea
                                    id="description"
                                    name="description"
                                    rows={6}
                                    placeholder="Explain your analysis in detail..."
                                />
                            </div>

                            {/* Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {/* Pair */}
                                <TextField
                                    name="pair"
                                    className="w-full"
                                >
                                    <Label>Currency Pair</Label>
                                    <Input placeholder="EURUSD" />
                                </TextField>

                                {/* Strategy */}
                                <Select
                                    name="strategy"
                                    className="w-full"
                                    placeholder="Select strategy"
                                >
                                    <Label>Strategy</Label>

                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            {strategyOptions.map(
                                                (item) => (
                                                    <ListBox.Item
                                                        key={item}
                                                        id={item}
                                                        textValue={item}
                                                    >
                                                        {item}
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                )
                                            )}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>

                                {/* Timeframe */}
                                <Select
                                    name="timeframe"
                                    className="w-full"
                                    placeholder="Select timeframe"
                                >
                                    <Label>Timeframe</Label>

                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            {timeframeOptions.map(
                                                (item) => (
                                                    <ListBox.Item
                                                        key={item}
                                                        id={item}
                                                        textValue={item}
                                                    >
                                                        {item}
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                )
                                            )}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>

                                {/* Market Bias */}
                                <Select
                                    name="marketBias"
                                    className="w-full"
                                    placeholder="Select bias"
                                >
                                    <Label>Market Bias</Label>

                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            {marketBiasOptions.map(
                                                (item) => (
                                                    <ListBox.Item
                                                        key={item}
                                                        id={item}
                                                        textValue={item}
                                                    >
                                                        {item}
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                )
                                            )}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>

                                {/* Confidence */}
                                <Select
                                    name="confidence"
                                    className="w-full"
                                    placeholder="Select confidence"
                                >
                                    <Label>Confidence</Label>

                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            {confidenceOptions.map(
                                                (item) => (
                                                    <ListBox.Item
                                                        key={item}
                                                        id={item}
                                                        textValue={item}
                                                    >
                                                        {item}
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                )
                                            )}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* Image Upload */}
                            <div className="space-y-3">
                                <Label htmlFor="image">
                                    Analysis Chart Image
                                </Label>

                                <label
                                    htmlFor="image"
                                    className="border-2 border-dashed border-white/15 rounded-3xl bg-[#0F172A] hover:border-[#10B981] transition-all duration-300 cursor-pointer p-10 flex flex-col items-center justify-center gap-4"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-[#10B981]/10 flex items-center justify-center">
                                        <Image
                                            size={30}
                                            className="text-[#10B981]"
                                        />
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-lg font-semibold text-white flex items-center justify-center gap-2">
                                            <ArrowUpFromLine size={18} />
                                            Upload Chart Screenshot
                                        </h3>

                                        <p className="text-sm text-[#CBD5E1] mt-2">
                                            PNG, JPG, JPEG supported
                                        </p>
                                    </div>

                                    <input
                                        id="image"
                                        name="image"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                    />
                                </label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-14 bg-[#10B981] hover:bg-[#0EA371] text-white text-lg font-semibold rounded-2xl"
                            >
                                Publish Analysis
                            </Button>
                        </form>
                    </Card.Content>
                </Card>
            </div>
        </section>
    );
}