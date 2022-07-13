import * as React from "react";
import { Box } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Button, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getKeywordsMovies } from "../../store/actions/Film";
import { theme } from "../../ColorTheme/Theme";
import CardMovie from "./components/CardMovie";

const KeywordsMovies = () => {
  const dispatch = useAppDispatch();

  const params = useParams();

  const id = params.id;

  const { keywordsMovies } = useAppSelector((state) => state.filmReducer);

  const getResetMovies = () => {
    dispatch(getKeywordsMovies(Number(id)));
  };

  if (!keywordsMovies.length) {
    return (
      <Box>
        <Typography>...Loading</Typography>
        <Button onClick={getResetMovies}>reset</Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 120,
          background: theme.palette.primary.main,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              pl: 4,
              fontWeight: "500",
              color: theme.palette.primary.contrastText,
            }}
          >
            magic
          </Typography>
          <Typography
            variant="h4"
            sx={{ pr: 4, color: theme.palette.primary.light }}
          >
            {keywordsMovies.length} movies
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <Box sx={{ width: "100%", mb: 3 }}>
            {keywordsMovies &&
              keywordsMovies.map((movie) => {
                return (
                  <CardMovie
                    key={movie.id}
                    poster={movie.posterPath}
                    title={movie.title}
                    subtitle={movie.overview}
                    releaseDate={movie.releaseDate}
                  />
                );
              })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default KeywordsMovies;
