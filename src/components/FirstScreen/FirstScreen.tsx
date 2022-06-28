import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";
import { Container } from "@mui/system";
import ImageCard from "./components/ImageCard/ImageCard";
import Info from "./components/Info/Info";

const FirstScreen = () => {
  const { film } = useAppSelector((state) => state.filmReducer);

  if (!film) {
    return (
      <Box>
        <Typography variant="h3">...Loading</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "600px",
        marginTop: "50px",
        width: "100%",
        backgroundImage: `url(${process.env.React_App_Image_Base_Path}/${film.backdrop_path})`,
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
      <Box sx={{ position: "relative", zIndex: "999" }}>
        <Container sx={{ maxWidth: "1400px", display: "flex" }}>
          <Box sx={{ pt: "30px", mr: "30px" }}>
            <ImageCard {...film} />
          </Box>
          <Info {...film} />
        </Container>
      </Box>
    </Box>
  );
};

export default FirstScreen;
