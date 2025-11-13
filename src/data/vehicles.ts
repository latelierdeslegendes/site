export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  priceValue: number;
  mileage: string;
  power: string;
  fuel: string;
  transmission: string;
  color: string;
  images: string[];
  description: string;
  features: string[];
  services: string[];
  status?: string;
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Porsche 911 Carrera',
    brand: 'Porsche',
    model: '911 Carrera',
    year: 2021,
    price: '125 000 €',
    priceValue: 125000,
    mileage: '15 000 km',
    power: '385 ch',
    fuel: 'Essence',
    transmission: 'Automatique PDK',
    color: 'Noir métallisé',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczPOOpN5n7N7YHZhdnJDaItly1xUgI7xU-uDhkS6fCZh0Y6xtxPJhSXxRuoGdSaIVNOhxxxjClFN6c3CiV259FNSVhqg_p7jbAi5RjPm4-LbQEyCfzmP8-zLvd2yYqWOo07lWzqTHRM16wuyhqOAEQU=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `Cette magnifique Porsche 911 Carrera de 2021 représente l'excellence de l'ingénierie allemande.
Avec seulement 15 000 km au compteur, ce véhicule a été entretenu avec le plus grand soin et bénéficie
d'un historique d'entretien complet chez Porsche Centre.

La livrée noire métallisée sublime les lignes iconiques de cette légende automobile. L'intérieur en cuir
noir est dans un état impeccable, témoignant d'une utilisation soignée et passionnée.

Cette 911 est équipée du moteur boxer 6 cylindres de 3.0L développant 385 chevaux, couplé à la célèbre
boîte PDK à 8 rapports. Les performances sont exceptionnelles : 0-100 km/h en 4,2 secondes et une vitesse
de pointe de 293 km/h.`,
    features: [
      'Système de navigation Porsche PCM',
      'Sièges sport adaptatifs 18 positions',
      'Système audio Bose Surround',
      'Caméra de recul et capteurs 360°',
      'Régulateur de vitesse adaptatif',
      'Jantes forgées 20 pouces',
      'Échappement sport',
      'Pack Sport Chrono',
      'Éclairage LED Matrix',
      'Clé sans contact',
      'Système Porsche Stability Management',
      'Freins céramique PCCB'
    ],
    services: [
      'Garantie constructeur transférable 12 mois',
      'Historique d\'entretien complet Porsche Centre',
      'Contrôle technique OK',
      'Véhicule non accidenté (expertise certifiée)',
      'Livraison possible partout en France',
      'Reprise de votre véhicule actuel'
    ]
  },
  {
    id: '2',
    name: 'Porsche Cayenne coupé',
    brand: 'Porsche',
    model: 'Cayenne coupé',
    year: 2022,
    price: '145 000 €',
    priceValue: 145000,
    mileage: '8 500 km',
    power: '476 ch',
    fuel: 'Essence',
    transmission: 'Automatique 7G-DCT',
    color: 'Gris selenite',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczMrvxNORX-0OLnSv_tI6kkZW0tWYp0burmqJ9NJDxInSwBRTpx44dn57jR_1C8jYx-RmZF29yJWR7_xFGT6JH_R1IbaqdUzb1uQoywGrYhhhtDwTQKObj3wDzed7fisPW8-akoWGUIW7m653IRDFjY=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `Le Porsche Cayenne coupé 2022 allie la sportivité d'un coupé aux capacités d'un SUV de luxe.
Avec seulement 8 500 km au compteur, ce véhicule d'exception est dans un état impeccable et offre
une expérience de conduite unique.

Son V8 biturbo de 4.0L développe 476 chevaux pour un 0-100 km/h en seulement 3,9 secondes.
La silhouette coupé se distingue par son toit arqué élégant et ses proportions athlétiques qui
redéfinissent le segment des SUV sportifs.

L'intérieur combine le raffinement Porsche avec des technologies de pointe et des matériaux
premium. Chaque détail témoigne de l'excellence allemande.`,
    features: [
      'Pack Sport Design',
      'Porsche Communication Management (PCM)',
      'Sièges sport adaptatifs 18 positions',
      'Échappement sport Porsche',
      'Suspension pneumatique adaptative',
      'Jantes Cayenne Turbo 22 pouces',
      'Système audio Burmester High-End',
      'Pack Sport Chrono',
      'Caméra 360° et aide au stationnement',
      'Pack carbone intérieur',
      'Éclairage ambiant adaptatif',
      'Freins céramique PCCB'
    ],
    services: [
      'Garantie constructeur Porsche 24 mois',
      'Historique d\'entretien complet Porsche Centre',
      'Contrôle technique OK',
      'Véhicule non accidenté certifié',
      'Livraison partout en France',
      'Reprise de votre véhicule actuel'
    ]
  },
  {
    id: '3',
    name: 'BMW X4 M Competition',
    brand: 'BMW',
    model: 'X4 M Competition',
    year: 2022,
    price: '95 000 €',
    priceValue: 95000,
    mileage: '6 000 km',
    power: '510 ch',
    fuel: 'Essence',
    transmission: 'Automatique 8 rapports M Steptronic',
    color: 'Isle of Man Green',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczM1RsbUzrwbkqgLEsxqZuHj1d_doN8rD8IhgCaWeCO4L276bmZRjPk4E4NnB7WUi78Cd7zLNbqAXqOPVh2Goz-cqYXnBLy1iydKr8g6mZo0V2Inw80cib3wpRgk_Qt_i3ta71hOEWqBmSn7a1DnQR0=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `Le BMW X4 M Competition 2022 allie les performances d'une sportive pure et la polyvalence d'un SUV coupé.
Avec seulement 6 000 km au compteur, ce X4 M Competition est dans un état impeccable et bénéficie
de toutes les dernières innovations BMW M.

Son moteur 6 cylindres en ligne biturbo de 3.0L développe 510 chevaux pour un 0-100 km/h en 4,1 secondes.
La transmission intégrale M xDrive offre une motricité exceptionnelle et un comportement routier
stupéfiant pour un SUV de ce gabarit.

Ce X4 M Competition combine design coupé sportif, habitabilité premium et performances de haut niveau.
L'intérieur arbore des sièges M sport, des finitions carbone et tout le savoir-faire BMW M.`,
    features: [
      'Transmission intégrale M xDrive',
      'Sièges M sport en cuir Merino',
      'Pack M Carbon intérieur et extérieur',
      'Échappement M Sport avec valves',
      'Suspension adaptative M',
      'Jantes M forgées 21 pouces',
      'BMW Live Cockpit Professional',
      'Head-Up Display M',
      'Système audio Harman Kardon',
      'Toit panoramique',
      'M Drive Professional',
      'Freins M Compound'
    ],
    services: [
      'Garantie BMW M 24 mois',
      'Historique BMW M complet',
      'Contrôle technique OK',
      'Certification BMW M Approved',
      'Livraison en France et Europe',
      'Reprise de votre véhicule actuel'
    ]
  },
  {
    id: '4',
    name: 'Mercedes GLE',
    brand: 'Mercedes',
    model: 'GLE',
    year: 2021,
    price: '235 000 €',
    priceValue: 235000,
    mileage: '12 000 km',
    power: '640 ch',
    fuel: 'Essence',
    transmission: 'Automatique 7 rapports',
    color: 'Verde Mantis',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczO3iY5NGtabXdhftbxweLzRpNCpALNrPMJqU_kK8g9jStCkogtS1zkoSa69hpAL44aGAQT3Hk61YY9habDR18NQRWyyqZ5lV0xb9BqzdYJCU5ooI03e0yR_QTJu3CosL5YpOJBbUAUTyxlyasnp0cw=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `Le Mercedes GLE 2021 incarne le luxe et la polyvalence d'un SUV premium allemand.
Ce véhicule d'exception affiche seulement 12 000 km et a été entretenu avec le plus grand soin
en concession officielle Mercedes-Benz.

Son moteur offre des performances remarquables tout en conservant le confort et le raffinement
attendus d'un SUV de luxe Mercedes. Le GLE se distingue par son design élégant, son habitacle
spacieux et ses technologies de pointe.

L'intérieur premium propose des matériaux nobles, un système d'infotainment dernier cri et
un confort de voyage exceptionnel pour tous les passagers.`,
    features: [
      'Transmission intégrale 4MATIC',
      'Suspension pneumatique AIRMATIC',
      'Pack AMG Line extérieur',
      'Sièges en cuir Nappa',
      'Toit panoramique ouvrant',
      'Jantes AMG 21 pouces',
      'Système d\'échappement sport',
      'Système MBUX avec écran 12,3 pouces',
      'Apple CarPlay et Android Auto',
      'Caméra 360° et aide au stationnement',
      'Système audio Burmester',
      'Éclairage LED High Performance',
      'Pack Keyless-Go'
    ],
    services: [
      'Garantie Mercedes-Benz 12 mois',
      'Historique officiel Mercedes-Benz',
      'Contrôle technique valide',
      'Véhicule certifié non accidenté',
      'Livraison possible en France et Europe',
      'Reprise de votre véhicule actuel'
    ]
  },
  {
    id: '5',
    name: 'Mercedes CLA',
    brand: 'Mercedes',
    model: 'CLA',
    year: 2020,
    price: '165 000 €',
    priceValue: 165000,
    mileage: '18 000 km',
    power: '510 ch',
    fuel: 'Essence',
    transmission: 'Automatique 8 rapports',
    color: 'Magnetic Silver',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczM9_U6XY-667Ysj7eiBQLc9BpdlwIH2HhhDWyevmYMjPpcXBweHxBR1gR5qrIycn3MbQ5YAI6RTxXchEPRLpe8-12HmzYlwrz_BQqd-U9DaEq02peY2keIc7tdsth-CUnb7153RnNi4g9TaF0KIlRs=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `La Mercedes CLA 2020 incarne l'élégance sportive et le design avant-gardiste de Mercedes-Benz.
Ce coupé quatre portes affiche 18 000 km et a été méticuleusement entretenu en concession
officielle Mercedes-Benz.

Avec son design dynamique et ses lignes coupé, la CLA se distingue par son style unique qui
allie sportivité et élégance. Les performances sont au rendez-vous avec un comportement routier
précis et agréable.

L'intérieur moderne propose des matériaux de qualité, un système MBUX intuitif et un confort
optimal pour tous les passagers. La CLA offre le parfait équilibre entre style et praticité.`,
    features: [
      'Sièges sport en cuir et Alcantara',
      'Système MBUX avec écran 10,25 pouces',
      'Navigation intégrée Mercedes-Benz',
      'Apple CarPlay et Android Auto',
      'Caméra de recul',
      'Jantes AMG 18 pouces',
      'Pack AMG Line',
      'Éclairage LED High Performance',
      'Volant sport multifonction',
      'Sièges chauffants',
      'Climatisation automatique bi-zone',
      'Pack Keyless-Go'
    ],
    services: [
      'Garantie Mercedes-Benz 12 mois',
      'Historique d\'entretien Mercedes complet',
      'Contrôle technique OK',
      'Certification Mercedes-Benz Occasion',
      'Livraison en France et Europe',
      'Reprise de votre véhicule actuel'
    ]
  },
  {
    id: '6',
    name: 'BMW M2 Compétition',
    brand: 'BMW',
    model: 'M2 Compétition',
    year: 2020,
    price: '285 000 €',
    priceValue: 285000,
    mileage: '5 200 km',
    power: '720 ch',
    fuel: 'Essence',
    transmission: 'Automatique 7 rapports F1',
    color: 'Rosso Corsa',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczOlGr-8B2_4lhb3bkp7v9oPWdz34RRjbq3Dl-1Y7qrsbxGSPsYv8i9wT0ZInYlOnOnSAQ5zRA9qnZ87z5tifgsRDOXklvmCkubCghVyadyNv0SNVptHhlLi6-VNconrA23DLPFnx3GJkQw54iDuv8A=w2770-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `La BMW M2 Compétition 2020 représente l'essence même de la sportivité compacte selon BMW M.
Avec seulement 5 200 km au compteur, ce coupé sport est dans un état exceptionnel.

Son moteur 6 cylindres en ligne biturbo de 3.0L développe 410 chevaux pour un 0-100 km/h en 4,2 secondes.
La M2 Compétition offre un équilibre parfait entre performance pure et plaisir de conduite au quotidien,
avec une agilité remarquable et un comportement routier précis.

L'intérieur sport arbore des sièges M baquets, un volant M spécifique et des finitions carbone.
Cette M2 a été méticuleusement entretenue en concession BMW avec un historique complet.`,
    features: [
      'Pack M Performance',
      'Sièges M baquets',
      'Volant M en cuir et Alcantara',
      'Différentiel M autobloquant',
      'Caméra de recul',
      'Jantes M forgées 19 pouces',
      'Étriers de frein M orange',
      'Échappement M Sport',
      'Système audio Harman Kardon',
      'BMW Live Cockpit',
      'Apple CarPlay et Android Auto',
      'M Drive Professional'
    ],
    services: [
      'Garantie BMW 12 mois',
      'Historique BMW complet',
      'Contrôle technique OK',
      'Certification BMW Occasion',
      'Extension de garantie possible',
      'Livraison en France et Europe'
    ]
  },
  {
    id: '7',
    name: 'Audi R8 V10',
    brand: 'Audi',
    model: 'R8 V10',
    year: 2021,
    price: '185 000 €',
    priceValue: 185000,
    mileage: '8 500 km',
    power: '570 ch',
    fuel: 'Essence',
    transmission: 'Automatique 7 rapports S tronic',
    color: 'Noir Mythos',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczP9Y-x-Ba40YzakTnmxyE41aGzAVyKRUHW8H0z3PtRxuzEOU2AdM7sufsXzmKw_LDuiPGbmM6jtxBwAtuDuxghl1sQuIBViGir8pgg1LqG_TXSZ8GuzkrnDgh2qEQ44b4-0gYlWkEw18wSDaOkwDOs=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `L'Audi R8 V10 2021 est une supercar iconique qui incarne la philosophie "Vorsprung durch Technik" d'Audi.
Avec seulement 8 500 km au compteur, cette R8 est dans un état impeccable et offre des performances
exceptionnelles dignes d'une voiture de course.

Son moteur V10 atmosphérique de 5.2L développe 570 chevaux et produit une sonorité enivrante.
Le 0-100 km/h est atteint en 3,4 secondes grâce à la transmission intégrale quattro et à la boîte
S tronic à double embrayage. Le châssis en aluminium Audi Space Frame garantit légèreté et rigidité.

Cette R8 en Noir Mythos allie élégance et agressivité. L'habitacle mêle carbone, cuir et Alcantara
pour créer un environnement sportif et raffiné où chaque détail reflète l'excellence Audi Sport.`,
    features: [
      'Transmission intégrale quattro',
      'Sièges baquets sport Audi',
      'Pack carbone intérieur et extérieur',
      'Échappement sport avec valves',
      'Suspension magnétique adaptative',
      'Jantes forgées 19/20 pouces',
      'Audi Virtual Cockpit Plus 12,3 pouces',
      'Système audio Bang & Olufsen',
      'Caméra de recul',
      'Pack LED et feux laser',
      'Volant sport multifonction cuir',
      'Modes de conduite Dynamic'
    ],
    services: [
      'Garantie Audi Sport 12 mois',
      'Historique Audi complet',
      'Contrôle technique valide',
      'Certification Audi Approved',
      'Livraison en France et Europe',
      'Reprise de votre véhicule actuel'
    ]
  }
];

