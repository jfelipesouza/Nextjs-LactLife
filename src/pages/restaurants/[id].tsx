import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import {
  LocalContainer,
  MainContainer,
  MapContainer,
  RestaurantWrapper,
  Title,
} from "@/styles/pages/Restaurants";
import { restaurantMock } from "@/utils/mocks/restaurants";
import { Place } from "../../components/RestaurantMap";
import { mapApi } from "@/utils/axios";
import { RestaurantCard } from "@/components/RestaurantCard";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";

const RestaurantMap = dynamic(() => import("../../components/RestaurantMap"), {
  ssr: false,
});

type RestaurantDTO = {
  id: string;
  image: string;
  name: string;
  numberOfStar: number;
  address: string;
};

type Restaurants = {
  id: string;
  name: string;
  numberOfStar: number;
  address: string;
  image: {
    mimeType: string;
    file: string;
  };
};

const RestaurantsScreens: React.FC<{
  restaurants: Restaurants[];
  restaurantFocus: string;
}> = ({ restaurants, restaurantFocus }) => {
  const [focusRestaurant, setFocusRestaurant] = useState<Restaurants>(
    restaurants[0]
  );
  const [place, setPlace] = useState<Place>({
    id: "initial",
    location: { lat: 0, lon: 0 },
    name: "initial",
  });

  const searchMap = async () => {
    const { data } = await mapApi.get("", {
      params: { q: focusRestaurant.address, format: "json" },
    });

    setPlace({
      id: focusRestaurant.id,
      location: { lat: data[0].lat, lon: data[0].lon },
      name: focusRestaurant.name,
    });
  };

  const handleSelectRestaurant = (restaurant: Restaurants) => {
    console.log(restaurant);
    setFocusRestaurant(restaurant);
  };

  useEffect(() => {
    let restaurant: Restaurants | null = null;
    restaurants.forEach((value, index) => {
      if (value.id === restaurantFocus) {
        restaurant = value;
      }
    });

    if (restaurant) {
      setFocusRestaurant(restaurant);
    }
  }, []);

  useEffect(() => {
    searchMap();
  }, [focusRestaurant]);

  return (
    <>
      <Header />
      <MainContainer>
        <LocalContainer>
          <Title>Locais</Title>
          <MapContainer>
            <RestaurantMap place={place} />
          </MapContainer>
          <RestaurantWrapper>
            {restaurants.map((restaurant) => (
              <div onClick={() => handleSelectRestaurant(restaurant)}>
                <RestaurantCard key={restaurant.id} data={restaurant} />
              </div>
            ))}
          </RestaurantWrapper>
        </LocalContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default RestaurantsScreens;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(process.env.BASE_URL + "restaurants");

  const paths = data.restaurants.map(({ id }: { id: string }) => {
    return { params: { id: id } };
  });

  return {
    paths: paths || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const restaurantId = params?.id;
  const { data } = await axios.get(`${process.env.BASE_URL}restaurants`);

  return {
    props: {
      restaurants: data.restaurants,
      restaurantFocus: restaurantId,
    },
  };
};
