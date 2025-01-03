import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Booking } from '../../types/booking';

interface BookingSummaryProps {
  booking: Booking;
  onBack: () => void; // Callback to go back to the form
}

export function BookingSummary({ booking, onBack }: BookingSummaryProps) {
  return (
    <Card className="w-full max-w-lg mx-auto p-4 md:p-6">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl text-center">Booking Confirmation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Adjust grid layout for responsiveness */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Name</p>
            <p className="text-base">{booking.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <p className="text-base">{booking.email}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Date</p>
            <p className="text-base">{booking.date.toLocaleDateString()}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Time</p>
            <p className="text-base">{booking.time}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Guests</p>
            <p className="text-base">{booking.guests}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Status</p>
            <p className="text-base capitalize">{booking.status}</p>
          </div>
        </div>
        {/* Button Section */}
        <div className="flex justify-center">
          <Button
            onClick={onBack}
            variant="outline"
            className="w-full sm:w-auto px-4 py-2 text-sm"
          >
            Back to Booking
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
