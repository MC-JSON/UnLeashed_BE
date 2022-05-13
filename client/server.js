const express = require('express')
const cors = require('cors')
const db = require('./db')
const logger = require('morgan')
const countryController = require('./controller/CountryController')
const cityController = require('./controller/CityController')
const airlineController = require('./controller/AirlineController')
const authController = require('./controller/authController')

const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))

//routes
app.post('/signup', authController.signup)
app.post('/signin', authController.signin)
app.get('/verify', authController.verify)
app.get('/country', countryController.getCountryDetails)
app.get('/airline', airlineController.getAirlineDetails)
app.get('/city', cityController.getCityDetails)
app.post('/create/city', cityController.createCityDetails)
app.put('/update/city/:id', cityController.updateCity)
app.delete('/delete/city/:id', cityController.deleteCity)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
