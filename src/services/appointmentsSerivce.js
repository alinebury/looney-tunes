const appointmentsModel = require('../models/appointments')
const isodate = require("isodate")

const AppointmentsService = {
  getAllAppointments: async () => {
    try {
      return appointmentsModel.getAllAppointments()
    } catch (error) {
      throw new Error(error)
    }
  },

  /**
   * @param {string} doctorId 
   * @param {string} start 
   * @param {string} end 
   * @param {string} status 
   */
  getAppointmentsByDoctor: async (doctorId, start, end, status) => {
    try {
      const query = {
        doctor: doctorId,
        date:{
          $gte:isodate(start),
          $lt:isodate(end)
        },
        status
      }
      const appointments = await appointmentsModel.getByQuery(query)

      if(appointments.length === 0) {
        return 'Appointments not found'
      }

      return appointments
    } catch (error) {
      throw new Error(error)
    }
  },

  /**
   * @param {object} newAppointment 
   */
  createAppointment: async (newAppointment) => {
    try {
      return appointmentsModel.createAppointment(newAppointment)
    } catch (error) {
      throw new Error(error)
    }
  },

  /**
   * @param {string} appointmentId 
   * @param {object} update 
   */
  updateAppointment: async (appointmentId, update) => {
    try {
      const appointment = await appointmentsModel.getAppointment({ _id: appointmentId })
      if(appointment.status === 'canceled') {
        return 'Appointment with cancelled status cannot be updated'
      }

      return appointmentsModel.updateAppointment(appointmentId, update)
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = AppointmentsService