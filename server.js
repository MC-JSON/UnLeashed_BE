const express = require('express')
const cors = require('cors')
const db = require('./db')
const logger = require('morgan')
const countryController = require('./controller/CountryController')
const cityController = require('./controller/CityController')
const airlineController = require('./controller/AirlineController')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))

//routes
app.get('/country', countryController.getCountryDetails)
app.get('/airline', airlineController.getAirlineDetails)
app.get('/city', cityController.getCityDetails)
app.post('city/create/:id', cityController.createCityDetails)
app.put('city/update/:id', cityController.updateCity)
app.delete('city/delete/:id', cityController.deleteCity)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
