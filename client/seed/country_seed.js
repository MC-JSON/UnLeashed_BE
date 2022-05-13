const db = require('../db')
const Country = require('../models/Country.js')

const main = async () => {
  const country = [
    {
      name: 'Algeria',
      flag_img: 'https://media.bringfido.com/country_flags/Algeria.jpg',
      requirements:
        'If you would like to travel with your pet to Algeria, you will only need a veterinarian rabies inoculation certificate, issued at point of origin.',
      url: 'http://www.algerianembassy.org/'
    },
    {
      name: 'Anguilla',
      flag_img: 'https://media.bringfido.com/country_flags/Anguilla.jpg',
      requirements:
        'Taking your pet on a trip to Anguilla is quite easy to do. If you would like to import a pet from the United States, you will need to get an import permit from Dr. Vanterpool CVO of Anguilla. The permit is only valid for one (1) month.',
      url: 'http://www.gov.ai/pets.php'
    },
    {
      name: 'Armenia',
      flag_img: 'https://media.bringfido.com/country_flags/Armenia.jpg',
      requirements:
        'In order to travel to Armenia with your pet, all you will need is a veterinarian health certificate.',
      url: 'https://www.mfa.am/hy/'
    },
    {
      name: 'Aruba',
      flag_img: 'https://media.bringfido.com/country_flags/Aruba.jpg',
      requirements:
        'In order to travel with your pet to Aruba, you will only need a Veterinary Health Certificate issued from the originating country, no more than 14 days prior to arrival and a rabies inoculation certificate issued within 30 days prior to arrival. Your pet will also need a microchip prior to traveling to Aruba.',
      url: 'https://www.visitaruba.com/traveling-to-aruba/traveling-with-pets/'
    },
    {
      name: 'Australia',
      flag_img: 'https://media.bringfido.com/country_flags/Australia.jpg',
      requirements:
        'In order to travel with your pet to Australia, you will need to complete several requirements before your departure. Several of them require extended waiting periods, so it is best to start the process well in advance of your travel. Please follow the link provided to review.',
      url: 'https://www.awe.gov.au/biosecurity-trade/cats-dogs'
    },
    {
      name: 'Austria',
      flag_img: 'https://media.bringfido.com/country_flags/Austria.jpg',
      requirements:
        'Traveling with you pet to Austria is quite easy. A health certificate, micro-chip or readable tattoo, and a valid rabies vaccination will be needed. There is also an owner declaration that will have to be provided.',
      url: 'https://www.sozialministerium.at/'
    },
    {
      name: 'Bahamas',
      flag_img: 'https://media.bringfido.com/country_flags/Bahamas.jpg',
      requirements:
        'Entry can be extensive. A couple different options for vaccination against rabies are provided, a health certificate and permit are needed. Please refer to the link provided.',
      url: 'https://www.bahamas.gov.bs/wps/portal/public/gov/government/!ut/p/b1/hZDJboMwAES_JR9Q2SWU5WixJ2FpQoH4gnBwILUNRSwpfH2o1GvTuY30RqMZgEEGcFNMt6oYbm1T8B-PlXwLHR8hWfOdN6hA7yM6oEh1pXAvrcB5BeAfQvC__A7girdkrUrMi_g2K682PbNOFuYeu9wnU2uZPakIzaz2Lux6IJWsTXCnaxFKVBwbahguuZMazTx-llLeU95N0UnajtS2k1kR3FBkzPW6P6hnr0xTKx7cWbwI9t50R5Z4OWdlMN_l2TdGh8Z76_Kq-1cynNwAbTYgBfjpBBn-Ak8uCNxWUPAlsoWyK3oAkcEEHg!!/dl4/d5/L2dBISEvZ0FBIS9nQSEh/'
    },
    {
      name: 'Barbados',
      flag_img: 'https://media.bringfido.com/country_flags/Barbados.jpg',
      requirements:
        'Your dog must be microchipped, then vaccinated against rabies, a couple of tests done at your veterinarian. Timing is key so please refer to the provided link.',
      url: 'https://www.animalwelfarebarbados.com/pet-travel'
    },
    {
      name: 'Belgium',
      flag_img: 'https://media.bringfido.com/country_flags/Belgium.jpg',
      requirements:
        'Your dog must be identified with a microchip. Within 10 days before your departure to Belgium, you must go to your veterinarian to get an international health certificate. Be sure it includes proof of a valid vaccination from rabies. If you plan to travel within Europe upon your arrival to Belgium, you will need to get an EU pet passport from a veterinarian in Belgium.',
      url: 'https://www.health.belgium.be/language_selection?fodnlang=en&destination=%3Cfront%3E#.Vpv89lMrI_M'
    },
    {
      name: 'Belize',
      flag_img: 'https://media.bringfido.com/country_flags/Belize.jpg',
      requirements:
        'Your dog will need to have a veterinary certificate, up to date vaccination against rabies, an inspection will need to be done upon arrival and you must notify BAHA two days prior.',
      url: 'https://baha.org.bz/'
    },
    {
      name: 'Bermuda',
      flag_img: 'https://media.bringfido.com/country_flags/Bermuda.jpg',
      requirements:
        'Your dog must have a microchip, a veterinary health certificate, and a rabies vaccination history.',
      url: 'https://www.gov.bm/?open=512&objID=926&PageID=235505&mode=2&in_hi_userid=2&cached=true'
    },
    {
      name: 'Bolivia',
      flag_img: 'https://media.bringfido.com/country_flags/Bolivia.jpg',
      requirements: 'Your dog will need a veterinary health certificate.',
      url: 'https://www.boliviawdc.org/en-us/'
    },
    {
      name: 'Brazil',
      flag_img: 'https://media.bringfido.com/country_flags/Brazil.jpg',
      requirements:
        'Your dog will need an International Health Certificate, and a certificate of vaccination against rabies.',
      url: 'https://www.gov.br/pt-br'
    },
    {
      name: 'Bulgaria',
      flag_img: 'https://media.bringfido.com/country_flags/Bulgaria.jpg',
      requirements:
        'Your dog will need a microchip, vaccinated against rabies, and have a health certificate from a veterinarian.',
      url: 'https://www.bfsa.bg/bg/Page/consumer-pets/index/consumer-pets/%d0%94%d0%be%d0%bc%d0%b0%d1%88%d0%bd%d0%b8%20%d0%bb%d1%8e%ef%bf%bd'
    },
    {
      name: 'Burundi',
      flag_img: 'https://media.bringfido.com/country_flags/Burundi.jpg',
      requirements:
        'Your dog will need a veterinary health certificate, an inspection will take place upon arrival.',
      url: 'https://www.bringfido.com/travel/international/burundi/'
    },
    {
      name: 'Cambodia',
      flag_img: 'https://media.bringfido.com/country_flags/Cambodia.jpg',
      requirements:
        'You will need to obtain and travel with a Veterinarian Health Certificate and a Rabies Vaccination Certificate issued by the country of origin.',
      url: 'https://ww1.embassyofcambodia.org/'
    },
    {
      name: 'Canada',
      flag_img: 'https://media.bringfido.com/country_flags/Canada.jpg',
      requirements:
        'You may cross the border into Canada with your pet easily as long as your pet has been vaccinated against rabies within 3 years of your date of arrival.',
      url: 'https://inspection.canada.ca/importing-food-plants-or-animals/pets/eng/1326600389775/1326600500578'
    },
    {
      name: 'Chile',
      flag_img: 'https://media.bringfido.com/country_flags/Chile.jpg',
      requirements:
        'Your dog will need a veterinary health certificate, proof of vaccination against rabies, and treatment against endo- & ecto- parasites.',
      url: 'https://chile.gob.cl/estados-unidos/en/'
    },
    {
      name: 'China',
      flag_img: 'https://media.bringfido.com/country_flags/China.jpg',
      requirements:
        'Your dog will need proof of vaccination against rabies, a international health certificate from a veterinarian, and a photo of your dog.',
      url: 'https://us.china-embassy.gov.cn/eng/'
    },
    {
      name: 'Colombia',
      flag_img: 'https://media.bringfido.com/country_flags/Colombia.jpg',
      requirements:
        'A health certificate issued by your veterinarian will be needed.',
      url: 'https://www.ica.gov.co/?lang=en-US'
    },
    {
      name: 'Comoros',
      flag_img: 'https://media.bringfido.com/country_flags/Comoros.jpg',
      requirements:
        'You will need a health certificate and rabies vaccination certificate.',
      url: 'https://km.usembassy.gov/'
    },
    {
      name: 'Costa Rica',
      flag_img: 'https://media.bringfido.com/country_flags/Costa_Rica.jpg',
      requirements:
        'Travel with your dog to Costa Rica can be an extensive process. Please refer to the provided link.',
      url: 'http://costarica-embassy.org/sites/default/files/docs/PETS%20REQUIREMENTS%20FOR%20THE%20IMPORTATION%20JUNE%202019.pdf'
    },
    {
      name: 'Croatia',
      flag_img: 'https://media.bringfido.com/country_flags/Croatia.jpg',
      requirements:
        'Your dog will need to have a microchip, then vaccinated against rabies, and a health certificate from a veterinarian.',
      url: 'http://www.veterinarstvo.hr/default.aspx?id=1290'
    },
    {
      name: 'Cyprus',
      flag_img: 'https://media.bringfido.com/country_flags/Cyprus.jpg',
      requirements:
        'Your dog will need to have a microchip, then vaccinated against rabies, and a health certificate from a veterinarian.',
      url: 'http://www.moa.gov.cy/moa/vs/vs.nsf/vs07_gr/vs07_gr?OpenDocument'
    },
    {
      name: 'Czech Republic',
      flag_img: 'https://media.bringfido.com/country_flags/Czech_Republic.jpg',
      requirements:
        'Your dog will need to have a microchip, then vaccinated against rabies, and a health certificate from a veterinarian. A non-commercial use declaration from the owner will also be needed.',
      url: 'https://www.svscr.cz/'
    },
    {
      name: 'Denmark',
      flag_img: 'https://media.bringfido.com/country_flags/Denmark.jpg',
      requirements:
        'Your dog will need a completed authorization form, a microchip or tattoo, and a health certificate from your veterinarian.',
      url: 'https://www.foedevarestyrelsen.dk/english/Self-Service/Guides/Pages/How-to-travel-with-your-dog.aspx'
    },
    {
      name: 'Dominican Republic',
      flag_img:
        'https://media.bringfido.com/country_flags/Dominican_Republic.jpg',
      requirements:
        'Your dog will need a health certificate from your veterinarian, examined to be free of infectious diseases, treated for external and internal parasites, and vaccinated against rabies.',
      url: 'http://www.domrep.org/faqconsular.html'
    },
    {
      name: 'Ecuador',
      flag_img: 'https://media.bringfido.com/country_flags/Ecuador.jpg',
      requirements:
        'Your dog will need health certificate from your veterinarian 48 hours prior to departure, and vaccinated prior to departure. You will also need to contact Agrocalidad at port of entry with 72 hour advance arrival time.',
      url: 'https://www.agrocalidad.gob.ec/'
    },
    {
      name: 'Egypt',
      flag_img: 'https://media.bringfido.com/country_flags/Egypt.jpg',
      requirements:
        'If you would like to travel to Egypt with your dog, you will need to obtain a veterinarian health certificate. It will need to be valid two weeks from date of issue. Keep in mind, this certificate does not exempt your dog from a Egyptian Ministry of Agriculture Doctor examination on arrival.',
      url: 'https://www.egyptembassy.net/'
    },
    {
      name: 'El Salvador',
      flag_img: 'https://media.bringfido.com/country_flags/El_Salvador.jpg',
      requirements:
        'Your dog must be vaccinated against rabies, and have a health certificate from your veterinarian within 30 days prior to departure. Your dog must be treated against endo- and ecto- parasites.',
      url: 'https://elsalvador.org'
    },
    {
      name: 'Estonia',
      flag_img: 'https://media.bringfido.com/country_flags/Estonia.jpg',
      requirements:
        'Your dog must be microchipped, vaccinated against rabies, and have a health certificate from your veterinarian.',
      url: 'https://pta.agri.ee/en/animals/travelling-pet'
    },
    {
      name: 'Finland',
      flag_img: 'https://media.bringfido.com/country_flags/Finland.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'https://www.uef.fi/fi/'
    },
    {
      name: 'France',
      flag_img: 'https://media.bringfido.com/country_flags/France.jpg',
      requirements:
        'Your dog must be microchipped, vaccinated against rabies, and have a health certificate from your veterinarian that will be valid for 10 days before departure.',
      url: 'https://franceintheus.org/spip.php?article783'
    },
    {
      name: 'Germany',
      flag_img: 'https://media.bringfido.com/country_flags/Germany.jpg',
      requirements:
        'Your dog must be microchipped, vaccinated against rabies, and have a health certificate from your veterinarian.',
      url: 'https://www.bmel.de/EN/Home/home_node.html'
    },
    {
      name: 'Greece',
      flag_img: 'https://media.bringfido.com/country_flags/Greece.jpg',
      requirements:
        'If you would like to travel to Greece with your dog, your dog will need a microchip, proof of anti-rabies vaccination, and a health certificate (pdf below) endorsed by your veterinarian.',
      url: 'https://www.mfa.gr/usa/en/services/services-for-greeks/pets-animals.html'
    },
    {
      name: 'Guadeloupe',
      flag_img: 'https://media.bringfido.com/country_flags/Guadeloupe.jpg',
      requirements:
        'You are allowed up to three pets upon visitation. Your dog must have proof of a rabies vaccination signed by your veterinarian.',
      url: 'https://www.visahq.com/guadeloupe/customs/'
    },
    {
      name: 'Guatemala',
      flag_img: 'https://media.bringfido.com/country_flags/Guatemala.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'http://guatemalaembassyusa.org/te-ayudamos/si-estas-en-ee-uu-y-necesitas-hacer-un-tramite/legalizaciones/legalizar-un-certificado-de-vacunas-para-llevar-mi-mascota-a-guatemala/'
    },
    {
      name: 'Hong Kong',
      flag_img: 'https://media.bringfido.com/country_flags/Hong_Kong.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'https://www.afcd.gov.hk/english/quarantine/qua_ie/qua_ie_ipab/qua_ie_ipab_idc/qua_ie_ipab_idc.html'
    },
    {
      name: 'Hungary',
      flag_img: 'https://media.bringfido.com/country_flags/Hungary.jpg',
      requirements:
        'Your dog must be microchipped, vaccinated against rabies, and have a health certificate from your veterinarian. Your dog must be carried as manifested freight.',
      url: 'https://ec.europa.eu/food/animals/movement-pets_en'
    },
    {
      name: 'Iceland',
      flag_img: 'https://media.bringfido.com/country_flags/Iceland.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'https://www.mast.is/en'
    },
    {
      name: 'India',
      flag_img: 'https://media.bringfido.com/country_flags/India.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'http://www.aqcsindia.gov.in/'
    },
    {
      name: 'Indonesia',
      flag_img: 'https://media.bringfido.com/country_flags/Indonesia.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'https://www.aphis.usda.gov/aphis/pet-travel/by-country/pettravel-indonesia'
    },
    {
      name: 'Ireland',
      flag_img: 'https://media.bringfido.com/country_flags/Ireland.jpg',
      requirements:
        'Your dog must be microchipped, vaccinated against rabies, and have a health certificate from your veterinarian. Your dog must be carried as manifested freight.',
      url: 'https://www.gov.ie/en/'
    },
    {
      name: 'Israel',
      flag_img: 'https://media.bringfido.com/country_flags/Israel.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'https://www.aphis.usda.gov/aphis/pet-travel/by-country/pettravel-israel'
    },
    {
      name: 'Italy',
      flag_img: 'https://media.bringfido.com/country_flags/Italy.jpg',
      requirements:
        'Your dog must be microchipped, vaccinated against rabies, and have a health certificate from your veterinarian.',
      url: 'https://www.salute.gov.it/portale/temi/p2_6.jsp?lingua=italiano&id=4278&area=cani&menu=viaggiare'
    },
    {
      name: 'Jamaica',
      flag_img: 'https://media.bringfido.com/country_flags/Jamaica.jpg',
      requirements:
        'Only dogs from Great Britain, Northern Ireland, and the Republic of Eire are allowed entry into Jamaica. See the website for more details.',
      url: 'http://www.moa.gov.jm/'
    },
    {
      name: 'Japan',
      flag_img: 'https://media.bringfido.com/country_flags/Japan.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'https://www.maff.go.jp/aqs/english/animal/dog/import-other.html'
    },
    {
      name: 'Jordan',
      flag_img: 'https://media.bringfido.com/country_flags/Jordan.jpg',
      requirements:
        'It is unknown if there are requirements for entry into Jordan with a dog. Contact the Embassy for more information.',
      url: 'https://mfa.gov.jo/ar/embassy/washington/'
    },
    {
      name: 'Kenya',
      flag_img: 'https://media.bringfido.com/country_flags/Kenya.jpg',
      requirements:
        'Your dog will need a health certificate from your veterinarian no more than 5 days prior to departure. Your dog must also travel with a valid rabies vaccination. A certificate from the Captain of your plane must be obtained as well.',
      url: 'https://kenyaembassydc.org/'
    },
    {
      name: 'Kuwait',
      flag_img: 'https://media.bringfido.com/country_flags/Kuwait.jpg',
      requirements:
        'If you would like to travel with your dog, you will need to have a licensed veterinarian complete a veterinary certificate. Kuwait requires that the veterinary certificate be signed and dated not more than 30 days before travel. Your dog needs to be up-to-date on all vaccinations. All dogs must be vaccinated against rabies at least 30 days and not more than 12 months prior to travel. You will also need an import permit from the Animal Health department. The permit is valid for 1 month from date of issue.',
      url: 'http://www.kuwaitembassy.us/'
    },
    {
      name: 'Kyrgyz Republic',
      flag_img: 'https://media.bringfido.com/country_flags/Kyrgyzstan.jpg',
      requirements:
        'If you plan to travel to Kyrgyz keep in mind that dogs must be accompanied by a veterinarian health certificate with the seal of the local Board of Health and not be issued over 10 days prior to arrival. Be advised, dogs are not permitted in hotels.',
      url: 'https://kg.usembassy.gov/'
    },
    {
      name: 'Latvia',
      flag_img: 'https://media.bringfido.com/country_flags/Latvia.jpg',
      requirements:
        'Your dog must be microchipped, vaccinated against rabies, and have a health certificate from your veterinarian.',
      url: 'https://www.pvd.gov.lv/eng/left_menu/border_control/travelling_with_pets/noncommercial_movement_of_pets/travelling_from_third_countrie'
    },
    {
      name: 'Lebanon',
      flag_img: 'https://media.bringfido.com/country_flags/Lebanon.jpg',
      requirements:
        'Traveling with your dog to Lebanon can be done as long as you have two documents. Your dog must have a valid health certificate, issued by a veterinarian in the country of origin. This certificate is to be approved and stamped by an appropriate government authority of that country (USDA if in the US). You will also need proof that your dog has been vaccinated against rabies.',
      url: 'http://www.lebanonembassyus.org/'
    },
    {
      name: 'Lithuania',
      flag_img: 'https://media.bringfido.com/country_flags/Lithuania.jpg',
      requirements:
        'Your dog must be microchipped, vaccinated against rabies, and have a health certificate from your veterinarian.',
      url: 'https://vmvt.lt/animal-health/travelling-pets/cats-dogs-or-ferrets-from-low-risk-non-eu-countries?language=en'
    },
    {
      name: 'Luxembourg',
      flag_img: 'https://media.bringfido.com/country_flags/Luxembourg.jpg',
      requirements:
        'Your dog must be microchipped, vaccinated against rabies, and have a health certificate from your veterinarian.',
      url: 'https://gouvernement.lu/en.html'
    },
    {
      name: 'Malaysia',
      flag_img: 'https://media.bringfido.com/country_flags/Malaysia.jpg',
      requirements:
        'Your dog must be microchipped, have a health certificate issued 7 days prior to departure from your veterinarian, obtain an anti-rabies vaccination certificate, and obtain landing permits.',
      url: 'https://www.dvs.gov.my/index.php/pages/view/804'
    },
    {
      name: 'Mauritania',
      flag_img: 'https://media.bringfido.com/country_flags/Mauritania.jpg',
      requirements:
        'If you plan to travel with your dog to Mauritania, you will need to bring a current rabies vaccination certificate and a health certificate from the country of origin.',
      url: 'https://web.archive.org/web/20100413221605/http://mauritaniaembassy.us:80/'
    },
    {
      name: 'Mexico',
      flag_img: 'https://media.bringfido.com/country_flags/Mexico.jpg',
      requirements:
        'Your dog will need copies of a health certificate from your veterinarian, and vaccinations for rabies and distemper.',
      url: 'https://consulmex.sre.gob.mx/montreal/index.php/en/foreigners/services-foreigners/312-taking-pets-to-mexico'
    },
    {
      name: 'Morocco',
      flag_img: 'https://media.bringfido.com/country_flags/Morocco.jpg',
      requirements:
        'Your dog will need to obtain a veterinarian health certificate 10 days prior to departure, and you will also need to obtain an anti-rabies certificate that is issued within the last 6 months before departure.',
      url: 'https://www.embassyofmorocco.us/'
    },
    {
      name: 'Nepal',
      flag_img: 'https://media.bringfido.com/country_flags/Nepal.jpg',
      requirements:
        'If you are traveling with your dog to Nepal, you will need to bring a veterinarian health and rabies certificate for entry.',
      url: 'https://us.nepalembassy.gov.np/'
    },
    {
      name: 'Netherlands',
      flag_img: 'https://media.bringfido.com/country_flags/Netherlands.jpg',
      requirements:
        'Your dog must be microchipped, vaccinated against rabies, and have a health certificate from your veterinarian.',
      url: 'https://www.netherlandsworldwide.nl//travel/checklist-for-travellers-to-the-netherlands'
    },
    {
      name: 'New Zealand',
      flag_img: 'https://media.bringfido.com/country_flags/New_Zealand.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'https://www.mpi.govt.nz/bring-send-to-nz/pets-travelling-to-nz/bringing-cats-and-dogs-to-nz/step-by-step-guide-to-bringing-cats-and-dogs-to-nz/'
    },
    {
      name: 'Nicaragua',
      flag_img: 'https://media.bringfido.com/country_flags/Nicaragua.jpg',
      requirements:
        'It is really quite simple to travel with your dog to Nicaragua. Before you arrive, you will only need a health certificate (preferably issued by the USDA. However, health certificates issued by your local veterinarian showing proof of a recent rabies vaccine and proof of a parasite treatment within the past year is acceptable.',
      url: 'https://ni.usembassy.gov/u-s-citizen-services/local-resources-of-u-s-citizens/residing-in-nicaragua/'
    },
    {
      name: 'Norway',
      flag_img: 'https://media.bringfido.com/country_flags/Norway.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'https://www.mattilsynet.no/language/english/animals/travelling_with_pets/'
    },
    {
      name: 'Oman',
      flag_img: 'https://media.bringfido.com/country_flags/Oman.jpg',
      requirements:
        'Your dog will need an import license, a health certificate from your veterinarian, and an immunization certificate against rabies that was given more than 1 month before departure but less than 6 months.',
      url: 'https://www.culturaloffice.info/'
    },
    {
      name: 'Pakistan',
      flag_img: 'https://media.bringfido.com/country_flags/Pakistan.jpg',
      requirements:
        'If you plan to travel to Pakistan with your dog, you will only need to complete a few requirements. Upon your arrival, you will need to obtain an import permit from the Office of Imports and Exports Control Organization at the point of entry. A health certificate stating your dog is free of any disease and that a rabies vaccine has been administered is required with your application for the import permit.',
      url: 'https://embassyofpakistanusa.org/'
    },
    {
      name: 'Panama',
      flag_img: 'https://media.bringfido.com/country_flags/Panama.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'https://www.embassyofpanama.org/'
    },
    {
      name: 'Paraguay',
      flag_img: 'https://media.bringfido.com/country_flags/Paraguay.jpg',
      requirements:
        'If you would like to travel to Paraguay with your dog, you will need to obtain a health certificate from an authorized veterinarian and it must be legalized at a Paraguayan consulate in the US.',
      url: 'https://www.aphis.usda.gov/aphis/pet-travel/by-country/pettravel-paraguay'
    },
    {
      name: 'Peru',
      flag_img: 'https://media.bringfido.com/country_flags/Peru.jpg',
      requirements:
        'Your dog will need a vaccination certificate, and a health certificate from your veterinarian. Only one pet is allowed entry.',
      url: 'https://www.gob.pe/embajada-del-peru-en-estados-unidos'
    },
    {
      name: 'Philippines',
      flag_img: 'https://media.bringfido.com/country_flags/Philippines.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'https://www.philippineconsulatela.org/consular-services-2/notar1als/related-services/importation-of-pets-to-the-philippines'
    },
    {
      name: 'Poland',
      flag_img: 'https://media.bringfido.com/country_flags/Poland.jpg',
      requirements:
        'Your dog will need a microchip or tattoo, a health certificate from your veterinarian, a valid immunization against rabies, and you must provide a declaration in writing that your dog is visiting for travel and not sale or change of hands. ',
      url: 'https://www.wetgiw.gov.pl/nadzor-weterynaryjny/podroze-ze-zwierzetami-towarzyszacymi'
    },
    {
      name: 'Portugal',
      flag_img: 'https://media.bringfido.com/country_flags/Portugal.jpg',
      requirements:
        'Your dog will need to have a microchip, veterinary health certificate, proof of anti-rabies vaccination, and you will need to notify your point of entry 48 hours prior. An entry fee of 30 euros is required.',
      url: 'https://www.portugal.com/travel/traveling-with-pets-to-portugal/'
    },
    {
      name: 'Puerto Rico',
      flag_img: 'https://media.bringfido.com/country_flags/Puerto_Rico.jpg',
      requirements:
        'The requirements for dogs to go to Puerto Rico are simple. Just be sure to have a tag with the name of your dog and your contact information as well as a rabies quarantine certificate from your local veterinarian stating that the dog has had a rabies shot.',
      url: 'https://www.aphis.usda.gov/animal_health/downloads/import/state-regulations-for-puerto-rico.pdf'
    },
    {
      name: 'Qatar',
      flag_img: 'https://media.bringfido.com/country_flags/Qatar.jpg',
      requirements:
        'You will need to obtain an import permit prior to departure and it must be accompanied by a veterinary health certificate that is issued no earlier than 2 weeks prior to the date of arrival. Your dog must be vaccinated against rabies 1 month prior to departure.',
      url: 'https://www.mofa.gov.qa/'
    },
    {
      name: 'Romania',
      flag_img: 'https://media.bringfido.com/country_flags/Romania.jpg',
      requirements:
        'Your dog must have a microchip, be vaccinated against rabies, and have a health certificate from your veterinarian.',
      url: 'http://www.ansvsa.ro/?pag=903'
    },
    {
      name: 'Saudi Arabia',
      flag_img: 'https://media.bringfido.com/country_flags/Saudi_Arabia.jpg',
      requirements:
        'If you would like to travel to Saudi Arabia with your dog, they are typically not allowed unless they are traveling for hunting, guarding, and/or guides for the disabled.',
      url: 'https://www.aphis.usda.gov/aphis/pet-travel/by-country/pettravel-saudi-arabia'
    },
    {
      name: 'Singapore',
      flag_img: 'https://media.bringfido.com/country_flags/Singapore.jpg',
      requirements:
        'There are a whole host of requirements. Quarantine may be required as well. Please refer to the link provided.',
      url: 'https://www.aphis.usda.gov/aphis/pet-travel/by-country/pettravel-singapore'
    },
    {
      name: 'St. Maarten',
      flag_img: 'https://media.bringfido.com/country_flags/Sint_Maarten.jpg',
      requirements:
        'There are a whole host of requirements. Please refer to the link provided.',
      url: 'http://www.thecaribbeanpet.com/pet-travel-to-st-martinsint-maarten/'
    },
    {
      name: 'Slovakia',
      flag_img: 'https://media.bringfido.com/country_flags/Slovakia.jpg',
      requirements:
        'Your dog must have a microchip, and be vaccinated against rabies. You will need to obtain a health certificate from your veterinarian.',
      url: 'https://www.aphis.usda.gov/aphis/pet-travel/by-country/eu/pettravel-slovakia'
    },
    {
      name: 'Slovenia',
      flag_img: 'https://media.bringfido.com/country_flags/Slovenia.jpg',
      requirements:
        'Your dog must have a microchip, and be vaccinated against rabies. You will need to obtain a health certificate from your veterinarian.',
      url: 'https://www.gov.si/'
    },
    {
      name: 'South Africa',
      flag_img: 'https://media.bringfido.com/country_flags/South_Africa.jpg',
      requirements:
        'Your dog must be vaccinated against rabies no less than 30 days and not more than a year before arrival. An import permit and fee is required for all dogs. A health clearance certificate and blood test is required. Dogs are not allowed to be brought over in the cabin.',
      url: 'https://www.southafrica.net/us/en/'
    },
    {
      name: 'Spain',
      flag_img: 'https://media.bringfido.com/country_flags/Spain.jpg',
      requirements:
        'First, dogs should be accompanied by their owners or representatives. Second, your dog must be identified with a legible tattoo or microchip, and third, they need to have their animal health certificate. Be sure a copy of the health certificate is also completed in Spanish.',
      url: 'https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/desplazamiento-animales-compania/'
    },
    {
      name: 'Sri Lanka',
      flag_img: 'https://media.bringfido.com/country_flags/Sri_Lanka.jpg',
      requirements:
        'Sri Lanka has a whole host of requirements for your dog. Please refer to the link below for a breakdown.',
      url: 'http://www.daph.gov.lk/web/index.php?option=com_content&view=article&id=24&Itemid=126&lang=en#requirements-for-importation-of-dogs-and-cats-into-sri-lanka'
    },
    {
      name: 'St. Kitts and Nevis',
      flag_img:
        'https://media.bringfido.com/country_flags/Saint_Kitts_and_Nevis.jpg',
      requirements:
        'Your dog will need a current rabies vaccination, a health certificate from your veterinarian, and to be microchipped. You will need to apply in writing to the CVO for an import permit as well. There are a couple fees associated with bringing your dog to St. Kitts and Nevis, please refer to the link.',
      url: 'http://www.thecaribbeanpet.com/pet-travel-to-st-kitts-nevis/'
    },
    {
      name: 'Sweden',
      flag_img: 'https://media.bringfido.com/country_flags/Sweden.jpg',
      requirements:
        'Your dog must have a microchip or legible tattoo, proof of valid rabies vaccination, and a veterinary health certificate. Your dog must also have a pet owner statement.',
      url: 'https://djur.jordbruksverket.se/amnesomraden/reseguideforhundarochkatter.4.7dc0fafe14e39f52f4876d56.html'
    },
    {
      name: 'Switzerland',
      flag_img: 'https://media.bringfido.com/country_flags/Switzerland.jpg',
      requirements:
        'Your dog must have a microchip or legible tattoo, proof of valid rabies vaccination, and a veterinary health certificate.',
      url: 'https://www.blv.admin.ch/blv/de/home.html'
    },
    {
      name: 'Taiwan',
      flag_img: 'https://media.bringfido.com/country_flags/Taiwan.jpg',
      requirements:
        'Your dog will need to be microchipped and vaccinated against rabies at least 30 days (but no more than 1 year) prior to your departure. You will need to obtain a blood sample at least 180 days (but no more than 1 year) prior to departure, and have it sent to approved laboratories for rabies test. You will need to obtain a veterinary health certificate. You will need to apply for an import permit and make a reservation at the quarantine space at least 20 days prior to your departure. ',
      url: 'https://www.ait.org.tw/'
    },
    {
      name: 'Thailand',
      flag_img: 'https://media.bringfido.com/country_flags/Thailand.jpg',
      requirements:
        'Your dog will need a health certificate issued by your veterinarian. This certificate is valid for 10 days from date of issuance. You must bring a proof of vaccination showing Rabies, Leptospirosis, Distemper, Hepatitis, and Parvovirus vaccines for dogs. Keep in mind, the Leptospirosis test must be done within 30 days of departure and must show negative results.',
      url: 'https://www.aphis.usda.gov/aphis/pet-travel/by-country/pettravel-thailand'
    },
    {
      name: 'Trinidad and Tobago',
      flag_img:
        'https://media.bringfido.com/country_flags/Trinidad_and_Tobago.jpg',
      requirements:
        'In order for you to travel with your dog to Trinidad and Tobago, first you will need to apply for an import permit. Application forms can be obtained from the Animal Production and Health Division. One form of valid identification is to be presented (passport, ID card or drivers permit) upon application along with the letter of authorization (if applicable). You will need to apply for a health certificate from the USDA (for US travelers). Lastly, be sure to contact the Veterinary Office to provide flight/landing information 28 to 48 hours in advance of your arrival.',
      url: 'https://www.ttconnect.gov.tt/gortt/portal/ttconnect/!ut/p/a1/jdBRD0JQFAfwT-PVOZikNw8ltBpNcV8a7XZpuIbo44enbKXO2zn7_bf_DhAIgBRRm7KoSXkRZcNOFhfHlVG1dAVN3ZdQ9lxjr9mWgrrWg_AdHDxz04O1Km2dk4KI_-Xxyxg_80dawBns'
    },
    {
      name: 'Tunisia',
      flag_img: 'https://media.bringfido.com/country_flags/Tunisia.jpg',
      requirements:
        'Before traveling with your dog to Tunisia, you will need to get a certificate of health from veterinary authorities in the country of departure. It must state your dog was not exposed to any contagious diseases at its original home for 6 weeks before shipment. You will also need a rabies vaccination certificate issued between 1 and 6 months prior to arrival.',
      url: 'https://www.aphis.usda.gov/aphis/ourfocus/animalhealth/export/international-standard-setting-activities-oie/sa_by_country/sa_t/ct_animal_tunisia'
    },
    {
      name: 'Turkey',
      flag_img: 'https://media.bringfido.com/country_flags/Turkey.jpg',
      requirements:
        'A Health Examination for Small Animals form must be issued no more than 15 days before arrival. A rabies vaccination certificate must be issued not later than 15 days prior to entry.',
      url: 'http://newyork.cg.mfa.gov.tr/Mission'
    },
    {
      name: 'Turks and Caicos',
      flag_img:
        'https://media.bringfido.com/country_flags/Turks_and_Caicos.jpg',
      requirements:
        'A valid veterinary certificate form is required. An import application must be submitted and approved at least one week prior to travel. A $50 fee per dog to be paid upon arrival.',
      url: 'https://www.visittci.com/travel-info/traveling-with-pets'
    },
    {
      name: 'United Arab Emirates',
      flag_img:
        'https://media.bringfido.com/country_flags/United_Arab_Emirates.jpg',
      requirements:
        'An import permit and release for pets form must be completed through the MOEW web site. Your dog must be shipped in manifested cargo as well. An original vaccination card and health certificate are required. An import permit fee of 500 Dhs per dog.',
      url: 'https://www.moccae.gov.ae/en/home.aspx'
    },
    {
      name: 'United Kingdom',
      flag_img: 'https://media.bringfido.com/country_flags/United_Kingdom.jpg',
      requirements:
        'Your dog must be microchipped, and vaccinated against rabies no less than 21 days prior to your entry into the UK. Tapeworm treatment must be administered by a vet not less than 24 hours and not more than 120 hours (1-5 days) before your dogs scheduled arrival time in the UK.',
      url: 'https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs'
    },
    {
      name: 'Uruguay',
      flag_img: 'https://media.bringfido.com/country_flags/Uruguay.jpg',
      requirements:
        'Your dog must have a USDA endorsed health certificate and proof of rabies vaccination and Praziquantel treatment. The health certificate must state that the animal was examined within (10) days of departure. A rabies vaccination must be given more than (30) days before the arrival date into Uruguay.',
      url: 'https://www.aphis.usda.gov/aphis/pet-travel/by-country/pettravel-uruguay'
    },
    {
      name: 'U.S. Virgin Islands',
      flag_img:
        'https://media.bringfido.com/country_flags/US_Virgin_Islands.jpg',
      requirements:
        'Traveling to the U.S Virgin Islands with your dog is very easy! Dogs just need to have an official health certificate stating that they did not originate from an area quarantined for rabies. Your dog must have been vaccinated for rabies within 6 months prior to the date of travel.',
      url: 'https://www.vifresh.com/vitnary.php'
    },
    {
      name: 'Venezuela',
      flag_img: 'https://media.bringfido.com/country_flags/Venezuela.jpg',
      requirements:
        'Within two weeks before your departure to Venezuela, your dog must obtain a health certificate issued by a licensed veterinarian. The health certificate needs to include that the dog was examined and found to be healthy and free of any clinical signs of infectious and parasitic disease. If your dog is older than 4 months, you must show on the health certificate that your dog was vaccinated against rabies no more than 1 year prior to the date of departure. The date of immunization and the name of the product used must be indicated. If you are traveling with a dog, they need vaccination for distemper, hepatitis, leptospirosis, parvovirus and para-influenza virus.',
      url: 'https://www.aphis.usda.gov/aphis/pet-travel/by-country/pettravel-venezuela'
    },
    {
      name: 'Vietnam',
      flag_img: 'https://media.bringfido.com/country_flags/Vietnam.jpg',
      requirements:
        'Traveling with your dog to Vietnam is quite simple. You will need a current health certificate as well as a current rabies certificate.',
      url: 'https://vietnamembassy-usa.org/'
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
