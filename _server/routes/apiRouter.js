const router = require('express').Router()
// routers declarations
const testRouter = require('./testRouter')

router.use('/test', testRouter)

module.exports = router
