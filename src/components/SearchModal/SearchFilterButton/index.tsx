import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Button } from "./styled";

type SearchFilterButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
};
const SearchFilterButton = forwardRef<unknown, SearchFilterButtonProps>(
  ({ name, ...props }, ref) => {
    const [focus, setFocus] = useState(false);

    useImperativeHandle(ref, () => ({
      selectCategory(focus: boolean) {
        setFocus(focus);
      },
    }));
    useEffect(() => {}, []);
    return (
      <Button focus={focus} {...props}>
        {name}
      </Button>
    );
  }
);

export { SearchFilterButton };
