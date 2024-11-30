"use client";
import { useState } from "react";
import { FaVideo, FaPhone, FaHome } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';
export default function BookSlot() {
    const [selectedMode, setSelectedMode] = useState("in-person");
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [filter, setFilter] = useState("slots");
    
    const modes = [
        { name: "In-person", icon: <FaHome />, value: "in-person" },
        { name: "Video", icon: <FaVideo />, value: "video" },
        { name: "Call", icon: <FaPhone />, value: "call" },
    ];

    const slots = [
        "8:00 - 8:45 AM",
        "9:00 - 9:45 AM",
        "11:00 - 11:45 AM",
        "12:00 - 12:45 PM",
        "2:00 - 2:45 PM",
        "3:00 - 3:45 PM",
        "5:00 - 5:45 PM",
        "7:00 - 7:45 PM",
    ];

    const availableDates = [3, 6, 15, 16, 17, 24, 26, 29, 30]; // Replace with dynamic data if needed

    const toggleSlot = (slot) => {
        setSelectedSlots((prev) =>
            prev.includes(slot)
                ? prev.filter((s) => s !== slot)
                : [...prev, slot]
        );
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    const toggleFilter = (filterType) => {
        setFilter(filterType);
    };

    const handleProceed = () => {
        if (!selectedDate) {
            alert("Please select a date.");
            return;
        }
        if (selectedSlots.length === 0) {
            alert("Please select at least one slot.");
            return;
        }
        // Navigate to ConfirmBooking with query params
        
    };

    return (
        <>
            <span className='flex items-center gap-2 m-12 '>
                <Link className="flex items-center gap-2"
                href={'/PricingComponent'}>
                <FaArrowLeft /> Back
                </Link>
            </span>
            <div className="p-4 max-w-4xl mx-auto">

                {/* Therapy Mode */}

                <div className="flex flex-col items-center">

                    <h2 className="text-lg font-semibold mb-4 items-center">Please select therapy mode</h2>
                    <div className="flex items-center gap-4 mb-6">
                        {modes.map((mode) => (
                            <div
                                key={mode.value}
                                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center w-24 ${selectedMode === mode.value ? "bg-blue-500 text-white" : "bg-gray-100"
                                    }`}
                                onClick={() => setSelectedMode(mode.value)}
                            >
                                <div className="text-xl mb-2">{mode.icon}</div>
                                <span className="text-sm">{mode.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Address */}
                <p className="text-gray-700 mb-6 flex items-center justify-center">
                    <span className="font-medium"> <CiLocationOn /></span> 3rd Floor, A2, 35, Block A2, Delhi
                </p>

                {/* Filter Section */}
                <h2 className="text-lg font-semibold mb-4 items-center">Filter by</h2>

                <div className="flex gap-4 mb-6">
                    <button
                        className={`px-12 py-2 ${filter === "slots" ? "bg-black text-white" : "border"} rounded-full`}
                        onClick={() => toggleFilter("slots")}
                    >
                        Slots
                    </button>
                    <button
                        className={`px-12 py-2 ${filter === "date" ? "bg-black text-white" : "border"} rounded-full`}
                        onClick={() => toggleFilter("date")}
                    >
                        Date
                    </button>
                </div>

                {/* Conditional Rendering of Slots and Date */}
                {filter === "slots" && (
                    <>
                        <h3 className="text-lg font-semibold mb-4">Select slots</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6 ">
                            {slots.map((slot, index) => (
                                <button
                                    key={index}
                                    className={`py-2 px-4 border rounded-full ${selectedSlots.includes(slot) ? "bg-blue-500 text-white" : ""
                                        }`}
                                    onClick={() => toggleSlot(slot)}
                                >
                                    {slot}
                                </button>
                            ))}

                        </div>
                        <span className="text-gray-400 mb-10">i. Please select one or more slots to see when the slot or slots are next available</span>
                    </>
                )}

                {filter === "date" && (
                    <>
                        {/* Calendar */}
                        <h3 className="text-lg font-semibold mb-4">Available dates <span className="m-2 p-1  rounded-2xl bg-gray-400 text-white text-sm"> Date  </span></h3>
                        <div className="grid grid-cols-7 gap-2 text-center text-gray-700 mb-6 rounded-lg p-4 shadow-lg">
                            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                                <div
                                    key={day}
                                    className={`py-2 rounded cursor-pointer ${availableDates.includes(day)
                                        ? selectedDate === day
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200"
                                        : "text-gray-400 cursor-not-allowed"
                                        }`}
                                    onClick={() =>
                                        availableDates.includes(day) ? handleDateSelect(day) : null
                                    }
                                >
                                    {day}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Display Selected Slots and Date */}
                <div className="mb-6">
                    <h4 className="text-lg font-semibold">Selected Details:</h4>
                    {selectedDate ? (
                        <p className="text-blue-600">Date: {selectedDate} August 2024</p>
                    ) : (
                        <p className="text-red-600">No date selected.</p>
                    )}
                    {selectedSlots.length > 0 ? (
                        <p className="text-blue-600">Slots: {selectedSlots.join(", ")}</p>
                    ) : (
                        <p className="text-red-600">No slots selected.</p>
                    )}
                    {selectedMode.length > 0 ? (
                        <p className="text-blue-600">Slots: {selectedMode}</p>
                    ) : (
                        <p className="text-red-600">No slots selected.</p>
                    )}
                </div>

                {/* Proceed Button */}
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-blue-600 text-white py-2 w-[500px] rounded-full mx-auto font-semibold hover:bg-blue-700"
                        onClick={handleProceed}
                        
                    >
                        <Link 
                        href={{
                            pathname:'/ConfirmBooking',
                            query:{
                                date:selectedDate,
                                slots:selectedSlots,
                                mode:selectedMode
                            }
                        }}>
                        Proceed
                        </Link>
                    </button>
                </div>
            </div>
        </>

    );
}
