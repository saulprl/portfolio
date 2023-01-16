import { FC, KeyboardEvent, useState } from "react";

import { Box, IconButton, Modal, Tooltip, useTheme } from "@mui/material";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";

import classes from "../../styles/ImageViewer.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const DICTIONARY = {
  "en-US": {
    close: "Close",
    previous: "Previous",
    next: "Next",
  },
  "es-MX": {
    close: "Cerrar",
    previous: "Anterior",
    next: "Siguiente",
  },
};

interface Props {
  name: string;
  open: boolean;
  onClose: () => void;
  images: string[];
}

const ImageViewer: FC<Props> = (props: Props) => {
  const { name, open, onClose, images } = props;

  const theme = useTheme();
  const { locale } = useRouter();
  const [index, setIndex] = useState(0);

  const imageSource = images[index];
  const dict = DICTIONARY[locale! as keyof typeof DICTIONARY];

  const closeModalHandler = () => {
    onClose();
  };

  const previousImageHandler = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const nextImageHandler = () => {
    setIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const keyPressHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "Escape":
        closeModalHandler();
        break;
      case "ArrowLeft":
        previousImageHandler();
        break;
      case "ArrowRight":
        nextImageHandler();
        break;
      default:
        return;
    }
  };

  return (
    <Modal open={open} onClose={closeModalHandler}>
      <div onKeyDown={keyPressHandler}>
        <Tooltip title={dict.close} placement="bottom">
          <IconButton
            onClick={closeModalHandler}
            className={classes["close-btn"]}
          >
            <Close />
          </IconButton>
        </Tooltip>
        <Tooltip title={dict.previous} placement="right">
          <span className={classes["previous-btn"]}>
            <IconButton
              disabled={images.length < 2}
              onClick={previousImageHandler}
              // className={classes["previous-btn"]}
            >
              <ArrowBack />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title={dict.next} placement="left">
          <span className={classes["next-btn"]}>
            <IconButton disabled={images.length < 2} onClick={nextImageHandler}>
              <ArrowForward />
            </IconButton>
          </span>
        </Tooltip>
        <Box className={classes["image-container"]}>
          <Image
            src={imageSource}
            alt={`${name} ${index + 1}`}
            fill
            sizes="90vw"
            className={classes["image-item"]}
          />
        </Box>
      </div>
    </Modal>
  );
};

export default ImageViewer;
