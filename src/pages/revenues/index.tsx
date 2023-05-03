import React, { useRef, useEffect, useState } from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";

import Header from "@/components/Header";
import { IRevenueInformation, RevenueDTO } from "@/@types/revenue";
import { RevenueCard } from "@/components/RevenueCard";
import {
  ActionButton,
  ActionLink,
  CategoriesContainer,
  CategoryList,
  Dropdown,
  DropdownList,
  DropdownListItem,
  DropIcon,
  HeroSection,
  IconContainer,
  MainSection,
  RevenuesContent,
  SearchActionsContainer,
  SearchContainer,
} from "@/styles/pages/Revenue";
import { api } from "@/utils/axios";
import Image from "next/image";
import { Footer } from "@/components/Footer";

type ICategory = {
  id: string;
  name: string;
};
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
  const [lastCategory, setLastCategory] = useState<number>(1);
  const [category, setCategory] = useState("");
  const [openDrop, setOpenDrop] = useState(true);
  const [findRevenues, setFindRevenues] = useState(revenues);

  const categoryRef1 = useRef<HTMLUListElement>(null);
  const categoryRef2 = useRef<HTMLUListElement>(null);
  const categoryRef3 = useRef<HTMLUListElement>(null);
  const categoryRef4 = useRef<HTMLUListElement>(null);
  const categoryRef5 = useRef<HTMLUListElement>(null);

  const categoriesRef = [
    categoryRef1,
    categoryRef2,
    categoryRef3,
    categoryRef4,
    categoryRef5,
  ];

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "flex",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const handleSelectCategory = (focusCategory: number) => {
    if (lastCategory !== focusCategory) {
      switch (focusCategory) {
        case 1:
          categoryRef1.current?.classList.add("focus");
          categoryRef2.current?.classList.remove("focus");
          categoryRef3.current?.classList.remove("focus");
          categoryRef4.current?.classList.remove("focus");
          categoryRef5.current?.classList.remove("focus");
          break;
        case 2:
          categoryRef1.current?.classList.remove("focus");
          categoryRef2.current?.classList.add("focus");
          categoryRef3.current?.classList.remove("focus");
          categoryRef4.current?.classList.remove("focus");
          categoryRef5.current?.classList.remove("focus");
          break;
        case 3:
          categoryRef1.current?.classList.remove("focus");
          categoryRef2.current?.classList.remove("focus");
          categoryRef3.current?.classList.add("focus");
          categoryRef4.current?.classList.remove("focus");
          categoryRef5.current?.classList.remove("focus");
          break;
        case 4:
          categoryRef1.current?.classList.remove("focus");
          categoryRef2.current?.classList.remove("focus");
          categoryRef3.current?.classList.remove("focus");
          categoryRef4.current?.classList.add("focus");
          categoryRef5.current?.classList.remove("focus");
          break;
        case 5:
          categoryRef1.current?.classList.remove("focus");
          categoryRef2.current?.classList.remove("focus");
          categoryRef3.current?.classList.remove("focus");
          categoryRef4.current?.classList.remove("focus");
          categoryRef5.current?.classList.add("focus");
          break;

        default:
          break;
      }
      setLastCategory(focusCategory);
    }
  };
  const handleFindRevenuesByCategory = async (category: string) => {
    if (openDrop) setOpenDrop(false);

    const { data } = await api.get("category/revenues", {
      params: {
        start: 0,
        end: 10,
        name: category,
      },
    });
    setFindRevenues(data.revenues);
  };

  useEffect(() => {
    handleSelectCategory(1);
    setCategory(categories[lastCategory - 1].name);
  }, []);

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
            <Dropdown onClick={() => setOpenDrop(!openDrop)}>
              {category}
              <IconContainer>
                <DropIcon open={openDrop} />
              </IconContainer>
              <DropdownList>
                {categories.map(({ id, name }) => (
                  <DropdownListItem
                    key={id + name}
                    initial="exit"
                    variants={subMenuAnimate}
                    animate={openDrop ? "enter" : "exit"}
                    onClick={() => {
                      setCategory(name);
                      handleFindRevenuesByCategory(name);
                    }}
                  >
                    {name}
                  </DropdownListItem>
                ))}
              </DropdownList>
            </Dropdown>
            <CategoryList>
              {categories.map(({ name, id }, index) => (
                <ul
                  key={id}
                  onClick={() => handleSelectCategory(index + 1)}
                  ref={categoriesRef[index]}
                >
                  {name}
                </ul>
              ))}
            </CategoryList>
          </CategoriesContainer>

          <SearchActionsContainer>
            <ActionButton>Adicionar receita +</ActionButton>
            <ActionButton>
              <IoSearchSharp className={"icon"} />
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
    revalidate: 60,
  };
};

export default RevenueScreen;
