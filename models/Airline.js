const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Airline = new Schema(
  {
    name: { type: String },
    logo: { type: String },
    url: { type: String },
    reservations: { type: String },
    inflight: { type: String },
    guidelines: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Airline', Airline)
