const doctorShedule = require('../models/doctorShedule')
const utils = require('../utils/utils')

const DoctorSheduleService = {
  /**
   * @param {object} addSchedule 
   */
  create: async (addSchedule) => {
    try {
      return doctorShedule.create(addSchedule)
    } catch (error) {
      throw new Error(error)
    }
  },

  /**
   * @param {string} doctorId 
   */
  getWeeklySchedule: async (doctorId) => {
    try {
      const schedule = await doctorShedule.getById(doctorId)
      const formattedSchedule = await utils.formatSchedule(schedule)

      return formattedSchedule
    } catch (error) {
      throw new Error(error)
    }
  },

  /**
   * @param {string} doctorId 
   * @param {object} update
   */
  updateSchedule: async (doctorId, update) => {
    try {
      return doctorShedule.update(doctorId, update)
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = DoctorSheduleService
