import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks/redux";
import ViewListIcon from "@mui/icons-material/ViewList";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GradeIcon from "@mui/icons-material/Grade";
import Tooltip from "@mui/material/Tooltip";

import {
  getFullTime,
  getTimeFromMins,
  getYear,
  transformForPercent,
} from "../../../utils/helpersMovie";
import "./info.scss";
import { CircularStatic } from "../CirclePercent/CirclePercent";

const Info = () => {
  const { film } = useAppSelector((state) => state.filmReducer);

  console.log(film);

  const percentageOfPopularity =
    film && transformForPercent(film?.vote_average);

  const releaseYear = film && getYear(film?.release_date);

  const releaseFullTime = film && getFullTime(film?.release_date);

  const movieDuration = film && getTimeFromMins(film?.runtime);

  return (
    <Box className="firstScreen__info">
      <>
        {film && (
          <>
            <Typography
              className="firstScreen__info-title"
              variant="h4"
              component="div"
            >
              {film?.title} {releaseYear}
            </Typography>

            <Box className="firstScreen__info-subtitle">
              <Typography
                variant="overline"
                component="span"
                className="subtitle-pg"
              >
                PG-13
              </Typography>
              <Typography
                variant="overline"
                component="span"
                className="subtitle-date"
              >
                {releaseFullTime} (
                {film?.production_countries.length === 1
                  ? film?.production_countries[0]?.iso_3166_1
                  : film?.production_countries[1]?.iso_3166_1}
                )
              </Typography>
              {film?.genres.map((genre) => {
                return (
                  <Typography
                    key={genre.id}
                    variant="caption"
                    component="span"
                    className="subtitle-genres"
                  >
                    {genre.name}
                  </Typography>
                );
              })}
              <Typography
                variant="caption"
                component="span"
                className="subtitle-hour"
              >
                {movieDuration}
              </Typography>
            </Box>
            <Box className="firstScreen__info-buttons">
              {percentageOfPopularity && (
                <CircularStatic valuePercent={percentageOfPopularity} />
              )}
              <Box className="buttons-text">
                <Typography className="text-top">User</Typography>
                <Typography className="text-bottom">Score</Typography>
              </Box>
              <Box className="buttons__btn-wrapper">
                <Tooltip title="Add to list" arrow className="tooltip">
                  <Typography className="btn-list">
                    <ViewListIcon className="btn__list-img" />
                  </Typography>
                </Tooltip>
                <Tooltip title="Mark as favorite" arrow>
                  <Typography className="btn-list">
                    <FavoriteIcon className="btn__list-img" />
                  </Typography>
                </Tooltip>
                <Tooltip title="Add to your watchlist" arrow>
                  <Typography className="btn-list">
                    <BookmarkIcon className="btn__list-img" />
                  </Typography>
                </Tooltip>
                <Tooltip title="Rate it!" arrow>
                  <Typography className="btn-list">
                    <GradeIcon className="btn__list-img" />
                  </Typography>
                </Tooltip>
              </Box>
            </Box>
            <Box className="firstScreen__info-slogan">
              <Typography
                className="slogan-text"
                variant="subtitle1"
                component="div"
              >
                {film && film.tagline}
              </Typography>
            </Box>
            <Box className="firstScreen__info-overview">
              <Typography
                className="overview-text"
                variant="h6"
                component="div"
              >
                Overview
              </Typography>
            </Box>
            <Box className="firstScreen__info-backstory">
              <Typography
                className="backstory-text"
                variant="body2"
                component="div"
                sx={{ maxWidth: "80%" }}
              >
                {film && film.overview}
              </Typography>
            </Box>

            <Box className="firstScreen__info-movieСredits">
              <Box className="movieСredits">
                <Typography
                  className="movieСredits-top"
                  variant="h6"
                  component="div"
                >
                  David Yates
                </Typography>
                <Typography
                  className="movieСredits-bottom"
                  variant="h6"
                  component="div"
                >
                  Director
                </Typography>
              </Box>
              <Box className="movieСredits">
                <Typography
                  className="movieСredits-top"
                  variant="h6"
                  component="div"
                >
                  J.K. Rowling
                </Typography>
                <Typography
                  className="movieСredits-bottom"
                  variant="h6"
                  component="div"
                >
                  Screenplay
                </Typography>
              </Box>
              <Box className="movieСredits">
                <Typography
                  className="movieСredits-top"
                  variant="h6"
                  component="div"
                >
                  Steve Kloves
                </Typography>
                <Typography
                  className="movieСredits-bottom"
                  variant="h6"
                  component="div"
                >
                  Screenplay
                </Typography>
              </Box>
            </Box>
          </>
        )}
      </>
    </Box>
  );
};

export default Info;
