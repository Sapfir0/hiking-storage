import { khibinyTrip } from './khibiny.ts';
import { arhyzTrip } from './arhyz.ts';
import type { TActivityStructure } from '../types.ts';

export const trekkingData: TActivityStructure = {
  'trekking': [
    arhyzTrip,
    khibinyTrip
  ],
  'hiking': [
    {
      'name': 'PR-CV 78 | Circle around Xàtiva',
      'distance': 15.67,
      'country': 'Spain',
      'wikiLoc': 'https://www.wikiloc.com/hiking-trails/pr-cv-78-circle-around-xativa-291886819',
      description: ''
    },
    {
      'name': 'Hallasan mountain - Seongpanak to Gwaneumsa',
      'distance': 19.51,
      'country': 'Spain',
      'wikiLoc': 'https://www.wikiloc.com/hiking-trails/pr-cv-78-circle-around-xativa-291886819',
      description: ''
    }
  ]
};
