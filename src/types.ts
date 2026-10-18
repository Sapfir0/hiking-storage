export type TDay = {
  distance: number,
  accent: number,
  descent: number
  minElevation: number
  maxElevation: number
  image?: string,
  description?: string
  link?: string
}

export type TActivity = {
  name: string,
  distance: number,
  country: string,
  accent: number,
  wikiLoc?: string
  mountainSystem?: string
  region?: string
  image: string
  description: string
}

export type TTrekking = {days: TDay[]} & TActivity
export type THiking = {} & TActivity

export type TActivityStructure = {
  trekking: TTrekking[]
  hiking: THiking[]
}