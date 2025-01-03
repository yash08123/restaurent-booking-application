export interface Booking {
  id: string
  name: string
  email: string
  phone: string
  date: Date
  time: string
  guests: number
  tableNumber?: number
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
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

