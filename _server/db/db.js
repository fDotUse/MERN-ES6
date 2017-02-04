// moongose ORM to handle mongoDB, also making it a promise
var db = require('mongoose')
db.Promise = require('bluebird')
// Configure mongoose with the correct environment configuration Mongolab URL or localhost
var config = { dbUrl: 'mongodb://localhost/ReactFlix' }

// Connect to DB specifiying URL
db.connect(config.dbUrl)

// DB on error throw
db.connection.on('error', (err) => {
  console.log('ˁᵒ͡ˑ̉ᵒˀ Connection to DB failed: ', err)
})

// DB on Connection show
db.connection.once('open', function (callback) {
  console.log('ˁᵒ͡ˑ̉ᵒˀ Connected to DB Success!')
})

module.exports = db
