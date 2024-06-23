const { doctorSheduleSchema } = require('./schemas')

/**
 * @param {object} user 
 */
const getOne = async (user) => {
  return doctorSheduleSchema.findOne(user)
}

/**
 * @param {string} doctorId 
 */
const getById = async (doctorId) => {
  const schedule = await doctorSheduleSchema.findOne({ doctorId })
  return schedule
}

const getAll = async () => {
  const users = await doctorSheduleSchema.find()
  return users
}

/**
 * @param {object} user 
 */
const create = async (user) => {
  const insertNewUser = new doctorSheduleSchema(user)

  await insertNewUser.save()
  return insertNewUser
}

/**
 * @param {string} scheduleId 
 * @param {object} update 
 */
const update = async (scheduleId, update) => {
  const result = await doctorSheduleSchema.updateOne(
    { _id: scheduleId },
    { $set: update }
  )
  return result
}

module.exports = {
  getOne,
  getById,
  getAll,
  create,
  update
}
