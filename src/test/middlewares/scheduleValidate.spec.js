const { scheduleValidate } = require('../../middlewares/scheduleValidate')

const createMockReqResNext = (body) => {
  const req = { body }
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn()
  }
  const next = jest.fn()
  return { req, res, next }
}

describe('scheduleValidate middleware', () => {
  test('should call next if the schedule is valid', () => {
    const body = {
      weekDays: {
        monday: {
          morning: {
            startTime: '08:00',
            endTime: '12:00'
          },
          afternoon: {
            startTime: '13:00',
            endTime: '17:00'
          }
        }
      }
    }
    const { req, res, next } = createMockReqResNext(body)

    scheduleValidate(req, res, next)

    expect(next).toHaveBeenCalled()
  })

  test('should return 500 if no valid days are present', () => {
    const body = {
      weekDays: {}
    }
    const { req, res, next } = createMockReqResNext(body)

    scheduleValidate(req, res, next)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.send).toHaveBeenCalledWith({ message: 'No week days were specified' })
  })

  test('should return 500 if no valid periods are present', () => {
    const body = {
      weekDays: {
        monday: {}
      }
    }
    const { req, res, next } = createMockReqResNext(body)

    scheduleValidate(req, res, next)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.send).toHaveBeenCalledWith({ message: 'No day period was specified' })
  })

  test('should return 500 if time is invalid', () => {
    const body = {
      weekDays: {
        monday: {
          morning: {
            startTime: 'invalid',
            endTime: '12:00'
          }
        }
      }
    }
    const { req, res, next } = createMockReqResNext(body)

    scheduleValidate(req, res, next)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.send).toHaveBeenCalledWith({ message: 'Invalid time was specified' })
  })
})
