import { AsianCountries, EuropeanCountries, Russia, type TFilter } from '../types.ts';

const EUCountries = Object.values(EuropeanCountries);
const AsiaCountries = Object.values(AsianCountries);

export const REGIONS: TFilter[] = [
  {
    label: 'Europe',
    filter: (hike) => EUCountries.includes(hike.country as EuropeanCountries)
  },
  {
    label: 'Asia',
    filter: (hike) => AsiaCountries.includes(hike.country as AsianCountries)
  }, {
    label: 'Russia',
    filter: (hike) => hike.country === Russia.Russia
  }
];
export const TAGS = ['High_mountains'];
