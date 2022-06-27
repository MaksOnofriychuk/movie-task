import * as React from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";
import { Container } from "@mui/system";
import ImageCard from "./ImageCard/ImageCard";
import Info from "./Info/Info";
import "./firstScreen.scss";

const FirstScreen = () => {
  const { film } = useAppSelector((state) => state.filmReducer);

  return (
    <Box
      sx={{
        height: "600px",
        marginTop: "50px",
        width: "100%",
        backgroundImage: `url(${process.env.React_App_Image_Base_Path}/${film?.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "118% 140%",
        backgroundPosition: "0px 0px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(to right, #111111 30%, #418f48 100%)",
          width: "100%",
          height: "100%",
          opacity: "0.9",
          position: "absolute",
          zIndex: "1",
        }}
      ></Box>
      <Box style={{ position: "relative", zIndex: "999" }}>
        <Container style={{ maxWidth: "1400px", display: "flex" }}>
          <Box className="card__wrapper">
            <ImageCard />
          </Box>
          <Info />
        </Container>
      </Box>
    </Box>
  );
};

export default FirstScreen;
