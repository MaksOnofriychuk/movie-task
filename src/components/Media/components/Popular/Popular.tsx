import * as React from "react";
import { Box } from "@mui/system";
import { TPopularProps } from "../../../../ComponentTypes/types";
import VideoProvider from "../VideoProvider";

const Popular: React.FC<TPopularProps> = ({ media }) => {
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
      <Box
        sx={{
          minWidth: "500px",
          height: "260px",
        }}
      >
        <VideoProvider key={media.videos[0].key} />
      </Box>
      <Box
        sx={{
          minWidth: "550px",
          height: "260px",
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={`${process.env.React_App_Image_Base_Path}${media.backdrops[0].filePath}`}
          alt="backdrops"
        />
      </Box>
      <Box
        sx={{
          minWidth: "250px",
          height: "260px",
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={`${process.env.React_App_Image_Base_Path}${media.posters[0].filePath}`}
          alt="poster"
        />
      </Box>
    </Box>
  );
};

export default Popular;
