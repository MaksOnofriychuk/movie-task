import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TVideosProps } from "../../../../ComponentTypes/types";
import VideoProvider from "../VideoProvider";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Videos: React.FC<TVideosProps> = ({ videos }) => {
  const slicedVideos = videos.slice(0, 6);
  console.log(videos);

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1100px",
        overflow: "scroll",
        "&:first-of-type": {
          borderTopLeftRadius: "10px",
        },
        "&:last-child": {
          borderTopRightRadius: "10px",
        },
      }}
    >
      {slicedVideos &&
        slicedVideos.map((video) => {
          return (
            <Box
              key={video.id}
              sx={{
                minWidth: 500,
                height: 260,
              }}
            >
              <VideoProvider key={video.key} />
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

export default Videos;
