const mongoose = require('mongoose')
const Schema = mongoose.Schema

const City = new Schema(
  {
    description: { type: String },
    stay: { type: String },
    treat: { type: String },
    walkabout: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('City', City)
