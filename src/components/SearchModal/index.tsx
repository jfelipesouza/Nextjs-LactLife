import { ICategory } from "@/@types/category";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { SearchFilterButton } from "./SearchFilterButton";
import {
  Container,
  SearchBarContainer,
  SearchInput,
  SearchIcon,
  SearchButton,
  SearchTitle,
  SearchParagraph,
  SearchFilterButtonContainer,
  ModalContainer,
  CloseIcon,
} from "./styled";

type SearchModalProps = React.HTMLAttributes<HTMLDivElement> & {
  showModal: boolean;
  closeModalFunction: () => void;
  handleSearch?: () => void;
  handleSelectFilter?: () => void;
  categories: ICategory[];
};
const SearchModal: React.FC<SearchModalProps> = (
  {
    closeModalFunction,
    handleSearch,
    handleSelectFilter,
    showModal,
    categories,
  },
  { ...props }
) => {
  const filterRef = useRef<any>([]);

  const handleSelectCategory = (name: string, index: number) => {
    filterRef.current.forEach((value: any, indexArray: number) => {
      if (indexArray === index) {
        filterRef.current[index].selectCategory(true);
      } else {
        filterRef.current[indexArray].selectCategory(false);
      }
    });
  };

  const handleCloseModal = () => {
    closeModalFunction();
  };

  return (
    <AnimatePresence>
      {showModal && (
        <ModalContainer
          initial={{ opacity: 0, zIndex: 1 }}
          animate={{ opacity: 1, zIndex: 99, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, zIndex: 1 }}
        >
          <Container
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0 }}
          >
            <CloseIcon onClick={handleCloseModal} />
            <SearchTitle>Procure a sua receita</SearchTitle>
            <SearchBarContainer>
              <SearchInput type={"text"} placeholder={"Ex: Crepioca..."} />
              <SearchButton>
                <SearchIcon />
              </SearchButton>
            </SearchBarContainer>
            <SearchParagraph>ou</SearchParagraph>
            <SearchParagraph>Busque pela categoria</SearchParagraph>
            <SearchFilterButtonContainer>
              {categories.map((e, index) => (
                <SearchFilterButton
                  key={e.id}
                  ref={(ref: any) => {
                    filterRef.current[index] = ref;
                  }}
                  name={e.name}
                  onClick={() => handleSelectCategory(e.name, index)}
                />
              ))}
            </SearchFilterButtonContainer>
          </Container>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export { SearchModal };
