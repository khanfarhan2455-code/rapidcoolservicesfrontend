import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Phone, MapPin, Home, Wrench, Send, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import axios from 'axios'

const ScheduleVisit = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    appliance: '',
    suburb: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    brand: '',
    issue: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const appliances = [
    'Air Conditioner',
    'Refrigerator',
    'Washing Machine',
    'Microwave Oven',
    'Water Heater',
    'Dishwasher',
  ]

  const suburbs = [
    'Andheri West', 'Andheri East', 'Oshiwara', 'Juhu', 'Bandra West',
    'Bandra East', 'Khar West', 'Khar East', 'Santa Cruz West', 'Santa Cruz East',
    'Goregaon West', 'Goregaon East', 'Malad West', 'Malad East', 'Powai',
    'Vile Parle West', 'Vile Parle East', 'Jogeshwari West', 'Jogeshwari East',
  ]

  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM',
    '7:00 PM - 9:00 PM',
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.mobile.length !== 10) {
      toast.error('Please enter a valid 10-digit mobile number')
      return
    }

    setLoading(true)
    try {
      await axios.post('/api/bookings', formData)
      toast.success('Booking scheduled successfully! We will contact you shortly.')
      setSubmitted(true)
      setFormData({
        fullName: '', mobile: '', appliance: '', suburb: '',
        address: '', preferredDate: '', preferredTime: '', brand: '', issue: '',
      })
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Booking Confirmed!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Our team will contact you within 15 minutes to confirm your visit.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary"
        >
          Book Another Service
        </button>
      </motion.div>
    )
  }

  return (
    <section id="schedule" className="section-padding bg-white dark:bg-dark-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Doorstep Visit Scheduler
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Schedule Your <span className="gradient-text">Visit</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Complete details to reserve a certified technician instantly. 
            <span className="text-primary font-semibold"> 15-Min Response Time!</span>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card rounded-3xl p-6 sm:p-10 shadow-xl"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <User className="w-4 h-4 text-primary" />
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all dark:text-white"
                placeholder="Enter your full name"
              />
            </div>

            {/* Mobile */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Phone className="w-4 h-4 text-primary" />
                Mobile (10 Digits)
              </label>
              <input
                type="tel"
                name="mobile"
                required
                maxLength={10}
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all dark:text-white"
                placeholder="9876543210"
              />
            </div>

            {/* Appliance */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Wrench className="w-4 h-4 text-primary" />
                Select Appliance
              </label>
              <select
                name="appliance"
                required
                value={formData.appliance}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all dark:text-white"
              >
                <option value="">Select Appliance</option>
                {appliances.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            {/* Suburb */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <MapPin className="w-4 h-4 text-primary" />
                Mumbai Suburb
              </label>
              <select
                name="suburb"
                required
                value={formData.suburb}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all dark:text-white"
              >
                <option value="">Select Suburb</option>
                {suburbs.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Address */}
            <div className="sm:col-span-2 space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Home className="w-4 h-4 text-primary" />
                Doorstep Home Address
              </label>
              <textarea
                name="address"
                required
                rows={2}
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all dark:text-white resize-none"
                placeholder="Full address with landmark"
              />
            </div>

            {/* Preferred Date */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Calendar className="w-4 h-4 text-primary" />
                Preferred Date
              </label>
              <input
                type="date"
                name="preferredDate"
                required
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all dark:text-white"
              />
            </div>

            {/* Preferred Time */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Clock className="w-4 h-4 text-primary" />
                Preferred Time
              </label>
              <select
                name="preferredTime"
                required
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all dark:text-white"
              >
                <option value="">Select Time Slot</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Brand */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Appliance Brand (Optional)
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all dark:text-white"
                placeholder="e.g., LG, Samsung, Daikin"
              />
            </div>

            {/* Issue */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Describe Issue (Optional)
              </label>
              <input
                type="text"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all dark:text-white"
                placeholder="e.g., Not cooling, making noise"
              />
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Note:</strong> All rates listed are doorstep Visiting Charges which are fully adjusted in your final service repair bill!
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 btn-primary flex items-center justify-center gap-2 text-lg disabled:opacity-50"
          >
            {loading ? (
              <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
            ) : (
              <>
                <Send className="w-5 h-5" />
                Schedule Visit
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default ScheduleVisit
