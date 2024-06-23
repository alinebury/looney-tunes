const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const timePeriods = ['morning', 'afternoon', 'evening']

/**
 * @param {string} start 
 * @param {string} end 
 */
const calculateRange =  (start, end) => {
  const currentDate = new Date().toISOString().split('T')[0]
  
  const startTime = new Date(currentDate + 'T' + start + ':00')
  const endTime = new Date(currentDate + 'T' + end + ':00')
  const range = []

  const rangeNumbers = Math.floor((endTime - startTime) / (30 * 60 * 1000))

  range.push(start)

  for (let i = 0; i < rangeNumbers; i++) {
    startTime.setMinutes(startTime.getMinutes() + 30)
    range.push(formatHour((startTime)))
  }

  return range
}

/**
 * @param {date} date 
 */
const formatHour =  (date) => {
  let hours = date.getHours().toString().padStart(2, '0')
  let minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

/**
 * @param {object} schedule 
 */
const formatSchedule =  (schedule) => {
  const formattedSchedule = {}
  daysOfWeek.forEach(day => {
    const daySchedule = schedule.weekDays[day]
    const availableTimes = []

    if (daySchedule) {
      timePeriods.forEach(period => {
        const { startTime, endTime } = daySchedule[period]
        const time =  calculateRange(startTime, endTime)
  
        availableTimes.push(time)
      })
      formattedSchedule[day] = availableTimes.flat()
    }
  })

  return formattedSchedule
}

module.exports = {
  calculateRange,
  formatSchedule,
  daysOfWeek,
  timePeriods
}
