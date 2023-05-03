import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";

import { IRevenueInformation, RevenueDTO } from "@/@types/revenue";
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
  PreparationSection,
  SectionTitle,
  PreparationItem,
  PreparationStep,
  PreparationStepDescription,
  PreparationCardContainer,
  PreparationCard,
  PreparationCardContent,
  PreparationCardTitle,
  RevenueSections,
} from "@/styles/pages/Revenue/information";
import { MdOutlineWatchLater, MdScale, MdSoupKitchen } from "react-icons/md";
import { RevenueSlider } from "@/components/RevenueSlider";
import { Footer } from "@/components/Footer";

type StaticPathsProps = {
  id: string;
};

type RevenueInformation = {
  revenue: IRevenueInformation;
  otherRevenues: RevenueDTO[];
};

const RevenueInformation: React.FC<RevenueInformation> = ({
  revenue,
  otherRevenues,
}) => {
  if (revenue) {
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
                  <IngredientItem key={item.name}>
                    <CheckItem />
                    <span className={"info"}>{item.count}</span>
                    <span className="info"> {item.name}</span>
                  </IngredientItem>
                ))}
              </IngredientsCardContainer>
            </InformationContainer>
          </HeroSection>
          <PreparationSection>
            <SectionTitle>Como Fazer:</SectionTitle>
            {revenue.preparation.map((e, index) => (
              <PreparationItem key={e}>
                <PreparationStep>{index + 1}</PreparationStep>
                <PreparationStepDescription>{e}</PreparationStepDescription>
              </PreparationItem>
            ))}
            <PreparationCardContainer>
              <PreparationCard>
                <MdOutlineWatchLater className={"icon"} />
                <PreparationCardContent>
                  <PreparationCardTitle>Preparação</PreparationCardTitle>
                  {revenue.preparationTime} min
                </PreparationCardContent>
              </PreparationCard>
              <PreparationCard>
                <MdSoupKitchen className={"icon"} />
                <PreparationCardContent>
                  <PreparationCardTitle>Rendimento</PreparationCardTitle>
                  {revenue.portions}{" "}
                  {revenue.portions > 1 ? "Porções" : "Porção"}
                </PreparationCardContent>
              </PreparationCard>
              <PreparationCard>
                <MdScale className={"icon"} />
                <PreparationCardContent>
                  <PreparationCardTitle>Calorias</PreparationCardTitle>
                  {revenue.calories}
                </PreparationCardContent>
              </PreparationCard>
            </PreparationCardContainer>
          </PreparationSection>
          <RevenueSections>
            <SectionTitle className={"title"}>Outras Receitas</SectionTitle>
            <RevenueSlider revenue={otherRevenues} />
          </RevenueSections>
        </Container>
        <Footer />
      </>
    );
  } else {
    return <p>Carregando</p>;
  }
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
  let revenue: RevenueInformation | null = null;
  let otherRevenues: RevenueDTO[] | null = null;

  if (id) {
    try {
      const { data, status } = await axios.get(
        process.env.BASE_URL + "revenues/information",
        {
          params: { id },
        }
      );

      if (status === 200) {
        revenue = data.revenue;
      } else {
        return {
          notFound: true,
        };
      }
    } catch (error) {
      return {
        notFound: true,
      };
    }
  }
  if (revenue) {
    const { data } = await axios.get(
      process.env.BASE_URL + "category/revenues",
      {
        params: {
          name: "tudo",
          start: 0,
          end: 10,
        },
      }
    );
    otherRevenues = data.revenues;
    return {
      props: {
        revenue,
        otherRevenues,
      },
    };
  }
  return {
    notFound: true,
  };
};

export default RevenueInformation;
