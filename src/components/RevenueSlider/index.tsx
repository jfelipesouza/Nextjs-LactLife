import React, { useState, useEffect, useRef } from 'react'
import { Container, SliderContent } from './styled'
import { RevenueDTO } from '@/@types/revenue'
import { RevenueCard } from '../RevenueCard'

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
        {revenue.map(data => (
          <RevenueCard data={data} />
        ))}
      </SliderContent>
    </Container>
  )
}
