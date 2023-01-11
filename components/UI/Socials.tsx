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
          LinkComponent="a"
          href="https://twitter.com/saulpxrl"
          target="_blank"
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
          LinkComponent="a"
          href="https://github.com/saulprl"
          target="_blank"
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
          LinkComponent="a"
          href="mailto:saulramos378@gmail.com"
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
