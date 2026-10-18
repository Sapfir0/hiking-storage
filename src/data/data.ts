import { khibinyTrip } from './khibiny.ts';
import { arhyzTrip } from './arhyz.ts';
import { westCaucasus } from './west-caucasus.ts';

import type { TActivityStructure } from '../types.ts';
import cv78 from './assets/cv78.jpeg';
import hallasan from './assets/hallasan.jpeg';

export const trekkingData: TActivityStructure = {
  'trekking': [
    arhyzTrip,
    khibinyTrip,
    westCaucasus
  ],
  'hiking': [
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
    }
  ]
};
