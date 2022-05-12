const db = require('../db')
const City = require('../models/City.js')

const main = async () => {
  const city = [
    {
      name: 'Minneapolis',
      image:
        'https://res.cloudinary.com/dntpwckqi/image/upload/v1652391089/Ruth_cm8cjx.jpg',
      date: '05/12/2022',
      description:
        'We had a comfortable long-weekend stay at my Khaleh Sahars! My favorite treats were from Pennys Coffee. I really had a time meeting the other dogs around the place. There were so many great walks in this dog friendly town, but my favorite trot this trip was at Lake of the Isles Dog Park. UnLeashed freedom! I look forward to coming back soon.',
      stay: 'AirBnb Pet-Friendly Stay',
      stayLink:
        'https://www.airbnb.com/rooms/21578309?adults=2&check_in=2022-07-08&check_out=2022-07-14&federated_search_id=c7a3062e-d70b-4777-9392-d0151d12abc9&source_impression_id=p3_1652391272_Qrw%2FJSp%2Fln1TnIKS',
      treat: 'Pennys Coffee',
      treatLink: 'http://www.pennyscoffee.com/',
      walk: 'Lake of the Isles Dog Park',
      walkLink:
        'https://www.minneapolisparks.org/parks__destinations/dog_parks/lake_of_the_isles_off-leash_dog_park/'
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
