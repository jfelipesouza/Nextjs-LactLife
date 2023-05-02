import { RevenueDTO } from "@/@types/revenue";
import Link from "next/link";
import React from "react";

import { Card, CardImage, CardImageContainer, CardInformation } from "./styled";

type RevenueCardProps = {
  revenue: RevenueDTO;
  style?: string;
};

export const RevenueCard: React.FC<RevenueCardProps> = ({ revenue, style }) => {
  return (
    <Card key={revenue.id} className={style}>
      <CardImageContainer>
        <CardImage
          fill
          loading="lazy"
          placeholder={"blur"}
          blurDataURL={"/assets/images/mainBanner.svg"}
          alt={revenue ? revenue.foodName : "food-image"}
          src={
            revenue
              ? `data:${revenue.image.mimeType};base64,${revenue.image.file}`
              : "/assets/images/logo.svg"
          }
        />
      </CardImageContainer>
      <CardInformation>
        <h4 className="foodName">{revenue.foodName}</h4>
        <Link
          className="link"
          href={revenue ? `/revenues/informations/${revenue.id}` : "/"}
        >
          Ver receita
        </Link>
      </CardInformation>
    </Card>
  );
};
