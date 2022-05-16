const Country = require('../models/Country.js')

//obtain country details
const getCountryDetails = async (req, res) => {
  try {
    const country = await Country.find()
    return res.status(200).json({ country })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getCountryDetails
}
