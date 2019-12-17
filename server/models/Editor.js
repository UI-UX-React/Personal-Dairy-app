const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const EditorSchema = new Schema({
  title: {
    type: String
  },
  dateTime: {
    type: String
  }
})

module.exports = newEditor = mongoose.model('EditorSchema', EditorSchema)