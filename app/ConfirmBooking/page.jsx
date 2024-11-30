"use client";
import React, { useState, Suspense } from "react";
import { FaRupeeSign, FaArrowLeft } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ConfirmBooking = () => {
  const searchParams = useSearchParams(); // Hook to get query params
  const date = searchParams.get("date");
  const slots = searchParams.get("slots");
  const mode = searchParams.get("mode");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isReferred: false,
    companyID: "",
  });

  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVerify = () => {
    if (formData.companyID === "partner123") {
      setIsVerified(true);
      setErrorMessage("");
    } else {
      setIsVerified(false);
      setErrorMessage("Invalid Company ID");
    }
  };

  return (
    <>
      <span className="flex items-center gap-2 m-12 ">
        <Link className="flex items-center gap-2" href={"/BookSlot"}>
          <FaArrowLeft /> Back
        </Link>
      </span>
      <div className="max-w-4xl max-h-full-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-500 text-white px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white mb-4 flex flex-col items-center justify-center">
                <Link className="flex flex-col items-center justify-center" href={"/BookSlot"}>
                  <span className="font-medium">
                    <SlCalender />
                  </span>
                  Change date
                </Link>
              </p>
              <p className="text-sm">date: {date || "No date selected"}</p>
              <p className="text-sm">time: {slots || "No slots selected"} </p>
              <p className="text-sm">mode: {mode || "No mode selected"} </p>
            </div>
            <div className="text-right">
              <p className="flex items-center justify-end">
                <FaRupeeSign />
                <span className="text-xl font-bold">2,400/-</span>
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="px-6 py-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="+91 90000 00000"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
            />
            <small className="text-gray-500">You will receive booking details on WhatsApp</small>
          </div>

          {/* Referral Section */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Have you been referred by your employer?
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isReferred"
                checked={formData.isReferred}
                onChange={(e) =>
                  setFormData({ ...formData, isReferred: e.target.checked })
                }
                className="mr-2"
              />
              <span className="text-gray-700">Yes, I am employed under a partnering company</span>
            </div>
            {formData.isReferred && (
              <div className="mt-4">
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    name="companyID"
                    placeholder="Partnering Company Name or Company ID"
                    value={formData.companyID}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md shadow-sm p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={handleVerify}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Verify
                  </button>
                </div>
                {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                {isVerified && (
                  <p className="text-green-500 text-sm mt-2">Company Verified!</p>
                )}
              </div>
            )}
          </div>

          {/* Book Session Button */}
          <button className="w-full bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-md">
            <Link href={"/Confirmed"}>Proceed</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default function ConfirmBookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmBooking />
    </Suspense>
  );
}
