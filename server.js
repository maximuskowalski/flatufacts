const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const farters = {
    'african wild dogs': {
        'animalName': 'African wild dogs',
        'scientificName': 'Lycaon pictus',
        'isFarter': 'Yes!',
        'notes': 'Any self respecting canine does',
        'research': '',
        'image': ''
    },
    'american badger': {
        'animalName': 'American Badger',
        'scientificName': 'Taxidea taxus',
        'isFarter': 'Maybe',
        'notes': 'Elbroch (2003) describes badger scat as rancorous (can confirm); assume fart',
        'research': '',
        'image': ''
    },
    'ammonite': {
        'animalName': 'Ammonite',
        'scientificName': 'Ammonoidea',
        'isFarter': 'No',
        'notes': 'molluscs do not fart - would like to question inking as farting in extant cephs ',
        'research': '',
        'image': ''
    },
    'arachnids': {
        'animalName': 'Arachnids',
        'scientificName': 'Arachnida',
        'isFarter': 'Maybe',
        'notes': 'Assumed as yes, but never really been proven',
        'research': '',
        'image': ''
    },
    'Baboons': {
        'animalName': 'Baboons',
        'scientificName': 'Papio',
        'isFarter': 'Yes',
        'notes': '',
        'research': '',
        'image': ''
    },
    'bats': {
        'animalName': 'Bats',
        'scientificName': 'Chiroptera',
        'isFarter': 'Yes',
        'notes': '',
        'research': '',
        'image': ''
    },
    'Bearded Dragon': {
        'animalName': 'Bearded Dragon',
        'scientificName': 'Pogona vitticeps',
        'isFarter': 'Yes',
        'notes': '',
        'research': ''
    },
    'Birds': {
        'animalName': 'Birds',
        'scientificName': 'Aves',
        'isFarter': 'No',
        'notes': 'But they could if they wanted to',
        'research': 'http://www.popsci.com/environment/article/2009-05/it-true-birds-cant-fart',
        'image': ''
    },
    'Black Spinytail Iguana': {
        'animalName': 'Black Spinytail Iguana',
        'scientificName': 'Ctenosaura similis',
        'isFarter': 'Yes',
        'notes': 'Seems to occur more frequently when less insect/animal protein is consumed and higher quantities of fruit/fiber are eaten',
        'research': 'personal observations',
        'image': ''
    },
    'Blue mussels': {
        'animalName': 'Blue mussels',
        'scientificName': 'Mytilus edulis',
        'isFarter': 'No',
        'notes': '',
        'research': '',
        'image': ''
    },
    'Bobcats': {
        'animalName': 'Bobcats',
        'scientificName': 'Lynx rufus',
        'isFarter': 'Hell Yes',
        'notes': 'Squirrel-based farts are THE WORST.',
        'research': '',
        'image': ''
    },
    'Bristle worms': {
        'animalName': 'name',
        'scientificName': 'Polychaetes',
        'isFarter': 'No',
        'notes': '',
        'research': '',
        'image': ''
    },
    'Burchels zebra ': {
        'animalName': 'Burchells zebra ',
        'scientificName': 'Equus quagga burchellii',
        'isFarter': 'Yes',
        'notes': 'Thats what they do best!',
        'research': '',
        'image': ''
    },
    'Burmese python': {
        'animalName': 'Burmese python',
        'scientificName': 'Python molurus',
        'isFarter': 'Yes',
        'notes': 'Often silent but deadly. Thick, and...meaty? If it were a color it would be brownish-yellow.',
        'research': 'anecdotal & personal observations',
        'image': ''
    },
    'Camel': {
        'animalName': 'Camel',
        'scientificName': 'Camelus',
        'isFarter': 'Yes',
        'notes': '',
        'research': '',
        'image': ''
    },
    'Cheetah': {
        'animalName': 'Cheetah',
        'scientificName': 'Acinonyx jubatus',
        'isFarter': 'Yes',
        'notes': '',
        'research': '',
        'image': ''
    },
    'Chimpanzees': {
        'animalName': 'Chimpanzees',
        'scientificName': 'Pan troglodytes',
        'isFarter': 'Yes',
        'notes': '',
        'research': '',
        'image': ''
    },
    'Cockroaches': {
        'animalName': 'Cockroaches',
        'scientificName': 'Periplaneta americana',
        'isFarter': 'Yes',
        'notes': 'http://aem.asm.org/content/57/9/2628.short; http://www.pnas.org/content/91/12/5441.full.pdf',
        'research': '',
        'image': ''
    },
    'Colobine monkeys': {
        'animalName': 'Colobine monkeys',
        'scientificName': 'Trachypithecus, Colobus etc.',
        'isFarter': 'Yes',
        'notes': '',
        'research': '',
        'image': ''
    },
    'Common whelks': {
        'animalName': 'Common whelks',
        'scientificName': 'Buccinum undatum',
        'isFarter': 'No',
        'notes': '',
        'research': '',
        'image': ''
    },
    'Copperhead': {
        'animalName': 'Copperhead',
        'scientificName': 'Agkistrodon contortrix',
        'isFarter': 'Yes',
        'notes': 'Elicits a small squeak, so small that you think you may be mistaken...until it hits you. Very dry and feral, with a slight hint of stale Copperhead musk.',
        'research': 'anecdotal & personal observations',
        'image': ''
    }

};

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.get("/api/:animal", (request, response) => {
    const animalsName = request.params.animalName.toLocaleLowerCase();

    if (farters[animalsName]) {
        response.json(farters[animalsName]);
    } else {
        response.json(farters["random"]);
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
