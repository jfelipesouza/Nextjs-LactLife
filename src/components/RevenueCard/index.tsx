import { RevenueDTO } from '@/@types/revenue'
import Link from 'next/link'
import React from 'react'

import { Card, CardImage, CardInformation } from './styled'

type RevenueCardProps = {
  data: RevenueDTO
  style?: string
}

export const RevenueCard: React.FC<RevenueCardProps> = ({ data, style }) => {
  return (
    <Card key={data.id} className={style}>
      <CardImage alt={data.foodName} src={data.image.base64} />
      <CardInformation>
        <h4 className="foodName">{data.foodName}</h4>
        <Link className="link" href={`/revenues/informations/${data.id}`}>
          Ver receita
        </Link>
      </CardInformation>
    </Card>
  )
}
