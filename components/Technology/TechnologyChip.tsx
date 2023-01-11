import { FC, useContext } from "react";

import { Chip, useTheme } from "@mui/material";
import { FiltersContext } from "../../context/FiltersContext";

interface Props {
  name: string;
  color: "secondary" | "info" | "warning";
  selected: boolean;
  // onToggle: (name: string, selected: boolean) => void;
}

const TechnologyChip: FC<Props> = (props: Props) => {
  const theme = useTheme();
  const { name, color, selected } = props;
  const toggleFilter = useContext(FiltersContext).toggleFilter;

  const toggleSelect = () => {
    toggleFilter(name, selected);
  };

  return (
    <Chip
      label={name}
      color={selected ? "success" : color}
      sx={{
        margin: "2px",
        border: selected ? `1px solid ${theme.palette[color].main}` : "none",
      }}
      onClick={toggleSelect}
    />
  );
};

export default TechnologyChip;
