export interface Character {
  id: string,
  name: string,
  status: 'Alive' | 'Dead' | 'unknown',
  species: string,
  type: string,
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown',
  origin: {
      name: string,
      url: string
  },
  location: {
    name: string,
    url: string
  }
  image: string,
  episode: string[],
  url: string,
  created: string,
  bestSentence?: string
}