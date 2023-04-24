import React, { useState, useEffect, useRef } from 'react'
import {
  Card,
  CardImage,
  CardInformation,
  Container,
  SliderContent
} from './styled'
import { RevenueDTO } from '@/@types/revenue'
import Link from 'next/link'

type RevenueSlideCards = {
  revenue: RevenueDTO[]
}
export const RevenueSlider: React.FC<RevenueSlideCards> = ({ revenue }) => {
  const carousel = useRef<any>(null)
  const [maxWidth, setMaxWidth] = useState<number>(
    carousel.current?.scrollWidth - carousel.current?.offsetWidth
  )

  useEffect(() => {
    setMaxWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <Container whileTap={{ cursor: 'grabbing' }} ref={carousel}>
      <SliderContent drag={'x'} dragConstraints={{ right: 0, left: -maxWidth }}>
        {revenue.map(({ id, foodName, image }) => (
          <Card key={id}>
            <CardImage alt={foodName} src={image.base64} />
            <CardInformation>
              <h4 className="foodName">{foodName}</h4>
              <Link className="link" href={`/revenue/[${id}]`}>
                Ver receita
              </Link>
            </CardInformation>
          </Card>
        ))}
      </SliderContent>
    </Container>
  )
}
