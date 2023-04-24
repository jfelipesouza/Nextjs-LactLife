export type RevenueDTO = {
  image: {
    mimeType: string
    base64: string
  }
  foodName: string
  id: string
}

export type IRevenueInformation = {
  foodName: string
  foodDescription: string
  ingredients: {
    count: number
    name: string
  }[]
  preparation: string[]
  calories: string
  portions: number
  preparationTime: number
  image: {
    mimeType: string
    file: string
    id: string
  }
  id: string
}
