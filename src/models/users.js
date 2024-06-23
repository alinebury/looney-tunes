const { Users } = require('./schemas')

/**
 * @param {object} user 
 */
const getUser = async (user) => {
  return Users.findOne(user)
}

const getAllUsers = async () => {
  const users =  await Users.find()
  return users
}

/**
 * @param {object} user 
 */
const createUser = async (user) => {
  const insertNewUser = new Users(user)
  await insertNewUser.save()

  return insertNewUser
}

/**
 * @param {string} userId
 * @param {object} update
 */
const updateUser = async (userId, update) => {
  return Users.updateOne(
    { _id: userId },
    { $set: update }
  )
}

/**
 * @param {string} userId
 */
const deleteUser = async (userId) => {
  return  Users.deleteOne({ _id: userId })
}
module.exports = {
  getUser,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
}
