export interface Booking {
  id: string;
  name: string;
  email: string;
  phone?: string; // Optional if not always provided
  date: Date; // Ensure this is a Date object
  time: string;
  guests: number;
  status: string;
  createdAt: Date;
}



export interface BookingFormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
}

export interface AvailableSlot {
  time: string
  available: boolean
}

