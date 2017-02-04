const router = require('express').Router()
// routers declarations
const usersRouter = require('./usersRouter')

router.use('/users', usersRouter)

module.exports = router
