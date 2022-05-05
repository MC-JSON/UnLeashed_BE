const Country = require('../models/Country.js')
const City = require('../models/City.js')

const getCountryDetails = async (req, res) => {
  try {
    const country = await Country.find()
    return res.status(200).json({ country })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCityByCountry = async (req, res) => {
  try {
    const city = await Country.find({ city: req.params.city })
    res.send(city)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getCountryDetails,
  getCityByCountry
}
