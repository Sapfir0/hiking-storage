import { hiking } from './hiking';
import { trails } from './trails';
import { khibinyTrip } from './trekking/khibiny.ts';
import { arhyzTrip } from './trekking/arhyz.ts';
import { westCaucasus } from './trekking/west-caucasus.ts';

import type { TActivityStructure } from '../types.ts';

export const trekkingData: TActivityStructure = {
  trekking: [
    arhyzTrip,
    khibinyTrip,
    westCaucasus
  ],
  trails: trails,
  hiking: hiking
};
