const City = require('../models/City.js')

const getCityDetails = async (req, res) => {
  try {
    const city = await City.find()
    return res.status(200).json({ city })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createCityDetails = async (req, res) => {
  try {
    const city = await new City(req.body)
    await city.save()
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateCity = async (req, res) => {
  try {
    const { id } = req.params
    const city = await City.findByIdAndUpdate(id, req.body)
    res.status(200).json(city)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteCity = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await City.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).json('city deleted')
    }
    throw new Error('city not found')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  deleteCity,
  updateCity,
  getCityDetails,
  createCityDetails
}
