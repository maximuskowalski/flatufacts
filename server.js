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
        'fartoligist': "@DaniRabaiotti"
    },
    'aliens': {
        'animalName': "Aliens",
        'scientificName': "",
        'doesItFart': "Maybe",
        'notes': "",
        'research': "",
        'fartoligist': "@chrislintott"
    },
    'american badger': {
        'animalName': "American Badger",
        'scientificName': "Taxidea taxus",
        'doesItFart': "Maybe",
        'notes': "Elbroch (2003) describes badger scat as rancorous (can confirm); assume fart",
        'research': "",
        'fartoligist': "@biologistimo"
    },
    'ammonite': {
        'animalName': "Ammonite",
        'scientificName': "Ammonoidea",
        'doesItFart': "No",
        'notes': "molluscs don't fart- would like to question inking as farting in extant cephs",
        'research': "",
        'fartoligist': "@NadWGab"
    },
    'arachnids': {
        'animalName': "Arachnids",
        'scientificName': "Arachnida",
        'doesItFart': "Maybe",
        'notes': "Assumed as yes, but never really been proven",
        'research': "",
        'fartoligist': "@SS_Henriques"
    },
    'baboons': {
        'animalName': "Baboons",
        'scientificName': "Papio",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@Cassie_Raby"
    },
    'bats': {
        'animalName': "Bats",
        'scientificName': "Chiroptera",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@hammerheadbat"
    },
    'bearded dragon': {
        'animalName': "Bearded Dragon",
        'scientificName': "Pogona vitticeps",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@lizardschwartz"
    },
    'birds': {
        'animalName': "Birds",
        'scientificName': "Aves",
        'doesItFart': "No",
        'notes': "But they could if they wanted to",
        'research': "http://www.popsci.com/environment/article/2009-05/it-true-birds-cant-fart",
        'fartoligist': "@thelabandfield"
    },
    'black spinytail iguana': {
        'animalName': "Black Spinytail Iguana",
        'scientificName': "Ctenosaura similis",
        'doesItFart': "Yes",
        'notes': "Seems to occur more frequently when less insect/animal protein is consumed and higher quantities of fruit/fiber are eaten",
        'research': "personal observations",
        'fartoligist': "@squamatasci"
    },
    'blue mussels': {
        'animalName': "Blue mussels",
        'scientificName': "Mytilus edulis",
        'doesItFart': "No",
        'notes': "",
        'research': "",
        'fartoligist': "@CarinaDSLR"
    },
    'bobcats': {
        'animalName': "Bobcats",
        'scientificName': "Lynx rufus",
        'doesItFart': "Hell Yes",
        'notes': "Squirrel-based farts are THE WORST.",
        'research': "",
        'fartoligist': "@NatickBobCat, @biologistimo"
    },
    'bristle worms': {
        'animalName': "Bristle worms",
        'scientificName': "Polychaetes",
        'doesItFart': "No",
        'notes': "",
        'research': "",
        'fartoligist': "@_glitterworm"
    },
    'burchells zebra ': {
        'animalName': "Burchell's zebra",
        'scientificName': "Equus quagga burchellii",
        'doesItFart': "Yes",
        'notes': "That's what they do best!",
        'research': "",
        'fartoligist': "@FattebertJ"
    },
    'burmese python': {
        'animalName': "Burmese python",
        'scientificName': "Python molurus",
        'doesItFart': "Yes",
        'notes': "Often silent but deadly. Thick, and...meaty? If it were a color it would be brownish-yellow.",
        'research': "anecdotal & personal observations",
        'fartoligist': "@SssnakeySci"
    },
    'camel': {
        'animalName': "Camel",
        'scientificName': "Camelus",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@cat_murray"
    },
    'cheetah': {
        'animalName': "Cheetah",
        'scientificName': "Acinonyx jubatus",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@hmk_oneill"
    },
    'chimpanzees': {
        'animalName': "Chimpanzees",
        'scientificName': "Pan troglodytes",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@Adriana_lowe"
    },
    'cockroaches': {
        'animalName': "Cockroaches",
        'scientificName': "Periplaneta americana",
        'doesItFart': "Yes",
        'notes': "http://aem.asm.org/content/57/9/2628.short; http://www.pnas.org/content/91/12/5441.full.pdf",
        'research': "",
        'fartoligist': "@HereBeSpiders11"
    },
    'colobine monkeys': {
        'animalName': "Colobine monkeys",
        'scientificName': "Trachypithecus, Colobus etc.",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@pakasuchus"
    },
    'common whelks': {
        'animalName': "Common whelks",
        'scientificName': "Buccinum undatum",
        'doesItFart': "No",
        'notes': "",
        'research': "",
        'fartoligist': "@CarinaDSLR"
    },
    'copperhead': {
        'animalName': "Copperhead",
        'scientificName': "Agkistrodon contortrix",
        'doesItFart': "Yes",
        'notes': "Elicits a small squeak, so small that you think you may be mistaken...until it hits you. Very dry and feral, with a slight hint of stale Copperhead musk.",
        'research': "anecdotal & personal observations",
        'fartoligist': "@SssnakeySci"
    },
    'domestic cat': {
        'animalName': "Domestic cat",
        'scientificName': "Felis catus ",
        'doesItFart': "Yes",
        'notes': "Seems to worsen in vicinity of human face. Silent but deadly",
        'research': "",
        'fartoligist': "@Captain_Herder @Scare"
    },
    'domestic goat': {
        'animalName': "Domestic goat",
        'scientificName': "Capra aegagrus hircus",
        'doesItFart': "Yes",
        'notes': "but burps are worse",
        'research': "",
        'fartoligist': ""
    },
    'domestic hedgehogs': {
        'animalName': "Domestic hedgehogs",
        'scientificName': "Atelerix albiventris",
        'doesItFart': "Yes",
        'notes': "Fish makes it so much worse",
        'research': "",
        'fartoligist': ""
    },
    'domestic pigs': {
        'animalName': "Domestic pigs",
        'scientificName': "Sus scrofa domesticus",
        'doesItFart': "Yes ",
        'notes': "",
        'research': "",
        'fartoligist': ""
    },
    'domestic sheep': {
        'animalName': "Domestic sheep",
        'scientificName': "Ovis aries",
        'doesItFart': "Yes ",
        'notes': "",
        'research': "",
        'fartoligist': ""
    },
    'domesticated dogs': {
        'animalName': "Domesticated Dogs",
        'scientificName': "Canis lupus familiaris",
        'doesItFart': "Yes",
        'notes': "but often takes blame from nearby hominid, Boston Terriers are famous for their farting; known to scare selves with their farts",
        'research': "",
        'fartoligist': "@brianwolven, @CarinaDSLR et al"
    },
    'elephants': {
        'animalName': "Elephants",
        'scientificName': "Loxodonta",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@AdityaGangadh"
    },
    'european oysters': {
        'animalName': "European oysters",
        'scientificName': "Ostrea edulis",
        'doesItFart': "No",
        'notes': "",
        'research': "",
        'fartoligist': "@CarinaDSLR"
    },
    'fancy goldfish': {
        'animalName': "Fancy goldfish",
        'scientificName': "Carassius auratus",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@indik"
    },
    'freshwater mussels': {
        'animalName': "Freshwater mussels",
        'scientificName': "Unionidae",
        'doesItFart': "No",
        'notes': "They do enjoy expelling pseudofeces",
        'research': "",
        'fartoligist': ""
    },
    'frogs': {
        'animalName': "Frogs",
        'scientificName': "Anura",
        'doesItFart': "Yes",
        'notes': "Pyxicephalus adspersus and Ceratophrys sp frogs both can and do fart quite often and rather pungently. (Frogs have weak sphincters, unconfimed if audible)",
        'research': "",
        'fartoligist': "@MarkScherz"
    },
    'crested geckos': {
        'animalName': "Crested Geckos",
        'scientificName': "Corellophus ciliatus",
        'doesItFart': "Yes",
        'notes': "Individual named Tangerine farted before defecting.",
        'research': "",
        'fartoligist': "@MarkScherz"
    },
    'giraffe': {
        'animalName': "Giraffe",
        'scientificName': "Giraffa",
        'doesItFart': "Hell Yes",
        'notes': "At \"face height\" of the average man",
        'research': "",
        'fartoligist': ""
    },
    'gorillas': {
        'animalName': "Gorillas",
        'scientificName': "Gorilla gorilla",
        'doesItFart': "Yes",
        'notes': "See orangutans",
        'research': "",
        'fartoligist': "@mjcreid, @diana_monkey"
    },
    'gray fox': {
        'animalName': "Gray Fox",
        'scientificName': "Urocyon cinereoargenteus",
        'doesItFart': "Yes",
        'notes': "Heard under general anesthesia, assume possible while awake",
        'research': "",
        'fartoligist': "@biologistimo"
    },
    'green iguana': {
        'animalName': "Green Iguana",
        'scientificName': "Iguana iguana",
        'doesItFart': "Yes",
        'notes': "",
        'research': "personal observations of captive Green Iguana",
        'fartoligist': "@squamatasci"
    },
    'grizzly bear': {
        'animalName': "Grizzly bear",
        'scientificName': "Ursus arctos",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': ""
    },
    'guinea pigs': {
        'animalName': "Guinea Pigs",
        'scientificName': "Cavia porcellus",
        'doesItFart': "Yes",
        'notes': "Several examples heard every day, very audible and stinks to high heaven",
        'research': "",
        'fartoligist': ""
    },
    'herring': {
        'animalName': "Herring",
        'scientificName': "Clupea spp.",
        'doesItFart': "Yes",
        'notes': "Entire bays are filled with their farts. Used for communication",
        'research': "http://news.nationalgeographic.com/news/2003/11/1110_031110_herringfarts.html, http://rspb.royalsocietypublishing.org/content/271/Suppl_3/S95",
        'fartoligist': "@CarolineHFox, @gkalinkat"
    },
    'horse': {
        'animalName': "Horse",
        'scientificName': "Equus caballus",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@tecklen"
    },
    'humans': {
        'animalName': "Humans",
        'scientificName': "Homo sapiens",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': ""
    },
    'isopods': {
        'animalName': "Isopods (marine and terrestrial)",
        'scientificName': "Cirolana harfordi,Porcellio scaber and Idotea resecata",
        'doesItFart': "Yes",
        'notes': "Excrete ammonia",
        'research': "Kirby P.K. & Harbaugh R.D. (1974) Diurnal patterns of ammonia release in marine and terrestrial isopods. Comparative Biochemistry and Physiology Part A: Physiology 47, 1313-1322.",
        'fartoligist': "Kim Kennedy, MSc."
    },
    'lagomorphs': {
        'animalName': "Lagomorphs",
        'scientificName': "Lagomorpha spp. ",
        'doesItFart': "Yes",
        'notes': "fav joke here \"what's invisible, floats through the air, and smells like bunnies?\"",
        'research': "",
        'fartoligist': "@thonoir"
    },
    'lemurs': {
        'animalName': "Lemurs",
        'scientificName': "Lemuroidea spp.",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@thonoir"
    },
    'lion': {
        'animalName': "Lion",
        'scientificName': "Panthera leo",
        'doesItFart': "Yes",
        'notes': "At least sedated ones.",
        'research': "",
        'fartoligist': "@FattebertJ"
    },
    'manatees': {
        'animalName': "Manatees",
        'scientificName': "Trichechus",
        'doesItFart': "Yes",
        'notes': "near constantly",
        'research': "",
        'fartoligist': "@indik"
    },
    'mastodon': {
        'animalName': "Mastodon",
        'scientificName': "Mammut",
        'doesItFart': "No",
        'notes': "Not anymore",
        'research': "",
        'fartoligist': "@edorsatum"
    },
    'millipedes': {
        'animalName': "Millipedes",
        'scientificName': "wide variety, see attached paper",
        'doesItFart': "Yes",
        'notes': "Yes, of the silent but deadly variety (methane AND hydrogen sulfide!)",
        'research': "http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0102659",
        'fartoligist': "@HereBeSpiders11"
    },
    'moonsnails': {
        'animalName': "Moonsnails",
        'scientificName': "Naticidae",
        'doesItFart': "No",
        'notes': "",
        'research': "",
        'fartoligist': "@biolumiJEFFence"
    },
    'mustelids': {
        'animalName': "Mustelids",
        'scientificName': "Mustelidae spp.",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@thonoir"
    },
    'orangutan': {
        'animalName': "Orangutan",
        'scientificName': "Pongo",
        'doesItFart': "Yes",
        'notes': "They do it often and have no shame",
        'research': "",
        'fartoligist': "@mjcreid"
    },
    'panther chameleon': {
        'animalName': "Panther Chameleon",
        'scientificName': "Furcifer pardalis",
        'doesItFart': "Yes",
        'notes': "Sometimes while defecating - audible and stinky",
        'research': "",
        'fartoligist': ""
    },
    'parakeets': {
        'animalName': "Parakeets",
        'scientificName': "Melopsittacus undulatus",
        'doesItFart': "Maybe",
        'notes': "My friend's parakeet farted in my face when I was 9 years old. (Note: literature disputes this - see \"Birds\", which are purported not to fart)",
        'research': "",
        'fartoligist': ""
    },
    'parrots': {
        'animalName': "Parrots",
        'scientificName': "Psittaciformes",
        'doesItFart': "No",
        'notes': ":(",
        'research': "",
        'fartoligist': "@alexevans91"
    },
    'pupfish': {
        'animalName': "Pupfish",
        'scientificName': "Cyprinodon spp.",
        'doesItFart': "Yes",
        'notes': "Ingest air with solids during summer months. Associated with behavioral changes until release of gas",
        'research': "http://www.tandfonline.com/doi/abs/10.1577/1548-8659%281967%2996%5B216%3AEAEOIG%5D2.0.CO%3B2?journalCode=utaf20",
        'fartoligist': "@jennygumm"
    },
    'rabbits': {
        'animalName': "Rabbits",
        'scientificName': "Oryctolagus sp",
        'doesItFart': "Yes",
        'notes': "Gas is dangerous in rabbits, however. It can cause intestinal stasis and lead to death within a short period of time.",
        'research': "",
        'fartoligist': ""
    },
    'rats': {
        'animalName': "Rats",
        'scientificName': "Rattus",
        'doesItFart': "Yes",
        'notes': "They smell worse than dog farts",
        'research': "",
        'fartoligist': "@Julie_B92 and @JuliesRats"
    },
    'rhesus macaque': {
        'animalName': "Rhesus macaque",
        'scientificName': "Macaca mulatta",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@laurenmrobin"
    },
    'rhinoceros iguana': {
        'animalName': "Rhinoceros Iguana",
        'scientificName': "Cyclura cornuta",
        'doesItFart': "Yes",
        'notes': "\"Sounds wet\". Increased frequency with higher fruit and/or fiber intake. High parasites loads also lead to an increase in flatulence.",
        'research': "personal observations of captive cyclura",
        'fartoligist': "@squamatasci"
    },
    'rotifers': {
        'animalName': "Rotifers",
        'scientificName': "Rotifera",
        'doesItFart': "Maybe",
        'notes': "Probably not, but if they can they'd be tiny. No one to offend if you're asexual tho",
        'research': "",
        'fartoligist': "@Julie_B92"
    },
    'salamanders': {
        'animalName': "Salamanders",
        'scientificName': "Urodela",
        'doesItFart': "Maybe",
        'notes': "probably not audibly (see frogs), but their poops smell really bad",
        'research': "",
        'fartoligist': "@PlethodoNick"
    },
    'sea anemone': {
        'animalName': "Sea Anemone",
        'scientificName': "Actiniaria",
        'doesItFart': "No",
        'notes': "But awful burps",
        'research': "https://books.google.com/books/about/Invertebrate_Zoology.html?id=RoUZnQEACAAJ",
        'fartoligist': "Barnes, Robert D. (1982). Invertebrate Zoology"
    },
    'seals': {
        'animalName': "Seals",
        'scientificName': "Pinnipedia",
        'doesItFart': "Yes",
        'notes': "Smells like lutefisk",
        'research': "",
        'fartoligist': "@DaniRabaiotti"
    },
    'shore crabs': {
        'animalName': "Shore crabs",
        'scientificName': "Carcinus maenas",
        'doesItFart': "No",
        'notes': "",
        'research': "",
        'fartoligist': "@CarinaDSLR"
    },
    'skunks': {
        'animalName': "Skunks",
        'scientificName': "Mephitidae",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': ""
    },
    'sloths': {
        'animalName': "Sloths",
        'scientificName': "Folivora",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': ""
    },
    'snakes': {
        'animalName': "Snakes",
        'scientificName': "Serpentes",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@AlongsideWild"
    },
    'ball python': {
        'animalName': "Snakes - ball python",
        'scientificName': "Python regius",
        'doesItFart': "No",
        'notes': "We have not heard any audible sounds from the vent in 5+ years of care",
        'research': "",
        'fartoligist': "@mbystoma"
    },
    'corn and rat snakes': {
        'animalName': "Snakes - corn and rat snakes",
        'scientificName': "Pantherophis spp.",
        'doesItFart': "Yes",
        'notes': "Often with defecation",
        'research': "",
        'fartoligist': "@mbystoma"
    },
    'milksnake': {
        'animalName': "Snakes - milksnake",
        'scientificName': "Lampropeltis triangulum",
        'doesItFart': "Yes",
        'notes': "Often with defecation and quite smelly",
        'research': "",
        'fartoligist': "@mbystoma"
    },
    'western hognose': {
        'animalName': "Snakes - western hognose",
        'scientificName': "Heterodon nasicus",
        'doesItFart': "Yes",
        'notes': "Powerful for the size with defecation and extremely foul smelling",
        'research': "",
        'fartoligist': "@mbystoma"
    },
    'snow leopards': {
        'animalName': "Snow leopards",
        'scientificName': "Panthera uncia",
        'doesItFart': "Yes",
        'notes': "Their floofy bottoms help to muffle the sound",
        'research': "",
        'fartoligist': ""
    },
    'soft-shell clam': {
        'animalName': "Soft-shell clam",
        'scientificName': "Mya arenaria",
        'doesItFart': "No",
        'notes': "But they can puke (technically) - see next sheet",
        'research': "",
        'fartoligist': "@SS_Henriques"
    },
    'spiders': {
        'animalName': "Spiders",
        'scientificName': "Araneae",
        'doesItFart': "Maybe",
        'notes': "Broadly assumed as yes, but never really been proven.",
        'research': "",
        'fartoligist': ""
    },
    'spotted hyenas': {
        'animalName': "Spotted hyenas",
        'scientificName': "Crocuta crocuta ",
        'doesItFart': "Yes",
        'notes': "Especially bad after eating camel intestines ",
        'research': "",
        'fartoligist': "@ArjDheer"
    },
    'squid, octopus, cuttlefish': {
        'animalName': "Squid, octopus, cuttlefish",
        'scientificName': "Teuthida, Octopoda, Sepiida",
        'doesItFart': "Yes",
        'notes': "If we count air coming out of the siphon as farting, yes",
        'research': "",
        'fartoligist': "@sarahmackattack"
    },
    'syrian hamster': {
        'animalName': "Syrian hamster",
        'scientificName': "Mesocricetus auratus",
        'doesItFart': "Yes",
        'notes': "probably; see rats, plus anecdata",
        'research': "",
        'fartoligist': "@BeesAndBaking"
    },
    'tapirs': {
        'animalName': "Tapirs",
        'scientificName': "Tapirus spp",
        'doesItFart': "Yes",
        'notes': "In great amplitude",
        'research': "",
        'fartoligist': ""
    },
    'termites': {
        'animalName': "Termites",
        'scientificName': "Reticulitermes, others",
        'doesItFart': "Yes",
        'notes': "A lot--may be a significant contributor to global climate change",
        'research': "http://science.sciencemag.org/content/218/4572/563",
        'fartoligist': "@HereBeSpiders11"
    },
    'tortoise - radiated': {
        'animalName': "Tortoise - radiated",
        'scientificName': "Astrochelys radiata",
        'doesItFart': "Yes",
        'notes': "",
        'research': "",
        'fartoligist': "@mbystoma"
    },
    'unicorns': {
        'animalName': "Unicorns",
        'scientificName': "Equus unicornus",
        'doesItFart': "Yes",
        'notes': "it's glitter and rainbows soft serve",
        'research': "",
        'fartoligist': "@NadWGab"
    },
    'wombat': {
        'animalName': "Wombat",
        'scientificName': "Vombatidae",
        'doesItFart': "Yes",
        'notes': "",
        'research': "https://www.youtube.com/watch?v=VHy2yAuZzds",
        'fartoligist': "@ivandaum"
    },
    'woodlice': {
        'animalName': "Woodlice",
        'scientificName': "Armadillidium vulgare and Ligidium lapetum",
        'doesItFart': "Yes",
        'notes': "Excrete ammonia",
        'research': "Wright J.C. & Peña-Peralta M. (2005) Diel variation in ammonia excretion, glutamine levels, and hydration status in two species of terrestrial isopods. Journal of Comparative Physiology B 175, 67-75",
        'fartoligist': "Kim Kennedy, MSc"
    }
};

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.get("/api/:animal", (request, response) => {
    const animalsName = request.params.animalName.toLowerCase();

    if (farters[animalsName]) {
        response.json(farters[animalsName]);
    } else {
        response.json(farters["unicorns"]);
    }

});

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
