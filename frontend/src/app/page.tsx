"use client";
import { useState } from "react";
import { BookingForm } from "@/components/booking-form";
import { BookingSummary } from "@/components/booking-summary";
import { Booking } from "../../types/booking"; // Import the Booking type

export default function Home() {
  const [booking, setBooking] = useState<Booking | null>(null);

  const handleBack = () => {
    setBooking(null);
  };

  function generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  return (
    <main className="container mx-auto py-6 px-4 sm:px-6 md:py-10">
      <div className="flex flex-col items-center space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Restaurant Table Booking
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Book a table at our restaurant for your special occasion
          </p>
        </div>

        {/* Form and Summary Section */}
        <div className="w-full max-w-sm sm:max-w-md">
          {booking ? (
            <BookingSummary booking={booking} onBack={handleBack} />
          ) : (
            <BookingForm
              onSubmit={(formData) =>
                setBooking({
                  ...formData,
                  id: generateId(),
                  status: "pending",
                  createdAt: new Date(),
                  date: new Date(formData.date), // Convert date string to Date object
                })
              }
            />
          )}
        </div>
      </div>
    </main>
  );
}
