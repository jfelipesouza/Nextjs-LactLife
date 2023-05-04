import React, { useEffect, useRef } from "react";
import { ICategory } from "@/@types/category";
import { CategoryButtonSelector } from "../CategoryButtonSelector";
import { Container } from "./styled";

type CategoriesListProps = {
  categories: ICategory[];
  handleExecuteWhenSelectingCategory?: (name: string) => void;
};

export const CategoriesList: React.FC<CategoriesListProps> = ({
  categories,
  handleExecuteWhenSelectingCategory,
}) => {
  const categoryRef = useRef<any>([]);

  const handleSelectCategory = (name: string, index: number) => {
    categoryRef.current.forEach((value: any, indexArray: number) => {
      if (indexArray === index) {
        categoryRef.current[index].selectCategory(true);

        if (handleExecuteWhenSelectingCategory) {
          handleExecuteWhenSelectingCategory(name);
        }
      } else {
        categoryRef.current[indexArray].selectCategory(false);
      }
    });
  };

  useEffect(() => {
    handleSelectCategory("TODO", 0);
  }, []);

  return (
    <Container>
      {categories.map((category, index) => (
        <CategoryButtonSelector
          key={category.id}
          data={category}
          ref={(reference: never) => {
            categoryRef.current[index] = reference;
          }}
          onClick={() => handleSelectCategory(category.name, index)}
        />
      ))}
    </Container>
  );
};
