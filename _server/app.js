const isProduction = process.env.NODE_ENV === 'production'
// start db with config file
require('./db/db.js')
const path = require('path')
const express = require('express')
// display messages in dev mode
const morgan = require('morgan')
// parse body request, cookies
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

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

// WEBPACK HOTLOAD config
if (!isProduction) {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../webpack.config')
  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.devServer.publicPath,
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true
    }
  }))
  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }))
}

const distFolder = path.resolve(__dirname, '../dist/')
app.use('/dist', express.static(distFolder))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})



// Start the server!
const port = process.env.PORT || 5500
app.listen(port)
console.log(`ˁᵒ͡ˑ̉ᵒˀ Listening at port... ${port}`)
