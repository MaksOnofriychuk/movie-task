import { Box, Typography } from "@mui/material";
import * as React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GradeIcon from "@mui/icons-material/Grade";
import { getFullTime } from "../../utils/helpersMovie";

interface IHoverBlockProps {
  releaseDate: string;
}

const HoverBlock: React.FC<IHoverBlockProps> = ({ releaseDate }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "47px",
        left: "0px",
        zIndex: "999",
        width: "100%",
        display: "flex",
        height: "20%",
        background: "#fff",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: 1,
          width: "30%",
          justifyContent: "space-between",
        }}
      >
        <CalendarMonthIcon sx={{ fontSize: "16px" }} />
        <Typography variant="caption">{getFullTime(releaseDate)}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          p: 1,
          width: "20%",
          justifyContent: "space-between",
        }}
      >
        <FavoriteIcon sx={{ fontSize: "14px" }} />
        <BookmarkIcon sx={{ fontSize: "14px" }} />
        <GradeIcon sx={{ fontSize: "14px" }} />
      </Box>
    </Box>
  );
};

export default HoverBlock;
