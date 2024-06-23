const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))
router.use('/schedule', require('./DoctorShedule'))
router.use('/appointments', require('./appointments'))

module.exports = router
