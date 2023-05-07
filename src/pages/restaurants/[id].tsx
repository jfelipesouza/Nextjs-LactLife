import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import {
  LocalContainer,
  MainContainer,
  MapContainer,
  RestaurantInfomation,
  RestaurantInfomationItem,
  RestaurantWrapper,
  Title,
} from "@/styles/pages/Restaurants";
import { restaurantMock } from "@/utils/mocks/restaurants";
import { Place } from "../../components/RestaurantMap";
import { mapApi } from "@/utils/axios";
import { RestaurantCard } from "@/components/RestaurantCard";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import { MdStar } from "react-icons/md";

const RestaurantMap = dynamic(() => import("../../components/RestaurantMap"), {
  ssr: false,
});

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

const RestaurantsInformationScreens: React.FC<{
  restaurants: Restaurants[];
  restaurantFocus: string;
}> = ({ restaurants, restaurantFocus }) => {
  const [focusRestaurant, setFocusRestaurant] = useState<Restaurants>(
    restaurants[0]
  );
  const [stars, setStars] = useState<{}[]>([]);

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

  const returnStar = () => {
    const addStars = [];
    for (let index = 0; index < focusRestaurant.numberOfStar; index++) {
      addStars.push({});
    }
    setStars(addStars);
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
    returnStar();
  }, [focusRestaurant]);

  return (
    <>
      <Header />
      <MainContainer>
        <LocalContainer>
          <Title id={"map"}>Locais</Title>
          <MapContainer>
            <RestaurantMap place={place} />
          </MapContainer>
          <RestaurantInfomation>
            <h2 className="title">Informações do Restaurante</h2>
            <RestaurantInfomationItem>
              <span> Nome: </span>
              {focusRestaurant.name}
            </RestaurantInfomationItem>
            <RestaurantInfomationItem>
              <span>Endereço: </span>
              {focusRestaurant.address}
            </RestaurantInfomationItem>
            <RestaurantInfomationItem>
              <span> Avaliação popular: </span>
              <div style={{ display: "flex" }}>
                {stars.map((star, index) => (
                  <MdStar className="star" key={index} />
                ))}
              </div>
            </RestaurantInfomationItem>
          </RestaurantInfomation>
          <RestaurantWrapper>
            {restaurants.map((restaurant) => (
              <a
                href={"#map"}
                onClick={() => handleSelectRestaurant(restaurant)}
              >
                <RestaurantCard key={restaurant.id} data={restaurant} />
              </a>
            ))}
          </RestaurantWrapper>
        </LocalContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default RestaurantsInformationScreens;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(process.env.BASE_URL + "restaurants");

  const paths = data.restaurants.map(({ id }: { id: string }) => {
    return { params: { id: id } };
  });

  return {
    paths: paths || [],
    fallback: false,
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
