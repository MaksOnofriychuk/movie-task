import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { transformNumberFromString } from "../../utils/helpersMovie";
import { COLOR } from "../../ColorTheme/Theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HomeIcon from "@mui/icons-material/Home";
import SocialLink from "./components/SocialLink/SocialLink";
import { TKeywords } from "../../store/reducers/fIlmSlice/types";
import { useNavigate } from "react-router-dom";
import { getKeywordsMovies } from "../../store/actions/Film";

const FilmStatistic = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { film, keywords } = useAppSelector((state) => state.filmReducer);

  if (!film) {
    return (
      <Box>
        <Typography variant="h3">...Loading</Typography>
      </Box>
    );
  }

  const filmLanguage = film.spokenLanguages.find(
    (language) => language.iso_639_1 === film.originalLanguage
  );

  const budgetFilm = transformNumberFromString(film.budget);

  const revenueFilm = transformNumberFromString(film.revenue);

  const toPageKeywordsMovies = (word: TKeywords) => {
    if (word) {
      dispatch(getKeywordsMovies(word.id));
      navigate(`/keyword${word.id}`);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          maxWidth: "200px",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <SocialLink title="Visit Facebook">
          <FacebookIcon sx={{ fontSize: "32px", cursor: "pointer" }} />
        </SocialLink>
        <SocialLink title="Visit Twitter">
          <TwitterIcon sx={{ fontSize: "32px", cursor: "pointer" }} />
        </SocialLink>
        <SocialLink title="Visit Instagram">
          <InstagramIcon sx={{ fontSize: "32px", cursor: "pointer" }} />
        </SocialLink>
        <SocialLink title="Visit JustWatch">
          <PlayArrowIcon sx={{ fontSize: "32px", cursor: "pointer" }} />
        </SocialLink>
        <SocialLink title="Visit Homepage">
          <HomeIcon sx={{ fontSize: "32px", cursor: "pointer" }} />
        </SocialLink>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography>Status</Typography>
        <Typography>{film.status}</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography>Original Language</Typography>
        <Typography>{filmLanguage?.name}</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography>Budget</Typography>
        <Typography>${budgetFilm}</Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography>Revenue</Typography>
        <Typography>${revenueFilm}</Typography>
      </Box>

      <Box>
        <Box sx={{ mb: 1 }}>
          <Typography>Keywords</Typography>
        </Box>
        <Box
          sx={{
            maxWidth: "240px",
            maxHeight: "400px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {keywords &&
            keywords.map((word) => (
              <Typography
                onClick={() => toPageKeywordsMovies(word)}
                key={word.id}
                sx={{
                  border: 1,
                  padding: "10px 10px",
                  borderColor: "transparent",
                  background: COLOR.grey,
                  borderRadius: "4px",
                  mr: 1,
                  mb: 1,
                  lineHeight: "0",
                  color: COLOR.white,
                  letterSpacing: "0",
                  cursor: "pointer",
                }}
                variant="caption"
                component="span"
              >
                {word.name}
              </Typography>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default FilmStatistic;
