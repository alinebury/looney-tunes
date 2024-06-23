const appointmentsModel = require('../../models/appointments')
const { checkAvailability } = require('../../middlewares/checkAvailability')

jest.mock('../../models/appointments', () => ({
  getAppointment: jest.fn()
}))

describe('checkAvailability middleware', () => {
  let req, res, next

  beforeEach(() => {
    req = {
      body: {
        date: '2024-06-30T10:00:00Z',
        doctor: '456'
      }
    }
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    }
    next = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should call next() if appointment is available', async () => {
    appointmentsModel.getAppointment.mockResolvedValue(null)

    await checkAvailability(req, res, next)

    expect(res.status).not.toHaveBeenCalled()
    expect(res.send).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
  })

  test('should return 500 and error message if time selected is already reserved', async () => {
    appointmentsModel.getAppointment.mockResolvedValue({ _id: 'existingAppointmentId' })

    await checkAvailability(req, res, next)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.send).toHaveBeenCalledWith({ message: 'Date/time already reserved' })
    expect(next).not.toHaveBeenCalled()
  })

  test('should return 500 and error message if appointmentsModel.getAppointment throws an error', async () => {
    const errorMessage = 'Internal server error'
    appointmentsModel.getAppointment.mockRejectedValue(new Error(errorMessage))

    await checkAvailability(req, res, next)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.send).toHaveBeenCalledWith({ message: errorMessage })
    expect(next).not.toHaveBeenCalled()
  })
})
