import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const GradeCard = () => {
  return (
    <Box sx={{ display: "flex", mb: 2 }}>
      <Box width="44px" height="44px" sx={{ mr: 1 }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://www.themoviedb.org/t/p/w90_and_h90_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg"
          alt="logo"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            lineHeight: "0px",
            fontWeight: "700",
            fontSize: "14px",
          }}
          variant="caption"
        >
          412
        </Typography>
        <Typography sx={{ mt: 1 }} variant="caption">
          raze464
        </Typography>
      </Box>
    </Box>
  );
};

export default GradeCard;
