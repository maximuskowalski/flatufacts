const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const farters = {
    'african wild dogs': {
        'animalName': "African wild dogs",
        'scientificName': "Lycaon pictus",
        'doesItFart': "Yes",
        'notes': "Any self respecting canine does",
        'research': "",
        'fartoligist': "@DaniRabaiotti",
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/African_wild_dog_%28Lycaon_pictus_pictus%29.jpg/1920px-African_wild_dog_%28Lycaon_pictus_pictus%29.jpg'
    },
    'aliens': {
        'animalName': "Aliens",
        'scientificName': "",
        'doesItFart': "Maybe",
        'notes': "Great Scott!",
        'research': "",
        'fartoligist': "@chrislintott",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/74/Kruge.jpg'
    },
    'american badger': {
        'animalName': "American Badger",
        'scientificName': "Taxidea taxus",
        'doesItFart': "Maybe",
        'notes': "Elbroch (2003) describes badger scat as rancorous (can confirm); assume fart",
        'research': "",
        'fartoligist': "@biologistimo",
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/AmericanBadger.JPG/1920px-AmericanBadger.JPG'
    },
    'ammonite': {
        'animalName': "Ammonite",
        'scientificName': "Ammonoidea",
        'doesItFart': "No",
        'notes': "molluscs don't fart- would like to question inking as farting in extant cephs",
        'research': "",
        'fartoligist': "@NadWGab",
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Pleuroceras_solare%2C_Little_Switzerland%2C_Bavaria%2C_Germany.jpg/1280px-Pleuroceras_solare%2C_Little_Switzerland%2C_Bavaria%2C_Germany.jpg'
    },
    'arachnids': {
        'animalName': "Arachnids",
        'scientificName': "Arachnida",
        'doesItFart': "Maybe",
        'notes': "Assumed as yes, but never really been proven",
        'research': "",
        'fartoligist': "@SS_Henriques",
        'image': 'https://upload.wikimedia.org/wikipedia/commons/2/21/Arachnid_collage.jpg'
    },
    'baboons': {
        'animalName': "Baboons",
        'scientificName': "Papio",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@Cassie_Raby",
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Olive_baboon_Ngorongoro.jpg/1280px-Olive_baboon_Ngorongoro.jpg'
    },
    'bats': {
        'animalName': "Bats",
        'scientificName': "Chiroptera",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@hammerheadbat",
        'image': 'https://upload.wikimedia.org/wikipedia/commons/7/77/Big-eared-townsend-fledermaus.jpg'
    },
    'bearded dragon': {
        'animalName': "Bearded Dragon",
        'scientificName': "Pogona vitticeps",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@lizardschwartz",
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pogona_vitticeps02.JPG/1920px-Pogona_vitticeps02.JPG'
    },
    'birds': {
        'animalName': "Birds",
        'scientificName': "Aves",
        'doesItFart': "No",
        'notes': "But they could if they wanted to",
        'research': "http://www.popsci.com/environment/article/2009-05/it-true-birds-cant-fart",
        'fartoligist': "@thelabandfield",
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/White-tailed_tropicbird.jpg/220px-White-tailed_tropicbird.jpg'
    },
    'black spinytail iguana': {
        'animalName': "Black Spinytail Iguana",
        'scientificName': "Ctenosaura similis",
        'doesItFart': "Yes",
        'notes': "Seems to occur more frequently when less insect/animal protein is consumed and higher quantities of fruit/fiber are eaten",
        'research': "personal observations",
        'fartoligist': "@squamatasci",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/1/19/CtenosauraSimilis.jpg'
    },
    'blue mussels': {
        'animalName': "Blue mussels",
        'scientificName': "Mytilus edulis",
        'doesItFart': "No",
        'notes': "",
        'research': "",
        'fartoligist': "@CarinaDSLR",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Miesmuscheln-2.jpg/800px-Miesmuscheln-2.jpg'
    },
    'bobcats': {
        'animalName': "Bobcats",
        'scientificName': "Lynx rufus",
        'doesItFart': "Hell Yes",
        'notes': "Squirrel-based farts are THE WORST.",
        'research': "",
        'fartoligist': "@NatickBobCat, @biologistimo",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bobcat_at_Columbus_Zoo_Boo.jpg/800px-Bobcat_at_Columbus_Zoo_Boo.jpg'
    },
    'bristle worms': {
        'animalName': "Bristle worms",
        'scientificName': "Polychaetes",
        'doesItFart': "No",
        'notes': "",
        'research': "",
        'fartoligist': "@_glitterworm",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Phyllodoce_rosea.jpg'
    },
    'burchells zebra': {
        'animalName': "Burchell's zebra",
        'scientificName': "Equus quagga burchellii",
        'doesItFart': "Yes",
        'notes': "That's what they do best!",
        'research': "",
        'fartoligist': "@FattebertJ",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg/1920px-Equus_quagga_burchellii_-_Etosha%2C_2014.jpg'
    },
    'burmese python': {
        'animalName': "Burmese python",
        'scientificName': "Python molurus",
        'doesItFart': "Yes",
        'notes': "Often silent but deadly. Thick, and...meaty? If it were a color it would be brownish-yellow.",
        'research': "anecdotal & personal observations",
        'fartoligist': "@SssnakeySci",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Python_bivittatus_%D1%82%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D0%B8%D1%82%D0%BE%D0%BD.jpg'
    },
    'camel': {
        'animalName': "Camel",
        'scientificName': "Camelus",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@cat_murray",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg/1024px-07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg'
    },
    'cheetah': {
        'animalName': "Cheetah",
        'scientificName': "Acinonyx jubatus",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@hmk_oneill",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/800px-TheCheethcat.jpg'
    },
    'chimpanzees': {
        'animalName': "Chimpanzees",
        'scientificName': "Pan troglodytes",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@Adriana_lowe",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Unnamed_-_Chimpanzee_-_Central_African_Republic.jpg'
    },
    'cockroaches': {
        'animalName': "Cockroaches",
        'scientificName': "Periplaneta americana",
        'doesItFart': "Yes",
        'notes': "http://aem.asm.org/content/57/9/2628.short; http://www.pnas.org/content/91/12/5441.full.pdf",
        'research': "",
        'fartoligist': "@HereBeSpiders11",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Snodgrass_common_household_roaches.png/1024px-Snodgrass_common_household_roaches.png'
    },
    'colobine monkeys': {
        'animalName': "Colobine monkeys",
        'scientificName': "Trachypithecus, Colobus etc.",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@pakasuchus",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/6/61/Gray_langur_%28Semnopithecus%29_by_Shantanu_Kuveskar.jpg'
    },
    'common whelks': {
        'animalName': "Common whelks",
        'scientificName': "Buccinum undatum",
        'doesItFart': "No",
        'notes': "",
        'research': "",
        'fartoligist': "@CarinaDSLR",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Buccinum_undatum.jpg'
    },
    'copperhead': {
        'animalName': "Copperhead",
        'scientificName': "Agkistrodon contortrix",
        'doesItFart': "Yes",
        'notes': "Elicits a small squeak, so small that you think you may be mistaken...until it hits you. Very dry and feral, with a slight hint of stale Copperhead musk.",
        'research': "anecdotal & personal observations",
        'fartoligist': "@SssnakeySci",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/9/96/Agkistrodon_contortrix_contortrix_CDC-a.png'
    },
    'domestic cat': {
        'animalName': "Domestic cat",
        'scientificName': "Felis catus",
        'doesItFart': "Yes",
        'notes': "Seems to worsen in vicinity of human face. Silent but deadly",
        'research': "",
        'fartoligist': "@Captain_Herder @Scare",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cat_poster_1.jpg/800px-Cat_poster_1.jpg'
    },
    'domestic goat': {
        'animalName': "Domestic goat",
        'scientificName': "Capra aegagrus hircus",
        'doesItFart': "Yes",
        'notes': "but burps are worse",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1280px-Hausziege_04.jpg'
    },
    'domestic hedgehogs': {
        'animalName': "Domestic hedgehogs",
        'scientificName': "Atelerix albiventris",
        'doesItFart': "Yes",
        'notes': "Fish makes it so much worse",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Hazel_Hedgehog.jpg'
    },
    'domestic pigs': {
        'animalName': "Domestic pigs",
        'scientificName': "Sus scrofa domesticus",
        'doesItFart': "Yes ",
        'notes': "",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Pig_farm_Vampula_9.jpg/1280px-Pig_farm_Vampula_9.jpg'
    },
    'domestic sheep': {
        'animalName': "Domestic sheep",
        'scientificName': "Ovis aries",
        'doesItFart': "Yes ",
        'notes': "",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flock_of_sheep.jpg/800px-Flock_of_sheep.jpg'
    },
    'domesticated dogs': {
        'animalName': "Domesticated Dogs",
        'scientificName': "Canis lupus familiaris",
        'doesItFart': "Yes",
        'notes': "but often takes blame from nearby hominid, Boston Terriers are famous for their farting; known to scare selves with their farts",
        'research': "",
        'fartoligist': "@brianwolven, @CarinaDSLR et al",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shiba_inu_taiki.jpg/1024px-Shiba_inu_taiki.jpg'
    },
    'elephants': {
        'animalName': "Elephants",
        'scientificName': "Loxodonta",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@AdityaGangadh",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Elephant_Diversity.jpg/1280px-Elephant_Diversity.jpg'
    },
    'european oysters': {
        'animalName': "European oysters",
        'scientificName': "Ostrea edulis",
        'doesItFart': "No",
        'notes': "",
        'research': "",
        'fartoligist': "@CarinaDSLR",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/European_Flat_Oyster.jpg/1280px-European_Flat_Oyster.jpg'
    },
    'fancy goldfish': {
        'animalName': "Fancy goldfish",
        'scientificName': "Carassius auratus",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@indik",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Katri.jpg'
    },
    'freshwater mussels': {
        'animalName': "Freshwater mussels",
        'scientificName': "Unionidae",
        'doesItFart': "No",
        'notes': "They do enjoy expelling pseudofeces",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Margaritifera_margaritifera-buiten.jpg'
    },
    'frogs': {
        'animalName': "Frogs",
        'scientificName': "Anura",
        'doesItFart': "Yes",
        'notes': "Pyxicephalus adspersus and Ceratophrys sp frogs both can and do fart quite often and rather pungently. (Frogs have weak sphincters, unconfimed if audible)",
        'research': "",
        'fartoligist': "@MarkScherz",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Crested_gecko_-_1.jpg'
    },
    'crested geckos': {
        'animalName': "Crested Geckos",
        'scientificName': "Corellophus ciliatus",
        'doesItFart': "Yes",
        'notes': "Individual named Tangerine farted before defecting.",
        'research': "",
        'fartoligist': "@MarkScherz",
        'image:': ''
    },
    'giraffe': {
        'animalName': "Giraffe",
        'scientificName': "Giraffa",
        'doesItFart': "Hell Yes",
        'notes': "At \"face height\" of the average man",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Zoo_de_Vincennes%2C_Paris%2C_France_April_2014_%287%29%2C_crop.jpg/1024px-Zoo_de_Vincennes%2C_Paris%2C_France_April_2014_%287%29%2C_crop.jpg'
    },
    'gorillas': {
        'animalName': "Gorillas",
        'scientificName': "Gorilla gorilla",
        'doesItFart': "Yes",
        'notes': "See orangutans",
        'research': "",
        'fartoligist': "@mjcreid, @diana_monkey",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg/800px-Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg'
    },
    'gray fox': {
        'animalName': "Gray Fox",
        'scientificName': "Urocyon cinereoargenteus",
        'doesItFart': "Yes",
        'notes': "Heard under general anesthesia, assume possible while awake",
        'research': "",
        'fartoligist': "@biologistimo",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Grey_Fox_%28Urocyon_cinereoargenteus%29.jpg/1280px-Grey_Fox_%28Urocyon_cinereoargenteus%29.jpg'
    },
    'green iguana': {
        'animalName': "Green Iguana",
        'scientificName': "Iguana iguana",
        'doesItFart': "Yes",
        'notes': "",
        'research': "personal observations of captive Green Iguana",
        'fartoligist': "@squamatasci",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Green_Iguana_Basking.jpg/1280px-Green_Iguana_Basking.jpg'
    },
    'grizzly bear': {
        'animalName': "Grizzly bear",
        'scientificName': "Ursus arctos",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Grizzly_Pair_at_the_Cleveland_Zoo.jpg/1024px-Grizzly_Pair_at_the_Cleveland_Zoo.jpg'
    },
    'guinea pigs': {
        'animalName': "Guinea Pigs",
        'scientificName': "Cavia porcellus",
        'doesItFart': "Yes",
        'notes': "Several examples heard every day, very audible and stinks to high heaven",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/George_the_amazing_guinea_pig.jpg/1280px-George_the_amazing_guinea_pig.jpg'
    },
    'herring': {
        'animalName': "Herring",
        'scientificName': "Clupea spp.",
        'doesItFart': "Yes",
        'notes': "Entire bays are filled with their farts. Used for communication",
        'research': "http://news.nationalgeographic.com/news/2003/11/1110_031110_herringfarts.html, http://rspb.royalsocietypublishing.org/content/271/Suppl_3/S95",
        'fartoligist': "@CarolineHFox, @gkalinkat",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Clupea_harengus_Gervais.flipped.jpg/1280px-Clupea_harengus_Gervais.flipped.jpg'
    },
    'horse': {
        'animalName': "Horse",
        'scientificName': "Equus caballus",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@tecklen",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg'
    },
    'humans': {
        'animalName': "Humans",
        'scientificName': "Homo sapiens",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/6/68/Akha_cropped_hires.JPG'
    },
    'isopods': {
        'animalName': "Isopods (marine and terrestrial)",
        'scientificName': "Cirolana harfordi,Porcellio scaber and Idotea resecata",
        'doesItFart': "Yes",
        'notes': "Excrete ammonia",
        'research': "Kirby P.K. & Harbaugh R.D. (1974) Diurnal patterns of ammonia release in marine and terrestrial isopods. Comparative Biochemistry and Physiology Part A: Physiology 47, 1313-1322.",
        'fartoligist': "Kim Kennedy, MSc.",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/7/78/Eurydice_pulchra.jpg'
    },
    'lagomorphs': {
        'animalName': "Lagomorphs",
        'scientificName': "Lagomorpha spp. ",
        'doesItFart': "Yes",
        'notes': "fav joke here \"what's invisible, floats through the air, and smells like bunnies?\"",
        'research': "",
        'fartoligist': "@thonoir",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Eastern_Cottontail.JPG/1280px-Eastern_Cottontail.JPG'
    },
    'lemurs': {
        'animalName': "Lemurs",
        'scientificName': "Lemuroidea spp.",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@thonoir",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Lemuroidea.jpg/800px-Lemuroidea.jpg'
    },
    'lion': {
        'animalName': "Lion",
        'scientificName': "Panthera leo",
        'doesItFart': "Yes",
        'notes': "At least sedated ones.",
        'research': "",
        'fartoligist': "@FattebertJ",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg'
    },
    'manatees': {
        'animalName': "Manatees",
        'scientificName': "Trichechus",
        'doesItFart': "Yes",
        'notes': "near constantly",
        'research': "",
        'fartoligist': "@indik",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/8/85/Trichechus_Diversity.jpg'
    },
    'mastodon': {
        'animalName': "Mastodon",
        'scientificName': "Mammut",
        'doesItFart': "No",
        'notes': "Not anymore",
        'research': "",
        'fartoligist': "@edorsatum",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mammut_americanum_Sergiodlarosa.jpg'
    },
    'millipedes': {
        'animalName': "Millipedes",
        'scientificName': "wide variety, see attached paper",
        'doesItFart': "Yes",
        'notes': "Yes, of the silent but deadly variety (methane AND hydrogen sulfide!)",
        'research': "http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0102659",
        'fartoligist': "@HereBeSpiders11",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Millipede_collage.jpg/800px-Millipede_collage.jpg'
    },
    'moonsnails': {
        'animalName': "Moonsnails",
        'scientificName': "Naticidae",
        'doesItFart': "No",
        'notes': "",
        'research': "",
        'fartoligist': "@biolumiJEFFence",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Natica_hebraea.jpg'
    },
    'mustelids': {
        'animalName': "Mustelids",
        'scientificName': "Mustelidae spp.",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@thonoir",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Martes_martes_crop.jpg'
    },
    'orangutan': {
        'animalName': "Orangutan",
        'scientificName': "Pongo",
        'doesItFart': "Yes",
        'notes': "They do it often and have no shame",
        'research': "",
        'fartoligist': "@mjcreid",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG/1024px-Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG'
    },
    'panther chameleon': {
        'animalName': "Panther Chameleon",
        'scientificName': "Furcifer pardalis",
        'doesItFart': "Yes",
        'notes': "Sometimes while defecating - audible and stinky",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Panther_chameleon_%28Furcifer_pardalis%29_male_Nosy_Be.jpg/1280px-Panther_chameleon_%28Furcifer_pardalis%29_male_Nosy_Be.jpg'
    },
    'parakeets': {
        'animalName': "Parakeets",
        'scientificName': "Melopsittacus undulatus",
        'doesItFart': "Maybe",
        'notes': "My friend's parakeet farted in my face when I was 9 years old. (Note: literature disputes this - see \"Birds\", which are purported not to fart)",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Melopsittacus_undulatus_-Atlanta_Zoo%2C_Georgia%2C_USA-8a-2c.jpg/1024px-Melopsittacus_undulatus_-Atlanta_Zoo%2C_Georgia%2C_USA-8a-2c.jpg'
    },
    'parrots': {
        'animalName': "Parrots",
        'scientificName': "Psittaciformes",
        'doesItFart': "No",
        'notes': ":(",
        'research': "",
        'fartoligist': "@alexevans91",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sirocco_full_length_portrait.jpg/240px-Sirocco_full_length_portrait.jpg'
    },
    'pupfish': {
        'animalName': "Pupfish",
        'scientificName': "Cyprinodon spp.",
        'doesItFart': "Yes",
        'notes': "Ingest air with solids during summer months. Associated with behavioral changes until release of gas",
        'research': "http://www.tandfonline.com/doi/abs/10.1577/1548-8659%281967%2996%5B216%3AEAEOIG%5D2.0.CO%3B2?journalCode=utaf20",
        'fartoligist': "@jennygumm",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Macularius_stimulation.jpg/1280px-Macularius_stimulation.jpg'
    },
    'rabbits': {
        'animalName': "Rabbits",
        'scientificName': "Oryctolagus sp",
        'doesItFart': "Yes",
        'notes': "Gas is dangerous in rabbits, however. It can cause intestinal stasis and lead to death within a short period of time.",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/1024px-Oryctolagus_cuniculus_Rcdo.jpg'
    },
    'rats': {
        'animalName': "Rats",
        'scientificName': "Rattus",
        'doesItFart': "Yes",
        'notes': "They smell worse than dog farts",
        'research': "",
        'fartoligist': "@Julie_B92 and @JuliesRats",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/6/67/Rat_diabetic.jpg'
    },
    'rhesus macaque': {
        'animalName': "Rhesus macaque",
        'scientificName': "Macaca mulatta",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@laurenmrobin",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Rhesus_macaque_%28Macaca_mulatta_mulatta%29%2C_male%2C_Gokarna.jpg/1280px-Rhesus_macaque_%28Macaca_mulatta_mulatta%29%2C_male%2C_Gokarna.jpg'
    },
    'rhinoceros iguana': {
        'animalName': "Rhinoceros Iguana",
        'scientificName': "Cyclura cornuta",
        'doesItFart': "Yes",
        'notes': "\"Sounds wet\". Increased frequency with higher fruit and/or fiber intake. High parasites loads also lead to an increase in flatulence.",
        'research': "personal observations of captive cyclura",
        'fartoligist': "@squamatasci",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/RhinoIguanaMay07Pedernales.jpg'
    },
    'rotifers': {
        'animalName': "Rotifers",
        'scientificName': "Rotifera",
        'doesItFart': "Maybe",
        'notes': "Probably not, but if they can they'd be tiny. No one to offend if you're asexual tho",
        'research': "",
        'fartoligist': "@Julie_B92",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mikrofoto.de-Raedertier-14.jpg'
    },
    'salamanders': {
        'animalName': "Salamanders",
        'scientificName': "Urodela",
        'doesItFart': "Maybe",
        'notes': "probably not audibly (see frogs), but their poops smell really bad",
        'research': "",
        'fartoligist': "@PlethodoNick",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/b/b2/SpottedSalamander.jpg'
    },
    'sea anemone': {
        'animalName': "Sea Anemone",
        'scientificName': "Actiniaria",
        'doesItFart': "No",
        'notes': "But awful burps",
        'research': "https://books.google.com/books/about/Invertebrate_Zoology.html?id=RoUZnQEACAAJ",
        'fartoligist': "Barnes, Robert D. (1982). Invertebrate Zoology",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Actiniaria.jpg/1280px-Actiniaria.jpg'
    },
    'seals': {
        'animalName': "Seals",
        'scientificName': "Pinnipedia",
        'doesItFart': "Yes",
        'notes': "Smells like lutefisk",
        'research': "",
        'fartoligist': "@DaniRabaiotti",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Arctocephalus_Pusillus_Pusillus.jpg/1024px-Arctocephalus_Pusillus_Pusillus.jpg'
    },
    'shore crabs': {
        'animalName': "Shore crabs",
        'scientificName': "Carcinus maenas",
        'doesItFart': "No",
        'notes': "",
        'research': "",
        'fartoligist': "@CarinaDSLR",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Carcinus_maenas.jpg/1280px-Carcinus_maenas.jpg'
    },
    'skunks': {
        'animalName': "Skunks",
        'scientificName': "Mephitidae",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Striped_Skunk.jpg/1280px-Striped_Skunk.jpg'
    },
    'sloths': {
        'animalName': "Sloths",
        'scientificName': "Folivora",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bicho-pregui%C3%A7a_3.jpg/1280px-Bicho-pregui%C3%A7a_3.jpg'
    },
    'snakes': {
        'animalName': "Snakes",
        'scientificName': "Serpentes",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@AlongsideWild",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg'
    },
    'ball python': {
        'animalName': "ball python",
        'scientificName': "Python regius",
        'doesItFart': "No",
        'notes': "We have not heard any audible sounds from the vent in 5+ years of care",
        'research': "",
        'fartoligist': "@mbystoma",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Ball_python_lucy.JPG'
    },
    'corn and rat snakes': {
        'animalName': "corn and rat snakes",
        'scientificName': "Pantherophis spp.",
        'doesItFart': "Yes",
        'notes': "Often with defecation",
        'research': "",
        'fartoligist': "@mbystoma",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/e/ef/CornSnake.jpg'
    },
    'milksnake': {
        'animalName': "milksnake",
        'scientificName': "Lampropeltis triangulum",
        'doesItFart': "Yes",
        'notes': "Often with defecation and quite smelly",
        'research': "",
        'fartoligist': "@mbystoma",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Red_milk_snake.JPG'
    },
    'western hognose snake': {
        'animalName': "Western hognose snake",
        'scientificName': "Heterodon nasicus",
        'doesItFart': "Yes",
        'notes': "Powerful for the size with defecation and extremely foul smelling",
        'research': "",
        'fartoligist': "@mbystoma",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Heterodon_nasicus.jpg'
    },
    'snow leopards': {
        'animalName': "Snow leopards",
        'scientificName': "Panthera uncia",
        'doesItFart': "Yes",
        'notes': "Their floofy bottoms help to muffle the sound",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Irbis4.JPG'
    },
    'soft-shell clam': {
        'animalName': "Soft-shell clam",
        'scientificName': "Mya arenaria",
        'doesItFart': "No",
        'notes': "But they can puke (technically) - see next sheet",
        'research': "",
        'fartoligist': "@SS_Henriques",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Ecomare_-_strandgaper_%284792-mya-strandgaper-mok-ogb%29.jpg/1920px-Ecomare_-_strandgaper_%284792-mya-strandgaper-mok-ogb%29.jpg'
    },
    'spiders': {
        'animalName': "Spiders",
        'scientificName': "Araneae",
        'doesItFart': "Maybe",
        'notes': "Broadly assumed as yes, but never really been proven.",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Spiders_Diversity.jpg'
    },
    'spotted hyenas': {
        'animalName': "Spotted hyenas",
        'scientificName': "Crocuta crocuta ",
        'doesItFart': "Yes",
        'notes': "Especially bad after eating camel intestines ",
        'research': "",
        'fartoligist': "@ArjDheer",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Spotted_hyena_in_Madikwe_Game_Reserve.jpg/1280px-Spotted_hyena_in_Madikwe_Game_Reserve.jpg'
    },
    'squid, octopus, cuttlefish': {
        'animalName': "Squid, octopus, cuttlefish",
        'scientificName': "Teuthida, Octopoda, Sepiida",
        'doesItFart': "Yes",
        'notes': "If we count air coming out of the siphon as farting, yes",
        'research': "",
        'fartoligist': "@sarahmackattack",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/1920px-Octopus2.jpg'
    },
    'syrian hamster': {
        'animalName': "Syrian hamster",
        'scientificName': "Mesocricetus auratus",
        'doesItFart': "Yes",
        'notes': "probably; see rats, plus anecdata",
        'research': "",
        'fartoligist': "@BeesAndBaking",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Golden_hamster_front_1.jpg/1920px-Golden_hamster_front_1.jpg'
    },
    'tapirs': {
        'animalName': "Tapirs",
        'scientificName': "Tapirus spp",
        'doesItFart': "Yes",
        'notes': "In great amplitude",
        'research': "",
        'fartoligist': "",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Schabrackentapir_Tapirus_indicus_Tiergarten-Nuernberg-1.jpg/1920px-Schabrackentapir_Tapirus_indicus_Tiergarten-Nuernberg-1.jpg'
    },
    'termites': {
        'animalName': "Termites",
        'scientificName': "Reticulitermes, others",
        'doesItFart': "Yes",
        'notes': "A lot--may be a significant contributor to global climate change",
        'research': "http://science.sciencemag.org/content/218/4572/563",
        'fartoligist': "@HereBeSpiders11",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Coptotermes_formosanus_shiraki_USGov_k8204-7.jpg/800px-Coptotermes_formosanus_shiraki_USGov_k8204-7.jpg'
    },
    'tortoise': {
        'animalName': "Tortoise",
        'scientificName': "Astrochelys radiata",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@mbystoma",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/A._gigantea_Aldabra_Giant_Tortoise.jpg/1920px-A._gigantea_Aldabra_Giant_Tortoise.jpg'
    },
    'unicorns': {
        'animalName': "Unicorns",
        'scientificName': "Equus unicornus",
        'doesItFart': "Yes",
        'notes': "it's glitter and rainbows soft serve",
        'research': "",
        'fartoligist': "@NadWGab",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/DomenichinounicornPalFarnese.jpg/1920px-DomenichinounicornPalFarnese.jpg'
    },
    'wombat': {
        'animalName': "Wombat",
        'scientificName': "Vombatidae",
        'doesItFart': "Yes",
        'notes': "",
        'research': "https://www.youtube.com/watch?v=VHy2yAuZzds",
        'fartoligist': "@ivandaum",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/1/18/Vombatus_ursinus_-Maria_Island_National_Park.jpg'
    },
    'woodlice': {
        'animalName': "Woodlice",
        'scientificName': "Armadillidium vulgare and Ligidium lapetum",
        'doesItFart': "Yes",
        'notes': "Excrete ammonia",
        'research': "Wright J.C. & Peña-Peralta M. (2005) Diel variation in ammonia excretion, glutamine levels, and hydration status in two species of terrestrial isopods. Journal of Comparative Physiology B 175, 67-75",
        'fartoligist': "Kim Kennedy, MSc",
        'image:': 'https://upload.wikimedia.org/wikipedia/commons/7/71/Woodlouse_collage_x4.png'
    }
};

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.get("/api/:animalName", (request, response) => {
    const animalsName = request.params.animalName.toLowerCase();
    const animalArray = Object.keys(farters);
    const randomNumber = Math.random();
    const animalIndex = Math.floor(randomNumber * animalArray.length);

    const randomKey = animalArray[animalIndex];
    // This will course this will return the value of the randomKey
    // instead of a fresh random value
    // https://stackoverflow.com/a/37401010
    const randomValue = farters[randomKey];

    if (farters[animalsName]) {
        response.json(farters[animalsName]);
    } else {
        response.json(farters[randomKey]);
    }

});

app.get("/api/random"), (request, response) => {
    const animalArray = Object.keys(farters);
    const randomNumber = Math.random();
    const animalIndex = Math.floor(randomNumber * animalArray.length);

    const randomKey = animalArray[animalIndex];
    // This will course this will return the value of the randomKey
    // instead of a fresh random value
    // https://stackoverflow.com/a/37401010
    const randomValue = farters[randomKey];

    response.json(randomValue)
}

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
