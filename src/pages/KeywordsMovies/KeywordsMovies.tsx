import * as React from "react";
import { Box } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Button, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getKeywordsMovies } from "../../store/actions/Film";
import { COLOR } from "../../ColorTheme/Theme";
import { getDateMoviesKeywords } from "../../utils/helpersMovie";

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
          height: "120px",
          background: COLOR.main,
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
            sx={{ pl: 4, fontWeight: "500", color: COLOR.white }}
          >
            magic
          </Typography>
          <Typography variant="h4" sx={{ pr: 4, color: COLOR.grey }}>
            {keywordsMovies.length} movies
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <Box sx={{ width: "100%", mb: 3 }}>
            {keywordsMovies &&
              keywordsMovies.map((movie) => {
                return (
                  <Box
                    key={movie.id}
                    sx={{
                      width: "100%",
                      height: "160px",
                      border: 1,
                      borderColor: COLOR.grey,
                      display: "flex",
                      borderRadius: "12px",
                      mb: 3,
                      boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box sx={{ width: "10%", mr: "10px" }}>
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderTopLeftRadius: "11px",
                          borderBottomLeftRadius: "11px",
                          borderColor: "transparent",
                        }}
                        src={movie.posterPath}
                        alt="sad"
                      />
                    </Box>
                    <Box sx={{ width: "90%" }}>
                      <Typography
                        sx={{ fontWeight: "700", mt: "12px", fontSize: "14px" }}
                      >
                        {movie.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: COLOR.grey, fontSize: "14px" }}
                      >
                        {getDateMoviesKeywords(movie.releaseDate)}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 2,
                          fontSize: "14px",
                          maxWidth: "90%",
                          height: "60px",
                          overflow: "hidden",
                        }}
                      >
                        {movie.overview}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default KeywordsMovies;
