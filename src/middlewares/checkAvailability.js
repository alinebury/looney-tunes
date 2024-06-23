const appointmentsModel = require('../models/appointments')

const checkAvailability = async (req, res, next) => {
  try {
    const { date, doctor, status } = req.body

    if(status !== 'canceled') {
      const previousDate = new Date(date)
      previousDate.setTime(previousDate.getTime() - 30 * 60 * 1000)
      
      const nextDate = new Date(date)
      nextDate.setTime(nextDate.getTime() + 30 * 60 * 1000)
    
      const getAppointment = await appointmentsModel.getAppointment({
        doctor,
        date: { $in: [nextDate, previousDate, date] }
      })
    
      if(getAppointment) {
        return res.status(500).send({ message: 'Date/time already reserved' })
      }
    }

    next()
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

module.exports = {
  checkAvailability
}
