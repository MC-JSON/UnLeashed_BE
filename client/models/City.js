const mongoose = require('mongoose')
const Schema = mongoose.Schema

const City = new Schema(
  {
    name: { type: String },
    image: { type: String },
    date: { type: String },
    description: { type: String },
    stay: { type: String },
    stayLink: { type: String },
    treat: { type: String },
    treatLink: { type: String },
    walk: { type: String },
    walkLink: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('City', City)
