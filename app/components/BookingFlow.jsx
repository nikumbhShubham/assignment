"use client";
import React, { useState } from "react";
import BookSlot from "../BookSlot/page";
import ConfirmBooking from "../ConfirmBooking/page";

export default function BookingFlow() {
  const [step, setStep] = useState(1); // 1: BookSlot, 2: ConfirmBooking
  const [bookingDetails, setBookingDetails] = useState({
    selectedDate: null,
    selectedSlots: [],
    selectedMode: "in-person",
  });

  const proceedToConfirmation = (details) => {
    setBookingDetails(details);
    setStep(2); // Move to ConfirmBooking step
  };

  const goBackToSlotSelection = () => {
    setStep(1); // Move back to BookSlot step
  };

  return (
    <div>
      {step === 1 && (
        <BookSlot
          onProceed={(details) => proceedToConfirmation(details)}
          initialData={bookingDetails}
        />
      )}
      {step === 2 && (
        <ConfirmBooking
          selectedDate={bookingDetails.selectedDate}
          selectedSlots={bookingDetails.selectedSlots}
          selectedMode={bookingDetails.selectedMode}
          onGoBack={goBackToSlotSelection}
        />
      )}
    </div>
  );
}
