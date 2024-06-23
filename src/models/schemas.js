const mongoose = require('mongoose')

const appointments = new mongoose.Schema({
  patient: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
})

const Appointments = mongoose.model('Appointments', appointments)

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  specialization: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Users = mongoose.model('Users', userSchema)


const doctorShedule = new mongoose.Schema({
  doctorId: {
    type: String,
    required: true,
    unique: true
  },
  doctorSpecialty: {
    type: String,
    required: true,
  },
  weekDays: {
    monday: {
      morning: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      afternoon: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      evening: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      }
    },
    tuesday: {
      morning: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      afternoon: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      evening: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      }
    },
    wednesday: {
      morning: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      afternoon: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      evening: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      }
    },
    thursday: {
      morning: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      afternoon: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      evening: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      }
    },
    friday: {
      morning: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      afternoon: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      evening: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      }
    },
    saturday: {
      morning: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      afternoon: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      evening: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      }
    },
    sunday: {
      morning: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      afternoon: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      },
      evening: {
        startTime: { type: String, required: false },
        endTime: { type: String, required: false }
      }
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
  }
})

const doctorSheduleSchema = mongoose.model('WeeklyDoctorAvailability', doctorShedule)


module.exports = {
  Appointments,
  Users,
  doctorSheduleSchema
}
