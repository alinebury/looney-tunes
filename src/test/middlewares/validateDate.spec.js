const { validateDate, validateScheduleDate } = require('../../middlewares/validateDate')
const { formatSchedule } = require('../../utils/utils')
const doctorShedule = require('../../models/doctorShedule')
const { scheduleMock } = require('../mocks/mocks')
const { scheduleMockResult } = require('../mocks/expectResults')

jest.mock('../../models/doctorShedule')
jest.mock('../../utils/utils', () => ({
  formatSchedule: jest.fn(),
  daysOfWeek: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
}))

const mockResponse = () => {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.send = jest.fn().mockReturnValue(res)
  return res
}

describe('validateDate middleware', () => {
  test('should pass validation for future dates', async () => {
    const req = { body: { date: '2024-08-23' } }
    const res = mockResponse()
    const next = jest.fn()

    await validateDate(req, res, next)

    expect(next).toHaveBeenCalled()
  })

  test('should validate dates in the past', async () => {
    const req = { body: { date: '2020-01-01' } }
    const res = mockResponse()
    const next = jest.fn()

    await validateDate(req, res, next)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.send).toHaveBeenCalledWith({ message: 'Date is in the past. Select a valid date' })
    expect(next).not.toHaveBeenCalled()
  })
})


describe('validateScheduleDate middleware', () => {
  test('validate vailable time in agenda', async () => {
    const req = { body: { doctor: 'someDoctorId', date: '2024-06-24T10:00:00' } }
    const res = mockResponse()
    const next = jest.fn()

    doctorShedule.getById.mockResolvedValue(scheduleMock)
    formatSchedule.mockReturnValue(scheduleMockResult)

    await validateScheduleDate(req, res, next)

    expect(next).toHaveBeenCalled()
  })

  test('validate unavailable time in agenda', async () => {
    const req = { body: { doctor: 'someDoctorId', date: '2024-06-23T14:00:00' } }
    const res = mockResponse()
    const next = jest.fn()

    doctorShedule.getById.mockResolvedValue(scheduleMock)
    formatSchedule.mockReturnValue(scheduleMockResult)

    await validateScheduleDate(req, res, next)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.send).toHaveBeenCalledWith({ message: 'This time is not available' })
    expect(next).not.toHaveBeenCalled()
  })
})
