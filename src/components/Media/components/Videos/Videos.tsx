import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import VideoProvider from "../VideoProvider";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { TVideos } from "../../../../store/reducers/fIlmSlice/types";

interface IVideosProps {
  videos: TVideos[];
}

const Videos: React.FC<IVideosProps> = ({ videos }) => {
  const slicedVideos = videos.slice(0, 6);

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
      {slicedVideos &&
        slicedVideos.map((video) => {
          return (
            <Box
              key={video.id}
              sx={{
                minWidth: "500px",
                height: "260px",
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
