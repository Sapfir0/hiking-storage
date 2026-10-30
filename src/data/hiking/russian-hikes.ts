import petaarvi from './images/petaarvi.jpg';
import orekhovo from './images/orekhovo.jpg';
import kapeaasalmi from './images/kapeaasalmi.jpg';
import { Country, type THiking } from '../../types.ts';

export const russianHikes: THiking[] = [
  {
    name: 'Кружок через поляну ПКТ',
    distance: 22.82,
    accent: 219,
    country: Country.Russia,
    district: 'Leningrad oblast',
    wikiLoc: 'https://www.wikiloc.com/hiking-trails/orechovo-circle-kruzhok-cherez-polianu-pkt-252718926',
    description: '',
    image: orekhovo
  },
  {
    name: 'Петяярви и озера Берестяное и Дубовое',
    distance: 23.21,
    accent: 219,
    country: Country.Russia,
    district: 'Leningrad oblast',
    wikiLoc: 'https://www.wikiloc.com/hiking-trails/pettarvi-circle-petiaiarvi-i-ozera-berestianoe-i-dubovoe-253927160',
    description: '',
    image: petaarvi,
    withTent: true
  }, {
    name: 'От Капеасалми до Кузнечного по берегу Ладожского озера',
    distance: 25.8,
    accent: 95,
    country: Country.Russia,
    district: 'Leningrad oblast',
    wikiLoc: 'https://www.wikiloc.com/hiking-trails/kapeasalmi-to-kuznechnoe-len-oblast-251923715',
    description: '',
    image: kapeaasalmi,
    withTent: true
  }
];
