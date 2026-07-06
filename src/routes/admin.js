import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import Booking from '../models/Booking.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }

    if (!user.active) {
      return res.status(401).json({ success: false, message: 'Account deactivated' })
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    )

    res.json({
      success: true,
      token,
      role: user.role,
      name: user.name,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Login failed' })
  }
})

router.get('/bookings', verifyToken, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 })
    res.json({ success: true, bookings })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch bookings' })
  }
})

router.put('/bookings/:id/status', verifyToken, async (req, res) => {
  try {
    const { status } = req.body
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )
    res.json({ success: true, booking })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Update failed' })
  }
})

router.post('/setup', async (req, res) => {
  try {
    const count = await User.countDocuments()
    if (count > 0) {
      return res.json({ success: false, message: 'Users already exist' })
    }

    await User.create([
      {
        name: 'Super Admin',
        email: 'admin@rapidcoolservices.com',
        password: 'admin123',
        role: 'superadmin',
      },
      {
        name: 'Technician 1',
        email: 'tech@rapidcoolservices.com',
        password: 'tech123',
        role: 'technician',
      },
    ])

    res.json({ success: true, message: 'Default users created' })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Setup failed' })
  }
})

export default router
