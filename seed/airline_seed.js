const db = require('../db')
const Airline = require('../models/Airline.js')

const main = async () => {
  const airline = [{}]

  await Airline.insertMany(Airline)
  console.log('Unleash the fury Mitch!')
}

const run = async () => {
  await main()
  db.close()
}

run()
