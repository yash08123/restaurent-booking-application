"use client"
import { useState } from 'react';
import { BookingForm } from '@/components/booking-form';
import { BookingSummary } from '@/components/booking-summary';
import { Booking } from '../../types/booking'; // Import the Booking type

export default function Home() {
  const [booking, setBooking] = useState<Booking | null>(null);

  const handleBack = () => {
    setBooking(null); 
  };

  function generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
  

  return (
    <main className="container mx-auto py-10">
      <div className="flex flex-col items-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Restaurant Table Booking</h1>
          <p className="text-muted-foreground">
            Book a table at our restaurant for your special occasion
          </p>
        </div>
        <div className="w-full max-w-md">
          {booking ? (
            <BookingSummary booking={booking} onBack={handleBack} />
          ) : (
            <BookingForm onSubmit={(formData) =>
              setBooking({
                ...formData,
                id: generateId(), // Replace with your ID generation logic
                status: "pending", // Default status
                createdAt: new Date(), // Timestamp
              })
            }
             />
          )}
        </div>
      </div>
    </main>
  );
}
