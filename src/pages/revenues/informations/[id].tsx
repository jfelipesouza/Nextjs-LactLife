import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";

import { IRevenueInformation } from "@/@types/revenue";
import Header from "@/components/Header";
import {
  Container,
  FoodNameTitle,
  HeroSection,
  Image,
  ImageContainer,
  InformationContainer,
  IngredientsCardContainer,
  IngredientItem,
  IngredientsTitle,
  CheckItem,
} from "@/styles/pages/Revenue/information";

type StaticPathsProps = {
  id: string;
};

type RevenueInformation = {
  revenue: IRevenueInformation;
};

const RevenueInformation: React.FC<RevenueInformation> = ({ revenue }) => {
  useEffect(() => {
    const { ingredients } = revenue;
    const sizes = ingredients.map((item) => item.name.slice().length);

    console.log(sizes);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <HeroSection>
          <ImageContainer>
            <Image
              alt={revenue.foodName}
              src={`data:${revenue.image.mimeType};base64,${revenue.image.file}`}
              fill
            />
          </ImageContainer>
          <InformationContainer>
            <FoodNameTitle>{revenue.foodName}</FoodNameTitle>
            <IngredientsCardContainer>
              <IngredientsTitle>Ingredientes</IngredientsTitle>
              {revenue.ingredients.map((item) => (
                <IngredientItem>
                  <CheckItem />
                  <span className={"info"}>{item.count}</span>
                  <span className="info"> {item.name}</span>
                </IngredientItem>
              ))}
            </IngredientsCardContainer>
          </InformationContainer>
        </HeroSection>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<StaticPathsProps> = async () => {
  const { data } = await axios.get(process.env.BASE_URL + "revenues", {
    params: {
      start: 0,
      end: 10,
      minimun: true,
    },
  });
  const { revenues }: { revenues: { id: string }[] } = data;
  const paths = revenues.map(({ id }) => {
    return { params: { id: id } };
  });
  return {
    paths: paths || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const id = params?.id;

  if (id) {
    const { data } = await axios.get(
      process.env.BASE_URL + "revenues/information",
      {
        params: { id },
      }
    );
    return {
      props: {
        revenue: data.revenue,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default RevenueInformation;
