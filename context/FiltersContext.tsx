import { createContext, ReactNode, useState } from "react";

interface FiltersContext {
  filters: string[];
  toggleFilter: (filter: string, selected: boolean) => void;
}

interface Props {
  children: ReactNode;
}

export const FiltersContext = createContext<FiltersContext>({
  filters: [],
  toggleFilter: (filter: string, selected: boolean) => {},
});

export default (props: Props) => {
  const [filters, setFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string, selected: boolean) => {
    setFilters((prevFilters) => {
      if (selected) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return prevFilters.concat(filter);
      }
    });
  };

  return (
    <FiltersContext.Provider value={{ filters, toggleFilter }}>
      {props.children}
    </FiltersContext.Provider>
  );
};
