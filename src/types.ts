export type TDay = {
  distance: number,
  accent: number,
  descent: number
  minElevation: number
  maxElevation: number
  image: '',
  description: ''
  link?: string
}

export type TActivity = {
  name: string,
  distance: number,
  country: string,
  accent: number,
  wikiLoc?: string
  mountainSystem: string
  image: string
  description: string
}

export type TTrekking = {days: TDay[]} & TActivity
export type THiking = {} & TActivity

export type TActivityStructure = {
  trekking: TTrekking[]
  hiking: THiking[]
}