const db = require('../db')
const Country = require('../models/Country.js')

const main = async () => {
  const country = [
    {
      name: 'Belgium',
      flag_img: 'https://media.bringfido.com/country_flags/Belgium.jpg',
      requirements:
        'Your dog must be identified with a microchip. Within 10 days before your departure to Belgium, you must go to your veterinarian to get an international health certificate. Be sure it includes proof of a valid vaccination from rabies. If you plan to travel within Europe upon your arrival to Belgium, you will need to get an EU pet passport from a veterinarian in Belgium.',
      url: 'https://www.health.belgium.be/language_selection?fodnlang=en&destination=%3Cfront%3E#.Vpv89lMrI_M'
    }
  ]

  await Country.insertMany(country)
  console.log('Unleash the fury Mitch!')
}

const run = async () => {
  await main()
  db.close()
}

run()
