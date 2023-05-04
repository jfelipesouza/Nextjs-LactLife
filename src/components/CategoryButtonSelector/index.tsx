import React, { useState, forwardRef, useImperativeHandle } from "react";
import { ICategory } from "@/@types/category";
import { Container } from "./styled";

type CategoryButtonSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
  data: ICategory;
};

const CategoryButtonSelector = forwardRef<unknown, CategoryButtonSelectorProps>(
  ({ data, ...props }, ref) => {
    const [inFocus, setFocus] = useState(false);

    useImperativeHandle(ref, () => ({
      selectCategory(focus: boolean) {
        setFocus(focus);
      },
    }));

    return (
      <Container focus={inFocus} {...props}>
        {data.name}
      </Container>
    );
  }
);

export { CategoryButtonSelector };
