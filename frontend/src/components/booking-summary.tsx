import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Booking } from '../../types/booking';

interface BookingSummaryProps {
  booking: Booking;
  onBack: () => void; // Callback to go back to the form
}

export function BookingSummary({ booking, onBack }: BookingSummaryProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Booking Confirmation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Name</p>
            <p>{booking.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <p>{booking.email}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Date</p>
            <p>{booking.date}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Time</p>
            <p>{booking.time}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Guests</p>
            <p>{booking.guests}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Status</p>
            <p className="capitalize">{booking.status}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button onClick={onBack} variant="outline">Back to Booking</Button>
        </div>
      </CardContent>
    </Card>
  );
}
