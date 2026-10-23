import { EuropeanCountries, type TActivityStructure } from '../types.ts';

export const REGIONS = ['Europe', 'Asia', 'Russia'];
export const TAGS = ['High_mountains'];

const EUCountries = Object.values(EuropeanCountries);

export function Filter(data: TActivityStructure, regionFilter?: typeof REGIONS[number]) {
  if (regionFilter === 'Europe') {
    return data.hiking.filter((hike) => EUCountries.includes(hike.country as EuropeanCountries));
  }
}