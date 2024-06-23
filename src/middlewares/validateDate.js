const doctorSchedule = require('../models/doctorShedule')
const { daysOfWeek, formatSchedule } = require('../utils/utils')

const validateDate = async (req, res, next) => {
  const { date } = req.body
  const appointmentDate = new Date(date)
  const currentDate = new Date()
    
  currentDate.setHours(0, 0, 0, 0)

  if (appointmentDate < currentDate) {
    return res.status(500).send({ message: 'Date is in the past. Select a valid date' })
  }
  next()
}

const validateScheduleDate = async (req, res, next) => {
  const { doctor, date, status } = req.body

  if(status !== 'canceled') {
    const schedule = await doctorSchedule.getById(doctor)
    const formattedSchedule = formatSchedule(schedule)
    const data = new Date(date)
    const weekDay = data.getDay()
    const hour = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  
    if (!formattedSchedule[daysOfWeek[weekDay]] 
        || !formattedSchedule[daysOfWeek[weekDay]].includes(hour))
    {
      return res.status(500).send({ message: 'This time is not available'})
    }
  }

  next()
}

module.exports = {
  validateDate,
  validateScheduleDate
}