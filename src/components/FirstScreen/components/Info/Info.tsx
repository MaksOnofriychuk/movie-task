import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import { CircularStatic } from "../CirclePercent/CirclePercent";
import { COLOR } from "../../../../ColorTheme/Theme";
import { TInfoProps } from "../../../../ComponentTypes/types";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { addLike } from "../../../../store/reducers/fIlmSlice/filmSlice";
import {
  getFullTime,
  getTimeFromMins,
  getYear,
  transformForPercent,
} from "../../../../utils/helpersMovie";
import ViewListIcon from "@mui/icons-material/ViewList";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GradeIcon from "@mui/icons-material/Grade";
import Tooltip from "@mui/material/Tooltip";

const Info: React.FC<TInfoProps> = ({
  voteAverage,
  releaseDate,
  runtime,
  title,
  productionCountries,
  genres,
  tagline,
  overview,
}) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [likes, setLikes] = React.useState<boolean>(false);

  const { likesData } = useAppSelector((state) => state.filmReducer);

  const percentageOfPopularity = transformForPercent(voteAverage);

  const releaseYear = getYear(releaseDate);

  const releaseFullTime = getFullTime(releaseDate);

  const movieDuration = getTimeFromMins(runtime);

  const toggleLike = () => {
    setLikes(!likes);
    const URL_BASE_PATH_FILM = "http://localhost:3000";
    const likeData = {
      id: String(new Date()),
      link: `${URL_BASE_PATH_FILM}${location.pathname}`,
    };

    likesData && dispatch(addLike(likeData));
  };

  const showLinkFilm = () => {
    console.log(likesData.map((like) => like.link));
  };

  return (
    <Box sx={{ mt: "100px" }}>
      <Typography
        sx={{
          color: COLOR.white,
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          "&:hover": { color: "rgb(187, 177, 177)" },
        }}
        variant="h4"
      >
        {title} {releaseYear}
      </Typography>

      <Box sx={{ mb: "20px" }}>
        <Typography
          sx={{
            color: "rgb(187, 177, 177)",
            border: 1,
            borderColor: "rgb(187, 177, 177)",
            p: "2px 5px",
            mr: "10px",
          }}
          variant="overline"
          component="span"
        >
          PG-13
        </Typography>
        <Typography
          sx={{
            position: "relative",
            color: COLOR.white,
            fontFamily: "14px",
          }}
          variant="overline"
          component="span"
        >
          {releaseFullTime} (
          {productionCountries.length === 1
            ? productionCountries[0]?.iso_3166_1
            : productionCountries[1]?.iso_3166_1}
          )
          <Box
            sx={{
              position: "absolute",
              bottom: "4px",
              right: "-10px",
              width: "4px",
              height: "4px",
              backgroundColor: COLOR.white,
              borderRadius: "50%",
            }}
          ></Box>
        </Typography>

        {genres.map((genre) => {
          return (
            <Typography
              sx={{
                color: COLOR.white,
                pl: "15px",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": { color: "rgb(187, 177, 177)" },
              }}
              key={genre.id}
              variant="caption"
              component="span"
            >
              {genre.name}
            </Typography>
          );
        })}

        <Typography
          sx={{
            color: COLOR.white,
            pl: "15px",
            fontSize: "14px",
            position: "relative",
          }}
          variant="caption"
          component="span"
        >
          {movieDuration}
          <Box
            sx={{
              position: "absolute",
              bottom: "4px",
              left: "5px",
              width: "4px",
              height: "4px",
              backgroundColor: COLOR.white,
              borderRadius: "50%",
            }}
          ></Box>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: "50px",
          cursor: "pointer",
        }}
      >
        <CircularStatic valuePercent={percentageOfPopularity} />
        <Box sx={{ display: "inline-block", ml: "20px", mr: "20px" }}>
          <Typography
            sx={{ color: COLOR.white, fontWeight: "bold", mb: "10px" }}
          >
            User
          </Typography>
          <Typography
            sx={{ color: COLOR.white, fontWeight: "bold", lineHeight: "0" }}
          >
            Score
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "240px",
            justifyContent: "space-between",
          }}
        >
          <Tooltip title="Add to list" arrow>
            <Typography
              sx={{
                display: "flex",
                width: "40px",
                justifyContent: "center",
                backgroundColor: "#203445",
                alignItems: "center",
                height: "40px",
                borderRadius: "50%",
              }}
            >
              <ViewListIcon sx={{ fontSize: "16px", color: COLOR.white }} />
            </Typography>
          </Tooltip>
          <Tooltip onClick={toggleLike} title="Mark as favorite" arrow>
            <Typography
              sx={{
                display: "flex",
                width: "40px",
                justifyContent: "center",
                backgroundColor: COLOR.main,
                alignItems: "center",
                height: "40px",
                borderRadius: "50%",
              }}
            >
              {!likes ? (
                <FavoriteIcon sx={{ fontSize: "16px", color: COLOR.white }} />
              ) : (
                <FavoriteIcon sx={{ fontSize: "16px", color: COLOR.black }} />
              )}
            </Typography>
          </Tooltip>
          <Tooltip title="Add to your watchlist" arrow>
            <Typography
              sx={{
                display: "flex",
                width: "40px",
                justifyContent: "center",
                backgroundColor: COLOR.main,
                alignItems: "center",
                height: "40px",
                borderRadius: "50%",
              }}
            >
              <BookmarkIcon sx={{ fontSize: "16px", color: COLOR.white }} />
            </Typography>
          </Tooltip>
          <Tooltip title="Rate it!" arrow>
            <Typography
              sx={{
                display: "flex",
                width: "40px",
                justifyContent: "center",
                backgroundColor: COLOR.main,
                alignItems: "center",
                height: "40px",
                borderRadius: "50%",
              }}
            >
              <GradeIcon sx={{ fontSize: "16px", color: COLOR.white }} />
            </Typography>
          </Tooltip>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ color: "rgb(187, 177, 177)", mb: "5px" }}
          variant="subtitle1"
          component="div"
        >
          {tagline}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ color: "rgb(187, 177, 177)", mb: "5px" }}
          variant="h6"
          component="div"
        >
          Overview
        </Typography>
      </Box>
      <Box sx={{ mb: "20px" }}>
        <Typography
          className="backstory-text"
          variant="body2"
          component="div"
          sx={{ maxWidth: "80%", color: COLOR.white }}
        >
          {overview}
        </Typography>
      </Box>
      {likesData.length > 0 && (
        <Button
          sx={{ position: "absolute", bottom: "-52px", right: "0px" }}
          onClick={showLinkFilm}
        >
          Button likes - length:{likesData.length}
        </Button>
      )}
    </Box>
  );
};

export default Info;
