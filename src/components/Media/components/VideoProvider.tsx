import * as React from "react";
import { Box } from "@mui/system";
import { TVideoProviderProps } from "../../../ComponentTypes/types";

const VideoProvider: React.FC<TVideoProviderProps> = (key) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
      }}
    >
      <iframe
        style={{ borderRadius: "inherit" }}
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${key}`}
        frameBorder="0"
        allow="accelerometer; allow-modals; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      ></iframe>
    </Box>
  );
};

export default VideoProvider;
