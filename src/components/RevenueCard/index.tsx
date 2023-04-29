import { ImageDTO } from '@/@types/image'
import { RevenueDTO } from '@/@types/revenue'
import { api } from '@/utils/axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { Card, CardImage, CardImageContainer, CardInformation } from './styled'

type RevenueCardProps = {
  revenue: RevenueDTO
  style?: string
}

export const RevenueCard: React.FC<RevenueCardProps> = ({ revenue, style }) => {
  const [image, setImage] = useState<ImageDTO>()

  const findImageById = async () => {
    const { data } = await api.get<{ image: ImageDTO }>('files/images', {
      params: {
        id: revenue.image.id
      }
    })
    if (data.image) {
      const { mimeType, file } = data.image
      setImage({ mimeType, file })
    }
  }

  useEffect(() => {
    findImageById()
  }, [])

  return (
    <Card key={revenue.id} className={style}>
      <CardImageContainer>
        {image && (
          <CardImage
            fill
            loading="lazy"
            alt={revenue ? revenue.foodName : 'food-image'}
            src={revenue ? `data:${image.mimeType};base64,${image.file}` : ''}
          />
        )}
      </CardImageContainer>
      <CardInformation>
        <h4 className="foodName">{revenue.foodName}</h4>
        <Link
          className="link"
          href={revenue ? `/revenues/informations/${revenue.id}` : '/'}
        >
          Ver receita
        </Link>
      </CardInformation>
    </Card>
  )
}
