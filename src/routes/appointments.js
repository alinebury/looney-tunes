const express = require('express')
const router = express.Router({ margeParams: true })

const AppointmentsController = require('../controllers/appointmentsController')
const { validateDate, validateScheduleDate } = require('../middlewares/validateDate')
const { checkAvailability } = require('../middlewares/checkAvailability')
const { validateQueryParams } = require('../middlewares/schemas')

router.get('/',
  AppointmentsController.getAllAppointments
)

router.post('/create',
  validateDate,
  validateScheduleDate,
  checkAvailability,
  AppointmentsController.createAppointment
)

router.get('/',
  validateQueryParams,
  AppointmentsController.getAppointments
)

router.put('/:appointmentId/update',
  validateDate,
  validateScheduleDate,
  checkAvailability,
  AppointmentsController.updateAppointment
)

module.exports = router
