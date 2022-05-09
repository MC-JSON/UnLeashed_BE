const db = require('../db')
const City = require('../models/City.js')

const main = async () => {
  const city = [
    {
      name: 'Bruges',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vtpjJs5h9ntB81l7L80XhgHaEK%26pid%3DApi&f=1',
      date: '05/01/2022',
      description: 'Beautiful stay in Bruges. Check out our recommendations!',
      stay: 'AirBnb',
      stayLink:
        'https://www.airbnb.com/s/Bruges--Belgium/homes?adults=2&pets=1&irgwc=1&irclid=0L03KmQeqxyITxMWwZzwmRiZUkGSMP2P8zLHUg0&ircid=4273&sharedid=dog-friendly-airbnbs-in-bruges-be&af=48966681&iratid=9627&c=.pi73.pk4273_15874&irparam1=',
      treat: 'Cafe Vlissinghe',
      treatLink: 'http://www.cafevlissinghe.be/',
      walk: 'Bruges Art Route',
      walkLink: 'https://cityseeker.com/bruges/1136240-bruges-art-route'
    },
    {
      name: 'Brussels',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vtpjJs5h9ntB81l7L80XhgHaEK%26pid%3DApi&f=1',
      date: '05/01/2022',
      description: 'Beautiful stay in Brussels. Check out our recommendations!',
      stay: 'AirBnb',
      stayLink:
        'https://www.airbnb.com/s/Bruges--Belgium/homes?adults=2&pets=1&irgwc=1&irclid=0L03KmQeqxyITxMWwZzwmRiZUkGSMP2P8zLHUg0&ircid=4273&sharedid=dog-friendly-airbnbs-in-bruges-be&af=48966681&iratid=9627&c=.pi73.pk4273_15874&irparam1=',
      treat: 'Cafe Vlissinghe',
      treatLink: 'http://www.cafevlissinghe.be/',
      walk: 'Bruges Art Route',
      walkLink: 'https://cityseeker.com/bruges/1136240-bruges-art-route'
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
