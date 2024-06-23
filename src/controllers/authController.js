const authService =  require('../services/authService')

const authController = {
  getUsers: async (req, res) => {
    try {
      const users = await authService.getUsers()
      
      res.status(201).send(users)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  },

  createUser: async (req, res) => {
    try {
      const { body } = req
      const newUser =  await authService.createUser(body)

      if(!newUser) {
        return res.status(400).json({ error: 'User already exists' })
      }

      res.status(201).send(newUser)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  },

  updateUser: async (req, res) => {
    try {
      const { params: { userId }, body } = req

      const newUser =  await authService.updateUser(userId, body)

      res.status(201).send(newUser)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { userId } = req.params
      const newUser =  await authService.deleteUser(userId)

      res.status(201).send(newUser)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }
}

module.exports = authController