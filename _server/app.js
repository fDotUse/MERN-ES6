const path = require('path')
const express = require('express')
// display messages in dev mode
const morgan = require('morgan')

// parse body request, cookies
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// add db config file
const db = require('./db/db.js')
// defining the main router of the app
const router = require('./routes/apiRouter.js')

// We're in development or production mode
// create and run a real server.
let app = express()
 // Use morgan to log requests to our express server to the console
app.use(morgan('dev'))
// Parse incoming request bodies as JSON
app.use(bodyParser.json())
// Parse incoming cookies
app.use(cookieParser())
// API router
app.use('/api', router)

const distFolder = path.resolve(__dirname, '../dist/')
app.use('/dist', express.static(distFolder))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

// Start the server!
const port = 5000
app.listen(port)
console.log(`ˁᵒ͡ˑ̉ᵒˀ Listening at port... ${port}`)
