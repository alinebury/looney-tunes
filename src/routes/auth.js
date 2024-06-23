const express = require('express')
const router = express.Router({ margeParams: true })

const authController = require('../controllers/authController')

router.get('/',
  authController.getUsers
)

router.post('/create',
  authController.createUser
)

router.put('/:userId',
  authController.updateUser
)

router.delete('/:userId',
  authController.deleteUser
)

module.exports = router
