const db = require('../db')
const City = require('../models/City.js')

const main = async () => {
  const city = [{}]

  await City.insertMany(city)
  console.log('Unleash the fury Mitch!')
}

const run = async () => {
  await main()
  db.close()
}

run()
