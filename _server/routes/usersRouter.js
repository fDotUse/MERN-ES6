const router = require('express').Router()
const _ = require('underscore')
const url = require('url')
const Users = require('../db/models/users')
// --- GET METHODS
  // GET ONE
router.get('/:id', (req, res) => {
  Users.findOne({_id: req.params.id})
  .exec()
  .then((user) => {
    if (!user) {
      res.status(400).json({ error: true, message: 'Bad Request', data: null })
    } else {
      res.status(200).json({ error: false, data: user })
    }
  })
  .catch((err) => {
    console.log('DB Error', err)
    res.status(500).json({ error: true, message: 'DB Error', data: null })
  })
})

// GET ALL
router.get('/', (req, res) => {
  Users.find({})
  .exec()
  .then((users) => {
    res.status(200).json({ error: false, data: users })
  })
  .catch((err) => {
    console.log('DB Error', err)
    res.status(500).json({ error: true, message: 'DB Error', data: null })
  })
})

// --- PUT METHODS
// EDIT
router.put('/:id', (req, res) => {
  let editedUser = req.body
  Users.findOne({_id: req.params.id})
  .exec()
  .then((user) => {
    if (!user) {
      res.status(400).json({ error: true, message: 'Bad Request', data: null })
    } else {
      user.update(editedUser, (err) => {
        if (err) {
          throw err
        } else {
          res.status(200).json({ error: false, data: user })
        }
      })
    }
  })
  .catch((err) => {
    console.log('DB Error', err)
    res.status(500).json({ error: true, message: 'DB Error', data: null })
  })
})

// --- POST METHODS
// CREATE
router.post('/', (req, res) => {
  let newUser = req.body
  let user = new Users(newUser)
  user.save((err) => {
    if (err) {
      console.log('DB Error', err)
      res.status(500).json({ error: true, message: 'DB Error', data: null })
    } else {
      res.status(200).json({ error: false, data: user })
    }
  })
})

// --- DELETE METHODS
// DELETE
router.delete('/:id', (req, res) => {
  Users.findOne({_id: req.params.id})
  .exec()
  .then((user) => {
    if (!user) {
      res.status(400).json({ error: true, message: 'Bad Request', data: null })
    } else {
      user.remove((err) => {
        if (err) {
          throw err
        } else {
          res.status(200).json({ error: false, data: user })
        }
      })
    }
  })
  .catch((err) => {
    console.log('DB Error', err)
    res.status(500).json({ error: true, message: 'DB Error', data: null })
  })
})

module.exports = router
