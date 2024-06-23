const AppointmentsService = require('../services/appointmentsSerivce')

const AppointmentsController = {
  getAllAppointments: async (req, res) => {
    try {
      const appointments = await AppointmentsService.getAllAppointments()
      
      res.status(201).send(appointments)
    } catch (error) {
      
    }
  },
  createAppointment: async (req, res) => {
    try {
      const { body } = req
      const appointment = await AppointmentsService.createAppointment(body)

      res.status(201).send(appointment)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  },

  getAppointments: async (req, res) => {
    try {
      const { doctorId, start, end, status } = req.query
      const appointments = await AppointmentsService.getAppointmentsByDoctor(doctorId, start, end, status)

      res.status(201).send(appointments)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  },

  updateAppointment: async (req, res) => {
    try {
      const { params: { appointmentId }, body } = req
      const appointment = await AppointmentsService.updateAppointment(appointmentId, body)
      
      res.status(201).send(appointment)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }
}

module.exports = AppointmentsController