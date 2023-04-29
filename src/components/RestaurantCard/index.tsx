import React, { useEffect, useState } from 'react'
import { MdStar } from 'react-icons/md'

import { RestaurantDTO } from '@/@types/restaurant'
import { CardImage, CardInformation, Container } from './styled'

type RestaurantCardProps = {
  data: RestaurantDTO
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ data }) => {
  const [stars, setStars] = useState<{}[]>([])

  const returnStar = () => {
    const addStars = []
    for (let index = 0; index < data.numberOfStar; index++) {
      addStars.push({})
    }
    setStars(addStars)
  }
  useEffect(() => {
    returnStar()
  }, [])

  return (
    <Container href={'/restaurants'}>
      <CardImage alt={data.name} src={data.image} />
      <CardInformation>
        <span className="restaurantName">{data.name}</span>
        <div className="stars">
          {stars.map((star, index) => (
            <MdStar className="star" key={index} />
          ))}
        </div>
      </CardInformation>
    </Container>
  )
}
