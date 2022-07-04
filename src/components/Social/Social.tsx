import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import SocialTabs from "./components/Tabs/Tabs";

const Social = () => {
  return (
    <Box sx={{ mt: 1 }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          borderBottom: "1px solid #000",
        }}
      >
        <Typography sx={{ mr: 5, pt: 1 }} variant="h6">
          Social
        </Typography>

        <Box sx={{ width: "100%" }}>
          <SocialTabs />
        </Box>
      </Box>
    </Box>
  );
};

export default Social;
