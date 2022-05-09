const mongoose = require('mongoose')
const Schema = mongoose.Schema

const City = new Schema(
  {
    name: { type: String },
    date: { type: String },
    description: { type: String },
    stay: { type: String },
    treat: { type: String },
    walk: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('City', City)
