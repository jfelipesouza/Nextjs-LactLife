import { RevenueDTO } from '@/@types/revenue'

const base64 =
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb0R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'

export const sliderMock = [
  {
    id: 'dasd',
    image: { base64, mimeType: 'image/png' },
    foodName: 'Crepioca de banana com melado'
  },
  {
    id: 'dassdad',
    image: { base64, mimeType: 'image/png' },
    foodName: 'Receitas'
  },
  {
    id: 'asdas',
    image: { base64, mimeType: 'image/png' },
    foodName: 'Receitas'
  },
  {
    id: 'daasdasdasd',
    image: { base64, mimeType: 'image/png' },
    foodName: 'Receitas'
  },
  {
    id: 'dasdasdasdsd',
    image: { base64, mimeType: 'image/png' },
    foodName: 'Receitas'
  },
  {
    id: 'daasdassd',
    image: { base64, mimeType: 'image/png' },
    foodName: 'Receitas'
  },
  {
    id: 'dsasdasdadaasd',
    image: { base64, mimeType: 'image/png' },
    foodName: 'Receitas'
  }
] as RevenueDTO[]
