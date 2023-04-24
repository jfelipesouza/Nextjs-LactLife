import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'

import Header from '@/components/Header'
import {
  ActionLink,
  Card,
  CardImage,
  CardInformation,
  CategoryList,
  HeroSection,
  MainSection,
  RevenuesContent,
  SearchContainer
} from '@/styles/pages/Revenue'
import { sliderMock } from '@/utils/mocks/sliders'
import Link from 'next/link'
import { GetStaticProps, GetStaticPropsContext } from 'next'

type ICategory = {
  id: string
  name: string
}
type StaticRevenueScreenProps = {
  categories: ICategory[]
}
const RevenueScreen: React.FC<StaticRevenueScreenProps> = ({ categories }) => {
  const [category, setCatgory] = useState<ICategory[]>([])
  const [lastCategory, setLastCategory] = useState<number | null>(null)

  const categoryRef1 = useRef<HTMLUListElement>(null)
  const categoryRef2 = useRef<HTMLUListElement>(null)
  const categoryRef3 = useRef<HTMLUListElement>(null)
  const categoryRef4 = useRef<HTMLUListElement>(null)
  const categoryRef5 = useRef<HTMLUListElement>(null)

  const categoriesRef = [
    categoryRef1,
    categoryRef2,
    categoryRef3,
    categoryRef4,
    categoryRef5
  ]

  const handleSelectCategory = (focusCategory: number) => {
    console.log({ lastCategory, focusCategory })
    if (lastCategory !== focusCategory) {
      switch (focusCategory) {
        case 1:
          categoryRef1.current?.classList.add('focus')
          categoryRef2.current?.classList.remove('focus')
          categoryRef3.current?.classList.remove('focus')
          categoryRef4.current?.classList.remove('focus')
          categoryRef5.current?.classList.remove('focus')
          break
        case 2:
          categoryRef1.current?.classList.remove('focus')
          categoryRef2.current?.classList.add('focus')
          categoryRef3.current?.classList.remove('focus')
          categoryRef4.current?.classList.remove('focus')
          categoryRef5.current?.classList.remove('focus')
          break
        case 3:
          categoryRef1.current?.classList.remove('focus')
          categoryRef2.current?.classList.remove('focus')
          categoryRef3.current?.classList.add('focus')
          categoryRef4.current?.classList.remove('focus')
          categoryRef5.current?.classList.remove('focus')
          break
        case 4:
          categoryRef1.current?.classList.remove('focus')
          categoryRef2.current?.classList.remove('focus')
          categoryRef3.current?.classList.remove('focus')
          categoryRef4.current?.classList.add('focus')
          categoryRef5.current?.classList.remove('focus')
          break
        case 5:
          categoryRef1.current?.classList.remove('focus')
          categoryRef2.current?.classList.remove('focus')
          categoryRef3.current?.classList.remove('focus')
          categoryRef4.current?.classList.remove('focus')
          categoryRef5.current?.classList.add('focus')
          break

        default:
          break
      }
      setLastCategory(focusCategory)
    }
  }

  useEffect(() => {
    setCatgory(categories)
    handleSelectCategory(1)
  }, [])
  return (
    <>
      <Header />
      <HeroSection>
        <img
          alt="banner"
          src={'/assets/images/revenueBanner.svg'}
          id={'banner'}
        />
        <div id={'hero-section-question'}>
          <h2 id={'subtitle-question'}>Soverte zero Lactose</h2>

          <ActionLink href={'/about'}>Ver receita</ActionLink>
        </div>
      </HeroSection>
      <MainSection>
        <SearchContainer>
          <CategoryList>
            {category.map((data, index) => {
              return (
                <ul
                  ref={categoriesRef[index]}
                  onClick={() => {
                    handleSelectCategory(index + 1)
                  }}
                  key={data.id}
                >
                  {data.name}
                </ul>
              )
            })}
          </CategoryList>
        </SearchContainer>
        <RevenuesContent>
          {sliderMock.map(data => (
            <Card key={data.id}>
              <CardImage src={data.image.base64} />
              <CardInformation>
                <h4 className="foodName">{data.foodName}</h4>
                <Link className="link" href={`/revenue/[${data.id}]`}>
                  Ver receita
                </Link>
              </CardInformation>
            </Card>
          ))}
        </RevenuesContent>
      </MainSection>
    </>
  )
}

export const getStaticProps: GetStaticProps<StaticRevenueScreenProps> = async (
  context: GetStaticPropsContext
) => {
  const getCategories = async () => {
    const { data } = await axios.get(process.env.BASE_URL + 'category')
    return data.categories
  }
  return {
    props: {
      categories: await getCategories()
    },
    revalidate: 60 * 60 // will be passed to the page component as props
  }
}

export default RevenueScreen
