import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { COLOR } from "../../../ColorTheme/Theme";
import { getDateMoviesKeywords } from "../../../utils/helpersMovie";
import { TCardMovie } from "../../../ComponentTypes/types";

const CardMovie: React.FC<TCardMovie> = ({
  poster,
  title,
  subtitle,
  releaseDate,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 160,
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
            borderTopLeftRadius: 11,
            borderBottomLeftRadius: 11,
            borderColor: "transparent",
          }}
          src={poster}
          alt="sad"
        />
      </Box>
      <Box sx={{ width: "90%" }}>
        <Typography sx={{ fontWeight: "700", mt: "12px", fontSize: 14 }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: COLOR.grey, fontSize: 14 }}>
          {getDateMoviesKeywords(releaseDate)}
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontSize: 14,
            maxWidth: "90%",
            height: 60,
            overflow: "hidden",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardMovie;
