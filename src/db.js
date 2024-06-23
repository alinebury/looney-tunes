const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/tunes-looney'

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB connected')
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message)
    process.exit(1)
  }
}

module.exports = connectDB
