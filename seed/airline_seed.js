const db = require('../db')
const Airline = require('../models/Airline.js')

const main = async () => {
  const airline = [
    {
      name: 'United Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/united.jpg',
      url: 'https://www.united.com/ual/en/us/fly/travel/animals.html',
      reservations:
        'United Airlines only accept 2 dogs in the cabin on most of their flights, so they advise you to contact the Customer Service Team as soon as you confirm your travel plans. They accept reservations between 30 days in advance (maximum) and 5 days (minimum) prior to travel for customers traveling with their pets and/or for pets traveling alone.'
    },
    {
      name: 'American',
      logo: 'https://media.bringfido.com/travel/airline_logos/united.jpg',
      url: 'https://www.united.com/ual/en/us/fly/travel/animals.html',
      reservations:
        'United Airlines only accept 2 dogs in the cabin on most of their flights, so they advise you to contact the Customer Service Team as soon as you confirm your travel plans. They accept reservations between 30 days in advance (maximum) and 5 days (minimum) prior to travel for customers traveling with their pets and/or for pets traveling alone.'
    }
  ]

  await Airline.insertMany(airline)
  console.log('Unleash the fury Mitch!')
}

const run = async () => {
  await main()
  db.close()
}

run()
