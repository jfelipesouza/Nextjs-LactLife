import React, { useEffect } from 'react'
import { MdStar } from 'react-icons/md'

import { RestaurantDTO } from '@/@types/restaurant'
import { CardImage, CardInformation, Container } from './styled'

type RestaurantCardProps = {
  data: RestaurantDTO
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ data }) => {
  const stars: { id: number }[] = []
  const returnStar = () => {
    for (let index = 0; index < data.numberOfStar; index++) {
      stars.push({ id: index })
    }
  }
  returnStar()

  return (
    <Container href={'/restaurants'}>
      <CardImage src={data.image} />
      <CardInformation>
        <span className="restaurantName">{data.name}</span>
        <div className="stars">
          {stars.map(data => (
            <MdStar className="star" key={data.id} />
          ))}
        </div>
      </CardInformation>
    </Container>
  )
}
