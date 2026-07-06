import { google } from 'googleapis'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

export const addBookingToSheet = async (bookingData) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\n/g, '
'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
      },
      scopes: SCOPES,
    })

    const sheets = google.sheets({ version: 'v4', auth })
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    const values = [[
      bookingData.bookingId,
      bookingData.fullName,
      bookingData.mobile,
      bookingData.appliance,
      bookingData.suburb,
      bookingData.address,
      bookingData.preferredDate,
      bookingData.preferredTime,
      bookingData.brand,
      bookingData.issue,
      'pending',
      new Date().toISOString(),
    ]]

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Bookings!A:L',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: { values },
    })

    console.log('Booking added to Google Sheets')
    return true
  } catch (error) {
    console.error('Google Sheets error:', error)
    return false
  }
}
