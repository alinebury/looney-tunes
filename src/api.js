const express = require('express')
const connectDB = require('./db')

const routes = require('./routes/index')
const app = express()
const PORT = 3001

app.use(express.json())
connectDB()

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
