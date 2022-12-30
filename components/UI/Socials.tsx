import { FC } from "react";

import { IconButton, Tooltip } from "@mui/material";
import { Email, GitHub, Twitter } from "@mui/icons-material";

interface Props {
  iconColor: string;
  hoverColor: string;
}

const Socials: FC<Props> = ({ iconColor, hoverColor }: Props) => {
  return (
    <>
      <Tooltip title="Twitter">
        <IconButton
          aria-label="twitter.com"
          onClick={() => window.open("https://twitter.com/saulpxrl", "_blank")}
          sx={{
            color: iconColor,
            "&.MuiIconButton-root:hover": { color: hoverColor },
          }}
        >
          <Twitter sx={{ transition: "color 275ms linear" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub">
        <IconButton
          aria-label="github.com"
          onClick={() => window.open("https://github.com/saulprl", "_blank")}
          sx={{
            color: iconColor,
            "&.MuiIconButton-root:hover": { color: hoverColor },
          }}
        >
          <GitHub sx={{ transition: "color 275ms linear" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Email">
        <IconButton
          aria-label="e-mail"
          onClick={() => window.open("mailto:saulramos378@gmail.com", "_blank")}
          sx={{
            color: iconColor,
            "&.MuiIconButton-root:hover": { color: hoverColor },
          }}
        >
          <Email sx={{ transition: "color 275ms linear" }} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Socials;
