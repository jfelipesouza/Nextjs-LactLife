import React, { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import axios from 'axios'
import { useRouter } from 'next/router'
import { IRevenueInformation } from '@/@types/revenue'
import Header from '@/components/Header'

type StaticPathsProps = {
  id: string
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
  const { data } = await axios.get(process.env.BASE_URL + 'revenues', {
    params: {
      start: 0,
      end: 1,
      minimun: true
    }
  })
  const { revenues }: { revenues: { id: string }[] } = data
  const paths = revenues.map(({ id }) => {
    return { params: { id: id } }
  })
  return {
    paths: paths || [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  const id = params?.id

  if (id) {
    const { data } = await axios.get(
      process.env.BASE_URL + 'revenues/information',
      {
        params: { id }
      }
    )
    return {
      props: {
        revenue: data.revenue
      }
    }
  }

  return {
    notFound: true
  }
}

export default RevenueInformation
