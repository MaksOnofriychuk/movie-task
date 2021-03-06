import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { COLOR } from "../../ColorTheme/Theme";
import SocialTabs from "./components/Tabs/Tabs";

const Social = () => {
  return (
    <Box sx={{ mt: 1 }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
        }}
      >
        <Typography sx={{ mr: 5, pt: 1 }} variant="h6">
          Social
        </Typography>

        <SocialTabs />
      </Box>
      <Box sx={{ height: "1px", width: "98%", background: COLOR.black }}></Box>
    </Box>
  );
};

export default Social;
