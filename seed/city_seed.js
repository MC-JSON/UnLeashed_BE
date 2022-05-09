const db = require('../db')
const City = require('../models/City.js')

const main = async () => {
  const city = [
    {
      name: 'Bruges',
      date: '05/01/2022',
      description: 'Beautiful stay in Bruges. Check out our recommendations!',
      stay: 'https://www.airbnb.com/s/Bruges--Belgium/homes?adults=2&pets=1&irgwc=1&irclid=0L03KmQeqxyITxMWwZzwmRiZUkGSMP2P8zLHUg0&ircid=4273&sharedid=dog-friendly-airbnbs-in-bruges-be&af=48966681&iratid=9627&c=.pi73.pk4273_15874&irparam1=',
      treat: 'http://www.cafevlissinghe.be/',
      walk: 'https://cityseeker.com/bruges/1136240-bruges-art-route'
    }
  ]

  await City.insertMany(city)
  console.log('Unleash the fury Mitch!')
}

const run = async () => {
  await main()
  db.close()
}

run()
