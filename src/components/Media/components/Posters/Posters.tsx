import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { TPosters } from "../../../../store/reducers/fIlmSlice/types";

interface IPostersProps {
  posters: TPosters[];
}

const Posters: React.FC<IPostersProps> = ({ posters }) => {
  const slicedPosters = posters.slice(0, 7);
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1100px",
        overflow: "scroll",
        "&:first-child": {
          borderTopLeftRadius: "10px",
        },
        "&:last-child": {
          borderTopRightRadius: "10px",
        },
      }}
    >
      {slicedPosters &&
        slicedPosters.map((poster, index) => {
          return (
            <Box
              key={`${poster.filePath}${index}`}
              sx={{
                minWidth: "200px",
                height: "260px",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={`${process.env.React_App_Image_Base_Path}${poster.filePath}`}
                alt="poster"
              />
            </Box>
          );
        })}
      <Box
        sx={{
          minWidth: "200px",
          height: "260px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            pl: 2,
            fontSize: "22px",
            display: "flex",
            alignItems: "center",
          }}
        >
          View More
          <ArrowRightAltIcon />
        </Typography>
      </Box>
    </Box>
  );
};

export default Posters;
