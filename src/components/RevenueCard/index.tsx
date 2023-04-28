import { RevenueDTO } from '@/@types/revenue'
import Link from 'next/link'
import React from 'react'

import { Card, CardImage, CardImageContainer, CardInformation } from './styled'

type RevenueCardProps = {
  data: RevenueDTO
  style?: string
}

export const RevenueCard: React.FC<RevenueCardProps> = ({ data, style }) => {
  return (
    <Card key={data.id} className={style}>
      <CardImageContainer>
        <CardImage
          fill
          loading="lazy"
          alt={data ? data.foodName : 'food-image'}
          src={
            data ? `data:${data.image.mimeType};base64,${data.image.file}` : ''
          }
        />
      </CardImageContainer>
      <CardInformation>
        <h4 className="foodName">{data.foodName}</h4>
        <Link
          className="link"
          href={data ? `/revenues/informations/${data.id}` : '/'}
        >
          Ver receita
        </Link>
      </CardInformation>
    </Card>
  )
}
