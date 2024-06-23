const userModel = require('../models/users')

const authService = {
  getUsers: async () => {
    try {
      const users = await userModel.getAllUsers()
      return users
    } catch (error) {
      throw new Error(error)
    }
  },

  /**
   * @param {object} newUser 
   */
  createUser: async (newUser) => {
    try {
      const user = await userModel.getUser({
        email: newUser.email
      })
      if (user) {
        return false
      }

      return userModel.createUser(newUser)
    } catch (error) {
      throw new Error(error)
    }
  },

  /**
   * @param {string} userId 
   * @param {object} update 
   */
  updateUser: async (userId, update) => {
    try {
      return userModel.updateUser(userId, update)
    } catch (error) {
      throw new Error(error)
    }
  },

  /**
   * @param {string} userId 
   */
  deleteUser: async (userId) => {
    try {
      return userModel.deleteUser(userId)
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = authService