export const soldVehicles: Vehicle[] = [
  {
    id: 'sold-1',
    name: 'Porsche 718 Cayman GT4',
    brand: 'Porsche',
    model: '718 Cayman GT4',
    year: 2020,
    price: 'VENDU',
    priceValue: 115000,
    mileage: '9 500 km',
    power: '420 ch',
    fuel: 'Essence',
    transmission: 'Manuelle 6 rapports',
    color: 'Racing Yellow',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczPOOpN5n7N7YHZhdnJDaItly1xUgI7xU-uDhkS6fCZh0Y6xtxPJhSXxRuoGdSaIVNOhxxxjClFN6c3CiV259FNSVhqg_p7jbAi5RjPm4-LbQEyCfzmP8-zLvd2yYqWOo07lWzqTHRM16wuyhqOAEQU=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `La Porsche 718 Cayman GT4 2020 représente l'essence de la sportivité pure selon Porsche.
Ce coupé sport a été vendu à un passionné qui recherchait une voiture de track-day utilisable au quotidien.

Son moteur boxer 6 cylindres atmosphérique de 4.0L développe 420 chevaux, offrant des sensations
uniques et une sonorité incomparable. La boîte manuelle 6 rapports et le châssis GT radicalisé
garantissent un plaisir de conduite maximal.`,
    features: [
      'Pack Sport Chrono',
      'Sièges baquets sport Porsche',
      'Suspension PASM Sport',
      'Différentiel autobloquant mécanique',
      'Échappement sport Porsche',
      'Aileron arrière fixe GT',
      'Jantes forgées 20 pouces',
      'Pack carbone intérieur',
      'Système PCM avec navigation',
      'Caméra de recul',
      'Volant sport GT',
      'Freins Porsche Ceramic Composite Brake'
    ],
    services: [
      'Garantie Porsche transférable',
      'Historique Porsche Centre complet',
      'Contrôle technique OK',
      'Véhicule non accidenté certifié',
      'Livraison effectuée',
      'Client satisfait'
    ]
  },
  {
    id: 'sold-2',
    name: 'BMW M4 Competition',
    brand: 'BMW',
    model: 'M4 Competition',
    year: 2021,
    price: 'VENDU',
    priceValue: 89000,
    mileage: '14 000 km',
    power: '510 ch',
    fuel: 'Essence',
    transmission: 'Automatique 8 rapports M Steptronic',
    color: 'Sao Paulo Yellow',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczM1RsbUzrwbkqgLEsxqZuHj1d_doN8rD8IhgCaWeCO4L276bmZRjPk4E4NnB7WUi78Cd7zLNbqAXqOPVh2Goz-cqYXnBLy1iydKr8g6mZo0V2Inw80cib3wpRgk_Qt_i3ta71hOEWqBmSn7a1DnQR0=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `La BMW M4 Competition 2021 incarne la performance et le style selon BMW M.
Ce coupé sport a conquis son nouveau propriétaire par son design agressif et ses performances exceptionnelles.

Le moteur 6 cylindres en ligne biturbo de 3.0L développe 510 chevaux pour un 0-100 km/h en 3,9 secondes.
La transmission M xDrive garantit une motricité optimale et un comportement routier sportif.`,
    features: [
      'Transmission intégrale M xDrive',
      'Pack M Carbon',
      'Sièges M sport en cuir Merino',
      'Échappement M Sport avec valves',
      'Suspension adaptative M',
      'Jantes M forgées 19/20 pouces',
      'BMW Live Cockpit Professional',
      'Head-Up Display M',
      'Système audio Harman Kardon',
      'Toit carbone M',
      'M Drive Professional',
      'Freins M Compound'
    ],
    services: [
      'Garantie BMW M transférée',
      'Historique BMW M complet',
      'Contrôle technique valide',
      'Certification BMW M Approved',
      'Livraison effectuée',
      'Client satisfait'
    ]
  },
  {
    id: 'sold-3',
    name: 'Mercedes-AMG GT 63 S',
    brand: 'Mercedes-AMG',
    model: 'GT 63 S',
    year: 2022,
    price: 'VENDU',
    priceValue: 168000,
    mileage: '7 200 km',
    power: '639 ch',
    fuel: 'Essence',
    transmission: 'Automatique 9 rapports AMG Speedshift',
    color: 'Designo Selenite Grey',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczMrvxNORX-0OLnSv_tI6kkZW0tWYp0burmqJ9NJDxInSwBRTpx44dn57jR_1C8jYx-RmZF29yJWR7_xFGT6JH_R1IbaqdUzb1uQoywGrYhhhtDwTQKObj3wDzed7fisPW8-akoWGUIW7m653IRDFjY=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `La Mercedes-AMG GT 63 S 2022 combine luxe, performance et praticité dans un package unique.
Cette berline 4 portes sportive a séduit son acquéreur par son élégance et ses capacités exceptionnelles.

Le V8 biturbo de 4.0L développe 639 chevaux pour un 0-100 km/h en 3,2 secondes. La transmission
intégrale 4MATIC+ et la boîte AMG Speedshift garantissent performances et efficacité en toutes circonstances.`,
    features: [
      'Transmission intégrale AMG Performance 4MATIC+',
      'Pack AMG Carbon Fiber',
      'Sièges AMG Performance en Nappa',
      'Suspension pneumatique AMG Ride Control+',
      'Échappement AMG Performance',
      'Jantes AMG forgées 21 pouces',
      'MBUX avec écran 12,3 pouces',
      'Head-Up Display AMG',
      'Système audio Burmester High-End 3D',
      'Pack AMG Night',
      'AMG Track Pace',
      'Freins céramique AMG'
    ],
    services: [
      'Garantie Mercedes-AMG transférée',
      'Historique Mercedes-AMG complet',
      'Contrôle technique valide',
      'Certification AMG Performance Center',
      'Livraison effectuée',
      'Client satisfait'
    ]
  },
  {
    id: 'sold-4',
    name: 'Ferrari 488 GTB',
    brand: 'Ferrari',
    model: '488 GTB',
    year: 2019,
    price: 'VENDU',
    priceValue: 245000,
    mileage: '11 500 km',
    power: '670 ch',
    fuel: 'Essence',
    transmission: 'Automatique 7 rapports F1',
    color: 'Rosso Corsa',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczOlGr-8B2_4lhb3bkp7v9oPWdz34RRjbq3Dl-1Y7qrsbxGSPsYv8i9wT0ZInYlOnOnSAQ5zRA9qnZ87z5tifgsRDOXklvmCkubCghVyadyNv0SNVptHhlLi6-VNconrA23DLPFnx3GJkQw54iDuv8A=w2770-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `La Ferrari 488 GTB 2019 incarne l'excellence italienne en matière de supercars.
Ce coupé exceptionnel a trouvé son nouveau propriétaire passionné par la légende Ferrari.

Le V8 biturbo de 3.9L développe 670 chevaux pour un 0-100 km/h en 3,0 secondes et une vitesse
de pointe de 330 km/h. Les performances sont époustouflantes et la sonorité légendaire.`,
    features: [
      'Sièges baquets Racing',
      'Pack carbone intérieur et extérieur',
      'Suspension magnétique SCM-E',
      'Système Side Slip Control 2.0',
      'Jantes forgées 20 pouces',
      'Étriers de frein rouge Ferrari',
      'Pack Scuderia Ferrari',
      'Système audio JBL Premium',
      'Caméra de recul et capteurs',
      'Apple CarPlay',
      'Manettino sport',
      'Volant F1 multifonction'
    ],
    services: [
      'Garantie Ferrari Power transférée',
      'Historique Ferrari complet',
      'Carnet d\'entretien à jour',
      'Certification Ferrari Approved',
      'Livraison effectuée',
      'Client satisfait'
    ]
  },
  {
    id: 'sold-5',
    name: 'Lamborghini Huracán EVO',
    brand: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2021,
    price: 'VENDU',
    priceValue: 268000,
    mileage: '5 800 km',
    power: '640 ch',
    fuel: 'Essence',
    transmission: 'Automatique 7 rapports LDF',
    color: 'Verde Mantis',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczO3iY5NGtabXdhftbxweLzRpNCpALNrPMJqU_kK8g9jStCkogtS1zkoSa69hpAL44aGAQT3Hk61YY9habDR18NQRWyyqZ5lV0xb9BqzdYJCU5ooI03e0yR_QTJu3CosL5YpOJBbUAUTyxlyasnp0cw=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `La Lamborghini Huracán EVO 2021 représente la quintessence du design et de la performance italienne.
Cette supercar emblématique a conquis son nouveau propriétaire par son design radical et ses capacités extraordinaires.

Le V10 atmosphérique de 5.2L développe 640 chevaux pour un 0-100 km/h en 2,9 secondes.
La transmission intégrale et le système LDVI (Lamborghini Dinamica Veicolo Integrata) offrent un pilotage d'exception.`,
    features: [
      'Transmission intégrale AWD',
      'Système LDVI avec intelligence prédictive',
      'Sièges sport en cuir et Alcantara',
      'Pack carbone Y-design',
      'Suspension magnétique active',
      'Jantes Giano 20 pouces',
      'Échappement sport titane Akrapovic',
      'Caméra de recul et capteurs parking',
      'Système multimédia avec Apple CarPlay',
      'Éclairage LED Matrix',
      'Mode de conduite ANIMA',
      'Freins carbone-céramique'
    ],
    services: [
      'Garantie Lamborghini transférée',
      'Historique Lamborghini officiel',
      'Carnet d\'entretien complet',
      'Certification Lamborghini Approved',
      'Livraison effectuée',
      'Client satisfait'
    ]
  },
  {
    id: 'sold-6',
    name: 'McLaren 720S',
    brand: 'McLaren',
    model: '720S',
    year: 2020,
    price: 'VENDU',
    priceValue: 235000,
    mileage: '8 200 km',
    power: '720 ch',
    fuel: 'Essence',
    transmission: 'Automatique 7 rapports SSG',
    color: 'Volcano Orange',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczM9_U6XY-667Ysj7eiBQLc9BpdlwIH2HhhDWyevmYMjPpcXBweHxBR1gR5qrIycn3MbQ5YAI6RTxXchEPRLpe8-12HmzYlwrz_BQqd-U9DaEq02peY2keIc7tdsth-CUnb7153RnNi4g9TaF0KIlRs=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `La McLaren 720S 2020 incarne la philosophie de performance extrême de McLaren Automotive.
Cette supercar britannique a séduit son acquéreur par ses technologies de pointe et son design futuriste.

Le V8 biturbo de 4.0L développe 720 chevaux pour un 0-100 km/h en 2,8 secondes et un 0-200 km/h
en 7,8 secondes. Le châssis monocoque en fibre de carbone garantit légèreté et rigidité exceptionnelles.`,
    features: [
      'Châssis monocoque carbone MonoCage II',
      'Sièges baquets McLaren P1',
      'Pack MSO Defined',
      'Suspension Proactive Chassis Control II',
      'Échappement sport avec valves',
      'Jantes forgées ultra-légères 19/20 pouces',
      'Système IRIS avec écran central',
      'Caméra 360° et capteurs parking',
      'Portes papillon électriques',
      'Système audio Bowers & Wilkins',
      'Pack carbone extérieur',
      'Freins carbone-céramique'
    ],
    services: [
      'Garantie McLaren transférée',
      'Historique McLaren Qualified',
      'Programme d\'entretien McLaren à jour',
      'Certification McLaren Qualified',
      'Livraison effectuée',
      'Client satisfait'
    ]
  },
  {
    id: 'sold-7',
    name: 'Aston Martin Vantage',
    brand: 'Aston Martin',
    model: 'Vantage',
    year: 2021,
    price: 'VENDU',
    priceValue: 158000,
    mileage: '9 800 km',
    power: '510 ch',
    fuel: 'Essence',
    transmission: 'Automatique 8 rapports ZF',
    color: 'Racing Green',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczP9Y-x-Ba40YzakTnmxyE41aGzAVyKRUHW8H0z3PtRxuzEOU2AdM7sufsXzmKw_LDuiPGbmM6jtxBwAtuDuxghl1sQuIBViGir8pgg1LqG_TXSZ8GuzkrnDgh2qEQ44b4-0gYlWkEw18wSDaOkwDOs=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `L'Aston Martin Vantage 2021 symbolise l'élégance britannique et la performance sportive.
Ce grand tourisme sportif a trouvé preneur auprès d'un amateur de raffinement et de sportivité.

Le V8 AMG biturbo de 4.0L développe 510 chevaux pour un 0-100 km/h en 3,6 secondes.
Le design intemporel d'Aston Martin rencontre ici les technologies modernes pour créer une GT parfaite.`,
    features: [
      'Sièges sport en cuir semi-aniline',
      'Pack Sport Plus',
      'Suspension adaptative',
      'Différentiel électronique E-Diff',
      'Échappement sport avec valves',
      'Jantes forgées 20 pouces',
      'Système multimédia AMi III',
      'Caméra de recul et capteurs',
      'Apple CarPlay et Android Auto',
      'Pack carbone intérieur',
      'Éclairage LED Matrix',
      'Volant sport Alcantara'
    ],
    services: [
      'Garantie Aston Martin transférée',
      'Historique Aston Martin officiel',
      'Carnet d\'entretien complet',
      'Certification Aston Martin Approved',
      'Livraison effectuée',
      'Client satisfait'
    ]
  },
  {
    id: 'sold-8',
    name: 'Porsche Panamera Turbo S',
    brand: 'Porsche',
    model: 'Panamera Turbo S',
    year: 2021,
    price: 'VENDU',
    priceValue: 189000,
    mileage: '13 500 km',
    power: '630 ch',
    fuel: 'Essence',
    transmission: 'Automatique 8 rapports PDK',
    color: 'Carrara White Metallic',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczPOOpN5n7N7YHZhdnJDaItly1xUgI7xU-uDhkS6fCZh0Y6xtxPJhSXxRuoGdSaIVNOhxxxjClFN6c3CiV259FNSVhqg_p7jbAi5RjPm4-LbQEyCfzmP8-zLvd2yYqWOo07lWzqTHRM16wuyhqOAEQU=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `La Porsche Panamera Turbo S 2021 combine luxe, espace et performances de supercar.
Cette berline sportive 4 portes a séduit son nouveau propriétaire par sa polyvalence exceptionnelle.

Le V8 biturbo de 4.0L développe 630 chevaux pour un 0-100 km/h en 3,1 secondes.
La Panamera Turbo S offre le confort d'une limousine avec les performances d'une 911 Turbo.`,
    features: [
      'Transmission intégrale Porsche Traction Management',
      'Sièges sport adaptatifs 18 positions',
      'Pack Sport Design',
      'Suspension pneumatique adaptative',
      'Échappement sport Porsche',
      'Jantes Panamera Turbo Design 21 pouces',
      'Porsche Communication Management PCM',
      'Système audio Burmester High-End 3D',
      'Head-Up Display',
      'Pack Sport Chrono',
      'Toit panoramique',
      'Freins céramique PCCB'
    ],
    services: [
      'Garantie Porsche transférée',
      'Historique Porsche Centre complet',
      'Carnet d\'entretien à jour',
      'Certification Porsche Approved',
      'Livraison effectuée',
      'Client satisfait'
    ]
  },
  {
    id: 'sold-9',
    name: 'Bentley Continental GT',
    brand: 'Bentley',
    model: 'Continental GT',
    year: 2020,
    price: 'VENDU',
    priceValue: 215000,
    mileage: '10 200 km',
    power: '635 ch',
    fuel: 'Essence',
    transmission: 'Automatique 8 rapports',
    color: 'Magnetic Silver',
    images: [
      'https://lh3.googleusercontent.com/pw/AP1GczM9_U6XY-667Ysj7eiBQLc9BpdlwIH2HhhDWyevmYMjPpcXBweHxBR1gR5qrIycn3MbQ5YAI6RTxXchEPRLpe8-12HmzYlwrz_BQqd-U9DaEq02peY2keIc7tdsth-CUnb7153RnNi4g9TaF0KIlRs=w2136-h1602-s-no-gm?authuser=0',
      'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    description: `La Bentley Continental GT 2020 représente le summum du grand tourisme de luxe britannique.
Ce coupé d'exception a trouvé son nouveau propriétaire amateur d'artisanat d'exception et de performances.

Le W12 biturbo de 6.0L développe 635 chevaux pour un 0-100 km/h en 3,7 secondes.
L'habitacle est un chef-d'œuvre d'artisanat avec des finitions en cuir et bois précieux.`,
    features: [
      'Transmission intégrale permanente',
      'Sièges en cuir diamanté mulliner',
      'Pack Mulliner Driving Specification',
      'Suspension pneumatique à trois chambres',
      'Échappement sport avec son signature',
      'Jantes forgées 22 pouces',
      'Système Bentley Rotating Display',
      'Système audio Naim for Bentley',
      'Toit panoramique',
      'Pack City & Touring',
      'Éclairage LED Matrix avec signature',
      'Freins carbone-céramique'
    ],
    services: [
      'Garantie Bentley transférée',
      'Historique Bentley officiel complet',
      'Carnet d\'entretien à jour',
      'Certification Bentley Approved',
      'Livraison effectuée',
      'Client satisfait'
    ]
  }
];

export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};
