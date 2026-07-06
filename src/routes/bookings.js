import express from 'express'
import Booking from '../models/Booking.js'
import { addBookingToSheet } from '../utils/googleSheets.js'
import { sendBookingConfirmation } from '../utils/email.js'

const router = express.Router()

const generateBookingId = () => {
  const date = new Date()
  const prefix = 'RCS'
  const random = Math.floor(1000 + Math.random() * 9000)
  return `${prefix}${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${random}`
}

router.post('/', async (req, res) => {
  try {
    const bookingData = {
      ...req.body,
      bookingId: generateBookingId(),
    }

    const booking = new Booking(bookingData)
    await booking.save()

    addBookingToSheet(bookingData).catch(console.error)
    sendBookingConfirmation(bookingData).catch(console.error)

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      bookingId: bookingData.bookingId,
      booking: booking,
    })
  } catch (error) {
    console.error('Booking error:', error)
    res.status(500).json({ success: false, message: 'Failed to create booking' })
  }
})

router.get('/:bookingId', async (req, res) => {
  try {
    const booking = await Booking.findOne({ bookingId: req.params.bookingId })
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' })
    }
    res.json({ success: true, booking })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

export default router
