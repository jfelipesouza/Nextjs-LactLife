import React, { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import axios from 'axios'
import { useRouter } from 'next/router'
import { IRevenueInformation } from '@/@types/revenue'
import Header from '@/components/Header'

type StaticPathsProps = {
  id: string
}

type Path =
  | string
  | {
      params: StaticPathsProps
      locale?: string | undefined
    }

type RevenueInformation = {
  revenue: IRevenueInformation
}

const RevenueInformation: React.FC<RevenueInformation> = ({ revenue }) => {
  const {
    query: { id }
  } = useRouter()

  useEffect(() => {
    console.log(revenue)
  }, [])
  return (
    <>
      <Header />
    </>
  )
}

export const getStaticPaths: GetStaticPaths<StaticPathsProps> = async () => {
  const { data } = await axios.get(process.env.BASE_URL + 'revenues')
  const { revenues }: { revenues: IRevenueInformation[] } = data

  const routers = (): Path[] => {
    return revenues.map(
      ({ id }): Path => ({
        params: {
          id
        }
      })
    )
  }
  return {
    paths: routers(),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  const id = params?.id

  const { data } = await axios.get(
    process.env.BASE_URL + 'revenues/information',
    {
      data: { id }
    }
  )

  return {
    props: {
      revenue: data.revenue
    }
  }
}

export default RevenueInformation
