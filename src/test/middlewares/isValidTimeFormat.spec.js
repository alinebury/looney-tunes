const { isValidTimeFormat } = require('../../utils/isValidTimeFormat')

describe('isValidTimeFormat', () => {
  test('should return true for valid times', () => {
    const validTimes = [
      '00:00',
      '01:00',
      '09:59',
      '12:30',
      '23:59',
      '19:45'
    ]

    validTimes.forEach(time => {
      expect(isValidTimeFormat(time)).toBe(true)
    })
  })

  test('should return false for invalid times', () => {
    const invalidTimes = [
      '24:00',
      '12:60',
      '12:5',
      '5:00',
      '25:00',
      '12:61',
      '12',
      '12:345',
      '1234',
      '12-34',
      '12:34 PM'
    ]

    invalidTimes.forEach(time => {
      expect(isValidTimeFormat(time)).toBe(false)
    })
  })
})
