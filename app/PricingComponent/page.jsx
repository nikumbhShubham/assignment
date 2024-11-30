"use client"
import React, { useState } from "react";
// import { ArrowLeftIcon, InformationCircleIcon } from "@heroicons/react/solid";
import { FaArrowLeft } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import Link from "next/link";

const PricingComponent = () => {
    const [selectedDuration, setSelectedDuration] = useState("60 min");

    const cards = [
        {
            title: "Group Therapy",
            price: "₹3,200",
            features: [
                "Joint Evaluation",
                "Communication Exercises",
                "Conflict Resolution",
                "Goal Setting",
                "Follow up plan",
            ],
        },
        {
            title: "Individual Therapy",
            price: "₹3,200",
            features: [
                "Joint Evaluation",
                "Communication Exercises",
                "Conflict Resolution",
                "Goal Setting",
                "Follow up plan",
            ],
        },
        {
            title: "Couple Therapy",
            price: "₹3,200",
            features: [
                "Joint Evaluation",
                "Communication Exercises",
                "Conflict Resolution",
                "Goal Setting",
                "Follow up plan",
            ],
        },
    ];

    return (
        <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center space-x-4">
                <Link 
                href={'/TherapistPortfolio'}
                >
                <FaArrowLeft className="h-6 w-6 text-gray-700 cursor-pointer" />
                
                </Link>
            </div>

            {/* Info Banner */}
            <div className="flex items-center space-x-2 bg-blue-50 border border-blue-300 rounded-lg p-4 w-[450px] mx-auto mb-8">
                <CiCircleInfo className="h-6 w-6 text-blue-500" />
                <p className="text-blue-600 text-sm">
                    Click on the duration to see the pricing details
                </p>
            </div>

            {/* Pricing Cards */}
            <div className=" m-14 grid grid-cols-1 md:grid-cols-3 gap-10  ">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-b from-[#5b57c5] to-blue-600 text-white p-6 rounded-lg shadow-lg space-y-4"
                    >
                        <div className="text-3xl font-bold text-center">{card.price} <span className="text-lg font-normal">/ session</span></div>
                        <div className="flex justify-center space-x-2">
                            {['45 min', '60 min', '90 min'].map((duration) => (
                                <button
                                    key={duration}
                                    onClick={() => setSelectedDuration(duration)}
                                    className={`px-4 py-1 text-sm rounded-full border transition-all duration-300 ${selectedDuration === duration
                                        ? "bg-white text-blue-600"
                                        : "bg-blue-400 text-white"
                                        }`}
                                >
                                    {duration}
                                </button>
                            ))}
                        </div>
                        <h2 className="text-lg font-semibold border-b border-white/50 p-4 text-center mb-6 ">
                            {card.title}
                        </h2>
                        <div className="flex flex-col items-center justify-start">
                            <ul className="space-y-2 text-sm list-inside">
                                {card.features.map((feature, i) => (
                                    <li key={i} className="list-disc pl-4">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>




                        <div className="flex justify-center mt-4">
                            <button className="bg-white text-blue-600 py-2 w-[200px] rounded-full mx-auto font-semibold hover:bg-blue-100">
                                <Link
                                    href={'/BookSlot'}
                                >
                                Proceed
                                </Link>
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingComponent;
