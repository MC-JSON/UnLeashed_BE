const Airline = require('../models/Airline.js')

//obtain airlines
const getAirlineDetails = async (req, res) => {
  try {
    const airline = await Airline.find()
    return res.status(200).json({ airline })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAirlineDetails
}
