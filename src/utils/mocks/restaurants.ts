import { RestaurantDTO } from '@/@types/restaurant'

export const restaurantMock: RestaurantDTO[] = [
  {
    id: 'agape_natural',
    image:
      'https://lh3.googleusercontent.com/p/AF1QipOv3hL5yh78i2F9AOiaREORhI67pZ9R3iArbS_c=s1360-w1360-h1020',
    name: 'Ágape Natural',
    numberOfStar: 5,
    address: 'Rua Itabaiana, 926 - Centro, Aracaju - SE, 49015-110'
  },
  {
    id: 'espelunca',
    image:
      'https://lh3.googleusercontent.com/p/AF1QipPytdjXY593sSaOW7oFwNgXPS4Ssz2gsd_k4Z1K=s1360-w1360-h1020',
    name: 'Espelunca',
    numberOfStar: 5,
    address:
      'R. Dr. Márcio Rollemberg Leite, 717 - Luzia, Aracaju - SE, 49045-190'
  }
]
