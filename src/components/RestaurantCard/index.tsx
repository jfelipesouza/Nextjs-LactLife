import React, { useEffect, useState } from "react";
import { MdStar } from "react-icons/md";

import { RestaurantDTO, Restaurants } from "@/@types/restaurant";
import { CardImage, CardInformation, Container } from "./styled";

type RestaurantCardProps = {
  data: Restaurants;
};

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ data }) => {
  const [stars, setStars] = useState<{}[]>([]);

  const returnStar = () => {
    const addStars = [];
    for (let index = 0; index < data.numberOfStar; index++) {
      addStars.push({});
    }
    setStars(addStars);
  };
  useEffect(() => {
    returnStar();
  }, []);

  return (
    <Container>
      <CardImage
        alt={data.name}
        src={`data:${data.image.mimeType};base64,${data.image.file}`}
      />
      <CardInformation>
        <span className="restaurantName">{data.name}</span>
        <div className="stars">
          {stars.map((star, index) => (
            <MdStar className="star" key={index} />
          ))}
        </div>
      </CardInformation>
    </Container>
  );
};
