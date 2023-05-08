import React, { useState, useEffect } from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import axios from "axios";
import Image from "next/image";

import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ICategory } from "@/@types/category";
import { IRevenueInformation, RevenueDTO } from "@/@types/revenue";
import { RevenueCard } from "@/components/RevenueCard";
import {
  ActionButton,
  ActionLink,
  CategoriesContainer,
  HeroSection,
  MainSection,
  RevenuesContent,
  SearchActionsContainer,
  SearchContainer,
} from "@/styles/pages/Revenue";
import { CategoriesList } from "@/components/CategoriesList";
import { SearchModal } from "@/components/SearchModal";
import ModalFormRegisterOrLogin from "@/components/ModalFormRegisterOrLogin";
import { useRouter } from "next/router";
import { api } from "@/utils/axios";

type StaticRevenueScreenProps = {
  categories: ICategory[];
  revenues: RevenueDTO[];
  banner: IRevenueInformation;
};

const RevenueScreen: React.FC<StaticRevenueScreenProps> = ({
  categories,
  revenues,
  banner,
}) => {
  const navigate = useRouter();
  const [findRevenues, setFindRevenues] = useState(revenues);
  const [category, setCategory] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSearchRevenuesByCategory = async (name: string) => {
    setCategory(name);
    const { data } = await api.get("category/revenues", {
      params: {
        name: category,
        start: 0,
        end: 0,
      },
    });

    setFindRevenues(data.revenues);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Header />
      <HeroSection>
        {banner && (
          <>
            <Image
              alt={banner.foodName}
              src={`data:${banner.image.mimeType};base64,${banner.image.file}`}
              fill
              loading={"lazy"}
              id={"banner"}
            />
            <div id={"hero-section-question"}>
              <h2 id={"subtitle-question"}>{banner.foodName}</h2>

              <ActionLink href={`revenues/informations/${banner.id}`}>
                Ver receita
              </ActionLink>
            </div>
          </>
        )}
      </HeroSection>

      <MainSection>
        <SearchContainer>
          <CategoriesContainer>
            <CategoriesList
              categories={categories}
              handleExecuteWhenSelectingCategory={
                handleSearchRevenuesByCategory
              }
            />
          </CategoriesContainer>
          <SearchActionsContainer>
            <ActionButton>Adicionar receita +</ActionButton>
            <ActionButton onClick={() => setOpenModal(true)}>
              <IoSearchSharp className={"icon"} />
              <AiOutlineMenuUnfold className={"icon-filter"} />
            </ActionButton>
          </SearchActionsContainer>
        </SearchContainer>

        <RevenuesContent>
          {findRevenues.map((revenue) => (
            <RevenueCard
              style={"backgroundGray"}
              revenue={revenue}
              key={revenue.id}
            />
          ))}
        </RevenuesContent>
      </MainSection>

      <SearchModal
        closeModalFunction={handleCloseModal}
        showModal={openModal}
        categories={categories}
      />
      <ModalFormRegisterOrLogin
        visible={modalRegister}
        closeModal={() => setModalRegister(false)}
      />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<StaticRevenueScreenProps> = async (
  context: GetStaticPropsContext
) => {
  const getCategories = async (): Promise<ICategory[]> => {
    const { data } = await axios.get(process.env.BASE_URL + "category");
    return data.categories;
  };
  const getAllrevenues = async (): Promise<RevenueDTO[]> => {
    const { data } = await axios.get(process.env.BASE_URL + "revenues", {
      params: { minimun: false, start: 0, end: 10 },
    });
    return data.revenues;
  };

  const getBanner = async (): Promise<IRevenueInformation> => {
    const { data } = await axios.get<{ revenue: IRevenueInformation }>(
      process.env.BASE_URL + "revenues/random"
    );
    return data.revenue;
  };

  const [categories, revenues, banner] = await Promise.all([
    getCategories(),
    getAllrevenues(),
    getBanner(),
  ]);

  return {
    props: {
      categories,
      revenues,
      banner,
    },
    revalidate: 2,
  };
};

export default RevenueScreen;
