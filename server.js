const express = require('express')
const cors = require('cors')
const db = require('./db')
const logger = require('morgan')
const { getCountryDetails } = require('./controller/CountryController')
const {
  deleteCity,
  updateCity,
  getCityDetails,
  createCityDetails
} = require('./controller/CityController')
const { getAirlineDetails } = require('./controller/AirlineController')
const { signup, signin, verify } = require('./controller/AuthController')

const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))

//routes
app.post('/signup', signup)
app.post('/signin', signin)
app.get('/verify', verify)
app.get('/country', getCountryDetails)
app.get('/airline', getAirlineDetails)
app.get('/city', getCityDetails)
app.post('/create/city', createCityDetails)
app.put('/update/city/:id', updateCity)
app.delete('/delete/city/:id', deleteCity)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
