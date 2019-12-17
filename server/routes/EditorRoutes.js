const express = require('express')
const editor = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Editor = require('../models/Editor')
editor.use(cors())
process.env.SECRET_KEY = 'secret'


editor.post('/createPost', (req, res) => {
    const today = new Date()
    const userData = {
      title: req.body.title,
      dateTime: today
    }
    Editor.findOne({
        title: req.body.title
      }).then(user => {
        User.create(userData)
        .then(user => {
          res.json({ status: user.title + 'Poasted!' })
        })
        .catch({})
      })

      .catch(err => {})
  })
  module.exports= editor


