const fullScheduleMock = {
  doctorId: "456",
  doctorSpecialty: "Neuro",
  weekDays: {
    monday: {
      morning: {
        startTime: "08:00",
        endTime: "12:00"
      },
      afternoon: {
        startTime: "13:00",
        endTime: "17:00"
      },
      evening: {
        startTime: "18:00",
        endTime: "22:00"
      }
    },
    tuesday: {
      morning: {
        startTime: "08:30",
        endTime: "12:30"
      },
      afternoon: {
        startTime: "13:30",
        endTime: "17:30"
      },
      evening: {
        startTime: "18:30",
        endTime: "22:30"
      }
    },
    wednesday: {
      morning: {
        startTime: "09:00",
        endTime: "13:00"
      },
      afternoon: {
        startTime: "14:00",
        endTime: "18:00"
      },
      evening: {
        startTime: "19:00",
        endTime: "23:00"
      }
    },
    thursday: {
      morning: {
        startTime: "09:30",
        endTime: "13:30"
      },
      afternoon: {
        startTime: "14:30",
        endTime: "18:30"
      },
      evening: {
        startTime: "19:30",
        endTime: "23:30"
      }
    },
    friday: {
      morning: {
        startTime: "10:00",
        endTime: "14:00"
      },
      afternoon: {
        startTime: "15:00",
        endTime: "19:00"
      },
      evening: {
        startTime: "20:00",
        endTime: "24:00"
      }
    },
    saturday: {
      morning: {
        startTime: "10:30",
        endTime: "14:30"
      },
      afternoon: {
        startTime: "15:30",
        endTime: "19:30"
      },
      evening: {
        startTime: "20:30",
        endTime: "24:30"
      }
    },
    sunday: {
      morning: {
        startTime: "11:00",
        endTime: "15:00"
      },
      afternoon: {
        startTime: "16:00",
        endTime: "20:00"
      },
      evening: {
        startTime: "21:00",
        endTime: "25:00"
      }
    }
  }
}

const scheduleMock = {
  weekDays: {
    monday: {
      morning: { startTime: '09:00', endTime: '11:00' },
      afternoon: { startTime: '14:00', endTime: '16:00' },
      evening: { startTime: '19:00', endTime: '21:00' }
    }
  }
}

module.exports = {
  fullScheduleMock,
  scheduleMock
}