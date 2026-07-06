import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendBookingConfirmation = async (bookingData) => {
  try {
    const mailOptions = {
      from: `"Rapid Cool Services" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Booking: ${bookingData.bookingId} - ${bookingData.appliance}`,
      html: `
        <h2>New Booking Received</h2>
        <table border="1" cellpadding="10" style="border-collapse: collapse;">
          <tr><td><strong>Booking ID</strong></td><td>${bookingData.bookingId}</td></tr>
          <tr><td><strong>Name</strong></td><td>${bookingData.fullName}</td></tr>
          <tr><td><strong>Mobile</strong></td><td>${bookingData.mobile}</td></tr>
          <tr><td><strong>Appliance</strong></td><td>${bookingData.appliance}</td></tr>
          <tr><td><strong>Suburb</strong></td><td>${bookingData.suburb}</td></tr>
          <tr><td><strong>Address</strong></td><td>${bookingData.address}</td></tr>
          <tr><td><strong>Preferred Date</strong></td><td>${bookingData.preferredDate}</td></tr>
          <tr><td><strong>Preferred Time</strong></td><td>${bookingData.preferredTime}</td></tr>
          <tr><td><strong>Brand</strong></td><td>${bookingData.brand || 'N/A'}</td></tr>
          <tr><td><strong>Issue</strong></td><td>${bookingData.issue || 'N/A'}</td></tr>
        </table>
        <p><a href="https://rapidcoolservices-frontend.vercel.app/admin/login">View in Admin Dashboard</a></p>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
    return true
  } catch (error) {
    console.error('Email error:', error)
    return false
  }
}
