import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TBackdropsProps } from "../../../../ComponentTypes/types";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Backdrops: React.FC<TBackdropsProps> = ({ backdrops }) => {
  const slicedBackdrops = backdrops.slice(0, 7);

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
      {slicedBackdrops &&
        slicedBackdrops.map((backdrop, index) => {
          return (
            <Box
              key={`${backdrop.filePath}${index}`}
              sx={{
                minWidth: "500px",
                height: "260px",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={`${process.env.React_App_Image_Base_Path}${backdrop.filePath}`}
                alt="sonic"
              />
            </Box>
          );
        })}

      <Box
        sx={{
          minWidth: "500px",
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

export default Backdrops;
