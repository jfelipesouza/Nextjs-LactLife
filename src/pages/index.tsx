import React from "react";
import axios from "axios";
import Image from "next/image";
import { GetStaticProps, GetStaticPropsContext } from "next";

import Header from "@/components/Header";
import { InformationCards } from "@/components/InformationCards";
import {
  ActionLink,
  HeroSection,
  QuestionSection,
  QuestionSectionGrid,
  RestaurantsSection,
  RestourantContent,
  RevenueSection,
  SectionTilte,
  SubtitleContainer,
} from "@/styles/pages/Home";
import {
  ContactSupportIcon,
  RestaurantIcon,
  LocationOnIcon,
} from "@/components/icons";
import { RevenueSlider } from "@/components/RevenueSlider";
import { RestaurantCard } from "@/components/RestaurantCard";
import { restaurantMock } from "@/utils/mocks/restaurants";

import { RevenueDTO } from "@/@types/revenue";

type HomeScreenProps = {
  revenues: RevenueDTO[];
};
const Home: React.FC<HomeScreenProps> = (props) => {
  const informationCards = [
    {
      title: "Há níveis de intolerância?",
      description:
        "A quantidade de lactose necessária para desencadear os sintomas varia de indivíduo para indivíduo...",
    },
    {
      title: "Tipos de intolerância",
      description:
        "Intolerância Primária: Esta é a mais comum. Desenvolve-se ao longo da vida e é crônica, devido a diminuição natural e progressiva da lactase....",
    },
    {
      title: "Mas afinal, o que é lactose e lactase?",
      description:
        "Lactose é popularmente conhecido como o açúcar do leite, tal como a frutose é o açúcar das frutas...",
    },
    {
      title: "Tipos de intolerância",
      description:
        "Intolerância Primária: Esta é a mais comum. Desenvolve-se ao longo da vida e é crônica, devido a diminuição natural e progressiva da lactase...",
    },
    {
      title: "Quais são os sintomas?",
      description:
        "A quantidade de lactose necessária para desencadear os sintomas varia de indivíduo para indivíduo, dependendo da porção de lactose ingerida...",
    },
    {
      title: "O que pode substituir o leite?",
      description:
        "Na alergia ao leite de vaca é necessária dieta sem leite e derivados com atenção especial aos rótulos, pois o leite pode vir com outro nome...",
    },
  ];

  return (
    <>
      <Header />
      <HeroSection>
        <Image
          alt="banner"
          src={"/assets/images/mainBanner.svg"}
          id={"banner"}
          fill
          placeholder={"blur"}
          blurDataURL={"/assets/images/mainBanner.svg"}
        />
        <div id={"hero-section-question"}>
          <h2 id={"subtitle-question"}>O que é Intolerância</h2>
          <h2 id={"subtitle-question"}>a Lactose?</h2>

          <ActionLink href={"/about"}>Clique aqui para saber +</ActionLink>
        </div>
      </HeroSection>
      <QuestionSection>
        <SubtitleContainer>
          <SectionTilte href={"/questions"}>Dúvidas Frequentes</SectionTilte>
          <ContactSupportIcon id={"icon"} />
        </SubtitleContainer>
        <QuestionSectionGrid>
          {informationCards.map((data, index) => (
            <InformationCards
              description={data.description}
              title={data.title}
              key={index}
            />
          ))}
        </QuestionSectionGrid>
        <ActionLink id={"center"} href={"/questions"}>
          Saiba mais +
        </ActionLink>
      </QuestionSection>
      <RevenueSection>
        <SubtitleContainer>
          <SectionTilte href={"/revenues"}>Receitas</SectionTilte>
          <RestaurantIcon id={"icon"} />
        </SubtitleContainer>
        <RevenueSlider revenue={props.revenues} />
        <ActionLink className="translate" id={"center"} href={"/revenues"}>
          Encontre a sua
        </ActionLink>
      </RevenueSection>
      <RestaurantsSection>
        <SubtitleContainer>
          <SectionTilte href={"/restaurants"}>Onde comer</SectionTilte>
          <LocationOnIcon id={"icon"} />
        </SubtitleContainer>
        <RestourantContent>
          {restaurantMock.map((data) => (
            <RestaurantCard data={data} key={data.id} />
          ))}
        </RestourantContent>
      </RestaurantsSection>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeScreenProps> = async (
  context: GetStaticPropsContext
) => {
  try {
    const getRevenues = async () => {
      const result = await axios.get<{ revenues: RevenueDTO[] }>(
        process.env.BASE_URL + "revenues",
        {
          params: { start: 0, end: 10 },
        }
      );
      return result.data.revenues;
    };
    const revenues = await getRevenues();

    return {
      props: {
        revenues,
      },
      revalidate: 60 * 60, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: {
        revenues: [],
      },
      revalidate: 60 * 60, // will be passed to the page component as props
    };
  }
};

export default Home;
