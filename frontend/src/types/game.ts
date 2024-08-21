export interface Game {
    id: string
    slug: string
    title: string
    providerName: string,
    startUrl?: string,
    thumb?: Thumb
  }
  
  export interface Thumb {
    url: string
  }
  