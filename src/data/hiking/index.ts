import cv78 from './images/cv78.jpeg';
import hallasan from './images/hallasan.jpeg';
import kapeaasalmi from './images/kapeaasalmi.jpg';
import laos from './images/laos.jpeg';
import petaarvi from './images/petaarvi.jpg';
import orekhovo from './images/orekhovo.jpg';

export const russianHikes = [
  {
    'name': 'Кружок через поляну ПКТ',
    'distance': 22.82,
    accent: 219,
    'country': 'Russia',
    'wikiLoc': 'https://www.wikiloc.com/hiking-trails/orechovo-circle-kruzhok-cherez-polianu-pkt-252718926',
    description: '',
    image: orekhovo
  },
  {
    'name': 'Петяярви и озера Берестяное и Дубовое',
    'distance': 23.21,
    accent: 219,
    'country': 'Russia',
    'wikiLoc': 'https://www.wikiloc.com/hiking-trails/pettarvi-circle-petiaiarvi-i-ozera-berestianoe-i-dubovoe-253927160',
    description: '',
    image: petaarvi
  }, {
    'name': 'От Капеасалми до Кузнечного по берегу Ладожского озера',
    'distance': 25.8,
    accent: 95,
    'country': 'Russia',
    'wikiLoc': 'https://www.wikiloc.com/hiking-trails/kapeasalmi-to-kuznechnoe-len-oblast-251923715',
    description: '',
    image: kapeaasalmi
  }
];

export const hiking = [
  ...russianHikes,
  {
    'name': 'PR-CV 78 | Circle around Xàtiva',
    'distance': 15.67,
    accent: 361,
    mountainSystem: 'Valencia',
    'country': 'Spain',
    'wikiLoc': 'https://www.wikiloc.com/hiking-trails/pr-cv-78-circle-around-xativa-291886819',
    description: '',
    image: cv78
  },
  {
    'name': 'Hallasan mountain - Seongpanak to Gwaneumsa',
    'distance': 19.51,
    accent: 1263,
    'country': 'Korea',
    mountainSystem: 'Jeju',
    'wikiLoc': 'https://es.wikiloc.com/rutas-carrera-por-montana/run-inwangsan-and-bugaksan-mountains-263841529',
    description: '',
    image: hallasan
  },

  {
    'name': 'Two viewpoints in Vang Vieng | Silver Cliff, Pha Nguen',
    'distance': 13.62,
    accent: 536,
    'country': 'Laos',
    'wikiLoc': 'https://www.wikiloc.com/hiking-trails/two-viewpoints-in-vang-vieng-251679232',
    description: '',
    image: laos
  }
];
