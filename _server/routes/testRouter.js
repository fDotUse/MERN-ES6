const router = require('express').Router()

// Test route
router.get('/test', (req, res) => {
  res.status(200).json({ error: false, data: 'Yes!' })
})

module.exports = router
