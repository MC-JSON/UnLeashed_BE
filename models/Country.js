const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Country = new Schema(
  {
    name: { type: String },
    flag_img: { type: String },
    requirements: { type: String },
    url: { type: String },
    city: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Country', Country)
