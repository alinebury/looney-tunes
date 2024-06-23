const { Appointments } = require('./schemas')

const getAllAppointments = async () => {
  return Appointments.find()
}

/**
 * @param {object} query
 */
const getAppointment = async (query) => {
  return Appointments.findOne(query)
}

/**
 * @param {object} appointment 
 */
const createAppointment = async (appointment) => {
  const insertNewAppointments = new Appointments(appointment)
  return insertNewAppointments.save()
}

/**
 * @param {string} appointmentId 
 * @param {object} update 
 */
const updateAppointment = async (appointmentId, update) => {
  return Appointments.updateOne(
    { _id: appointmentId },
    { $set: {...update, updatedAt: new Date()} })
}

/**
 * @param {object} query
 */
const getByQuery = async (query) => {
  return Appointments.find(query)
}

module.exports = {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  getByQuery
}