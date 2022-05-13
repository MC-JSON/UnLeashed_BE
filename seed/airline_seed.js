const db = require('../db')
const Airline = require('../models/Airline.js')

const main = async () => {
  const airline = [
    {
      name: 'Aegean Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/aegean.jpg',
      url: 'https://en.aegeanair.com/travel-information/special-assistance/traveling-with-pet/',
      reservations:
        'The Aegean Reservations Department must be notified even if you book your reservation online. You can contact them at 833-732-8158 for more information.'
    },
    {
      name: 'Aer Lingus',
      logo: 'https://media.bringfido.com/travel/airline_logos/arelingus.jpg',
      url: 'https://www.aerlingus.com/travel-information/baggage-information/travelling-with-pets/#/tab-0-flights-within-europe',
      reservations:
        'Passengers who plan on traveling with their dog should contact Aer Lingus before making a reservation. You can call the Aer Lingus Customer Service Team directly at (888) 578-4806 to make arrangements.'
    },
    {
      name: 'AeroMexico',
      logo: 'https://media.bringfido.com/travel/airline_logos/aeromexico.jpg',
      url: 'https://aeromexico.com/en-us/travel-information/flying-with-pets',
      reservations:
        'On most AeroMexico flights, 6 pets are allowed in the cabin and hold. To find out details about your aircraft and to guarantee a spot, you can contact the Customer Service Team at 800-237-6639.'
    },
    {
      name: 'Air Canada',
      logo: 'https://media.bringfido.com/travel/airline_logos/air_canada.jpg',
      url: 'https://www.aircanada.com/ca/en/aco/home/plan/special-assistance/pets.html#/',
      reservations:
        'Air Canada allows 2-4 pets in the cabin per flight, so they advise making your dogs reservation as soon as possible after you confirm your travel plans by calling the Customer Service Team at 888-247-2262.'
    },
    {
      name: 'Air India',
      logo: 'https://media.bringfido.com/travel/airline_logos/airindia.jpg',
      url: 'https://www.airindia.in/new-pets.htm',
      reservations:
        'There is a maximum of 2 pets allowed on each flight, so you should contact the Customer Service Team at (800) 223-7776 to guarantee a spot on board. Passengers traveling with their dog will be seated towards the back of the aircraft.'
    },
    {
      name: 'Air France',
      logo: 'https://media.bringfido.com/travel/airline_logos/air_france.jpg',
      url: 'https://wwws.airfrance.us/information/passagers/voyager-avec-son-animal-chien-chat',
      reservations:
        'When you are booking your ticket with Air France, be sure to let them know that you are traveling with a dog. Depending on the aircraft, the number of animals allowed to travel may vary. You can contact their Telephone Sales Team at 800-237-2747 with any additional questions or concerns.'
    },
    {
      name: 'Alaska',
      logo: 'https://media.bringfido.com/travel/airline_logos/alaska.jpg',
      url: 'https://www.alaskaair.com/content/travel-info/policies/pets-traveling-with-pets',
      reservations:
        'On any given flight, the First Class cabin can accommodate 1 pet and the main cabin can accommodate 5. Alaska Air recommends contacting the Customer Service Team at (800) 252-7522 as soon as your travel plans are confirmed.'
    },
    {
      name: 'Alitalia',
      logo: 'https://media.bringfido.com/travel/airline_logos/alitalia.jpg',
      url: 'https://www.alitalia.com/en/destinations',
      reservations:
        'The number of spots on each flight are limited, so you should call the Customer Service Team at 800-223-5730 to find out specifics and availability on your flights.'
    },
    {
      name: 'Allegiant',
      logo: 'https://media.bringfido.com/travel/airline_logos/allegiant.jpg',
      url: 'https://www.allegiantair.com/traveling-with-pets',
      reservations:
        'Before being accepted on board, all dog carriers must be inspected at the airport to ensure that the dog and carrier are in compliance with the guidelines. If you have any questions on availability, you can contact the Customer Service Team at (702) 505-8888.'
    },
    {
      name: 'American Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/american-airlines.jpg',
      url: 'https://www.aa.com/i18n/travel-info/special-assistance/pets.jsp',
      reservations:
        'American Airlines allows 7 kennels on American Airlines flights and 5 kennels on American Eagle flights. If you plan on traveling with your dog, you should contact the Customer Service Team at (800) 433-7300 as soon as you confirm your travel plans to guarantee a spot. American Airlines can restrict dogs flying if the weather conditions are above 85 degrees Fahrenheit and below 45 degrees Fahrenheit.'
    },
    {
      name: 'Avianca',
      logo: 'https://www.bringfido.com/travel/airline_policies/avianca/',
      url: 'https://www.avianca.com/co/en/before-your-trip/special-needs/pets-on-board/',
      reservations:
        'Avianca welcomes dogs in both the cabin and the hold on many of their flights. Please call (800)284-2622 for reservations or more information.'
    },
    {
      name: 'British Airways',
      logo: 'https://media.bringfido.com/travel/airline_logos/british-airways.jpg',
      url: 'https://www.britishairways.com/en-us/information/travel-assistance/travelling-with-pets',
      reservations:
        'You can reserve a spot on British Airways flights by contacting their Customer Service Team at 800-247-9297.'
    },
    {
      name: 'Buddha Air',
      logo: 'https://media.bringfido.com/travel/airline_logos/buddha-air.jpg',
      url: 'https://www.buddhaair.com/',
      reservations:
        'You can reserve a spot on Buddha Air flights by contacting their Customer Service Team at 01-5542494.'
    },
    {
      name: 'Brussels Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/brussels-airlines.jpg',
      url: 'https://www.brusselsairlines.com/bf/en/special-care/pets',
      reservations:
        'Dogs need to be approved for travel at reservation by Brussels Airlines. You can find out more details by contacting the Customer Service Center at 866-308-2230.'
    },
    {
      name: 'Caribbean Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/caribbean-airlines.jpg',
      url: 'https://www.caribbean-airlines.com/#/requests-and-special-assistance/traveling-with-live-animals',
      reservations:
        'Caribbean welcomes dogs to fly as checked baggage or cargo on a number of flights. Please call (800)920-4225 for more information.'
    },
    {
      name: 'Cathay Pacific',
      logo: 'https://media.bringfido.com/travel/airline_logos/cathaypacific.jpg',
      url: 'https://www.cathaypacific.com/cx/en_US/prepare-trip/help-for-passengers/travelling-with-animals/overview.html',
      reservations:
        'When you are making your reservation, make sure you have the total combined weight of your dog and carrier, dimensions, material, and make. Like with most airlines, you will also be required to provide valid health and vaccination certificates, entry permits, and any other documents required by the country you are flying to. You can contact them at (800) 233-2742 to make your reservation or to ask any further questions.'
    },
    {
      name: 'Cebu Pacific',
      logo: 'https://media.bringfido.com/travel/airline_logos/cebu-pacific.jpg',
      url: 'https://www.cebupacificair.com/',
      reservations:
        'CEB allows dogs to travel in the hold on a number of different flights. Before being accepted on board, you will need to source valid health certificates, rabies vaccination reports, a quarantine report, and attach all forms to your pets IATA-approved carrier. You can find out more information by contacting them via telephone at (+632) 802-7150.'
    },
    {
      name: 'China Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/chinaairlines.jpg',
      url: 'https://oa.ceair.com/newCMS/au/en/content/en_Header/headerBottom/service/Infomation/ticket/201903/t20190305_2971.html',
      reservations:
        'To guarantee a spot on board, you should contact the Customer Service Team at (800) 200-5118 as soon as your travel plans are confirmed. You will also be required to fill in a form on the China Eastern website.'
    },
    {
      name: 'Copa Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/copaairlines.jpg',
      url: 'https://www.copaair.com/en/web/us/pets',
      reservations:
        'They welcome small dogs into the cabin on select flights. Please call (800)359-2672 for more information.'
    },
    {
      name: 'Delta',
      logo: 'https://media.bringfido.com/travel/airline_logos/delta.jpg',
      url: 'https://www.delta.com/us/en/pet-travel/overview',
      reservations:
        'Dogs are accepted on a first-come, first-serve basis. Delta limits the number of total pets per flight, allowing 2 pets to travel in first class, 2 in business class, and 4 in the main cabin of most of their flights. You can call Delta at 800-221-1212 to guarantee a spot on board.'
    },
    {
      name: 'EgyptAir',
      logo: 'https://media.bringfido.com/travel/airline_logos/egyptair.jpg',
      url: 'https://www.egyptair.com/en/fly/special-services/Pages/traveling-with-pets.aspx',
      reservations:
        'Only 2 animals are accepted in each class in the cabin with EgyptAir, so passengers planning on traveling with a dog should contact the Reservations Department well in advance of their departure date. You can contact them via telephone at (+1) 212-581-5600.'
    },
    {
      name: 'Emirates',
      logo: 'https://media.bringfido.com/travel/airline_logos/emirates.jpg',
      url: 'https://www.emirates.com/english/help/faqs/',
      reservations:
        'You will not find any restrictions on the number of pets that can be placed in the hold on Emirates flights, however, some countries do impose restrictions on the number of pets that can be carried in and out. Before your departure date, inform Emirates directly at (800)-777-3999.'
    },
    {
      name: 'Ethiopian Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/ethiopian.jpg',
      url: 'https://www.ethiopianairlines.com/aa/information',
      reservations:
        'Ethiopian Airlines requires dog owners to register their dog in advance of their departure time. As only 2 pets are permitted in Economy class and 1 in Business, owners should request a spot for their pet as soon as their travel plans are confirmed. You can do this by contacting them directly at (800) 445-2733.'
    },
    {
      name: 'Flair Air',
      logo: 'https://media.bringfido.com/travel/airline_logos/flair-air.jpg',
      url: 'https://flyflair.com/',
      reservations:
        'Only 4 pets are allowed in the cabin with Flair Airlines, so you should contact the Customer Service Team via telephone at (780) 809-1784 as soon as your travel plans are confirmed to guarantee a spot on board.'
    },
    {
      name: 'Frontier Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/frontier.jpg',
      url: 'https://www.flyfrontier.com/travel/travel-info/family-pets/',
      reservations:
        'Call Frontier Airlines as soon as your travel plans are confirmed to guarantee a spot. You can get through to the Customer Service Team at (801) 401-9000.'
    },
    {
      name: 'Hawaiian Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/Hawaiian-airlines.jpg',
      url: 'https://www.hawaiianairlines.com/our-services/special-assistance/traveling-with-animals',
      reservations:
        'Hawaiian Airlines limits the number of animals on each flight. They recommend that you reserve a ticket for yourself and your dog as soon as possible after confirming your travel plans. You can call them directly at 1-800-367-5320 and advise the agent that you are traveling with your pet.'
    },
    {
      name: 'Hong Kong Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/hongkong.jpg',
      url: 'https://www.hongkongairlines.com/en_AU/services/baggage/checkedbaggage',
      reservations:
        'You should contact the Reservations Department at least 7 days prior to your departure time. Please call (855)393-3880.'
    },
    {
      name: 'Iberia',
      logo: 'https://media.bringfido.com/travel/airline_logos/iberia.jpg',
      url: 'https://www.iberia.com/us/fly-with-iberia/pets/',
      reservations:
        'As the number of pets on each aircraft is restricted on the basis of the type of airplane, the carriage of animals must be authorized by the Booking Office. You can contact them at (+1) 800-772-4642 to double check availability on your flights.'
    },
    {
      name: 'Iceland Air',
      logo: 'https://media.bringfido.com/travel/airline_logos/icelandair.jpg',
      url: 'https://www.icelandair.com/support/special-assistance/',
      reservations:
        'A maximum of 4 animals can be carried on each aircraft, so you should call their Customer Service Team at (800) 223-5500 to guarantee a spot on board.'
    },
    {
      name: 'IranAir',
      logo: 'https://media.bringfido.com/travel/airline_logos/iran-air.jpg',
      url: 'https://ebooking.iranair.com/ibe/IR/home?language=fa',
      reservations:
        'Unfortunately, pets are not permitted to travel in the cabin with Iran Air.'
    },
    {
      name: 'Japan Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/japan-airlines.jpg',
      url: 'https://www.jal.co.jp/jp/en/inter/support/pet/',
      reservations:
        'Dogs are permitted to travel on domestic and international flights as cargo if they meet the necessary requirements. You can contact the Cargo Department directly at (800) 525-3663.'
    },
    {
      name: 'JetBlue',
      logo: 'https://media.bringfido.com/travel/airline_logos/jetblue.jpg',
      url: 'https://www.jetblue.com/traveling-together/traveling-with-pets',
      reservations:
        'JetBlue only allows 4 pets on each flight, so its important to book your dogs ticket as early as possible. You can call the Customer Service Team at 1-800-JETBLUE and let the reservations agent know that you would like to travel with your dog.'
    },
    {
      name: 'KLM',
      logo: 'https://media.bringfido.com/travel/airline_logos/klm.jpg',
      url: 'https://www.klm.com/travel/us_en/prepare_for_travel/travel_planning/pets/index.htm',
      reservations:
        'All dog bookings need to made by telephone. As there are a limited number of spots for pets on most flights, they advise you to make the reservation at the latest within 24 hours after you have booked your ticket, but at least 48 hours before departure. You can contact the KLM Customer Service Team at 866-434-0320 as soon as you have finalized your travel plans.'
    },
    {
      name: 'Korean Air',
      logo: 'https://media.bringfido.com/travel/airline_logos/koreanair.jpg',
      url: 'https://www.koreanair.com/us/en',
      reservations:
        'Korean Air only allows a certain number of pets on each flight, so they suggest you book a spot on board as soon as you confirm your travel plans. You can contact the Customer Service Team at (800) 438-5000 to do this.'
    },
    {
      name: 'LATAM',
      logo: 'https://media.bringfido.com/travel/airline_logos/latam-formally-LAN.jpg',
      url: 'https://www.latamairlines.com/us/en/experience/prepare-your-trip/pets-transportation',
      reservations:
        'Dog owners should request pet travel service at least 48 hours prior to their flight. As this service is subject to availability, you should request it as soon as you make your reservation by calling the Customer Service Team at 866-435-9526.'
    },
    {
      name: 'LOT Polish Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/LOT.jpg',
      url: 'https://lot.com/us/en/journey/special-services/traveling-with-pets',
      reservations:
        'LOT only take a limited number of pets in the cabin, so make reservations for your dog as soon as possible by calling their Contact Center at (+48) 22-577-77-55.'
    },
    {
      name: 'Lufthansa',
      logo: 'https://media.bringfido.com/travel/airline_logos/lufthansa_eJl1RYU.jpg',
      url: 'https://www.lufthansa.com/am/en/animals-as-additional-carry-on-baggage',
      reservations:
        'Each passenger may only bring 2 pets on board. As soon as your travel plans are confirmed, you should call the Lufthansa Reservations Team at (800) 645-3880 and tell the agent that you are traveling with your dog.'
    },
    {
      name: 'Malaysia Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/malaysia.jpg',
      url: 'https://www.malaysiaairlines.com/content/dam/mas/pdf/MAB_general_conditions_of_carriage.pdf',
      reservations:
        'To find out more information on your flight specifics, you can contact the Customer Service Team in Kuala Lumpar at 603-7843-3000.'
    },
    {
      name: 'Pakistan International',
      logo: 'https://media.bringfido.com/travel/airline_logos/pakistan-internation.jpg',
      url: 'https://www.piac.com.pk/',
      reservations:
        'Dogs must be pre-approved for travel with PIA. You can find out all the information you need by contacting them directly via telephone at (844) 682-5260.'
    },
    {
      name: 'Philippine Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/philippinesairlines.jpg',
      url: 'https://www.philippineairlines.com/TravelInformation/BeforeYouFly/BaggageInformation/SpecialBaggage/Pets',
      reservations:
        ' You must contact the airline within 48 hours of your travel departure by phone at (800) 435-9725 to guarantee a spot on board.'
    },
    {
      name: 'Qatar Airways',
      logo: 'https://media.bringfido.com/travel/airline_logos/qatar.jpg',
      url: 'https://www.qatarairways.com/en/baggage/animals.html',
      reservations:
        'There is no limit on the amount of animals that can be transported in the cargo hold on Qatar Airways flights, but each aircraft has different restrictions. They recommend contacting Qatar Airways as soon as you finalize your travel plans to guarantee a spot on board. You can contact Qatar Airways at 877-777-2827 to inform the agent know that you are traveling with a pet.'
    },
    {
      name: 'Royal Jordanian',
      logo: 'https://media.bringfido.com/travel/airline_logos/royaljordan.jpg',
      url: 'https://rj.com/en/info-and-tips/special-services/flying-with-pets',
      reservations:
        'There are a limited number of pets allowed on each flight: 2 in the cabin and 4 in the hold. Due to these limitations, the Royal Jordanian Customer Service Team suggest booking your dogs spot on board as soon as your travel plans are confirmed. You can do this by contacting them via phone at (+962) 6510-0000.'
    },
    {
      name: 'Shanghai Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/shanghai.jpg',
      url: 'https://www.hahnair.com/en/carrier/fm',
      reservations:
        'China Eastern Airlines requires you to fill out an application form that can be found on their website. You can find out more information by contacting the Customer Service Team at (800) 200-5118.'
    },
    {
      name: 'Singapore Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/singaporeairlines.jpg',
      url: 'https://www.singaporeair.com/en_UK/us/travel-info/special-assistance/travelling-with-pets/',
      reservations:
        'Get in touch with your local Singapore Airlines office at least 2 weeks before your departure to guarantee a spot. You can find out more information by calling them at (800) 742-3333.'
    },
    {
      name: 'South African Airways',
      logo: 'https://media.bringfido.com/travel/airline_logos/south-african-airways.jpg',
      url: 'https://www.flysaa.com/manage-fly/baggage/checked-baggage/animals',
      reservations:
        'Passengers who want to travel with their dog should make the necessary arrangements through the call center via telephone at (+27) 11-978-1111 or 0861-359-722.'
    },
    {
      name: 'Southwest',
      logo: 'https://media.bringfido.com/travel/airline_logos/southwest.jpg',
      url: 'https://www.southwest.com/pets/',
      reservations:
        'Southwest Airlines accepts pets on a first-come, first-served basis until they reach their capacity. The total number of pet carriers on each flight is limited to 6, so passengers should make their dog reservations as soon as they confirm travel plans. You can call the Customer Service Team at 1-800-435-9792 to reserve a spot.'
    },
    {
      name: 'Spirit',
      logo: 'https://media.bringfido.com/travel/airline_logos/spirit.jpg',
      url: 'https://customersupport.spirit.com/en-us/category/article/KA-01181',
      reservations:
        'Spirit Airlines limits the number of pet carriers in the cabin to 4 so you should reserve your spot on the airplane as soon as your travel plans are confirmed. You can call the Spirit Airlines Customer Service Team at 801-401-2222 to guarantee a spot on board.'
    },
    {
      name: 'Star Peru',
      logo: 'https://media.bringfido.com/travel/airline_logos/star-peru.jpg',
      url: 'https://www.starperu.com/es',
      reservations:
        'There are a limited number of pets allowed on Star Peru flights, so you should contact the Customer Service Team via telephone (511) 705-9000 as soon as your travel plans are confirmed.'
    },
    {
      name: 'Sun Country',
      logo: 'https://media.bringfido.com/travel/airline_logos/suncountryairlines.jpg',
      url: 'https://www.suncountry.com/help-center/traveling-with-kids-or-pets#label-subtopic-pets',
      reservations:
        'A maximum of 4 pets as carry-on baggage will be accepted on each flight, so it is important for you to reserve a spot as soon as possible after your travel plans are confirmed. To guarantee a spot, you should contact Sun Country Airlines Reservations at 800-359-6786.'
    },
    {
      name: 'Sunwing Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/sunwing.jpg',
      url: 'https://www.sunwingcares.ca/hc/en-us/articles/115007303407-Do-you-allow-pets-on-board-Sunwing-flights-',
      reservations:
        'Unfortunately, dogs are not permitted to fly on any Sunwing flights unless they are emotional support animals.'
    },
    {
      name: 'Swiss',
      logo: 'https://media.bringfido.com/travel/airline_logos/swiss.jpg',
      url: 'https://www.swiss.com/us/en/homepage',
      reservations:
        'Swiss Airlines allows each passenger to bring two animals onto a flight. When you are ready to book your tickets, you should call the Swiss Airlines Service Center Team at (+41) 848 700 700 to discuss arrangements.'
    },
    {
      name: 'TAP Portugal',
      logo: 'https://media.bringfido.com/travel/airline_logos/TAP.jpg',
      url: 'https://www.flytap.com/en-us/travelling-with-animals/pets',
      reservations:
        'To find out more information about traveling with your dog and to make a reservation, you can call the Customer Service Team at 800-221-7370.'
    },
    {
      name: 'Thai Airways',
      logo: 'https://media.bringfido.com/travel/airline_logos/thai.jpg',
      url: 'https://www.thaiairways.com/en/plan/travel_information/pet_travel.page',
      reservations:
        'To find out more information about traveling with your dog and to make a reservation, you can call the Customer Service Team at 800-767-3598.'
    },
    {
      name: 'Turkish Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/turkish-airlines.jpg',
      url: 'https://www.turkishairlines.com/en-us/any-questions/traveling-with-pets/',
      reservations:
        'Turkish Airlines require passengers traveling with dogs to be approved a minimum of 6 hours prior to departure. Turkish Airlines can accommodate different numbers of pets on their various aircraft. You can call Turkish Airlines Customer Support at 1-800-874-8875 for further details.'
    },
    {
      name: 'United Airlines',
      logo: 'https://media.bringfido.com/travel/airline_logos/united.jpg',
      url: 'https://www.united.com/ual/en/us/fly/travel/animals.html',
      reservations:
        'United Airlines only accept 2 dogs in the cabin on most of their flights, so they advise you to contact the Customer Service Team as soon as you confirm your travel plans. They accept reservations between 30 days in advance (maximum) and 5 days (minimum) prior to travel for customers traveling with their pets and/or for pets traveling alone.'
    },
    {
      name: 'Virgin Atlantic',
      logo: 'https://media.bringfido.com/travel/airline_logos/virgin-atlantic.jpg',
      url: 'https://help.virginatlantic.com/gb/en/how-to-book-your-pet-onto-a-flight.html',
      reservations:
        'Virgin Atlantic does not allow dogs to travel in the cabin on any of their flights.'
    },
    {
      name: 'Viva Air Colombia',
      logo: 'https://media.bringfido.com/travel/airline_logos/vivacolobia.jpg',
      url: 'https://www.vivaair.com/en-co/additional-services',
      reservations:
        'Viva Air Colombia only accepts 6 pets on board each flight. To guarantee one of these spots, you should contact the Customer Service Team at 855-652-0600 as soon as your travel plans are confirmed.'
    },
    {
      name: 'WestJet',
      logo: 'https://media.bringfido.com/travel/airline_logos/westjet.jpg',
      url: 'https://www.westjet.com/en-ca/pets',
      reservations:
        'WestJet does not allow dogs to be reserved online. To add your dog to your travel plans, contact WestJet Customer Service at 1-888-937-8538 to speak to a representative. All of the WestJet aircraft have different restrictions on how many pets are allowed in the cabin and hold.'
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
