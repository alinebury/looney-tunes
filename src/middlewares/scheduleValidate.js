const { isValidTimeFormat } = require('../utils/isValidTimeFormat')
const { daysOfWeek, timePeriods } = require('../utils/utils')

const scheduleValidate = (req, res, next) => {
  try {
    const { body } = req
    const { weekDays } = body
  
    if (!daysOfWeek.some(day => weekDays.hasOwnProperty(day))) {
      return res.status(500).send({ message: 'No week days were specified'})
    }
  
    for (const day of daysOfWeek) {
      if (weekDays.hasOwnProperty(day)) {
        const periods = weekDays[day]
  
        if (!timePeriods.some(period => periods.hasOwnProperty(period))) {
          return res.status(500).send({ message: 'No day period was specified'})
        }
  
        for (const period of timePeriods) {
          if (periods.hasOwnProperty(period)) {
            const timeRange = periods[period]
  
            if (!timeRange.startTime ||
                !timeRange.endTime ||
                !isValidTimeFormat(timeRange.startTime) ||
                !isValidTimeFormat(timeRange.endTime))
            {
              return res.status(500).send({ message: 'Invalid time was specified'})
            }
          }
        }
      }
    }
  next()
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

module.exports = {
  scheduleValidate
}