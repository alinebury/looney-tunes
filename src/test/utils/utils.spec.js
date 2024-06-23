const { formatSchedule } = require('../../utils/utils')
const { fullScheduleMock, scheduleMock } = require('../mocks/mocks')
const { fullScheduleMockResult, scheduleMockResult } = require('../mocks/expectResults')

describe('formatSchedule utils', () => {
  test('Checks that times are formatted correctly', () => {
    expect(formatSchedule(fullScheduleMock)).toEqual(fullScheduleMockResult)
  })

  test('Checks that when not sending all days of the week in the calendar, the times are returned correctly', () => {
    expect(formatSchedule(scheduleMock)).toEqual(scheduleMockResult)
  })
})
