import React from "react";
import { GetStaticProps } from "next";
import Header from "@/components/Header";
import {
  InformationContainer,
  InformationTexts,
  MainContainer,
  RestaurantWrapper,
  Title,
} from "@/styles/pages/Restaurants";
import { Footer } from "@/components/Footer";
import axios from "axios";
import { Restaurants } from "@/@types/restaurant";
import { RestaurantCard } from "@/components/RestaurantCard";
import Link from "next/link";

const RestaurantsScreen: React.FC<{ restaurants: Restaurants[] }> = ({
  restaurants,
}) => {
  return (
    <>
      <Header />
      <MainContainer>
        <InformationContainer>
          <Title>Locais</Title>
          <InformationTexts>
            Selecionamos os melhores restaurantes, entre as susgestões enviadas
            para nós, com o intuito de que você obtenha a melhor experiência
            gastronômica, sem sofre depois.
          </InformationTexts>
          <RestaurantWrapper>
            {restaurants?.map((restaurant, index) => (
              <Link href={`/restaurants/${restaurant.id}`}>
                <RestaurantCard data={restaurant} key={restaurant.id} />
              </Link>
            ))}
          </RestaurantWrapper>
        </InformationContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default RestaurantsScreen;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(process.env.BASE_URL + "restaurants");

  return {
    props: {
      restaurants: data.restaurants,
    },
    revalidate: 60 * 60,
  };
};
