const express = require('express')
const cors = require('cors')
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')
const countryController = require('./controller/CountryController')
const cityController = require('./controller/CityController')
const airlineController = require('./controller/AirlineController')
const authController = require('./controller/authController')
const verifyToken = require('./utilities/auth')

const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))

//routes
app.post('/signup', authController.signup)
app.post('/signin', authController.signin)
app.get('/country', countryController.getCountryDetails)
app.get('/airline', airlineController.getAirlineDetails)
app.get('/city', cityController.getCityDetails)
app.post('/create/city', cityController.createCityDetails)
app.put('/update/city/:id', cityController.updateCity)
app.delete('/delete/city/:id', cityController.deleteCity)
app.get('/hiddencontent', verifyToken, function (req, res) {
  if (!user) {
    res.status(403).send({
      message: 'Invalid JWT token'
    })
  }
  if (req.user == 'admin') {
    res.status(200).send({
      message: 'Congratulations! but there is no hidden content'
    })
  } else {
    res.status(403).send({
      message: 'Unauthorized access'
    })
  }
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
