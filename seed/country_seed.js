const db = require('../db')
const Country = require('../models/Country.js')

const main = async () => {
  const country = [{}]

  await Country.insertMany(country)
  console.log('Unleash the fury Mitch!')
}

const run = async () => {
  await main()
  db.close()
}

run()
