import * as React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppSelector } from "../../hooks/redux";
import { theme } from "../../ColorTheme/Theme";

const Collection = () => {
  const { film } = useAppSelector((state) => state.filmReducer);
  if (!film?.belongsToCollection) {
    return (
      <Box>
        <Typography>...Loading</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ borderBottom: 1, pb: 3, mb: 5 }}>
      <Box
        sx={{
          background: `url(${film?.belongsToCollection?.backdrop_path})`,
          width: "100%",
          height: "260px",
          borderRadius: "12px",
          opacity: "0.9",
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0px 0px",
          backgroundSize: "100% 200%",
          zIndex: "1",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(to right, #111111 30%, #418f48 100%)",
            width: "100%",
            height: "100%",
            opacity: "0.9",
            position: "absolute",
            zIndex: "2",
            borderRadius: "inherit",
          }}
        ></Box>
        <Box
          sx={{
            position: "relative",
            zIndex: "999",
            p: 5,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.primary.contrastText,
              fontWeight: "700",
              fontSize: "1.75rem",
              display: "block",
            }}
          >
            Part of the {film.belongsToCollection.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.primary.contrastText,
              fontSize: "18px",
              mb: 2,
              display: "block",
            }}
          >
            Includes {film.title}
          </Typography>
          <Button
            sx={{
              lineHeight: "0px",
              background: "#2E2234",
              color: theme.palette.primary.contrastText,
              borderRadius: "14px",
              padding: "8px 20px",
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: "700" }}>
              VIEW THE COLLECTION
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Collection;
