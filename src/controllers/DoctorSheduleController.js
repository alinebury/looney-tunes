const DoctorSheduleService = require('../services/doctorSheduleService')

const DoctorSheduleController = {
  create: async (req, res) => {
    try {
      const { body } = req
      const users = await DoctorSheduleService.create(body)
      
      res.status(201).send(users)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  },

  getWeeklySchedule: async (req, res) => {
    try {
      const { doctorId } = req.params
      const schedule = await DoctorSheduleService.getWeeklySchedule(doctorId)

      res.status(201).send(schedule)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  },

  getSchedule: async (req, res) => {
    try {
      const { doctorId, start, end, status } = req.query
      const schedule = await DoctorSheduleService.getSchedule(doctorId, start, end, status)

      res.status(201).send(schedule)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  },

  updateSchedule: async (req, res) => {
    try {
      const { params: { doctorId }, body } = req
      const schedule = await DoctorSheduleService.updateSchedule(doctorId, body)

      res.status(201).send(schedule)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }
}

module.exports = DoctorSheduleController