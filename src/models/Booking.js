import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
  bookingId: { type: String, unique: true, required: true },
  fullName: { type: String, required: true },
  mobile: { type: String, required: true },
  appliance: { type: String, required: true },
  suburb: { type: String, required: true },
  address: { type: String, required: true },
  preferredDate: { type: String, required: true },
  preferredTime: { type: String, required: true },
  brand: { type: String, default: '' },
  issue: { type: String, default: '' },
  status: { 
    type: String, 
    enum: ['pending', 'assigned', 'in-progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  amount: { type: Number, default: 0 },
  technician: { type: String, default: '' },
  notes: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.model('Booking', bookingSchema)
