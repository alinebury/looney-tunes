const express = require('express')
const router = express.Router({ margeParams: true })

const DoctorSheduleController = require('../controllers/DoctorSheduleController')
const { validateSchedule } = require('../middlewares/schemas')
const { scheduleValidate } = require('../middlewares/scheduleValidate')

router.post('/create',
  validateSchedule,
  scheduleValidate,
  DoctorSheduleController.create
)

router.get('/:doctorId',
  DoctorSheduleController.getWeeklySchedule
)

router.put('/:doctorId/update',
  DoctorSheduleController.updateSchedule
)

module.exports = router
