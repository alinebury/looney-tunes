const Joi = require('joi')

const querySchema = Joi.object({
  doctorId: Joi.string().required(),
  start: Joi.string().required(),
  end: Joi.string().required(),
  status: Joi.string().required()
})

const scheduleSchema = Joi.object({
  doctorId: Joi.any().required(),
  doctorSpecialty: Joi.any().required(),
  weekDays: Joi.object().required()
})

const validate = (schema) => async (req, res, next) => {
  try {
    const data = req.method === 'GET' ? req.query : req.body
    const { error } = schema.validate(data, { abortEarly: false })
  
    if (error) {
      return res.status(500).send('Invalid input')
    }
  
    next()
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const validateQueryParams = validate(querySchema)
const validateSchedule = validate(scheduleSchema)

module.exports = {
  validateQueryParams,
  validateSchedule
}
